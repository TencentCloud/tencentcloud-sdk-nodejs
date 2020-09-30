import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteSecretVersionResponse, RestoreSecretResponse, UpdateDescriptionResponse, DescribeSecretResponse, DeleteSecretRequest, CreateSecretRequest, GetSecretValueResponse, GetRegionsResponse, DeleteSecretVersionRequest, ListSecretVersionIdsRequest, CreateSecretResponse, GetRegionsRequest, UpdateSecretResponse, DisableSecretResponse, ListSecretsRequest, UpdateDescriptionRequest, EnableSecretResponse, UpdateSecretRequest, PutSecretValueRequest, GetSecretValueRequest, GetServiceStatusResponse, RestoreSecretRequest, DescribeSecretRequest, PutSecretValueResponse, DeleteSecretResponse, DisableSecretRequest, ListSecretsResponse, EnableSecretRequest, GetServiceStatusRequest, ListSecretVersionIdsResponse } from "./ssm_models";
/**
 * ssm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口在指定名称的凭据下增加新版本的凭据内容，一个凭据下最多可以支持10个版本。只能对处于Enabled 和 Disabled 状态的凭据添加新的版本。
     */
    PutSecretValue(req: PutSecretValueRequest, cb?: (error: string, rep: PutSecretValueResponse) => void): Promise<PutSecretValueResponse>;
    /**
     * 该接口用于获取指定凭据下的版本列表信息
     */
    ListSecretVersionIds(req: ListSecretVersionIdsRequest, cb?: (error: string, rep: ListSecretVersionIdsResponse) => void): Promise<ListSecretVersionIdsResponse>;
    /**
     * 该接口用于更新指定凭据名称和版本号的内容，调用该接口会对新的凭据内容加密后覆盖旧的内容。仅允许更新Enabled 和 Disabled 状态的凭据。
     */
    UpdateSecret(req: UpdateSecretRequest, cb?: (error: string, rep: UpdateSecretResponse) => void): Promise<UpdateSecretResponse>;
    /**
     * 创建新的凭据信息，通过KMS进行加密保护。每个Region最多可创建存储1000个凭据信息。
     */
    CreateSecret(req: CreateSecretRequest, cb?: (error: string, rep: CreateSecretResponse) => void): Promise<CreateSecretResponse>;
    /**
     * 删除指定的凭据信息，可以通过RecoveryWindowInDays参数设置立即删除或者计划删除。对于计划删除的凭据，在删除日期到达之前状态为 PendingDelete，并可以通过RestoreSecret 进行恢复，超出指定删除日期之后会被彻底删除。您必须先通过 DisableSecret 停用凭据后才可以进行（计划）删除操作。
     */
    DeleteSecret(req: DeleteSecretRequest, cb?: (error: string, rep: DeleteSecretResponse) => void): Promise<DeleteSecretResponse>;
    /**
     * 获取凭据的详细属性信息。
     */
    DescribeSecret(req: DescribeSecretRequest, cb?: (error: string, rep: DescribeSecretResponse) => void): Promise<DescribeSecretResponse>;
    /**
     * 该接口用于恢复计划删除（PendingDelete状态）中的凭据，取消计划删除。取消计划删除的凭据将处于Disabled 状态，如需恢复使用，通过EnableSecret 接口开启凭据。
     */
    RestoreSecret(req: RestoreSecretRequest, cb?: (error: string, rep: RestoreSecretResponse) => void): Promise<RestoreSecretResponse>;
    /**
     * 该接口用于获取所有凭据的详细列表，可以指定过滤字段、排序方式等。
     */
    ListSecrets(req: ListSecretsRequest, cb?: (error: string, rep: ListSecretsResponse) => void): Promise<ListSecretsResponse>;
    /**
     * 该接口用于开启凭据，状态为Enabled。可以通过 GetSecretValue 接口获取凭据明文。处于PendingDelete状态的凭据不能直接开启，需要通过RestoreSecret 恢复后再开启使用。
     */
    EnableSecret(req: EnableSecretRequest, cb?: (error: string, rep: EnableSecretResponse) => void): Promise<EnableSecretResponse>;
    /**
     * 该接口用户获取用户SecretsManager服务开通状态。
     */
    GetServiceStatus(req?: GetServiceStatusRequest, cb?: (error: string, rep: GetServiceStatusResponse) => void): Promise<GetServiceStatusResponse>;
    /**
     * 该接口用于直接删除指定凭据下的单个版本凭据，删除操作立即生效，对所有状态下的凭据版本都可以删除。
     */
    DeleteSecretVersion(req: DeleteSecretVersionRequest, cb?: (error: string, rep: DeleteSecretVersionResponse) => void): Promise<DeleteSecretVersionResponse>;
    /**
     * 该接口用于修改指定凭据的描述信息，仅能修改Enabled 和 Disabled 状态的凭据。
     */
    UpdateDescription(req: UpdateDescriptionRequest, cb?: (error: string, rep: UpdateDescriptionResponse) => void): Promise<UpdateDescriptionResponse>;
    /**
     * 获取控制台展示region列表
     */
    GetRegions(req?: GetRegionsRequest, cb?: (error: string, rep: GetRegionsResponse) => void): Promise<GetRegionsResponse>;
    /**
     * 停用指定的凭据，停用后状态为 Disabled，无法通过接口获取该凭据的明文。
     */
    DisableSecret(req: DisableSecretRequest, cb?: (error: string, rep: DisableSecretResponse) => void): Promise<DisableSecretResponse>;
    /**
     * 获取指定凭据名称和版本的凭据明文信息，只能获取启用状态的凭据明文。
     */
    GetSecretValue(req: GetSecretValueRequest, cb?: (error: string, rep: GetSecretValueResponse) => void): Promise<GetSecretValueResponse>;
}
