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
 * 组信息，用于用户组、主机组
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 组名称
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
 * CreateDeviceGroup返回参数结构体
 * @class
 */
class CreateDeviceGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建成功的资产组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAcls请求参数结构体
 * @class
 */
class DeleteAclsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的权限ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;

    }
}

/**
 * AddDeviceGroupMembers返回参数结构体
 * @class
 */
class AddDeviceGroupMembersResponse extends  AbstractModel {
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
 * ModifyUser请求参数结构体
 * @class
 */
class ModifyUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 用户姓名，最大长度20个字符，不能包含空格
         * @type {string || null}
         */
        this.RealName = null;

        /**
         * 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 电子邮件
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
         * @type {string || null}
         */
        this.ValidateFrom = null;

        /**
         * 用户失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则用户长期有效
         * @type {string || null}
         */
        this.ValidateTo = null;

        /**
         * 所属用户组ID集合
         * @type {Array.<number> || null}
         */
        this.GroupIdSet = null;

        /**
         * 认证方式，0 - 本地，1 - LDAP，2 - OAuth 不传则默认为0
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
         * @type {string || null}
         */
        this.ValidateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ValidateFrom = 'ValidateFrom' in params ? params.ValidateFrom : null;
        this.ValidateTo = 'ValidateTo' in params ? params.ValidateTo : null;
        this.GroupIdSet = 'GroupIdSet' in params ? params.GroupIdSet : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ValidateTime = 'ValidateTime' in params ? params.ValidateTime : null;

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
         * 待删除的用户ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;

    }
}

/**
 * DeleteDeviceGroupMembers返回参数结构体
 * @class
 */
class DeleteDeviceGroupMembersResponse extends  AbstractModel {
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
 * AddUserGroupMembers返回参数结构体
 * @class
 */
class AddUserGroupMembersResponse extends  AbstractModel {
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
 * DescribeDasbImageIds返回参数结构体
 * @class
 */
class DescribeDasbImageIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础镜像ID
         * @type {string || null}
         */
        this.BaseImageId = null;

        /**
         * AI镜像ID
         * @type {string || null}
         */
        this.AiImageId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaseImageId = 'BaseImageId' in params ? params.BaseImageId : null;
        this.AiImageId = 'AiImageId' in params ? params.AiImageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 新建用户的ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * AddUserGroupMembers请求参数结构体
 * @class
 */
class AddUserGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 成员用户ID集合
         * @type {Array.<number> || null}
         */
        this.MemberIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MemberIdSet = 'MemberIdSet' in params ? params.MemberIdSet : null;

    }
}

/**
 * DescribeUserGroups请求参数结构体
 * @class
 */
class DescribeUserGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

        /**
         * 用户组名，模糊查询,长度：0-64字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分页偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数量，缺省20，最大500
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
        this.IdSet = 'IdSet' in params ? params.IdSet : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUserGroupMembers返回参数结构体
 * @class
 */
class DescribeUserGroupMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组成员总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户组成员列表
         * @type {Array.<User> || null}
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
                let obj = new User();
                obj.deserialize(params.UserSet[z]);
                this.UserSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 新建成功的用户组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevices返回参数结构体
 * @class
 */
class DescribeDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资产信息列表
         * @type {Array.<Device> || null}
         */
        this.DeviceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DeviceSet) {
            this.DeviceSet = new Array();
            for (let z in params.DeviceSet) {
                let obj = new Device();
                obj.deserialize(params.DeviceSet[z]);
                this.DeviceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserGroupMembers请求参数结构体
 * @class
 */
class DescribeUserGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * true - 查询已添加到该用户组的用户，false - 查询未添加到该用户组的用户
         * @type {boolean || null}
         */
        this.Bound = null;

        /**
         * 用户名或用户姓名，最长64个字符，模糊查询
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分页偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数量，默认20, 最大500
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Bound = 'Bound' in params ? params.Bound : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateAcl请求参数结构体
 * @class
 */
class CreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限名称，最大32字符，不能包含空白字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否开启磁盘映射
         * @type {boolean || null}
         */
        this.AllowDiskRedirect = null;

        /**
         * 是否允许任意账号登录
         * @type {boolean || null}
         */
        this.AllowAnyAccount = null;

        /**
         * 是否开启剪贴板文件上行
         * @type {boolean || null}
         */
        this.AllowClipFileUp = null;

        /**
         * 是否开启剪贴板文件下行
         * @type {boolean || null}
         */
        this.AllowClipFileDown = null;

        /**
         * 是否开启剪贴板文本（含图片）上行
         * @type {boolean || null}
         */
        this.AllowClipTextUp = null;

        /**
         * 是否开启剪贴板文本（含图片）下行
         * @type {boolean || null}
         */
        this.AllowClipTextDown = null;

        /**
         * 是否开启 SFTP 文件上传
         * @type {boolean || null}
         */
        this.AllowFileUp = null;

        /**
         * 文件传输上传大小限制（预留参数，目前暂未使用）
         * @type {number || null}
         */
        this.MaxFileUpSize = null;

        /**
         * 是否开启 SFTP 文件下载
         * @type {boolean || null}
         */
        this.AllowFileDown = null;

        /**
         * 文件传输下载大小限制（预留参数，目前暂未使用）
         * @type {number || null}
         */
        this.MaxFileDownSize = null;

        /**
         * 关联的用户ID集合
         * @type {Array.<number> || null}
         */
        this.UserIdSet = null;

        /**
         * 关联的用户组ID
         * @type {Array.<number> || null}
         */
        this.UserGroupIdSet = null;

        /**
         * 关联的资产ID集合
         * @type {Array.<number> || null}
         */
        this.DeviceIdSet = null;

        /**
         * 关联的资产组ID
         * @type {Array.<number> || null}
         */
        this.DeviceGroupIdSet = null;

        /**
         * 关联的账号
         * @type {Array.<string> || null}
         */
        this.AccountSet = null;

        /**
         * 关联的高危命令模板ID
         * @type {Array.<number> || null}
         */
        this.CmdTemplateIdSet = null;

        /**
         * 是否开启rdp磁盘映射文件上传
         * @type {boolean || null}
         */
        this.AllowDiskFileUp = null;

        /**
         * 是否开启rdp磁盘映射文件下载
         * @type {boolean || null}
         */
        this.AllowDiskFileDown = null;

        /**
         * 是否开启rz sz文件上传
         * @type {boolean || null}
         */
        this.AllowShellFileUp = null;

        /**
         * 是否开启rz sz文件下载
         * @type {boolean || null}
         */
        this.AllowShellFileDown = null;

        /**
         * 是否开启 SFTP 文件删除
         * @type {boolean || null}
         */
        this.AllowFileDel = null;

        /**
         * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
         * @type {string || null}
         */
        this.ValidateFrom = null;

        /**
         * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
         * @type {string || null}
         */
        this.ValidateTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AllowDiskRedirect = 'AllowDiskRedirect' in params ? params.AllowDiskRedirect : null;
        this.AllowAnyAccount = 'AllowAnyAccount' in params ? params.AllowAnyAccount : null;
        this.AllowClipFileUp = 'AllowClipFileUp' in params ? params.AllowClipFileUp : null;
        this.AllowClipFileDown = 'AllowClipFileDown' in params ? params.AllowClipFileDown : null;
        this.AllowClipTextUp = 'AllowClipTextUp' in params ? params.AllowClipTextUp : null;
        this.AllowClipTextDown = 'AllowClipTextDown' in params ? params.AllowClipTextDown : null;
        this.AllowFileUp = 'AllowFileUp' in params ? params.AllowFileUp : null;
        this.MaxFileUpSize = 'MaxFileUpSize' in params ? params.MaxFileUpSize : null;
        this.AllowFileDown = 'AllowFileDown' in params ? params.AllowFileDown : null;
        this.MaxFileDownSize = 'MaxFileDownSize' in params ? params.MaxFileDownSize : null;
        this.UserIdSet = 'UserIdSet' in params ? params.UserIdSet : null;
        this.UserGroupIdSet = 'UserGroupIdSet' in params ? params.UserGroupIdSet : null;
        this.DeviceIdSet = 'DeviceIdSet' in params ? params.DeviceIdSet : null;
        this.DeviceGroupIdSet = 'DeviceGroupIdSet' in params ? params.DeviceGroupIdSet : null;
        this.AccountSet = 'AccountSet' in params ? params.AccountSet : null;
        this.CmdTemplateIdSet = 'CmdTemplateIdSet' in params ? params.CmdTemplateIdSet : null;
        this.AllowDiskFileUp = 'AllowDiskFileUp' in params ? params.AllowDiskFileUp : null;
        this.AllowDiskFileDown = 'AllowDiskFileDown' in params ? params.AllowDiskFileDown : null;
        this.AllowShellFileUp = 'AllowShellFileUp' in params ? params.AllowShellFileUp : null;
        this.AllowShellFileDown = 'AllowShellFileDown' in params ? params.AllowShellFileDown : null;
        this.AllowFileDel = 'AllowFileDel' in params ? params.AllowFileDel : null;
        this.ValidateFrom = 'ValidateFrom' in params ? params.ValidateFrom : null;
        this.ValidateTo = 'ValidateTo' in params ? params.ValidateTo : null;

    }
}

/**
 * DeleteUserGroups请求参数结构体
 * @class
 */
class DeleteUserGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的用户组ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;

    }
}

/**
 * 用户信息
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名, 3-20个字符 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户姓名， 最大20个字符，不能包含空白字符
         * @type {string || null}
         */
        this.RealName = null;

        /**
         * 手机号码， 大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 电子邮件
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
         * @type {string || null}
         */
        this.ValidateFrom = null;

        /**
         * 用户失效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
         * @type {string || null}
         */
        this.ValidateTo = null;

        /**
         * 所属用户组列表
         * @type {Array.<Group> || null}
         */
        this.GroupSet = null;

        /**
         * 认证方式，0 - 本地，1 - LDAP，2 - OAuth
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
         * @type {string || null}
         */
        this.ValidateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ValidateFrom = 'ValidateFrom' in params ? params.ValidateFrom : null;
        this.ValidateTo = 'ValidateTo' in params ? params.ValidateTo : null;

        if (params.GroupSet) {
            this.GroupSet = new Array();
            for (let z in params.GroupSet) {
                let obj = new Group();
                obj.deserialize(params.GroupSet[z]);
                this.GroupSet.push(obj);
            }
        }
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ValidateTime = 'ValidateTime' in params ? params.ValidateTime : null;

    }
}

/**
 * ModifyAcl返回参数结构体
 * @class
 */
class ModifyAclResponse extends  AbstractModel {
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
 * 资产信息
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 实例ID，对应CVM、CDB等实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资产名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 公网IP
         * @type {string || null}
         */
        this.PublicIp = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 地域编码
         * @type {string || null}
         */
        this.ApCode = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 资产类型 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
         * @type {number || null}
         */
        this.Kind = null;

        /**
         * 管理端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 所属资产组列表
         * @type {Array.<Group> || null}
         */
        this.GroupSet = null;

        /**
         * 资产绑定的账号数
         * @type {number || null}
         */
        this.AccountCount = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 堡垒机服务信息，注意没有绑定服务时为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Resource || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PublicIp = 'PublicIp' in params ? params.PublicIp : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.ApCode = 'ApCode' in params ? params.ApCode : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.GroupSet) {
            this.GroupSet = new Array();
            for (let z in params.GroupSet) {
                let obj = new Group();
                obj.deserialize(params.GroupSet[z]);
                this.GroupSet.push(obj);
            }
        }
        this.AccountCount = 'AccountCount' in params ? params.AccountCount : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.Resource) {
            let obj = new Resource();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }

    }
}

/**
 * DescribeAcls请求参数结构体
 * @class
 */
class DescribeAclsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问权限ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

        /**
         * 访问权限名称，模糊查询，最长64字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分页偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数量，默认20，最大500
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否根据Name进行精确查询，默认值false
         * @type {boolean || null}
         */
        this.Exact = null;

        /**
         * 有访问权限的用户ID集合
         * @type {Array.<number> || null}
         */
        this.AuthorizedUserIdSet = null;

        /**
         * 有访问权限的资产ID集合
         * @type {Array.<number> || null}
         */
        this.AuthorizedDeviceIdSet = null;

        /**
         * 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Exact = 'Exact' in params ? params.Exact : null;
        this.AuthorizedUserIdSet = 'AuthorizedUserIdSet' in params ? params.AuthorizedUserIdSet : null;
        this.AuthorizedDeviceIdSet = 'AuthorizedDeviceIdSet' in params ? params.AuthorizedDeviceIdSet : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteDeviceGroups请求参数结构体
 * @class
 */
class DeleteDeviceGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的资产组ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;

    }
}

/**
 * DeleteUserGroupMembers请求参数结构体
 * @class
 */
class DeleteUserGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 需删除的成员用户ID集合
         * @type {Array.<number> || null}
         */
        this.MemberIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MemberIdSet = 'MemberIdSet' in params ? params.MemberIdSet : null;

    }
}

/**
 * DescribeDasbImageIds请求参数结构体
 * @class
 */
class DescribeDasbImageIdsRequest extends  AbstractModel {
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
 * DeleteDeviceGroupMembers请求参数结构体
 * @class
 */
class DeleteDeviceGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 需要删除的资产ID集合
         * @type {Array.<number> || null}
         */
        this.MemberIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MemberIdSet = 'MemberIdSet' in params ? params.MemberIdSet : null;

    }
}

/**
 * 堡垒机服务信息
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务实例ID，如bh-saas-s3ed4r5e
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 地域编码
         * @type {string || null}
         */
        this.ApCode = null;

        /**
         * 服务实例规格信息
         * @type {string || null}
         */
        this.SvArgs = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 服务规格对应的资产数
         * @type {number || null}
         */
        this.Nodes = null;

        /**
         * 自动续费标记，0 - 表示默认状态，1 - 表示自动续费，2 - 表示明确不自动续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 资源状态，0 - 未初始化，1 - 正常，2 - 隔离，3 - 销毁，4 - 初始化失败，5 - 初始化中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 服务实例名，如T-Sec-堡垒机（SaaS型）
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 定价模型ID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 资源创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 商品码, p_cds_dasb
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 子商品码, sp_cds_dasb_bh_saas
         * @type {string || null}
         */
        this.SubProductCode = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 是否过期，true-过期，false-未过期
         * @type {boolean || null}
         */
        this.Expired = null;

        /**
         * 是否开通，true-开通，false-未开通
         * @type {boolean || null}
         */
        this.Deployed = null;

        /**
         * 开通服务的 VPC 名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 开通服务的 VPC 对应的网段
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 开通服务的子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 开通服务的子网名称
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 开通服务的子网网段
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 外部IP
         * @type {Array.<string> || null}
         */
        this.PublicIpSet = null;

        /**
         * 内部IP
         * @type {Array.<string> || null}
         */
        this.PrivateIpSet = null;

        /**
         * 服务开通的高级功能列表，如:[DB]
         * @type {Array.<string> || null}
         */
        this.ModuleSet = null;

        /**
         * 已使用的授权点数
         * @type {number || null}
         */
        this.UsedNodes = null;

        /**
         * 扩展点数
         * @type {number || null}
         */
        this.ExtendPoints = null;

        /**
         * 带宽扩展包个数(4M)
         * @type {number || null}
         */
        this.PackageBandwidth = null;

        /**
         * 授权点数扩展包个数(50点)
         * @type {number || null}
         */
        this.PackageNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ApCode = 'ApCode' in params ? params.ApCode : null;
        this.SvArgs = 'SvArgs' in params ? params.SvArgs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.SubProductCode = 'SubProductCode' in params ? params.SubProductCode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Expired = 'Expired' in params ? params.Expired : null;
        this.Deployed = 'Deployed' in params ? params.Deployed : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.PublicIpSet = 'PublicIpSet' in params ? params.PublicIpSet : null;
        this.PrivateIpSet = 'PrivateIpSet' in params ? params.PrivateIpSet : null;
        this.ModuleSet = 'ModuleSet' in params ? params.ModuleSet : null;
        this.UsedNodes = 'UsedNodes' in params ? params.UsedNodes : null;
        this.ExtendPoints = 'ExtendPoints' in params ? params.ExtendPoints : null;
        this.PackageBandwidth = 'PackageBandwidth' in params ? params.PackageBandwidth : null;
        this.PackageNode = 'PackageNode' in params ? params.PackageNode : null;

    }
}

/**
 * DeleteUserGroups返回参数结构体
 * @class
 */
class DeleteUserGroupsResponse extends  AbstractModel {
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
 * BindDeviceResource请求参数结构体
 * @class
 */
class BindDeviceResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产ID集合
         * @type {Array.<number> || null}
         */
        this.DeviceIdSet = null;

        /**
         * 堡垒机服务ID
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceIdSet = 'DeviceIdSet' in params ? params.DeviceIdSet : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * CreateDeviceGroup请求参数结构体
 * @class
 */
class CreateDeviceGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组名，最大长度32字符
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
 * CreateAcl返回参数结构体
 * @class
 */
class CreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建成功的访问权限ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAcls返回参数结构体
 * @class
 */
class DescribeAclsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问权限总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 访问权限列表
         * @type {Array.<Acl> || null}
         */
        this.AclSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AclSet) {
            this.AclSet = new Array();
            for (let z in params.AclSet) {
                let obj = new Acl();
                obj.deserialize(params.AclSet[z]);
                this.AclSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 用户总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户列表
         * @type {Array.<User> || null}
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
                let obj = new User();
                obj.deserialize(params.UserSet[z]);
                this.UserSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 访问权限
 * @class
 */
class Acl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问权限ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 访问权限名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否开启磁盘映射
         * @type {boolean || null}
         */
        this.AllowDiskRedirect = null;

        /**
         * 是否开启剪贴板文件上行
         * @type {boolean || null}
         */
        this.AllowClipFileUp = null;

        /**
         * 是否开启剪贴板文件下行
         * @type {boolean || null}
         */
        this.AllowClipFileDown = null;

        /**
         * 是否开启剪贴板文本（目前含图片）上行
         * @type {boolean || null}
         */
        this.AllowClipTextUp = null;

        /**
         * 是否开启剪贴板文本（目前含图片）下行
         * @type {boolean || null}
         */
        this.AllowClipTextDown = null;

        /**
         * 是否开启文件传输上传
         * @type {boolean || null}
         */
        this.AllowFileUp = null;

        /**
         * 文件传输上传大小限制（预留参数，暂未启用）
         * @type {number || null}
         */
        this.MaxFileUpSize = null;

        /**
         * 是否开启文件传输下载
         * @type {boolean || null}
         */
        this.AllowFileDown = null;

        /**
         * 文件传输下载大小限制（预留参数，暂未启用）
         * @type {number || null}
         */
        this.MaxFileDownSize = null;

        /**
         * 是否允许任意账号登录
         * @type {boolean || null}
         */
        this.AllowAnyAccount = null;

        /**
         * 关联的用户列表
         * @type {Array.<User> || null}
         */
        this.UserSet = null;

        /**
         * 关联的用户组列表
         * @type {Array.<Group> || null}
         */
        this.UserGroupSet = null;

        /**
         * 关联的资产列表
         * @type {Array.<Device> || null}
         */
        this.DeviceSet = null;

        /**
         * 关联的资产组列表
         * @type {Array.<Group> || null}
         */
        this.DeviceGroupSet = null;

        /**
         * 关联的账号列表
         * @type {Array.<string> || null}
         */
        this.AccountSet = null;

        /**
         * 关联的高危命令模板列表
         * @type {Array.<CmdTemplate> || null}
         */
        this.CmdTemplateSet = null;

        /**
         * 是否开启 RDP 磁盘映射文件上传
         * @type {boolean || null}
         */
        this.AllowDiskFileUp = null;

        /**
         * 是否开启 RDP 磁盘映射文件下载
         * @type {boolean || null}
         */
        this.AllowDiskFileDown = null;

        /**
         * 是否开启 rz sz 文件上传
         * @type {boolean || null}
         */
        this.AllowShellFileUp = null;

        /**
         * 是否开启 rz sz 文件下载
         * @type {boolean || null}
         */
        this.AllowShellFileDown = null;

        /**
         * 是否开启 SFTP 文件删除
         * @type {boolean || null}
         */
        this.AllowFileDel = null;

        /**
         * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
         * @type {string || null}
         */
        this.ValidateFrom = null;

        /**
         * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
         * @type {string || null}
         */
        this.ValidateTo = null;

        /**
         * 访问权限状态，1 - 已生效，2 - 未生效，3 - 已过期
         * @type {number || null}
         */
        this.Status = null;

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
        this.AllowDiskRedirect = 'AllowDiskRedirect' in params ? params.AllowDiskRedirect : null;
        this.AllowClipFileUp = 'AllowClipFileUp' in params ? params.AllowClipFileUp : null;
        this.AllowClipFileDown = 'AllowClipFileDown' in params ? params.AllowClipFileDown : null;
        this.AllowClipTextUp = 'AllowClipTextUp' in params ? params.AllowClipTextUp : null;
        this.AllowClipTextDown = 'AllowClipTextDown' in params ? params.AllowClipTextDown : null;
        this.AllowFileUp = 'AllowFileUp' in params ? params.AllowFileUp : null;
        this.MaxFileUpSize = 'MaxFileUpSize' in params ? params.MaxFileUpSize : null;
        this.AllowFileDown = 'AllowFileDown' in params ? params.AllowFileDown : null;
        this.MaxFileDownSize = 'MaxFileDownSize' in params ? params.MaxFileDownSize : null;
        this.AllowAnyAccount = 'AllowAnyAccount' in params ? params.AllowAnyAccount : null;

        if (params.UserSet) {
            this.UserSet = new Array();
            for (let z in params.UserSet) {
                let obj = new User();
                obj.deserialize(params.UserSet[z]);
                this.UserSet.push(obj);
            }
        }

        if (params.UserGroupSet) {
            this.UserGroupSet = new Array();
            for (let z in params.UserGroupSet) {
                let obj = new Group();
                obj.deserialize(params.UserGroupSet[z]);
                this.UserGroupSet.push(obj);
            }
        }

        if (params.DeviceSet) {
            this.DeviceSet = new Array();
            for (let z in params.DeviceSet) {
                let obj = new Device();
                obj.deserialize(params.DeviceSet[z]);
                this.DeviceSet.push(obj);
            }
        }

        if (params.DeviceGroupSet) {
            this.DeviceGroupSet = new Array();
            for (let z in params.DeviceGroupSet) {
                let obj = new Group();
                obj.deserialize(params.DeviceGroupSet[z]);
                this.DeviceGroupSet.push(obj);
            }
        }
        this.AccountSet = 'AccountSet' in params ? params.AccountSet : null;

        if (params.CmdTemplateSet) {
            this.CmdTemplateSet = new Array();
            for (let z in params.CmdTemplateSet) {
                let obj = new CmdTemplate();
                obj.deserialize(params.CmdTemplateSet[z]);
                this.CmdTemplateSet.push(obj);
            }
        }
        this.AllowDiskFileUp = 'AllowDiskFileUp' in params ? params.AllowDiskFileUp : null;
        this.AllowDiskFileDown = 'AllowDiskFileDown' in params ? params.AllowDiskFileDown : null;
        this.AllowShellFileUp = 'AllowShellFileUp' in params ? params.AllowShellFileUp : null;
        this.AllowShellFileDown = 'AllowShellFileDown' in params ? params.AllowShellFileDown : null;
        this.AllowFileDel = 'AllowFileDel' in params ? params.AllowFileDel : null;
        this.ValidateFrom = 'ValidateFrom' in params ? params.ValidateFrom : null;
        this.ValidateTo = 'ValidateTo' in params ? params.ValidateTo : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeDevices请求参数结构体
 * @class
 */
class DescribeDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

        /**
         * 资产名或资产IP，模糊查询
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 暂未使用
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 地域码集合
         * @type {Array.<string> || null}
         */
        this.ApCodeSet = null;

        /**
         * 操作系统类型, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
         * @type {number || null}
         */
        this.Kind = null;

        /**
         * 分页，偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数量，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 有该资产访问权限的用户ID集合
         * @type {Array.<number> || null}
         */
        this.AuthorizedUserIdSet = null;

        /**
         * 过滤条件，资产绑定的堡垒机服务ID集合
         * @type {Array.<string> || null}
         */
        this.ResourceIdSet = null;

        /**
         * 可提供按照多种类型过滤, 1 - Linux, 2 - Windows, 3 - MySQL, 4 - SQLServer
         * @type {Array.<number> || null}
         */
        this.KindSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ApCodeSet = 'ApCodeSet' in params ? params.ApCodeSet : null;
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.AuthorizedUserIdSet = 'AuthorizedUserIdSet' in params ? params.AuthorizedUserIdSet : null;
        this.ResourceIdSet = 'ResourceIdSet' in params ? params.ResourceIdSet : null;
        this.KindSet = 'KindSet' in params ? params.KindSet : null;

    }
}

/**
 * DescribeDeviceGroups请求参数结构体
 * @class
 */
class DescribeDeviceGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组ID集合
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

        /**
         * 资产组名，最长64个字符，模糊查询
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分页偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数量，缺省20，最大500
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
        this.IdSet = 'IdSet' in params ? params.IdSet : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyAcl请求参数结构体
 * @class
 */
class ModifyAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问权限名称，最大32字符，不能包含空白字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否开启磁盘映射
         * @type {boolean || null}
         */
        this.AllowDiskRedirect = null;

        /**
         * 是否允许任意账号登录
         * @type {boolean || null}
         */
        this.AllowAnyAccount = null;

        /**
         * 访问权限ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 是否开启剪贴板文件上行
         * @type {boolean || null}
         */
        this.AllowClipFileUp = null;

        /**
         * 是否开启剪贴板文件下行
         * @type {boolean || null}
         */
        this.AllowClipFileDown = null;

        /**
         * 是否开启剪贴板文本（含图片）上行
         * @type {boolean || null}
         */
        this.AllowClipTextUp = null;

        /**
         * 是否开启剪贴板文本（含图片）下行
         * @type {boolean || null}
         */
        this.AllowClipTextDown = null;

        /**
         * 是否开启文件传输上传
         * @type {boolean || null}
         */
        this.AllowFileUp = null;

        /**
         * 文件传输上传大小限制（预留参数，目前暂未使用）
         * @type {number || null}
         */
        this.MaxFileUpSize = null;

        /**
         * 是否开启文件传输下载
         * @type {boolean || null}
         */
        this.AllowFileDown = null;

        /**
         * 文件传输下载大小限制（预留参数，目前暂未使用）
         * @type {number || null}
         */
        this.MaxFileDownSize = null;

        /**
         * 关联的用户ID
         * @type {Array.<number> || null}
         */
        this.UserIdSet = null;

        /**
         * 关联的用户组ID
         * @type {Array.<number> || null}
         */
        this.UserGroupIdSet = null;

        /**
         * 关联的资产ID
         * @type {Array.<number> || null}
         */
        this.DeviceIdSet = null;

        /**
         * 关联的资产组ID
         * @type {Array.<number> || null}
         */
        this.DeviceGroupIdSet = null;

        /**
         * 关联的账号
         * @type {Array.<string> || null}
         */
        this.AccountSet = null;

        /**
         * 关联的高危命令模板ID
         * @type {Array.<number> || null}
         */
        this.CmdTemplateIdSet = null;

        /**
         * 是否开启 RDP 磁盘映射文件上传
         * @type {boolean || null}
         */
        this.AllowDiskFileUp = null;

        /**
         * 是否开启 RDP 磁盘映射文件下载
         * @type {boolean || null}
         */
        this.AllowDiskFileDown = null;

        /**
         * 是否开启rz sz文件上传
         * @type {boolean || null}
         */
        this.AllowShellFileUp = null;

        /**
         * 是否开启rz sz文件下载
         * @type {boolean || null}
         */
        this.AllowShellFileDown = null;

        /**
         * 是否开启 SFTP 文件删除
         * @type {boolean || null}
         */
        this.AllowFileDel = null;

        /**
         * 访问权限生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
         * @type {string || null}
         */
        this.ValidateFrom = null;

        /**
         * 访问权限失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则访问权限长期有效
         * @type {string || null}
         */
        this.ValidateTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.AllowDiskRedirect = 'AllowDiskRedirect' in params ? params.AllowDiskRedirect : null;
        this.AllowAnyAccount = 'AllowAnyAccount' in params ? params.AllowAnyAccount : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AllowClipFileUp = 'AllowClipFileUp' in params ? params.AllowClipFileUp : null;
        this.AllowClipFileDown = 'AllowClipFileDown' in params ? params.AllowClipFileDown : null;
        this.AllowClipTextUp = 'AllowClipTextUp' in params ? params.AllowClipTextUp : null;
        this.AllowClipTextDown = 'AllowClipTextDown' in params ? params.AllowClipTextDown : null;
        this.AllowFileUp = 'AllowFileUp' in params ? params.AllowFileUp : null;
        this.MaxFileUpSize = 'MaxFileUpSize' in params ? params.MaxFileUpSize : null;
        this.AllowFileDown = 'AllowFileDown' in params ? params.AllowFileDown : null;
        this.MaxFileDownSize = 'MaxFileDownSize' in params ? params.MaxFileDownSize : null;
        this.UserIdSet = 'UserIdSet' in params ? params.UserIdSet : null;
        this.UserGroupIdSet = 'UserGroupIdSet' in params ? params.UserGroupIdSet : null;
        this.DeviceIdSet = 'DeviceIdSet' in params ? params.DeviceIdSet : null;
        this.DeviceGroupIdSet = 'DeviceGroupIdSet' in params ? params.DeviceGroupIdSet : null;
        this.AccountSet = 'AccountSet' in params ? params.AccountSet : null;
        this.CmdTemplateIdSet = 'CmdTemplateIdSet' in params ? params.CmdTemplateIdSet : null;
        this.AllowDiskFileUp = 'AllowDiskFileUp' in params ? params.AllowDiskFileUp : null;
        this.AllowDiskFileDown = 'AllowDiskFileDown' in params ? params.AllowDiskFileDown : null;
        this.AllowShellFileUp = 'AllowShellFileUp' in params ? params.AllowShellFileUp : null;
        this.AllowShellFileDown = 'AllowShellFileDown' in params ? params.AllowShellFileDown : null;
        this.AllowFileDel = 'AllowFileDel' in params ? params.AllowFileDel : null;
        this.ValidateFrom = 'ValidateFrom' in params ? params.ValidateFrom : null;
        this.ValidateTo = 'ValidateTo' in params ? params.ValidateTo : null;

    }
}

/**
 * DescribeResources请求参数结构体
 * @class
 */
class DescribeResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域码, 如: ap-guangzhou
         * @type {string || null}
         */
        this.ApCode = null;

        /**
         * 按照堡垒机开通的 VPC 实例ID查询
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 资源ID集合，当传入ID集合时忽略 ApCode 和 VpcId
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApCode = 'ApCode' in params ? params.ApCode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * BindDeviceResource返回参数结构体
 * @class
 */
class BindDeviceResourceResponse extends  AbstractModel {
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
 * CreateUser请求参数结构体
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名, 3-20个字符, 必须以英文字母开头，且不能包含字母、数字、.、_、-以外的字符
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户姓名，最大长度20个字符，不能包含空白字符
         * @type {string || null}
         */
        this.RealName = null;

        /**
         * 大陆手机号直接填写，如果是其他国家、地区号码， 按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 电子邮件
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 用户生效时间，如:"2021-09-22T00:00:00+00:00"
生效、失效时间不填则用户长期有效
         * @type {string || null}
         */
        this.ValidateFrom = null;

        /**
         * 用户失效时间，如:"2021-09-23T00:00:00+00:00"
生效、失效时间不填则用户长期有效
         * @type {string || null}
         */
        this.ValidateTo = null;

        /**
         * 所属用户组ID集合
         * @type {Array.<number> || null}
         */
        this.GroupIdSet = null;

        /**
         * 认证方式，0 - 本地， 1 - LDAP， 2 - OAuth 不传则默认为0
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 访问时间段限制， 由0、1组成的字符串，长度168(7 × 24)，代表该用户在一周中允许访问的时间段。字符串中第N个字符代表在一周中的第N个小时， 0 - 代表不允许访问，1 - 代表允许访问
         * @type {string || null}
         */
        this.ValidateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ValidateFrom = 'ValidateFrom' in params ? params.ValidateFrom : null;
        this.ValidateTo = 'ValidateTo' in params ? params.ValidateTo : null;
        this.GroupIdSet = 'GroupIdSet' in params ? params.GroupIdSet : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ValidateTime = 'ValidateTime' in params ? params.ValidateTime : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * DescribeDeviceGroups返回参数结构体
 * @class
 */
class DescribeDeviceGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资产组列表
         * @type {Array.<Group> || null}
         */
        this.GroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.GroupSet) {
            this.GroupSet = new Array();
            for (let z in params.GroupSet) {
                let obj = new Group();
                obj.deserialize(params.GroupSet[z]);
                this.GroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResources返回参数结构体
 * @class
 */
class DescribeResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 堡垒机资源列表
         * @type {Array.<Resource> || null}
         */
        this.ResourceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new Resource();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
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
         * 如果IdSet不为空，则忽略其他参数
         * @type {Array.<number> || null}
         */
        this.IdSet = null;

        /**
         * 模糊查询，IdSet、UserName、Phone为空时才生效，对用户名和姓名进行模糊查询
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分页，偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数量，默认20, 最大500
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 精确查询，IdSet为空时才生效
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 精确查询，IdSet、UserName为空时才生效。
大陆手机号直接填写，如果是其他国家、地区号码,按照"国家地区代码|手机号"的格式输入。如: "+852|xxxxxxxx"
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 查询具有指定资产ID访问权限的用户
         * @type {Array.<number> || null}
         */
        this.AuthorizedDeviceIdSet = null;

        /**
         * 认证方式，0 - 本地, 1 - LDAP, 2 - OAuth, 不传为全部
         * @type {Array.<number> || null}
         */
        this.AuthTypeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdSet = 'IdSet' in params ? params.IdSet : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.AuthorizedDeviceIdSet = 'AuthorizedDeviceIdSet' in params ? params.AuthorizedDeviceIdSet : null;
        this.AuthTypeSet = 'AuthTypeSet' in params ? params.AuthTypeSet : null;

    }
}

/**
 * DeleteUserGroupMembers返回参数结构体
 * @class
 */
class DeleteUserGroupMembersResponse extends  AbstractModel {
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
 * DescribeUserGroups返回参数结构体
 * @class
 */
class DescribeUserGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户组列表
         * @type {Array.<Group> || null}
         */
        this.GroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.GroupSet) {
            this.GroupSet = new Array();
            for (let z in params.GroupSet) {
                let obj = new Group();
                obj.deserialize(params.GroupSet[z]);
                this.GroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceGroupMembers返回参数结构体
 * @class
 */
class DescribeDeviceGroupMembersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组成员总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资产组成员列表
         * @type {Array.<Device> || null}
         */
        this.DeviceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DeviceSet) {
            this.DeviceSet = new Array();
            for (let z in params.DeviceSet) {
                let obj = new Device();
                obj.deserialize(params.DeviceSet[z]);
                this.DeviceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 高危命令模板
 * @class
 */
class CmdTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 高危命令模板ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 高危命令模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命令列表，命令之间用换行符（"\n"）分隔
         * @type {string || null}
         */
        this.CmdList = null;

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
        this.CmdList = 'CmdList' in params ? params.CmdList : null;

    }
}

/**
 * DeleteAcls返回参数结构体
 * @class
 */
class DeleteAclsResponse extends  AbstractModel {
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
 * DescribeDeviceGroupMembers请求参数结构体
 * @class
 */
class DescribeDeviceGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * true - 查询已在该资产组的资产，false - 查询未在该资产组的资产
         * @type {boolean || null}
         */
        this.Bound = null;

        /**
         * 资产名或资产IP，模糊查询
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分页偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条目数，默认20, 最大500
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资产类型，1 - Linux，2 - Windows，3 - MySQL，4 - SQLServer
         * @type {number || null}
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Bound = 'Bound' in params ? params.Bound : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

    }
}

/**
 * DeleteDeviceGroups返回参数结构体
 * @class
 */
class DeleteDeviceGroupsResponse extends  AbstractModel {
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
 * CreateUserGroup请求参数结构体
 * @class
 */
class CreateUserGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组名，最大长度32字符
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
 * AddDeviceGroupMembers请求参数结构体
 * @class
 */
class AddDeviceGroupMembersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产组ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 需要添加到资产组的资产ID集合
         * @type {Array.<number> || null}
         */
        this.MemberIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MemberIdSet = 'MemberIdSet' in params ? params.MemberIdSet : null;

    }
}

module.exports = {
    Group: Group,
    CreateDeviceGroupResponse: CreateDeviceGroupResponse,
    DeleteAclsRequest: DeleteAclsRequest,
    AddDeviceGroupMembersResponse: AddDeviceGroupMembersResponse,
    ModifyUserRequest: ModifyUserRequest,
    DeleteUsersRequest: DeleteUsersRequest,
    DeleteDeviceGroupMembersResponse: DeleteDeviceGroupMembersResponse,
    AddUserGroupMembersResponse: AddUserGroupMembersResponse,
    DescribeDasbImageIdsResponse: DescribeDasbImageIdsResponse,
    CreateUserResponse: CreateUserResponse,
    ModifyUserResponse: ModifyUserResponse,
    AddUserGroupMembersRequest: AddUserGroupMembersRequest,
    DescribeUserGroupsRequest: DescribeUserGroupsRequest,
    DescribeUserGroupMembersResponse: DescribeUserGroupMembersResponse,
    CreateUserGroupResponse: CreateUserGroupResponse,
    DescribeDevicesResponse: DescribeDevicesResponse,
    DescribeUserGroupMembersRequest: DescribeUserGroupMembersRequest,
    CreateAclRequest: CreateAclRequest,
    DeleteUserGroupsRequest: DeleteUserGroupsRequest,
    User: User,
    ModifyAclResponse: ModifyAclResponse,
    Device: Device,
    DescribeAclsRequest: DescribeAclsRequest,
    DeleteDeviceGroupsRequest: DeleteDeviceGroupsRequest,
    DeleteUserGroupMembersRequest: DeleteUserGroupMembersRequest,
    DescribeDasbImageIdsRequest: DescribeDasbImageIdsRequest,
    DeleteDeviceGroupMembersRequest: DeleteDeviceGroupMembersRequest,
    Resource: Resource,
    DeleteUserGroupsResponse: DeleteUserGroupsResponse,
    BindDeviceResourceRequest: BindDeviceResourceRequest,
    CreateDeviceGroupRequest: CreateDeviceGroupRequest,
    CreateAclResponse: CreateAclResponse,
    DescribeAclsResponse: DescribeAclsResponse,
    DescribeUsersResponse: DescribeUsersResponse,
    Acl: Acl,
    DescribeDevicesRequest: DescribeDevicesRequest,
    DescribeDeviceGroupsRequest: DescribeDeviceGroupsRequest,
    ModifyAclRequest: ModifyAclRequest,
    DescribeResourcesRequest: DescribeResourcesRequest,
    BindDeviceResourceResponse: BindDeviceResourceResponse,
    CreateUserRequest: CreateUserRequest,
    DeleteUsersResponse: DeleteUsersResponse,
    DescribeDeviceGroupsResponse: DescribeDeviceGroupsResponse,
    DescribeResourcesResponse: DescribeResourcesResponse,
    DescribeUsersRequest: DescribeUsersRequest,
    DeleteUserGroupMembersResponse: DeleteUserGroupMembersResponse,
    DescribeUserGroupsResponse: DescribeUserGroupsResponse,
    DescribeDeviceGroupMembersResponse: DescribeDeviceGroupMembersResponse,
    CmdTemplate: CmdTemplate,
    DeleteAclsResponse: DeleteAclsResponse,
    DescribeDeviceGroupMembersRequest: DescribeDeviceGroupMembersRequest,
    DeleteDeviceGroupsResponse: DeleteDeviceGroupsResponse,
    CreateUserGroupRequest: CreateUserGroupRequest,
    AddDeviceGroupMembersRequest: AddDeviceGroupMembersRequest,

}
