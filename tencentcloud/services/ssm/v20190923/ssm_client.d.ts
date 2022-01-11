import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteSecretVersionResponse, RestoreSecretResponse, UpdateDescriptionResponse, DescribeSecretResponse, DescribeSupportedProductsRequest, GetSecretValueRequest, DeleteSecretRequest, CreateSecretRequest, RotateProductSecretRequest, CreateProductSecretRequest, GetSecretValueResponse, GetRegionsResponse, DescribeSupportedProductsResponse, DeleteSecretVersionRequest, ListSecretVersionIdsRequest, DescribeRotationDetailRequest, CreateSSHKeyPairSecretResponse, UpdateRotationStatusResponse, CreateSecretResponse, GetRegionsRequest, UpdateSecretResponse, DisableSecretResponse, ListSecretsRequest, UpdateDescriptionRequest, EnableSecretResponse, CreateSSHKeyPairSecretRequest, UpdateRotationStatusRequest, UpdateSecretRequest, DescribeAsyncRequestInfoResponse, RestoreSecretRequest, RotateProductSecretResponse, PutSecretValueRequest, PutSecretValueResponse, DescribeRotationHistoryResponse, GetSSHKeyPairValueRequest, DescribeAsyncRequestInfoRequest, GetServiceStatusResponse, DescribeRotationDetailResponse, EnableSecretRequest, DescribeRotationHistoryRequest, GetSSHKeyPairValueResponse, DeleteSecretResponse, DisableSecretRequest, CreateProductSecretResponse, ListSecretsResponse, DescribeSecretRequest, GetServiceStatusRequest, ListSecretVersionIdsResponse } from "./ssm_models";
/**
 * ssm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询凭据轮转历史版本。
本接口仅适用于云产品凭据。
     */
    DescribeRotationHistory(req: DescribeRotationHistoryRequest, cb?: (error: string, rep: DescribeRotationHistoryResponse) => void): Promise<DescribeRotationHistoryResponse>;
    /**
     * 轮转云产品凭据或云API密钥对凭据。
该接口仅适用于处于Enabled状态的云产品凭据或处于Enable状态的云API密钥对凭据，对于其他状态的云产品凭据或云API密钥对凭据或用户自定义凭据不适用。
     */
    RotateProductSecret(req: RotateProductSecretRequest, cb?: (error: string, rep: RotateProductSecretResponse) => void): Promise<RotateProductSecretResponse>;
    /**
     * 删除指定的凭据信息，可以通过RecoveryWindowInDays参数设置立即删除或者计划删除。对于计划删除的凭据，在删除日期到达之前状态为 PendingDelete，并可以通过RestoreSecret 进行恢复，超出指定删除日期之后会被彻底删除。您必须先通过 DisableSecret 停用凭据后才可以进行（计划）删除操作。
     */
    DeleteSecret(req: DeleteSecretRequest, cb?: (error: string, rep: DeleteSecretResponse) => void): Promise<DeleteSecretResponse>;
    /**
     * 该接口用于更新指定凭据名称和版本号的内容，调用该接口会对新的凭据内容加密后覆盖旧的内容。仅允许更新Enabled 和 Disabled 状态的凭据。
本接口仅适用于用户自定义凭据，不能对云产品凭据操作。
     */
    UpdateSecret(req: UpdateSecretRequest, cb?: (error: string, rep: UpdateSecretResponse) => void): Promise<UpdateSecretResponse>;
    /**
     * 该接口用于获取所有凭据的详细列表，可以指定过滤字段、排序方式等。
     */
    ListSecrets(req: ListSecretsRequest, cb?: (error: string, rep: ListSecretsResponse) => void): Promise<ListSecretsResponse>;
    /**
     * 创建用于托管SSH密钥对的凭据
     */
    CreateSSHKeyPairSecret(req: CreateSSHKeyPairSecretRequest, cb?: (error: string, rep: CreateSSHKeyPairSecretResponse) => void): Promise<CreateSSHKeyPairSecretResponse>;
    /**
     * 设置云产品凭据轮转策略，可以设置：
是否开启轮转
轮转周期
轮转开始时间
     */
    UpdateRotationStatus(req: UpdateRotationStatusRequest, cb?: (error: string, rep: UpdateRotationStatusResponse) => void): Promise<UpdateRotationStatusResponse>;
    /**
     * 查询支持的云产品列表
     */
    DescribeSupportedProducts(req?: DescribeSupportedProductsRequest, cb?: (error: string, rep: DescribeSupportedProductsResponse) => void): Promise<DescribeSupportedProductsResponse>;
    /**
     * 对于用户自定义凭据，通过指定凭据名称和版本来获取凭据的明文信息；
对于云产品凭据如Mysql凭据，通过指定凭据名称和历史版本号来获取历史轮转凭据的明文信息，如果要获取当前正在使用的凭据版本的明文，需要将版本号指定为：SSM_Current。
     */
    GetSecretValue(req: GetSecretValueRequest, cb?: (error: string, rep: GetSecretValueResponse) => void): Promise<GetSecretValueResponse>;
    /**
     * 查询异步任务的执行结果
     */
    DescribeAsyncRequestInfo(req: DescribeAsyncRequestInfoRequest, cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void): Promise<DescribeAsyncRequestInfoResponse>;
    /**
     * 创建云产品凭据
     */
    CreateProductSecret(req: CreateProductSecretRequest, cb?: (error: string, rep: CreateProductSecretResponse) => void): Promise<CreateProductSecretResponse>;
    /**
     * 该接口用于直接删除指定凭据下的单个版本凭据，删除操作立即生效，对所有状态下的凭据版本都可以删除。
本接口仅适用于用户自定义凭据，本接口不能对云产品凭据进行操作。
     */
    DeleteSecretVersion(req: DeleteSecretVersionRequest, cb?: (error: string, rep: DeleteSecretVersionResponse) => void): Promise<DeleteSecretVersionResponse>;
    /**
     * 该接口用于修改指定凭据的描述信息，仅能修改Enabled 和 Disabled 状态的凭据。
     */
    UpdateDescription(req: UpdateDescriptionRequest, cb?: (error: string, rep: UpdateDescriptionResponse) => void): Promise<UpdateDescriptionResponse>;
    /**
     * 该接口在指定名称的凭据下增加新版本的凭据内容，一个凭据下最多可以支持10个版本。只能对处于Enabled 和 Disabled 状态的凭据添加新的版本。
本接口仅适用于用户自定义凭据，对云产品凭据不能操作。
     */
    PutSecretValue(req: PutSecretValueRequest, cb?: (error: string, rep: PutSecretValueResponse) => void): Promise<PutSecretValueResponse>;
    /**
     * 获取凭据的详细属性信息。
     */
    DescribeSecret(req: DescribeSecretRequest, cb?: (error: string, rep: DescribeSecretResponse) => void): Promise<DescribeSecretResponse>;
    /**
     * 查询凭据轮转策略详情。
本接口只适用于云产品凭据。
     */
    DescribeRotationDetail(req: DescribeRotationDetailRequest, cb?: (error: string, rep: DescribeRotationDetailResponse) => void): Promise<DescribeRotationDetailResponse>;
    /**
     * 获取SSH密钥对凭据明文信息。
     */
    GetSSHKeyPairValue(req: GetSSHKeyPairValueRequest, cb?: (error: string, rep: GetSSHKeyPairValueResponse) => void): Promise<GetSSHKeyPairValueResponse>;
    /**
     * 该接口用于获取指定凭据下的版本列表信息
     */
    ListSecretVersionIds(req: ListSecretVersionIdsRequest, cb?: (error: string, rep: ListSecretVersionIdsResponse) => void): Promise<ListSecretVersionIdsResponse>;
    /**
     * 创建新的凭据信息，通过KMS进行加密保护。每个Region最多可创建存储1000个凭据信息。
     */
    CreateSecret(req: CreateSecretRequest, cb?: (error: string, rep: CreateSecretResponse) => void): Promise<CreateSecretResponse>;
    /**
     * 该接口用于开启凭据，状态为Enabled。可以通过 GetSecretValue 接口获取凭据明文。处于PendingDelete状态的凭据不能直接开启，需要通过RestoreSecret 恢复后再开启使用。
     */
    EnableSecret(req: EnableSecretRequest, cb?: (error: string, rep: EnableSecretResponse) => void): Promise<EnableSecretResponse>;
    /**
     * 该接口用于恢复计划删除（PendingDelete状态）中的凭据，取消计划删除。取消计划删除的凭据将处于Disabled 状态，如需恢复使用，通过EnableSecret 接口开启凭据。
     */
    RestoreSecret(req: RestoreSecretRequest, cb?: (error: string, rep: RestoreSecretResponse) => void): Promise<RestoreSecretResponse>;
    /**
     * 该接口用户获取用户SecretsManager服务开通状态。
     */
    GetServiceStatus(req?: GetServiceStatusRequest, cb?: (error: string, rep: GetServiceStatusResponse) => void): Promise<GetServiceStatusResponse>;
    /**
     * 获取控制台展示region列表
     */
    GetRegions(req?: GetRegionsRequest, cb?: (error: string, rep: GetRegionsResponse) => void): Promise<GetRegionsResponse>;
    /**
     * 停用指定的凭据，停用后状态为 Disabled，无法通过接口获取该凭据的明文。
     */
    DisableSecret(req: DisableSecretRequest, cb?: (error: string, rep: DisableSecretResponse) => void): Promise<DisableSecretResponse>;
}
