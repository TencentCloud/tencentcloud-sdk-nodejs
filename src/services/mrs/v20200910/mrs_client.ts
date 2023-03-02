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
  LastMenstrualPeriodBlock,
  Vaccination,
  TimelineEvent,
  IHCBlock,
  BodyTemperatureBlock,
  PathologicalDiagnosisDetailBlock,
  ImageToObjectRequest,
  Molecular,
  TuberInfo,
  SurgeryListBlock,
  Multiple,
  Hospitalization,
  BodyExaminationBlock,
  Advice,
  Report,
  BirthPlaceBlock,
  PTNM,
  TableIndicators,
  HistologyClass,
  BlockInfoV2,
  NormPart,
  Lymph,
  BaseItem,
  Fp2NdItem,
  Organ,
  DiseasePresentBlock,
  MenstrualPeriodBlock,
  VaccineCertificate,
  Value,
  MainDiseaseHistoryBlock,
  DiseaseMedicalHistory,
  GeneticHistoryBlock,
  MenstrualHistoryDetailBlock,
  CovidItemsInfo,
  BloodPressureBlock,
  HistologyLevel,
  EcgDescription,
  MedicalRecordInfo,
  EyeItemsInfo,
  IndicatorItemV2,
  NormSize,
  FirstPage,
  TextToObjectResponse,
  SurgeryConditionBlock,
  FieldInfo,
  DetailInformation,
  MaternitySummary,
  DischargeDiagnosis,
  TransfusionHistoryBlock,
  MolecularValue,
  ChiefComplaintDetailBlock,
  ReportInfo,
  Endoscopy,
  RelativeHistoryBlock,
  Exame,
  PathologyV2,
  TextToObjectRequest,
  AspectRatio,
  NeonatalInfo,
  EyeItem,
  FamilyMedicalHistory,
  Part,
  ImageToClassResponse,
  Invas,
  Template,
  MaternityDesc,
  EndoscopyOrgan,
  ClinicalStaging,
  PersonalMedicalHistory,
  DiagCert,
  PTNMBlock,
  SmokeHistoryBlock,
  AdmissionConditionBlock,
  TextToClassResponse,
  TreatmentRecordBlock,
  HistologyType,
  BlockInfo,
  Surgery,
  TextType,
  EcgItem,
  Fetus,
  ImageInfo,
  Point,
  MenstrualMedicalHistory,
  Check,
  EcgDiagnosis,
  ImmunohistochemistryBlock,
  SummaryInfo,
  DescInfo,
  ImageToObjectResponse,
  FamilyHistoryBlock,
  AdmissionDiagnosisBlock,
  Elastic,
  IHCInfo,
  HandleParam,
  NeglistBlock,
  Medicine,
  ReportTypeVersion,
  Rectangle,
  IHCV2,
  ObstericalMedicalHistory,
  BaseItem3,
  BaseItem2,
  RelativeCancerHistoryBlock,
  ParagraphBlock,
  RelativeHistoryDetailBlock,
  PoslistBlock,
  Prescription,
  Coord,
  Summary,
  ResultInfo,
  PathologyReport,
  MenstrualHistoryBlock,
  Time,
  Coordinate,
  DosageBlock,
  BiopsyPart,
  InvasiveV2,
  ImageToClassRequest,
  BaseInfo,
  TextToClassRequest,
  ObstetricalHistoryBlock,
  Size,
  DischargeConditionBlock,
  LymphTotal,
  OtherInfo,
  MenstrualFlowBlock,
  TimelineInformation,
  SurgeryHistory,
  SymptomInfo,
  LymphNode,
  BirthCert,
  PathologicalDiagnosisBlock,
  ChiefComplaintBlock,
  CovidItem,
  ValueBlock,
  ParentInfo,
  DischargeInfoBlock,
  DeathDateBlock,
  IssueInfo,
  MedDoc,
  Desc,
  PatientInfo,
  HistologyTypeV2,
  PartDesc,
  DischargeDiagnosisBlock,
  FertilityHistoryBlock,
  DiseaseHistoryBlock,
  NumValue,
  EyeChildItem,
  SurgeryAttr,
  IndicatorV3,
  DrugListBlock,
  EndoscopyDesc,
  IndicatorItem,
  DiagCertItem,
  DrugHistoryBlock,
  SurgeryHistoryBlock,
  PersonalHistoryBlock,
  RelapseDateBlock,
  Maternity,
  MenstruationOrNotBlock,
  Electrocardiogram,
  TreatmentRecord,
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
     * 文本转结构化对象。

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。
     */
  async TextToObject(
    req: TextToObjectRequest,
    cb?: (error: string, rep: TextToObjectResponse) => void
  ): Promise<TextToObjectResponse> {
    return this.request("TextToObject", req, cb)
  }
}
