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
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 手机号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 用户组
         * @type {Array.<string> || null}
         */
        this.UserGroup = null;

        /**
         * 生日
         * @type {number || null}
         */
        this.Birthdate = null;

        /**
         * 自定义属性
         * @type {Array.<MemberMap> || null}
         */
        this.CustomizationAttributes = null;

        /**
         * 索引字段1
         * @type {string || null}
         */
        this.IndexedAttribute1 = null;

        /**
         * 索引字段2
         * @type {string || null}
         */
        this.IndexedAttribute2 = null;

        /**
         * 索引字段3
         * @type {string || null}
         */
        this.IndexedAttribute3 = null;

        /**
         * 索引字段4
         * @type {string || null}
         */
        this.IndexedAttribute4 = null;

        /**
         * 索引字段5
         * @type {string || null}
         */
        this.IndexedAttribute5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;

        if (params.CustomizationAttributes) {
            this.CustomizationAttributes = new Array();
            for (let z in params.CustomizationAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomizationAttributes[z]);
                this.CustomizationAttributes.push(obj);
            }
        }
        this.IndexedAttribute1 = 'IndexedAttribute1' in params ? params.IndexedAttribute1 : null;
        this.IndexedAttribute2 = 'IndexedAttribute2' in params ? params.IndexedAttribute2 : null;
        this.IndexedAttribute3 = 'IndexedAttribute3' in params ? params.IndexedAttribute3 : null;
        this.IndexedAttribute4 = 'IndexedAttribute4' in params ? params.IndexedAttribute4 : null;
        this.IndexedAttribute5 = 'IndexedAttribute5' in params ? params.IndexedAttribute5 : null;

    }
}

/**
 * DescribeUserById请求参数结构体
 * @class
 */
class DescribeUserByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 返回信息是否为原文

<li> **false** </li>	默认，返回信息为脱敏信息
<li> **true** </li>	返回用户信息原文
         * @type {boolean || null}
         */
        this.Original = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * ListUser请求参数结构体
 * @class
 */
class ListUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 分页数据
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * Key可选值为condition、userGroupId

<li> **condition** </li>	Values = 查询条件，用户ID，用户名称，手机或邮箱
<li> **userGroupId** </li>	Values = 用户组ID
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回信息是否为原文
         * @type {boolean || null}
         */
        this.Original = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Original = 'Original' in params ? params.Original : null;

    }
}

/**
 * ResetPassword请求参数结构体
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

    }
}

/**
 * 失败详情
 * @class
 */
class ErrorDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 失败原因
         * @type {string || null}
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * DescribeUser请求参数结构体
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 分页数据
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * 查询条件，根据propertycode和propertykey
         * @type {Array.<QueryUserFilter> || null}
         */
        this.Filters = null;

        /**
         * 是否返回明文
         * @type {boolean || null}
         */
        this.Original = null;

        /**
         * 排序设置
         * @type {Sort || null}
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryUserFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Original = 'Original' in params ? params.Original : null;

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

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
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 用户ID数组
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * 导入用户信息
1、UserName，PhoneNumber ，Email ，WechatOpenId ，WechatUnionId ，AlipayUserId ，QqOpenId ，QqUnionId 八个属性中，导入时必须包含其中一个属性并遵守初始化自定义属性的正则表达式规则。UserName，PhoneNumber，Email的正则表达式在控制台的自定义属性中可以查询到。
2、对于密码的导入，导入的密码支持明文导入，MD5密文导入，SHA1密文导入，BCRYPT密文导入 ，这个需要在PasswordEncryptTypeEnum 字段中指定。
3、IdentityVerified，IdentityVerificationMethod 支持导入，
IdentityVerified 为true，IdentityVerificationMethod必传；
IdentityVerificationMethod 为nameAndIdCard，Name,ResidentIdentityCard必传
IdentityVerificationMethod 为nameIdCardAndPhone，Name,PhoneNumber,ResidentIdentityCard必传;
 * @class
 */
class ImportUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.ResidentIdentityCard = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 用户组ID
         * @type {Array.<string> || null}
         */
        this.UserGroup = null;

        /**
         * QQ qqOpenId
         * @type {string || null}
         */
        this.QqOpenId = null;

        /**
         * QQ qqUnionId
         * @type {string || null}
         */
        this.QqUnionId = null;

        /**
         * 微信wechatOpenId
         * @type {string || null}
         */
        this.WechatOpenId = null;

        /**
         * 微信wechatUnionId
         * @type {string || null}
         */
        this.WechatUnionId = null;

        /**
         * 支付宝alipayUserId
         * @type {string || null}
         */
        this.AlipayUserId = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 生日
         * @type {string || null}
         */
        this.Birthdate = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 坐标
         * @type {string || null}
         */
        this.Locale = null;

        /**
         * 性别（MALE;FEMALE;UNKNOWN）
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 实名核验方式
         * @type {string || null}
         */
        this.IdentityVerificationMethod = null;

        /**
         * 是否已实名核验
         * @type {boolean || null}
         */
        this.IdentityVerified = null;

        /**
         * 工作
         * @type {string || null}
         */
        this.Job = null;

        /**
         * 国家
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 时区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 密码密文
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 自定义属性
         * @type {Array.<MemberMap> || null}
         */
        this.CustomizationAttributes = null;

        /**
         * 密码盐
         * @type {Salt || null}
         */
        this.Salt = null;

        /**
         * 密码加密方式（SHA1;BCRYPT）
         * @type {string || null}
         */
        this.PasswordEncryptTypeEnum = null;

        /**
         * 索引字段1
         * @type {string || null}
         */
        this.IndexedAttribute1 = null;

        /**
         * 索引字段2
         * @type {string || null}
         */
        this.IndexedAttribute2 = null;

        /**
         * 索引字段3
         * @type {string || null}
         */
        this.IndexedAttribute3 = null;

        /**
         * 索引字段4
         * @type {string || null}
         */
        this.IndexedAttribute4 = null;

        /**
         * 索引字段5
         * @type {string || null}
         */
        this.IndexedAttribute5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ResidentIdentityCard = 'ResidentIdentityCard' in params ? params.ResidentIdentityCard : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.QqOpenId = 'QqOpenId' in params ? params.QqOpenId : null;
        this.QqUnionId = 'QqUnionId' in params ? params.QqUnionId : null;
        this.WechatOpenId = 'WechatOpenId' in params ? params.WechatOpenId : null;
        this.WechatUnionId = 'WechatUnionId' in params ? params.WechatUnionId : null;
        this.AlipayUserId = 'AlipayUserId' in params ? params.AlipayUserId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Locale = 'Locale' in params ? params.Locale : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.IdentityVerificationMethod = 'IdentityVerificationMethod' in params ? params.IdentityVerificationMethod : null;
        this.IdentityVerified = 'IdentityVerified' in params ? params.IdentityVerified : null;
        this.Job = 'Job' in params ? params.Job : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.CustomizationAttributes) {
            this.CustomizationAttributes = new Array();
            for (let z in params.CustomizationAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomizationAttributes[z]);
                this.CustomizationAttributes.push(obj);
            }
        }

        if (params.Salt) {
            let obj = new Salt();
            obj.deserialize(params.Salt)
            this.Salt = obj;
        }
        this.PasswordEncryptTypeEnum = 'PasswordEncryptTypeEnum' in params ? params.PasswordEncryptTypeEnum : null;
        this.IndexedAttribute1 = 'IndexedAttribute1' in params ? params.IndexedAttribute1 : null;
        this.IndexedAttribute2 = 'IndexedAttribute2' in params ? params.IndexedAttribute2 : null;
        this.IndexedAttribute3 = 'IndexedAttribute3' in params ? params.IndexedAttribute3 : null;
        this.IndexedAttribute4 = 'IndexedAttribute4' in params ? params.IndexedAttribute4 : null;
        this.IndexedAttribute5 = 'IndexedAttribute5' in params ? params.IndexedAttribute5 : null;

    }
}

/**
 * UpdateUserStatus返回参数结构体
 * @class
 */
class UpdateUserStatusResponse extends  AbstractModel {
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
 * 失败的用户
 * @class
 */
class FailedUsers extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败用户标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedUserIdentification = null;

        /**
         * 导入的用户失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedUserIdentification = 'FailedUserIdentification' in params ? params.FailedUserIdentification : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;

    }
}

/**
 * ListUserByProperty请求参数结构体
 * @class
 */
class ListUserByPropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 查询的属性

<li> **phoneNumber** </li>	  手机号码
<li> **email** </li>  邮箱
         * @type {string || null}
         */
        this.PropertyCode = null;

        /**
         * 属性值
         * @type {string || null}
         */
        this.PropertyValue = null;

        /**
         * 返回信息是否为原文
         * @type {boolean || null}
         */
        this.Original = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.PropertyCode = 'PropertyCode' in params ? params.PropertyCode : null;
        this.PropertyValue = 'PropertyValue' in params ? params.PropertyValue : null;
        this.Original = 'Original' in params ? params.Original : null;

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
         * 创建的用户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {User || null}
         */
        this.User = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * key值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * value值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 逻辑值
         * @type {boolean || null}
         */
        this.Logic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.Logic = 'Logic' in params ? params.Logic : null;

    }
}

/**
 * SetPassword返回参数结构体
 * @class
 */
class SetPasswordResponse extends  AbstractModel {
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
 * ListUserByProperty返回参数结构体
 * @class
 */
class ListUserByPropertyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListJobs请求参数结构体
 * @class
 */
class ListJobsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 任务ID列表，为空时返回全部任务
         * @type {Array.<string> || null}
         */
        this.JobIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.JobIds = 'JobIds' in params ? params.JobIds : null;

    }
}

/**
 * DescribeUserById返回参数结构体
 * @class
 */
class DescribeUserByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {User || null}
         */
        this.User = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务详情
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 任务状态

<li> **PENDING** </li>  待执行
<li> **PROCESSING** </li>  执行中
<li> **COMPLETED** </li>  完成
<li> **FAILED** </li>  失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务类型

<li> **IMPORT_USER** </li>  用户导入
<li> **EXPORT_USER** </li>  用户导出
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 任务创建时间
         * @type {number || null}
         */
        this.CreatedDate = null;

        /**
         * 任务的数据类型

<li> **NDJSON** </li>  New-line Delimited JSON
<li> **CSV** </li>  Comma-Separated Values
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 任务结果下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 失败详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ErrorDetails> || null}
         */
        this.ErrorDetails = null;

        /**
         * 失败的用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailedUsers> || null}
         */
        this.FailedUsers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.ErrorDetails) {
            this.ErrorDetails = new Array();
            for (let z in params.ErrorDetails) {
                let obj = new ErrorDetails();
                obj.deserialize(params.ErrorDetails[z]);
                this.ErrorDetails.push(obj);
            }
        }

        if (params.FailedUsers) {
            this.FailedUsers = new Array();
            for (let z in params.FailedUsers) {
                let obj = new FailedUsers();
                obj.deserialize(params.FailedUsers[z]);
                this.FailedUsers.push(obj);
            }
        }

    }
}

/**
 * CreateFileExportUserJob请求参数结构体
 * @class
 */
class CreateFileExportUserJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 导出的数据类型

<li> **NDJSON** </li>  New-line Delimited JSON
<li> **CSV** </li>  Comma-Separated Values
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Key可选值为condition、userGroupId

<li> **condition** </li>	Values = 查询条件，用户ID，用户名称，手机或邮箱
<li> **userGroupId** </li>	Values = 用户组ID
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 导出用户包含的属性和映射名称，为空时包含所有的属性
         * @type {Array.<ExportPropertyMap> || null}
         */
        this.ExportPropertyMaps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.Format = 'Format' in params ? params.Format : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.ExportPropertyMaps) {
            this.ExportPropertyMaps = new Array();
            for (let z in params.ExportPropertyMaps) {
                let obj = new ExportPropertyMap();
                obj.deserialize(params.ExportPropertyMaps[z]);
                this.ExportPropertyMaps.push(obj);
            }
        }

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
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 手机号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 上次登录时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastSignOn = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreatedDate = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 用户来源
         * @type {string || null}
         */
        this.UserDataSourceEnum = null;

        /**
         * 昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 生日
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Birthdate = null;

        /**
         * 用户组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UserGroups = null;

        /**
         * 上次修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifiedDate = null;

        /**
         * 自定义属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MemberMap> || null}
         */
        this.CustomAttributes = null;

        /**
         * 身份证号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResidentIdentityCard = null;

        /**
         * QQ的OpenId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QqOpenId = null;

        /**
         * QQ的UnionId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QqUnionId = null;

        /**
         * 微信的WechatOpenId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatOpenId = null;

        /**
         * 微信的WechatUnionId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatUnionId = null;

        /**
         * 支付宝的AlipayUserId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlipayUserId = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Locale = null;

        /**
         * 性别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 实名核验方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdentityVerificationMethod = null;

        /**
         * 是否已经实名核验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IdentityVerified = null;

        /**
         * 工作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Job = null;

        /**
         * 国家
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 是否主账号（进行过账号融合后，主账号为true，从账号为false）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * 时区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 是否已经首次登录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AlreadyFirstLogin = null;

        /**
         * 租户id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 用户目录id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 锁定类型（分为管理员锁定，和登录策略锁定）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LockType = null;

        /**
         * 锁定时间点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LockTime = null;

        /**
         * 索引字段1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexedAttribute1 = null;

        /**
         * 索引字段2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexedAttribute2 = null;

        /**
         * 索引字段3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexedAttribute3 = null;

        /**
         * 索引字段4
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexedAttribute4 = null;

        /**
         * 索引字段5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexedAttribute5 = null;

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
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.LastSignOn = 'LastSignOn' in params ? params.LastSignOn : null;
        this.CreatedDate = 'CreatedDate' in params ? params.CreatedDate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UserDataSourceEnum = 'UserDataSourceEnum' in params ? params.UserDataSourceEnum : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;
        this.UserGroups = 'UserGroups' in params ? params.UserGroups : null;
        this.LastModifiedDate = 'LastModifiedDate' in params ? params.LastModifiedDate : null;

        if (params.CustomAttributes) {
            this.CustomAttributes = new Array();
            for (let z in params.CustomAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomAttributes[z]);
                this.CustomAttributes.push(obj);
            }
        }
        this.ResidentIdentityCard = 'ResidentIdentityCard' in params ? params.ResidentIdentityCard : null;
        this.QqOpenId = 'QqOpenId' in params ? params.QqOpenId : null;
        this.QqUnionId = 'QqUnionId' in params ? params.QqUnionId : null;
        this.WechatOpenId = 'WechatOpenId' in params ? params.WechatOpenId : null;
        this.WechatUnionId = 'WechatUnionId' in params ? params.WechatUnionId : null;
        this.AlipayUserId = 'AlipayUserId' in params ? params.AlipayUserId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Locale = 'Locale' in params ? params.Locale : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.IdentityVerificationMethod = 'IdentityVerificationMethod' in params ? params.IdentityVerificationMethod : null;
        this.IdentityVerified = 'IdentityVerified' in params ? params.IdentityVerified : null;
        this.Job = 'Job' in params ? params.Job : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AlreadyFirstLogin = 'AlreadyFirstLogin' in params ? params.AlreadyFirstLogin : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LockType = 'LockType' in params ? params.LockType : null;
        this.LockTime = 'LockTime' in params ? params.LockTime : null;
        this.IndexedAttribute1 = 'IndexedAttribute1' in params ? params.IndexedAttribute1 : null;
        this.IndexedAttribute2 = 'IndexedAttribute2' in params ? params.IndexedAttribute2 : null;
        this.IndexedAttribute3 = 'IndexedAttribute3' in params ? params.IndexedAttribute3 : null;
        this.IndexedAttribute4 = 'IndexedAttribute4' in params ? params.IndexedAttribute4 : null;
        this.IndexedAttribute5 = 'IndexedAttribute5' in params ? params.IndexedAttribute5 : null;

    }
}

/**
 * 查询用户排序
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段的key，参考自定义属性
         * @type {string || null}
         */
        this.PropertyKey = null;

        /**
         * 升序或者降序，ASC/DESC
         * @type {string || null}
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
        this.PropertyKey = 'PropertyKey' in params ? params.PropertyKey : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 分页对象
 * @class
 */
class Pageable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页数量
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页码
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * ResetPassword返回参数结构体
 * @class
 */
class ResetPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重置后的用户密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
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
         * 更新之后的用户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {User || null}
         */
        this.User = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetPassword请求参数结构体
 * @class
 */
class SetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 密码
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * 盐位
 * @class
 */
class SaltLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密码加盐的类型（HEAD，TAIL，OTHER）
         * @type {string || null}
         */
        this.SaltLocationTypeEnum = null;

        /**
         * 加盐规则
         * @type {SaltLocationRule || null}
         */
        this.SaltLocationRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaltLocationTypeEnum = 'SaltLocationTypeEnum' in params ? params.SaltLocationTypeEnum : null;

        if (params.SaltLocationRule) {
            let obj = new SaltLocationRule();
            obj.deserialize(params.SaltLocationRule)
            this.SaltLocationRule = obj;
        }

    }
}

/**
 * UpdateUserStatus请求参数结构体
 * @class
 */
class UpdateUserStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户状态

<li> **NORMAL** </li>	  正常
<li> **LOCK** </li>  锁定
<li> **FREEZE** </li>	  冻结
         * @type {string || null}
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ListJobs返回参数结构体
 * @class
 */
class ListJobsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Job> || null}
         */
        this.JobSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.JobSet) {
            this.JobSet = new Array();
            for (let z in params.JobSet) {
                let obj = new Job();
                obj.deserialize(params.JobSet[z]);
                this.JobSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 导出属性映射
 * @class
 */
class ExportPropertyMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户属性code
         * @type {string || null}
         */
        this.UserPropertyCode = null;

        /**
         * 用户属性映射名称
         * @type {string || null}
         */
        this.ColumnName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserPropertyCode = 'UserPropertyCode' in params ? params.UserPropertyCode : null;
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;

    }
}

/**
 * LinkAccount返回参数结构体
 * @class
 */
class LinkAccountResponse extends  AbstractModel {
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
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 手机号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 用户组ID
         * @type {Array.<string> || null}
         */
        this.UserGroup = null;

        /**
         * 生日
         * @type {number || null}
         */
        this.Birthdate = null;

        /**
         * 自定义属性
         * @type {Array.<MemberMap> || null}
         */
        this.CustomizationAttributes = null;

        /**
         * 索引字段1
         * @type {string || null}
         */
        this.IndexedAttribute1 = null;

        /**
         * 索引字段2
         * @type {string || null}
         */
        this.IndexedAttribute2 = null;

        /**
         * 索引字段3
         * @type {string || null}
         */
        this.IndexedAttribute3 = null;

        /**
         * 索引字段4
         * @type {string || null}
         */
        this.IndexedAttribute4 = null;

        /**
         * 索引字段5
         * @type {string || null}
         */
        this.IndexedAttribute5 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UserGroup = 'UserGroup' in params ? params.UserGroup : null;
        this.Birthdate = 'Birthdate' in params ? params.Birthdate : null;

        if (params.CustomizationAttributes) {
            this.CustomizationAttributes = new Array();
            for (let z in params.CustomizationAttributes) {
                let obj = new MemberMap();
                obj.deserialize(params.CustomizationAttributes[z]);
                this.CustomizationAttributes.push(obj);
            }
        }
        this.IndexedAttribute1 = 'IndexedAttribute1' in params ? params.IndexedAttribute1 : null;
        this.IndexedAttribute2 = 'IndexedAttribute2' in params ? params.IndexedAttribute2 : null;
        this.IndexedAttribute3 = 'IndexedAttribute3' in params ? params.IndexedAttribute3 : null;
        this.IndexedAttribute4 = 'IndexedAttribute4' in params ? params.IndexedAttribute4 : null;
        this.IndexedAttribute5 = 'IndexedAttribute5' in params ? params.IndexedAttribute5 : null;

    }
}

/**
 * 密码盐
 * @class
 */
class Salt extends  AbstractModel {
    constructor(){
        super();

        /**
         * 盐值
         * @type {string || null}
         */
        this.SaltValue = null;

        /**
         * 盐值位置
         * @type {SaltLocation || null}
         */
        this.SaltLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SaltValue = 'SaltValue' in params ? params.SaltValue : null;

        if (params.SaltLocation) {
            let obj = new SaltLocation();
            obj.deserialize(params.SaltLocation)
            this.SaltLocation = obj;
        }

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
 * CreateApiImportUserJob请求参数结构体
 * @class
 */
class CreateApiImportUserJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 导入的用户数据
         * @type {Array.<ImportUser> || null}
         */
        this.DataFlowUserCreateList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.DataFlowUserCreateList) {
            this.DataFlowUserCreateList = new Array();
            for (let z in params.DataFlowUserCreateList) {
                let obj = new ImportUser();
                obj.deserialize(params.DataFlowUserCreateList[z]);
                this.DataFlowUserCreateList.push(obj);
            }
        }

    }
}

/**
 * CreateFileExportUserJob返回参数结构体
 * @class
 */
class CreateFileExportUserJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据流任务
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApiImportUserJob返回参数结构体
 * @class
 */
class CreateApiImportUserJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据流任务
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LinkAccount请求参数结构体
 * @class
 */
class LinkAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户目录ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 主用户ID
         * @type {string || null}
         */
        this.PrimaryUserId = null;

        /**
         * 从用户ID
         * @type {string || null}
         */
        this.SecondaryUserId = null;

        /**
         * 融合属性

<li> **PHONENUMBER** </li>	  手机号码
<li> **EMAIL** </li>  邮箱
         * @type {string || null}
         */
        this.UserLinkedOnAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.PrimaryUserId = 'PrimaryUserId' in params ? params.PrimaryUserId : null;
        this.SecondaryUserId = 'SecondaryUserId' in params ? params.SecondaryUserId : null;
        this.UserLinkedOnAttribute = 'UserLinkedOnAttribute' in params ? params.UserLinkedOnAttribute : null;

    }
}

/**
 * ListLogMessageByCondition请求参数结构体
 * @class
 */
class ListLogMessageByConditionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户池ID
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 分页数据
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * 开始时间，时间戳精确到毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * Key可选值为events

<li> **events** </li>	Values为["SIGNUP", "USER_UPDATE", "USER_DELETE", "USER_CREATE", "ACCOUNT_LINKING"] 中的一个或多个
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
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

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
 * 盐位规则
 * @class
 */
class SaltLocationRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表达式
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
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * Map数据类型
 * @class
 */
class MemberMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 查询用户信息条件
 * @class
 */
class QueryUserFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性key
         * @type {string || null}
         */
        this.PropertyKey = null;

        /**
         * 属性value
         * @type {string || null}
         */
        this.PropertyValue = null;

        /**
         * 逻辑值，等于true，不等于false
         * @type {boolean || null}
         */
        this.Logic = null;

        /**
         * 操作逻辑符（支持> < = >= <=  != between）
         * @type {string || null}
         */
        this.OperateLogic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PropertyKey = 'PropertyKey' in params ? params.PropertyKey : null;
        this.PropertyValue = 'PropertyValue' in params ? params.PropertyValue : null;
        this.Logic = 'Logic' in params ? params.Logic : null;
        this.OperateLogic = 'OperateLogic' in params ? params.OperateLogic : null;

    }
}

/**
 * DescribeUser返回参数结构体
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分页对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<User> || null}
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new User();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListUser返回参数结构体
 * @class
 */
class ListUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分页对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<User> || null}
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new User();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 日志详情
 * @class
 */
class LogMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志标识
         * @type {string || null}
         */
        this.LogId = null;

        /**
         * 租户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 用户池ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserStoreId = null;

        /**
         * 事件编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventCode = null;

        /**
         * 事件发生时间戳，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventDate = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 事件参与者

<li> **TENANT** </li>  租户
<li> **USER** </li>  用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Participant = null;

        /**
         * 应用clientId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationClientId = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationName = null;

        /**
         * 认证源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthSourceId = null;

        /**
         * 认证源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthSourceName = null;

        /**
         * 认证源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthSourceType = null;

        /**
         * 认证源类别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthSourceCategory = null;

        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 用户代理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.UserStoreId = 'UserStoreId' in params ? params.UserStoreId : null;
        this.EventCode = 'EventCode' in params ? params.EventCode : null;
        this.EventDate = 'EventDate' in params ? params.EventDate : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Participant = 'Participant' in params ? params.Participant : null;
        this.ApplicationClientId = 'ApplicationClientId' in params ? params.ApplicationClientId : null;
        this.ApplicationName = 'ApplicationName' in params ? params.ApplicationName : null;
        this.AuthSourceId = 'AuthSourceId' in params ? params.AuthSourceId : null;
        this.AuthSourceName = 'AuthSourceName' in params ? params.AuthSourceName : null;
        this.AuthSourceType = 'AuthSourceType' in params ? params.AuthSourceType : null;
        this.AuthSourceCategory = 'AuthSourceCategory' in params ? params.AuthSourceCategory : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Detail = 'Detail' in params ? params.Detail : null;

    }
}

/**
 * ListLogMessageByCondition返回参数结构体
 * @class
 */
class ListLogMessageByConditionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分页对象
         * @type {Pageable || null}
         */
        this.Pageable = null;

        /**
         * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogMessage> || null}
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Pageable) {
            let obj = new Pageable();
            obj.deserialize(params.Pageable)
            this.Pageable = obj;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new LogMessage();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    UpdateUserRequest: UpdateUserRequest,
    DescribeUserByIdRequest: DescribeUserByIdRequest,
    ListUserRequest: ListUserRequest,
    ResetPasswordRequest: ResetPasswordRequest,
    ErrorDetails: ErrorDetails,
    DescribeUserRequest: DescribeUserRequest,
    DeleteUsersRequest: DeleteUsersRequest,
    ImportUser: ImportUser,
    UpdateUserStatusResponse: UpdateUserStatusResponse,
    FailedUsers: FailedUsers,
    ListUserByPropertyRequest: ListUserByPropertyRequest,
    CreateUserResponse: CreateUserResponse,
    Filter: Filter,
    SetPasswordResponse: SetPasswordResponse,
    ListUserByPropertyResponse: ListUserByPropertyResponse,
    ListJobsRequest: ListJobsRequest,
    DescribeUserByIdResponse: DescribeUserByIdResponse,
    Job: Job,
    CreateFileExportUserJobRequest: CreateFileExportUserJobRequest,
    User: User,
    Sort: Sort,
    Pageable: Pageable,
    ResetPasswordResponse: ResetPasswordResponse,
    UpdateUserResponse: UpdateUserResponse,
    SetPasswordRequest: SetPasswordRequest,
    SaltLocation: SaltLocation,
    UpdateUserStatusRequest: UpdateUserStatusRequest,
    ListJobsResponse: ListJobsResponse,
    ExportPropertyMap: ExportPropertyMap,
    LinkAccountResponse: LinkAccountResponse,
    CreateUserRequest: CreateUserRequest,
    Salt: Salt,
    DeleteUsersResponse: DeleteUsersResponse,
    CreateApiImportUserJobRequest: CreateApiImportUserJobRequest,
    CreateFileExportUserJobResponse: CreateFileExportUserJobResponse,
    CreateApiImportUserJobResponse: CreateApiImportUserJobResponse,
    LinkAccountRequest: LinkAccountRequest,
    ListLogMessageByConditionRequest: ListLogMessageByConditionRequest,
    SaltLocationRule: SaltLocationRule,
    MemberMap: MemberMap,
    QueryUserFilter: QueryUserFilter,
    DescribeUserResponse: DescribeUserResponse,
    ListUserResponse: ListUserResponse,
    LogMessage: LogMessage,
    ListLogMessageByConditionResponse: ListLogMessageByConditionResponse,

}
