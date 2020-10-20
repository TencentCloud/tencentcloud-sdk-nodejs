/**
 * DeleteSecretVersion返回参数结构体
 */
export interface DeleteSecretVersionResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * 凭据版本号。
      */
    VersionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestoreSecret返回参数结构体
 */
export interface RestoreSecretResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateDescription返回参数结构体
 */
export interface UpdateDescriptionResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecret返回参数结构体
 */
export interface DescribeSecretResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * 凭据描述信息。
      */
    Description?: string;
    /**
      * 用于加密的KMS CMK ID。
      */
    KmsKeyId?: string;
    /**
      * 创建者UIN。
      */
    CreateUin?: number;
    /**
      * 凭据状态：Enabled、Disabled、PendingDelete
      */
    Status?: string;
    /**
      * 删除日期，uinx 时间戳，非计划删除状态的凭据为0。
      */
    DeleteTime?: number;
    /**
      * 创建日期。
      */
    CreateTime?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecret请求参数结构体
 */
export interface DeleteSecretRequest {
    /**
      * 指定需要删除的凭据名称。
      */
    SecretName: string;
    /**
      * 指定计划删除日期，单位（天），0（默认）表示立即删除， 1-30 表示预留的天数，超出该日期之后彻底删除。
      */
    RecoveryWindowInDays?: number;
}
/**
 * CreateSecret请求参数结构体
 */
export interface CreateSecretRequest {
    /**
      * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。
      */
    SecretName: string;
    /**
      * 凭据版本，查询凭据信息时需要根据SecretName 和 VersionId进行查询，最长64 字节，使用字母、数字或者 - _ . 的组合并且以字母或数字开头。
      */
    VersionId: string;
    /**
      * 描述信息，用于详细描述用途等，最大支持2048字节。
      */
    Description?: string;
    /**
      * 指定对凭据进行加密的KMS CMK。如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。您也可以指定在同region 下自行创建的KMS CMK进行加密。
      */
    KmsKeyId?: string;
    /**
      * 二进制凭据信息base64编码后的明文。SecretBinary 和 SecretString 必须且只能设置一个，最大支持4096字节。
      */
    SecretBinary?: string;
    /**
      * 文本类型凭据信息明文（不需要进行base64编码）。SecretBinary 和 SecretString 必须且只能设置一个，，最大支持4096字节。
      */
    SecretString?: string;
    /**
      * 标签列表
      */
    Tags?: Array<Tag>;
}
/**
 * GetSecretValue返回参数结构体
 */
export interface GetSecretValueResponse {
    /**
      * 凭据的名称。
      */
    SecretName?: string;
    /**
      * 该凭据对应的版本号。
      */
    VersionId?: string;
    /**
      * 在创建凭据(CreateSecret)时，如果指定的是二进制数据，则该字段为返回结果，并且使用base64进行编码，应用方需要进行base64解码后获取原始数据。SecretBinary和SecretString只有一个不为空。
      */
    SecretBinary?: string;
    /**
      * 在创建凭据(CreateSecret)时，如果指定的是普通文本数据，则该字段为返回结果。SecretBinary和SecretString只有一个不为空。
      */
    SecretString?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetRegions返回参数结构体
 */
export interface GetRegionsResponse {
    /**
      * region列表。
      */
    Regions?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecretVersion请求参数结构体
 */
export interface DeleteSecretVersionRequest {
    /**
      * 指定凭据名称。
      */
    SecretName: string;
    /**
      * 指定该名称下需要删除的凭据的版本号。
      */
    VersionId: string;
}
/**
 * 凭据的基础信息
 */
export interface SecretMetadata {
    /**
      * 凭据名称。
      */
    SecretName: string;
    /**
      * 凭据的描述信息。
      */
    Description: string;
    /**
      * 用于加密凭据的KMS KeyId。
      */
    KmsKeyId: string;
    /**
      * 创建者UIN。
      */
    CreateUin: number;
    /**
      * 凭据状态：Enabled、Disabled、PendingDelete
      */
    Status: string;
    /**
      * 凭据删除日期，对于status为PendingDelete 的有效，unix时间戳。
      */
    DeleteTime: number;
    /**
      * 凭据创建时间，unix时间戳。
      */
    CreateTime: number;
    /**
      * 用于加密凭据的KMS CMK类型，DEFAULT 表示SecretsManager 创建的默认密钥， CUSTOMER 表示用户指定的密钥。
      */
    KmsKeyType: string;
}
/**
 * ListSecretVersionIds请求参数结构体
 */
export interface ListSecretVersionIdsRequest {
    /**
      * 凭据名称。
      */
    SecretName: string;
}
/**
 * CreateSecret返回参数结构体
 */
export interface CreateSecretResponse {
    /**
      * 新创建的凭据名称。
      */
    SecretName?: string;
    /**
      * 新创建的凭据版本。
      */
    VersionId?: string;
    /**
      * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagCode?: number;
    /**
      * 标签操作的返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetRegions请求参数结构体
 */
export declare type GetRegionsRequest = null;
/**
 * UpdateSecret返回参数结构体
 */
export interface UpdateSecretResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * 凭据版本号。
      */
    VersionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableSecret返回参数结构体
 */
export interface DisableSecretResponse {
    /**
      * 停用的凭据名称。
      */
    SecretName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListSecrets请求参数结构体
 */
export interface ListSecretsRequest {
    /**
      * 查询列表的起始位置，以0开始，不设置默认为0。
      */
    Offset?: number;
    /**
      * 单次查询返回的最大数量，0或不设置则使用默认值 20。
      */
    Limit?: number;
    /**
      * 根据创建时间的排序方式，0或者不设置则使用降序排序， 1 表示升序排序。
      */
    OrderType?: number;
    /**
      * 根据凭据状态进行过滤，默认为0表示查询全部，1 表示查询Enabed 凭据列表，2表示查询Disabled 凭据列表， 3 表示查询PendingDelete 凭据列表。
      */
    State?: number;
    /**
      * 根据凭据名称进行过滤，为空表示不过滤。
      */
    SearchSecretName?: string;
    /**
      * 标签过滤条件
      */
    TagFilters?: Array<TagFilter>;
}
/**
 * UpdateDescription请求参数结构体
 */
export interface UpdateDescriptionRequest {
    /**
      * 指定需要更新描述信息的凭据名。
      */
    SecretName: string;
    /**
      * 新的描述信息，最大长度2048个字节。
      */
    Description: string;
}
/**
 * EnableSecret返回参数结构体
 */
export interface EnableSecretResponse {
    /**
      * 启用的凭据名称。
      */
    SecretName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateSecret请求参数结构体
 */
export interface UpdateSecretRequest {
    /**
      * 指定需要更新凭据内容的名称。
      */
    SecretName: string;
    /**
      * 指定需要更新凭据内容的版本号。
      */
    VersionId: string;
    /**
      * 新的凭据内容为二进制的场景使用该字段，并使用base64进行编码。SecretBinary 和 SecretString 只能一个不为空。
      */
    SecretBinary?: string;
    /**
      * 新的凭据内容为文本的场景使用该字段，不需要base64编码。SecretBinary 和 SecretString 只能一个不为空。
      */
    SecretString?: string;
}
/**
 * 凭据版本号列表信息
 */
export interface VersionInfo {
    /**
      * 版本号。
      */
    VersionId: string;
    /**
      * 创建时间，unix时间戳。
      */
    CreateTime: number;
}
/**
 * 标签过滤器
 */
export interface TagFilter {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue?: Array<string>;
}
/**
 * PutSecretValue请求参数结构体
 */
export interface PutSecretValueRequest {
    /**
      * 指定需要增加版本的凭据名称。
      */
    SecretName: string;
    /**
      * 指定新增加的版本号，最长64 字节，使用字母、数字或者 - _ . 的组合并且以字母或数字开头。
      */
    VersionId: string;
    /**
      * 二进制凭据信息，使用base64编码。SecretBinary 和 SecretString 必须且只能设置一个。
      */
    SecretBinary?: string;
    /**
      * 文本类型凭据信息明文（不需要进行base64编码），SecretBinary 和 SecretString 必须且只能设置一个。
      */
    SecretString?: string;
}
/**
 * GetSecretValue请求参数结构体
 */
export interface GetSecretValueRequest {
    /**
      * 指定凭据的名称。
      */
    SecretName: string;
    /**
      * 指定对应凭据的版本号。
      */
    VersionId: string;
}
/**
 * GetServiceStatus返回参数结构体
 */
export interface GetServiceStatusResponse {
    /**
      * true表示服务已开通，false 表示服务尚未开通。
      */
    ServiceEnabled?: boolean;
    /**
      * 服务不可用类型： 0-未购买，1-正常， 2-欠费停服， 3-资源释放。
      */
    InvalidType?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestoreSecret请求参数结构体
 */
export interface RestoreSecretRequest {
    /**
      * 指定需要恢复的凭据名称。
      */
    SecretName: string;
}
/**
 * DescribeSecret请求参数结构体
 */
export interface DescribeSecretRequest {
    /**
      * 指定需要获取凭据详细信息的凭据名称。
      */
    SecretName: string;
}
/**
 * PutSecretValue返回参数结构体
 */
export interface PutSecretValueResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * 新增加的版本号。
      */
    VersionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecret返回参数结构体
 */
export interface DeleteSecretResponse {
    /**
      * 指定删除的凭据名称。
      */
    SecretName?: string;
    /**
      * 凭据删除的日期，unix时间戳。
      */
    DeleteTime?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableSecret请求参数结构体
 */
export interface DisableSecretRequest {
    /**
      * 指定停用的凭据名称。
      */
    SecretName: string;
}
/**
 * 标签键和标签值
 */
export interface Tag {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * ListSecrets返回参数结构体
 */
export interface ListSecretsResponse {
    /**
      * 根据State和SearchSecretName 筛选的凭据总数。
      */
    TotalCount?: number;
    /**
      * 返回凭据信息列表。
      */
    SecretMetadatas?: Array<SecretMetadata>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableSecret请求参数结构体
 */
export interface EnableSecretRequest {
    /**
      * 指定启用凭据的名称。
      */
    SecretName: string;
}
/**
 * GetServiceStatus请求参数结构体
 */
export declare type GetServiceStatusRequest = null;
/**
 * ListSecretVersionIds返回参数结构体
 */
export interface ListSecretVersionIdsResponse {
    /**
      * 凭据名称。
      */
    SecretName?: string;
    /**
      * VersionId列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Versions?: Array<VersionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
