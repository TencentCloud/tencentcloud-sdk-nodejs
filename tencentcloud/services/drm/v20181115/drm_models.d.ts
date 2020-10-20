/**
 * CreateLicense返回参数结构体
 */
export interface CreateLicenseResponse {
    /**
      * Base64 编码的许可证二进制数据。
      */
    License?: string;
    /**
      * 加密内容的内容ID
      */
    ContentId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设置加密密钥所需的参数
 */
export interface KeyParam {
    /**
      * 加密track类型。取值范围：
SD、HD、UHD1、UHD2、AUDIO
      */
    Track: string;
    /**
      * 请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对解密密钥进行加密，并对加密结果进行base64编码。
      */
    Key: string;
    /**
      * 密钥ID。
      */
    KeyId?: string;
    /**
      * 请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对解密密钥进行加密，并对加密结果进行base64编码。
      */
    Iv?: string;
}
/**
 * FairPlay 私钥摘要信息。
 */
export interface FairPlayPemDigestInfo {
    /**
      * fairplay 私钥pem id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FairPlayPemId: number;
    /**
      * 私钥的优先级。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Priority: number;
    /**
      * 私钥的md5 信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Md5Pem: string;
    /**
      * ASK的md5信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Md5Ask: string;
    /**
      * 私钥解密密钥的md5值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Md5PemDecryptKey: string;
}
/**
 * CreateEncryptKeys返回参数结构体
 */
export interface CreateEncryptKeysResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLicense请求参数结构体
 */
export interface CreateLicenseRequest {
    /**
      * DRM方案类型，接口取值：WIDEVINE，FAIRPLAY。
      */
    DrmType: string;
    /**
      * Base64编码的终端设备License Request数据。
      */
    LicenseRequest: string;
    /**
      * 内容类型，接口取值：VodVideo,LiveVideo。
      */
    ContentType: string;
    /**
      * 授权播放的Track列表。
该值为空时，默认授权所有track播放。
      */
    Tracks?: Array<string>;
    /**
      * 播放策略参数。
      */
    PlaybackPolicy?: PlaybackPolicy;
}
/**
 * DescribeAllKeys请求参数结构体
 */
export interface DescribeAllKeysRequest {
    /**
      * 使用的DRM方案类型，接口取值WIDEVINE、FAIRPLAY、NORMALAES。
      */
    DrmType: string;
    /**
      * Base64编码的Rsa公钥，用来加密出参中的SessionKey。
如果该参数为空，则出参中SessionKey为明文。
      */
    RsaPublicKey?: string;
    /**
      * 一个加密内容的唯一标识。
      */
    ContentId?: string;
    /**
      * 内容类型。接口取值VodVideo,LiveVideo。
      */
    ContentType?: string;
}
/**
 * 用于DRM加密的源对象
 */
export interface DrmSourceObject {
    /**
      * 输入的桶名称。
      */
    BucketName?: string;
    /**
      * 输入对象名称。
      */
    ObjectName?: string;
}
/**
 * CreateEncryptKeys请求参数结构体
 */
export interface CreateEncryptKeysRequest {
    /**
      * 使用的DRM方案类型，接口取值WIDEVINE、FAIRPLAY、NORMALAES。
      */
    DrmType: string;
    /**
      * 设置的加密密钥列表。
      */
    Keys: Array<KeyParam>;
    /**
      * 一个加密内容的唯一标识。
      */
    ContentId?: string;
    /**
      * 内容类型。接口取值VodVideo,LiveVideo。
      */
    ContentType?: string;
}
/**
 * ModifyFairPlayPem返回参数结构体
 */
export interface ModifyFairPlayPemResponse {
    /**
      * 设置私钥后，后台返回的pem id，用来唯一标识一个私钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FairPlayPemId?: number;
    /**
      * 私钥的优先级，优先级数值越高，优先级越高。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Priority?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFairPlayPem返回参数结构体
 */
export interface DescribeFairPlayPemResponse {
    /**
      * 该账户下，所有设置的FairPlay私钥摘要信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FairPlayPems?: Array<FairPlayPemDigestInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DRM加密密钥
 */
export interface Key {
    /**
      * 加密track类型。Widevine支持SD、HD、UHD1、UHD2、AUDIO。Fairplay只支持HD。
      */
    Track: string;
    /**
      * 密钥ID。
      */
    KeyId: string;
    /**
      * 原始Key使用AES-128 ECB模式和SessionKey加密的后的二进制数据，Base64编码的字符串。
      */
    Key: string;
    /**
      * 原始IV使用AES-128 ECB模式和SessionKey加密的后的二进制数据，Base64编码的字符串。
      */
    Iv: string;
    /**
      * 该key生成时的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTimestamp: number;
}
/**
 * 播放控制参数
 */
export interface PlaybackPolicy {
    /**
      * 播放许可证的有效期
      */
    LicenseDurationSeconds?: number;
    /**
      * 开始播放后，允许最长播放时间
      */
    PlaybackDurationSeconds?: number;
}
/**
 * AddFairPlayPem返回参数结构体
 */
export interface AddFairPlayPemResponse {
    /**
      * 设置私钥后，后台返回的pem id，用来唯一标识一个私钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FairPlayPemId?: number;
    /**
      * 私钥的优先级，优先级数值越高，优先级越高。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Priority?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddFairPlayPem请求参数结构体
 */
export interface AddFairPlayPemRequest {
    /**
      * 加密后的fairplay方案申请时使用的私钥。
请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对私钥文件中的字段进行加密，并对加密结果进行base64编码。
      */
    Pem: string;
    /**
      * 加密后的fairplay方案申请返回的ask数据。
请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对Ask字符串进行加密，并对加密结果进行base64编码。
      */
    Ask: string;
    /**
      * 私钥的解密密钥。
openssl在生成rsa时，可能会需要设置加密密钥，请记住设置的密钥。
请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对解密密钥进行加密，并对加密结果进行base64编码。
      */
    PemDecryptKey?: string;
    /**
      * 委托者Id,适用于托管自身证书的客户。普通客户无需填该字段。
      */
    BailorId?: number;
    /**
      * 私钥的优先级，优先级数值越高，优先级越高。
该值可以不传，后台将自动分配一个优先级。
      */
    Priority?: number;
}
/**
 * DeleteFairPlayPem请求参数结构体
 */
export interface DeleteFairPlayPemRequest {
    /**
      * 委托者Id,适用于托管自身证书的客户。普通客户无需填该字段。
      */
    BailorId?: number;
    /**
      * 要删除的pem id。
当未传入该值时，将删除所有的私钥。
      */
    FairPlayPemId?: number;
}
/**
 * DescribeKeys返回参数结构体
 */
export interface DescribeKeysResponse {
    /**
      * 加密密钥列表
      */
    Keys?: Array<Key>;
    /**
      * 用来加密密钥。
如果入参中带有RsaPublicKey，则SessionKey为使用Rsa公钥加密后的二进制数据，Base64编码字符串。
如果入参中没有RsaPublicKey，则SessionKey为原始数据的字符串形式。
      */
    SessionKey?: string;
    /**
      * 内容ID
      */
    ContentId?: string;
    /**
      * Widevine方案的Pssh数据，Base64编码。
Fairplay方案无该值。
      */
    Pssh?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAllKeys返回参数结构体
 */
export interface DescribeAllKeysResponse {
    /**
      * 加密密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys?: Array<Key>;
    /**
      * 用来加密密钥。
如果入参中带有RsaPublicKey，则SessionKey为使用Rsa公钥加密后的二进制数据，Base64编码字符串。
如果入参中没有RsaPublicKey，则SessionKey为原始数据的字符串形式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionKey?: string;
    /**
      * 内容ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContentId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartEncryption请求参数结构体
 */
export interface StartEncryptionRequest {
    /**
      * cos的end point。
      */
    CosEndPoint: string;
    /**
      * cos api密钥id。
      */
    CosSecretId: string;
    /**
      * cos api密钥。
      */
    CosSecretKey: string;
    /**
      * 使用的DRM方案类型，接口取值WIDEVINE,FAIRPLAY
      */
    DrmType: string;
    /**
      * 存储在COS上的原始内容信息
      */
    SourceObject: DrmSourceObject;
    /**
      * 加密后的内容存储到COS的对象
      */
    OutputObjects: Array<DrmOutputObject>;
}
/**
 * ModifyFairPlayPem请求参数结构体
 */
export interface ModifyFairPlayPemRequest {
    /**
      * 加密后的fairplay方案申请时使用的私钥。
请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对私钥文件中的字段进行加密，并对加密结果进行base64编码。
      */
    Pem: string;
    /**
      * 加密后的fairplay方案申请返回的ask数据。
请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对Ask字符串进行加密，并对加密结果进行base64编码。
      */
    Ask: string;
    /**
      * 要修改的私钥id
      */
    FairPlayPemId: number;
    /**
      * 私钥的解密密钥。
openssl在生成rsa时，可能会需要设置加密密钥，请记住设置的密钥。
请使用腾讯云DRM 提供的公钥，使用rsa加密算法，PKCS1填充方式对解密密钥进行加密，并对加密结果进行base64编码。
      */
    PemDecryptKey?: string;
    /**
      * 委托者Id,适用于托管自身证书的客户。普通客户无需填该字段。
      */
    BailorId?: number;
    /**
      * 私钥的优先级，优先级数值越高，优先级越高。
该值可以不传，后台将自动分配一个优先级。
      */
    Priority?: number;
}
/**
 * DeleteFairPlayPem返回参数结构体
 */
export interface DeleteFairPlayPemResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Drm加密对象输出参数
 */
export interface DrmOutputPara {
    /**
      * 内容类型。例:video，audio，mpd，m3u8
      */
    Type?: string;
    /**
      * 语言,例: en, zh-cn
      */
    Language?: string;
}
/**
 * StartEncryption返回参数结构体
 */
export interface StartEncryptionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFairPlayPem请求参数结构体
 */
export interface DescribeFairPlayPemRequest {
    /**
      * 委托者Id,适用于托管自身证书的客户。普通客户无需填该字段。
      */
    BailorId?: number;
    /**
      * 需要查询的pem id。
当该值未填入时，将返回所有的私钥信息。
      */
    FairPlayPemId?: number;
}
/**
 * DescribeKeys请求参数结构体
 */
export interface DescribeKeysRequest {
    /**
      * 使用的DRM方案类型，接口取值WIDEVINE、FAIRPLAY、NORMALAES。
      */
    DrmType: string;
    /**
      * 加密的track列表，接口取值VIDEO、AUDIO。
      */
    Tracks: Array<string>;
    /**
      * 内容类型。接口取值VodVideo,LiveVideo
      */
    ContentType: string;
    /**
      * Base64编码的Rsa公钥，用来加密出参中的SessionKey。
如果该参数为空，则出参中SessionKey为明文。
      */
    RsaPublicKey?: string;
    /**
      * 一个加密内容的唯一标识。
如果该参数为空，则后台自动生成
      */
    ContentId?: string;
}
/**
 * DRM加密后的输出对象
 */
export interface DrmOutputObject {
    /**
      * 输出的桶名称。
      */
    BucketName?: string;
    /**
      * 输出的对象名称。
      */
    ObjectName?: string;
    /**
      * 输出对象参数。
      */
    Para?: DrmOutputPara;
}
