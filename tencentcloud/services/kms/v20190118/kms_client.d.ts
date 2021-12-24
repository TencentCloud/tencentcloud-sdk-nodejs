import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateAliasRequest, EnableWhiteBoxKeyRequest, AsymmetricRsaDecryptRequest, EnableKeyRotationRequest, DescribeWhiteBoxKeyDetailsResponse, CreateKeyRequest, DisableWhiteBoxKeyResponse, DisableKeyResponse, DescribeWhiteBoxServiceStatusRequest, VerifyByAsymmetricKeyRequest, DescribeKeyRequest, ListAlgorithmsResponse, DisableKeysResponse, DescribeWhiteBoxKeyResponse, UpdateKeyDescriptionResponse, DescribeWhiteBoxServiceStatusResponse, ImportKeyMaterialRequest, EnableKeyRequest, GetKeyRotationStatusRequest, ListAlgorithmsRequest, ListKeyDetailResponse, GenerateDataKeyRequest, UpdateAliasResponse, ScheduleKeyDeletionResponse, GenerateRandomResponse, DescribeKeysRequest, GetPublicKeyRequest, GetServiceStatusRequest, EnableWhiteBoxKeysResponse, ArchiveKeyResponse, VerifyByAsymmetricKeyResponse, DescribeWhiteBoxKeyRequest, GetParametersForImportResponse, DecryptResponse, CreateWhiteBoxKeyResponse, DeleteImportedKeyMaterialResponse, EnableKeysRequest, EnableWhiteBoxKeysRequest, EncryptByWhiteBoxResponse, DescribeKeysResponse, EnableWhiteBoxKeyResponse, ReEncryptRequest, ListKeysResponse, AsymmetricSm2DecryptResponse, DisableKeyRotationResponse, DisableWhiteBoxKeysRequest, ListKeyDetailRequest, DeleteWhiteBoxKeyRequest, GetRegionsResponse, GenerateDataKeyResponse, CreateWhiteBoxKeyRequest, OverwriteWhiteBoxDeviceFingerprintsResponse, DisableWhiteBoxKeysResponse, ArchiveKeyRequest, GetParametersForImportRequest, CreateKeyResponse, ReEncryptResponse, EncryptResponse, CancelKeyDeletionRequest, DeleteImportedKeyMaterialRequest, EnableKeyResponse, GetServiceStatusResponse, GetKeyRotationStatusResponse, EncryptRequest, AsymmetricSm2DecryptRequest, DeleteWhiteBoxKeyResponse, ListKeysRequest, DescribeWhiteBoxDecryptKeyRequest, CancelKeyArchiveResponse, DecryptRequest, DescribeWhiteBoxKeyDetailsRequest, AsymmetricRsaDecryptResponse, CancelKeyDeletionResponse, DisableKeysRequest, DisableWhiteBoxKeyRequest, UnbindCloudResourceRequest, OverwriteWhiteBoxDeviceFingerprintsRequest, EnableKeyRotationResponse, BindCloudResourceResponse, EnableKeysResponse, SignByAsymmetricKeyRequest, DescribeWhiteBoxDeviceFingerprintsRequest, GetRegionsRequest, EncryptByWhiteBoxRequest, GenerateRandomRequest, ScheduleKeyDeletionRequest, DisableKeyRequest, ImportKeyMaterialResponse, GetPublicKeyResponse, BindCloudResourceRequest, SignByAsymmetricKeyResponse, DescribeWhiteBoxDecryptKeyResponse, DescribeWhiteBoxDeviceFingerprintsResponse, UpdateKeyDescriptionRequest, UnbindCloudResourceResponse, DescribeKeyResponse, CancelKeyArchiveRequest, DisableKeyRotationRequest } from "./kms_models";
/**
 * kms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作
     */
    Encrypt(req: EncryptRequest, cb?: (error: string, rep: EncryptResponse) => void): Promise<EncryptResponse>;
    /**
     * 本接口用于解密密文，得到明文数据。
     */
    Decrypt(req: DecryptRequest, cb?: (error: string, rep: DecryptResponse) => void): Promise<DecryptResponse>;
    /**
     * 用于修改CMK的别名。对于处于PendingDelete状态的CMK禁止修改。
     */
    UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse>;
    /**
     * 删除白盒密钥, 注意：必须先禁用后，才可以删除。
     */
    DeleteWhiteBoxKey(req: DeleteWhiteBoxKeyRequest, cb?: (error: string, rep: DeleteWhiteBoxKeyResponse) => void): Promise<DeleteWhiteBoxKeyResponse>;
    /**
     * 用于导入密钥材料。只有类型为EXTERNAL 的CMK 才可以导入，导入的密钥材料使用 GetParametersForImport 获取的密钥进行加密。可以为指定的 CMK 重新导入密钥材料，并重新指定过期时间，但必须导入相同的密钥材料。CMK 密钥材料导入后不可以更换密钥材料。导入的密钥材料过期或者被删除后，指定的CMK将无法使用，需要再次导入相同的密钥材料才能正常使用。CMK是独立的，同样的密钥材料可导入不同的 CMK 中，但使用其中一个 CMK 加密的数据无法使用另一个 CMK解密。
只有Enabled 和 PendingImport状态的CMK可以导入密钥材料。
     */
    ImportKeyMaterial(req: ImportKeyMaterialRequest, cb?: (error: string, rep: ImportKeyMaterialResponse) => void): Promise<ImportKeyMaterialResponse>;
    /**
     * 该接口用于获取非对称密钥的公钥信息，可用于本地数据加密或验签。只有处于Enabled状态的非对称密钥才可能获取公钥。
     */
    GetPublicKey(req: GetPublicKeyRequest, cb?: (error: string, rep: GetPublicKeyResponse) => void): Promise<GetPublicKeyResponse>;
    /**
     * 本接口用于禁用一个主密钥，处于禁用状态的Key无法用于加密、解密操作。
     */
    DisableKey(req: DisableKeyRequest, cb?: (error: string, rep: DisableKeyResponse) => void): Promise<DisableKeyResponse>;
    /**
     * 本接口生成一个数据密钥，您可以用这个密钥进行本地数据的加密。
     */
    GenerateDataKey(req: GenerateDataKeyRequest, cb?: (error: string, rep: GenerateDataKeyResponse) => void): Promise<GenerateDataKeyResponse>;
    /**
     * 用于查询该用户是否已开通KMS服务
     */
    GetServiceStatus(req?: GetServiceStatusRequest, cb?: (error: string, rep: GetServiceStatusResponse) => void): Promise<GetServiceStatusResponse>;
    /**
     * 使用指定的SM2非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。传入的密文的长度不能超过256字节。
     */
    AsymmetricSm2Decrypt(req: AsymmetricSm2DecryptRequest, cb?: (error: string, rep: AsymmetricSm2DecryptResponse) => void): Promise<AsymmetricSm2DecryptResponse>;
    /**
     * 非对称密钥签名。
注意：只有 KeyUsage 为 ASYMMETRIC_SIGN_VERIFY_SM2、ASYMMETRIC_SIGN_VERIFY_ECC 或其他支持的 ASYMMETRIC_SIGN_VERIFY_${ALGORITHM} 的密钥才可以使用签名功能。
     */
    SignByAsymmetricKey(req: SignByAsymmetricKeyRequest, cb?: (error: string, rep: SignByAsymmetricKeyResponse) => void): Promise<SignByAsymmetricKeyResponse>;
    /**
     * 取消CMK的计划删除操作
     */
    CancelKeyDeletion(req: CancelKeyDeletionRequest, cb?: (error: string, rep: CancelKeyDeletionResponse) => void): Promise<CancelKeyDeletionResponse>;
    /**
     * 查询指定的CMK是否开启了密钥轮换功能。
     */
    GetKeyRotationStatus(req: GetKeyRotationStatusRequest, cb?: (error: string, rep: GetKeyRotationStatusResponse) => void): Promise<GetKeyRotationStatusResponse>;
    /**
     * 获取白盒密钥列表
     */
    DescribeWhiteBoxKeyDetails(req: DescribeWhiteBoxKeyDetailsRequest, cb?: (error: string, rep: DescribeWhiteBoxKeyDetailsResponse) => void): Promise<DescribeWhiteBoxKeyDetailsResponse>;
    /**
     * 记录当前key被哪个云产品的那个资源所使用。如果当前key设置了自动过期，则取消该设置，确保当前key不会自动失效。如果当前关联关系已经创建，也返回成功。
     */
    BindCloudResource(req: BindCloudResourceRequest, cb?: (error: string, rep: BindCloudResourceResponse) => void): Promise<BindCloudResourceResponse>;
    /**
     * 对密钥进行归档，被归档的密钥只能用于解密，不能加密
     */
    ArchiveKey(req: ArchiveKeyRequest, cb?: (error: string, rep: ArchiveKeyResponse) => void): Promise<ArchiveKeyResponse>;
    /**
     * 取消密钥归档，取消后密钥的状态变为Enabled。
     */
    CancelKeyArchive(req: CancelKeyArchiveRequest, cb?: (error: string, rep: CancelKeyArchiveResponse) => void): Promise<CancelKeyArchiveResponse>;
    /**
     * 使用指定CMK对密文重新加密。
     */
    ReEncrypt(req: ReEncryptRequest, cb?: (error: string, rep: ReEncryptResponse) => void): Promise<ReEncryptResponse>;
    /**
     * 批量启用白盒密钥
     */
    EnableWhiteBoxKeys(req: EnableWhiteBoxKeysRequest, cb?: (error: string, rep: EnableWhiteBoxKeysResponse) => void): Promise<EnableWhiteBoxKeysResponse>;
    /**
     * 列出当前Region支持的加密方式
     */
    ListAlgorithms(req?: ListAlgorithmsRequest, cb?: (error: string, rep: ListAlgorithmsResponse) => void): Promise<ListAlgorithmsResponse>;
    /**
     * 用于获取指定KeyId的主密钥属性详情信息。
     */
    DescribeKey(req: DescribeKeyRequest, cb?: (error: string, rep: DescribeKeyResponse) => void): Promise<DescribeKeyResponse>;
    /**
     * 列出账号下面状态为Enabled， Disabled 和 PendingImport 的CMK KeyId 列表
     */
    ListKeys(req: ListKeysRequest, cb?: (error: string, rep: ListKeysResponse) => void): Promise<ListKeysResponse>;
    /**
     * 随机数生成接口。
     */
    GenerateRandom(req: GenerateRandomRequest, cb?: (error: string, rep: GenerateRandomResponse) => void): Promise<GenerateRandomResponse>;
    /**
     * 覆盖指定密钥的设备指纹信息
     */
    OverwriteWhiteBoxDeviceFingerprints(req: OverwriteWhiteBoxDeviceFingerprintsRequest, cb?: (error: string, rep: OverwriteWhiteBoxDeviceFingerprintsResponse) => void): Promise<OverwriteWhiteBoxDeviceFingerprintsResponse>;
    /**
     * 创建用户管理数据密钥的主密钥CMK（Custom Master Key）。
     */
    CreateKey(req: CreateKeyRequest, cb?: (error: string, rep: CreateKeyResponse) => void): Promise<CreateKeyResponse>;
    /**
     * 展示白盒密钥的信息
     */
    DescribeWhiteBoxKey(req: DescribeWhiteBoxKeyRequest, cb?: (error: string, rep: DescribeWhiteBoxKeyResponse) => void): Promise<DescribeWhiteBoxKeyResponse>;
    /**
     * 使用白盒密钥进行加密
     */
    EncryptByWhiteBox(req: EncryptByWhiteBoxRequest, cb?: (error: string, rep: EncryptByWhiteBoxResponse) => void): Promise<EncryptByWhiteBoxResponse>;
    /**
     * 获取导入主密钥（CMK）材料的参数，返回的Token作为执行ImportKeyMaterial的参数之一，返回的PublicKey用于对自主导入密钥材料进行加密。返回的Token和PublicKey 24小时后失效，失效后如需重新导入，需要再次调用该接口获取新的Token和PublicKey。
     */
    GetParametersForImport(req: GetParametersForImportRequest, cb?: (error: string, rep: GetParametersForImportResponse) => void): Promise<GetParametersForImportResponse>;
    /**
     * 批量禁用白盒密钥
     */
    DisableWhiteBoxKeys(req: DisableWhiteBoxKeysRequest, cb?: (error: string, rep: DisableWhiteBoxKeysResponse) => void): Promise<DisableWhiteBoxKeysResponse>;
    /**
     * 根据指定Offset和Limit获取主密钥列表详情。
     */
    ListKeyDetail(req: ListKeyDetailRequest, cb?: (error: string, rep: ListKeyDetailResponse) => void): Promise<ListKeyDetailResponse>;
    /**
     * 对指定的CMK禁止密钥轮换功能。
     */
    DisableKeyRotation(req: DisableKeyRotationRequest, cb?: (error: string, rep: DisableKeyRotationResponse) => void): Promise<DisableKeyRotationResponse>;
    /**
     * 禁用白盒密钥
     */
    DisableWhiteBoxKey(req: DisableWhiteBoxKeyRequest, cb?: (error: string, rep: DisableWhiteBoxKeyResponse) => void): Promise<DisableWhiteBoxKeyResponse>;
    /**
     * 该接口用于批量启用CMK。
     */
    EnableKeys(req: EnableKeysRequest, cb?: (error: string, rep: EnableKeysResponse) => void): Promise<EnableKeysResponse>;
    /**
     * CMK计划删除接口，用于指定CMK删除的时间，可选时间区间为[7,30]天
     */
    ScheduleKeyDeletion(req: ScheduleKeyDeletionRequest, cb?: (error: string, rep: ScheduleKeyDeletionResponse) => void): Promise<ScheduleKeyDeletionResponse>;
    /**
     * 获取指定密钥的设备指纹列表
     */
    DescribeWhiteBoxDeviceFingerprints(req: DescribeWhiteBoxDeviceFingerprintsRequest, cb?: (error: string, rep: DescribeWhiteBoxDeviceFingerprintsResponse) => void): Promise<DescribeWhiteBoxDeviceFingerprintsResponse>;
    /**
     * 使用指定的RSA非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。
     */
    AsymmetricRsaDecrypt(req: AsymmetricRsaDecryptRequest, cb?: (error: string, rep: AsymmetricRsaDecryptResponse) => void): Promise<AsymmetricRsaDecryptResponse>;
    /**
     * 删除指定（key, 资源，云产品）的记录，以表明：指定的云产品的资源已不再使用当前的key。
     */
    UnbindCloudResource(req: UnbindCloudResourceRequest, cb?: (error: string, rep: UnbindCloudResourceResponse) => void): Promise<UnbindCloudResourceResponse>;
    /**
     * 对指定的CMK开启密钥轮换功能。
     */
    EnableKeyRotation(req: EnableKeyRotationRequest, cb?: (error: string, rep: EnableKeyRotationResponse) => void): Promise<EnableKeyRotationResponse>;
    /**
     * 创建白盒密钥。 密钥个数的上限为 50。
     */
    CreateWhiteBoxKey(req: CreateWhiteBoxKeyRequest, cb?: (error: string, rep: CreateWhiteBoxKeyResponse) => void): Promise<CreateWhiteBoxKeyResponse>;
    /**
     * 启用白盒密钥
     */
    EnableWhiteBoxKey(req: EnableWhiteBoxKeyRequest, cb?: (error: string, rep: EnableWhiteBoxKeyResponse) => void): Promise<EnableWhiteBoxKeyResponse>;
    /**
     * 用于启用一个指定的CMK。
     */
    EnableKey(req: EnableKeyRequest, cb?: (error: string, rep: EnableKeyResponse) => void): Promise<EnableKeyResponse>;
    /**
     * 用于删除导入的密钥材料，仅对EXTERNAL类型的CMK有效，该接口将CMK设置为PendingImport 状态，并不会删除CMK，在重新进行密钥导入后可继续使用。彻底删除CMK请使用 ScheduleKeyDeletion 接口。
     */
    DeleteImportedKeyMaterial(req: DeleteImportedKeyMaterialRequest, cb?: (error: string, rep: DeleteImportedKeyMaterialResponse) => void): Promise<DeleteImportedKeyMaterialResponse>;
    /**
     * 该接口用于批量获取主密钥属性信息。
     */
    DescribeKeys(req: DescribeKeysRequest, cb?: (error: string, rep: DescribeKeysResponse) => void): Promise<DescribeKeysResponse>;
    /**
     * 获取白盒密钥服务状态
     */
    DescribeWhiteBoxServiceStatus(req?: DescribeWhiteBoxServiceStatusRequest, cb?: (error: string, rep: DescribeWhiteBoxServiceStatusResponse) => void): Promise<DescribeWhiteBoxServiceStatusResponse>;
    /**
     * 该接口用于对指定的cmk修改描述信息。对于处于PendingDelete状态的CMK禁止修改。
     */
    UpdateKeyDescription(req: UpdateKeyDescriptionRequest, cb?: (error: string, rep: UpdateKeyDescriptionResponse) => void): Promise<UpdateKeyDescriptionResponse>;
    /**
     * 该接口用于批量禁止CMK的使用。
     */
    DisableKeys(req: DisableKeysRequest, cb?: (error: string, rep: DisableKeysResponse) => void): Promise<DisableKeysResponse>;
    /**
     * 获取白盒解密密钥
     */
    DescribeWhiteBoxDecryptKey(req: DescribeWhiteBoxDecryptKeyRequest, cb?: (error: string, rep: DescribeWhiteBoxDecryptKeyResponse) => void): Promise<DescribeWhiteBoxDecryptKeyResponse>;
    /**
     * 获取可以提供KMS服务的地域列表
     */
    GetRegions(req?: GetRegionsRequest, cb?: (error: string, rep: GetRegionsResponse) => void): Promise<GetRegionsResponse>;
    /**
     * 使用非对称密钥验签
     */
    VerifyByAsymmetricKey(req: VerifyByAsymmetricKeyRequest, cb?: (error: string, rep: VerifyByAsymmetricKeyResponse) => void): Promise<VerifyByAsymmetricKeyResponse>;
}
