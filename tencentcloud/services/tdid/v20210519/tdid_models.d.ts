/**
 * CreateTDidByPubKey返回参数结构体
 */
export interface CreateTDidByPubKeyResponse {
    /**
     * did标识
     */
    Did?: string;
    /**
     * 链上交易信息
     */
    Transaction?: ChainTransaction;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTDidDocument返回参数结构体
 */
export interface GetTDidDocumentResponse {
    /**
     * DID文档内容
     */
    Document?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetCredentialState请求参数结构体
 */
export interface GetCredentialStateRequest {
    /**
     * 凭证唯一Id
     */
    CredentialId?: string;
    /**
     * 用户应用Id
     */
    DAPId?: number;
}
/**
 * CheckNewPurchase请求参数结构体
 */
export declare type CheckNewPurchaseRequest = null;
/**
 * VerifyCredentials请求参数结构体
 */
export interface VerifyCredentialsRequest {
    /**
     * 0:仅验证签名，1:验证签名和链上状态，2, 仅验证链上状态，默认为0, 3.验证DID和凭证状态以及签名，4. 验证历史凭证有效性
     */
    VerifyType?: number;
    /**
     * 凭证内容
     */
    CredentialData?: string;
    /**
     * DID应用id
     */
    DAPId?: number;
}
/**
 * 颁发凭证的数据参数
 */
export interface CRDLArg {
    /**
     * CPT ID
     */
    CPTId: number;
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
    /**
     * 凭证类型
     */
    Type?: Array<string>;
    /**
     * 多方签名的用户did
     */
    Parties?: Array<string>;
}
/**
 * GetTDidDocument请求参数结构体
 */
export interface GetTDidDocumentRequest {
    /**
     * DID标识
     */
    Did?: string;
    /**
     * DID应用ID
     */
    DAPId?: number;
}
/**
 * IssueCredential返回参数结构体
 */
export interface IssueCredentialResponse {
    /**
     * 可验证凭证内容
     */
    CredentialData?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetCredentialState返回参数结构体
 */
export interface GetCredentialStateResponse {
    /**
     * 凭证状态信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CredentialState?: CredentialState;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTDidByHost请求参数结构体
 */
export interface CreateTDidByHostRequest {
    /**
     * DID应用ID
     */
    DAPId?: number;
    /**
     * 自定义DID文档json属性
     */
    CustomAttribute?: string;
}
/**
 * IssueCredential请求参数结构体
 */
export interface IssueCredentialRequest {
    /**
     * 参数集合，详见示例
     */
    CRDLArg?: CRDLArg;
    /**
     * 是否未签名
     */
    UnSigned?: boolean;
    /**
     * DID应用id
     */
    DAPId?: number;
}
/**
 * VerifyCredentials返回参数结构体
 */
export interface VerifyCredentialsResponse {
    /**
     * 是否验证成功
     */
    Result?: boolean;
    /**
     * 验证返回码
     */
    VerifyCode?: number;
    /**
     * 验证结果信息
     */
    VerifyMessage?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateCredentialState请求参数结构体
 */
export interface UpdateCredentialStateRequest {
    /**
     * DID应用Id
     */
    DAPId?: number;
    /**
     * 更新VC状态的临时凭证内容，通过创建凭证接口(CreateCredential)生成并签名，凭证类型为：OperateCredential, 为安全起见凭证过期时间不适合太长，建议设置为1分钟内
     */
    OperateCredential?: string;
}
/**
 * 凭证链上状态信息
 */
export interface CredentialState {
    /**
     * 凭证唯一id
     */
    Id?: string;
    /**
     * 凭证状态（0：吊销；1：有效）
     */
    Status?: number;
    /**
     * 凭证颁发者Did
     */
    Issuer?: string;
    /**
     * VC摘要，对应凭证Proof的vcDigest字段
     */
    VCDigest?: string;
    /**
     * 交易摘要，对应凭证Proof的txDigest字段
     */
    TXDigest?: string;
    /**
     * 颁布凭证的UTC时间戳
     */
    IssueTime?: number;
    /**
     * 凭证过期的UTC时间戳
     */
    ExpireTime?: number;
    /**
     * 凭证模板id
     */
    CPTId?: number;
    /**
     * 凭证签名
     */
    Signature?: string;
    /**
     * 元数据摘要
     */
    MetaDigest?: string;
}
/**
 * CreateTDidByPubKey请求参数结构体
 */
export interface CreateTDidByPubKeyRequest {
    /**
     * DID应用id
     */
    DAPId?: number;
    /**
     * pem格式的认证公钥
     */
    PublicKey?: string;
    /**
     * 自定义DID初始化属性json字符串
     */
    CustomAttribute?: string;
    /**
     * 0:did存在返回错误，1:did存在返回该did，默认:0
     */
    IgnoreExisted?: number;
}
/**
 * DeactivateTDid请求参数结构体
 */
export interface DeactivateTDidRequest {
    /**
     * DID标识符
     */
    Did?: string;
    /**
     * 设置DID禁用状态的临时凭证内容，通过创建凭证接口(CreateCredential)生成并签名，凭证类型为：OperateCredential, 为安全起见凭证过期时间不适合太长，建议设置为1分钟内
     */
    OperateCredential?: string;
    /**
     * DID应用Id
     */
    DAPId?: number;
    /**
     * 是否禁用
     */
    Deactivated?: string;
}
/**
 * CheckNewPurchase返回参数结构体
 */
export interface CheckNewPurchaseResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateCredentialState返回参数结构体
 */
export interface UpdateCredentialStateResponse {
    /**
     * 更新是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 链上交易信息
 */
export interface ChainTransaction {
    /**
     * 交易哈希
     */
    TransactionHash: string;
}
/**
 * DeactivateTDid返回参数结构体
 */
export interface DeactivateTDidResponse {
    /**
     * 上链交易信息
     */
    Transaction?: ChainTransaction;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTDidByHost返回参数结构体
 */
export interface CreateTDidByHostResponse {
    /**
     * DID标识
     */
    Did?: string;
    /**
     * 链上交易信息
     */
    Transaction?: ChainTransaction;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
