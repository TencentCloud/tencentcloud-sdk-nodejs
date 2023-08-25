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
 * 三元组查询返回的元记录
 */
export interface TripleContent {
  /**
   * 实体id
   */
  Id?: string
  /**
   * 实体名称
   */
  Name?: string
  /**
   * 实体order
   */
  Order?: number
  /**
   * 实体流行度
   */
  Popular?: number
}

/**
 * DescribeEntity请求参数结构体
 */
export interface DescribeEntityRequest {
  /**
   * 实体名称
   */
  EntityName: string
}

/**
 * DescribeTriple请求参数结构体
 */
export interface DescribeTripleRequest {
  /**
   * 三元组查询条件
   */
  TripleCondition: string
}

/**
 * DescribeTriple返回参数结构体
 */
export interface DescribeTripleResponse {
  /**
   * 返回三元组信息
   */
  Content?: Array<TripleContent>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRelation返回参数结构体
 */
export interface DescribeRelationResponse {
  /**
   * 返回查询实体间的关系
   */
  Content?: Array<EntityRelationContent>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回的实体关系查询结果详细内容
 */
export interface EntityRelationContent {
  /**
   * 实体关系查询返回关系的object
   */
  Object?: Array<EntityRelationObject>
  /**
   * 实体关系查询返回关系的subject
   */
  Subject?: Array<EntityRelationSubject>
  /**
   * 实体关系查询返回的关系名称
   */
  Relation?: string
}

/**
 * DescribeRelation请求参数结构体
 */
export interface DescribeRelationRequest {
  /**
   * 输入第一个实体
   */
  LeftEntityName: string
  /**
   * 输入第二个实体
   */
  RightEntityName: string
}

/**
 * 实体关系查询返回的Object类型
 */
export interface EntityRelationObject {
  /**
   * object对应id
   */
  Id?: Array<string>
  /**
   * object对应name
   */
  Name?: Array<string>
  /**
   * object对应popular值
   */
  Popular?: Array<number | bigint>
}

/**
 * DescribeEntity返回参数结构体
 */
export interface DescribeEntityResponse {
  /**
   * 返回查询实体相关信息
   */
  Content?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实体关系查询返回Subject
 */
export interface EntityRelationSubject {
  /**
   * Subject对应id
   */
  Id?: Array<string>
  /**
   * Subject对应name
   */
  Name?: Array<string>
  /**
   * Subject对应popular
   */
  Popular?: Array<number | bigint>
}
