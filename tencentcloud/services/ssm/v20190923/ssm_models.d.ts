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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 凭据状态：Enabled、Disabled、PendingDelete, Creating, Failed。
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
     * 0 --  用户自定义凭据类型；1 -- 数据库凭据类型；2 -- SSH密钥对凭据类型；3 -- 云API密钥（AKSK）凭据类型（使用此功能需要联系云助手单独开启白名单）；4 -- Redis类型凭据。
     */
    SecretType?: number;
    /**
     * 云产品名称。
     */
    ProductName?: string;
    /**
     * 云产品实例ID。
     */
    ResourceID?: string;
    /**
     * 是否开启轮转：True -- 开启轮转；False -- 关闭轮转。
     */
    RotationStatus?: boolean;
    /**
     * 轮转周期，默认以天为单位。
     */
    RotationFrequency?: number;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对凭据的名称。
     */
    ResourceName?: string;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所属的项目ID。
     */
    ProjectID?: number;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所关联的CVM实例ID。
     */
    AssociatedInstanceIDs?: Array<string>;
    /**
     * 当凭据类型为云API密钥对凭据时，此字段有效，用于表示此云API密钥对所属的用户UIN。
     */
    TargetUin?: number;
    /**
     * 凭据额外配置
     */
    AdditionalConfig?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSupportedProducts请求参数结构体
 */
export declare type DescribeSupportedProductsRequest = null;
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
  对于云产品凭据如Mysql凭据，通过指定凭据名称和历史版本号来获取历史轮转凭据的明文信息，如果要获取当前正在使用的凭据版本的明文，需要将版本号指定为：SSM_Current。
     */
    VersionId: string;
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
  当凭据类型为SSH密钥对凭据时，此字段只能取值只能为0。
     */
    RecoveryWindowInDays?: number;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，取值：
  True -- 表示不仅仅清理此凭据中存储的SSH密钥信息，还会将SSH密钥对从CVM侧进行清理。注意，如果SSH密钥此时绑定了CVM实例，那么会清理失败。
  False --  表示仅仅清理此凭据中存储的SSH密钥信息，不在CVM进侧进行清理。
     */
    CleanSSHKey?: boolean;
}
/**
 * CreateSecret请求参数结构体
 */
export interface CreateSecretRequest {
    /**
     * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。一旦创建不可修改。
     */
    SecretName: string;
    /**
     * 凭据版本，查询凭据信息时需要根据SecretName 和 VersionId进行查询，最长64 字节，使用字母、数字或者 - _ . 的组合并且以字母或数字开头。若为空，则使用默认的初始凭据版本号。可选，若为空或该凭据为云产品类凭据，则该版本号默认为 SSM_Current。
     */
    VersionId?: string;
    /**
     * 描述信息，用于详细描述用途等，最大支持2048字节。
     */
    Description?: string;
    /**
     * 指定对凭据进行加密的KMS CMK。如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。您也可以指定在同region 下自行创建的KMS CMK进行加密。
     */
    KmsKeyId?: string;
    /**
     * 凭据类型，默认为0自定义凭据。
     */
    SecretType?: number;
    /**
     * 二进制凭据信息base64编码后的明文。SecretBinary 和 SecretString 必须且只能设置一个，最大支持32KB字节。
     */
    SecretBinary?: string;
    /**
     * 文本类型凭据信息明文（不需要进行base64编码）。SecretBinary 和 SecretString 必须且只能设置一个，最大支持32KB字节。
     */
    SecretString?: string;
    /**
     * JSON 格式字符串，用于指定特定凭据类型的额外配置。
     */
    AdditionalConfig?: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
}
/**
 * RotateProductSecret请求参数结构体
 */
export interface RotateProductSecretRequest {
    /**
     * 需要轮转的凭据名。
     */
    SecretName: string;
}
/**
 * CreateProductSecret请求参数结构体
 */
export interface CreateProductSecretRequest {
    /**
     * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。
     */
    SecretName: string;
    /**
     * 用户账号名前缀，由用户自行指定，长度限定在8个字符以内，
  可选字符集包括：
  数字字符：[0, 9]，
  小写字符：[a, z]，
  大写字符：[A, Z]，
  特殊字符(全英文符号)：下划线(_)，
  前缀必须以大写或小写字母开头。
     */
    UserNamePrefix: string;
    /**
     * 凭据所绑定的云产品名称，如Mysql，可以通过DescribeSupportedProducts接口获取所支持的云产品名称。
     */
    ProductName: string;
    /**
     * 云产品实例ID。
     */
    InstanceID: string;
    /**
     * 账号的域名，IP形式，支持填入%。
     */
    Domains: Array<string>;
    /**
     * 将凭据与云产品实例绑定时，需要授予的权限列表。
     */
    PrivilegesList: Array<ProductPrivilegeUnit>;
    /**
     * 描述信息，用于详细描述用途等，最大支持2048字节。
     */
    Description?: string;
    /**
     * 指定对凭据进行加密的KMS CMK。
  如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。
  您也可以指定在同region 下自行创建的KMS CMK进行加密。
     */
    KmsKeyId?: string;
    /**
     * 标签列表。
     */
    Tags?: Array<Tag>;
    /**
     * 用户自定义的开始轮转时间，格式：2006-01-02 15:04:05。
  当EnableRotation为True时，此参数必填。
     */
    RotationBeginTime?: string;
    /**
     * 是否开启轮转
  True -- 开启
  False -- 不开启
  如果不指定，默认为False。
     */
    EnableRotation?: boolean;
    /**
     * 轮转周期，以天为单位，默认为1天。
     */
    RotationFrequency?: number;
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
     * 在创建凭据(CreateSecret)时，如果指定的是二进制数据，则该字段为返回结果，并且使用base64进行编码，应用方需要进行base64解码后获取原始数据。
  SecretBinary和SecretString只有一个不为空。
     */
    SecretBinary?: string;
    /**
     * 在创建凭据(CreateSecret)时，如果指定的是普通文本数据，则该字段为返回结果。
  SecretBinary和SecretString只有一个不为空。
     */
    SecretString?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Regions: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSupportedProducts返回参数结构体
 */
export interface DescribeSupportedProductsResponse {
    /**
     * 支持的所有云产品列表。
  每种云产品与凭据类型的对应关系如下：
  当SecretType为1时，支持的云产品列表包括：Mysql、Tdsql-mysql、Tdsql_C_Mysql；
  当SecretType为2时，支持的产品列表为：Cvm；
  当SecretType为3时，支持的产品列表为：Cam（此功能的使用需要联系云助手单独开始白名单）；
  当SecretType为4时，支持的产品列表为：Redis。
     */
    Products?: Array<string>;
    /**
     * 支持的产品个数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 凭据名称
     */
    SecretName?: string;
    /**
     * 凭据的描述信息
     */
    Description?: string;
    /**
     * 用于加密凭据的KMS KeyId
     */
    KmsKeyId?: string;
    /**
     * 创建者UIN
     */
    CreateUin?: number;
    /**
     * 凭据状态：Enabled、Disabled、PendingDelete、Creating、Failed
     */
    Status?: string;
    /**
     * 凭据删除日期，对于status为PendingDelete 的有效，unix时间戳
     */
    DeleteTime?: number;
    /**
     * 凭据创建时间，unix时间戳
     */
    CreateTime?: number;
    /**
     * 用于加密凭据的KMS CMK类型，DEFAULT 表示SecretsManager 创建的默认密钥， CUSTOMER 表示用户指定的密钥
     */
    KmsKeyType?: string;
    /**
     * 1:--开启轮转；0--禁止轮转
     */
    RotationStatus?: number;
    /**
     * 下一次轮转开始时间，uinx 时间戳
     */
    NextRotationTime?: number;
    /**
     * 0 -- 用户自定义凭据；
  1 -- 云产品凭据；
  2 -- SSH密钥对凭据；
  3 -- 云API密钥对凭据；
  4 -- Redis类型凭据；
     */
    SecretType?: number;
    /**
     * 云产品名称，仅在SecretType为1，即凭据类型为云产品凭据时生效
     */
    ProductName?: string;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对凭据的名称。
     */
    ResourceName?: string;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所属的项目ID。
     */
    ProjectID?: number;
    /**
     * 当凭据类型为SSH密钥对凭据时，此字段有效，用于表示SSH密钥对所关联的CVM实例ID。
     */
    AssociatedInstanceIDs?: Array<string>;
    /**
     * 当凭据类型为云API密钥对凭据时，此字段有效，用于表示云API密钥对所属的用户UIN。
     */
    TargetUin?: number;
    /**
     * 轮转的频率，以天作为单位，在轮转开启状态下生效。
     */
    RotationFrequency?: number;
    /**
     * 云产品凭据对应的云产品实例 ID 号。
     */
    ResourceID?: string;
    /**
     * 用户指定的轮转开始时间。
     */
    RotationBeginTime?: string;
}
/**
 * ListSecretVersionIds请求参数结构体
 */
export interface ListSecretVersionIdsRequest {
    /**
     * 凭据名称
     */
    SecretName: string;
}
/**
 * DescribeRotationDetail请求参数结构体
 */
export interface DescribeRotationDetailRequest {
    /**
     * 指定需要获取凭据轮转详细信息的凭据名称。
     */
    SecretName: string;
}
/**
 * CreateSSHKeyPairSecret返回参数结构体
 */
export interface CreateSSHKeyPairSecretResponse {
    /**
     * 创建的凭据名称。
     */
    SecretName?: string;
    /**
     * 创建的SSH密钥ID。
     */
    SSHKeyID?: string;
    /**
     * 创建的SSH密钥名称。
     */
    SSHKeyName?: string;
    /**
     * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误
     */
    TagCode?: number;
    /**
     * 标签操作的返回信息。
     */
    TagMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRotationStatus返回参数结构体
 */
export interface UpdateRotationStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     */
    TagCode?: number;
    /**
     * 标签操作的返回信息
     */
    TagMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 根据凭据状态进行过滤。
  默认为0表示查询全部。
  1 --  表示查询Enabled 凭据列表。
  2 --  表示查询Disabled 凭据列表。
  3 --  表示查询PendingDelete 凭据列表。
  4 --  表示PendingCreate。
  5 --  表示CreateFailed。
  其中状态PendingCreate和CreateFailed只有在SecretType为云产品凭据时生效
     */
    State?: number;
    /**
     * 根据凭据名称进行过滤，为空表示不过滤。
     */
    SearchSecretName?: string;
    /**
     * 标签过滤条件。
     */
    TagFilters?: Array<TagFilter>;
    /**
     * 0  -- 表示用户自定义凭据，默认为0。
  1  -- 表示用户云产品凭据。
  2 -- 表示SSH密钥对凭据。
  3 -- 表示云API密钥对凭据。
     */
    SecretType?: number;
    /**
     * 此参数仅在SecretType参数值为1时生效，
  当SecretType值为1时：
  如果ProductName值为空，则表示查询所有类型的云产品凭据；
  如果ProductName值为某个指定的云产品值如Mysql时，则表示查询Mysql数据库凭据；
  如果ProductName值为多个云产品值，如：Mysql,Tdsql-mysql,Tdsql_C_Mysql（多个值以英文逗号,分隔开）则表示查询三种云产品类型的凭据；
  支持的云产品列表请通过接口：DescribeSupportedProducts进行查询。
     */
    ProductName?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSSHKeyPairSecret请求参数结构体
 */
export interface CreateSSHKeyPairSecretRequest {
    /**
     * 凭据名称，同一region内不可重复，最长128字节，使用字母、数字或者 - _ 的组合，第一个字符必须为字母或者数字。
     */
    SecretName: string;
    /**
     * 密钥对创建后所属的项目ID。
     */
    ProjectId: number;
    /**
     * 描述信息，用于详细描述用途等，最大支持2048字节。
     */
    Description?: string;
    /**
     * 指定对凭据进行加密的KMS CMK。
  如果为空则表示使用Secrets Manager为您默认创建的CMK进行加密。
  您也可以指定在同region 下自行创建的KMS CMK进行加密。
     */
    KmsKeyId?: string;
    /**
     * 标签列表。
     */
    Tags?: Array<Tag>;
    /**
     * 用户自定义输入的SSH密钥对的名称，可由数字，字母和下划线组成，只能以数字和字母开头，长度不超过25个字符。
     */
    SSHKeyName?: string;
}
/**
 * UpdateRotationStatus请求参数结构体
 */
export interface UpdateRotationStatusRequest {
    /**
     * 云产品凭据名称。
     */
    SecretName: string;
    /**
     * 是否开启轮转。
  true -- 开启轮转；
  false -- 禁止轮转。
     */
    EnableRotation: boolean;
    /**
     * 轮转周期，以天为单位，最小为30天，最大为365天。
     */
    Frequency?: number;
    /**
     * 用户设置的期望开始轮转时间，格式为：2006-01-02 15:04:05。
  当EnableRotation为true时，如果不填RotationBeginTime，则默认填充为当前时间。
     */
    RotationBeginTime?: string;
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
     * 新的凭据内容为二进制的场景使用该字段，并使用base64进行编码。
  SecretBinary 和 SecretString 只能一个不为空。
     */
    SecretBinary?: string;
    /**
     * 新的凭据内容为文本的场景使用该字段，不需要base64编码SecretBinary 和 SecretString 只能一个不为空。
     */
    SecretString?: string;
}
/**
 * DescribeAsyncRequestInfo返回参数结构体
 */
export interface DescribeAsyncRequestInfoResponse {
    /**
     * 0:处理中，1:处理成功，2:处理失败
     */
    TaskStatus?: number;
    /**
     * 任务描述信息。
     */
    Description?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * RotateProductSecret返回参数结构体
 */
export interface RotateProductSecretResponse {
    /**
     * 当凭据类型为云产品凭据时（即SecretType为1，如MySQL、Tdsql等托管凭据）此字段有效，返回轮转异步任务ID号。
     */
    FlowID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 凭据版本号列表信息
 */
export interface VersionInfo {
    /**
     * 版本号
     */
    VersionId?: string;
    /**
     * 创建时间，unix时间戳。
     */
    CreateTime?: number;
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
     * 二进制凭据信息，使用base64编码。
  SecretBinary 和 SecretString 必须且只能设置一个。
     */
    SecretBinary?: string;
    /**
     * 文本类型凭据信息明文（不需要进行base64编码），SecretBinary 和 SecretString 必须且只能设置一个。
     */
    SecretString?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRotationHistory返回参数结构体
 */
export interface DescribeRotationHistoryResponse {
    /**
     * 版本号列表
     */
    VersionIDs?: Array<string>;
    /**
     * 版本号个数，可以给用户展示的版本号个数上限为10个。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetSSHKeyPairValue请求参数结构体
 */
export interface GetSSHKeyPairValueRequest {
    /**
     * 凭据名称，此凭据只能为SSH密钥对凭据类型。
     */
    SecretName?: string;
    /**
     * 密钥对ID，是云服务器中密钥对的唯一标识。
     */
    SSHKeyId?: string;
}
/**
 * DescribeAsyncRequestInfo请求参数结构体
 */
export interface DescribeAsyncRequestInfoRequest {
    /**
     * 异步任务ID号
     */
    FlowID: number;
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
     * true表示用户已经可以使用密钥安全托管功能，
  false表示用户暂时不能使用密钥安全托管功能。
     */
    AccessKeyEscrowEnabled?: boolean;
    /**
     * 过期时间
     */
    ExpireTime?: string;
    /**
     * 计算性能限制
     */
    QPSLimit?: number;
    /**
     * 凭据个数限制
     */
    SecretLimit?: number;
    /**
     * 付费模式
     */
    PayModel?: string;
    /**
     * 自动续费标识，0:手动续费 1:自动续费 2:到期不续
     */
    RenewFlag?: number;
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 已托管凭据个数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRotationDetail返回参数结构体
 */
export interface DescribeRotationDetailResponse {
    /**
     * 否允许轮转，true表示开启轮转，false表示禁止轮转。
     */
    EnableRotation?: boolean;
    /**
     * 轮转的频率，以天为单位，默认为1天。
     */
    Frequency?: number;
    /**
     * 最近一次轮转的时间，显式可见的时间字符串，格式 2006-01-02 15:04:05。
     */
    LatestRotateTime?: string;
    /**
     * 下一次开始轮转的时间，显式可见的时间字符串，格式 2006-01-02 15:04:05。
     */
    NextRotateBeginTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 凭据关联产品时被赋予的权限
 */
export interface ProductPrivilegeUnit {
    /**
     * 权限名称，当前可选：
  GlobalPrivileges
  DatabasePrivileges
  TablePrivileges
  ColumnPrivileges
  
  当权限为DatabasePrivileges时，必须通过参数Database指定数据库名；
  
  当权限为TablePrivileges时，必须通过参数Database和TableName指定数据库名以及数据库中的表名；
  
  当权限为ColumnPrivileges时，必须通过参数Database、TableName和CoulmnName指定数据库、数据库中的表名以及表中的列名。
     */
    PrivilegeName: string;
    /**
     * 权限列表。
  对于Mysql产品来说，可选权限值为：
  
  1. GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
  注意，不传该参数表示清除该权限。
  
  2. DatabasePrivileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
  注意，不传该参数表示清除该权限。
  
  3. TablePrivileges 权限的可选值为：权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
  注意，不传该参数表示清除该权限。
  
  4. ColumnPrivileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
  注意，不传该参数表示清除该权限。
     */
    Privileges: Array<string>;
    /**
     * 仅当PrivilegeName为DatabasePrivileges时这个值才有效。
     */
    Database?: string;
    /**
     * 仅当PrivilegeName为TablePrivileges时这个值才有效，并且此时需要填充Database显式指明所在的数据库实例。
     */
    TableName?: string;
    /**
     * 仅当PrivilegeName为ColumnPrivileges时这个值才生效，并且此时必须填充：
  Database - 显式指明所在的数据库实例。
  TableName - 显式指明所在表
     */
    ColumnName?: string;
}
/**
 * DescribeRotationHistory请求参数结构体
 */
export interface DescribeRotationHistoryRequest {
    /**
     * 指定需要获取凭据轮转历史的凭据名称。
     */
    SecretName: string;
}
/**
 * GetSSHKeyPairValue返回参数结构体
 */
export interface GetSSHKeyPairValueResponse {
    /**
     * SSH密钥对ID。
     */
    SSHKeyID?: string;
    /**
     * 公钥明文，使用base64编码。
     */
    PublicKey?: string;
    /**
     * 私钥明文，使用base64编码
     */
    PrivateKey?: string;
    /**
     * 此密钥对所属的项目ID。
     */
    ProjectID?: number;
    /**
     * SSH密钥对的描述信息。
  用户可以在CVM侧控制台对密钥对的描述信息进行修改。
     */
    SSHKeyDescription?: string;
    /**
     * SSH密钥对的名称。
  用户可以在CVM侧控制台对密钥对的名称进行修改。
     */
    SSHKeyName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateProductSecret返回参数结构体
 */
export interface CreateProductSecretResponse {
    /**
     * 创建的凭据名称。
     */
    SecretName?: string;
    /**
     * 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误。
     */
    TagCode?: number;
    /**
     * 标签操作的返回信息。
     */
    TagMsg?: string;
    /**
     * 创建云产品凭据异步任务ID号。
     */
    FlowID?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     */
    Versions?: Array<VersionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
