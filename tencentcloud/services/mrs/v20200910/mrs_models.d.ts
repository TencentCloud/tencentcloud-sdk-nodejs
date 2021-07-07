/**
 * 患者信息
 */
export interface PatientInfo {
    /**
      * 患者姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 患者性别
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sex: string;
    /**
      * 患者年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    Age: string;
    /**
      * 患者手机号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 患者地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * 患者身份证
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdCard: string;
    /**
      * 健康卡号
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCardNo: string;
    /**
      * 社保卡号
注意：此字段可能返回 null，表示取不到有效值。
      */
    SocialSecurityCardNo: string;
    /**
      * 出生日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Birthday: string;
    /**
      * 民族
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ethnicity: string;
    /**
      * 婚姻状况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Married: string;
    /**
      * 职业
注意：此字段可能返回 null，表示取不到有效值。
      */
    Profession: string;
    /**
      * 教育程度
注意：此字段可能返回 null，表示取不到有效值。
      */
    EducationBackground: string;
    /**
      * 国籍
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nationality: string;
    /**
      * 籍贯
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace: string;
    /**
      * 医保类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalInsuranceType: string;
}
/**
 * 检验报告
 */
export interface Indicator {
    /**
      * 检验指标项
注意：此字段可能返回 null，表示取不到有效值。
      */
    Indicators: Array<IndicatorItem>;
}
/**
 * ReportTextStructured返回参数结构体
 */
export interface ReportTextStructuredResponse {
    /**
      * 报告内容
      */
    Report?: TextReport;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 报告模板
 */
export interface Template {
    /**
      * 患者信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PatientInfo: PatientInfo;
    /**
      * 报告信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportInfo: ReportInfo;
    /**
      * 检查报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Check: Check;
    /**
      * 病理报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pathology: PathologyReport;
    /**
      * 出院报告，入院报告，门诊病历
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedDoc: MedDoc;
    /**
      * 诊断证明
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagCert: DiagCert;
    /**
      * 病案首页
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstPage: FirstPage;
    /**
      * 检验报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Indicator: Indicator;
    /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportType: string;
    /**
      * 门诊病历信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalRecordInfo: MedicalRecordInfo;
    /**
      * 出入院信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Hospitalization: Hospitalization;
    /**
      * 手术记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    Surgery: Surgery;
}
/**
 * 弹性质地
 */
export interface Elastic {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 分数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 转移
 */
export interface Metastasis {
    /**
      * 索引位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: number;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: string;
    /**
      * 局部总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalNum: string;
    /**
      * 转移数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferNum: string;
}
/**
 * 病史
 */
export interface DiseaseHistory {
    /**
      * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Allergy: string;
    /**
      * 传染疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Infect: string;
    /**
      * 主要病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainDisease: string;
    /**
      * 手术外伤史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 输血史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Transfusion: string;
    /**
      * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Disease: string;
}
/**
 * Ihc信息
 */
export interface IHCInfo {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 值
      */
    Value: Value;
}
/**
 * 手术史
 */
export interface SurgeryHistory {
    /**
      * 手术名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryName: SurgeryAttr;
    /**
      * 手术日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryDate: SurgeryAttr;
    /**
      * 术前诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreoperativePathology: SurgeryAttr;
    /**
      * 术中诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntraoperativePathology: SurgeryAttr;
    /**
      * 术后诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostoperativePathology: SurgeryAttr;
    /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosis: SurgeryAttr;
}
/**
 * ImageToObject请求参数结构体
 */
export interface ImageToObjectRequest {
    /**
      * 图片列表，允许传入多张图片，支持传入图片的url或base64编码
      */
    ImageInfoList: Array<ImageInfo>;
    /**
      * 图片处理参数
      */
    HandleParam: HandleParam;
    /**
      * 报告类型，目前支持11（检验报告），12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
      */
    Type: number;
    /**
      * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为 False，则 Type 字段不能为 0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
      */
    IsUsedClassify: boolean;
}
/**
 * 结论
 */
export interface Summary {
    /**
      * 症状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Symptom: Array<SymptomInfo>;
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
}
/**
 * 诊治信息
 */
export interface Treatment {
    /**
      * 主诉
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChiefComplaint: string;
    /**
      * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionDiagnosis: string;
}
/**
 * 图片处理参数
 */
export interface HandleParam {
    /**
      * ocr引擎
      */
    OcrEngineType?: number;
    /**
      * 是否返回分行文本内容
      */
    IsReturnText?: boolean;
    /**
      * 顺时针旋转角度
      */
    RotateTheAngle?: number;
    /**
      * 自动适配方向,仅支持优图引擎
      */
    AutoFitDirection?: boolean;
    /**
      * 坐标优化
      */
    AutoOptimizeCoordinate?: boolean;
    /**
      * 是否开启图片压缩，开启时imageOriginalSize必须正确填写
      */
    IsScale?: boolean;
    /**
      * 原始图片大小(单位byes),用来判断该图片是否需要压缩
      */
    ImageOriginalSize?: number;
    /**
      * 采用后台默认值(2048Kb)
      */
    ScaleTargetSize?: number;
}
/**
 * ReportImageStructured请求参数结构体
 */
export interface ReportImageStructuredRequest {
    /**
      * 医疗报告图片URL
      */
    ImageURL?: string;
    /**
      * 医疗报告图片base64编码后内容
      */
    ImageBase64?: string;
}
/**
 * 检查所见内容，常见于病理，检查报告
 */
export interface Finding {
    /**
      * 原文文本内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 肿瘤结节列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TuberList: Array<Tuber>;
}
/**
 * 文本类型报告返回结果
 */
export interface TextReport {
    /**
      * 报告类别信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    KindSet: Array<KindItem>;
    /**
      * 基本信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicInfo: BasicInfo;
    /**
      * 个人隐私信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersonalInfo: PersonalInfo;
    /**
      * 检验指标表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestList: Array<TestItem>;
    /**
      * 检查报告内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Inspection: Inspection;
    /**
      * 病历资料
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaseHistory: CaseHistory;
    /**
      * 病理检查内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pathology: Pathology;
}
/**
 * 纵横比
 */
export interface AspectRatio {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Number: string;
    /**
      * 关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    Relation: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 病症描述信息
 */
export interface SymptomInfo {
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: BlockInfo;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    Symptom: BlockInfo;
    /**
      * 属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Attrs: Array<BlockInfo>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 检查报告结论，常见于病理检查报告
 */
export interface Conclusion {
    /**
      * 原文文本内容
      */
    Text: string;
    /**
      * 病症列表
      */
    SymptomList: Array<Symptom>;
}
/**
 * 孕产史
 */
export interface ObstericalMedicalHistory {
    /**
      * 婚史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarriageHistory: string;
    /**
      * 孕史
注意：此字段可能返回 null，表示取不到有效值。
      */
    FertilityHistory: string;
}
/**
 * 多发
 */
export interface Multiple {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count: number;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 出入院信息
 */
export interface Hospitalization {
    /**
      * 入院时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionTime: string;
    /**
      * 出院时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeTime: string;
    /**
      * 住院天数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionDays: string;
    /**
      * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionDignosis: string;
    /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionCondition: string;
    /**
      * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagnosisTreatment: string;
    /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosis: string;
    /**
      * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeInstruction: string;
}
/**
 * 家族疾病史
 */
export interface FamilyMedicalHistory {
    /**
      * 家族成员史
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeHistory: string;
    /**
      * 家族肿瘤史
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeCancerHistory: string;
    /**
      * 家族遗传史
注意：此字段可能返回 null，表示取不到有效值。
      */
    GeneticHistory: string;
}
/**
 * 建议
 */
export interface Advice {
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
}
/**
 * 报告图片信息
 */
export interface ImageText {
    /**
      * 文字内容可信度，0-100评分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Confidence: number;
    /**
      * 图片文本内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 文本旋转角度
注意：此字段可能返回 null，表示取不到有效值。
      */
    RotateAngle: number;
}
/**
 * 可见病症内容
 */
export interface Symptom {
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: Attribute;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Attribute;
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: Attribute;
    /**
      * 性质
注意：此字段可能返回 null，表示取不到有效值。
      */
    AttrList: Array<Attribute>;
}
/**
 * 手术记录属性
 */
export interface SurgeryAttr {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 肿瘤结节
 */
export interface Tuber {
    /**
      * 部位信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Attribute;
    /**
      * 类型信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: Attribute;
    /**
      * 大小信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeList: Array<Attribute>;
    /**
      * 形态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape: Attribute;
    /**
      * 边缘信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge: Attribute;
    /**
      * CDFI信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI: Attribute;
    /**
      * 代谢信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metabolism: Attribute;
    /**
      * 淋巴结信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphGland: Attribute;
    /**
      * 淋巴门信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphDoor: Attribute;
    /**
      * 皮髓质信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkinMedulla: Attribute;
    /**
      * 内部回声信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho: Attribute;
    /**
      * 外部回声信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    RearEcho: Attribute;
    /**
      * 包膜信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope: Attribute;
    /**
      * 钙化信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Calcification: Attribute;
    /**
      * 强化信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enhancement: Attribute;
    /**
      * 纵横比信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AspectRatio: Attribute;
}
/**
 * 门诊病历信息
 */
export interface MedicalRecordInfo {
    /**
      * 就诊日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagnosisTime: string;
    /**
      * 就诊科室
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagnosisDepartmentName: string;
    /**
      * 就诊医生
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagnosisDoctorName: string;
    /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClinicalDiagnosis: string;
    /**
      * 主述
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainNarration: string;
    /**
      * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhysicalExamination: string;
    /**
      * 检查结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectionFindings: string;
    /**
      * 治疗意见
注意：此字段可能返回 null，表示取不到有效值。
      */
    TreatmentOpinion: string;
}
/**
 * 部位信息
 */
export interface Part {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormPart: NormPart;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 结节
 */
export interface TuberInfo {
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: BlockInfo;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: Array<Size>;
    /**
      * 多发
注意：此字段可能返回 null，表示取不到有效值。
      */
    Multiple: Multiple;
    /**
      * 纵横比
注意：此字段可能返回 null，表示取不到有效值。
      */
    AspectRatio: AspectRatio;
    /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge: BlockInfo;
    /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho: BlockInfo;
    /**
      * 外部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    RearEcho: BlockInfo;
    /**
      * 弹性质地
注意：此字段可能返回 null，表示取不到有效值。
      */
    Elastic: Elastic;
    /**
      * 形状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape: BlockInfo;
    /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShapeAttr: BlockInfo;
    /**
      * 皮髓质信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkinMedulla: BlockInfo;
    /**
      * 变化趋势
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trend: BlockInfo;
    /**
      * 钙化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Calcification: BlockInfo;
    /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope: BlockInfo;
    /**
      * 强化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enhancement: BlockInfo;
    /**
      * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphEnlargement: BlockInfo;
    /**
      * 淋巴门
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphDoor: BlockInfo;
    /**
      * 活动度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Activity: BlockInfo;
    /**
      * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: BlockInfo;
    /**
      * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI: BlockInfo;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeStatus: BlockInfo;
    /**
      * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoDistribution: BlockInfo;
    /**
      * 内部回声类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoType: Array<BlockInfo>;
    /**
      * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
      */
    Outline: BlockInfo;
    /**
      * 结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Structure: BlockInfo;
    /**
      * 密度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Density: BlockInfo;
    /**
      * 血管
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vas: BlockInfo;
    /**
      * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cysticwall: BlockInfo;
    /**
      * 被膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capsule: BlockInfo;
    /**
      * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsthmusThicknese: Size;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * ImageToClass返回参数结构体
 */
export interface ImageToClassResponse {
    /**
      * 分类结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextTypeList: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 淋巴
 */
export interface Lymph {
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 转移数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferNum: number;
}
/**
 * 侵犯扩散
 */
export interface Invas {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 报告基本信息
 */
export interface ReportInfo {
    /**
      * 医院名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Hospital: string;
    /**
      * 科室名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DepartmentName: string;
    /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BillingTime: string;
    /**
      * 报告时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportTime: string;
    /**
      * 检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectTime: string;
    /**
      * 检查号
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckNum: string;
    /**
      * 影像号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageNum: string;
    /**
      * 放射号
注意：此字段可能返回 null，表示取不到有效值。
      */
    RadiationNum: string;
    /**
      * 检验号
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestNum: string;
    /**
      * 门诊号
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutpatientNum: string;
    /**
      * 病理号
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologyNum: string;
    /**
      * 住院号
注意：此字段可能返回 null，表示取不到有效值。
      */
    InHospitalNum: string;
    /**
      * 样本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleNum: string;
    /**
      * 标本种类
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleType: string;
    /**
      * 病历号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalRecordNum: string;
    /**
      * 报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportName: string;
    /**
      * 超声号
注意：此字段可能返回 null，表示取不到有效值。
      */
    UltraNum: string;
    /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    Diagnose: string;
}
/**
 * 报告基本信息
 */
export interface BasicInfo {
    /**
      * 医院名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    HospitalName: string;
    /**
      * 科室名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DepartmentName: string;
    /**
      * 报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportName: string;
    /**
      * 报告时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportTime: string;
    /**
      * 门诊号
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutpatientNum: string;
    /**
      * 住院号
注意：此字段可能返回 null，表示取不到有效值。
      */
    InHospitalNum: string;
    /**
      * 检查号
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectionNum: string;
    /**
      * 影像号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageNum: string;
    /**
      * 放射号
注意：此字段可能返回 null，表示取不到有效值。
      */
    RadiationNum: string;
    /**
      * 病理号
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologyNum: string;
    /**
      * 床位号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BedNum: string;
    /**
      * 入院时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InHospitalTime: string;
    /**
      * 出院时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutHospitalTime: string;
    /**
      * 住院治疗时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    CureDuration: string;
    /**
      * 住院次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    HospitalizationTimes: string;
    /**
      * 送检检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectionTime: string;
}
/**
 * 标准部位
 */
export interface NormPart {
    /**
      * 部位值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: string;
    /**
      * 部位方向
注意：此字段可能返回 null，表示取不到有效值。
      */
    PartDirection: string;
    /**
      * 组织值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tissue: string;
    /**
      * 组织方向
注意：此字段可能返回 null，表示取不到有效值。
      */
    TissueDirection: string;
    /**
      * 上级部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Upper: string;
}
/**
 * 医学资料
 */
export interface MedDoc {
    /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Advice: Advice;
    /**
      * 诊断结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Diagnosis: Array<DiagCertItem>;
    /**
      * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseMedicalHistory: DiseaseMedicalHistory;
    /**
      * 个人史
      */
    PersonalMedicalHistory: PersonalMedicalHistory;
    /**
      * 婚孕史
      */
    ObstericalMedicalHistory: ObstericalMedicalHistory;
    /**
      * 家族史
      */
    FamilyMedicalHistory: FamilyMedicalHistory;
    /**
      * 月经史
      */
    MenstrualMedicalHistory: MenstrualMedicalHistory;
    /**
      * 诊疗记录
      */
    TreatmentRecord: TreatmentRecord;
}
/**
 * 描述
 */
export interface Desc {
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 器官
注意：此字段可能返回 null，表示取不到有效值。
      */
    Organ: Array<Organ>;
    /**
      * 结节
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tuber: Array<TuberInfo>;
}
/**
 * 医疗事例
 */
export interface Case {
    /**
      * 时间发生时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Time: string;
    /**
      * 事件提取值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 类型描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: string;
    /**
      * 对应原文内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
}
/**
 * 检验指标内容
 */
export interface TestItem {
    /**
      * 标准名称编号，利用该编号可以获取详细的指标含义和解释
注意：此字段可能返回 null，表示取不到有效值。
      */
    ID: number;
    /**
      * 英文名称或简称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 项目指标名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 检验结果值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 正常结果范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    Range: string;
    /**
      * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Util: string;
    /**
      * 是否正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsNormal: boolean;
    /**
      * 是否超标
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsExceed: boolean;
}
/**
 * ImageToObject返回参数结构体
 */
export interface ImageToObjectResponse {
    /**
      * 报告结构化结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Template: Template;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 个人史
 */
export interface PersonalMedicalHistory {
    /**
      * 出生史
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace: string;
    /**
      * 居住史
注意：此字段可能返回 null，表示取不到有效值。
      */
    LivePlace: string;
    /**
      * 工作史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job: string;
    /**
      * 吸烟史
注意：此字段可能返回 null，表示取不到有效值。
      */
    SmokeHistory: string;
    /**
      * 饮酒史
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlcoholicHistory: string;
}
/**
 * 器官
 */
export interface Organ {
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: Array<Size>;
    /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope: BlockInfo;
    /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge: BlockInfo;
    /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho: BlockInfo;
    /**
      * 腺体
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gland: BlockInfo;
    /**
      * 形状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape: BlockInfo;
    /**
      * 厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Thickness: BlockInfo;
    /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShapeAttr: BlockInfo;
    /**
      * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI: BlockInfo;
    /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymDesc: BlockInfo;
    /**
      * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeStatus: BlockInfo;
    /**
      * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
      */
    Outline: BlockInfo;
    /**
      * 结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Structure: BlockInfo;
    /**
      * 密度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Density: BlockInfo;
    /**
      * 血管
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vas: BlockInfo;
    /**
      * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cysticwall: BlockInfo;
    /**
      * 被膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capsule: BlockInfo;
    /**
      * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsthmusThicknese: Size;
    /**
      * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoDistribution: BlockInfo;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
}
/**
 * 诊断证明
 */
export interface DiagCert {
    /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Advice: Advice;
    /**
      * 诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    Diagnosis: Array<DiagCertItem>;
}
/**
 * 个人信息
 */
export interface PersonalInfo {
    /**
      * 姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 性别
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gender: string;
    /**
      * 年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    Age: string;
    /**
      * 身份证号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    IDCard: string;
    /**
      * 健康卡号
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCardNum: string;
    /**
      * 社保号
注意：此字段可能返回 null，表示取不到有效值。
      */
    SocialSecurityCardNum: string;
    /**
      * 出生日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Birthday: string;
    /**
      * 民族
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ethnicity: string;
    /**
      * 国籍
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nationality: string;
    /**
      * 婚姻状况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Married: string;
    /**
      * 职业
注意：此字段可能返回 null，表示取不到有效值。
      */
    Profession: string;
    /**
      * 教育程度
注意：此字段可能返回 null，表示取不到有效值。
      */
    EducationBackground: string;
    /**
      * 籍贯
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace: string;
    /**
      * 医保卡类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalInsuranceType: string;
    /**
      * 联系电话
注意：此字段可能返回 null，表示取不到有效值。
      */
    LinkPhone: string;
    /**
      * 联系地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    LinkAddress: string;
    /**
      * 家属姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    KinsfolkName: string;
    /**
      * 家属关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    KinsfolkRelation: string;
    /**
      * 家属联系电话
注意：此字段可能返回 null，表示取不到有效值。
      */
    KinsfolkPhone: string;
}
/**
 * 病历
 */
export interface TreatmentRecord {
    /**
      * 入院
注意：此字段可能返回 null，表示取不到有效值。
      */
    DmissionCondition: string;
    /**
      * 主诉
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChiefComplaint: string;
    /**
      * 现病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseasePresent: string;
    /**
      * 主要症状体征
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymptomsAndSigns: string;
    /**
      * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuxiliaryExamination: string;
    /**
      * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    BodyExamination: string;
    /**
      * 专科检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialistExamination: string;
    /**
      * 精神检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    MentalExamination: string;
    /**
      * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckRecord: string;
    /**
      * 化验结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectResult: string;
    /**
      * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncisionHealing: string;
    /**
      * 处理意见
注意：此字段可能返回 null，表示取不到有效值。
      */
    TreatmentSuggestion: string;
    /**
      * 门诊随访要求
注意：此字段可能返回 null，表示取不到有效值。
      */
    FollowUpRequirements: string;
    /**
      * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckAndTreatmentProcess: string;
    /**
      * 手术经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryCondition: string;
    /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionChanges: string;
    /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeCondition: string;
    /**
      * pTNM信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM: string;
    /**
      * pTNMM信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMM: string;
    /**
      * pTNMN信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMN: string;
    /**
      * pTNMT信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMT: string;
    /**
      * ECOG信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ECOG: string;
    /**
      * NRS信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    NRS: string;
    /**
      * KPS信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    KPS: string;
    /**
      * 死亡日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeathDate: string;
    /**
      * 复发日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelapseDate: string;
    /**
      * 观测天数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObservationDays: string;
}
/**
 * TextToClass请求参数结构体
 */
export interface TextToClassRequest {
    /**
      * 报告文本
      */
    Text: string;
}
/**
 * 检查报告单
 */
export interface Check {
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: Desc;
    /**
      * 结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    Summary: Summary;
}
/**
 * ReportTextStructured请求参数结构体
 */
export interface ReportTextStructuredRequest {
    /**
      * 报告文本内容
      */
    Text: string;
}
/**
 * 侵犯扩散
 */
export interface Invasive {
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: string;
    /**
      * 阴阳性
      */
    Positive: string;
}
/**
 * 疾病史
 */
export interface DiseaseMedicalHistory {
    /**
      * 主病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainDiseaseHistory: string;
    /**
      * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllergyHistory: string;
    /**
      * 传染疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfectHistory: string;
    /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationHistory: string;
    /**
      * 输血史
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransfusionHistory: string;
}
/**
 * 病理报告
 */
export interface PathologyReport {
    /**
      * 癌症部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    CancerPart: Part;
    /**
      * 癌症部位大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    CancerSize: Array<Size>;
    /**
      * 描述文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DescText: string;
    /**
      * 组织学等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyLevel: HistologyLevel;
    /**
      * 组织学类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyType: HistologyType;
    /**
      * IHC信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    IHC: Array<IHCInfo>;
    /**
      * 浸润深度
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfiltrationDepth: BlockInfo;
    /**
      * 肿瘤扩散
注意：此字段可能返回 null，表示取不到有效值。
      */
    Invasive: Array<Invas>;
    /**
      * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphNodes: Array<Lymph>;
    /**
      * PTNM信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM: BlockInfo;
    /**
      * 病理报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalReportType: BlockInfo;
    /**
      * 报告原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportText: string;
    /**
      * 标本类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleType: BlockInfo;
    /**
      * 结论文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    SummaryText: string;
}
/**
 * 大小
 */
export interface Size {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 标准大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormSize: NormSize;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * TextToClass返回参数结构体
 */
export interface TextToClassResponse {
    /**
      * 分类结果
      */
    TextTypeList: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 值
 */
export interface Value {
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: string;
    /**
      * 百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
    Percent: Array<number>;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
}
/**
 * 个人史
 */
export interface PersonalHistory {
    /**
      * 出生地
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace: string;
    /**
      * 工作史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job: string;
    /**
      * 旅居史
注意：此字段可能返回 null，表示取不到有效值。
      */
    LivePlace: string;
    /**
      * 个人史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Personal: string;
    /**
      * 吸烟史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Smoke: string;
    /**
      * 饮酒史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alcoholic: string;
}
/**
 * TextToObject请求参数结构体
 */
export interface TextToObjectRequest {
    /**
      * 报告文本
      */
    Text: string;
    /**
      * 报告类型，目前支持12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
      */
    Type: number;
    /**
      * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为False，则Type字段不能为0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
      */
    IsUsedClassify: boolean;
}
/**
 * 组织学类型
 */
export interface HistologyType {
    /**
      * 浸润
注意：此字段可能返回 null，表示取不到有效值。
      */
    Infiltration: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
}
/**
 * 块信息
 */
export interface BlockInfo {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 月经史
 */
export interface MenstrualMedicalHistory {
    /**
      * 末次月经时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastMenstrualPeriod: string;
    /**
      * 经量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualFlow: string;
    /**
      * 月经初潮年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenarcheAge: string;
    /**
      * 是否来月经
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstruationOrNot: string;
    /**
      * 月经周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualCycles: string;
    /**
      * 月经持续天数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualPeriod: string;
}
/**
 * 检查报告内容
 */
export interface Inspection {
    /**
      * 检查所见
注意：此字段可能返回 null，表示取不到有效值。
      */
    Finding: Finding;
    /**
      * 检查结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    Conclusion: Conclusion;
}
/**
 * 手术记录
 */
export interface Surgery {
    /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryHistory: SurgeryHistory;
}
/**
 * 文本类型
 */
export interface TextType {
    /**
      * 类别Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * 类别层级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Level: number;
    /**
      * 类别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 组织学等级
 */
export interface HistologyLevel {
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 检验指标项
 */
export interface IndicatorItem {
    /**
      * 英文缩写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 标准缩写
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scode: string;
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 标准名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sname: string;
    /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
    /**
      * 参考范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    Range: string;
    /**
      * 上下箭头
注意：此字段可能返回 null，表示取不到有效值。
      */
    Arrow: string;
    /**
      * 是否正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Normal: boolean;
    /**
      * 项目原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    ItemString: string;
}
/**
 * 图片信息
 */
export interface ImageInfo {
    /**
      * 图片id
      */
    Id: number;
    /**
      * 图片url
      */
    Url?: string;
    /**
      * 图片base64编码
      */
    Base64?: string;
}
/**
 * 诊断证明项
 */
export interface DiagCertItem {
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: Array<string>;
}
/**
 * 婚育史
 */
export interface MarryHistory {
    /**
      * 结婚史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Marriage: string;
    /**
      * 生育史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Fertility: string;
}
/**
 * ReportImageStructured返回参数结构体
 */
export interface ReportImageStructuredResponse {
    /**
      * 报告内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Report?: ImageReport;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 提取属性内容
 */
export interface Attribute {
    /**
      * 原文文本内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 标准化提取值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 对应上级文本位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: number;
}
/**
 * 月经史
 */
export interface MenstrualHistory {
    /**
      * 是否来月经
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsOrNot: string;
    /**
      * 月经初潮年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenarcheAge: string;
    /**
      * 末次月经时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastTime: string;
    /**
      * 经量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Flow: string;
    /**
      * 月经周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cycles: string;
    /**
      * 行经天数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: string;
}
/**
 * ImageToClass请求参数结构体
 */
export interface ImageToClassRequest {
    /**
      * 图片列表，允许传入多张图片，支持传入图片的url或base64编码
      */
    ImageInfoList: Array<ImageInfo>;
    /**
      * 图片处理参数
      */
    HandleParam: HandleParam;
    /**
      * 图片类型，目前支持11（检验报告），12（检查报告），15（病理报告），218（诊断证明）。
      */
    Type: number;
}
/**
 * 大小
 */
export interface NormSize {
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Number: Array<string>;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
}
/**
 * 病案首页
 */
export interface FirstPage {
    /**
      * 出入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosis: Array<DischargeDiagnosis>;
    /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalDiagnosis: BlockInfo;
    /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClinicalDiagnosis: BlockInfo;
}
/**
 * 病历资料
 */
export interface CaseHistory {
    /**
      * 诊治信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Treatment: Treatment;
    /**
      * 健康史信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthHistory: HealthHistory;
    /**
      * 病例时间轴
      */
    CaseHistoryList: Array<Case>;
}
/**
 * TextToObject返回参数结构体
 */
export interface TextToObjectResponse {
    /**
      * 报告结构化结果
      */
    Template: Template;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 家族史
 */
export interface FamilyHistory {
    /**
      * 家族成员
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeMember: string;
    /**
      * 家族肿瘤史
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeCancer: string;
    /**
      * 家族遗传史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Genetic: string;
}
/**
 * 健康史信息
 */
export interface HealthHistory {
    /**
      * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseHistory: DiseaseHistory;
    /**
      * 家族史
注意：此字段可能返回 null，表示取不到有效值。
      */
    FamilyHistory: FamilyHistory;
    /**
      * 婚育史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarryHistory: MarryHistory;
    /**
      * 个人史
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersonalHistory: PersonalHistory;
    /**
      * 月经史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualHistory: MenstrualHistory;
}
/**
 * 免疫组化项目
 */
export interface IHC {
    /**
      * 索引位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: string;
    /**
      * 百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
    Percent: string;
    /**
      * 阴阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
}
/**
 * 病理内容
 */
export interface Pathology {
    /**
      * 病理类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalType: string;
    /**
      * 侵润深度
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfiltrationDepth: string;
    /**
      * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM: string;
    /**
      * 远处转移
注意：此字段可能返回 null，表示取不到有效值。
      */
    DistanceMetastasis: string;
    /**
      * 影像诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    SummaryText: string;
    /**
      * 影像所见
注意：此字段可能返回 null，表示取不到有效值。
      */
    DescText: string;
    /**
      * 组织学类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyType: string;
    /**
      * 组织学等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyLevel: string;
    /**
      * 标本类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleType: string;
    /**
      * 标本部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    SamplePart: string;
    /**
      * 标本大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleSize: string;
    /**
      * 肿瘤扩散
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvasiveList: Array<Invasive>;
    /**
      * 肿瘤转移
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetastasisList: Array<Metastasis>;
    /**
      * 免疫组化信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    IHCList: Array<IHC>;
}
/**
 * 类型描述
 */
export interface KindItem {
    /**
      * 等级，分为1，2，3级别，类型逐级细分
      */
    Level: number;
    /**
      * 类型编号，对应唯一的类型编号
      */
    ID: number;
    /**
      * 类型名称
      */
    Name: string;
}
/**
 * 出入院诊断
 */
export interface DischargeDiagnosis {
    /**
      * 表格位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableIndex: number;
    /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutDiagnosis: BlockInfo;
    /**
      * 疾病编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseCode: BlockInfo;
    /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    InStatus: BlockInfo;
    /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutStatus: BlockInfo;
}
/**
 * 报告内容
 */
export interface ImageReport {
    /**
      * 报告文本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageText: ImageText;
    /**
      * 报告类别信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    KindSet: Array<KindItem>;
    /**
      * 基本信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicInfo: BasicInfo;
    /**
      * 个人隐私信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersonalInfo: PersonalInfo;
    /**
      * 检验指标内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestList: Array<TestItem>;
    /**
      * 检查报告内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Inspection: Inspection;
    /**
      * 病历资料内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaseHistory: CaseHistory;
    /**
      * 病理报告内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pathology: Pathology;
}
