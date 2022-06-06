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
 * AssumeRoleWithSAML返回参数结构体
 * @class
 */
class AssumeRoleWithSAMLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象里面包含 Token，TmpSecretId，TmpSecretKey 三元组
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 证书无效的时间，以 ISO8601 格式的 UTC 时间表示
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * API密钥数据列表
 * @class
 */
class ApiKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥ID
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * 创建时间(时间戳)
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 状态(2:有效, 3:禁用, 4:已删除)
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
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AssumeRoleWithWebIdentity请求参数结构体
 * @class
 */
class AssumeRoleWithWebIdentityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份提供商名称
         * @type {string || null}
         */
        this.ProviderId = null;

        /**
         * IdP签发的OIDC令牌
         * @type {string || null}
         */
        this.WebIdentityToken = null;

        /**
         * 角色访问描述名
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * 会话名称
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderId = 'ProviderId' in params ? params.ProviderId : null;
        this.WebIdentityToken = 'WebIdentityToken' in params ? params.WebIdentityToken : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * AssumeRoleWithWebIdentity返回参数结构体
 * @class
 */
class AssumeRoleWithWebIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时秘钥过期时间(时间戳)
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 临时秘钥过期时间
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * 临时秘钥
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFederationToken返回参数结构体
 * @class
 */
class GetFederationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时证书
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 临时证书有效的时间，返回 Unix 时间戳，精确到秒
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 证书有效的时间，以 iso8601 格式的 UTC 时间表示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryApiKey返回参数结构体
 * @class
 */
class QueryApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥ID列表
         * @type {Array.<ApiKey> || null}
         */
        this.IdKeys = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IdKeys) {
            this.IdKeys = new Array();
            for (let z in params.IdKeys) {
                let obj = new ApiKey();
                obj.deserialize(params.IdKeys[z]);
                this.IdKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssumeRole返回参数结构体
 * @class
 */
class AssumeRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时安全证书
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 证书无效的时间，以 iso8601 格式的 UTC 时间表示
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryApiKey请求参数结构体
 * @class
 */
class QueryApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的账号(不填默认查当前账号)
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
 * GetFederationToken请求参数结构体
 * @class
 */
class GetFederationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 您可以自定义调用方英文名称，由字母组成。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 授予该临时证书权限的CAM策略
注意：
1、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。
2、策略中不能包含 principal 元素。
3、该参数需要做urlencode。
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * 指定临时证书的有效期，单位：秒，默认1800秒，主账号最长可设定有效期为7200秒，子账号最长可设定有效期为129600秒。
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * 标签
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键，最长128个字符，区分大小写。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值，最长256个字符，区分大小写。
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
 * GetCallerIdentity返回参数结构体
 * @class
 */
class GetCallerIdentityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前调用者ARN。
         * @type {string || null}
         */
        this.Arn = null;

        /**
         * 当前调用者所属主账号Uin。
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 身份标识。
1. 调用者是云账号时，返回的是当前账号Uin
2. 调用者是角色时，返回的是roleId:roleSessionName
3. 调用者是联合身份时，返回的是uin:federatedUserName
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 密钥所属账号Uin。
1. 调用者是云账号，返回的当前账号Uin
2, 调用者是角色，返回的申请角色密钥的账号Uin
         * @type {string || null}
         */
        this.PrincipalId = null;

        /**
         * 身份类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Arn = 'Arn' in params ? params.Arn : null;
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PrincipalId = 'PrincipalId' in params ? params.PrincipalId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 临时证书
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * token。token长度和绑定的策略有关，最长不超过4096字节。
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 临时证书密钥ID。最长不超过1024字节。
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时证书密钥Key。最长不超过1024字节。
         * @type {string || null}
         */
        this.TmpSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;

    }
}

/**
 * AssumeRole请求参数结构体
 * @class
 */
class AssumeRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色的资源描述，可在[访问管理](https://console.cloud.tencent.com/cam/role)，点击角色名获取。
普通角色：
qcs::cam::uin/12345678:role/4611686018427397919、qcs::cam::uin/12345678:roleName/testRoleName
服务角色：
qcs::cam::uin/12345678:role/tencentcloudServiceRole/4611686018427397920、qcs::cam::uin/12345678:role/tencentcloudServiceRoleName/testServiceRoleName
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * 临时会话名称，由用户自定义名称。
长度在2到128之间，可包含大小写字符，数字以及特殊字符：=,.@_-。 正则为：[\w+=,.@_-]*
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
         * @type {number || null}
         */
        this.DurationSeconds = null;

        /**
         * 策略描述
注意：
1、policy 需要做 urlencode（如果通过 GET 方法请求云 API，发送请求前，所有参数都需要按照[云 API 规范](https://cloud.tencent.com/document/api/598/33159#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2)再 urlencode 一次）。
2、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。
3、策略中不能包含 principal 元素。
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * 角色外部ID，可在[访问管理](https://console.cloud.tencent.com/cam/role)，点击角色名获取。
长度在2到128之间，可包含大小写字符，数字以及特殊字符：=,.@:/-。 正则为：[\w+=,.@:\/-]*
         * @type {string || null}
         */
        this.ExternalId = null;

        /**
         * 会话标签列表。最多可以传递 50 个会话标签，不支持包含相同标签键。
         * @type {Array.<Tag> || null}
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
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.ExternalId = 'ExternalId' in params ? params.ExternalId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * GetCallerIdentity请求参数结构体
 * @class
 */
class GetCallerIdentityRequest extends  AbstractModel {
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
 * AssumeRoleWithSAML请求参数结构体
 * @class
 */
class AssumeRoleWithSAMLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64 编码的 SAML 断言信息
         * @type {string || null}
         */
        this.SAMLAssertion = null;

        /**
         * 扮演者访问描述名
         * @type {string || null}
         */
        this.PrincipalArn = null;

        /**
         * 角色访问描述名
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * 会话名称
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SAMLAssertion = 'SAMLAssertion' in params ? params.SAMLAssertion : null;
        this.PrincipalArn = 'PrincipalArn' in params ? params.PrincipalArn : null;
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

module.exports = {
    AssumeRoleWithSAMLResponse: AssumeRoleWithSAMLResponse,
    ApiKey: ApiKey,
    AssumeRoleWithWebIdentityRequest: AssumeRoleWithWebIdentityRequest,
    AssumeRoleWithWebIdentityResponse: AssumeRoleWithWebIdentityResponse,
    GetFederationTokenResponse: GetFederationTokenResponse,
    QueryApiKeyResponse: QueryApiKeyResponse,
    AssumeRoleResponse: AssumeRoleResponse,
    QueryApiKeyRequest: QueryApiKeyRequest,
    GetFederationTokenRequest: GetFederationTokenRequest,
    Tag: Tag,
    GetCallerIdentityResponse: GetCallerIdentityResponse,
    Credentials: Credentials,
    AssumeRoleRequest: AssumeRoleRequest,
    GetCallerIdentityRequest: GetCallerIdentityRequest,
    AssumeRoleWithSAMLRequest: AssumeRoleWithSAMLRequest,

}
