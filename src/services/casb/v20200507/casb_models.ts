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
 * CopyCryptoColumnPolicy请求参数结构体
 */
export interface CopyCryptoColumnPolicyRequest {
  /**
   * 实例Id
   */
  CasbId: string

  /**
   * 元数据id
   */
  MetaDataId: string

  /**
   * 目标实例Id 如果和实例Id相同则为同CasbId下的策略复制
   */
  DstCasbId: string

  /**
   * 目标实例Id 如果和[元数据id]相同则为同元数据下的策略复制
   */
  DstMetaDataId: string

  /**
   * 筛选来源数据库的表
   */
  SrcTableFilter?: Array<CryptoCopyColumnPolicyTableFilter>

  /**
   * 复制同元数据下的策略，需要填写目标数据库名
   */
  DstDatabaseName?: string
}

/**
 * 策略迁移表信息筛选
 */
export interface CryptoCopyColumnPolicyTableFilter {
  /**
   * 数据库名称
   */
  DatabaseName: string

  /**
   * 表名称
   */
  TableNameSet?: Array<string>
}

/**
 * CopyCryptoColumnPolicy返回参数结构体
 */
export interface CopyCryptoColumnPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
