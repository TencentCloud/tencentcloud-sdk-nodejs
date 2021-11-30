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
  Indicator,
  Template,
  Elastic,
  Vaccination,
  ReportInfo,
  Endoscopy,
  IHCInfo,
  SurgeryHistory,
  Medicine,
  HandleParam,
  ImageToObjectRequest,
  TextToObjectRequest,
  AspectRatio,
  SymptomInfo,
  TuberInfo,
  ObstericalMedicalHistory,
  Multiple,
  Hospitalization,
  FamilyMedicalHistory,
  Advice,
  TextToObjectResponse,
  MedicalRecordInfo,
  Part,
  ImageToClassResponse,
  Lymph,
  Invas,
  EcgItem,
  NormPart,
  MedDoc,
  EndoscopyOrgan,
  PatientInfo,
  HistologyLevel,
  ImageToObjectResponse,
  Prescription,
  PersonalMedicalHistory,
  Organ,
  DiagCert,
  TreatmentRecord,
  VaccineCertificate,
  Value,
  Summary,
  DiseaseMedicalHistory,
  PathologyReport,
  TextToClassResponse,
  HistologyType,
  BlockInfo,
  SurgeryAttr,
  TextType,
  EndoscopyDesc,
  EcgDescription,
  IndicatorItem,
  ImageInfo,
  DiagCertItem,
  BiopsyPart,
  MenstrualMedicalHistory,
  ImageToClassRequest,
  NormSize,
  FirstPage,
  Check,
  EcgDiagnosis,
  TextToClassRequest,
  Surgery,
  Desc,
  DischargeDiagnosis,
  Electrocardiogram,
  Size,
} from "./mrs_models"

/**
 * mrs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mrs.tencentcloudapi.com", "2020-09-10", clientConfig)
  }

  /**
   * 图片分类
   */
  async ImageToClass(
    req: ImageToClassRequest,
    cb?: (error: string, rep: ImageToClassResponse) => void
  ): Promise<ImageToClassResponse> {
    return this.request("ImageToClass", req, cb)
  }

  /**
   * 图片转结构化对象
   */
  async ImageToObject(
    req: ImageToObjectRequest,
    cb?: (error: string, rep: ImageToObjectResponse) => void
  ): Promise<ImageToObjectResponse> {
    return this.request("ImageToObject", req, cb)
  }

  /**
   * 文本分类
   */
  async TextToClass(
    req: TextToClassRequest,
    cb?: (error: string, rep: TextToClassResponse) => void
  ): Promise<TextToClassResponse> {
    return this.request("TextToClass", req, cb)
  }

  /**
   * 文本转结构化对象
   */
  async TextToObject(
    req: TextToObjectRequest,
    cb?: (error: string, rep: TextToObjectResponse) => void
  ): Promise<TextToObjectResponse> {
    return this.request("TextToObject", req, cb)
  }
}
