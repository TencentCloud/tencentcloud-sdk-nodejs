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
  ArchiveLogInterval,
  IsolateDBInstanceRequest,
  ModifyBinlogStatusResponse,
  DescribeFlowRequest,
  ModifyDBSBackupSetCommentResponse,
  ModifyInstanceNameResponse,
  DescribeDatabaseTableRequest,
  ModifyDBInstanceSecurityGroupsResponse,
  DescribeDBParametersRequest,
  DescribeDatabaseTableResponse,
  DescribeDatabaseObjectsResponse,
  SecurityGroupBound,
  CreateDBSBackupResponse,
  CreateDBSBackupRequest,
  DescribeBillingEnableResponse,
  DestroyInstancesRequest,
  DescribeBillingEnableRequest,
  DescribeDBSecurityGroupsRequest,
  TableColumn,
  ModifyDBParametersResponse,
  ModifyInstanceNameRequest,
  ParamDesc,
  ModifyAutoRenewFlagRequest,
  ModifyDBSBackupPolicyResponse,
  DescribeDBSCloneInstancesResponse,
  DescribeDBSecurityGroupsResponse,
  BackupPolicyModelInput,
  DatabaseFunction,
  ModifyDBSBackupPolicyRequest,
  DescribeDBSCloneInstancesRequest,
  DescribeDatabaseObjectsRequest,
  DescribeDBSAvailableRecoveryTimeResponse,
  ModifyAutoRenewFlagResponse,
  DestroyInstancesResponse,
  DescribeDBParametersResponse,
  SecurityGroup,
  IsolateDBInstanceResponse,
  DescribeDBSAvailableRecoveryTimeRequest,
  DatabaseTable,
  DeleteDBSBackupSetsResponse,
  DescribeFlowResponse,
  ConstraintRange,
  CancelIsolateDBInstancesResponse,
  DatabaseView,
  CancelIsolateDBInstancesRequest,
  ModifyDBSBackupSetCommentRequest,
  DatabaseProcedure,
  DBParamValue,
  ParamConstraint,
  ModifyBinlogStatusRequest,
  ModifyDBParametersRequest,
  ModifyDBInstanceSecurityGroupsRequest,
  DeleteDBSBackupSetsRequest,
  CloneInstanceModel,
} from "./tdmysql_models"

/**
 * tdmysql client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdmysql.tencentcloudapi.com", "2021-11-22", clientConfig)
  }

  /**
   * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
   */
  async DescribeDatabaseObjects(
    req: DescribeDatabaseObjectsRequest,
    cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void
  ): Promise<DescribeDatabaseObjectsResponse> {
    return this.request("DescribeDatabaseObjects", req, cb)
  }

  /**
     * 冗余接口，无人调用

本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     */
  async DescribeDatabaseTable(
    req: DescribeDatabaseTableRequest,
    cb?: (error: string, rep: DescribeDatabaseTableResponse) => void
  ): Promise<DescribeDatabaseTableResponse> {
    return this.request("DescribeDatabaseTable", req, cb)
  }

  /**
   * 本接口（DescribeDBParameters）用于获取实例的当前参数设置。
   */
  async DescribeDBParameters(
    req: DescribeDBParametersRequest,
    cb?: (error: string, rep: DescribeDBParametersResponse) => void
  ): Promise<DescribeDBParametersResponse> {
    return this.request("DescribeDBParameters", req, cb)
  }

  /**
   * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 本接口（CancelIsolateDBInstances）提供批量解除隔离实例功能
   */
  async CancelIsolateDBInstances(
    req: CancelIsolateDBInstancesRequest,
    cb?: (error: string, rep: CancelIsolateDBInstancesResponse) => void
  ): Promise<CancelIsolateDBInstancesResponse> {
    return this.request("CancelIsolateDBInstances", req, cb)
  }

  /**
     * 接口功能已被 ModifyInstanceCdc 完全覆盖

修改binlog状态
     */
  async ModifyBinlogStatus(
    req: ModifyBinlogStatusRequest,
    cb?: (error: string, rep: ModifyBinlogStatusResponse) => void
  ): Promise<ModifyBinlogStatusResponse> {
    return this.request("ModifyBinlogStatus", req, cb)
  }

  /**
   * 可恢复时间查询
   */
  async DescribeDBSAvailableRecoveryTime(
    req: DescribeDBSAvailableRecoveryTimeRequest,
    cb?: (error: string, rep: DescribeDBSAvailableRecoveryTimeResponse) => void
  ): Promise<DescribeDBSAvailableRecoveryTimeResponse> {
    return this.request("DescribeDBSAvailableRecoveryTime", req, cb)
  }

  /**
     * 已无地方调用

本接口（DescribeBillingEnable）用于查询计费是否开启
     */
  async DescribeBillingEnable(
    req?: DescribeBillingEnableRequest,
    cb?: (error: string, rep: DescribeBillingEnableResponse) => void
  ): Promise<DescribeBillingEnableResponse> {
    return this.request("DescribeBillingEnable", req, cb)
  }

  /**
   * 修改备份集备注
   */
  async ModifyDBSBackupSetComment(
    req: ModifyDBSBackupSetCommentRequest,
    cb?: (error: string, rep: ModifyDBSBackupSetCommentResponse) => void
  ): Promise<ModifyDBSBackupSetCommentResponse> {
    return this.request("ModifyDBSBackupSetComment", req, cb)
  }

  /**
   * 删除实例备份集
   */
  async DeleteDBSBackupSets(
    req: DeleteDBSBackupSetsRequest,
    cb?: (error: string, rep: DeleteDBSBackupSetsResponse) => void
  ): Promise<DeleteDBSBackupSetsResponse> {
    return this.request("DeleteDBSBackupSets", req, cb)
  }

  /**
   * 修改实例备份策略
   */
  async ModifyDBSBackupPolicy(
    req: ModifyDBSBackupPolicyRequest,
    cb?: (error: string, rep: ModifyDBSBackupPolicyResponse) => void
  ): Promise<ModifyDBSBackupPolicyResponse> {
    return this.request("ModifyDBSBackupPolicy", req, cb)
  }

  /**
   * 本接口（DestroyInstances）提供批量销毁实例功能
   */
  async DestroyInstances(
    req: DestroyInstancesRequest,
    cb?: (error: string, rep: DestroyInstancesResponse) => void
  ): Promise<DestroyInstancesResponse> {
    return this.request("DestroyInstances", req, cb)
  }

  /**
   * 本接口（ModifyAutoRenewFlag）用于修改自动续费标志
   */
  async ModifyAutoRenewFlag(
    req: ModifyAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void
  ): Promise<ModifyAutoRenewFlagResponse> {
    return this.request("ModifyAutoRenewFlag", req, cb)
  }

  /**
   * 创建实例备份集
   */
  async CreateDBSBackup(
    req: CreateDBSBackupRequest,
    cb?: (error: string, rep: CreateDBSBackupResponse) => void
  ): Promise<CreateDBSBackupResponse> {
    return this.request("CreateDBSBackup", req, cb)
  }

  /**
   * 本接口（ModifyInstanceName）提供修改实例名称功能
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 本接口（ModifyDBParameters）用于修改实例参数。
   */
  async ModifyDBParameters(
    req: ModifyDBParametersRequest,
    cb?: (error: string, rep: ModifyDBParametersResponse) => void
  ): Promise<ModifyDBParametersResponse> {
    return this.request("ModifyDBParameters", req, cb)
  }

  /**
   * 查询实例克隆列表
   */
  async DescribeDBSCloneInstances(
    req: DescribeDBSCloneInstancesRequest,
    cb?: (error: string, rep: DescribeDBSCloneInstancesResponse) => void
  ): Promise<DescribeDBSCloneInstancesResponse> {
    return this.request("DescribeDBSCloneInstances", req, cb)
  }

  /**
   * 本接口（IsolateDBInstance）提供批量隔离实例功能
   */
  async IsolateDBInstance(
    req: IsolateDBInstanceRequest,
    cb?: (error: string, rep: IsolateDBInstanceResponse) => void
  ): Promise<IsolateDBInstanceResponse> {
    return this.request("IsolateDBInstance", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
  }

  /**
   * 本接口（DescribeFlow）用于查询异步任务流程状态
   */
  async DescribeFlow(
    req?: DescribeFlowRequest,
    cb?: (error: string, rep: DescribeFlowResponse) => void
  ): Promise<DescribeFlowResponse> {
    return this.request("DescribeFlow", req, cb)
  }
}
