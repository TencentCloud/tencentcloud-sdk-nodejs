import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateLicenseResponse, GenerateTDRMKeyResponse, GenerateTDRMKeyRequest, CreateEncryptKeysResponse, CreateLicenseRequest, DescribeAllKeysRequest, CreateEncryptKeysRequest, ModifyFairPlayPemResponse, DescribeFairPlayPemResponse, DescribeDRMLicenseResponse, AddFairPlayPemResponse, AddFairPlayPemRequest, DeleteFairPlayPemRequest, DescribeKeysResponse, DescribeDRMLicenseRequest, DescribeAllKeysResponse, StartEncryptionRequest, ModifyFairPlayPemRequest, DeleteFairPlayPemResponse, StartEncryptionResponse, DescribeFairPlayPemRequest, DescribeKeysRequest } from "./drm_models";
/**
 * drm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 开发者调用该接口，启动一次内容文件的DRM加密工作流。
注意：该接口已下线。
     */
    StartEncryption(req: StartEncryptionRequest, cb?: (error: string, rep: StartEncryptionResponse) => void): Promise<StartEncryptionResponse>;
    /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     */
    AddFairPlayPem(req: AddFairPlayPemRequest, cb?: (error: string, rep: AddFairPlayPemResponse) => void): Promise<AddFairPlayPemResponse>;
    /**
     * 该接口用来设置加密的密钥。注意，同一个content id，只能设置一次！
     */
    CreateEncryptKeys(req: CreateEncryptKeysRequest, cb?: (error: string, rep: CreateEncryptKeysResponse) => void): Promise<CreateEncryptKeysResponse>;
    /**
     * 本接口用来生成DRM方案对应的播放许可证，开发者需提供DRM方案类型、内容类型参数，后台将生成许可证后返回许可证数据
开发者需要转发终端设备发出的许可证请求信息。
     */
    CreateLicense(req: CreateLicenseRequest, cb?: (error: string, rep: CreateLicenseResponse) => void): Promise<CreateLicenseResponse>;
    /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     */
    ModifyFairPlayPem(req: ModifyFairPlayPemRequest, cb?: (error: string, rep: ModifyFairPlayPemResponse) => void): Promise<ModifyFairPlayPemResponse>;
    /**
     * 开发者需要指定使用的DRM类型、和需要加密的Track类型，后台返回加密使用的密钥
如果加密使用的ContentID没有关联的密钥信息，后台会自动生成新的密钥返回

     */
    DescribeKeys(req: DescribeKeysRequest, cb?: (error: string, rep: DescribeKeysResponse) => void): Promise<DescribeKeysResponse>;
    /**
     * 开发者需要指定使用的DRM类型取值 NORMALAES、和需要加密的Track类型取值 SD,ContentType取值 LiveVideo

     */
    DescribeDRMLicense(req: DescribeDRMLicenseRequest, cb?: (error: string, rep: DescribeDRMLicenseResponse) => void): Promise<DescribeDRMLicenseResponse>;
    /**
     * 本接口用来查询指定DRM类型、ContentType的所有加密密钥

     */
    DescribeAllKeys(req: DescribeAllKeysRequest, cb?: (error: string, rep: DescribeAllKeysResponse) => void): Promise<DescribeAllKeysResponse>;
    /**
     * 本接口用来删除fairplay方案的私钥、ask等信息
注：高风险操作，删除后，您将无法使用腾讯云DRM提供的fairplay服务。
由于缓存，删除操作需要约半小时生效
     */
    DeleteFairPlayPem(req: DeleteFairPlayPemRequest, cb?: (error: string, rep: DeleteFairPlayPemResponse) => void): Promise<DeleteFairPlayPemResponse>;
    /**
     * 该接口用来查询设置的FairPlay私钥校验信息。可用该接口校验设置的私钥与本身的私钥是否一致。
     */
    DescribeFairPlayPem(req: DescribeFairPlayPemRequest, cb?: (error: string, rep: DescribeFairPlayPemResponse) => void): Promise<DescribeFairPlayPemResponse>;
    /**
     * 开发者需要指定使用的DRM类型取值 NORMALAES、和需要加密的Track类型取值 SD,ContentType取值 LiveVideo
     */
    GenerateTDRMKey(req: GenerateTDRMKeyRequest, cb?: (error: string, rep: GenerateTDRMKeyResponse) => void): Promise<GenerateTDRMKeyResponse>;
}
