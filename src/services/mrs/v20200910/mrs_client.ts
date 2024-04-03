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
  ImageMaskResponse,
  IHCBlock,
  GynaecologyVagina,
  BodyTemperatureBlock,
  PathologicalDiagnosisDetailBlock,
  ImageToObjectRequest,
  Molecular,
  TuberInfo,
  SurgeryListBlock,
  PhysicalExaminationV1,
  Multiple,
  Hospitalization,
  BodyExaminationBlock,
  Advice,
  Report,
  BirthPlaceBlock,
  GeneralExaminationBriefSummary,
  PTNM,
  TableIndicators,
  BlockInfoV2,
  ImageMaskAsyncGetResultResponse,
  Lymph,
  ImageMaskAsyncRequest,
  BaseItem,
  OtolaryngologyBaseItem,
  Fp2NdItem,
  SurgeryLymphNode,
  SurgeryHeadNeck,
  Organ,
  DiseasePresentBlock,
  MenstrualPeriodBlock,
  TreatmentRecord,
  InternalMedicineVessel,
  OphthalmologyBareEyeSight,
  Value,
  MainDiseaseHistoryBlock,
  DiseaseMedicalHistory,
  GeneticHistoryBlock,
  OphthalmologyBriefSummary,
  MenstrualHistoryDetailBlock,
  InternalMedicineAbdomenGallBladder,
  GynaecologyVulva,
  OphthalmologyColourVision,
  CovidItemsInfo,
  BloodPressureBlock,
  TurnPDFToObjectAsyncRequest,
  HistologyLevel,
  EcgDescription,
  SurgeryThyroid,
  MedicalRecordInfo,
  EyeItemsInfo,
  SurgerySkin,
  IndicatorItemV2,
  TurnPDFToObjectAsyncResponse,
  NormSize,
  GynaecologyBriefSummary,
  TextToObjectResponse,
  SurgeryConditionBlock,
  FieldInfo,
  DetailInformation,
  MaternitySummary,
  DischargeDiagnosis,
  TransfusionHistoryBlock,
  MolecularValue,
  ChiefComplaintDetailBlock,
  ImageMaskFlags,
  TurnPDFToObjectResponse,
  InternalMedicineHeart,
  ReportInfo,
  GeneralExaminationVitalSign,
  TurnPDFToObjectAsyncGetResultResponse,
  PhysicalBaseItem,
  Exame,
  PathologyV2,
  FirstPage,
  InvasiveV2,
  TextToObjectRequest,
  AspectRatio,
  PersonalHistoryBlock,
  NeonatalInfo,
  Size,
  EyeItem,
  FamilyMedicalHistory,
  OphthalmologyCorrectedVisualAcuity,
  GeneralExaminationVitalSignBloodPressure,
  Part,
  ImageToClassResponse,
  DrugListBlock,
  Template,
  MaternityDesc,
  EndoscopyOrgan,
  ClinicalStaging,
  InternalMedicineAbdomenPancreas,
  PersonalMedicalHistory,
  DiagCert,
  InternalMedicineAbdomen,
  PTNMBlock,
  SmokeHistoryBlock,
  AdmissionConditionBlock,
  StomatologyToothDecay,
  TextToClassResponse,
  StomatologyBriefSummary,
  HearingItem,
  HistologyType,
  BlockInfo,
  Surgery,
  Block,
  TextType,
  EcgItem,
  GynaecologyUterus,
  Fetus,
  OtolaryngologyEar,
  ImageInfo,
  Point,
  MenstrualMedicalHistory,
  Check,
  EcgDiagnosis,
  ImmunohistochemistryBlock,
  OtolaryngologyLarynx,
  SummaryInfo,
  DescInfo,
  HistologyClass,
  FamilyHistoryBlock,
  AdmissionDiagnosisBlock,
  TreatmentRecordBlock,
  Elastic,
  ImageMaskAsyncGetResultRequest,
  ChestCircumferenceItem,
  SurgeryAnorectal,
  IHCInfo,
  PdfInfo,
  OphthalmologyBaseItem,
  HandleParam,
  NeglistBlock,
  Medicine,
  PathologicalDiagnosisBlock,
  StomatologyBaseItem,
  ReportTypeVersion,
  Rectangle,
  IHCV2,
  ObstericalMedicalHistory,
  StomatologyGingiva,
  OtolaryngologyNose,
  BaseItem3,
  BaseItem2,
  VaccineCertificate,
  RelativeCancerHistoryBlock,
  ParagraphBlock,
  RelativeHistoryDetailBlock,
  PoslistBlock,
  NormPart,
  GynaecologyMenstrualHistory,
  ImageMaskRequest,
  Endoscopy,
  Prescription,
  InternalMedicineBaseItem,
  SurgeryUrogenitalSystem,
  Coord,
  Summary,
  ResultInfo,
  PathologyReport,
  MenstrualHistoryBlock,
  Time,
  Coordinate,
  DosageBlock,
  RelativeHistoryBlock,
  StomatologyPeriodontics,
  BiopsyPart,
  Invas,
  ImageToClassRequest,
  InternalMedicineAbdomenLiver,
  BaseInfo,
  PhysicalExamination,
  InternalMedicineRespiratorySystem,
  TurnPDFToObjectAsyncGetResultRequest,
  BloodPressureItem,
  SymptomInfo,
  TextToClassRequest,
  TextTypeListBlock,
  ObstetricalHistoryBlock,
  SurgerySpinalExtremities,
  BlockTitle,
  DischargeConditionBlock,
  LymphTotal,
  OtherInfo,
  TurnPDFToObjectRequest,
  MenstrualFlowBlock,
  TimelineInformation,
  SurgeryHistory,
  OphthalmologyFundoscopy,
  SurgeryBreast,
  InternalMedicineBriefSummary,
  ImageMaskAsyncResponse,
  DeathDateBlock,
  BirthCert,
  KeyValueItem,
  ChiefComplaintBlock,
  CovidItem,
  ValueBlock,
  InternalMedicineAbdomenSpleen,
  InternalMedicineAbdomenKidney,
  ParentInfo,
  DischargeInfoBlock,
  Maternity,
  LymphNode,
  IssueInfo,
  MedDoc,
  Desc,
  PatientInfo,
  HistologyTypeV2,
  SurgeryBaseItem,
  PartDesc,
  DischargeDiagnosisBlock,
  FertilityHistoryBlock,
  GeneralExaminationOthers,
  DiseaseHistoryBlock,
  NumValue,
  EyeChildItem,
  SurgeryAttr,
  IndicatorV3,
  GynaecologyCervix,
  EndoscopyDesc,
  GynaecologyAdnexal,
  IndicatorItem,
  DiagCertItem,
  DrugHistoryBlock,
  SurgeryHistoryBlock,
  SurgeryBriefSummary,
  GynaecologyPelvicCavity,
  RelapseDateBlock,
  ImageToObjectResponse,
  ValueUnitItem,
  GynaecologyBaseItem,
  GeneralExaminationBaseItem,
  MenstruationOrNotBlock,
  Electrocardiogram,
  OtolaryngologyBriefSummary,
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
   * 体检报告PDF文件结构化异步获取结果接口
   */
  async TurnPDFToObjectAsyncGetResult(
    req: TurnPDFToObjectAsyncGetResultRequest,
    cb?: (error: string, rep: TurnPDFToObjectAsyncGetResultResponse) => void
  ): Promise<TurnPDFToObjectAsyncGetResultResponse> {
    return this.request("TurnPDFToObjectAsyncGetResult", req, cb)
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

  /**
   * 医疗报告图片脱敏接口
   */
  async ImageMask(
    req: ImageMaskRequest,
    cb?: (error: string, rep: ImageMaskResponse) => void
  ): Promise<ImageMaskResponse> {
    return this.request("ImageMask", req, cb)
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
   * 体检报告PDF文件结构化-异步接口
   */
  async TurnPDFToObjectAsync(
    req: TurnPDFToObjectAsyncRequest,
    cb?: (error: string, rep: TurnPDFToObjectAsyncResponse) => void
  ): Promise<TurnPDFToObjectAsyncResponse> {
    return this.request("TurnPDFToObjectAsync", req, cb)
  }

  /**
   * 图片脱敏-异步接口
   */
  async ImageMaskAsync(
    req: ImageMaskAsyncRequest,
    cb?: (error: string, rep: ImageMaskAsyncResponse) => void
  ): Promise<ImageMaskAsyncResponse> {
    return this.request("ImageMaskAsync", req, cb)
  }

  /**
   * 图片脱敏-异步获取结果接口
   */
  async ImageMaskAsyncGetResult(
    req: ImageMaskAsyncGetResultRequest,
    cb?: (error: string, rep: ImageMaskAsyncGetResultResponse) => void
  ): Promise<ImageMaskAsyncGetResultResponse> {
    return this.request("ImageMaskAsyncGetResult", req, cb)
  }

  /**
     * 将PDF格式的体检报告文件结构化，解析关键信息。
注意：该接口是按照体检报告 PDF 页面数量统计次数，不是按照 PDF 文件数量统计次数。通过该接口传入的报告必须是体检报告，非体检报告可能无法正确解析。
     */
  async TurnPDFToObject(
    req: TurnPDFToObjectRequest,
    cb?: (error: string, rep: TurnPDFToObjectResponse) => void
  ): Promise<TurnPDFToObjectResponse> {
    return this.request("TurnPDFToObject", req, cb)
  }

  /**
     * 文本分类

适用场景：经过腾讯医疗专用 OCR 从图片识别之后的文本，并且需要加上每个字符的坐标信息，才可以调用此接口。通过其它 OCR 识别的文本可能不适配。医院的 XML 格式文本也不适配，XML 文件需要经过特殊转换才能直接调用此接口。单次调用传入的文本不宜超过 2000 字。如有需要调用此接口，建议先咨询产品团队。
     */
  async TextToClass(
    req: TextToClassRequest,
    cb?: (error: string, rep: TextToClassResponse) => void
  ): Promise<TextToClassResponse> {
    return this.request("TextToClass", req, cb)
  }
}
