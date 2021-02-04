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
 * DescribeAgentShell返回参数结构体
 */
export interface DescribeAgentShellResponse {
  /**
      * 接入信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: AgentShell

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * agent安装脚本串
 */
export interface AgentShell {
  /**
      * 鉴权token
注意：此字段可能返回 null，表示取不到有效值。
      */
  Token: string

  /**
      * 数据接收Ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  EtlIp: string

  /**
      * 数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
  EtlPort: string

  /**
      * 手动接入脚本串
注意：此字段可能返回 null，表示取不到有效值。
      */
  ByHandAccess: string

  /**
      * 自动接入脚本串
注意：此字段可能返回 null，表示取不到有效值。
      */
  ByShellAccess: string

  /**
      * SkyWalking数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkyWalkingPort: string

  /**
      * Zipkin数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZipkinPort: string

  /**
      * Jaeger数据接收port
注意：此字段可能返回 null，表示取不到有效值。
      */
  JaegerPort: string
}

/**
 * DescribeAgentShell请求参数结构体
 */
export type DescribeAgentShellRequest = null
