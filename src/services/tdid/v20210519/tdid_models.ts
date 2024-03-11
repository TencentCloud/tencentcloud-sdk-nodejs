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

/**
 * GetTDidDocument返回参数结构体
 */
export interface GetTDidDocumentResponse {
  /**
   * DID文档内容
   */
  Document?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyPresentation请求参数结构体
 */
export interface VerifyPresentationRequest {
  /**
   * VP持有人的did标识
   */
  Did?: string
  /**
   * 可验证表达内容
   */
  PresentationData?: string
  /**
   * DID应用id
   */
  DAPId?: number
  /**
   * 随机验证码
   */
  VerifyCode?: string
}

/**
 * SetTDidAttribute返回参数结构体
 */
export interface SetTDidAttributeResponse {
  /**
   * 上链交易信息
   */
  Transaction?: ChainTransaction
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IssueCredential返回参数结构体
 */
export interface IssueCredentialResponse {
  /**
   * 可验证凭证内容
   */
  CredentialData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源计数统计数据
 */
export interface ResourceCounterData {
  /**
   * DID总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DidCnt?: number
  /**
   * VC总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VCCnt?: number
  /**
   * CPT总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPTCnt?: number
  /**
   *  VC验证总数 
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyCnt?: number
  /**
   * 权威机构数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthCnt?: number
}

/**
 * SetTDidAttribute请求参数结构体
 */
export interface SetTDidAttributeRequest {
  /**
   * DID标识符
   */
  Did?: string
  /**
   * 属性名值对数组
   */
  Attributes?: Array<DidAttribute>
  /**
   * DID应用Id
   */
  DAPId?: number
  /**
   * 操作鉴权凭证
   */
  OperateCredential?: string
}

/**
 * CreateDisclosedCredential请求参数结构体
 */
export interface CreateDisclosedCredentialRequest {
  /**
   * 披露策略id，PolicyJson和PolicyId任选其一
   */
  PolicyId?: number
  /**
   * 凭证文本内容，FunctionArg和CredentialText任选其一
   */
  CredentialData?: string
  /**
   * 披露策略文本
   */
  PolicyJson?: string
  /**
   * DID应用ID
   */
  DAPId?: number
}

/**
 * QueryCPT返回参数结构体
 */
export interface QueryCPTResponse {
  /**
   * 凭证模板内容
   */
  CPTJson?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDidByPubKey返回参数结构体
 */
export interface CreateTDidByPubKeyResponse {
  /**
   * did标识
   */
  Did?: string
  /**
   * 链上交易信息
   */
  Transaction?: ChainTransaction
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryAuthorityInfo返回参数结构体
 */
export interface QueryAuthorityInfoResponse {
  /**
   * 名称
   */
  Name?: string
  /**
   * 权威机构did
   */
  Did?: string
  /**
   * 状态：1为已认证，2为未认证
   */
  Status?: number
  /**
   * 机构备注信息
   */
  Description?: string
  /**
   * 认证时间
   */
  RecognizeTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyCredentials返回参数结构体
 */
export interface VerifyCredentialsResponse {
  /**
   * 是否验证成功
   */
  Result?: boolean
  /**
   * 验证返回码
   */
  VerifyCode?: number
  /**
   * 验证结果信息
   */
  VerifyMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCredentialState返回参数结构体
 */
export interface GetCredentialStateResponse {
  /**
   * 凭证状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CredentialState?: CredentialState
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IssueCredential请求参数结构体
 */
export interface IssueCredentialRequest {
  /**
   * 参数集合，详见示例
   */
  CRDLArg?: CRDLArg
  /**
   * 是否未签名
   */
  UnSigned?: boolean
  /**
   * DID应用id
   */
  DAPId?: number
}

/**
 * GetTDidByObjectId返回参数结构体
 */
export interface GetTDidByObjectIdResponse {
  /**
   * DID标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Did?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDisclosedCredential返回参数结构体
 */
export interface CreateDisclosedCredentialResponse {
  /**
   * 凭证字符串
   */
  CredentialData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOverSummary请求参数结构体
 */
export type GetOverSummaryRequest = null

/**
 * GetTDidPubKey请求参数结构体
 */
export interface GetTDidPubKeyRequest {
  /**
   * DID标识
   */
  Did?: string
  /**
   * DID应用Id
   */
  DAPId?: number
}

/**
 * GetTDidDocument请求参数结构体
 */
export interface GetTDidDocumentRequest {
  /**
   * DID标识
   */
  Did?: string
  /**
   * DID应用ID
   */
  DAPId?: number
}

/**
 * CreateTDidByHost返回参数结构体
 */
export interface CreateTDidByHostResponse {
  /**
   * DID标识
   */
  Did?: string
  /**
   * 链上交易信息
   */
  Transaction?: ChainTransaction
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyCredentials请求参数结构体
 */
export interface VerifyCredentialsRequest {
  /**
   * 0:仅验证签名，1:验证签名和链上状态，2, 仅验证链上状态，默认为0, 3.验证DID和凭证状态以及签名，4. 验证历史凭证有效性
   */
  VerifyType?: number
  /**
   * 凭证内容
   */
  CredentialData?: string
  /**
   * DID应用id
   */
  DAPId?: number
}

/**
 * QueryAuthorityInfo请求参数结构体
 */
export interface QueryAuthorityInfoRequest {
  /**
   * DID标识
   */
  Did?: string
  /**
   * DID应用id
   */
  DAPId?: number
  /**
   * 权威机构名称
   */
  Name?: string
}

/**
 * VerifyPresentation返回参数结构体
 */
export interface VerifyPresentationResponse {
  /**
   * 是否验证成功
   */
  Result?: boolean
  /**
   * 验证返回码
   */
  VerifyCode?: number
  /**
   * 验证消息
   */
  VerifyMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCredentialState请求参数结构体
 */
export interface GetCredentialStateRequest {
  /**
   * 凭证唯一Id
   */
  CredentialId?: string
  /**
   * 用户应用Id
   */
  DAPId?: number
}

/**
 * QueryCPT请求参数结构体
 */
export interface QueryCPTRequest {
  /**
   * DID应用id
   */
  DAPId?: number
  /**
   * 凭证模板id
   */
  CPTId?: number
}

/**
 * CreatePresentation请求参数结构体
 */
export interface CreatePresentationRequest {
  /**
   * DID应用id
   */
  DAPId?: number
  /**
   * 凭证列表
   */
  Credentials?: Array<string>
  /**
   * VP持有人的DID标识
   */
  Did?: string
  /**
   * VP随机验证码
   */
  VerifyCode?: string
  /**
   * 选择性披露策略
   */
  PolicyJson?: string
  /**
   * 是否签名，ture时signatureValue为待签名内容由调用端自行签名，false时signatureValue为平台自动已签名的内容。默认false
   */
  Unsigned?: boolean
  /**
   * 可验证凭证证明列表
   */
  CredentialList?: Array<CredentialProof>
}

/**
 * CreateTDidByHost请求参数结构体
 */
export interface CreateTDidByHostRequest {
  /**
   * DID应用ID
   */
  DAPId?: number
  /**
   * 自定义DID文档json属性
   */
  CustomAttribute?: string
}

/**
 * GetAppSummary返回参数结构体
 */
export interface GetAppSummaryResponse {
  /**
   * 用户参与应用的统计指标 
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppCounter?: ResourceCounterData
  /**
   * 用户创建资源的统计指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserCounter?: ResourceCounterData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 颁发凭证的数据参数
 */
export interface CRDLArg {
  /**
   * CPT ID
   */
  CPTId: number
  /**
   * 签发者 did
   */
  Issuer: string
  /**
   * 过期时间
   */
  ExpirationDate: string
  /**
   * 声明
   */
  ClaimJson: string
  /**
   * 凭证类型
   */
  Type?: Array<string>
  /**
   * 多方签名的用户did
   */
  Parties?: Array<string>
}

/**
 * GetTDidPubKey返回参数结构体
 */
export interface GetTDidPubKeyResponse {
  /**
   * DID公钥数组
   */
  AuthPublicKeyList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCredentialState返回参数结构体
 */
export interface UpdateCredentialStateResponse {
  /**
   * 更新是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeactivateTDid返回参数结构体
 */
export interface DeactivateTDidResponse {
  /**
   * 上链交易信息
   */
  Transaction?: ChainTransaction
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可验证凭证证明信息
 */
export interface CredentialProof {
  /**
   * 可验证凭证内容
   */
  Credential: string
}

/**
 * 凭证链上状态信息
 */
export interface CredentialState {
  /**
   * 凭证唯一id
   */
  Id?: string
  /**
   * 凭证状态（0：吊销；1：有效）
   */
  Status?: number
  /**
   * 凭证颁发者Did
   */
  Issuer?: string
  /**
   * VC摘要，对应凭证Proof的vcDigest字段
   */
  VCDigest?: string
  /**
   * 交易摘要，对应凭证Proof的txDigest字段
   */
  TXDigest?: string
  /**
   * 颁布凭证的UTC时间戳
   */
  IssueTime?: number
  /**
   * 凭证过期的UTC时间戳
   */
  ExpireTime?: number
  /**
   * 凭证模板id
   */
  CPTId?: number
  /**
   * 凭证签名
   */
  Signature?: string
  /**
   * 元数据摘要
   */
  MetaDigest?: string
}

/**
 * 链上交易信息
 */
export interface ChainTransaction {
  /**
   * 交易哈希
   */
  TransactionHash: string
}

/**
 * CreatePresentation返回参数结构体
 */
export interface CreatePresentationResponse {
  /**
   * 可验证表达内容
   */
  PresentationData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * did自定义属性
 */
export interface DidAttribute {
  /**
   * 键名
   */
  Key: string
  /**
   * 键值
   */
  Val: string
}

/**
 * UpdateCredentialState请求参数结构体
 */
export interface UpdateCredentialStateRequest {
  /**
   * DID应用Id
   */
  DAPId?: number
  /**
   * 更新VC状态的临时凭证内容，通过创建凭证接口(CreateCredential)生成并签名，凭证类型为：OperateCredential, 为安全起见凭证过期时间不适合太长，建议设置为1分钟内
   */
  OperateCredential?: string
}

/**
 * GetOverSummary返回参数结构体
 */
export interface GetOverSummaryResponse {
  /**
   * 用户参与应用的统计指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppCounter?: ResourceCounterData
  /**
   * 用户部署应用的统计指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserCounter?: ResourceCounterData
  /**
   * 用户参与的应用总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppCnt?: number
  /**
   * 用户部署的应用总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployCnt?: number
  /**
   * 部署网络子链总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChainCnt?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDidByPubKey请求参数结构体
 */
export interface CreateTDidByPubKeyRequest {
  /**
   * DID应用id
   */
  DAPId?: number
  /**
   * pem格式的认证公钥
   */
  PublicKey?: string
  /**
   * 自定义DID初始化属性json字符串
   */
  CustomAttribute?: string
  /**
   * 0:did存在返回错误，1:did存在返回该did，默认:0
   */
  IgnoreExisted?: number
}

/**
 * DeactivateTDid请求参数结构体
 */
export interface DeactivateTDidRequest {
  /**
   * DID标识符
   */
  Did?: string
  /**
   * 设置DID禁用状态的临时凭证内容，通过创建凭证接口(CreateCredential)生成并签名，凭证类型为：OperateCredential, 为安全起见凭证过期时间不适合太长，建议设置为1分钟内
   */
  OperateCredential?: string
  /**
   * DID应用Id
   */
  DAPId?: number
  /**
   * 是否禁用
   */
  Deactivated?: string
}

/**
 * GetTDidByObjectId请求参数结构体
 */
export interface GetTDidByObjectIdRequest {
  /**
   * 业务层为DID设置的唯一标识
   */
  ObjectId?: string
  /**
   * DID应用Id
   */
  DAPId?: number
}

/**
 * GetAppSummary请求参数结构体
 */
export interface GetAppSummaryRequest {
  /**
   * DID应用Id
   */
  DAPId?: number
}
