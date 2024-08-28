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
 * 账号工厂基线配置项
 */
export interface BaselineConfigItem {
  /**
   * 账号工厂基线项唯一标识,只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Identifier?: string
  /**
   * 账号工厂基线项配置，不同基线项配置参数不同。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Configuration?: string
}

/**
 * BatchApplyAccountBaselines返回参数结构体
 */
export interface BatchApplyAccountBaselinesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchApplyAccountBaselines请求参数结构体
 */
export interface BatchApplyAccountBaselinesRequest {
  /**
   * 成员账号uin，也是被应用基线的账号uin。
   */
  MemberUinList: Array<number | bigint>
  /**
   * 基线项配置信息列表。
   */
  BaselineConfigItems: Array<BaselineConfigItem>
}
