"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tcb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcb.tencentcloudapi.com", "2018-06-08", clientConfig);
    }
    /**
     * 查询微信云托管子网
     */
    async DescribeWxCloudBaseRunSubNets(req, cb) {
        return this.request("DescribeWxCloudBaseRunSubNets", req, cb);
    }
    /**
     * 查询环境1分钱抵扣信息
     */
    async DescribeSpecialCostItems(req, cb) {
        return this.request("DescribeSpecialCostItems", req, cb);
    }
    /**
     * 查询环境下所有的vpc列表
     */
    async DescribeCloudBaseRunAllVpcs(req, cb) {
        return this.request("DescribeCloudBaseRunAllVpcs", req, cb);
    }
    /**
     * 创建或修改安全网关路由
     */
    async EstablishWxGatewayRoute(req, cb) {
        return this.request("EstablishWxGatewayRoute", req, cb);
    }
    /**
     * 本接口（DestroyStandaloneGateway）用于销毁小租户网关。
     */
    async DestroyStandaloneGateway(req, cb) {
        return this.request("DestroyStandaloneGateway", req, cb);
    }
    /**
     * 创建托管域名
     */
    async CreateHostingDomain(req, cb) {
        return this.request("CreateHostingDomain", req, cb);
    }
    /**
     * 删除安全网关路由
     */
    async DeleteWxGatewayRoute(req, cb) {
        return this.request("DeleteWxGatewayRoute", req, cb);
    }
    /**
     * 绑定另外一个环境下的网关，callContainer请求可以访问到该网关
     */
    async BindEnvGateway(req, cb) {
        return this.request("BindEnvGateway", req, cb);
    }
    /**
     * 查询微信云托管环境信息
     */
    async DescribeWxCloudBaseRunEnvs(req, cb) {
        return this.request("DescribeWxCloudBaseRunEnvs", req, cb);
    }
    /**
     * 查询后付费短信资源量
1 有免费包的返回SmsFreeQuota结构所有字段
2 没有免费包，有付费包，付费返回复用SmsFreeQuota结构，其中只有 TodayUsedQuota 字段有效
3 都没有返回为空数组
     */
    async DescribeSmsQuotas(req, cb) {
        return this.request("DescribeSmsQuotas", req, cb);
    }
    /**
     * 修改服务版本的副本数，环境变量
     */
    async ModifyCloudBaseRunServerVersion(req, cb) {
        return this.request("ModifyCloudBaseRunServerVersion", req, cb);
    }
    /**
     * 针对特定的版本，进行滚动更新
     */
    async RollUpdateCloudBaseRunServerVersion(req, cb) {
        return this.request("RollUpdateCloudBaseRunServerVersion", req, cb);
    }
    /**
     * 开通微信云托管MySQL数据库服务
     */
    async CreateWxCloudBaseRunServerDBCluster(req, cb) {
        return this.request("CreateWxCloudBaseRunServerDBCluster", req, cb);
    }
    /**
     * 查询环境后付费计费详情
     */
    async DescribeEnvPostpaidDeduct(req, cb) {
        return this.request("DescribeEnvPostpaidDeduct", req, cb);
    }
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     */
    async DescribeEnvs(req, cb) {
        return this.request("DescribeEnvs", req, cb);
    }
    /**
     * 查询微信云托管服务域名
     */
    async DescribeCloudBaseRunServerDomainName(req, cb) {
        return this.request("DescribeCloudBaseRunServerDomainName", req, cb);
    }
    /**
     * 查看容器托管的集群状态
     */
    async DescribeCloudBaseRunResource(req, cb) {
        return this.request("DescribeCloudBaseRunResource", req, cb);
    }
    /**
     * 增加安全域名
     */
    async CreateAuthDomain(req, cb) {
        return this.request("CreateAuthDomain", req, cb);
    }
    /**
     * 获取后付费免费额度
     */
    async DescribePostpayPackageFreeQuotas(req, cb) {
        return this.request("DescribePostpayPackageFreeQuotas", req, cb);
    }
    /**
     * 创建服务版本
     */
    async CreateCloudBaseRunServerVersion(req, cb) {
        return this.request("CreateCloudBaseRunServerVersion", req, cb);
    }
    /**
     * 本接口（CreateStandaloneGateway）用于创建独立网关。
     */
    async CreateStandaloneGateway(req, cb) {
        return this.request("CreateStandaloneGateway", req, cb);
    }
    /**
     * 获取安全域名列表
     */
    async DescribeAuthDomains(req, cb) {
        return this.request("DescribeAuthDomains", req, cb);
    }
    /**
     * 本接口（TurnOnStandaloneGateway）用于开启小租户网关。
     */
    async TurnOnStandaloneGateway(req, cb) {
        return this.request("TurnOnStandaloneGateway", req, cb);
    }
    /**
     * 本接口（DescribeStandaloneGatewayPackage）用于查询小租户网关套餐信息。
     */
    async DescribeStandaloneGatewayPackage(req, cb) {
        return this.request("DescribeStandaloneGatewayPackage", req, cb);
    }
    /**
     * 批量解冻服务
     */
    async UnfreezeCloudBaseRunServers(req, cb) {
        return this.request("UnfreezeCloudBaseRunServers", req, cb);
    }
    /**
     * 开通后付费资源
     */
    async CreatePostpayPackage(req, cb) {
        return this.request("CreatePostpayPackage", req, cb);
    }
    /**
     * 更新活动详情
     */
    async ReplaceActivityRecord(req, cb) {
        return this.request("ReplaceActivityRecord", req, cb);
    }
    /**
     * 查询用户活动信息
     */
    async DescribeUserActivityInfo(req, cb) {
        return this.request("DescribeUserActivityInfo", req, cb);
    }
    /**
     * 创建微信云托管
     */
    async CreateWxCloudBaseRunEnv(req, cb) {
        return this.request("CreateWxCloudBaseRunEnv", req, cb);
    }
    /**
     * 本接口（TurnOffStandaloneGateway）用于关闭小租户网关。
     */
    async TurnOffStandaloneGateway(req, cb) {
        return this.request("TurnOffStandaloneGateway", req, cb);
    }
    /**
     * 云项目部署列表
     */
    async DescribeCloudBaseProjectVersionList(req, cb) {
        return this.request("DescribeCloudBaseProjectVersionList", req, cb);
    }
    /**
     * 获取云开发项目列表
     */
    async DescribeCloudBaseProjectLatestVersionList(req, cb) {
        return this.request("DescribeCloudBaseProjectLatestVersionList", req, cb);
    }
    /**
     * 独立网关中拉取云托管服务对应的配置信息
     */
    async DescribeCloudBaseRunConfForGateWay(req, cb) {
        return this.request("DescribeCloudBaseRunConfForGateWay", req, cb);
    }
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     */
    async ReinstateEnv(req, cb) {
        return this.request("ReinstateEnv", req, cb);
    }
    /**
     * 获取数据库权限
     */
    async DescribeDatabaseACL(req, cb) {
        return this.request("DescribeDatabaseACL", req, cb);
    }
    /**
     * 本接口（DescribeStandaloneGateway）查询小租户网关套餐信息。
     */
    async DescribeStandaloneGateway(req, cb) {
        return this.request("DescribeStandaloneGateway", req, cb);
    }
    /**
     * 修改容器内的版本流量配置
     */
    async ModifyCloudBaseRunServerFlowConf(req, cb) {
        return this.request("ModifyCloudBaseRunServerFlowConf", req, cb);
    }
    /**
     * 搜索CLS日志，TCB角色秘钥访问
     */
    async SearchClsLog(req, cb) {
        return this.request("SearchClsLog", req, cb);
    }
    /**
     * 查看容器托管的集群状态扩展使用
     */
    async DescribeCloudBaseRunResourceForExtend(req, cb) {
        return this.request("DescribeCloudBaseRunResourceForExtend", req, cb);
    }
    /**
     * 管理终端用户
     */
    async ModifyEndUser(req, cb) {
        return this.request("ModifyEndUser", req, cb);
    }
    /**
     * 销毁环境
     */
    async DestroyEnv(req, cb) {
        return this.request("DestroyEnv", req, cb);
    }
    /**
     * 获取环境下单地域
     */
    async DescribeEnvDealRegion(req, cb) {
        return this.request("DescribeEnvDealRegion", req, cb);
    }
    /**
     * 获取增值包计费相关信息
     */
    async DescribeExtraPkgBillingInfo(req, cb) {
        return this.request("DescribeExtraPkgBillingInfo", req, cb);
    }
    /**
     * 描述扩展上传文件信息
     */
    async DescribeExtensionUploadInfo(req, cb) {
        return this.request("DescribeExtensionUploadInfo", req, cb);
    }
    /**
     * 创建云应用服务
     */
    async EstablishCloudBaseRunServer(req, cb) {
        return this.request("EstablishCloudBaseRunServer", req, cb);
    }
    /**
     * TCB云API统一入口
     */
    async CommonServiceAPI(req, cb) {
        return this.request("CommonServiceAPI", req, cb);
    }
    /**
     * 创建云开发项目
     */
    async CreateAndDeployCloudBaseProject(req, cb) {
        return this.request("CreateAndDeployCloudBaseProject", req, cb);
    }
    /**
     * 检查是否开通Tcb服务
     */
    async CheckTcbService(req, cb) {
        return this.request("CheckTcbService", req, cb);
    }
    /**
     * 删除终端用户
     */
    async DeleteEndUser(req, cb) {
        return this.request("DeleteEndUser", req, cb);
    }
    /**
     * 获取环境终端用户新增与登录信息
     */
    async DescribeEndUserLoginStatistic(req, cb) {
        return this.request("DescribeEndUserLoginStatistic", req, cb);
    }
    /**
     * 查询环境个数上限
     */
    async DescribeEnvLimit(req, cb) {
        return this.request("DescribeEnvLimit", req, cb);
    }
    /**
     * 查询静态托管域名任务状态
     */
    async DescribeHostingDomainTask(req, cb) {
        return this.request("DescribeHostingDomainTask", req, cb);
    }
    /**
     * 查询活动记录信息
     */
    async DescribeActivityRecord(req, cb) {
        return this.request("DescribeActivityRecord", req, cb);
    }
    /**
     * 删除服务版本
     */
    async DeleteCloudBaseRunServerVersion(req, cb) {
        return this.request("DeleteCloudBaseRunServerVersion", req, cb);
    }
    /**
     * 查询指定指标的配额使用量
     */
    async DescribeQuotaData(req, cb) {
        return this.request("DescribeQuotaData", req, cb);
    }
    /**
     * 开通容器托管的资源，包括集群创建，VPC配置，异步任务创建，镜像托管，Coding等，查看创建结果需要根据DescribeCloudBaseRunResource接口来查看
     */
    async CreateCloudBaseRunResource(req, cb) {
        return this.request("CreateCloudBaseRunResource", req, cb);
    }
    /**
     * 删除云项目
     */
    async DeleteCloudBaseProjectLatestVersion(req, cb) {
        return this.request("DeleteCloudBaseProjectLatestVersion", req, cb);
    }
    /**
     * 获取下载文件信息
     */
    async DescribeDownloadFile(req, cb) {
        return this.request("DescribeDownloadFile", req, cb);
    }
    /**
     * 查询服务、版本和操作类型
     */
    async DescribeCloudBaseRunOperationTypes(req, cb) {
        return this.request("DescribeCloudBaseRunOperationTypes", req, cb);
    }
    /**
     * 查询单个服务的详情，版本以及详情
     */
    async DescribeCloudBaseRunServer(req, cb) {
        return this.request("DescribeCloudBaseRunServer", req, cb);
    }
    /**
     * 更新环境信息
     */
    async ModifyEnv(req, cb) {
        return this.request("ModifyEnv", req, cb);
    }
    /**
     * 获取终端用户总量与平台分布情况
     */
    async DescribeEndUserStatistic(req, cb) {
        return this.request("DescribeEndUserStatistic", req, cb);
    }
    /**
     * 查询服务版本的详情，CPU和MEM  请使用CPUSize和MemSize
     */
    async DescribeCloudBaseRunServerVersion(req, cb) {
        return this.request("DescribeCloudBaseRunServerVersion", req, cb);
    }
    /**
     * 批量冻结
     */
    async FreezeCloudBaseRunServers(req, cb) {
        return this.request("FreezeCloudBaseRunServers", req, cb);
    }
    /**
     * 查询活动信息
     */
    async DescribeActivityInfo(req, cb) {
        return this.request("DescribeActivityInfo", req, cb);
    }
    /**
     * 获取云托管代码上传url
     */
    async DescribeCloudBaseBuildService(req, cb) {
        return this.request("DescribeCloudBaseBuildService", req, cb);
    }
    /**
     * 查询一键部署任务 （特定接口：外部查询使用）
     */
    async DescribeCloudBaseRunOneClickTaskExternal(req, cb) {
        return this.request("DescribeCloudBaseRunOneClickTaskExternal", req, cb);
    }
    /**
     * 查询版本历史
     */
    async DescribeCloudBaseRunVersionSnapshot(req, cb) {
        return this.request("DescribeCloudBaseRunVersionSnapshot", req, cb);
    }
    /**
     * 获取终端用户列表
     */
    async DescribeEndUsers(req, cb) {
        return this.request("DescribeEndUsers", req, cb);
    }
    /**
     * 查询服务版本详情(新)
     */
    async DescribeCloudBaseRunVersion(req, cb) {
        return this.request("DescribeCloudBaseRunVersion", req, cb);
    }
    /**
     * 根据用户传入的指标, 拉取一段时间内的监控数据。
     */
    async DescribeCurveData(req, cb) {
        return this.request("DescribeCurveData", req, cb);
    }
    /**
     * 修改数据库权限
     */
    async ModifyDatabaseACL(req, cb) {
        return this.request("ModifyDatabaseACL", req, cb);
    }
    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     */
    async CreateStaticStore(req, cb) {
        return this.request("CreateStaticStore", req, cb);
    }
    /**
     * DescribeCloudBaseRunVersionRsByCondition 获取云托管详情
     */
    async DescribeCloudBaseRunVersionRsByCondition(req, cb) {
        return this.request("DescribeCloudBaseRunVersionRsByCondition", req, cb);
    }
    /**
     * 查询云应用服务版本容器列表
     */
    async DescribeCloudBaseRunPodList(req, cb) {
        return this.request("DescribeCloudBaseRunPodList", req, cb);
    }
    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     */
    async DestroyStaticStore(req, cb) {
        return this.request("DestroyStaticStore", req, cb);
    }
    /**
     * 查询后付费资源免费量
     */
    async DescribePostpayFreeQuotas(req, cb) {
        return this.request("DescribePostpayFreeQuotas", req, cb);
    }
    /**
     * 查询后付费免费配额信息
     */
    async DescribeEnvFreeQuota(req, cb) {
        return this.request("DescribeEnvFreeQuota", req, cb);
    }
}
exports.Client = Client;
