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
  GetLLMDiagnosisHealthResponse,
  HighlightWordInfo,
  GetLLMDiagnosisDrugChatRequest,
  LLMDiagnosisHealthData,
  StandardDrugCardInfo,
  GetLLMDiagnosisDrugChatResponse,
  GuessQuestion,
  GetLLMReportInterpretationRequest,
  ReferResourceInfo,
  ReportFileInfoReq,
  DescribeIgOrderListResponse,
  GetLLMDiagnosisDrugResponse,
  ReportFileInfoRsp,
  QueryDrugInstructionsRequest,
  GetLLMReportInterpretationResponse,
  DrugInstructionInfo,
  LLMReportInterpretationData,
  GetLLMDiagnosisHealthRequest,
  LLMDiagnosisDrugData,
  StandardDrugInstructionInfo,
  GetLLMDiagnosisDrugRequest,
  HealthFollowUpQuestion,
  DrugCardInfo,
  DescribeIgOrderListRequest,
  QueryDrugInstructionsResponse,
} from "./ig_models"

/**
 * ig client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ig.tencentcloudapi.com", "2021-05-18", clientConfig)
  }

  /**
   * 查询药品说明书
   */
  async QueryDrugInstructions(
    req: QueryDrugInstructionsRequest,
    cb?: (error: string, rep: QueryDrugInstructionsResponse) => void
  ): Promise<QueryDrugInstructionsResponse> {
    return this.request("QueryDrugInstructions", req, cb)
  }

  /**
   * 大模型报告解读
   */
  async GetLLMReportInterpretation(
    req: GetLLMReportInterpretationRequest,
    cb?: (error: string, rep: GetLLMReportInterpretationResponse) => void
  ): Promise<GetLLMReportInterpretationResponse> {
    return this.request("GetLLMReportInterpretation", req, cb)
  }

  /**
   * 大模型问药拍药盒
   */
  async GetLLMDiagnosisDrug(
    req: GetLLMDiagnosisDrugRequest,
    cb?: (error: string, rep: GetLLMDiagnosisDrugResponse) => void
  ): Promise<GetLLMDiagnosisDrugResponse> {
    return this.request("GetLLMDiagnosisDrug", req, cb)
  }

  /**
   * 查询智能导诊订单列表
   */
  async DescribeIgOrderList(
    req: DescribeIgOrderListRequest,
    cb?: (error: string, rep: DescribeIgOrderListResponse) => void
  ): Promise<DescribeIgOrderListResponse> {
    return this.request("DescribeIgOrderList", req, cb)
  }

  /**
   * 大模型问药问答
   */
  async GetLLMDiagnosisDrugChat(
    req: GetLLMDiagnosisDrugChatRequest,
    cb?: (error: string, rep: GetLLMDiagnosisDrugChatResponse) => void
  ): Promise<GetLLMDiagnosisDrugChatResponse> {
    return this.request("GetLLMDiagnosisDrugChat", req, cb)
  }

  /**
   * 大模型健康自诊
   */
  async GetLLMDiagnosisHealth(
    req: GetLLMDiagnosisHealthRequest,
    cb?: (error: string, rep: GetLLMDiagnosisHealthResponse) => void
  ): Promise<GetLLMDiagnosisHealthResponse> {
    return this.request("GetLLMDiagnosisHealth", req, cb)
  }
}
