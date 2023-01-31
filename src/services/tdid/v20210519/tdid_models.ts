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
 * QueryPolicy请求参数结构体
 */
export interface QueryPolicyRequest {
  /**
   * policy索引
   */
  PolicyIndex: number
}

/**
 * RegisterClaimPolicy请求参数结构体
 */
export interface RegisterClaimPolicyRequest {
  /**
   * Cpt索引
   */
  CptIndex: number

  /**
   * 披露策略
   */
  Policy: string
}

/**
 * GetDidServiceDetail返回参数结构体
 */
export interface GetDidServiceDetailResponse {
  /**
   * did服务信息
   */
  DidService: DidServiceInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetConsortiumList请求参数结构体
 */
export type GetConsortiumListRequest = null

/**
 * DownCpt返回参数结构体
 */
export interface DownCptResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCredentialIssueTrend返回参数结构体
 */
export interface GetCredentialIssueTrendResponse {
  /**
   * Trend集合
   */
  Trend: Array<Trend>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateDidService返回参数结构体
 */
export interface CreateDidServiceResponse {
  /**
   * 服务信息
   */
  Task: Task

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetConsortiumList返回参数结构体
 */
export interface GetConsortiumListResponse {
  /**
   * 联盟列表
   */
  ConsortiumList: Array<ConsortiumItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCredentialCptRank请求参数结构体
 */
export interface GetCredentialCptRankRequest {
  /**
   * 开始时间（支持到天 2021-4-23）
   */
  StartTime: string

  /**
   * 结束时间（支持到天 2021-4-23）
   */
  EndTime: string

  /**
   * 网络ID
   */
  ClusterId?: string
}

/**
 * GetPolicyList请求参数结构体
 */
export interface GetPolicyListRequest {
  /**
   * 起始位置
   */
  DisplayStart: number

  /**
   * 长度
   */
  DisplayLength: number
}

/**
 * GetConsortiumClusterList返回参数结构体
 */
export interface GetConsortiumClusterListResponse {
  /**
   * 网络列表
   */
  ClusterList: Array<BcosClusterItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDidService、CheckDidDeploy出参
 */
export interface Task {
  /**
   * 任务ID
   */
  Id: number

  /**
   * 应用ID
   */
  AppId: number

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 服务ID
   */
  ServiceId: number

  /**
   * 0: 部署中，1:部署成功，其他失败
   */
  Status: number

  /**
   * 错误码
   */
  ErrorCode: string

  /**
   * 错误提示
   */
  ErrorMsg: string

  /**
   * 生成时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string
}

/**
 * GetCptList请求参数结构体
 */
export interface GetCptListRequest {
  /**
   * 起始位置
   */
  DisplayStart: number

  /**
   * 长度
   */
  DisplayLength: number

  /**
   * 模板类型，0: 所有模板，1: 系统模板，2: 用户模板，3:普通模板
   */
  CptType?: number
}

/**
 * GetAuthoritiesList请求参数结构体
 */
export interface GetAuthoritiesListRequest {
  /**
   * 页码，从1开始
   */
  PageNumber: number

  /**
   * 每页大小
   */
  PageSize: number

  /**
   * Did信息
   */
  Did?: string

  /**
   * 权威认证 1:已认证，2:未认证
   */
  Status?: number
}

/**
 * GetAgencyTDid请求参数结构体
 */
export interface GetAgencyTDidRequest {
  /**
   * 网络ID
   */
  ClusterId: string
}

/**
 * RemoveHash请求参数结构体
 */
export interface RemoveHashRequest {
  /**
   * 合约CNS地址
   */
  Hash: string
}

/**
 * GetGroupList请求参数结构体
 */
export interface GetGroupListRequest {
  /**
   * 0为未部署DID服务的群组，1为已部署DID服务的群组
   */
  Status: number

  /**
   * 网络ID
   */
  ClusterId: string
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
 * GetDeployInfo请求参数结构体
 */
export interface GetDeployInfoRequest {
  /**
   * 合约CNS地址
   */
  Hash: string
}

/**
 * 权威机构
 */
export interface Authority {
  /**
   * 权威机构ID
   */
  Id: number

  /**
   * Did的ID
   */
  DidId: number

  /**
   * DID具体信息
   */
  Did: string

  /**
   * 机构名称
   */
  Name: string

  /**
   * 权威认证 1:已认证，2:未认证
   */
  Status: number

  /**
   * DID服务ID
   */
  DidServiceId: number

  /**
   * 应用ID
   */
  ContractAppId: number

  /**
   * 备注
   */
  Remark: string

  /**
      * 注册时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegisterTime: string

  /**
      * 认证时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecognizeTime: string

  /**
      * 生成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 合约名称
   */
  AppName: string

  /**
   * 链上标签
   */
  LabelName: string
}

/**
 * CreateLabel返回参数结构体
 */
export interface CreateLabelResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetPublicKey请求参数结构体
 */
export interface GetPublicKeyRequest {
  /**
   * did的具体号码
   */
  Did: string
}

/**
 * 标签
 */
export interface Label {
  /**
   * 标签ID
   */
  LabelId: number

  /**
   * 标签名称
   */
  LabelName: string

  /**
   * did数量
   */
  DidCount: number

  /**
   * 创建者did
   */
  Did: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 群组ID
   */
  GroupId: number
}

/**
 * GetDidServiceList返回参数结构体
 */
export interface GetDidServiceListResponse {
  /**
   * DID服务列表
   */
  DidServiceList: Array<DidServiceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployByName返回参数结构体
 */
export interface DeployByNameResponse {
  /**
   * 哈希值
   */
  Hash: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLabel请求参数结构体
 */
export interface CreateLabelRequest {
  /**
   * 标签名称
   */
  LabelName: string

  /**
   * 网络Id
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number
}

/**
 * CreateDidService请求参数结构体
 */
export interface CreateDidServiceRequest {
  /**
   * 联盟名称
   */
  ConsortiumName: string

  /**
   * 联盟ID
   */
  ConsortiumId: number

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 机构名称
   */
  AgencyName: string

  /**
   * 应用名称
   */
  AppName: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组名称
   */
  GroupName: string
}

/**
 * GetDidClusterDetail返回参数结构体
 */
export interface GetDidClusterDetailResponse {
  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 组织名称
   */
  ConsortiumName: string

  /**
   * 区块链组织名称
   */
  ChainAgency: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeAuthorityIssuer返回参数结构体
 */
export interface RecognizeAuthorityIssuerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableHash返回参数结构体
 */
export interface EnableHashResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCredentialIssueTrend请求参数结构体
 */
export interface GetCredentialIssueTrendRequest {
  /**
   * 开始时间（支持到天 2021-4-23）
   */
  StartTime: string

  /**
   * 结束时间（支持到天 2021-4-23）
   */
  EndTime: string

  /**
   * 网络ID
   */
  ClusterId?: string
}

/**
 * EnableHash请求参数结构体
 */
export interface EnableHashRequest {
  /**
   * 合约CNS地址
   */
  Hash: string
}

/**
 * GetDidClusterList请求参数结构体
 */
export type GetDidClusterListRequest = null

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
 * DownCpt请求参数结构体
 */
export interface DownCptRequest {
  /**
   * Cpt索引
   */
  CptIndex: number
}

/**
 * GetCptList返回参数结构体
 */
export interface GetCptListResponse {
  /**
   * cpt数据集合
   */
  CptDataList: Array<CptListData>

  /**
   * 凭证模板总数
   */
  AllCount: number

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
 * GetDidRegisterTrend请求参数结构体
 */
export interface GetDidRegisterTrendRequest {
  /**
   * 开始时间（支持到天 2021-4-23）
   */
  StartTime: string

  /**
   * 结束时间（支持到天 2021-4-23）
   */
  EndTime: string

  /**
   * 网络ID
   */
  ClusterId?: string
}

/**
 * AddLabel请求参数结构体
 */
export interface AddLabelRequest {
  /**
   * 标签ID
   */
  LabelId: number

  /**
   * tdid
   */
  Did: string
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
 * cpt集合数据
 */
export interface CptListData {
  /**
   * ID信息
   */
  Id: number

  /**
   * 模版名称
   */
  Name: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 服务ID
   */
  ServiceId: number

  /**
   * 合约应用ID
   */
  ContractAppId: number

  /**
   * 凭证模板ID
   */
  CptId: number

  /**
   * 模板类型，1: 系统模板，2: 用户模板，3:普通模板
   */
  CptType: number

  /**
   * 凭证模版描述
   */
  Description: string

  /**
   * 凭证模板Json
   */
  CptJson: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 创建者DID
   */
  CreatorDid: string

  /**
   * 应用名称
   */
  AppName: string
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
 * RemoveHash返回参数结构体
 */
export interface RemoveHashResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckDidDeploy请求参数结构体
 */
export interface CheckDidDeployRequest {
  /**
   * 任务ID
   */
  TaskId: number
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
 * RegisterIssuer返回参数结构体
 */
export interface RegisterIssuerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelAuthorityIssuer请求参数结构体
 */
export interface CancelAuthorityIssuerRequest {
  /**
   * did具体信息
   */
  Did: string
}

/**
 * CancelAuthorityIssuer返回参数结构体
 */
export interface CancelAuthorityIssuerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetAuthoritiesList返回参数结构体
 */
export interface GetAuthoritiesListResponse {
  /**
   * 数据集合
   */
  ResultList: Array<Authority>

  /**
   * 总数
   */
  AllCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeployByName请求参数结构体
 */
export interface DeployByNameRequest {
  /**
   * 应用名称
   */
  ApplicationName: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number
}

/**
 * GetDidServiceList请求参数结构体
 */
export interface GetDidServiceListRequest {
  /**
   * 1: 以网络维度输出, 0: 以服务维度输出
   */
  Type: number
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
 * GetDidClusterList返回参数结构体
 */
export interface GetDidClusterListResponse {
  /**
   * DID网络列表
   */
  DidClusterList: Array<DidCluster>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecognizeAuthorityIssuer请求参数结构体
 */
export interface RecognizeAuthorityIssuerRequest {
  /**
   * did具体信息
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
 * GetAgencyTDid返回参数结构体
 */
export interface GetAgencyTDidResponse {
  /**
   * 固定前缀
   */
  Prefix: string

  /**
   * did详情
   */
  Identity: Array<Identity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DID服务基本信息
 */
export interface DidServiceInfo {
  /**
   * DID服务索引
   */
  Id: number

  /**
   * 应用ID
   */
  Appid: number

  /**
   * 账号唯一标识
   */
  Uin: string

  /**
   * 联盟id
   */
  ConsortiumId: number

  /**
   * 联盟名称
   */
  ConsortiumName: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 链ID
   */
  ChainId: string

  /**
   * 1为盟主，0为非盟主
   */
  RoleType: number

  /**
   * 机构DID
   */
  AgencyDid: string

  /**
   * 机构名称
   */
  CreateOrg: string

  /**
   * 端点
   */
  Endpoint: string

  /**
   * 生成时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 群组名称
   */
  GroupName: string
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
 * 模板颁发量排名
 */
export interface CptIssueRank {
  /**
   * 模板名称
   */
  CptName: string

  /**
   * 名次
   */
  Rank: number

  /**
   * 颁发量
   */
  Count: number

  /**
   * 应用名称
   */
  ApplyName: string

  /**
   * 应用ID
   */
  ApplyId: number
}

/**
 * GetCredentialCptRank返回参数结构体
 */
export interface GetCredentialCptRankResponse {
  /**
   * Rank集合
   */
  RankIssueResult: Array<CptIssueRank>

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
 * RegisterIssuer请求参数结构体
 */
export interface RegisterIssuerRequest {
  /**
   * tdid
   */
  Did: string

  /**
   * 权威机构名称
   */
  Name: string

  /**
   * 备注
   */
  Description: string
}

/**
 * GetDidList返回参数结构体
 */
export interface GetDidListResponse {
  /**
   * 数据列表
   */
  DataList: Array<DidData>

  /**
   * 数据总条数
   */
  AllCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDeployInfo返回参数结构体
 */
export interface GetDeployInfoResponse {
  /**
   * 合约CNS地址
   */
  Hash: string

  /**
   * 合约主群组ID
   */
  GroupId: string

  /**
   * 部署机构DID
   */
  DeployDid: string

  /**
   * TDID SDK版本
   */
  SdkVersion: string

  /**
   * TDID 合约版本
   */
  ContractVersion: string

  /**
   * 区块链节点版本
   */
  BlockVersion: string

  /**
   * 区块链节点IP
   */
  BlockIp: string

  /**
   * DID合约地址
   */
  DidAddress: string

  /**
   * CPT合约地址
   */
  CptAddress: string

  /**
   * Authority Issuer地址
   */
  AuthorityAddress: string

  /**
   * Evidence合约地址
   */
  EvidenceAddress: string

  /**
   * Specific Issuer合约地址
   */
  SpecificAddress: string

  /**
   * 链ID
   */
  ChainId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 部署合约
 */
export interface Contract {
  /**
   * 应用名
   */
  ApplyName: string

  /**
   * 合约状态 true:已启用 false:未启用
   */
  Enable: boolean

  /**
   * 合约CNS地址
   */
  Hash: string

  /**
   * 合约CNS地址脱敏
   */
  HashShow: string

  /**
   * 部署机构DID
   */
  WeId: string

  /**
   * 部署机构名称
   */
  DeployName: string

  /**
   * 部署群组
   */
  GroupId: string

  /**
   * 部署时间
   */
  CreateTime: string
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
 * CheckDidDeploy返回参数结构体
 */
export interface CheckDidDeployResponse {
  /**
   * 服务信息
   */
  Task: Task

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDidClusterDetail请求参数结构体
 */
export interface GetDidClusterDetailRequest {
  /**
   * DID网络ID
   */
  ClusterId: string
}

/**
 * GetConsortiumClusterList请求参数结构体
 */
export interface GetConsortiumClusterListRequest {
  /**
   * 联盟id
   */
  ConsortiumId: number
}

/**
 * GetDidDetail返回参数结构体
 */
export interface GetDidDetailResponse {
  /**
   * DID名称
   */
  Did: string

  /**
   * 备注
   */
  Remark: string

  /**
   * 公钥
   */
  PublicKey: string

  /**
   * 权威认证
   */
  AuthorityState: number

  /**
   * 联盟ID
   */
  ConsortiumId: number

  /**
   * 联盟名称
   */
  ConsortiumName: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * bcos资源ID
   */
  ResChainId: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 趋势
 */
export interface Trend {
  /**
   * 时间点
   */
  Time: string

  /**
   * 数量
   */
  Count: number
}

/**
 * bcos网络信息
 */
export interface BcosClusterItem {
  /**
   * 网络索引id
   */
  ChainId: number

  /**
   * 网络名称
   */
  ChainName: string

  /**
   * 机构数量
   */
  AgencyCount: number

  /**
   * 联盟id
   */
  ConsortiumId: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 网络状态
   */
  ChainStatus: number

  /**
   * 资源 id
   */
  ResourceId: string

  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 组织名称
   */
  ConsortiumName: string

  /**
   * 机构id
   */
  AgencyId: number

  /**
   * 续费状态
   */
  AutoRenewFlag: number

  /**
   * 网络模式
   */
  TotalNetworkNode: number

  /**
   * 创建节点数
   */
  TotalCreateNode: number

  /**
   * 总群组数量
   */
  TotalGroups: number
}

/**
 * GetLabelList请求参数结构体
 */
export interface GetLabelListRequest {
  /**
   * 每页大小
   */
  PageSize: number

  /**
   * 页码，从1开始
   */
  PageNumber: number

  /**
   * 网络ID
   */
  ClusterId?: string

  /**
   * 群组ID
   */
  GroupId?: number
}

/**
 * did区块链网络信息
 */
export interface DidCluster {
  /**
   * 链ID
   */
  ChainId: number

  /**
   * 链名称
   */
  ChainName: string

  /**
   * 组织数量
   */
  AgencyCount: number

  /**
   * 联盟ID
   */
  ConsortiumId: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 网络状态
   */
  ChainStatus: number

  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 联盟名称
   */
  ConsortiumName: string

  /**
   * 组织ID
   */
  AgencyId: number

  /**
   * 自动续费
   */
  AutoRenewFlag: number

  /**
   * 网络节点总数
   */
  TotalNetworkNode: number

  /**
   * 本机构节点数
   */
  TotalCreateNode: number

  /**
   * 总群组数
   */
  TotalGroups: number

  /**
   * DID总数
   */
  DidCount: number
}

/**
 * GetDataPanel返回参数结构体
 */
export interface GetDataPanelResponse {
  /**
   * 区块链网络数量
   */
  BlockNetworkCount: number

  /**
   * 区块链网络名称
   */
  BlockNetworkName: string

  /**
   * 当前区块高度
   */
  BlockHeight: number

  /**
   * 区块链网络类型
   */
  BlockNetworkType: number

  /**
   * did数量
   */
  DidCount: number

  /**
   * 凭证模版数量
   */
  CptCount: number

  /**
   * 已认证权威机构数量
   */
  CertificatedAuthCount: number

  /**
   * 颁发凭证数量
   */
  IssueCptCount: number

  /**
   * 本周新增DID数量
   */
  NewDidCount: number

  /**
   * BCOS网络类型数量
   */
  BcosCount: number

  /**
   * Fabric网络类型数量
   */
  FabricCount: number

  /**
   * 长安链网络类型数量
   */
  ChainMakerCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * did详情
 */
export interface Identity {
  /**
   * 账户标识符
   */
  AccountIdentifier: string

  /**
   * 链ID
   */
  ChainID: string

  /**
   * 完整tdid
   */
  Did: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 群组名称
   */
  GroupName: string
}

/**
 * QueryPolicy返回参数结构体
 */
export interface QueryPolicyResponse {
  /**
   * 披露策略索引
   */
  Id: number

  /**
   * 披露策略ID
   */
  PolicyId: number

  /**
   * 凭证模板ID
   */
  CptId: number

  /**
   * 披露策略的具体信息
   */
  PolicyData: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDidList请求参数结构体
 */
export interface GetDidListRequest {
  /**
   * 每页大小
   */
  PageSize: number

  /**
   * 页码，从1开始
   */
  PageNumber: number

  /**
   * Did信息
   */
  Did?: string

  /**
   * 网络ID
   */
  ClusterId?: string

  /**
   * 群组ID
   */
  GroupId?: number
}

/**
 * 群组
 */
export interface Group {
  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 节点数量
   */
  NodeCount: number

  /**
   * 所属机构节点数量
   */
  NodeCountOfAgency: number

  /**
   * 群组描述
   */
  Description: string

  /**
   * 参与角色，盟主或非盟主
   */
  RoleType: number

  /**
   * 链id
   */
  ChainId: string
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
 * 策略管理
 */
export interface Policy {
  /**
   * 披露策略索引
   */
  Id: number

  /**
   * 披露策略名称
   */
  Name: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 服务ID
   */
  ServiceId: number

  /**
   * 合约应用ID
   */
  ContractAppId: number

  /**
   * 披露策略ID
   */
  PolicyId: number

  /**
   * 凭证模板ID
   */
  CptId: number

  /**
   * 策略Json
   */
  PolicyJson: string

  /**
   * 生成时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 创建者DID
   */
  CreatorDid: string

  /**
   * 应用名称
   */
  AppName: string

  /**
   * 模板索引
   */
  CptIndex: number
}

/**
 * GetDataPanel请求参数结构体
 */
export interface GetDataPanelRequest {
  /**
   * 网络ID
   */
  ClusterId?: string
}

/**
 * GetGroupList返回参数结构体
 */
export interface GetGroupListResponse {
  /**
   * 群组数据集合
   */
  Result: Array<Group>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterClaimPolicy返回参数结构体
 */
export interface RegisterClaimPolicyResponse {
  /**
   * 披露策略索引
   */
  Id: number

  /**
   * 披露策略ID
   */
  PolicyId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDidDetail请求参数结构体
 */
export interface GetDidDetailRequest {
  /**
   * DID号码的具体信息
   */
  Did: string
}

/**
 * GetDidServiceDetail请求参数结构体
 */
export interface GetDidServiceDetailRequest {
  /**
   * DID服务ID
   */
  ServiceId: number
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
 * 联盟信息
 */
export interface ConsortiumItem {
  /**
   * 联盟id
   */
  Id: number

  /**
   * 联盟名称
   */
  Name: string
}

/**
 * GetCredentialIssueRank返回参数结构体
 */
export interface GetCredentialIssueRankResponse {
  /**
   * Rank集合
   */
  RankIssueResult: Array<CptIssueRank>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddLabel返回参数结构体
 */
export interface AddLabelResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDeployList返回参数结构体
 */
export interface GetDeployListResponse {
  /**
   * 合约总数
   */
  AllCount: number

  /**
   * 合约部署列表
   */
  Result: Array<Contract>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetPublicKey返回参数结构体
 */
export interface GetPublicKeyResponse {
  /**
   * DID的具体信息
   */
  Did: string

  /**
   * 公钥
   */
  PublicKey: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDidRegisterTrend返回参数结构体
 */
export interface GetDidRegisterTrendResponse {
  /**
   * Trend集合
   */
  Trend: Array<Trend>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * VerifyCredential请求参数结构体
 */
export interface VerifyCredentialRequest {
  /**
   * 参数集合
   */
  FunctionArg: VerifyFunctionArg
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
 * GetLabelList返回参数结构体
 */
export interface GetLabelListResponse {
  /**
   * 数据集合
   */
  Result: Array<Label>

  /**
   * 总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GetPolicyList返回参数结构体
 */
export interface GetPolicyListResponse {
  /**
   * 策略Policy管理列表
   */
  PolicyDataList: Array<Policy>

  /**
   * 总数
   */
  AllCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DID列表
 */
export interface DidData {
  /**
   * 服务ID
   */
  ServiceId: number

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 应用名称
   */
  AppName: string

  /**
   * did号码
   */
  Did: string

  /**
   * 备注
   */
  Remark: string

  /**
   * 权威机构认证状态 1未注册 2 未认证 3 已认证
   */
  AuthorityState: number

  /**
   * DID标签名称
   */
  LabelName: string

  /**
   * DID创建时间
   */
  CreatedAt: string

  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 联盟名称
   */
  AllianceName: string

  /**
   * DID标签id
   */
  LabelId: number
}

/**
 * GetCredentialIssueRank请求参数结构体
 */
export interface GetCredentialIssueRankRequest {
  /**
   * 开始时间（支持到天 2021-4-23）
   */
  StartTime: string

  /**
   * 结束时间（支持到天 2021-4-23）
   */
  EndTime: string

  /**
   * 网络ID
   */
  ClusterId?: string
}

/**
 * GetDeployList请求参数结构体
 */
export interface GetDeployListRequest {
  /**
   * 网络ID
   */
  ClusterId: string

  /**
   * 群组ID
   */
  GroupId: number

  /**
   * 起始位置
   */
  DisplayStart: number

  /**
   * 长度
   */
  DisplayLength: number
}
