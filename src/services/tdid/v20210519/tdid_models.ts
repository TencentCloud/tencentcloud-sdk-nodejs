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
 * 凭证链上状态信息
 */
export interface CredentialStatus {
  /**
   * 凭证唯一id
   */
  CredentialId: string
  /**
   * 凭证状态（0：吊销；1：有效）
   */
  Status: number
  /**
   * 凭证颁发者Did
   */
  Issuer: string
  /**
   * 凭证摘要
注意：此字段可能返回 null，表示取不到有效值。
   */
  Digest: string
  /**
   * 凭证签名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Signature: string
  /**
   * 更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeStamp: number
}

/**
 * CreateTDid请求参数结构体
 */
export interface CreateTDidRequest {
  /**
   * 群组ID
   */
  GroupId: number
  /**
   * 网络ID
   */
  ClusterId: string
  /**
   * 部署机构为1，否则为0
   */
  Relegation: number
}

/**
 * CreateSelectiveCredential请求参数结构体
 */
export interface CreateSelectiveCredentialRequest {
  /**
   * 参数集合
   */
  FunctionArg: VerifyFunctionArg
  /**
   * 批露策略id
   */
  PolicyId: number
}

/**
 * CreateTDidByPrivateKey返回参数结构体
 */
export interface CreateTDidByPrivateKeyResponse {
  /**
   * did的具体信息
   */
  Did: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckChain返回参数结构体
 */
export interface CheckChainResponse {
  /**
   * 1为盟主，0为非盟主
   */
  RoleType: number
  /**
   * 链ID
   */
  ChainId: string
  /**
   * 应用名称
   */
  AppName: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDidByPublicKey请求参数结构体
 */
export interface CreateTDidByPublicKeyRequest {
  /**
   * 网络ID
   */
  ClusterId: string
  /**
   * 群组ID
   */
  GroupId: number
  /**
   * 身份公钥
   */
  PublicKey: string
  /**
   * 加密公钥
   */
  EncryptPubKey?: string
}

/**
 * CreateCredential返回参数结构体
 */
export interface CreateCredentialResponse {
  /**
   * Credential的具体信息
   */
  CredentialData: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAuthorityIssuer请求参数结构体
 */
export interface GetAuthorityIssuerRequest {
  /**
   * tdid
   */
  Did: string
}

/**
 * CreateCredential请求参数结构体
 */
export interface CreateCredentialRequest {
  /**
   * 参数集合，详见示例
   */
  FunctionArg: FunctionArg
  /**
   * 参数集合，详见示例
   */
  TransactionArg: TransactionArg
  /**
   * 版本
   */
  VersionCredential: string
  /**
   * 是否未签名
   */
  UnSigned?: boolean
}

/**
 * GetDidDocument请求参数结构体
 */
export interface GetDidDocumentRequest {
  /**
   * tdid
   */
  Did: string
}

/**
 * GetCredentialStatus请求参数结构体
 */
export interface GetCredentialStatusRequest {
  /**
   * 凭证id
   */
  CredentialId: string
}

/**
 * VerifyCredential返回参数结构体
 */
export interface VerifyCredentialResponse {
  /**
   * 是否验证成功
   */
  Result: boolean
  /**
   * 验证返回码
   */
  VerifyCode: number
  /**
   * 验证消息
   */
  VerifyMessage: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetCredentialStatus返回参数结构体
 */
export interface SetCredentialStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCptInfo返回参数结构体
 */
export interface GetCptInfoResponse {
  /**
   * CptJsonData的具体信息
   */
  CptJsonData: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建凭证第二个
 */
export interface TransactionArg {
  /**
   * 凭证did
   */
  InvokerTDid: string
}

/**
 * CheckChain请求参数结构体
 */
export interface CheckChainRequest {
  /**
   * 群组ID
   */
  GroupId: number
  /**
   * 网络ID
   */
  ClusterId: string
  /**
   * did服务机构名称
   */
  AgencyName: string
}

/**
 * GetAuthorityIssuer返回参数结构体
 */
export interface GetAuthorityIssuerResponse {
  /**
   * 名称
   */
  Name: string
  /**
   * 区块链网络id
   */
  ClusterId: string
  /**
   * 区块链群组id
   */
  GroupId: number
  /**
   * 权威机构did
   */
  Did: string
  /**
   * 机构备注信息
   */
  Remark: string
  /**
   * 注册时间
   */
  RegisterTime: string
  /**
   * 认证时间
   */
  RecognizeTime: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDidDocument返回参数结构体
 */
export interface GetDidDocumentResponse {
  /**
   * 名称
   */
  Name: string
  /**
   * DID文档
   */
  Document: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTDid返回参数结构体
 */
export interface CreateTDidResponse {
  /**
   * TDID
   */
  Did: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSelectiveCredential返回参数结构体
 */
export interface CreateSelectiveCredentialResponse {
  /**
   * 凭证字符串
   */
  CredentialData: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterCpt请求参数结构体
 */
export interface RegisterCptRequest {
  /**
   * 群组ID
   */
  GroupId: number
  /**
   * 网络ID
   */
  ClusterId: string
  /**
   * CptJson的具体信息
   */
  CptJson: string
  /**
   * cptId 不填默认自增
   */
  CptId?: number
}

/**
 * CreateTDidByPublicKey返回参数结构体
 */
export interface CreateTDidByPublicKeyResponse {
  /**
   * did具体信息
   */
  Did: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 验证凭证签名
 */
export interface Proof {
  /**
   * 创建时间
   */
  Created: number
  /**
   * 创建着did
   */
  Creator: string
  /**
   * salt值
   */
  SaltJson: string
  /**
   * 签名
   */
  SignatureValue: string
  /**
   * type类型
   */
  Type: string
}

/**
 * 验证凭证参数值
 */
export interface VerifyFunctionArg {
  /**
   * CPT ID
   */
  CptId: number
  /**
   * issuer did
   */
  Issuer: string
  /**
   * 过期时间
   */
  ExpirationDate: number
  /**
   * 声明
   */
  ClaimJson: string
  /**
   * 颁发时间
   */
  IssuanceDate: number
  /**
   * context值
   */
  Context: string
  /**
   * id值
   */
  Id: string
  /**
   * 签名值
   */
  Proof: Proof
  /**
   * type值
   */
  Type: Array<string>
}

/**
 * 创建凭证入参的FunctionArg
 */
export interface FunctionArg {
  /**
   * CPT ID
   */
  CptId: number
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
}

/**
 * CreateTDidByPrivateKey请求参数结构体
 */
export interface CreateTDidByPrivateKeyRequest {
  /**
   * 网络ID
   */
  ClusterId: string
  /**
   * 群组ID
   */
  GroupId: number
  /**
   * 私钥
   */
  PrivateKey: string
}

/**
 * VerifyCredential请求参数结构体
 */
export interface VerifyCredentialRequest {
  /**
   * 参数集合
   */
  FunctionArg: VerifyFunctionArg
}

/**
 * SetCredentialStatus请求参数结构体
 */
export interface SetCredentialStatusRequest {
  /**
   * 凭证状态
   */
  CredentialStatus: CredentialStatus
}

/**
 * GetCptInfo请求参数结构体
 */
export interface GetCptInfoRequest {
  /**
   * Cpt索引
   */
  CptIndex: number
}

/**
 * GetCredentialStatus返回参数结构体
 */
export interface GetCredentialStatusResponse {
  /**
   * 凭证状态信息
   */
  CredentialStatus: CredentialStatus
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterCpt返回参数结构体
 */
export interface RegisterCptResponse {
  /**
   * 凭证模板索引
   */
  Id: number
  /**
   * 凭证模板id
   */
  CptId: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
