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
const CreateHostingDomainResponse = models.CreateHostingDomainResponse;
const CreateStaticStoreResponse = models.CreateStaticStoreResponse;
const DescribeEnvLimitRequest = models.DescribeEnvLimitRequest;
const DescribeQuotaDataResponse = models.DescribeQuotaDataResponse;
const CheckTcbServiceResponse = models.CheckTcbServiceResponse;
const DescribeEndUserLoginStatisticRequest = models.DescribeEndUserLoginStatisticRequest;
const StorageInfo = models.StorageInfo;
const LoginStatistic = models.LoginStatistic;
const PostpayEnvQuota = models.PostpayEnvQuota;
const FunctionInfo = models.FunctionInfo;
const CreatePostpayPackageResponse = models.CreatePostpayPackageResponse;
const CommonServiceAPIRequest = models.CommonServiceAPIRequest;
const DescribeEndUsersResponse = models.DescribeEndUsersResponse;
const AuthDomain = models.AuthDomain;
const LogServiceInfo = models.LogServiceInfo;
const CreateStaticStoreRequest = models.CreateStaticStoreRequest;
const CommonServiceAPIResponse = models.CommonServiceAPIResponse;
const DescribeEndUserStatisticResponse = models.DescribeEndUserStatisticResponse;
const DescribePostpayPackageFreeQuotasRequest = models.DescribePostpayPackageFreeQuotasRequest;
const CreateAuthDomainResponse = models.CreateAuthDomainResponse;
const ModifyEnvRequest = models.ModifyEnvRequest;
const DescribeEndUsersRequest = models.DescribeEndUsersRequest;
const DescribeEnvsRequest = models.DescribeEnvsRequest;
const DescribeQuotaDataRequest = models.DescribeQuotaDataRequest;
const ReinstateEnvResponse = models.ReinstateEnvResponse;
const DescribeEndUserStatisticRequest = models.DescribeEndUserStatisticRequest;
const PackageFreeQuotaInfo = models.PackageFreeQuotaInfo;
const DescribeEnvFreeQuotaResponse = models.DescribeEnvFreeQuotaResponse;
const CheckTcbServiceRequest = models.CheckTcbServiceRequest;
const ModifyDatabaseACLResponse = models.ModifyDatabaseACLResponse;
const StaticStorageInfo = models.StaticStorageInfo;
const DescribeExtraPkgBillingInfoResponse = models.DescribeExtraPkgBillingInfoResponse;
const DescribeExtraPkgBillingInfoRequest = models.DescribeExtraPkgBillingInfoRequest;
const CreatePostpayPackageRequest = models.CreatePostpayPackageRequest;
const DescribeEnvFreeQuotaRequest = models.DescribeEnvFreeQuotaRequest;
const DatabasesInfo = models.DatabasesInfo;
const DescribeAuthDomainsRequest = models.DescribeAuthDomainsRequest;
const DeleteEndUserRequest = models.DeleteEndUserRequest;
const DescribeAuthDomainsResponse = models.DescribeAuthDomainsResponse;
const ReinstateEnvRequest = models.ReinstateEnvRequest;
const DescribeDatabaseACLRequest = models.DescribeDatabaseACLRequest;
const CreateHostingDomainRequest = models.CreateHostingDomainRequest;
const DestroyStaticStoreResponse = models.DestroyStaticStoreResponse;
const DeleteEndUserResponse = models.DeleteEndUserResponse;
const EnvBillingInfoItem = models.EnvBillingInfoItem;
const PlatformStatistic = models.PlatformStatistic;
const ModifyEndUserRequest = models.ModifyEndUserRequest;
const DescribeDatabaseACLResponse = models.DescribeDatabaseACLResponse;
const EnvInfo = models.EnvInfo;
const DestroyEnvRequest = models.DestroyEnvRequest;
const DestroyEnvResponse = models.DestroyEnvResponse;
const ModifyDatabaseACLRequest = models.ModifyDatabaseACLRequest;
const DestroyStaticStoreRequest = models.DestroyStaticStoreRequest;
const ModifyEndUserResponse = models.ModifyEndUserResponse;
const EndUserInfo = models.EndUserInfo;
const DescribeEnvLimitResponse = models.DescribeEnvLimitResponse;
const DescribePostpayPackageFreeQuotasResponse = models.DescribePostpayPackageFreeQuotasResponse;
const DescribeEndUserLoginStatisticResponse = models.DescribeEndUserLoginStatisticResponse;
const DescribeEnvsResponse = models.DescribeEnvsResponse;
const ModifyEnvResponse = models.ModifyEnvResponse;
const OrderInfo = models.OrderInfo;
const CreateAuthDomainRequest = models.CreateAuthDomainRequest;


/**
 * tcb client
 * @class
 */
class TcbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcb.tencentcloudapi.com", "2018-06-08", credential, region, profile);
    }
    
    /**
     * 创建托管域名
     * @param {CreateHostingDomainRequest} req
     * @param {function(string, CreateHostingDomainResponse):void} cb
     * @public
     */
    CreateHostingDomain(req, cb) {
        let resp = new CreateHostingDomainResponse();
        this.request("CreateHostingDomain", req, resp, cb);
    }

    /**
     * 获取终端用户列表
     * @param {DescribeEndUsersRequest} req
     * @param {function(string, DescribeEndUsersResponse):void} cb
     * @public
     */
    DescribeEndUsers(req, cb) {
        let resp = new DescribeEndUsersResponse();
        this.request("DescribeEndUsers", req, resp, cb);
    }

    /**
     * 增加安全域名
     * @param {CreateAuthDomainRequest} req
     * @param {function(string, CreateAuthDomainResponse):void} cb
     * @public
     */
    CreateAuthDomain(req, cb) {
        let resp = new CreateAuthDomainResponse();
        this.request("CreateAuthDomain", req, resp, cb);
    }

    /**
     * 获取安全域名列表
     * @param {DescribeAuthDomainsRequest} req
     * @param {function(string, DescribeAuthDomainsResponse):void} cb
     * @public
     */
    DescribeAuthDomains(req, cb) {
        let resp = new DescribeAuthDomainsResponse();
        this.request("DescribeAuthDomains", req, resp, cb);
    }

    /**
     * 开通后付费资源
     * @param {CreatePostpayPackageRequest} req
     * @param {function(string, CreatePostpayPackageResponse):void} cb
     * @public
     */
    CreatePostpayPackage(req, cb) {
        let resp = new CreatePostpayPackageResponse();
        this.request("CreatePostpayPackage", req, resp, cb);
    }

    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     * @param {ReinstateEnvRequest} req
     * @param {function(string, ReinstateEnvResponse):void} cb
     * @public
     */
    ReinstateEnv(req, cb) {
        let resp = new ReinstateEnvResponse();
        this.request("ReinstateEnv", req, resp, cb);
    }

    /**
     * 获取终端用户总量与平台分布情况
     * @param {DescribeEndUserStatisticRequest} req
     * @param {function(string, DescribeEndUserStatisticResponse):void} cb
     * @public
     */
    DescribeEndUserStatistic(req, cb) {
        let resp = new DescribeEndUserStatisticResponse();
        this.request("DescribeEndUserStatistic", req, resp, cb);
    }

    /**
     * 管理终端用户
     * @param {ModifyEndUserRequest} req
     * @param {function(string, ModifyEndUserResponse):void} cb
     * @public
     */
    ModifyEndUser(req, cb) {
        let resp = new ModifyEndUserResponse();
        this.request("ModifyEndUser", req, resp, cb);
    }

    /**
     * 获取后付费免费额度
     * @param {DescribePostpayPackageFreeQuotasRequest} req
     * @param {function(string, DescribePostpayPackageFreeQuotasResponse):void} cb
     * @public
     */
    DescribePostpayPackageFreeQuotas(req, cb) {
        let resp = new DescribePostpayPackageFreeQuotasResponse();
        this.request("DescribePostpayPackageFreeQuotas", req, resp, cb);
    }

    /**
     * TCB云API统一入口
     * @param {CommonServiceAPIRequest} req
     * @param {function(string, CommonServiceAPIResponse):void} cb
     * @public
     */
    CommonServiceAPI(req, cb) {
        let resp = new CommonServiceAPIResponse();
        this.request("CommonServiceAPI", req, resp, cb);
    }

    /**
     * 检查是否开通Tcb服务
     * @param {CheckTcbServiceRequest} req
     * @param {function(string, CheckTcbServiceResponse):void} cb
     * @public
     */
    CheckTcbService(req, cb) {
        let resp = new CheckTcbServiceResponse();
        this.request("CheckTcbService", req, resp, cb);
    }

    /**
     * 删除终端用户
     * @param {DeleteEndUserRequest} req
     * @param {function(string, DeleteEndUserResponse):void} cb
     * @public
     */
    DeleteEndUser(req, cb) {
        let resp = new DeleteEndUserResponse();
        this.request("DeleteEndUser", req, resp, cb);
    }

    /**
     * 获取环境终端用户新增与登录信息
     * @param {DescribeEndUserLoginStatisticRequest} req
     * @param {function(string, DescribeEndUserLoginStatisticResponse):void} cb
     * @public
     */
    DescribeEndUserLoginStatistic(req, cb) {
        let resp = new DescribeEndUserLoginStatisticResponse();
        this.request("DescribeEndUserLoginStatistic", req, resp, cb);
    }

    /**
     * 查询指定指标的配额使用量
     * @param {DescribeQuotaDataRequest} req
     * @param {function(string, DescribeQuotaDataResponse):void} cb
     * @public
     */
    DescribeQuotaData(req, cb) {
        let resp = new DescribeQuotaDataResponse();
        this.request("DescribeQuotaData", req, resp, cb);
    }

    /**
     * 获取增值包计费相关信息
     * @param {DescribeExtraPkgBillingInfoRequest} req
     * @param {function(string, DescribeExtraPkgBillingInfoResponse):void} cb
     * @public
     */
    DescribeExtraPkgBillingInfo(req, cb) {
        let resp = new DescribeExtraPkgBillingInfoResponse();
        this.request("DescribeExtraPkgBillingInfo", req, resp, cb);
    }

    /**
     * 更新环境信息
     * @param {ModifyEnvRequest} req
     * @param {function(string, ModifyEnvResponse):void} cb
     * @public
     */
    ModifyEnv(req, cb) {
        let resp = new ModifyEnvResponse();
        this.request("ModifyEnv", req, resp, cb);
    }

    /**
     * 获取数据库权限
     * @param {DescribeDatabaseACLRequest} req
     * @param {function(string, DescribeDatabaseACLResponse):void} cb
     * @public
     */
    DescribeDatabaseACL(req, cb) {
        let resp = new DescribeDatabaseACLResponse();
        this.request("DescribeDatabaseACL", req, resp, cb);
    }

    /**
     * 销毁环境
     * @param {DestroyEnvRequest} req
     * @param {function(string, DestroyEnvResponse):void} cb
     * @public
     */
    DestroyEnv(req, cb) {
        let resp = new DestroyEnvResponse();
        this.request("DestroyEnv", req, resp, cb);
    }

    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @param {DescribeEnvsRequest} req
     * @param {function(string, DescribeEnvsResponse):void} cb
     * @public
     */
    DescribeEnvs(req, cb) {
        let resp = new DescribeEnvsResponse();
        this.request("DescribeEnvs", req, resp, cb);
    }

    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     * @param {DestroyStaticStoreRequest} req
     * @param {function(string, DestroyStaticStoreResponse):void} cb
     * @public
     */
    DestroyStaticStore(req, cb) {
        let resp = new DestroyStaticStoreResponse();
        this.request("DestroyStaticStore", req, resp, cb);
    }

    /**
     * 修改数据库权限
     * @param {ModifyDatabaseACLRequest} req
     * @param {function(string, ModifyDatabaseACLResponse):void} cb
     * @public
     */
    ModifyDatabaseACL(req, cb) {
        let resp = new ModifyDatabaseACLResponse();
        this.request("ModifyDatabaseACL", req, resp, cb);
    }

    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     * @param {CreateStaticStoreRequest} req
     * @param {function(string, CreateStaticStoreResponse):void} cb
     * @public
     */
    CreateStaticStore(req, cb) {
        let resp = new CreateStaticStoreResponse();
        this.request("CreateStaticStore", req, resp, cb);
    }

    /**
     * 查询环境个数上限
     * @param {DescribeEnvLimitRequest} req
     * @param {function(string, DescribeEnvLimitResponse):void} cb
     * @public
     */
    DescribeEnvLimit(req, cb) {
        let resp = new DescribeEnvLimitResponse();
        this.request("DescribeEnvLimit", req, resp, cb);
    }

    /**
     * 查询后付费免费配额信息
     * @param {DescribeEnvFreeQuotaRequest} req
     * @param {function(string, DescribeEnvFreeQuotaResponse):void} cb
     * @public
     */
    DescribeEnvFreeQuota(req, cb) {
        let resp = new DescribeEnvFreeQuotaResponse();
        this.request("DescribeEnvFreeQuota", req, resp, cb);
    }


}
module.exports = TcbClient;
