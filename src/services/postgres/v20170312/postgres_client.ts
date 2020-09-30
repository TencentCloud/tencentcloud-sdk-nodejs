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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CreateDBInstancesRequest,
  CloseServerlessDBExtranetAccessResponse,
  DestroyDBInstanceRequest,
  CreateServerlessDBInstanceRequest,
  InquiryPriceRenewDBInstanceRequest,
  SetAutoRenewFlagRequest,
  DescribeOrdersResponse,
  DeleteServerlessDBInstanceRequest,
  DescribeDBXlogsRequest,
  InquiryPriceCreateDBInstancesResponse,
  AccountInfo,
  InquiryPriceUpgradeDBInstanceRequest,
  DescribeAccountsRequest,
  DescribeDBErrlogsResponse,
  InquiryPriceCreateDBInstancesRequest,
  ModifyDBInstanceNameRequest,
  SpecItemInfo,
  DescribeProductConfigRequest,
  CreateDBInstancesResponse,
  RestartDBInstanceRequest,
  DescribeDBInstancesRequest,
  ErrLogDetail,
  ServerlessDBInstance,
  DescribeServerlessDBInstancesResponse,
  ModifyDBInstancesProjectResponse,
  RenewInstanceResponse,
  DescribeZonesRequest,
  UpgradeDBInstanceRequest,
  OpenServerlessDBExtranetAccessRequest,
  RegionInfo,
  DeleteServerlessDBInstanceResponse,
  SlowlogDetail,
  InitDBInstancesRequest,
  RestartDBInstanceResponse,
  SetAutoRenewFlagResponse,
  DescribeDBInstancesResponse,
  SpecInfo,
  DBInstance,
  DescribeProductConfigResponse,
  ResetAccountPasswordResponse,
  ResetAccountPasswordRequest,
  DescribeOrdersRequest,
  InquiryPriceUpgradeDBInstanceResponse,
  InitDBInstancesResponse,
  DescribeDBBackupsRequest,
  ServerlessDBAccount,
  OpenDBExtranetAccessResponse,
  Filter,
  RenewInstanceRequest,
  Tag,
  PgDeal,
  DescribeRegionsResponse,
  DescribeDatabasesRequest,
  DescribeAccountsResponse,
  InquiryPriceRenewDBInstanceResponse,
  DescribeDBErrlogsRequest,
  ZoneInfo,
  DBBackup,
  DBInstanceNetInfo,
  ModifyDBInstancesProjectRequest,
  ServerlessDBInstanceNetInfo,
  UpgradeDBInstanceResponse,
  ModifyDBInstanceNameResponse,
  OpenServerlessDBExtranetAccessResponse,
  CloseDBExtranetAccessResponse,
  DestroyDBInstanceResponse,
  DescribeDBInstanceAttributeResponse,
  DescribeDBSlowlogsRequest,
  DescribeServerlessDBInstancesRequest,
  OpenDBExtranetAccessRequest,
  DescribeDBBackupsResponse,
  DescribeRegionsRequest,
  DescribeZonesResponse,
  NormalQueryItem,
  CreateServerlessDBInstanceResponse,
  DescribeDatabasesResponse,
  DescribeDBXlogsResponse,
  DescribeDBInstanceAttributeRequest,
  CloseServerlessDBExtranetAccessRequest,
  ModifyAccountRemarkResponse,
  DescribeDBSlowlogsResponse,
  ModifyAccountRemarkRequest,
  CloseDBExtranetAccessRequest,
  Xlog,
} from "./postgres_models"

/**
 * postgres client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("postgres.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
   * 本接口（DescribeOrders）用于获取订单信息。
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
  }

  /**
   * 本接口 (DestroyDBInstance) 用于销毁指定DBInstanceId对应的实例。
   */
  async DestroyDBInstance(
    req: DestroyDBInstanceRequest,
    cb?: (error: string, rep: DestroyDBInstanceResponse) => void
  ): Promise<DestroyDBInstanceResponse> {
    return this.request("DestroyDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDBBackups）用于查询实例备份列表。
   */
  async DescribeDBBackups(
    req: DescribeDBBackupsRequest,
    cb?: (error: string, rep: DescribeDBBackupsResponse) => void
  ): Promise<DescribeDBBackupsResponse> {
    return this.request("DescribeDBBackups", req, cb)
  }

  /**
   * 本接口（ResetAccountPassword）用于重置实例的账户密码。
   */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
   * 本接口（DescribeDBErrlogs）用于获取错误日志。
   */
  async DescribeDBErrlogs(
    req: DescribeDBErrlogsRequest,
    cb?: (error: string, rep: DescribeDBErrlogsResponse) => void
  ): Promise<DescribeDBErrlogsResponse> {
    return this.request("DescribeDBErrlogs", req, cb)
  }

  /**
   * 本接口（RestartDBInstance）用于重启实例。
   */
  async RestartDBInstance(
    req: RestartDBInstanceRequest,
    cb?: (error: string, rep: RestartDBInstanceResponse) => void
  ): Promise<RestartDBInstanceResponse> {
    return this.request("RestartDBInstance", req, cb)
  }

  /**
   * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
   */
  async InquiryPriceCreateDBInstances(
    req: InquiryPriceCreateDBInstancesRequest,
    cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void
  ): Promise<InquiryPriceCreateDBInstancesResponse> {
    return this.request("InquiryPriceCreateDBInstances", req, cb)
  }

  /**
   * 本接口（OpenDBExtranetAccess）用于开通外网。
   */
  async OpenDBExtranetAccess(
    req: OpenDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void
  ): Promise<OpenDBExtranetAccessResponse> {
    return this.request("OpenDBExtranetAccess", req, cb)
  }

  /**
   * 关闭serverlessDB实例外网
   */
  async CloseServerlessDBExtranetAccess(
    req: CloseServerlessDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseServerlessDBExtranetAccessResponse) => void
  ): Promise<CloseServerlessDBExtranetAccessResponse> {
    return this.request("CloseServerlessDBExtranetAccess", req, cb)
  }

  /**
   * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
   */
  async ModifyDBInstancesProject(
    req: ModifyDBInstancesProjectRequest,
    cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void
  ): Promise<ModifyDBInstancesProjectResponse> {
    return this.request("ModifyDBInstancesProject", req, cb)
  }

  /**
   * 本接口（ModifyAccountRemark）用于修改帐号备注。
   */
  async ModifyAccountRemark(
    req: ModifyAccountRemarkRequest,
    cb?: (error: string, rep: ModifyAccountRemarkResponse) => void
  ): Promise<ModifyAccountRemarkResponse> {
    return this.request("ModifyAccountRemark", req, cb)
  }

  /**
   * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
   */
  async DescribeDBXlogs(
    req: DescribeDBXlogsRequest,
    cb?: (error: string, rep: DescribeDBXlogsResponse) => void
  ): Promise<DescribeDBXlogsResponse> {
    return this.request("DescribeDBXlogs", req, cb)
  }

  /**
   * 本接口（SetAutoRenewFlag）用于设置自动续费。
   */
  async SetAutoRenewFlag(
    req: SetAutoRenewFlagRequest,
    cb?: (error: string, rep: SetAutoRenewFlagResponse) => void
  ): Promise<SetAutoRenewFlagResponse> {
    return this.request("SetAutoRenewFlag", req, cb)
  }

  /**
   * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
   */
  async DescribeDBInstanceAttribute(
    req: DescribeDBInstanceAttributeRequest,
    cb?: (error: string, rep: DescribeDBInstanceAttributeResponse) => void
  ): Promise<DescribeDBInstanceAttributeResponse> {
    return this.request("DescribeDBInstanceAttribute", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
   */
  async ModifyDBInstanceName(
    req: ModifyDBInstanceNameRequest,
    cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void
  ): Promise<ModifyDBInstanceNameResponse> {
    return this.request("ModifyDBInstanceName", req, cb)
  }

  /**
   * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例。
   */
  async CreateDBInstances(
    req: CreateDBInstancesRequest,
    cb?: (error: string, rep: CreateDBInstancesResponse) => void
  ): Promise<CreateDBInstancesResponse> {
    return this.request("CreateDBInstances", req, cb)
  }

  /**
   * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
   */
  async CreateServerlessDBInstance(
    req: CreateServerlessDBInstanceRequest,
    cb?: (error: string, rep: CreateServerlessDBInstanceResponse) => void
  ): Promise<CreateServerlessDBInstanceResponse> {
    return this.request("CreateServerlessDBInstance", req, cb)
  }

  /**
   * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 本接口 (DescribeZones) 用于查询支持的可用区信息。
   */
  async DescribeZones(
    req?: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
   */
  async DeleteServerlessDBInstance(
    req: DeleteServerlessDBInstanceRequest,
    cb?: (error: string, rep: DeleteServerlessDBInstanceResponse) => void
  ): Promise<DeleteServerlessDBInstanceResponse> {
    return this.request("DeleteServerlessDBInstance", req, cb)
  }

  /**
   * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
   */
  async InitDBInstances(
    req: InitDBInstancesRequest,
    cb?: (error: string, rep: InitDBInstancesResponse) => void
  ): Promise<InitDBInstancesResponse> {
    return this.request("InitDBInstances", req, cb)
  }

  /**
   * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
   */
  async InquiryPriceUpgradeDBInstance(
    req: InquiryPriceUpgradeDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void
  ): Promise<InquiryPriceUpgradeDBInstanceResponse> {
    return this.request("InquiryPriceUpgradeDBInstance", req, cb)
  }

  /**
   * 本接口 (DescribeRegions) 用于查询售卖地域信息。
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
   */
  async InquiryPriceRenewDBInstance(
    req: InquiryPriceRenewDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void
  ): Promise<InquiryPriceRenewDBInstanceResponse> {
    return this.request("InquiryPriceRenewDBInstance", req, cb)
  }

  /**
   * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
   */
  async CloseDBExtranetAccess(
    req: CloseDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void
  ): Promise<CloseDBExtranetAccessResponse> {
    return this.request("CloseDBExtranetAccess", req, cb)
  }

  /**
   * 本接口（DescribeAccounts）用于获取实例用户列表。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 开通serverlessDB实例外网
   */
  async OpenServerlessDBExtranetAccess(
    req: OpenServerlessDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenServerlessDBExtranetAccessResponse) => void
  ): Promise<OpenServerlessDBExtranetAccessResponse> {
    return this.request("OpenServerlessDBExtranetAccess", req, cb)
  }

  /**
   * 用于查询一个或多个serverlessDB实例的详细信息
   */
  async DescribeServerlessDBInstances(
    req: DescribeServerlessDBInstancesRequest,
    cb?: (error: string, rep: DescribeServerlessDBInstancesResponse) => void
  ): Promise<DescribeServerlessDBInstancesResponse> {
    return this.request("DescribeServerlessDBInstances", req, cb)
  }

  /**
   * 本接口（RenewInstance）用于续费实例。
   */
  async RenewInstance(
    req: RenewInstanceRequest,
    cb?: (error: string, rep: RenewInstanceResponse) => void
  ): Promise<RenewInstanceResponse> {
    return this.request("RenewInstance", req, cb)
  }

  /**
   * 接口（DescribeDatabases）用来拉取数据库列表
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }

  /**
   * 本接口（UpgradeDBInstance）用于升级实例。
   */
  async UpgradeDBInstance(
    req: UpgradeDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDBInstanceResponse) => void
  ): Promise<UpgradeDBInstanceResponse> {
    return this.request("UpgradeDBInstance", req, cb)
  }

  /**
   * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
   */
  async DescribeProductConfig(
    req: DescribeProductConfigRequest,
    cb?: (error: string, rep: DescribeProductConfigResponse) => void
  ): Promise<DescribeProductConfigResponse> {
    return this.request("DescribeProductConfig", req, cb)
  }

  /**
   * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。
   */
  async DescribeDBSlowlogs(
    req: DescribeDBSlowlogsRequest,
    cb?: (error: string, rep: DescribeDBSlowlogsResponse) => void
  ): Promise<DescribeDBSlowlogsResponse> {
    return this.request("DescribeDBSlowlogs", req, cb)
  }
}
