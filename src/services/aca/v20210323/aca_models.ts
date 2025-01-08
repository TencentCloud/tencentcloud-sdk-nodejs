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
 * 智能用药请求数据
 */
export interface SmartDrugInfoData {
  /**
   * 药品名称
   */
  DrugName: string
  /**
   * 规格
   */
  Specifications: string
  /**
   * 批准文号
   */
  ApprovalNumber: string
  /**
   * 生产厂家
   */
  Manufacturer: string
  /**
   * 药品ID
   */
  DrugId?: string
  /**
   * 诊断
   */
  Diagnosis?: string
  /**
   * 年龄
   */
  Age?: number
}

/**
 * 患者信息
 */
export interface PatientBaseInfo {
  /**
   * 性别
   */
  Sex: string
  /**
   * 身高 单位cm
   */
  Height: string
  /**
   * 体重 单位kg
   */
  Weight: string
  /**
   * 患者ID
   */
  PatientId: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 年龄
   */
  Age?: string
  /**
   * 出生地
   */
  BirthPlace?: string
  /**
   * 居住地
   */
  LivePlace?: string
  /**
   * 出生日期和年龄必须传一个
   */
  BirthDay?: string
}

/**
 * 智能预测接口请求对象
 */
export interface SmartPredictReqData {
  /**
   * 病历和处方信息
   */
  RequestCase: RequestCase
  /**
   * 0--默认值，同时返回**疾病预测**和**用药审查**结果<br>1--仅返回**疾病预测**结果<br>2--仅返回**用药审查**结果<br>已同时激活两个模块时，可按需使用
   */
  RequestType: number
}

/**
 * 处方药品信息
 */
export interface DrugUsage {
  /**
   * 药品ID
   */
  DrugId: string
  /**
   * 药品名称
   */
  DrugName: string
  /**
   * 日服药频次
   */
  TimePerDay: string
  /**
   * 给药途径
   */
  Usage: string
  /**
   * 处方ID，药品不同分组是传不同的处方ID
   */
  PrescriptionId: string
  /**
   * 每次剂量
   */
  DosagePerTime?: string
  /**
   * 每次剂量单位
   */
  DosagePerTimeUnit?: string
  /**
   * 单次服药时间
   */
  Time?: string
  /**
   * 给药周期
   */
  Cycle?: string
  /**
   * 单日剂量
   */
  DosagePerDay?: string
  /**
   * 疗程
   */
  Course?: string
  /**
   * 给药速度
   */
  Speed?: string
  /**
   * 处方生效时间戳，住院医嘱必须传(caseType =1)
   */
  BeginTime?: number
  /**
   * 处方失效时间戳，住院医嘱必须传(caseType =1)
   */
  EndTime?: number
  /**
   * 开具数量
   */
  Package?: string
  /**
   * 开具数量单位
   */
  PackageUnit?: string
  /**
   * 相同标志液体间进行配伍禁忌审核，不同标志间液体不进行配伍禁忌审核
   */
  GroupInj?: string
  /**
   * 处方金额
   */
  PrescriptionCharge?: string
  /**
   * 用药天数
   */
  MedicationDays?: string
}

/**
 * 同步科室信息返回
 */
export interface SyncDepartmentRespData {
  /**
   * 科室列表
   */
  List?: Array<Department>
}

/**
 * GetDrugIndications返回参数结构体
 */
export interface GetDrugIndicationsResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 适应症响应
   */
  Data?: GetDrugIndicationsResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 诊断列表
 */
export interface EmrDiagnosises {
  /**
   * 诊断名称
   */
  DiagnosisName: string
  /**
   * ICD代码
   */
  IcdCode?: string
}

/**
 * SyncStandardDict返回参数结构体
 */
export interface SyncStandardDictResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 字典信息
 */
export interface Dict {
  /**
   * 给药频次编码
   */
  FreqCode?: string
  /**
   * 给药频次名称
   */
  FreqName?: string
  /**
   * 是否禁用 0-启用 1-禁用
   */
  Disable?: number
  /**
   * 给药途径编码
   */
  UsageCode?: string
  /**
   * 给药途径名称
   */
  UsageName?: string
  /**
   * 科室ID
   */
  DeptId?: string
  /**
   * 科室名称
   */
  DeptName?: string
  /**
   * 科室区域类型 0:门诊  1:住院  2:门诊+住院
   */
  Scope?: number
  /**
   * 门诊开关
   */
  OutpatientOn?: boolean
  /**
   * 住院
   */
  InHospitalOn?: boolean
  /**
   * 诊断编码
   */
  DiagCode?: string
  /**
   * 诊断名称
   */
  DiagName?: string
  /**
   * ICD代码
   */
  IcdCode?: string
}

/**
 * 病历质控
 */
export interface EmrQuality {
  /**
   * 缺失体格检查项目
   */
  MissPhysicalExamination?: Array<string>
}

/**
 * SmartPredict返回参数结构体
 */
export interface SmartPredictResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 智能预测内容
   */
  Data?: SmartPredictRespData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 科室信息
 */
export interface Department {
  /**
   * 科室ID
   */
  Id: string
  /**
   * 科室名称
   */
  Name: string
  /**
   * 科室类型 0:门诊  1:住院  2:门诊+住院
   */
  Scope: number
  /**
   * 门诊区开关 true:此科室对应的门诊区开启智能审方功能, false:此科室对应的门诊区关闭智能审方功能; 仅对scope为0/2的科室生效
   */
  OutpatientOn: boolean
  /**
   * 住院区开关 true:此科室对应的住院区开启智能审方功能, false:此科室对应的住院区关闭智能审方功能; 仅对scope为1/2的科室生效
   */
  InHospitalOn: boolean
}

/**
 * 体格检查
 */
export interface PhysicalExam {
  /**
   * 脉搏，单位：次/分
   */
  Pulse: string
  /**
   * 呼吸，单位：次/分
   */
  Breathe: string
  /**
   * 体重，单位KG
   */
  Weight?: string
  /**
   * 体温，单位：℃
   */
  BodyTemperature?: string
  /**
   * 舒张压， 单位：mmHg
   */
  DiastolicPressure?: string
  /**
   * 收缩压， 单位：mmHg
   */
  SystolicPressure?: string
}

/**
 * 登录返回数据
 */
export interface LoginDataResp {
  /**
   * token
   */
  Token?: string
  /**
   * 过期时间
   */
  ExpiresIn?: number
  /**
   * 服务端时间戳，时间戳校验失败时返回
   */
  Timestamp?: number
}

/**
 * 药品文档信息
 */
export interface DocInfo {
  /**
   * 药品ID
   */
  DrugId?: string
  /**
   * 药品名称
   */
  DrugName?: string
  /**
   * 说明书地址
   */
  DocUrl?: string
}

/**
 * 危疾重症
 */
export interface CriticalInfo {
  /**
   * 危急重症类型 0:文字描述类 1:数值检查类
   */
  Type: number
  /**
   * 提示
   */
  Tips: string
}

/**
 * 适应症药品请求
 */
export interface IndicationsDrug {
  /**
   * 药品名称
   */
  DrugName: string
  /**
   * 规格
   */
  Specifications: string
  /**
   * 批准文号
   */
  ApprovalNumber: string
  /**
   * 生产厂家
   */
  Manufacturer: string
  /**
   * 药品ID
   */
  DrugId?: string
  /**
   * 商品名
   */
  TradeName?: string
  /**
   * 类型 默认0 0-西药 2-中药
   */
  Type?: number
}

/**
 * 风险信息
 */
export interface RiskInfo {
  /**
   * 药品ID
   */
  DrugId?: string
  /**
   * 药品名称
   */
  DrugName?: string
  /**
   * 风险等级：低级风险、中级风险、高级风险
   */
  RiskLevel?: string
  /**
   * 风险提示
   */
  RiskTips?: string
  /**
   * FDA分级
   */
  FdaLevel?: string
  /**
   * 关联药品名称
   */
  RelatedDrugName?: string
  /**
   * 关联处方ID
   */
  RelatedPrescriptionId?: string
}

/**
 * SyncStandardDict请求参数结构体
 */
export interface SyncStandardDictRequest {
  /**
   * 请求头
   */
  Header: CommonHeader
  /**
   * 字典数据
   */
  Data: SyncDictData
}

/**
 * SmartPredict请求参数结构体
 */
export interface SmartPredictRequest {
  /**
   * 请求头
   */
  Header: CommonHeader
  /**
   * 请求体
   */
  Data: SmartPredictReqData
}

/**
 * 患者过往病史
 */
export interface PatientHistory {
  /**
   * 病史
   */
  DiseaseHistory?: string
  /**
   * 治疗史
   */
  TreatmentHistory?: string
}

/**
 * GetDrugIndications请求参数结构体
 */
export interface GetDrugIndicationsRequest {
  /**
   * 请求头
   */
  Header: CommonHeader
  /**
   * 获取适应症请求
   */
  Data: GetDrugIndicationsReqData
}

/**
 * 推荐用法
 */
export interface RecommendedUsage {
  /**
   * 给药途径
   */
  UsageRoute?: string
  /**
   * 给药频率 格式为“最小频次,最大频次,频次单位,频次周期”，如"1,2,次,2"， 表示2天内最少给药1次，最大给药2次。
   */
  Frequency?: string
  /**
   * 给药剂量 格式为"最小剂量,最大剂量,剂量单位"，如"10,10,ml"，<br>表示每次最大给药量为10ml，最小给药量为10ml。
   */
  SingleDose?: string
}

/**
 * 登录请求对象
 */
export interface LoginData {
  /**
   * 医生ID
   */
  DoctorId: string
  /**
   * 医生名称
   */
  DoctorName?: string
  /**
   * 医生职级 主治医师、副主任医师、主任医师
   */
  DoctorLevel?: string
  /**
   * 医生科室 当前登录科室
   */
  DoctorDepartment?: string
  /**
   * 科室ID
   */
  DepartmentId?: string
}

/**
 * 药品属性
 */
export interface DurgPropertyInfo {
  /**
   * 药品类型 1:西药,2:中成药,3:中药,4:化学药品,5:生物制药
   */
  DrugType?: number
  /**
   * 抗菌药分类 1:抗真菌药物, 2:抗细菌药物, 3:抗结核药物, 4:其他抗菌药, 0:普通药品
   */
  AntibacterialType?: number
  /**
   * 抗菌药级别 1:非限制级, 2:限制级, 3:特殊使用级
   */
  AntibacterialClass?: number
  /**
   * 特殊药品类型 1:毒性药品, 2:麻醉药品, 3:放射药品, 4:精神一类药品, 5:精神二类药品, 6:其他特管药品， 7:贵重药品
   */
  SpeciallyDrugType?: number
  /**
   * 是否为基本药物 1:是, 2:否, 0:未知
   */
  IsBasicDrug?: number
  /**
   * 社保药品 1:甲类药品, 2:乙类药品, 3:双跨药品, 4:自费药品, 0:未知
   */
  ChargeType?: number
}

/**
 * 登出
 */
export interface LoginOutData {
  /**
   * 登录获取的token
   */
  Token: string
}

/**
 * 业务接口请求头
 */
export interface CommonHeader {
  /**
   * 机构ID
   */
  HospitalId: string
  /**
   * token
   */
  Token: string
}

/**
 * 病历质控
 */
export interface RecordQuality {
  /**
   * 病历是否有问题
   */
  Hit: boolean
  /**
   * 完整性问题
   */
  Completeness?: string
  /**
   * 及时性问题
   */
  Timeliness?: string
  /**
   * 逻辑性问题
   */
  Logical?: string
}

/**
 * SmartDrugInfo请求参数结构体
 */
export interface SmartDrugInfoRequest {
  /**
   * 请求头
   */
  Header?: CommonHeader
  /**
   * 药品信息
   */
  Data?: SmartDrugInfoData
}

/**
 * 上传药品数据
 */
export interface UploadDrugData {
  /**
   * 药品列表
   */
  Drugs?: Array<Drug>
}

/**
 * 生命体征风险
 */
export interface VitalSignsInfo {
  /**
   * 是否包含风险
   */
  Hit: boolean
  /**
   * 提示
   */
  Tips: string
}

/**
 * 患者家族病史
 */
export interface PatientFamilyHistory {
  /**
   * 家族病史 如家族病史不能分开，可传入此字段
   */
  FamilyDiseaseHistory?: string
  /**
   * 关系
   */
  Relation?: string
  /**
   * 当前情况
   */
  CurrentSituation?: string
}

/**
 * SyncDepartment请求参数结构体
 */
export interface SyncDepartmentRequest {
  /**
   * 请求头
   */
  Header: CommonHeader
  /**
   * 同步数据
   */
  Data: SyncDepartmentData
}

/**
 * 智能问诊响应数据
 */
export interface SmartPredictRespData {
  /**
   * 诊断辅助内容
   */
  DiagnosisInfo?: DiagnosisInfo
  /**
   * 用药风险信息
   */
  RationalDrugInfo?: RationalDrugInfo
}

/**
 * LoginHisTool返回参数结构体
 */
export interface LoginHisToolResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 登录返回token信息
   */
  Data?: LoginDataResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能用药响应
 */
export interface SmartDrugInfoResp {
  /**
   * 药品ID
   */
  DrugId?: string
  /**
   * 序列ID
   */
  SequenceId?: number
  /**
   * 药品哈希ID
   */
  DrugHashId?: string
  /**
   * 图片URL
   */
  ImgUrl?: string
  /**
   * 药品名称
   */
  DrugName?: string
  /**
   * 商品名
   */
  TradeName?: string
  /**
   * 英文名称
   */
  EnglishName?: string
  /**
   * 英文商品名
   */
  EnglishTradeName?: string
  /**
   * 拼音
   */
  Pinyin?: string
  /**
   * 其他名称
   */
  OtherNames?: string
  /**
   * 化学名称
   */
  ChemicalName?: string
  /**
   * 英文化学名称
   */
  EnglishChemicalName?: string
  /**
   * 批准文号
   */
  ApprovalNumber?: string
  /**
   * 药品属性标签 多个标签时 | 分隔，如抗菌药|抗生素|贵重药品
   */
  Property?: string
  /**
   * 药品成分
   */
  Ingredients?: string
  /**
   * 药品性状
   */
  PhenotypicTrait?: string
  /**
   * 适应症
   */
  Indications?: string
  /**
   * 规格
   */
  Specifications?: string
  /**
   * 用法用量
   */
  UsageAndDosage?: string
  /**
   * 推荐用法
   */
  RecommendedUsage?: RecommendedUsage
  /**
   * 不良反应
   */
  AdverseReaction?: string
  /**
   * 禁忌
   */
  Contraindication?: string
  /**
   * 注意事项
   */
  Attentions?: string
  /**
   * 药物过量
   */
  Overdose?: string
  /**
   * 孕妇及哺乳期妇女用药
   */
  PregnantAndLactatingWomen?: string
  /**
   * 老年患者用药
   */
  ElderlyPatients?: string
  /**
   * 儿童用药
   */
  PediatricDrugs?: string
  /**
   * 药物相互作用
   */
  Interactions?: string
  /**
   * 临床研究
   */
  ClinicalResearch?: string
  /**
   * 药理毒理
   */
  PharmacologyToxicology?: string
  /**
   * 药代动力学
   */
  Pharmacokinetics?: string
  /**
   * 警告
   */
  Warning?: string
  /**
   * 有效期
   */
  ExpireDate?: string
  /**
   * 贮藏
   */
  Storage?: string
  /**
   * 包装
   */
  Pack?: string
  /**
   * 生产企业
   */
  Manufacturer?: string
  /**
   * 生产企业地址
   */
  ManufacturerAddress?: string
  /**
   * 生产企业电话
   */
  ManufacturerPhone?: string
  /**
   * 生产企业邮箱
   */
  ManufacturerEmail?: string
  /**
   * 生产企业网站
   */
  ManufacturerWebsite?: string
  /**
   * 说明书制定和修订时间
   */
  DocRevisionTime?: string
  /**
   * 参考文献
   */
  References?: string
  /**
   * 剂型
   */
  DrugDosageForm?: string
  /**
   * 给药途径
   */
  DrugRoute?: string
  /**
   * 药品本位码
   */
  DrugBasicCode?: string
  /**
   * OTC标签
   */
  OctTag?: string
}

/**
 * 医生信息
 */
export interface DoctorInfo {
  /**
   * 医生ID
   */
  DoctorId?: string
  /**
   * 医生姓名
   */
  DoctorName?: string
  /**
   * 医生电话
   */
  DoctorPhone?: string
}

/**
 * UploadDrugs返回参数结构体
 */
export interface UploadDrugsResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 操作信息
   */
  Data?: OperateResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 同步字典数据
 */
export interface SyncDictData {
  /**
   * 医院ID
   */
  HospitalId?: string
  /**
   * 字典类型 1-给药频次 2-给药途径 3-科室 4-诊断
   */
  DictType?: number
  /**
   * 字典数据
   */
  Dicts?: Array<Dict>
}

/**
 * 药品信息
 */
export interface Drug {
  /**
   * 医院药品id
   */
  DrugOrgId: string
  /**
   * 医院药品通用名
   */
  DrugName: string
  /**
   * 医院药品商品名
   */
  DrugCommodityName: string
  /**
   * 医院药品规格
   */
  Specifications: string
  /**
   * 医院药品批准文号
   */
  ApprovalNumber: string
  /**
   * 生产厂商
   */
  Manufacturer: string
  /**
   * 剂型
   */
  DosageForm: string
  /**
   * 使用状态 0:启用 1:停用
   */
  Unuse: number
  /**
   * 剂型编码
   */
  DosageFormCode?: string
  /**
   * 抗菌药DDD值
   */
  DefinedDailyDose?: string
  /**
   * 药品单价
   */
  Amount?: string
  /**
   * 国家医保编码
   */
  YbCode?: string
  /**
   * 药品本位码
   */
  DrugBasicCode?: string
  /**
   * 药品属性
   */
  PropertyInfo?: DurgPropertyInfo
}

/**
 * 获取适应症请求
 */
export interface GetDrugIndicationsReqData {
  /**
   * 查询药品列表
   */
  Drugs?: Array<IndicationsDrug>
}

/**
 * 诊断、辅助内容
 */
export interface DiagnosisInfo {
  /**
   * 默认0，0:初诊-常规诊疗 1:复诊 2:检验检查/取药/咨询/疫苗 3:信息缺失 4:信息错误
   */
  IntentType?: number
  /**
   * 诊断风险
   */
  RiskInfo?: string
  /**
   * 疑似诊断列表
   */
  SuspectedDiagnosis?: Array<SuspectedDiagnosis>
  /**
   * 转诊提醒
   */
  ReferralInfo?: ReferralInfo
  /**
   * 危急重症
   */
  CriticalInfo?: Array<CriticalInfo>
  /**
   * 生命体征风险
   */
  VitalSignsInfo?: VitalSignsInfo
  /**
   * 鉴别诊断
   */
  DifferDiagnosis?: Array<DifferDiagnosis>
  /**
   * 病历质控
   */
  RecordQuality?: RecordQuality
  /**
   * 当前诊断
   */
  CurrentDiagnosis?: Array<CurrentDiagnosis>
  /**
   * 治疗方案
   */
  TreatmentGuide?: Array<TreatmentGuide>
  /**
   * 病历质控
   */
  EmrQuality?: EmrQuality
  /**
   * 健康处方
   */
  HealthPrescriptions?: Array<HealthPrescriptions>
}

/**
 * LoginOutHisTool返回参数结构体
 */
export interface LoginOutHisToolResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 响应数据
   */
  Data?: LoginOutResponseData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合理用药信息
 */
export interface RationalDrugInfo {
  /**
   * 是否有风险
   */
  Hit?: boolean
  /**
   * 药品用量风险
   */
  DrugUsages?: Array<RiskInfo>
  /**
   * 重复用药风险
   */
  DrugRepeats?: Array<RiskInfo>
  /**
   * 用药途径风险
   */
  DrugRoutes?: Array<RiskInfo>
  /**
   * 特殊人群风险
   */
  SpecialPopulations?: Array<RiskInfo>
  /**
   * 禁忌症风险
   */
  DrugTaboos?: Array<RiskInfo>
  /**
   * 相互作用风险
   */
  DrugInteractions?: Array<RiskInfo>
  /**
   * 配伍禁忌风险
   */
  DrugIncompatibility?: Array<RiskInfo>
  /**
   * 过敏风险
   */
  DrugAllergys?: Array<RiskInfo>
  /**
   * 适应症风险
   */
  DrugIndications?: Array<RiskInfo>
  /**
   * 异常提醒
   */
  Abnormals?: Array<Abnormals>
  /**
   * 药品列表
   */
  DrugList?: Array<DrugList>
}

/**
 * 健康处方
 */
export interface HealthPrescriptions {
  /**
   * 标题
   */
  Title?: string
  /**
   * 健康处方链接
   */
  Url?: string
  /**
   * 关键信息
   */
  KeyInformation?: string
}

/**
 * 异常提醒
 */
export interface Abnormals {
  /**
   * 类型
   */
  Type: string
  /**
   * 标题
   */
  Title: string
  /**
   * 异常原因 PatientInfo 病人信息缺失；OrderInfo 医嘱信息缺失； PrescriptionError 处方异常提醒
   */
  AbnormalReason: string
}

/**
 * 操作结果
 */
export interface OperateResp {
  /**
   * 操作结果
   */
  Dummy?: boolean
}

/**
 * SmartDrugInfo返回参数结构体
 */
export interface SmartDrugInfoResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 智能用药信息
   */
  Data?: SmartDrugInfoResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LoginOutHisTool请求参数结构体
 */
export interface LoginOutHisToolRequest {
  /**
   * 登出请求header
   */
  Header?: LoginOutHeader
  /**
   * 登出请求数据
   */
  Data?: LoginOutData
}

/**
 * 当前诊断
 */
export interface CurrentDiagnosis {
  /**
   * 诊断疾病
   */
  DiagnoseDisease: string
  /**
   * 疾病指南信息
   */
  DiseaseGuideInfo: string
  /**
   * 标准名称
   */
  StandardName: string
}

/**
 * 预测数据
 */
export interface RequestCase {
  /**
   * 处方类型 0:门诊处方；1:住院医嘱；2:急诊处方
   */
  CaseType: number
  /**
   * 主诉
   */
  ChiefComplaint: string
  /**
   * 科室
   */
  Department: string
  /**
   * 病历文书ID
医生每次书写病历文书的ID，文书内容包含主诉，病史，当前诊断等内容<br />门诊场景：门诊病历文书（带有主诉、病史、诊断及药品的）只有一份，这个编号只有一个。<br/>住院场景：假设住院3天，医生每天都会写一份病历文书（带有主诉、病史、诊断及医嘱药品的文书），那么有对应三个病历文书编号，每次调用预测接口都要传入不同的病历文书编号。注意：如两次调用预测接口，传相同的caseid，则在药师端管理平台的上一次审方记录中的诊断会被本次接口传入的诊断更新。
   */
  CaseId: string
  /**
   * 病历更新时间
   */
  CaseTime: string
  /**
   * 就诊ID
门诊处方传门诊号，住院医嘱传住院号；备注：门诊场景：用户挂一次号，看一个医生，这时候会有一个代表变成就诊的编号，下一次挂号就诊，这个编号会变。<br/>住院场景：用户本次办理入院，会有一个住院编号，仅代表本次住院，如果下次再住院，这个编号会变。
   */
  VisitId: string
  /**
   * 患者信息
   */
  PatientBaseinfo: PatientBaseInfo
  /**
   * 医生信息
   */
  DoctorInfo: DoctorInfo
  /**
   * 现病史
   */
  PresentIllness?: string
  /**
   * 患者其他信息，包含过敏史等
   */
  PatientOther?: string
  /**
   * 患者过往病史
   */
  PatientHistory?: PatientHistory
  /**
   * 患者家族病史
   */
  PatientFamilyHistory?: PatientFamilyHistory
  /**
   * 体格检查
   */
  PhysicalExam?: PhysicalExam
  /**
   * 诊断列表，第一个为首要诊断
   */
  EmrDiagnosises?: Array<EmrDiagnosises>
  /**
   * 处方列表
   */
  Prescriptions?: Array<DrugUsage>
}

/**
 * 药品适应症响应
 */
export interface GetDrugIndicationsResp {
  /**
   * 适应症
   */
  Indications?: Array<string>
  /**
   * 药品说明
   */
  DocInfos?: Array<DocInfo>
}

/**
 * 登出数据
 */
export interface LoginOutResponseData {
  /**
   * 服务器时间戳毫秒
   */
  Timestamp?: number
}

/**
 * 治疗方案
 */
export interface TreatmentGuide {
  /**
   * 医生诊断
   */
  DoctorDiagnosis: string
  /**
   * 疾病名称
   */
  DiseaseName: string
  /**
   * 治疗详情链接
   */
  TreatDetailUrl: string
  /**
   * 治疗方案
   */
  TreatPlan: string
  /**
   * 治疗原则
   */
  TreatPrinciple: string
}

/**
 * 登录接口请求头
 */
export interface LoginHeader {
  /**
   * 机构ID
   */
  HospitalId: string
  /**
   * 合作方ID
   */
  PartnerId: string
  /**
   * 加密时间戳毫秒
   */
  Timestamp: number
  /**
   * 签名数据
   */
  Signature: string
  /**
   * 平台ID，平台版登录时传入
   */
  PlatformId?: string
}

/**
 * 同步科室信息
 */
export interface SyncDepartmentData {
  /**
   * 操作类型 1:获取科室列表  2:同步科室信息（增、改） 3:删除科室
   */
  Cmd?: number
  /**
   * 科室列表
   */
  List?: Array<Department>
}

/**
 * SyncDepartment返回参数结构体
 */
export interface SyncDepartmentResponse {
  /**
   * 错误码
   */
  Code?: number
  /**
   * 错误信息
   */
  Message?: string
  /**
   * 响应数据
   */
  Data?: SyncDepartmentRespData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LoginHisTool请求参数结构体
 */
export interface LoginHisToolRequest {
  /**
   * 请求头
   */
  Header: LoginHeader
  /**
   * 请求体
   */
  Data: LoginData
}

/**
 * UploadDrugs请求参数结构体
 */
export interface UploadDrugsRequest {
  /**
   * 请求头数据
   */
  Header?: CommonHeader
  /**
   * 药品上传数据
   */
  Data?: UploadDrugData
}

/**
 * 鉴别诊断
 */
export interface DifferDiagnosis {
  /**
   * 鉴别名称
   */
  DifferName: string
  /**
   * 鉴别提示
   */
  DifferTips: string
  /**
   * 疾病指南信息
   */
  DiseaseGuideInfo: string
}

/**
 * 药品列表
 */
export interface DrugList {
  /**
   * 药品ID
   */
  DrugId?: string
  /**
   * 药品名称
   */
  DrugName?: string
  /**
   * 文档地址
   */
  DocUrl?: string
  /**
   * 是否找到
   */
  NotFound?: boolean
}

/**
 * 转诊提醒
 */
export interface ReferralInfo {
  /**
   * 命中
   */
  Hit: boolean
  /**
   * 提示
   */
  Tips: string
}

/**
 * 登出header对象
 */
export interface LoginOutHeader {
  /**
   * 合作方ID
   */
  PartnerId: string
  /**
   * 时间戳毫秒数
   */
  Timestamp: number
  /**
   * 签名值
   */
  Signature: string
  /**
   * 医院ID 单院版传这个
   */
  HospitalId?: string
  /**
   * 平台ID 平台版传这个
   */
  PlatformId?: string
}

/**
 * 疑似诊断
 */
export interface SuspectedDiagnosis {
  /**
   * 疾病名称
   */
  DiseaseName: string
  /**
   * ICD代码
   */
  IcdCode: string
  /**
   * 症状
   */
  Symptom: string
  /**
   * 体征
   */
  Physi: string
  /**
   * 检查
   */
  Inspection: string
  /**
   * 疾病指南信息
   */
  DiseaseGuideInfo: string
  /**
   * 置信度
   */
  Probability: number
}
