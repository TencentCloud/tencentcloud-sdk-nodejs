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
 * 检验报告
 */
export interface Indicator {
  /**
      * 检验指标项
注意：此字段可能返回 null，表示取不到有效值。
      */
  Indicators: Array<IndicatorItem>
}

/**
 * 报告模板
 */
export interface Template {
  /**
      * 患者信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PatientInfo: PatientInfo

  /**
      * 报告信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportInfo: ReportInfo

  /**
      * 检查报告
注意：此字段可能返回 null，表示取不到有效值。
      */
  Check: Check

  /**
      * 病理报告
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pathology: PathologyReport

  /**
      * 出院报告，入院报告，门诊病历
注意：此字段可能返回 null，表示取不到有效值。
      */
  MedDoc: MedDoc

  /**
      * 诊断证明
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiagCert: DiagCert

  /**
      * 病案首页
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstPage: FirstPage

  /**
      * 检验报告
注意：此字段可能返回 null，表示取不到有效值。
      */
  Indicator: Indicator

  /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportType: string

  /**
      * 门诊病历信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MedicalRecordInfo: MedicalRecordInfo

  /**
      * 出入院信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hospitalization: Hospitalization

  /**
      * 手术记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  Surgery: Surgery

  /**
      * 心电图报告
注意：此字段可能返回 null，表示取不到有效值。
      */
  Electrocardiogram: Electrocardiogram

  /**
      * 内窥镜报告
注意：此字段可能返回 null，表示取不到有效值。
      */
  Endoscopy: Endoscopy

  /**
      * 处方单
注意：此字段可能返回 null，表示取不到有效值。
      */
  Prescription: Prescription

  /**
      * 免疫接种证明
注意：此字段可能返回 null，表示取不到有效值。
      */
  VaccineCertificate: VaccineCertificate

  /**
      * OCR文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcrText: string

  /**
      * OCR拼接后文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcrResult: string
}

/**
 * 弹性质地
 */
export interface Elastic {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 分数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: string

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * 免疫接种记录
 */
export interface Vaccination {
  /**
      * 序号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: string

  /**
      * 疫苗名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vaccine: string

  /**
      * 剂次
注意：此字段可能返回 null，表示取不到有效值。
      */
  Dose: string

  /**
      * 接种日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  Date: string

  /**
      * 疫苗批号
注意：此字段可能返回 null，表示取不到有效值。
      */
  LotNumber: string

  /**
      * 生产企业
注意：此字段可能返回 null，表示取不到有效值。
      */
  Manufacturer: string

  /**
      * 接种单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Clinic: string

  /**
      * 接种部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Site: string

  /**
      * 接种者
注意：此字段可能返回 null，表示取不到有效值。
      */
  Provider: string
}

/**
 * 报告基本信息
 */
export interface ReportInfo {
  /**
      * 医院名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hospital: string

  /**
      * 科室名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DepartmentName: string

  /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillingTime: string

  /**
      * 报告时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportTime: string

  /**
      * 检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  InspectTime: string

  /**
      * 检查号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CheckNum: string

  /**
      * 影像号
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageNum: string

  /**
      * 放射号
注意：此字段可能返回 null，表示取不到有效值。
      */
  RadiationNum: string

  /**
      * 检验号
注意：此字段可能返回 null，表示取不到有效值。
      */
  TestNum: string

  /**
      * 门诊号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutpatientNum: string

  /**
      * 病理号
注意：此字段可能返回 null，表示取不到有效值。
      */
  PathologyNum: string

  /**
      * 住院号
注意：此字段可能返回 null，表示取不到有效值。
      */
  InHospitalNum: string

  /**
      * 样本号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SampleNum: string

  /**
      * 标本种类
注意：此字段可能返回 null，表示取不到有效值。
      */
  SampleType: string

  /**
      * 病历号
注意：此字段可能返回 null，表示取不到有效值。
      */
  MedicalRecordNum: string

  /**
      * 报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportName: string

  /**
      * 超声号
注意：此字段可能返回 null，表示取不到有效值。
      */
  UltraNum: string

  /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  Diagnose: string
}

/**
 * 内窥镜报告
 */
export interface Endoscopy {
  /**
      * 活检部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  BiopsyPart: BiopsyPart

  /**
      * 可见描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: EndoscopyDesc

  /**
      * 结论
注意：此字段可能返回 null，表示取不到有效值。
      */
  Summary: Summary
}

/**
 * Ihc信息
 */
export interface IHCInfo {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
   * 值
   */
  Value: Value
}

/**
 * 手术史
 */
export interface SurgeryHistory {
  /**
      * 手术名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SurgeryName: SurgeryAttr

  /**
      * 手术日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  SurgeryDate: SurgeryAttr

  /**
      * 术前诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  PreoperativePathology: SurgeryAttr

  /**
      * 术中诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntraoperativePathology: SurgeryAttr

  /**
      * 术后诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostoperativePathology: SurgeryAttr

  /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  DischargeDiagnosis: SurgeryAttr
}

/**
 * 药品
 */
export interface Medicine {
  /**
      * 药品名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 商品名
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeName: string

  /**
      * 厂商
注意：此字段可能返回 null，表示取不到有效值。
      */
  Firm: string

  /**
      * 医保类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Category: string

  /**
      * 规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Specification: string

  /**
      * 最小包装数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinQuantity: string

  /**
      * 最小制剂单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  DosageUnit: string

  /**
      * 最小包装单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackingUnit: string
}

/**
 * 图片处理参数
 */
export interface HandleParam {
  /**
   * ocr引擎
   */
  OcrEngineType?: number

  /**
   * 是否返回分行文本内容
   */
  IsReturnText?: boolean

  /**
   * 顺时针旋转角度
   */
  RotateTheAngle?: number

  /**
   * 自动适配方向,仅支持优图引擎
   */
  AutoFitDirection?: boolean

  /**
   * 坐标优化
   */
  AutoOptimizeCoordinate?: boolean

  /**
   * 是否开启图片压缩，开启时imageOriginalSize必须正确填写
   */
  IsScale?: boolean

  /**
   * 原始图片大小(单位byes),用来判断该图片是否需要压缩
   */
  ImageOriginalSize?: number

  /**
   * 采用后台默认值(2048Kb)
   */
  ScaleTargetSize?: number
}

/**
 * ImageToObject请求参数结构体
 */
export interface ImageToObjectRequest {
  /**
   * 图片列表，允许传入多张图片，目前只支持传入图片base64编码，图片url暂不支持
   */
  ImageInfoList: Array<ImageInfo>

  /**
   * 图片处理参数
   */
  HandleParam: HandleParam

  /**
   * 报告类型，目前支持11（检验报告），12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
   */
  Type: number

  /**
      * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为 False，则 Type 字段不能为 0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
      */
  IsUsedClassify: boolean
}

/**
 * TextToObject请求参数结构体
 */
export interface TextToObjectRequest {
  /**
   * 报告文本
   */
  Text: string

  /**
   * 报告类型，目前支持12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
   */
  Type: number

  /**
      * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为False，则Type字段不能为0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
      */
  IsUsedClassify: boolean
}

/**
 * 纵横比
 */
export interface AspectRatio {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Number: string

  /**
      * 关系
注意：此字段可能返回 null，表示取不到有效值。
      */
  Relation: string

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * 病症描述信息
 */
export interface SymptomInfo {
  /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Grade: BlockInfo

  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: Part

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
  Symptom: BlockInfo

  /**
      * 属性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Attrs: Array<BlockInfo>

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string
}

/**
 * 结节
 */
export interface TuberInfo {
  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: BlockInfo

  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: Part

  /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Size: Array<Size>

  /**
      * 多发
注意：此字段可能返回 null，表示取不到有效值。
      */
  Multiple: Multiple

  /**
      * 纵横比
注意：此字段可能返回 null，表示取不到有效值。
      */
  AspectRatio: AspectRatio

  /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
  Edge: BlockInfo

  /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
  InnerEcho: BlockInfo

  /**
      * 外部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
  RearEcho: BlockInfo

  /**
      * 弹性质地
注意：此字段可能返回 null，表示取不到有效值。
      */
  Elastic: Elastic

  /**
      * 形状
注意：此字段可能返回 null，表示取不到有效值。
      */
  Shape: BlockInfo

  /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShapeAttr: BlockInfo

  /**
      * 皮髓质信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkinMedulla: BlockInfo

  /**
      * 变化趋势
注意：此字段可能返回 null，表示取不到有效值。
      */
  Trend: BlockInfo

  /**
      * 钙化
注意：此字段可能返回 null，表示取不到有效值。
      */
  Calcification: BlockInfo

  /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
  Envelope: BlockInfo

  /**
      * 强化
注意：此字段可能返回 null，表示取不到有效值。
      */
  Enhancement: BlockInfo

  /**
      * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
      */
  LymphEnlargement: BlockInfo

  /**
      * 淋巴门
注意：此字段可能返回 null，表示取不到有效值。
      */
  LymphDoor: BlockInfo

  /**
      * 活动度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Activity: BlockInfo

  /**
      * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  Operation: BlockInfo

  /**
      * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
      */
  CDFI: BlockInfo

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  SizeStatus: BlockInfo

  /**
      * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
      */
  InnerEchoDistribution: BlockInfo

  /**
      * 内部回声类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InnerEchoType: Array<BlockInfo>

  /**
      * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
      */
  Outline: BlockInfo

  /**
      * 结构
注意：此字段可能返回 null，表示取不到有效值。
      */
  Structure: BlockInfo

  /**
      * 密度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Density: BlockInfo

  /**
      * 血管
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vas: BlockInfo

  /**
      * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cysticwall: BlockInfo

  /**
      * 被膜
注意：此字段可能返回 null，表示取不到有效值。
      */
  Capsule: BlockInfo

  /**
      * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsthmusThicknese: Size

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string
}

/**
 * 孕产史
 */
export interface ObstericalMedicalHistory {
  /**
      * 婚史
注意：此字段可能返回 null，表示取不到有效值。
      */
  MarriageHistory: string

  /**
      * 孕史
注意：此字段可能返回 null，表示取不到有效值。
      */
  FertilityHistory: string
}

/**
 * 多发
 */
export interface Multiple {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * 出入院信息
 */
export interface Hospitalization {
  /**
      * 入院时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AdmissionTime: string

  /**
      * 出院时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  DischargeTime: string

  /**
      * 住院天数
注意：此字段可能返回 null，表示取不到有效值。
      */
  AdmissionDays: string

  /**
      * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  AdmissionDignosis: string

  /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  AdmissionCondition: string

  /**
      * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiagnosisTreatment: string

  /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  DischargeDiagnosis: string

  /**
      * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
      */
  DischargeInstruction: string
}

/**
 * 家族疾病史
 */
export interface FamilyMedicalHistory {
  /**
      * 家族成员史
注意：此字段可能返回 null，表示取不到有效值。
      */
  RelativeHistory: string

  /**
      * 家族肿瘤史
注意：此字段可能返回 null，表示取不到有效值。
      */
  RelativeCancerHistory: string

  /**
      * 家族遗传史
注意：此字段可能返回 null，表示取不到有效值。
      */
  GeneticHistory: string
}

/**
 * 建议
 */
export interface Advice {
  /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text: string
}

/**
 * TextToObject返回参数结构体
 */
export interface TextToObjectResponse {
  /**
   * 报告结构化结果
   */
  Template: Template

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 门诊病历信息
 */
export interface MedicalRecordInfo {
  /**
      * 就诊日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiagnosisTime: string

  /**
      * 就诊科室
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiagnosisDepartmentName: string

  /**
      * 就诊医生
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiagnosisDoctorName: string

  /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClinicalDiagnosis: string

  /**
      * 主述
注意：此字段可能返回 null，表示取不到有效值。
      */
  MainNarration: string

  /**
      * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhysicalExamination: string

  /**
      * 检查结论
注意：此字段可能返回 null，表示取不到有效值。
      */
  InspectionFindings: string

  /**
      * 治疗意见
注意：此字段可能返回 null，表示取不到有效值。
      */
  TreatmentOpinion: string
}

/**
 * 部位信息
 */
export interface Part {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  NormPart: NormPart

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * ImageToClass返回参数结构体
 */
export interface ImageToClassResponse {
  /**
      * 分类结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  TextTypeList: Array<TextType>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 淋巴
 */
export interface Lymph {
  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: Part

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 转移数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferNum: number
}

/**
 * 侵犯扩散
 */
export interface Invas {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: Part

  /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Positive: string

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string
}

/**
 * 心电图指标项
 */
export interface EcgItem {
  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string
}

/**
 * 标准部位
 */
export interface NormPart {
  /**
      * 部位值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: string

  /**
      * 部位方向
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartDirection: string

  /**
      * 组织值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tissue: string

  /**
      * 组织方向
注意：此字段可能返回 null，表示取不到有效值。
      */
  TissueDirection: string

  /**
      * 上级部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Upper: string
}

/**
 * 医学资料
 */
export interface MedDoc {
  /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Advice: Advice

  /**
      * 诊断结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Diagnosis: Array<DiagCertItem>

  /**
      * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiseaseMedicalHistory: DiseaseMedicalHistory

  /**
   * 个人史
   */
  PersonalMedicalHistory: PersonalMedicalHistory

  /**
   * 婚孕史
   */
  ObstericalMedicalHistory: ObstericalMedicalHistory

  /**
   * 家族史
   */
  FamilyMedicalHistory: FamilyMedicalHistory

  /**
   * 月经史
   */
  MenstrualMedicalHistory: MenstrualMedicalHistory

  /**
   * 诊疗记录
   */
  TreatmentRecord: TreatmentRecord
}

/**
 * 内窥部位
 */
export interface EndoscopyOrgan {
  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: Part

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 部位别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartAlias: string

  /**
      * 症状描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  SymDescList: Array<BlockInfo>
}

/**
 * 患者信息
 */
export interface PatientInfo {
  /**
      * 患者姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 患者性别
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sex: string

  /**
      * 患者年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
  Age: string

  /**
      * 患者手机号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phone: string

  /**
      * 患者地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Address: string

  /**
      * 患者身份证
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdCard: string

  /**
      * 健康卡号
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthCardNo: string

  /**
      * 社保卡号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SocialSecurityCardNo: string

  /**
      * 出生日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  Birthday: string

  /**
      * 民族
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ethnicity: string

  /**
      * 婚姻状况
注意：此字段可能返回 null，表示取不到有效值。
      */
  Married: string

  /**
      * 职业
注意：此字段可能返回 null，表示取不到有效值。
      */
  Profession: string

  /**
      * 教育程度
注意：此字段可能返回 null，表示取不到有效值。
      */
  EducationBackground: string

  /**
      * 国籍
注意：此字段可能返回 null，表示取不到有效值。
      */
  Nationality: string

  /**
      * 籍贯
注意：此字段可能返回 null，表示取不到有效值。
      */
  BirthPlace: string

  /**
      * 医保类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  MedicalInsuranceType: string

  /**
      * 标准化年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgeNorm: string

  /**
      * 民族
注意：此字段可能返回 null，表示取不到有效值。
      */
  Nation: string

  /**
      * 婚姻代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  MarriedCode: string

  /**
      * 职业代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProfessionCode: string

  /**
      * 居民医保代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  MedicalInsuranceTypeCode: string
}

/**
 * 组织学等级
 */
export interface HistologyLevel {
  /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Grade: string

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string
}

/**
 * ImageToObject返回参数结构体
 */
export interface ImageToObjectResponse {
  /**
      * 报告结构化结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Template: Template

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 处方单
 */
export interface Prescription {
  /**
      * 药品列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  MedicineList: Array<Medicine>
}

/**
 * 个人史
 */
export interface PersonalMedicalHistory {
  /**
      * 出生史
注意：此字段可能返回 null，表示取不到有效值。
      */
  BirthPlace: string

  /**
      * 居住史
注意：此字段可能返回 null，表示取不到有效值。
      */
  LivePlace: string

  /**
      * 工作史
注意：此字段可能返回 null，表示取不到有效值。
      */
  Job: string

  /**
      * 吸烟史
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmokeHistory: string

  /**
      * 饮酒史
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlcoholicHistory: string
}

/**
 * 器官
 */
export interface Organ {
  /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Part: Part

  /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Size: Array<Size>

  /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
  Envelope: BlockInfo

  /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
  Edge: BlockInfo

  /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
  InnerEcho: BlockInfo

  /**
      * 腺体
注意：此字段可能返回 null，表示取不到有效值。
      */
  Gland: BlockInfo

  /**
      * 形状
注意：此字段可能返回 null，表示取不到有效值。
      */
  Shape: BlockInfo

  /**
      * 厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Thickness: BlockInfo

  /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShapeAttr: BlockInfo

  /**
      * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
      */
  CDFI: BlockInfo

  /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SymDesc: BlockInfo

  /**
      * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  SizeStatus: BlockInfo

  /**
      * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
      */
  Outline: BlockInfo

  /**
      * 结构
注意：此字段可能返回 null，表示取不到有效值。
      */
  Structure: BlockInfo

  /**
      * 密度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Density: BlockInfo

  /**
      * 血管
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vas: BlockInfo

  /**
      * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cysticwall: BlockInfo

  /**
      * 被膜
注意：此字段可能返回 null，表示取不到有效值。
      */
  Capsule: BlockInfo

  /**
      * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsthmusThicknese: Size

  /**
      * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
      */
  InnerEchoDistribution: BlockInfo

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>
}

/**
 * 诊断证明
 */
export interface DiagCert {
  /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Advice: Advice

  /**
      * 诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  Diagnosis: Array<DiagCertItem>
}

/**
 * 病历
 */
export interface TreatmentRecord {
  /**
      * 入院
注意：此字段可能返回 null，表示取不到有效值。
      */
  DmissionCondition: string

  /**
      * 主诉
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChiefComplaint: string

  /**
      * 现病史
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiseasePresent: string

  /**
      * 主要症状体征
注意：此字段可能返回 null，表示取不到有效值。
      */
  SymptomsAndSigns: string

  /**
      * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuxiliaryExamination: string

  /**
      * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
      */
  BodyExamination: string

  /**
      * 专科检查
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpecialistExamination: string

  /**
      * 精神检查
注意：此字段可能返回 null，表示取不到有效值。
      */
  MentalExamination: string

  /**
      * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  CheckRecord: string

  /**
      * 化验结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  InspectResult: string

  /**
      * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncisionHealing: string

  /**
      * 处理意见
注意：此字段可能返回 null，表示取不到有效值。
      */
  TreatmentSuggestion: string

  /**
      * 门诊随访要求
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowUpRequirements: string

  /**
      * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
  CheckAndTreatmentProcess: string

  /**
      * 手术经过
注意：此字段可能返回 null，表示取不到有效值。
      */
  SurgeryCondition: string

  /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConditionChanges: string

  /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  DischargeCondition: string

  /**
      * pTNM信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PTNM: string

  /**
      * pTNMM信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PTNMM: string

  /**
      * pTNMN信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PTNMN: string

  /**
      * pTNMT信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PTNMT: string

  /**
      * ECOG信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ECOG: string

  /**
      * NRS信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  NRS: string

  /**
      * KPS信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  KPS: string

  /**
      * 死亡日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeathDate: string

  /**
      * 复发日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  RelapseDate: string

  /**
      * 观测天数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ObservationDays: string
}

/**
 * 免疫接种证明
 */
export interface VaccineCertificate {
  /**
      * 免疫接种列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VaccineList: Array<Vaccination>
}

/**
 * 值
 */
export interface Value {
  /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Grade: string

  /**
      * 百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
  Percent: Array<number>

  /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Positive: string
}

/**
 * 结论
 */
export interface Summary {
  /**
      * 症状
注意：此字段可能返回 null，表示取不到有效值。
      */
  Symptom: Array<SymptomInfo>

  /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text: string
}

/**
 * 疾病史
 */
export interface DiseaseMedicalHistory {
  /**
      * 主病史
注意：此字段可能返回 null，表示取不到有效值。
      */
  MainDiseaseHistory: string

  /**
      * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
      */
  AllergyHistory: string

  /**
      * 传染疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
  InfectHistory: string

  /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
  OperationHistory: string

  /**
      * 输血史
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransfusionHistory: string
}

/**
 * 病理报告
 */
export interface PathologyReport {
  /**
      * 癌症部位
注意：此字段可能返回 null，表示取不到有效值。
      */
  CancerPart: Part

  /**
      * 癌症部位大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  CancerSize: Array<Size>

  /**
      * 描述文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  DescText: string

  /**
      * 组织学等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  HistologyLevel: HistologyLevel

  /**
      * 组织学类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  HistologyType: HistologyType

  /**
      * IHC信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  IHC: Array<IHCInfo>

  /**
      * 浸润深度
注意：此字段可能返回 null，表示取不到有效值。
      */
  InfiltrationDepth: BlockInfo

  /**
      * 肿瘤扩散
注意：此字段可能返回 null，表示取不到有效值。
      */
  Invasive: Array<Invas>

  /**
      * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
      */
  LymphNodes: Array<Lymph>

  /**
      * PTNM信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PTNM: BlockInfo

  /**
      * 病理报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  PathologicalReportType: BlockInfo

  /**
      * 报告原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportText: string

  /**
      * 标本类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  SampleType: BlockInfo

  /**
      * 结论文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryText: string
}

/**
 * TextToClass返回参数结构体
 */
export interface TextToClassResponse {
  /**
   * 分类结果
   */
  TextTypeList: Array<TextType>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织学类型
 */
export interface HistologyType {
  /**
      * 浸润
注意：此字段可能返回 null，表示取不到有效值。
      */
  Infiltration: string

  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string
}

/**
 * 块信息
 */
export interface BlockInfo {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Positive: string

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * 手术记录属性
 */
export interface SurgeryAttr {
  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * 文本类型
 */
export interface TextType {
  /**
      * 类别Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: number

  /**
      * 类别层级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 类别名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * 内窥镜描述
 */
export interface EndoscopyDesc {
  /**
      * 描述内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text: string

  /**
      * 器官
注意：此字段可能返回 null，表示取不到有效值。
      */
  Organ: Array<EndoscopyOrgan>
}

/**
 * 心电图详情
 */
export interface EcgDescription {
  /**
      * 心率
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeartRate: EcgItem

  /**
      * 心房率
注意：此字段可能返回 null，表示取不到有效值。
      */
  AuricularRate: EcgItem

  /**
      * 心室率
注意：此字段可能返回 null，表示取不到有效值。
      */
  VentricularRate: EcgItem

  /**
      * 节律
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rhythm: EcgItem

  /**
      * P波时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PDuration: EcgItem

  /**
      * QRS时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  QrsDuration: EcgItem

  /**
      * QRS电轴
注意：此字段可能返回 null，表示取不到有效值。
      */
  QrsAxis: EcgItem

  /**
      * P-R间期
注意：此字段可能返回 null，表示取不到有效值。
      */
  PRInterval: EcgItem

  /**
      * P-P间期
注意：此字段可能返回 null，表示取不到有效值。
      */
  PPInterval: EcgItem

  /**
      * R-R间期
注意：此字段可能返回 null，表示取不到有效值。
      */
  RRInterval: EcgItem

  /**
      * P-J间期
注意：此字段可能返回 null，表示取不到有效值。
      */
  PJInterval: EcgItem

  /**
      * Q-T间期
注意：此字段可能返回 null，表示取不到有效值。
      */
  QTInterval: EcgItem

  /**
      * qt/qtc间期
注意：此字段可能返回 null，表示取不到有效值。
      */
  QTCInterval: EcgItem

  /**
      * RV5/SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rv5SV1Amplitude: EcgItem

  /**
      * RV5+SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rv5AddSV1Amplitude: EcgItem

  /**
      * PRT电轴
注意：此字段可能返回 null，表示取不到有效值。
      */
  PRTAxis: EcgItem

  /**
      * RV5振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rv5Amplitude: EcgItem

  /**
      * SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
  SV1Amplitude: EcgItem

  /**
      * RV6/SV2
注意：此字段可能返回 null，表示取不到有效值。
      */
  RV6SV2: EcgItem

  /**
      * P/QRS/T电轴
注意：此字段可能返回 null，表示取不到有效值。
      */
  PQRSTAxis: EcgItem
}

/**
 * 检验指标项
 */
export interface IndicatorItem {
  /**
      * 英文缩写
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code: string

  /**
      * 标准缩写
注意：此字段可能返回 null，表示取不到有效值。
      */
  Scode: string

  /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 标准名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sname: string

  /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string

  /**
      * 参考范围
注意：此字段可能返回 null，表示取不到有效值。
      */
  Range: string

  /**
      * 上下箭头
注意：此字段可能返回 null，表示取不到有效值。
      */
  Arrow: string

  /**
      * 是否正常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Normal: boolean

  /**
      * 项目原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemString: string
}

/**
 * 图片信息
 */
export interface ImageInfo {
  /**
   * 图片id
   */
  Id: number

  /**
   * 图片url
   */
  Url?: string

  /**
   * 图片base64编码
   */
  Base64?: string
}

/**
 * 诊断证明项
 */
export interface DiagCertItem {
  /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: Array<string>
}

/**
 * 活检部位
 */
export interface BiopsyPart {
  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string
}

/**
 * 月经史
 */
export interface MenstrualMedicalHistory {
  /**
      * 末次月经时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastMenstrualPeriod: string

  /**
      * 经量
注意：此字段可能返回 null，表示取不到有效值。
      */
  MenstrualFlow: string

  /**
      * 月经初潮年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
  MenarcheAge: string

  /**
      * 是否来月经
注意：此字段可能返回 null，表示取不到有效值。
      */
  MenstruationOrNot: string

  /**
      * 月经周期
注意：此字段可能返回 null，表示取不到有效值。
      */
  MenstrualCycles: string

  /**
      * 月经持续天数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MenstrualPeriod: string
}

/**
 * ImageToClass请求参数结构体
 */
export interface ImageToClassRequest {
  /**
   * 图片列表，允许传入多张图片，支持传入图片的base64编码，暂不支持图片url
   */
  ImageInfoList: Array<ImageInfo>

  /**
   * 图片处理参数
   */
  HandleParam: HandleParam

  /**
   * 不填，默认为0
   */
  Type: number
}

/**
 * 大小
 */
export interface NormSize {
  /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Number: Array<string>

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string
}

/**
 * 病案首页
 */
export interface FirstPage {
  /**
      * 出入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  DischargeDiagnosis: Array<DischargeDiagnosis>

  /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  PathologicalDiagnosis: BlockInfo

  /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClinicalDiagnosis: BlockInfo
}

/**
 * 检查报告单
 */
export interface Check {
  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: Desc

  /**
      * 结论
注意：此字段可能返回 null，表示取不到有效值。
      */
  Summary: Summary
}

/**
 * 心电图诊断
 */
export interface EcgDiagnosis {
  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: Array<string>
}

/**
 * TextToClass请求参数结构体
 */
export interface TextToClassRequest {
  /**
   * 报告文本
   */
  Text: string
}

/**
 * 手术记录
 */
export interface Surgery {
  /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
  SurgeryHistory: SurgeryHistory
}

/**
 * 描述
 */
export interface Desc {
  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text: string

  /**
      * 器官
注意：此字段可能返回 null，表示取不到有效值。
      */
  Organ: Array<Organ>

  /**
      * 结节
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tuber: Array<TuberInfo>
}

/**
 * 出入院诊断
 */
export interface DischargeDiagnosis {
  /**
      * 表格位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableIndex: number

  /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutDiagnosis: BlockInfo

  /**
      * 疾病编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiseaseCode: BlockInfo

  /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  InStatus: BlockInfo

  /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutStatus: BlockInfo
}

/**
 * 心电图
 */
export interface Electrocardiogram {
  /**
      * 心电图详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  EcgDescription: EcgDescription

  /**
      * 心电图诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
  EcgDiagnosis: EcgDiagnosis
}

/**
 * 大小
 */
export interface Size {
  /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index: Array<number>

  /**
      * 标准大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  NormSize: NormSize

  /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
  Src: string

  /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}
