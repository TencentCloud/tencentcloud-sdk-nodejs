/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeEnvLimitResponse,
  ListTablesResponse,
  OrderInfo,
  CheckTcbServiceResponse,
  DescribeCloudBaseRunServerVersionRequest,
  DescribeCloudBaseRunServerVersionResponse,
  BindCloudBaseAccessDomainRequest,
  ModifyEnvPlanRequest,
  CloudBaseClientQPSPolicy,
  ModifyClsTopicResponse,
  CreateIndex,
  ClusterDetail,
  DbInstance,
  DescribeMySQLClusterDetailResponse,
  DeleteUsersResp,
  DescribeEnvLimitRequest,
  DescribeCloudBaseBuildServiceResponse,
  DescribeMySQLTaskStatusRequest,
  DropIndex,
  ModifyUserResponse,
  LogResObject,
  ModifyEnvResponse,
  BindCloudBaseAccessDomainResponse,
  LogServiceInfo,
  DescribeBaasPackageListRequest,
  ClsInfo,
  DescribeAuthDomainsResponse,
  ModifyCloudBaseGWAPIRequest,
  ModifyClsTopicRequest,
  CreateHostingDomainRequest,
  TkeClusterInfo,
  ModifyDatabaseACLRequest,
  DestroyStaticStoreRequest,
  MySQLNetDetail,
  MgoKeySchema,
  DescribeHostingDomainTaskRequest,
  DescribeUserListResp,
  BaasPackageInfo,
  DescribeQuotaDataResponse,
  CreateBillDealResponse,
  CreateMySQLResult,
  KVPair,
  FunctionInfo,
  CreateEnvResponse,
  RunCommandsResponse,
  RunSqlResponse,
  CreateUserResponse,
  DescribeEnvAccountCircleRequest,
  RenewEnvResponse,
  DescribeMySQLClusterDetailRequest,
  CreateStaticStoreRequest,
  DescribeBillingInfoResponse,
  CreateAuthDomainResponse,
  DescribeEnvsRequest,
  Tag,
  EditAuthConfigResponse,
  RenewEnvRequest,
  DestroyMySQLResponse,
  UpdateTableResponse,
  ModifyEnvPlanResponse,
  DescribeCreateMySQLResultRequest,
  DescribeBillingInfoRequest,
  HpaPolicy,
  LogObject,
  DestroyStaticStoreResponse,
  DeleteUsersResponse,
  DescribeUserListResponse,
  CreateTableRequest,
  CreateMySQLResponse,
  DeleteAuthDomainResponse,
  DeleteTableRequest,
  CreateCloudBaseGWAPIRequest,
  DestroyEnvRequest,
  DestroyEnvResponse,
  DeleteTableResponse,
  RunSqlRequest,
  DestroyMySQLRequest,
  EnvBillingInfoItem,
  DescribeEnvsResponse,
  CreateAuthDomainRequest,
  CreateHostingDomainResponse,
  MySQLTaskStatus,
  DescribeCreateMySQLResult,
  DeleteCloudBaseGWAPIRequest,
  CreateCloudBaseGWAPIResponse,
  DescribeCreateMySQLResultResponse,
  DescribeSafeRuleRequest,
  DeleteUsersRequest,
  DescribeBaasPackageListResponse,
  SearchClsLogResponse,
  MgoIndexKeys,
  DescribeStaticStoreRequest,
  ModifyCloudBaseGWAPIResponse,
  DescribeSafeRuleResponse,
  DescribeTablesResponse,
  DescribeEnvAccountCircleResponse,
  User,
  MgoCommandParam,
  ModifyDatabaseACLResponse,
  StaticStorageInfo,
  CreateTableResponse,
  DestroyMySQLResult,
  DescribeCloudBaseGWAPIResponse,
  DescribeCloudBaseGWAPIRequest,
  CreateMySQLRequest,
  DatabasesInfo,
  DescribeCloudBaseGWServiceResponse,
  ReinstateEnvRequest,
  DescribeDatabaseACLRequest,
  DescribeMySQLTaskStatusResponse,
  TableInfo,
  DeleteCloudBaseGWDomainRequest,
  DescribeTablesRequest,
  DescribeUserListRequest,
  DescribeStaticStoreResponse,
  ListTablesRequest,
  DescribeQuotaDataRequest,
  CreateStaticStoreResponse,
  EditAuthConfigRequest,
  Indexkey,
  StorageInfo,
  ModifyUserResp,
  ModifySafeRuleResponse,
  BindCloudBaseGWDomainResponse,
  DescribeTableRequest,
  EnvInfo,
  AuthDomain,
  CloudBaseGWAPIQPSPolicy,
  PermissionInfo,
  ModifySafeRuleRequest,
  DescribeHostingDomainTaskResponse,
  DeleteAuthDomainRequest,
  CreateBillDealRequest,
  CloudBaseOption,
  IndexInfo,
  DescribeCloudBaseGWServiceRequest,
  DescribeCloudBaseBuildServiceRequest,
  SearchClsLogRequest,
  MongoConnector,
  CheckTcbServiceRequest,
  Pager,
  DeleteCloudBaseGWAPIResponse,
  CreateEnvRequest,
  RunCommandsRequest,
  IndexAccesses,
  MySQLClusterDetail,
  DescribeAuthDomainsRequest,
  StaticStoreInfo,
  CreateUserRequest,
  DescribeTableResponse,
  UpdateTableRequest,
  DeleteCloudBaseGWDomainResponse,
  DescribeDatabaseACLResponse,
  ReinstateEnvResponse,
  CloudBaseGWService,
  ModifyEnvRequest,
  ModifyUserRequest,
  BindCloudBaseGWDomainRequest,
  CreateUserResp,
  CloudBaseGWAPI,
} from "./tcb_models"

/**
 * tcb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcb.tencentcloudapi.com", "2018-06-08", clientConfig)
  }

  /**
     * 本接口（DescribeCreateMySQLResult）用于查询开通Mysql结果。

`Response.Data.Status = "notexist"` 表示未开通，如果未开通，可以调用 [CreateMySQL](https://cloud.tencent.com/document/api/876/128186) 来开通
 `Response.Data. Status = "success"` 表示开通成功，Mysql开通成功后，可通过接口设置数据库账号相关功能包括但不限于【创建账号、删除账号、查询可授权权限列表、查询账号已有权限、修改主机、修改配置、修改账号库表权限】、集群操作相关【查询集群参数、修改集群参数】，连接设置相关【关闭外网、开通外网、查询集群信息】，备份回档相关【创建手动回档、删除手动回档、修改自动备份配置信息、查询备份文件列表、集群回档、查询任务列表、获取table列表、获取集群数据库列表、查询备份下载地址】，相关功能接口文档：[TDSQL-C MySQL API文档](https://cloud.tencent.com/document/product/1003/48106)，可以通过 [RunSql](https://cloud.tencent.com/document/api/876/127880) 接口来执行 sql 命令，比如创建表格、插入数据、删除表格等 MySql 命令。
     */
  async DescribeCreateMySQLResult(
    req: DescribeCreateMySQLResultRequest,
    cb?: (error: string, rep: DescribeCreateMySQLResultResponse) => void
  ): Promise<DescribeCreateMySQLResultResponse> {
    return this.request("DescribeCreateMySQLResult", req, cb)
  }

  /**
   * 修改日志主题
   */
  async ModifyClsTopic(
    req: ModifyClsTopicRequest,
    cb?: (error: string, rep: ModifyClsTopicResponse) => void
  ): Promise<ModifyClsTopicResponse> {
    return this.request("ModifyClsTopic", req, cb)
  }

  /**
   * 查询tcb用户列表
   */
  async DescribeUserList(
    req: DescribeUserListRequest,
    cb?: (error: string, rep: DescribeUserListResponse) => void
  ): Promise<DescribeUserListResponse> {
    return this.request("DescribeUserList", req, cb)
  }

  /**
   * 创建托管域名
   */
  async CreateHostingDomain(
    req: CreateHostingDomainRequest,
    cb?: (error: string, rep: CreateHostingDomainResponse) => void
  ): Promise<CreateHostingDomainResponse> {
    return this.request("CreateHostingDomain", req, cb)
  }

  /**
     * 本接口（CreateMySQL）用于开通Mysql型数据库。

开通后，可通过 [DescribeCreateMySQLResult ](https://cloud.tencent.com/document/api/876/128185) 查询开通结果，Mysql开通成功后，可通过接口设置数据库账号相关功能包括但不限于【创建账号、删除账号、查询可授权权限列表、查询账号已有权限、修改主机、修改配置、修改账号库表权限】、集群操作相关【查询集群参数、修改集群参数】，连接设置相关【关闭外网、开通外网、查询集群信息】，备份回档相关【创建手动回档、删除手动回档、修改自动备份配置信息、查询备份文件列表、集群回档、查询任务列表、获取table列表、获取集群数据库列表、查询备份下载地址】，相关功能接口文档：[TDSQL-C MySQL API文档](https://cloud.tencent.com/document/product/1003/48106)，可以通过 [RunSql](https://cloud.tencent.com/document/api/876/127880) 接口来执行 sql 命令，比如创建表格、插入数据、删除表格等 sql 命令。
     */
  async CreateMySQL(
    req: CreateMySQLRequest,
    cb?: (error: string, rep: CreateMySQLResponse) => void
  ): Promise<CreateMySQLResponse> {
    return this.request("CreateMySQL", req, cb)
  }

  /**
   * 本接口(CreateTable)用于创建文档型数据库表，支持创建capped类型集合，暂时不支持分片表。
   */
  async CreateTable(
    req: CreateTableRequest,
    cb?: (error: string, rep: CreateTableResponse) => void
  ): Promise<CreateTableResponse> {
    return this.request("CreateTable", req, cb)
  }

  /**
   * 修改云开发网关API
   */
  async ModifyCloudBaseGWAPI(
    req: ModifyCloudBaseGWAPIRequest,
    cb?: (error: string, rep: ModifyCloudBaseGWAPIResponse) => void
  ): Promise<ModifyCloudBaseGWAPIResponse> {
    return this.request("ModifyCloudBaseGWAPI", req, cb)
  }

  /**
     * 本接口用于购买云开发环境。
该接口会自动下单并支付，会在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
环境下单成功之后会返回EnvId。EnvId是全局唯一表示。
环境发货是异步行为，后续可以通过接口 [DescribeEnvs ](https://cloud.tencent.com/document/product/876/34820) 查询环境状态和各项资源信息；通过 [DescribeBillingInfo](https://cloud.tencent.com/document/product/876/94390) 查询环境套餐信息，包括 到期时间、当前套餐等。
     */
  async CreateEnv(
    req: CreateEnvRequest,
    cb?: (error: string, rep: CreateEnvResponse) => void
  ): Promise<CreateEnvResponse> {
    return this.request("CreateEnv", req, cb)
  }

  /**
   * 本接口（ModifyDatabaseACL）用于修改文档型数据库权限。
   */
  async ModifyDatabaseACL(
    req: ModifyDatabaseACLRequest,
    cb?: (error: string, rep: ModifyDatabaseACLResponse) => void
  ): Promise<ModifyDatabaseACLResponse> {
    return this.request("ModifyDatabaseACL", req, cb)
  }

  /**
   * 本接口（RunCommands）用于执行文档型数据库命令。
   */
  async RunCommands(
    req: RunCommandsRequest,
    cb?: (error: string, rep: RunCommandsResponse) => void
  ): Promise<RunCommandsResponse> {
    return this.request("RunCommands", req, cb)
  }

  /**
   * 获取新套餐列表，含详情，如果传了PackageId，则只获取指定套餐详情
   */
  async DescribeBaasPackageList(
    req: DescribeBaasPackageListRequest,
    cb?: (error: string, rep: DescribeBaasPackageListResponse) => void
  ): Promise<DescribeBaasPackageListResponse> {
    return this.request("DescribeBaasPackageList", req, cb)
  }

  /**
     * 增加安全域名。
云开发会校验网页应用请求的来源域名，您需要将来源域名加入到WEB安全域名列表中。
可以通过接口 [DescribeAuthDomains](https://cloud.tencent.com/document/product/876/42151) 获取当前已绑定生效的安全域名。

注意⚠️
  安全域名绑定成功之后，需要几分钟时间逐步生效。
     */
  async CreateAuthDomain(
    req: CreateAuthDomainRequest,
    cb?: (error: string, rep: CreateAuthDomainResponse) => void
  ): Promise<CreateAuthDomainResponse> {
    return this.request("CreateAuthDomain", req, cb)
  }

  /**
   * 获取网关API列表
   */
  async DescribeCloudBaseGWAPI(
    req: DescribeCloudBaseGWAPIRequest,
    cb?: (error: string, rep: DescribeCloudBaseGWAPIResponse) => void
  ): Promise<DescribeCloudBaseGWAPIResponse> {
    return this.request("DescribeCloudBaseGWAPI", req, cb)
  }

  /**
   * 查询服务版本的详情，CPU和MEM  请使用CPUSize和MemSize
   */
  async DescribeCloudBaseRunServerVersion(
    req: DescribeCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunServerVersionResponse) => void
  ): Promise<DescribeCloudBaseRunServerVersionResponse> {
    return this.request("DescribeCloudBaseRunServerVersion", req, cb)
  }

  /**
     * 本接口用于获取当前环境的安全域名列表。
云开发会校验网页应用请求的来源域名，您需要将来源域名加入到WEB安全域名列表中。
可以通过接口 [CreateAuthDomain](https://cloud.tencent.com/document/product/876/42764) 增加安全域名。
     */
  async DescribeAuthDomains(
    req: DescribeAuthDomainsRequest,
    cb?: (error: string, rep: DescribeAuthDomainsResponse) => void
  ): Promise<DescribeAuthDomainsResponse> {
    return this.request("DescribeAuthDomains", req, cb)
  }

  /**
   * 绑定云开发自定义域名，用于云接入和静态托管
   */
  async BindCloudBaseAccessDomain(
    req: BindCloudBaseAccessDomainRequest,
    cb?: (error: string, rep: BindCloudBaseAccessDomainResponse) => void
  ): Promise<BindCloudBaseAccessDomainResponse> {
    return this.request("BindCloudBaseAccessDomain", req, cb)
  }

  /**
     * 设置数据库安全规则。
安全规则，用于控制C端用户的访问权限。详见 [安全规则介绍 ](https://cloud.tencent.com/document/product/876/123478)。
     */
  async ModifySafeRule(
    req: ModifySafeRuleRequest,
    cb?: (error: string, rep: ModifySafeRuleResponse) => void
  ): Promise<ModifySafeRuleResponse> {
    return this.request("ModifySafeRule", req, cb)
  }

  /**
     * 删除合法域名。
云开发会校验网页应用请求的来源域名，您需要将来源域名加入到WEB安全域名列表中。
可以通过接口 [DescribeAuthDomains](https://cloud.tencent.com/document/product/876/42151) 获取当前已绑定生效的安全域名。

注意⚠️
安全域名被删除之后，可能会引起跨域问题，请谨慎操作。
     */
  async DeleteAuthDomain(
    req: DeleteAuthDomainRequest,
    cb?: (error: string, rep: DeleteAuthDomainResponse) => void
  ): Promise<DeleteAuthDomainResponse> {
    return this.request("DeleteAuthDomain", req, cb)
  }

  /**
     * 本接口（DescribeMySQLClusterDetail）查询Mysql集群信息。

调用该接口前需要先查询Mysql是否开通，可通过 [DescribeCreateMySQLResult ](https://cloud.tencent.com/document/api/876/128185) 查询，只有已开通的才能查到集群信息，Mysql开通成功后，可通过接口设置数据库账号相关功能包括但不限于【创建账号、删除账号、查询可授权权限列表、查询账号已有权限、修改主机、修改配置、修改账号库表权限】、集群操作相关【查询集群参数、修改集群参数】，连接设置相关【关闭外网、开通外网、查询集群信息】，备份回档相关【创建手动回档、删除手动回档、修改自动备份配置信息、查询备份文件列表、集群回档、查询任务列表、获取table列表、获取集群数据库列表、查询备份下载地址】，相关功能接口文档：[TDSQL-C MySQL API文档](https://cloud.tencent.com/document/product/1003/48106)，可以通过 [RunSql](https://cloud.tencent.com/document/api/876/127880) 接口来执行 MySql 命令，比如创建表格、插入数据、删除表格等 MySql 命令。
     */
  async DescribeMySQLClusterDetail(
    req: DescribeMySQLClusterDetailRequest,
    cb?: (error: string, rep: DescribeMySQLClusterDetailResponse) => void
  ): Promise<DescribeMySQLClusterDetailResponse> {
    return this.request("DescribeMySQLClusterDetail", req, cb)
  }

  /**
   * 获取计费相关信息
   */
  async DescribeBillingInfo(
    req: DescribeBillingInfoRequest,
    cb?: (error: string, rep: DescribeBillingInfoResponse) => void
  ): Promise<DescribeBillingInfoResponse> {
    return this.request("DescribeBillingInfo", req, cb)
  }

  /**
     * 本接口用于云开发环境套餐续费。
该接口会自动下单并支付，会在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
     */
  async RenewEnv(
    req: RenewEnvRequest,
    cb?: (error: string, rep: RenewEnvResponse) => void
  ): Promise<RenewEnvResponse> {
    return this.request("RenewEnv", req, cb)
  }

  /**
   * 查询静态托管域名任务状态
   */
  async DescribeHostingDomainTask(
    req: DescribeHostingDomainTaskRequest,
    cb?: (error: string, rep: DescribeHostingDomainTaskResponse) => void
  ): Promise<DescribeHostingDomainTaskResponse> {
    return this.request("DescribeHostingDomainTask", req, cb)
  }

  /**
   * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
   */
  async ReinstateEnv(
    req: ReinstateEnvRequest,
    cb?: (error: string, rep: ReinstateEnvResponse) => void
  ): Promise<ReinstateEnvResponse> {
    return this.request("ReinstateEnv", req, cb)
  }

  /**
   * 本接口（DescribeDatabaseACL）获取文档型数据库权限。
   */
  async DescribeDatabaseACL(
    req: DescribeDatabaseACLRequest,
    cb?: (error: string, rep: DescribeDatabaseACLResponse) => void
  ): Promise<DescribeDatabaseACLResponse> {
    return this.request("DescribeDatabaseACL", req, cb)
  }

  /**
   * 删除tcb用户
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
  }

  /**
   * 查看当前环境下静态托管资源信息，根据返回结果判断静态资源的状态
   */
  async DescribeStaticStore(
    req: DescribeStaticStoreRequest,
    cb?: (error: string, rep: DescribeStaticStoreResponse) => void
  ): Promise<DescribeStaticStoreResponse> {
    return this.request("DescribeStaticStore", req, cb)
  }

  /**
     * 本接口（DescribeTable）用于查询文档型数据库表的相关信息，包括索引等信息。

接口入参中的 Tag 为文档型数据库的实例 Id，可以通过 [DescribeEnvs](https://cloud.tencent.com/document/api/876/34820) 接口返回的 EnvList[0].Databases[0].InstanceId 获取。
     */
  async DescribeTable(
    req: DescribeTableRequest,
    cb?: (error: string, rep: DescribeTableResponse) => void
  ): Promise<DescribeTableResponse> {
    return this.request("DescribeTable", req, cb)
  }

  /**
   * 本接口(UpdateTable)用于修改文档型数据库表信息，当前可以支持创建和删除索引。
   */
  async UpdateTable(
    req: UpdateTableRequest,
    cb?: (error: string, rep: UpdateTableResponse) => void
  ): Promise<UpdateTableResponse> {
    return this.request("UpdateTable", req, cb)
  }

  /**
   * 删除网关API
   */
  async DeleteCloudBaseGWAPI(
    req: DeleteCloudBaseGWAPIRequest,
    cb?: (error: string, rep: DeleteCloudBaseGWAPIResponse) => void
  ): Promise<DeleteCloudBaseGWAPIResponse> {
    return this.request("DeleteCloudBaseGWAPI", req, cb)
  }

  /**
   * 检查是否开通Tcb服务
   */
  async CheckTcbService(
    req?: CheckTcbServiceRequest,
    cb?: (error: string, rep: CheckTcbServiceResponse) => void
  ): Promise<CheckTcbServiceResponse> {
    return this.request("CheckTcbService", req, cb)
  }

  /**
     * 本接口(ListTables)用于查询文档型数据库所有表信息，包括表名、表中数据条数、表中数据量、索引个数及索引的大小等。

该接口跟 [DescribeTables](https://cloud.tencent.com/document/api/876/127962) 接口功能一致，后续该接口可能会下线，请使用 [DescribeTable](https://cloud.tencent.com/document/api/876/127962)接口。
     */
  async ListTables(
    req: ListTablesRequest,
    cb?: (error: string, rep: ListTablesResponse) => void
  ): Promise<ListTablesResponse> {
    return this.request("ListTables", req, cb)
  }

  /**
     * 查询数据库安全规则。
安全规则，用于控制C端用户的访问权限。详见 [安全规则介绍](https://cloud.tencent.com/document/product/876/123478) 。
     */
  async DescribeSafeRule(
    req: DescribeSafeRuleRequest,
    cb?: (error: string, rep: DescribeSafeRuleResponse) => void
  ): Promise<DescribeSafeRuleResponse> {
    return this.request("DescribeSafeRule", req, cb)
  }

  /**
     * 本接口用于变更云开发环境套餐。
该接口会自动下单并支付，会在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
     */
  async ModifyEnvPlan(
    req: ModifyEnvPlanRequest,
    cb?: (error: string, rep: ModifyEnvPlanResponse) => void
  ): Promise<ModifyEnvPlanResponse> {
    return this.request("ModifyEnvPlan", req, cb)
  }

  /**
   * 本接口（DescribeMySQLTaskStatus）用于查询Mysql任务状态。
   */
  async DescribeMySQLTaskStatus(
    req: DescribeMySQLTaskStatusRequest,
    cb?: (error: string, rep: DescribeMySQLTaskStatusResponse) => void
  ): Promise<DescribeMySQLTaskStatusResponse> {
    return this.request("DescribeMySQLTaskStatus", req, cb)
  }

  /**
   * 搜索用户调用日志
   */
  async SearchClsLog(
    req: SearchClsLogRequest,
    cb?: (error: string, rep: SearchClsLogResponse) => void
  ): Promise<SearchClsLogResponse> {
    return this.request("SearchClsLog", req, cb)
  }

  /**
   * 查询指定指标的配额使用量
   */
  async DescribeQuotaData(
    req: DescribeQuotaDataRequest,
    cb?: (error: string, rep: DescribeQuotaDataResponse) => void
  ): Promise<DescribeQuotaDataResponse> {
    return this.request("DescribeQuotaData", req, cb)
  }

  /**
   * 修改登录配置
   */
  async EditAuthConfig(
    req: EditAuthConfigRequest,
    cb?: (error: string, rep: EditAuthConfigResponse) => void
  ): Promise<EditAuthConfigResponse> {
    return this.request("EditAuthConfig", req, cb)
  }

  /**
   * 修改tcb用户
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 更新环境信息
   */
  async ModifyEnv(
    req: ModifyEnvRequest,
    cb?: (error: string, rep: ModifyEnvResponse) => void
  ): Promise<ModifyEnvResponse> {
    return this.request("ModifyEnv", req, cb)
  }

  /**
     * 本接口（RunSql）用于执行MySQL语句。

该接口用来执行 MySql 语句，比如创建表格、插入数据、修改数据、删除字段、添加索引等可以通过sql 语句实现的都可以使用该接口。

调用该接口前需要先查询Mysql是否开通，可通过 [DescribeCreateMySQLResult ](https://cloud.tencent.com/document/api/876/128185) 查询，只有开通成功才能操作。
     */
  async RunSql(
    req: RunSqlRequest,
    cb?: (error: string, rep: RunSqlResponse) => void
  ): Promise<RunSqlResponse> {
    return this.request("RunSql", req, cb)
  }

  /**
     * 本接口(DeleteTable)用于删除文档型数据库表，删除表后表中数据将会被删除且无法恢复，请谨慎操作。

接口入参中的 Tag 为文档型数据库的实例 Id，可以通过 [DescribeEnvs](https://cloud.tencent.com/document/api/876/34820) 接口返回的 EnvList[0].Databases[0].InstanceId 获取。
     */
  async DeleteTable(
    req: DeleteTableRequest,
    cb?: (error: string, rep: DeleteTableResponse) => void
  ): Promise<DeleteTableResponse> {
    return this.request("DeleteTable", req, cb)
  }

  /**
     * 本接口用于销毁云开发环境。
云开发环境遵循腾讯云包年包月预付费产品生命周期，因此环境销毁需要分两步：
1. 资源退费。此时会根据当前环境剩余有效期，自动退还相关费用(代金券不退)。退款后，环境进入隔离期。
2. 环境删除。环境在进入隔离期后15天会自动删除。也可以通过本接口，指定 IsForce=true 来强制删除隔离期环境。

**注意**⚠️
  1. 环境退费后进入隔离期，则所有资源均无法访问，控制台无法操作和管理。
  2. 环境被彻底删除后，所有数据均无法找回。请谨慎操作。

可以通过接口 [tcb:DescribeBillingInfo](https://cloud.tencent.com/document/product/876/94390) 查询环境计费状态。
     */
  async DestroyEnv(
    req: DestroyEnvRequest,
    cb?: (error: string, rep: DestroyEnvResponse) => void
  ): Promise<DestroyEnvResponse> {
    return this.request("DestroyEnv", req, cb)
  }

  /**
   * 获取网关服务
   */
  async DescribeCloudBaseGWService(
    req: DescribeCloudBaseGWServiceRequest,
    cb?: (error: string, rep: DescribeCloudBaseGWServiceResponse) => void
  ): Promise<DescribeCloudBaseGWServiceResponse> {
    return this.request("DescribeCloudBaseGWService", req, cb)
  }

  /**
   * 获取云托管代码上传url
   */
  async DescribeCloudBaseBuildService(
    req: DescribeCloudBaseBuildServiceRequest,
    cb?: (error: string, rep: DescribeCloudBaseBuildServiceResponse) => void
  ): Promise<DescribeCloudBaseBuildServiceResponse> {
    return this.request("DescribeCloudBaseBuildService", req, cb)
  }

  /**
   * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
   */
  async DescribeEnvs(
    req: DescribeEnvsRequest,
    cb?: (error: string, rep: DescribeEnvsResponse) => void
  ): Promise<DescribeEnvsResponse> {
    return this.request("DescribeEnvs", req, cb)
  }

  /**
     * 本接口（DestroyMySQL）用于销毁Mysql。

销毁后可以通过 [DescribeMySQLTaskStatus](https://cloud.tencent.com/document/api/876/128183) 接口查询销毁结果，如果 `Response.Data. Status = FAILED ` 表示销毁失败，可以重新调用销毁接口重试。
     */
  async DestroyMySQL(
    req: DestroyMySQLRequest,
    cb?: (error: string, rep: DestroyMySQLResponse) => void
  ): Promise<DestroyMySQLResponse> {
    return this.request("DestroyMySQL", req, cb)
  }

  /**
     * 创建云开发产品计费订单，用于以下几种场景：
1. 购买云开发环境
2. 续费云开发环境
3. 变更云开发环境套餐
4. 购买云开发资源包
5. 购买云开发大促包

该接口支持下单并支付(CreateAndPay=true时)，此时会自动在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
     */
  async CreateBillDeal(
    req: CreateBillDealRequest,
    cb?: (error: string, rep: CreateBillDealResponse) => void
  ): Promise<CreateBillDealResponse> {
    return this.request("CreateBillDeal", req, cb)
  }

  /**
   * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
   */
  async DestroyStaticStore(
    req: DestroyStaticStoreRequest,
    cb?: (error: string, rep: DestroyStaticStoreResponse) => void
  ): Promise<DestroyStaticStoreResponse> {
    return this.request("DestroyStaticStore", req, cb)
  }

  /**
   * 创建云开发网关API
   */
  async CreateCloudBaseGWAPI(
    req: CreateCloudBaseGWAPIRequest,
    cb?: (error: string, rep: CreateCloudBaseGWAPIResponse) => void
  ): Promise<CreateCloudBaseGWAPIResponse> {
    return this.request("CreateCloudBaseGWAPI", req, cb)
  }

  /**
   * 绑定自定义域名
   */
  async BindCloudBaseGWDomain(
    req: BindCloudBaseGWDomainRequest,
    cb?: (error: string, rep: BindCloudBaseGWDomainResponse) => void
  ): Promise<BindCloudBaseGWDomainResponse> {
    return this.request("BindCloudBaseGWDomain", req, cb)
  }

  /**
   * 创建tcb用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
   */
  async CreateStaticStore(
    req: CreateStaticStoreRequest,
    cb?: (error: string, rep: CreateStaticStoreResponse) => void
  ): Promise<CreateStaticStoreResponse> {
    return this.request("CreateStaticStore", req, cb)
  }

  /**
   * 查询环境个数上限
   */
  async DescribeEnvLimit(
    req?: DescribeEnvLimitRequest,
    cb?: (error: string, rep: DescribeEnvLimitResponse) => void
  ): Promise<DescribeEnvLimitResponse> {
    return this.request("DescribeEnvLimit", req, cb)
  }

  /**
   * 删除网关域名
   */
  async DeleteCloudBaseGWDomain(
    req: DeleteCloudBaseGWDomainRequest,
    cb?: (error: string, rep: DeleteCloudBaseGWDomainResponse) => void
  ): Promise<DeleteCloudBaseGWDomainResponse> {
    return this.request("DeleteCloudBaseGWDomain", req, cb)
  }

  /**
     * 查询环境计费周期。
云开发环境的资源点都是按月结算的，每个月都有一定的抵扣额度。

例如：
  某个环境在 2026-01-05 购买了3个月个人版(到期时间: 2026-04-05)，则他可以在以下3个周期内，分别享有40000资源点的额度：
  1. 2026-01-05 ~ 2026-02-05 23:59:59
  2. 2026-02-06 ~ 2026-03-05 23:59:59
  3. 2026-03-06 ~ 2026-04-05 23:59:59

本接口，用于获取环境当前属于哪个计费周期内。
     */
  async DescribeEnvAccountCircle(
    req: DescribeEnvAccountCircleRequest,
    cb?: (error: string, rep: DescribeEnvAccountCircleResponse) => void
  ): Promise<DescribeEnvAccountCircleResponse> {
    return this.request("DescribeEnvAccountCircle", req, cb)
  }

  /**
   * 本接口(DescribeTables)用于查询文档型数据库所有表信息，包括表名、表中数据条数、表中数据量、索引个数及索引的大小等。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }
}
