/**
 * GetDepositFile返回参数结构体
 */
export interface GetDepositFileResponse {
    /**
     * 存证编号
     */
    EvidenceId: string;
    /**
     * 存证文件临时链接
     */
    EvidenceFile: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImageDeposit请求参数结构体
 */
export interface CreateImageDepositRequest {
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 对应数据Base64文件名称 test.png
     */
    FileName: string;
    /**
     * 文件hash
     */
    EvidenceHash: string;
    /**
     * 业务ID 透传 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 数据Base64编码，大小不超过5M
     */
    FileContent?: string;
    /**
     * 资源访问链接 与fileContent必须二选一
     */
    FileUrl?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * CreateVideoDeposit请求参数结构体
 */
export interface CreateVideoDepositRequest {
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 对应数据Base64文件名称
     */
    FileName: string;
    /**
     * 文件hash
     */
    EvidenceHash: string;
    /**
     * 业务ID 透传 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 数据Base64编码，大小不超过5M
     */
    FileContent?: string;
    /**
     * 资源访问链接 与fileContent必须二选一
     */
    FileUrl?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * CreateDocDeposit请求参数结构体
 */
export interface CreateDocDepositRequest {
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 对应数据Base64文件名称
     */
    FileName: string;
    /**
     * 文件hash
     */
    EvidenceHash: string;
    /**
     * 业务ID 透传 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 数据Base64编码，大小不超过5M
     */
    FileContent?: string;
    /**
     * 资源访问链接 与fileContent必须二选一
     */
    FileUrl?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * CreateHashDepositNoSeal请求参数结构体
 */
export interface CreateHashDepositNoSealRequest {
    /**
     * 数据hash
     */
    EvidenceHash: string;
    /**
     * 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 业务扩展信息
     */
    EvidenceInfo?: string;
}
/**
 * CreateHashDeposit请求参数结构体
 */
export interface CreateHashDepositRequest {
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 数据hash
     */
    EvidenceHash: string;
    /**
     * 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * CreateDataDeposit返回参数结构体
 */
export interface CreateDataDepositResponse {
    /**
     * 业务ID 透传 长度最大不超过64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 请求成功，返回存证编码,用于查询存证后续业务数据
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDepositCert请求参数结构体
 */
export interface GetDepositCertRequest {
    /**
     * 存证编码
     */
    EvidenceId: string;
}
/**
 * CreateWebpageDeposit返回参数结构体
 */
export interface CreateWebpageDepositResponse {
    /**
     * 业务ID 透传 长度最大不超过64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 请求成功，返回存证编码,用于查询存证后续业务数据
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDepositFile请求参数结构体
 */
export interface GetDepositFileRequest {
    /**
     * 存证编码
     */
    EvidenceId: string;
}
/**
 * CreateWebpageDeposit请求参数结构体
 */
export interface CreateWebpageDepositRequest {
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 网页链接
     */
    EvidenceUrl: string;
    /**
     * 业务ID 透传 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * CreateHashDepositNoCert返回参数结构体
 */
export interface CreateHashDepositNoCertResponse {
    /**
     * 透传字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 存证编码
     */
    EvidenceId: string;
    /**
     * 上链时间
     */
    EvidenceTime: string;
    /**
     * 区块链交易哈希
     */
    EvidenceTxHash: string;
    /**
     * 区块高度
     */
    BlockchainHeight: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAudioDeposit返回参数结构体
 */
export interface CreateAudioDepositResponse {
    /**
     * 业务ID 透传 长度最大不超过64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 请求成功，返回存证编码,用于查询存证后续业务数据
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDepositInfo返回参数结构体
 */
export interface GetDepositInfoResponse {
    /**
     * 存证编号
     */
    EvidenceId: string;
    /**
     * 上链时间
     */
    EvidenceTime: string;
    /**
     * 区块链交易哈希
     */
    EvidenceTxHash: string;
    /**
     * 区块高度
     */
    BlockchainHeight: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateHashDepositNoCert请求参数结构体
 */
export interface CreateHashDepositNoCertRequest {
    /**
     * 数据hash
     */
    EvidenceHash: string;
    /**
     * 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 业务扩展信息
     */
    EvidenceInfo?: string;
}
/**
 * CreateHashDepositNoSeal返回参数结构体
 */
export interface CreateHashDepositNoSealResponse {
    /**
     * 透传字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 存证编码
     */
    EvidenceId: string;
    /**
     * 上链时间
     */
    EvidenceTime: string;
    /**
     * 区块链交易哈希
     */
    EvidenceTxHash: string;
    /**
     * 区块高度
     */
    BlockchainHeight: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDocDeposit返回参数结构体
 */
export interface CreateDocDepositResponse {
    /**
     * 业务ID 透传 长度最大不超过64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 请求成功，返回存证编码,用于查询存证后续业务数据
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDepositInfo请求参数结构体
 */
export interface GetDepositInfoRequest {
    /**
     * 存证编码
     */
    EvidenceId: string;
}
/**
 * CreateVideoDeposit返回参数结构体
 */
export interface CreateVideoDepositResponse {
    /**
     * 业务ID 透传 长度最大不超过64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 请求成功，返回存证编码,用于查询存证后续业务数据
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDataDeposit请求参数结构体
 */
export interface CreateDataDepositRequest {
    /**
     * 业务数据明文(json格式字符串)，最大256kb
     */
    EvidenceInfo: string;
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 数据hash
     */
    EvidenceHash: string;
    /**
     * 业务ID 透传 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * GetDepositCert返回参数结构体
 */
export interface GetDepositCertResponse {
    /**
     * 存证编码
     */
    EvidenceId: string;
    /**
     * 存证证书文件临时链接
     */
    EvidenceCert: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAudioDeposit请求参数结构体
 */
export interface CreateAudioDepositRequest {
    /**
     * 存证名称(长度最大30)
     */
    EvidenceName: string;
    /**
     * 对应数据Base64文件名称
     */
    FileName: string;
    /**
     * 文件hash
     */
    EvidenceHash: string;
    /**
     * 业务ID 透传 长度最大不超过64
     */
    BusinessId?: string;
    /**
     * 数据Base64编码，大小不超过5M
     */
    FileContent?: string;
    /**
     * 资源访问链接 与fileContent必须二选一
     */
    FileUrl?: string;
    /**
     * 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0
     */
    HashType?: number;
    /**
     * 存证描述
     */
    EvidenceDescription?: string;
}
/**
 * CreateImageDeposit返回参数结构体
 */
export interface CreateImageDepositResponse {
    /**
     * 业务ID 透传 长度最大不超过64
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 请求成功，返回存证编码,用于查询存证后续业务数据
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateHashDeposit返回参数结构体
 */
export interface CreateHashDepositResponse {
    /**
     * 透传字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessId: string;
    /**
     * 存证编码
     */
    EvidenceId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
