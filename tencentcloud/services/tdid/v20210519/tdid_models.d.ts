/**
 * 验证凭证参数值
 */
export interface VerifyFunctionArg {
    /**
      * CPT ID
      */
    CptId: number;
    /**
      * issuer did
      */
    Issuer: string;
    /**
      * 过期时间
      */
    ExpirationDate: number;
    /**
      * 声明
      */
    ClaimJson: string;
    /**
      * 颁发时间
      */
    IssuanceDate: number;
    /**
      * context值
      */
    Context: string;
    /**
      * id值
      */
    Id: string;
    /**
      * 签名值
      */
    Proof: Proof;
    /**
      * type值
      */
    Type: Array<string>;
}
/**
 * CreateCredential请求参数结构体
 */
export interface CreateCredentialRequest {
    /**
      * 参数集合，详见示例
      */
    FunctionArg: FunctionArg;
    /**
      * 参数集合，详见示例
      */
    TransactionArg: TransactionArg;
    /**
      * 版本
      */
    VersionCredential: string;
}
/**
 * 创建凭证第二个
 */
export interface TransactionArg {
    /**
      * 凭证did
      */
    InvokerTDid: string;
}
/**
 * CreateTDid请求参数结构体
 */
export interface CreateTDidRequest {
    /**
      * 群组ID
      */
    GroupId: number;
    /**
      * 网络ID
      */
    ClusterId: string;
    /**
      * 部署机构为1，否则为0
      */
    Relegation: number;
}
/**
 * 创建凭证入参的FunctionArg
 */
export interface FunctionArg {
    /**
      * CPT ID
      */
    CptId: number;
    /**
      * 签发者 did
      */
    Issuer: string;
    /**
      * 过期时间
      */
    ExpirationDate: string;
    /**
      * 声明
      */
    ClaimJson: string;
}
/**
 * CreateSelectiveCredential请求参数结构体
 */
export interface CreateSelectiveCredentialRequest {
    /**
      * 参数集合
      */
    FunctionArg: VerifyFunctionArg;
    /**
      * 批露策略id
      */
    PolicyId: number;
}
/**
 * CreateTDid返回参数结构体
 */
export interface CreateTDidResponse {
    /**
      * TDID
      */
    Did: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSelectiveCredential返回参数结构体
 */
export interface CreateSelectiveCredentialResponse {
    /**
      * 凭证字符串
      */
    CredentialData: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * VerifyCredential返回参数结构体
 */
export interface VerifyCredentialResponse {
    /**
      * 是否验证成功
      */
    Result: boolean;
    /**
      * 验证返回码
      */
    VerifyCode: number;
    /**
      * 验证消息
      */
    VerifyMessage: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCredential返回参数结构体
 */
export interface CreateCredentialResponse {
    /**
      * Credential的具体信息
      */
    CredentialData: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * VerifyCredential请求参数结构体
 */
export interface VerifyCredentialRequest {
    /**
      * 参数集合
      */
    FunctionArg: VerifyFunctionArg;
}
/**
 * 验证凭证签名
 */
export interface Proof {
    /**
      * 创建时间
      */
    Created: number;
    /**
      * 创建着did
      */
    Creator: string;
    /**
      * salt值
      */
    SaltJson: string;
    /**
      * 签名
      */
    SignatureValue: string;
    /**
      * type类型
      */
    Type: string;
}
