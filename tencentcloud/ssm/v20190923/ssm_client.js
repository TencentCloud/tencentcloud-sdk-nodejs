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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DeleteSecretVersionResponse = models.DeleteSecretVersionResponse;
const RestoreSecretResponse = models.RestoreSecretResponse;
const UpdateDescriptionResponse = models.UpdateDescriptionResponse;
const DescribeSecretResponse = models.DescribeSecretResponse;
const DeleteSecretRequest = models.DeleteSecretRequest;
const CreateSecretRequest = models.CreateSecretRequest;
const GetSecretValueResponse = models.GetSecretValueResponse;
const GetRegionsResponse = models.GetRegionsResponse;
const DeleteSecretVersionRequest = models.DeleteSecretVersionRequest;
const SecretMetadata = models.SecretMetadata;
const ListSecretVersionIdsRequest = models.ListSecretVersionIdsRequest;
const CreateSecretResponse = models.CreateSecretResponse;
const GetRegionsRequest = models.GetRegionsRequest;
const UpdateSecretResponse = models.UpdateSecretResponse;
const DisableSecretResponse = models.DisableSecretResponse;
const ListSecretsRequest = models.ListSecretsRequest;
const UpdateDescriptionRequest = models.UpdateDescriptionRequest;
const EnableSecretResponse = models.EnableSecretResponse;
const UpdateSecretRequest = models.UpdateSecretRequest;
const VersionInfo = models.VersionInfo;
const PutSecretValueRequest = models.PutSecretValueRequest;
const GetSecretValueRequest = models.GetSecretValueRequest;
const GetServiceStatusResponse = models.GetServiceStatusResponse;
const RestoreSecretRequest = models.RestoreSecretRequest;
const DescribeSecretRequest = models.DescribeSecretRequest;
const PutSecretValueResponse = models.PutSecretValueResponse;
const DeleteSecretResponse = models.DeleteSecretResponse;
const DisableSecretRequest = models.DisableSecretRequest;
const ListSecretsResponse = models.ListSecretsResponse;
const EnableSecretRequest = models.EnableSecretRequest;
const GetServiceStatusRequest = models.GetServiceStatusRequest;
const ListSecretVersionIdsResponse = models.ListSecretVersionIdsResponse;


/**
 * ssm client
 * @class
 */
class SsmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ssm.tencentcloudapi.com", "2019-09-23", credential, region, profile);
    }
    
    /**
     * 该接口在指定名称的凭据下增加新版本的凭据内容，一个凭据下最多可以支持10个版本。只能对处于Enabled 和 Disabled 状态的凭据添加新的版本。
     * @param {PutSecretValueRequest} req
     * @param {function(string, PutSecretValueResponse):void} cb
     * @public
     */
    PutSecretValue(req, cb) {
        let resp = new PutSecretValueResponse();
        this.request("PutSecretValue", req, resp, cb);
    }

    /**
     * 该接口用于获取指定凭据下的版本列表信息
     * @param {ListSecretVersionIdsRequest} req
     * @param {function(string, ListSecretVersionIdsResponse):void} cb
     * @public
     */
    ListSecretVersionIds(req, cb) {
        let resp = new ListSecretVersionIdsResponse();
        this.request("ListSecretVersionIds", req, resp, cb);
    }

    /**
     * 该接口用于更新指定凭据名称和版本号的内容，调用该接口会对新的凭据内容加密后覆盖旧的内容。仅允许更新Enabled 和 Disabled 状态的凭据。
     * @param {UpdateSecretRequest} req
     * @param {function(string, UpdateSecretResponse):void} cb
     * @public
     */
    UpdateSecret(req, cb) {
        let resp = new UpdateSecretResponse();
        this.request("UpdateSecret", req, resp, cb);
    }

    /**
     * 创建新的凭据信息，通过KMS进行加密保护。每个Region最多可创建存储1000个凭据信息。
     * @param {CreateSecretRequest} req
     * @param {function(string, CreateSecretResponse):void} cb
     * @public
     */
    CreateSecret(req, cb) {
        let resp = new CreateSecretResponse();
        this.request("CreateSecret", req, resp, cb);
    }

    /**
     * 删除指定的凭据信息，可以通过RecoveryWindowInDays参数设置立即删除或者计划删除。对于计划删除的凭据，在删除日期到达之前状态为 PendingDelete，并可以通过RestoreSecret 进行恢复，超出指定删除日期之后会被彻底删除。您必须先通过 DisableSecret 停用凭据后才可以进行（计划）删除操作。
     * @param {DeleteSecretRequest} req
     * @param {function(string, DeleteSecretResponse):void} cb
     * @public
     */
    DeleteSecret(req, cb) {
        let resp = new DeleteSecretResponse();
        this.request("DeleteSecret", req, resp, cb);
    }

    /**
     * 获取凭据的详细属性信息。
     * @param {DescribeSecretRequest} req
     * @param {function(string, DescribeSecretResponse):void} cb
     * @public
     */
    DescribeSecret(req, cb) {
        let resp = new DescribeSecretResponse();
        this.request("DescribeSecret", req, resp, cb);
    }

    /**
     * 该接口用于恢复计划删除（PendingDelete状态）中的凭据，取消计划删除。取消计划删除的凭据将处于Disabled 状态，如需恢复使用，通过EnableSecret 接口开启凭据。
     * @param {RestoreSecretRequest} req
     * @param {function(string, RestoreSecretResponse):void} cb
     * @public
     */
    RestoreSecret(req, cb) {
        let resp = new RestoreSecretResponse();
        this.request("RestoreSecret", req, resp, cb);
    }

    /**
     * 该接口用于获取所有凭据的详细列表，可以指定过滤字段、排序方式等。
     * @param {ListSecretsRequest} req
     * @param {function(string, ListSecretsResponse):void} cb
     * @public
     */
    ListSecrets(req, cb) {
        let resp = new ListSecretsResponse();
        this.request("ListSecrets", req, resp, cb);
    }

    /**
     * 该接口用于开启凭据，状态为Enabled。可以通过 GetSecretValue 接口获取凭据明文。处于PendingDelete状态的凭据不能直接开启，需要通过RestoreSecret 恢复后再开启使用。
     * @param {EnableSecretRequest} req
     * @param {function(string, EnableSecretResponse):void} cb
     * @public
     */
    EnableSecret(req, cb) {
        let resp = new EnableSecretResponse();
        this.request("EnableSecret", req, resp, cb);
    }

    /**
     * 该接口用户获取用户SecretsManager服务开通状态。
     * @param {GetServiceStatusRequest} req
     * @param {function(string, GetServiceStatusResponse):void} cb
     * @public
     */
    GetServiceStatus(req, cb) {
        let resp = new GetServiceStatusResponse();
        this.request("GetServiceStatus", req, resp, cb);
    }

    /**
     * 该接口用于直接删除指定凭据下的单个版本凭据，删除操作立即生效，对所有状态下的凭据版本都可以删除。
     * @param {DeleteSecretVersionRequest} req
     * @param {function(string, DeleteSecretVersionResponse):void} cb
     * @public
     */
    DeleteSecretVersion(req, cb) {
        let resp = new DeleteSecretVersionResponse();
        this.request("DeleteSecretVersion", req, resp, cb);
    }

    /**
     * 该接口用于修改指定凭据的描述信息，仅能修改Enabled 和 Disabled 状态的凭据。
     * @param {UpdateDescriptionRequest} req
     * @param {function(string, UpdateDescriptionResponse):void} cb
     * @public
     */
    UpdateDescription(req, cb) {
        let resp = new UpdateDescriptionResponse();
        this.request("UpdateDescription", req, resp, cb);
    }

    /**
     * 获取控制台展示region列表
     * @param {GetRegionsRequest} req
     * @param {function(string, GetRegionsResponse):void} cb
     * @public
     */
    GetRegions(req, cb) {
        let resp = new GetRegionsResponse();
        this.request("GetRegions", req, resp, cb);
    }

    /**
     * 停用指定的凭据，停用后状态为 Disabled，无法通过接口获取该凭据的明文。
     * @param {DisableSecretRequest} req
     * @param {function(string, DisableSecretResponse):void} cb
     * @public
     */
    DisableSecret(req, cb) {
        let resp = new DisableSecretResponse();
        this.request("DisableSecret", req, resp, cb);
    }

    /**
     * 获取指定凭据名称和版本的凭据明文信息，只能获取启用状态的凭据明文。
     * @param {GetSecretValueRequest} req
     * @param {function(string, GetSecretValueResponse):void} cb
     * @public
     */
    GetSecretValue(req, cb) {
        let resp = new GetSecretValueResponse();
        this.request("GetSecretValue", req, resp, cb);
    }


}
module.exports = SsmClient;
