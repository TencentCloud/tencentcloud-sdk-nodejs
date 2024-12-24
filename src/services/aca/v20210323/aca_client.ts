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
  SmartDrugInfoData,
  PatientBaseInfo,
  SmartPredictReqData,
  DrugUsage,
  SyncDepartmentRespData,
  GetDrugIndicationsResponse,
  EmrDiagnosises,
  SyncStandardDictResponse,
  Dict,
  EmrQuality,
  SmartPredictResponse,
  Department,
  PhysicalExam,
  LoginDataResp,
  DocInfo,
  CriticalInfo,
  IndicationsDrug,
  RiskInfo,
  SyncStandardDictRequest,
  SmartPredictRequest,
  PatientHistory,
  GetDrugIndicationsRequest,
  RecommendedUsage,
  LoginData,
  DurgPropertyInfo,
  LoginOutData,
  CommonHeader,
  RecordQuality,
  SmartDrugInfoRequest,
  UploadDrugData,
  VitalSignsInfo,
  PatientFamilyHistory,
  SyncDepartmentRequest,
  SmartPredictRespData,
  LoginHisToolResponse,
  SmartDrugInfoResp,
  DoctorInfo,
  UploadDrugsResponse,
  SyncDictData,
  Drug,
  GetDrugIndicationsReqData,
  DiagnosisInfo,
  LoginOutHisToolResponse,
  RationalDrugInfo,
  HealthPrescriptions,
  Abnormals,
  OperateResp,
  SmartDrugInfoResponse,
  LoginOutHisToolRequest,
  CurrentDiagnosis,
  RequestCase,
  GetDrugIndicationsResp,
  LoginOutResponseData,
  TreatmentGuide,
  LoginHeader,
  SyncDepartmentData,
  SyncDepartmentResponse,
  LoginHisToolRequest,
  UploadDrugsRequest,
  DifferDiagnosis,
  DrugList,
  ReferralInfo,
  LoginOutHeader,
  SuspectedDiagnosis,
} from "./aca_models"

/**
 * aca client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("aca.tencentcloudapi.com", "2021-03-23", clientConfig)
  }

  /**
   * 登录获取token
   */
  async LoginHisTool(
    req: LoginHisToolRequest,
    cb?: (error: string, rep: LoginHisToolResponse) => void
  ): Promise<LoginHisToolResponse> {
    return this.request("LoginHisTool", req, cb)
  }

  /**
   * 药品适应症接口
   */
  async GetDrugIndications(
    req: GetDrugIndicationsRequest,
    cb?: (error: string, rep: GetDrugIndicationsResponse) => void
  ): Promise<GetDrugIndicationsResponse> {
    return this.request("GetDrugIndications", req, cb)
  }

  /**
   * 登出
   */
  async LoginOutHisTool(
    req: LoginOutHisToolRequest,
    cb?: (error: string, rep: LoginOutHisToolResponse) => void
  ): Promise<LoginOutHisToolResponse> {
    return this.request("LoginOutHisTool", req, cb)
  }

  /**
   * 辅诊智能预测接口
   */
  async SmartPredict(
    req: SmartPredictRequest,
    cb?: (error: string, rep: SmartPredictResponse) => void
  ): Promise<SmartPredictResponse> {
    return this.request("SmartPredict", req, cb)
  }

  /**
   * 智能用药接口
   */
  async SmartDrugInfo(
    req: SmartDrugInfoRequest,
    cb?: (error: string, rep: SmartDrugInfoResponse) => void
  ): Promise<SmartDrugInfoResponse> {
    return this.request("SmartDrugInfo", req, cb)
  }

  /**
   * 用于院方科室管理，获取科室列表和状态、新增或修改科室信息、删除科室。
   */
  async SyncDepartment(
    req: SyncDepartmentRequest,
    cb?: (error: string, rep: SyncDepartmentResponse) => void
  ): Promise<SyncDepartmentResponse> {
    return this.request("SyncDepartment", req, cb)
  }

  /**
   * 同步标准字典，如给药频次、给药途径、科室、诊断等
   */
  async SyncStandardDict(
    req: SyncStandardDictRequest,
    cb?: (error: string, rep: SyncStandardDictResponse) => void
  ): Promise<SyncStandardDictResponse> {
    return this.request("SyncStandardDict", req, cb)
  }

  /**
   * 药品同步，一次同步数据不要超过500个
   */
  async UploadDrugs(
    req: UploadDrugsRequest,
    cb?: (error: string, rep: UploadDrugsResponse) => void
  ): Promise<UploadDrugsResponse> {
    return this.request("UploadDrugs", req, cb)
  }
}
