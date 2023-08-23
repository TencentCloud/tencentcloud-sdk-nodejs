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

/**
 * CreateDSPADbMetaResources请求参数结构体
 */
export interface CreateDSPADbMetaResourcesRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版）
   */
  MetaType: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * 用来标记本次更新是否已经是最后一次，可选值：continue（后续还需要更新）、finished（本次是最后一次更新）。
   */
  UpdateStatus: string
  /**
   * 本次更新的ID号，用来标记一次完整的更新过程。
   */
  UpdateId: string
  /**
   * 云上资源列表。
   */
  Items: Array<DspaCloudResourceMeta>
}

/**
 * CreateDSPADbMetaResources返回参数结构体
 */
export interface CreateDSPADbMetaResourcesResponse {
  /**
   * 本次更新的ID号，用来标记一次完整的更新过程。
   */
  UpdateId?: string
  /**
   * 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版）
   */
  MetaType?: string
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 资源所处地域。
   */
  ResourceRegion?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云上资源元数据
 */
export interface DspaCloudResourceMeta {
  /**
   * 用户资源ID。
   */
  ResourceId: string
  /**
   * 资源名称。
   */
  ResourceName: string
  /**
   * 资源VIP。
   */
  ResourceVip: string
  /**
   * 资源端口。
   */
  ResourceVPort: number
  /**
   * 资源被创建时间。
   */
  ResourceCreateTime: string
  /**
   * 用户资源VPC ID 字符串。
   */
  ResourceUniqueVpcId: string
  /**
   * 用户资源Subnet ID 字符串。
   */
  ResourceUniqueSubnetId: string
}
