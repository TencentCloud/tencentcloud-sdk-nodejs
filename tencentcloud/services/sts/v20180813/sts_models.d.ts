/**
 * AssumeRoleWithSAML返回参数结构体
 */
export interface AssumeRoleWithSAMLResponse {
    /**
      * 对象里面包含 Token，TmpSecretId，TmpSecretKey 三元组
      */
    Credentials?: Credentials;
    /**
      * 证书无效的时间，返回 Unix 时间戳，精确到秒
      */
    ExpiredTime?: number;
    /**
      * 证书无效的时间，以 ISO8601 格式的 UTC 时间表示
      */
    Expiration?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * API密钥数据列表
 */
export interface ApiKey {
    /**
      * 密钥ID
      */
    SecretId: string;
    /**
      * 创建时间(时间戳)
      */
    CreateTime: number;
    /**
      * 状态(2:有效, 3:禁用, 4:已删除)
      */
    Status: number;
}
/**
 * AssumeRoleWithWebIdentity请求参数结构体
 */
export interface AssumeRoleWithWebIdentityRequest {
    /**
      * 身份提供商名称
      */
    ProviderId: string;
    /**
      * IdP签发的OIDC令牌
      */
    WebIdentityToken: string;
    /**
      * 角色访问描述名
      */
    RoleArn: string;
    /**
      * 会话名称
      */
    RoleSessionName: string;
    /**
      * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
      */
    DurationSeconds?: number;
}
/**
 * AssumeRoleWithWebIdentity返回参数结构体
 */
export interface AssumeRoleWithWebIdentityResponse {
    /**
      * 临时秘钥过期时间(时间戳)
      */
    ExpiredTime: number;
    /**
      * 临时秘钥过期时间
      */
    Expiration: string;
    /**
      * 临时秘钥
      */
    Credentials: Credentials;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetFederationToken返回参数结构体
 */
export interface GetFederationTokenResponse {
    /**
      * 临时证书
      */
    Credentials?: Credentials;
    /**
      * 临时证书有效的时间，返回 Unix 时间戳，精确到秒
      */
    ExpiredTime?: number;
    /**
      * 证书有效的时间，以 iso8601 格式的 UTC 时间表示
注意：此字段可能返回 null，表示取不到有效值。
      */
    Expiration?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryApiKey返回参数结构体
 */
export interface QueryApiKeyResponse {
    /**
      * 密钥ID列表
      */
    IdKeys?: Array<ApiKey>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AssumeRole返回参数结构体
 */
export interface AssumeRoleResponse {
    /**
      * 临时安全证书
      */
    Credentials?: Credentials;
    /**
      * 证书无效的时间，返回 Unix 时间戳，精确到秒
      */
    ExpiredTime?: number;
    /**
      * 证书无效的时间，以 iso8601 格式的 UTC 时间表示
      */
    Expiration?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryApiKey请求参数结构体
 */
export interface QueryApiKeyRequest {
    /**
      * 待查询的账号(不填默认查当前账号)
      */
    TargetUin?: number;
}
/**
 * GetFederationToken请求参数结构体
 */
export interface GetFederationTokenRequest {
    /**
      * 您可以自定义调用方英文名称，由字母组成。
      */
    Name: string;
    /**
      * 授予该临时证书权限的CAM策略
注意：
1、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。
2、策略中不能包含 principal 元素。
3、该参数需要做urlencode。
      */
    Policy: string;
    /**
      * 指定临时证书的有效期，单位：秒，默认1800秒，主账号最长可设定有效期为7200秒，子账号最长可设定有效期为129600秒。
      */
    DurationSeconds?: number;
}
/**
 * GetCallerIdentity返回参数结构体
 */
export interface GetCallerIdentityResponse {
    /**
      * 当前调用者ARN。
      */
    Arn?: string;
    /**
      * 当前调用者所属主账号Uin。
      */
    AccountId?: string;
    /**
      * 身份标识。
1. 调用者是云账号时，返回的是当前账号Uin
2. 调用者是角色时，返回的是roleId:roleSessionName
3. 调用者是联合身份时，返回的是uin:federatedUserName
      */
    UserId?: string;
    /**
      * 密钥所属账号Uin。
1. 调用者是云账号，返回的当前账号Uin
2, 调用者是角色，返回的申请角色密钥的账号Uin
      */
    PrincipalId?: string;
    /**
      * 身份类型。
      */
    Type?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 临时证书
 */
export interface Credentials {
    /**
      * token。token长度和绑定的策略有关，最长不超过4096字节。
      */
    Token: string;
    /**
      * 临时证书密钥ID。最长不超过1024字节。
      */
    TmpSecretId: string;
    /**
      * 临时证书密钥Key。最长不超过1024字节。
      */
    TmpSecretKey: string;
}
/**
 * AssumeRole请求参数结构体
 */
export interface AssumeRoleRequest {
    /**
      * 角色的资源描述，可在[访问管理](https://console.cloud.tencent.com/cam/role)，点击角色名获取。
普通角色：
qcs::cam::uin/12345678:role/4611686018427397919、qcs::cam::uin/12345678:roleName/testRoleName
服务角色：
qcs::cam::uin/12345678:role/tencentcloudServiceRole/4611686018427397920、qcs::cam::uin/12345678:role/tencentcloudServiceRoleName/testServiceRoleName
      */
    RoleArn: string;
    /**
      * 临时会话名称，由用户自定义名称。
长度在2到128之间，可包含大小写字符，数字以及特殊字符：=,.@_-。 正则为：[\w+=,.@_-]*
      */
    RoleSessionName: string;
    /**
      * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
      */
    DurationSeconds?: number;
    /**
      * 策略描述
注意：
1、policy 需要做 urlencode（如果通过 GET 方法请求云 API，发送请求前，所有参数都需要按照[云 API 规范](https://cloud.tencent.com/document/api/598/33159#1.-.E6.8B.BC.E6.8E.A5.E8.A7.84.E8.8C.83.E8.AF.B7.E6.B1.82.E4.B8.B2)再 urlencode 一次）。
2、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。
3、策略中不能包含 principal 元素。
      */
    Policy?: string;
    /**
      * 角色外部ID，可在[访问管理](https://console.cloud.tencent.com/cam/role)，点击角色名获取。
长度在2到128之间，可包含大小写字符，数字以及特殊字符：=,.@:/-。 正则为：[\w+=,.@:\/-]*
      */
    ExternalId?: string;
}
/**
 * GetCallerIdentity请求参数结构体
 */
export declare type GetCallerIdentityRequest = null;
/**
 * AssumeRoleWithSAML请求参数结构体
 */
export interface AssumeRoleWithSAMLRequest {
    /**
      * base64 编码的 SAML 断言信息
      */
    SAMLAssertion: string;
    /**
      * 扮演者访问描述名
      */
    PrincipalArn: string;
    /**
      * 角色访问描述名
      */
    RoleArn: string;
    /**
      * 会话名称
      */
    RoleSessionName: string;
    /**
      * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
      */
    DurationSeconds?: number;
}
