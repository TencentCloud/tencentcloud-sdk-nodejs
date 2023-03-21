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
 * 末次月经
 */
export interface LastMenstrualPeriodBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 免疫接种记录
 */
export interface Vaccination {
    /**
      * 序号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: string;
    /**
      * 疫苗名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vaccine?: string;
    /**
      * 剂次
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dose?: string;
    /**
      * 接种日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Date?: string;
    /**
      * 疫苗批号
注意：此字段可能返回 null，表示取不到有效值。
      */
    LotNumber?: string;
    /**
      * 生产企业
注意：此字段可能返回 null，表示取不到有效值。
      */
    Manufacturer?: string;
    /**
      * 接种单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Clinic?: string;
    /**
      * 接种部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Site?: string;
    /**
      * 接种者
注意：此字段可能返回 null，表示取不到有效值。
      */
    Provider?: string;
    /**
      * 疫苗批号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Lot?: string;
}
/**
 * 时间轴事件
 */
export interface TimelineEvent {
    /**
      * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 原文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 事件子类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubType?: string;
    /**
      * 事件发生时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Time?: string;
    /**
      * 事件值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 位置坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rectangle?: Rectangle;
    /**
      * 事件发生地点
注意：此字段可能返回 null，表示取不到有效值。
      */
    Place?: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: string;
}
/**
 * IHC块
 */
export interface IHCBlock {
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 具体值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: ValueBlock;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 体温名称
 */
export interface BodyTemperatureBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 病理详细
 */
export interface PathologicalDiagnosisDetailBlock {
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologicalType?: string;
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologicalGrade?: string;
}
/**
 * ImageToObject请求参数结构体
 */
export interface ImageToObjectRequest {
    /**
      * 图片列表，允许传入多张图片，目前只支持传入图片base64编码，图片url暂不支持
      */
    ImageInfoList: Array<ImageInfo>;
    /**
      * 图片处理参数
      */
    HandleParam: HandleParam;
    /**
      * 报告类型，目前支持11（检验报告），12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
      */
    Type: number;
    /**
      * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为 False，则 Type 字段不能为 0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
      */
    IsUsedClassify: boolean;
    /**
      * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
      */
    UserType?: number;
    /**
      * 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。
（1）检验报告 11，默认使用 V2，最高支持 V3。
（2）病理报告 15，默认使用 V1，最高支持 V2。
（3）入院记录29、出院记录 28、病理记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。
      */
    ReportTypeVersion?: Array<ReportTypeVersion>;
}
/**
 * 分子病理
 */
export interface Molecular {
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 基因名称标注化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 分子病理详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: MolecularValue;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 结节
 */
export interface TuberInfo {
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: BlockInfo;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size?: Array<Size>;
    /**
      * 多发
注意：此字段可能返回 null，表示取不到有效值。
      */
    Multiple?: Multiple;
    /**
      * 纵横比
注意：此字段可能返回 null，表示取不到有效值。
      */
    AspectRatio?: AspectRatio;
    /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge?: BlockInfo;
    /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho?: BlockInfo;
    /**
      * 外部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    RearEcho?: BlockInfo;
    /**
      * 弹性质地
注意：此字段可能返回 null，表示取不到有效值。
      */
    Elastic?: Elastic;
    /**
      * 形状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape?: BlockInfo;
    /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShapeAttr?: BlockInfo;
    /**
      * 皮髓质信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkinMedulla?: BlockInfo;
    /**
      * 变化趋势
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trend?: BlockInfo;
    /**
      * 钙化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Calcification?: BlockInfo;
    /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope?: BlockInfo;
    /**
      * 强化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enhancement?: BlockInfo;
    /**
      * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphEnlargement?: BlockInfo;
    /**
      * 淋巴门
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphDoor?: BlockInfo;
    /**
      * 活动度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Activity?: BlockInfo;
    /**
      * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation?: BlockInfo;
    /**
      * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI?: BlockInfo;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeStatus?: BlockInfo;
    /**
      * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoDistribution?: BlockInfo;
    /**
      * 内部回声类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoType?: Array<BlockInfo>;
    /**
      * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
      */
    Outline?: BlockInfo;
    /**
      * 结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Structure?: BlockInfo;
    /**
      * 密度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Density?: BlockInfo;
    /**
      * 血管
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vas?: BlockInfo;
    /**
      * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cysticwall?: BlockInfo;
    /**
      * 被膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capsule?: BlockInfo;
    /**
      * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsthmusThicknese?: Size;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 透声度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Transparent?: BlockInfo;
    /**
      * MRI ADC
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriAdc?: BlockInfo;
    /**
      * MRI DWI
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriDwi?: BlockInfo;
    /**
      * MRI T1信号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriT1?: BlockInfo;
    /**
      * MRI T2信号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriT2?: BlockInfo;
    /**
      * CT HU值
注意：此字段可能返回 null，表示取不到有效值。
      */
    CtHu?: BlockInfo;
    /**
      * SUmax值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suvmax?: BlockInfo;
    /**
      * 代谢情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metabolism?: BlockInfo;
    /**
      * 放射性摄取
注意：此字段可能返回 null，表示取不到有效值。
      */
    RadioactiveUptake?: BlockInfo;
    /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymDesc?: BlockInfo;
    /**
      * 影像特征
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageFeature?: BlockInfo;
    /**
      * 在报告图片中的坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 手术列表
 */
export interface SurgeryListBlock {
    /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Time?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeType?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: Array<string>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: string;
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
 * 查体
 */
export interface BodyExaminationBlock {
    /**
      * 体温
注意：此字段可能返回 null，表示取不到有效值。
      */
    BodyTemperature?: BodyTemperatureBlock;
    /**
      * 脉搏
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pulse?: BodyTemperatureBlock;
    /**
      * 呼吸
注意：此字段可能返回 null，表示取不到有效值。
      */
    Breathe?: BodyTemperatureBlock;
    /**
      * 血压
注意：此字段可能返回 null，表示取不到有效值。
      */
    BloodPressure?: BloodPressureBlock;
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
 * 报告类型
 */
export interface Report {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 出生地
 */
export interface BirthPlaceBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * pTNM
 */
export interface PTNM {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * pT
注意：此字段可能返回 null，表示取不到有效值。
      */
    PT?: string;
    /**
      * pN
注意：此字段可能返回 null，表示取不到有效值。
      */
    PN?: string;
    /**
      * pM
注意：此字段可能返回 null，表示取不到有效值。
      */
    PM?: string;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 检验报告结构
 */
export interface TableIndicators {
    /**
      * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Indicators?: Array<IndicatorItemV2>;
    /**
      * 采样标本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sample?: BaseItem;
}
/**
 * 组织学类
 */
export interface HistologyClass {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 块信息
 */
export interface BlockInfoV2 {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 疾病编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code?: string;
}
/**
 * 标准部位
 */
export interface NormPart {
    /**
      * 部位值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: string;
    /**
      * 部位方向
注意：此字段可能返回 null，表示取不到有效值。
      */
    PartDirection?: string;
    /**
      * 组织值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tissue?: string;
    /**
      * 组织方向
注意：此字段可能返回 null，表示取不到有效值。
      */
    TissueDirection?: string;
    /**
      * 上级部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Upper?: string;
    /**
      * 部位详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    PartDetail?: PartDesc;
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
 * 基础类型
 */
export interface BaseItem {
    /**
      * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原始文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化后值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias?: string;
    /**
      * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 病案首页第二页
 */
export interface Fp2NdItem {
    /**
      * 手术编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code?: BaseItem;
    /**
      * 手术名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: BaseItem;
    /**
      * 手术开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime?: BaseItem;
    /**
      * 手术结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: BaseItem;
    /**
      * 手术等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Level?: BaseItem;
    /**
      * 手术类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: BaseItem;
    /**
      * 醉愈合方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncisionHealingGrade?: BaseItem;
    /**
      * 麻醉方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnesthesiaMethod?: BaseItem;
}
/**
 * 器官
 */
export interface Organ {
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size?: Array<Size>;
    /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope?: BlockInfo;
    /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge?: BlockInfo;
    /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho?: BlockInfo;
    /**
      * 腺体
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gland?: BlockInfo;
    /**
      * 形状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape?: BlockInfo;
    /**
      * 厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Thickness?: BlockInfo;
    /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShapeAttr?: BlockInfo;
    /**
      * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI?: BlockInfo;
    /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymDesc?: BlockInfo;
    /**
      * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeStatus?: BlockInfo;
    /**
      * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
      */
    Outline?: BlockInfo;
    /**
      * 结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Structure?: BlockInfo;
    /**
      * 密度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Density?: BlockInfo;
    /**
      * 血管
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vas?: BlockInfo;
    /**
      * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cysticwall?: BlockInfo;
    /**
      * 被膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capsule?: BlockInfo;
    /**
      * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsthmusThicknese?: Size;
    /**
      * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoDistribution?: BlockInfo;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 透声度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Transparent?: BlockInfo;
    /**
      * MRI ADC
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriAdc?: BlockInfo;
    /**
      * MRI DWI
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriDwi?: BlockInfo;
    /**
      * MRI T1信号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriT1?: BlockInfo;
    /**
      * MRI T2信号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MriT2?: BlockInfo;
    /**
      * CT HU值
注意：此字段可能返回 null，表示取不到有效值。
      */
    CtHu?: BlockInfo;
    /**
      * SUmax值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suvmax?: BlockInfo;
    /**
      * 代谢情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metabolism?: BlockInfo;
    /**
      * 放射性摄取
注意：此字段可能返回 null，表示取不到有效值。
      */
    RadioactiveUptake?: BlockInfo;
    /**
      * 淋巴结情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphEnlargement?: BlockInfo;
    /**
      * 影像特征
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageFeature?: BlockInfo;
    /**
      * 导管
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duct?: BlockInfo;
    /**
      * 趋势
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trend?: BlockInfo;
    /**
      * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation?: BlockInfo;
    /**
      * 器官在报告图片中的坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 现病史
 */
export interface DiseasePresentBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 归一化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
}
/**
 * 月经经期
 */
export interface MenstrualPeriodBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 免疫接种证明
 */
export interface VaccineCertificate {
    /**
      * 免疫接种列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    VaccineList: Array<Vaccination>;
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
 * 既往史
 */
export interface MainDiseaseHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: boolean;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 否定列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Neglist?: NeglistBlock;
    /**
      * 肯定列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Poslist?: PoslistBlock;
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
 * 家族遗传史
 */
export interface GeneticHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 遗传列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GeneticList?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 月经史
 */
export interface MenstrualHistoryDetailBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeType?: string;
    /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 核酸报告结论
 */
export interface CovidItemsInfo {
    /**
      * 核酸报告结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    CovidItems?: Array<CovidItem>;
    /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version?: string;
}
/**
 * 血压
 */
export interface BloodPressureBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 舒张压
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormDiastolic?: string;
    /**
      * 收缩压
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormSystolic?: string;
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
 * 心电图详情
 */
export interface EcgDescription {
    /**
      * 心率
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeartRate: EcgItem;
    /**
      * 心房率
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuricularRate: EcgItem;
    /**
      * 心室率
注意：此字段可能返回 null，表示取不到有效值。
      */
    VentricularRate: EcgItem;
    /**
      * 节律
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rhythm: EcgItem;
    /**
      * P波时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    PDuration: EcgItem;
    /**
      * QRS时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    QrsDuration: EcgItem;
    /**
      * QRS电轴
注意：此字段可能返回 null，表示取不到有效值。
      */
    QrsAxis: EcgItem;
    /**
      * P-R间期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PRInterval: EcgItem;
    /**
      * P-P间期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PPInterval: EcgItem;
    /**
      * R-R间期
注意：此字段可能返回 null，表示取不到有效值。
      */
    RRInterval: EcgItem;
    /**
      * P-J间期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PJInterval: EcgItem;
    /**
      * Q-T间期
注意：此字段可能返回 null，表示取不到有效值。
      */
    QTInterval: EcgItem;
    /**
      * qt/qtc间期
注意：此字段可能返回 null，表示取不到有效值。
      */
    QTCInterval: EcgItem;
    /**
      * RV5/SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rv5SV1Amplitude: EcgItem;
    /**
      * RV5+SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rv5AddSV1Amplitude: EcgItem;
    /**
      * PRT电轴
注意：此字段可能返回 null，表示取不到有效值。
      */
    PRTAxis: EcgItem;
    /**
      * RV5振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rv5Amplitude: EcgItem;
    /**
      * SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
      */
    SV1Amplitude: EcgItem;
    /**
      * RV6/SV2
注意：此字段可能返回 null，表示取不到有效值。
      */
    RV6SV2: EcgItem;
    /**
      * P/QRS/T电轴
注意：此字段可能返回 null，表示取不到有效值。
      */
    PQRSTAxis: EcgItem;
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
 * 眼科报告结构体
 */
export interface EyeItemsInfo {
    /**
      * 眼科报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    EyeItems?: EyeItem;
    /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version?: string;
}
/**
 * 检验指标项结构v2
 */
export interface IndicatorItemV2 {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Item?: BaseItem;
    /**
      * 英文编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code?: BaseItem;
    /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: BaseItem;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: BaseItem;
    /**
      * 参考范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    Range?: BaseItem;
    /**
      * 上下箭头
注意：此字段可能返回 null，表示取不到有效值。
      */
    Arrow?: BaseItem;
    /**
      * 检测方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method?: BaseItem;
    /**
      * 结果是否异常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Normal?: boolean;
    /**
      * ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: number;
    /**
      * 序号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Order?: number;
    /**
      * 推测结果是否异常
注意：此字段可能返回 null，表示取不到有效值。
      */
    InferNormal?: string;
}
/**
 * 大小
 */
export interface NormSize {
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Number?: Array<string>;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Impl?: string;
}
/**
 * 病案首页
 */
export interface FirstPage {
    /**
      * 出入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosis?: Array<DischargeDiagnosis>;
    /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalDiagnosis?: BlockInfo;
    /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClinicalDiagnosis?: BlockInfo;
    /**
      * 受伤中毒的外部原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    DamagePoi?: BlockInfoV2;
    /**
      * 病案首页第二页
注意：此字段可能返回 null，表示取不到有效值。
      */
    Fp2NdItems?: Array<Fp2NdItem>;
}
/**
 * TextToObject返回参数结构体
 */
export interface TextToObjectResponse {
    /**
      * 报告结构化结果
      */
    Template?: Template;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 手术经过
 */
export interface SurgeryConditionBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 手术历史
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryList?: Array<SurgeryListBlock>;
    /**
      * 对外输出值

注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 通用块信息
 */
export interface FieldInfo {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nums?: Array<NumValue>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
}
/**
 * 详情
 */
export interface DetailInformation {
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 组织大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    TissueSizes?: Array<Size>;
    /**
      * 结节大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    TuberSizes?: Array<Size>;
    /**
      * 肿瘤大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    CancerSizes?: Array<Size>;
    /**
      * 组织学等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyLevel?: BaseInfo;
    /**
      * 组织学类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyType?: HistologyTypeV2;
    /**
      * 侵犯
注意：此字段可能返回 null，表示取不到有效值。
      */
    Invasive?: Array<InvasiveV2>;
    /**
      * pTNM
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM?: PTNM;
    /**
      * 浸润深度
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfiltrationDepth?: BaseInfo;
    /**
      * 结节数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TuberNum?: BaseInfo;
    /**
      * 钙化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Calcification?: BaseInfo;
    /**
      * 坏死
注意：此字段可能返回 null，表示取不到有效值。
      */
    Necrosis?: BaseInfo;
    /**
      * 异形
注意：此字段可能返回 null，表示取不到有效值。
      */
    Abnormity?: BaseInfo;
    /**
      * 断链
注意：此字段可能返回 null，表示取不到有效值。
      */
    Breaked?: BaseInfo;
}
/**
 * 孕产结论部分
 */
export interface MaternitySummary {
    /**
      * 胎儿数据结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Fetus?: Array<Fetus>;
    /**
      * 胎儿数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FetusNum?: FieldInfo;
    /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sym?: Array<FieldInfo>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: string;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
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
 * 输血史
 */
export interface TransfusionHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: boolean;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 分子病理详细信息
 */
export interface MolecularValue {
    /**
      * 外显子
注意：此字段可能返回 null，表示取不到有效值。
      */
    Exon?: string;
    /**
      * 点位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Position?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 阳性或阴性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive?: string;
    /**
      * 基因名称原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
}
/**
 * 主诉详情
 */
export interface ChiefComplaintDetailBlock {
    /**
      * 疾病名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseName?: string;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: string;
    /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Time?: string;
    /**
      * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeType?: string;
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
    /**
      * 检查项目
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckItem: string;
    /**
      * 检查方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckMethod: string;
    /**
      * 诊断时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagnoseTime: string;
    /**
      * 体检号
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheckupNum: string;
    /**
      * 其它时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherTime: string;
    /**
      * 打印时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrintTime: string;
    /**
      * 未归类时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Times: Array<Time>;
}
/**
 * 内窥镜报告
 */
export interface Endoscopy {
    /**
      * 活检部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    BiopsyPart: BiopsyPart;
    /**
      * 可见描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: EndoscopyDesc;
    /**
      * 结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    Summary: Summary;
}
/**
 * 家庭成员
 */
export interface RelativeHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 成员列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail?: Array<RelativeHistoryDetailBlock>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 体检结论
 */
export interface Exame {
    /**
      * 结论段落
注意：此字段可能返回 null，表示取不到有效值。
      */
    OverView?: Array<ResultInfo>;
    /**
      * 异常与建议段落
注意：此字段可能返回 null，表示取不到有效值。
      */
    Abnormality?: Array<ResultInfo>;
}
/**
 * 病理报告v2
 */
export interface PathologyV2 {
    /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalReportType?: Report;
    /**
      * 描述段落
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc?: DescInfo;
    /**
      * 诊断结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    Summary?: SummaryInfo;
    /**
      * 报告全文
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportText?: string;
    /**
      * 淋巴结总计转移信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphTotal?: Array<LymphTotal>;
    /**
      * 单淋巴结转移信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphNodes?: Array<LymphNode>;
    /**
      * ihc信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ihc?: Array<IHCV2>;
    /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    Clinical?: BaseInfo;
    /**
      * 是否癌前病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    Precancer?: HistologyClass;
    /**
      * 是否恶性肿瘤
注意：此字段可能返回 null，表示取不到有效值。
      */
    Malignant?: HistologyClass;
    /**
      * 是否良性肿瘤
注意：此字段可能返回 null，表示取不到有效值。
      */
    Benigntumor?: HistologyClass;
    /**
      * 送检材料
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleType?: BaseInfo;
    /**
      * 淋巴结大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphSize?: Array<Size>;
    /**
      * 分子病理
注意：此字段可能返回 null，表示取不到有效值。
      */
    Molecular?: Array<Molecular>;
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
      * 报告类型，目前支持12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
      */
    Type: number;
    /**
      * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为False，则Type字段不能为0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
      */
    IsUsedClassify: boolean;
    /**
      * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
      */
    UserType?: number;
    /**
      * 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。
（1）检验报告 11，默认使用 V2，最高支持 V3。
（2）病理报告 15，默认使用 V1，最高支持 V2。
（3）入院记录29、出院记录 28、病理记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。
      */
    ReportTypeVersion?: Array<ReportTypeVersion>;
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
 * 新生儿信息
 */
export interface NeonatalInfo {
    /**
      * 新生儿名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    NeonatalName?: string;
    /**
      * 新生儿性别
注意：此字段可能返回 null，表示取不到有效值。
      */
    NeonatalGender?: string;
    /**
      * 出生身长
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthLength?: string;
    /**
      * 出生体重
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthWeight?: string;
    /**
      * 出生孕周
注意：此字段可能返回 null，表示取不到有效值。
      */
    GestationalAge?: string;
    /**
      * 出生时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthTime?: string;
    /**
      * 出生地点
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace?: string;
    /**
      * 医疗机构
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalInstitutions?: string;
}
/**
 * 眼科结构体
 */
export interface EyeItem {
    /**
      * 左眼
注意：此字段可能返回 null，表示取不到有效值。
      */
    Left?: EyeChildItem;
    /**
      * 右眼
注意：此字段可能返回 null，表示取不到有效值。
      */
    Right?: EyeChildItem;
    /**
      * 瞳距
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pd?: BaseItem2;
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
 * 部位信息
 */
export interface Part {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormPart?: NormPart;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValueBrief?: string;
}
/**
 * ImageToClass返回参数结构体
 */
export interface ImageToClassResponse {
    /**
      * 分类结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextTypeList?: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 报告模板
 */
export interface Template {
    /**
      * 患者信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PatientInfo?: PatientInfo;
    /**
      * 报告信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportInfo?: ReportInfo;
    /**
      * 检查报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Check?: Check;
    /**
      * 病理报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pathology?: PathologyReport;
    /**
      * 出院报告，入院报告，门诊病历
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedDoc?: MedDoc;
    /**
      * 诊断证明
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagCert?: DiagCert;
    /**
      * 病案首页
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstPage?: FirstPage;
    /**
      * 检验报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Indicator?: Indicator;
    /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportType?: string;
    /**
      * 门诊病历信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalRecordInfo?: MedicalRecordInfo;
    /**
      * 出入院信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Hospitalization?: Hospitalization;
    /**
      * 手术记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    Surgery?: Surgery;
    /**
      * 心电图报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Electrocardiogram?: Electrocardiogram;
    /**
      * 内窥镜报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Endoscopy?: Endoscopy;
    /**
      * 处方单
注意：此字段可能返回 null，表示取不到有效值。
      */
    Prescription?: Prescription;
    /**
      * 疫苗接种凭证
注意：此字段可能返回 null，表示取不到有效值。
      */
    VaccineCertificate?: VaccineCertificate;
    /**
      * OCR文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrText?: string;
    /**
      * OCR拼接后文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrResult?: string;
    /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportTypeDesc?: string;
    /**
      * 病理报告v2
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologyV2?: PathologyV2;
    /**
      * 碳14尿素呼气试验
注意：此字段可能返回 null，表示取不到有效值。
      */
    C14?: Indicator;
    /**
      * 体检结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    Exame?: Exame;
    /**
      * 出院报告v2，入院报告v2，门诊病历v2
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedDocV2?: DischargeInfoBlock;
    /**
      * 检验报告v3
注意：此字段可能返回 null，表示取不到有效值。
      */
    IndicatorV3?: IndicatorV3;
    /**
      * 核酸报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Covid?: CovidItemsInfo;
    /**
      * 孕产报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Maternity?: Maternity;
    /**
      * 眼科报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Eye?: EyeItemsInfo;
    /**
      * 出生证明
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthCert?: BirthCert;
    /**
      * 时间轴
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timeline?: TimelineInformation;
}
/**
 * 孕产描述部分
 */
export interface MaternityDesc {
    /**
      * 胎儿数据结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    Fetus?: Array<Fetus>;
    /**
      * 胎儿数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FetusNum?: FieldInfo;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: string;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 内窥部位
 */
export interface EndoscopyOrgan {
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 部位别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    PartAlias?: string;
    /**
      * 症状描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymDescList?: Array<BlockInfo>;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 临床分期
 */
export interface ClinicalStaging {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
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
 * PTNM分期
 */
export interface PTNMBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMM?: string;
    /**
      * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMN?: string;
    /**
      * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMT?: string;
}
/**
 * 吸烟史
 */
export interface SmokeHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 时间单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeUnit?: string;
    /**
      * 时间归一化
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeNorm?: string;
    /**
      * 吸烟量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Amount?: string;
    /**
      * 戒烟状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuitState?: boolean;
    /**
      * 是否吸烟
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: boolean;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 入院情况
 */
export interface AdmissionConditionBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文

注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * TextToClass返回参数结构体
 */
export interface TextToClassResponse {
    /**
      * 分类结果
      */
    TextTypeList?: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 治疗记录
 */
export interface TreatmentRecordBlock {
    /**
      * 免疫组化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Immunohistochemistry?: ImmunohistochemistryBlock;
    /**
      * 主诉
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChiefComplaint?: ChiefComplaintBlock;
    /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionCondition?: AdmissionConditionBlock;
    /**
      * 查体
注意：此字段可能返回 null，表示取不到有效值。
      */
    BodyExamination?: BodyExaminationBlock;
    /**
      * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionDiagnosis?: AdmissionDiagnosisBlock;
    /**
      * 入院中医诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionTraditionalDiagnosis?: AdmissionDiagnosisBlock;
    /**
      * 入院西医诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionModernDiagnosis?: AdmissionDiagnosisBlock;
    /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalDiagnosis?: PathologicalDiagnosisBlock;
    /**
      * 现病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseasePresent?: DiseasePresentBlock;
    /**
      * 体征
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymptomsAndSigns?: DiseasePresentBlock;
    /**
      * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuxiliaryExamination?: DiseasePresentBlock;
    /**
      * 特殊检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialistExamination?: DiseasePresentBlock;
    /**
      * 精神检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    MentalExamination?: DiseasePresentBlock;
    /**
      * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckRecord?: DiseasePresentBlock;
    /**
      * 检查结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectResult?: DiseasePresentBlock;
    /**
      * 治疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckAndTreatmentProcess?: DiseasePresentBlock;
    /**
      * 手术经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryCondition?: SurgeryConditionBlock;
    /**
      * 切口愈合
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncisionHealing?: DiseasePresentBlock;
    /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosis?: DischargeDiagnosisBlock;
    /**
      * 出院中医诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeTraditionalDiagnosis?: DiseasePresentBlock;
    /**
      * 出院西医诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeModernDiagnosis?: DischargeDiagnosisBlock;
    /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeCondition?: DischargeConditionBlock;
    /**
      * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeInstructions?: DiseasePresentBlock;
    /**
      * 治疗建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    TreatmentSuggestion?: DiseasePresentBlock;
    /**
      * 随访
注意：此字段可能返回 null，表示取不到有效值。
      */
    FollowUpRequirements?: DiseasePresentBlock;
    /**
      * 治疗情况变化
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionChanges?: DiseasePresentBlock;
    /**
      * 收缩压
注意：此字段可能返回 null，表示取不到有效值。
      */
    PulmonaryArterySystolicPressure?: DiseasePresentBlock;
    /**
      * bclc分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    BCLC?: DiseasePresentBlock;
    /**
      * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM?: PTNMBlock;
    /**
      * ECOG评分
注意：此字段可能返回 null，表示取不到有效值。
      */
    ECOG?: DiseasePresentBlock;
    /**
      * NRS评分
注意：此字段可能返回 null，表示取不到有效值。
      */
    NRS?: DiseasePresentBlock;
    /**
      * kps评分
注意：此字段可能返回 null，表示取不到有效值。
      */
    KPS?: DiseasePresentBlock;
    /**
      * 癌症分期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cancerstaging?: ClinicalStaging;
    /**
      * 死亡时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeathDate?: DeathDateBlock;
    /**
      * 复发日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelapseDate?: RelapseDateBlock;
    /**
      * 观察日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObservationDays?: DeathDateBlock;
    /**
      * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncisionHealingText?: string;
    /**
      * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuxiliaryExaminationText?: string;
    /**
      * 特殊检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialExamText?: string;
    /**
      * 门诊诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutpatientDiagnosisText?: string;
    /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionConditionText?: string;
    /**
      * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckAndTreatmentProcessText?: string;
    /**
      * 体征
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymptomsAndSignsText?: string;
    /**
      * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeInstructionsText?: string;
    /**
      * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionDiagnosisText?: string;
    /**
      * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryConditionText?: string;
    /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalDiagnosisText?: string;
    /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeConditionText?: string;
    /**
      * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckRecordText?: string;
    /**
      * 主诉
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChiefComplaintText?: string;
    /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosisText?: string;
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
    Index?: Array<number>;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size?: Array<Size>;
}
/**
 * 手术记录
 */
export interface Surgery {
    /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryHistory?: SurgeryHistory;
    /**
      * 其他信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherInfo?: OtherInfo;
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
 * 心电图指标项
 */
export interface EcgItem {
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
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 胎儿数据结构
 */
export interface Fetus {
    /**
      * 双顶径
注意：此字段可能返回 null，表示取不到有效值。
      */
    BPD?: FieldInfo;
    /**
      * 腹前后径
注意：此字段可能返回 null，表示取不到有效值。
      */
    APTD?: FieldInfo;
    /**
      * 腹左右径
注意：此字段可能返回 null，表示取不到有效值。
      */
    TTD?: FieldInfo;
    /**
      * 头臀径
注意：此字段可能返回 null，表示取不到有效值。
      */
    CRL?: FieldInfo;
    /**
      * 头围
注意：此字段可能返回 null，表示取不到有效值。
      */
    HC?: FieldInfo;
    /**
      * 腹围
注意：此字段可能返回 null，表示取不到有效值。
      */
    AC?: FieldInfo;
    /**
      * 股骨长
注意：此字段可能返回 null，表示取不到有效值。
      */
    FL?: FieldInfo;
    /**
      * 肱骨长
注意：此字段可能返回 null，表示取不到有效值。
      */
    HL?: FieldInfo;
    /**
      * 胎儿重量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight?: FieldInfo;
    /**
      * 颈项透明层
注意：此字段可能返回 null，表示取不到有效值。
      */
    NT?: FieldInfo;
    /**
      * 脐动脉血流
注意：此字段可能返回 null，表示取不到有效值。
      */
    UmbilicalCord?: FieldInfo;
    /**
      * 羊水最大深度
注意：此字段可能返回 null，表示取不到有效值。
      */
    WaterDeep?: FieldInfo;
    /**
      * 羊水四象限测量
注意：此字段可能返回 null，表示取不到有效值。
      */
    WaterQuad?: FieldInfo;
    /**
      * 羊水指数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AFI?: FieldInfo;
    /**
      * 胎心
注意：此字段可能返回 null，表示取不到有效值。
      */
    FHR?: FieldInfo;
    /**
      * 胎动
注意：此字段可能返回 null，表示取不到有效值。
      */
    Movement?: FieldInfo;
    /**
      * 胎数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Num?: FieldInfo;
    /**
      * 胎位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Position?: FieldInfo;
    /**
      * 是否活胎
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alive?: FieldInfo;
    /**
      * 胎盘位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlacentaLocation?: FieldInfo;
    /**
      * 胎盘厚度
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlacentaThickness?: FieldInfo;
    /**
      * 胎盘成熟度
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlacentaGrade?: FieldInfo;
    /**
      * 妊娠时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    GestationTime?: FieldInfo;
    /**
      * 妊娠周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    GestationPeriod?: FieldInfo;
    /**
      * 绕颈
注意：此字段可能返回 null，表示取不到有效值。
      */
    AroundNeck?: FieldInfo;
    /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sym?: Array<FieldInfo>;
    /**
      * 原文内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
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
 * 点坐标
 */
export interface Point {
    /**
      * x坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    X?: number;
    /**
      * y坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y?: number;
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
 * 心电图诊断
 */
export interface EcgDiagnosis {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: Array<string>;
}
/**
 * 免疫组化
 */
export interface ImmunohistochemistryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 免疫组化详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: Array<IHCBlock>;
}
/**
 * 诊断结论
 */
export interface SummaryInfo {
    /**
      * 诊断结论文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: BaseInfo;
    /**
      * 诊断结论详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Infos?: Array<DetailInformation>;
}
/**
 * 描述段落
 */
export interface DescInfo {
    /**
      * 描述段落文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: BaseInfo;
    /**
      * 描述段落详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Infos?: Array<DetailInformation>;
}
/**
 * ImageToObject返回参数结构体
 */
export interface ImageToObjectResponse {
    /**
      * 报告结构化结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Template?: Template;
    /**
      * 多级分类结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextTypeList?: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 家族史
 */
export interface FamilyHistoryBlock {
    /**
      * 家庭成员
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeHistory?: RelativeHistoryBlock;
    /**
      * 家族肿瘤史
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeCancerHistory?: RelativeCancerHistoryBlock;
    /**
      * 家族遗传史
注意：此字段可能返回 null，表示取不到有效值。
      */
    GeneticHistory?: GeneticHistoryBlock;
}
/**
 * 入院诊断
 */
export interface AdmissionDiagnosisBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
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
 * 否定列表
 */
export interface NeglistBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 药品
 */
export interface Medicine {
    /**
      * 药品名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 商品名
注意：此字段可能返回 null，表示取不到有效值。
      */
    TradeName: string;
    /**
      * 厂商
注意：此字段可能返回 null，表示取不到有效值。
      */
    Firm: string;
    /**
      * 医保类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Category: string;
    /**
      * 规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Specification: string;
    /**
      * 最小包装数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinQuantity: string;
    /**
      * 最小制剂单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    DosageUnit: string;
    /**
      * 最小包装单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackingUnit: string;
}
/**
 * 指定报告类型选用其结构化版本
 */
export interface ReportTypeVersion {
    /**
      * 检验报告
      */
    ReportType?: number;
    /**
      * 版本2
      */
    Version?: number;
}
/**
 * 位置坐标
 */
export interface Rectangle {
    /**
      * x坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    X?: number;
    /**
      * y坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y?: number;
    /**
      * 宽
注意：此字段可能返回 null，表示取不到有效值。
      */
    W?: number;
    /**
      * 高
注意：此字段可能返回 null，表示取不到有效值。
      */
    H?: number;
}
/**
 * IHC
 */
export interface IHCV2 {
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * ihc归一化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * ihc详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: Value;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
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
 * 基础类型
 */
export interface BaseItem3 {
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原始文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化后值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
    /**
      * 第几次
注意：此字段可能返回 null，表示取不到有效值。
      */
    Order?: number;
}
/**
 * 基础类型
 */
export interface BaseItem2 {
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原始文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化后值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 家族肿瘤史
 */
export interface RelativeCancerHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 肿瘤史列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeCancerList?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 文本块
 */
export interface ParagraphBlock {
    /**
      * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncisionHealingText?: string;
    /**
      * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuxiliaryExaminationText?: string;
    /**
      * 特殊检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialExamText?: string;
    /**
      * 门诊诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutpatientDiagnosisText?: string;
    /**
      * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionConditionText?: string;
    /**
      * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckAndTreatmentProcessText?: string;
    /**
      * 体征
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymptomsAndSignsText?: string;
    /**
      * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeInstructionsText?: string;
    /**
      * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdmissionDiagnosisText?: string;
    /**
      * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryConditionText?: string;
    /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalDiagnosisText?: string;
    /**
      * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeConditionText?: string;
    /**
      * 检查记录

注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckRecordText?: string;
    /**
      * 主诉
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChiefComplaintText?: string;
    /**
      * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosisText?: string;
    /**
      * 既往史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainDiseaseHistoryText?: string;
    /**
      * 现病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseasePresentText?: string;
    /**
      * 个人史
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersonalHistoryText?: string;
    /**
      * 月经史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstruallHistoryText?: string;
    /**
      * 婚育史
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObstericalHistoryText?: string;
    /**
      * 家族史
注意：此字段可能返回 null，表示取不到有效值。
      */
    FamilyHistoryText?: string;
    /**
      * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllergyHistoryText?: string;
    /**
      * 病史信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseHistoryText?: string;
    /**
      * 其它诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherDiagnosisText?: string;
    /**
      * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    BodyExaminationText?: string;
    /**
      * 专科检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialistExaminationText?: string;
    /**
      * 治疗结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TreatmentResultText?: string;
}
/**
 * 家庭成员详情
 */
export interface RelativeHistoryDetailBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    Relation?: string;
    /**
      * 死亡时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeOfDeath?: string;
    /**
      * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeType?: string;
}
/**
 * 肯定列表
 */
export interface PoslistBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 处方单
 */
export interface Prescription {
    /**
      * 药品列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicineList: Array<Medicine>;
}
/**
 * 坐标
 */
export interface Coord {
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Points?: Array<Point>;
}
/**
 * 结论
 */
export interface Summary {
    /**
      * 症状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Symptom?: Array<SymptomInfo>;
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: string;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 结论信息
 */
export interface ResultInfo {
    /**
      * 段落文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: BaseInfo;
    /**
      * 结论详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items?: Array<BaseInfo>;
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
 * 月经史
 */
export interface MenstrualHistoryBlock {
    /**
      * 末次月经
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastMenstrualPeriod?: LastMenstrualPeriodBlock;
    /**
      * 月经量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualFlow?: MenstrualFlowBlock;
    /**
      * 初潮时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenarcheAge?: LastMenstrualPeriodBlock;
    /**
      * 是否绝经
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstruationOrNot?: MenstruationOrNotBlock;
    /**
      * 月经周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualCycles?: LastMenstrualPeriodBlock;
    /**
      * 月经经期
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualPeriod?: MenstrualPeriodBlock;
}
/**
 * 时间
 */
export interface Time {
    /**
      * 具体时间类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 时间值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 坐标
 */
export interface Coordinate {
    /**
      * 左上角x坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    X: number;
    /**
      * 左上角y坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y: number;
    /**
      * 宽度，单位像素
注意：此字段可能返回 null，表示取不到有效值。
      */
    Width: number;
    /**
      * 高度，单位像素
注意：此字段可能返回 null，表示取不到有效值。
      */
    Height: number;
}
/**
 * 药物用法用量
 */
export interface DosageBlock {
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 单次计量
注意：此字段可能返回 null，表示取不到有效值。
      */
    SingleMeasurement?: string;
    /**
      * 频次
注意：此字段可能返回 null，表示取不到有效值。
      */
    Frequency?: string;
    /**
      * 给药途径
注意：此字段可能返回 null，表示取不到有效值。
      */
    DrugDeliveryRoute?: string;
}
/**
 * 活检部位
 */
export interface BiopsyPart {
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 侵犯
 */
export interface InvasiveV2 {
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 阴性或阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * ImageToClass请求参数结构体
 */
export interface ImageToClassRequest {
    /**
      * 图片列表，允许传入多张图片，支持传入图片的base64编码，暂不支持图片url
      */
    ImageInfoList: Array<ImageInfo>;
    /**
      * 图片处理参数
      */
    HandleParam: HandleParam;
    /**
      * 不填，默认为0
      */
    Type: number;
    /**
      * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
      */
    UserType?: number;
}
/**
 * 标准信息类
 */
export interface BaseInfo {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 标准值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * TextToClass请求参数结构体
 */
export interface TextToClassRequest {
    /**
      * 报告文本
      */
    Text: string;
    /**
      * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
      */
    UserType?: number;
}
/**
 * 婚姻-生育史
 */
export interface ObstetricalHistoryBlock {
    /**
      * 婚姻史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarriageHistory?: MenstrualHistoryDetailBlock;
    /**
      * 婚育史
注意：此字段可能返回 null，表示取不到有效值。
      */
    FertilityHistory?: FertilityHistoryBlock;
}
/**
 * 大小
 */
export interface Size {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 标准大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormSize?: NormSize;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
}
/**
 * 出院情况
 */
export interface DischargeConditionBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
}
/**
 * 淋巴结总计转移信息
 */
export interface LymphTotal {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 转移数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferNum?: string;
    /**
      * 总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 其他信息
 */
export interface OtherInfo {
    /**
      * 麻醉方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    Anesthesia?: SurgeryAttr;
    /**
      * 术中出血
注意：此字段可能返回 null，表示取不到有效值。
      */
    BloodLoss?: SurgeryAttr;
    /**
      * 输血
注意：此字段可能返回 null，表示取不到有效值。
      */
    BloodTransfusion?: SurgeryAttr;
    /**
      * 手术用时
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration?: SurgeryAttr;
    /**
      * 手术开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: SurgeryAttr;
    /**
      * 手术结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime?: SurgeryAttr;
}
/**
 * 月经量
 */
export interface MenstrualFlowBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 时间轴
 */
export interface TimelineInformation {
    /**
      * 时间轴
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timeline?: Array<TimelineEvent>;
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
 * 病症描述信息
 */
export interface SymptomInfo {
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade?: BlockInfo;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    Symptom?: BlockInfo;
    /**
      * 属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Attrs?: Array<BlockInfo>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 单淋巴结转移信息
 */
export interface LymphNode {
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: Part;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 转移数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferNum?: number;
    /**
      * 淋巴结大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sizes?: Array<number>;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 出生证明结构化信息
 */
export interface BirthCert {
    /**
      * 新生儿信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    NeonatalInfo?: NeonatalInfo;
    /**
      * 母亲信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MotherInfo?: ParentInfo;
    /**
      * 父亲信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FatherInfo?: ParentInfo;
    /**
      * 签发信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    IssueInfo?: IssueInfo;
}
/**
 * 病理诊断
 */
export interface PathologicalDiagnosisBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 病理详细
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail?: Array<PathologicalDiagnosisDetailBlock>;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 主诉
 */
export interface ChiefComplaintBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 单位输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 主诉详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Detail?: Array<ChiefComplaintDetailBlock>;
}
/**
 * 核酸报告结论结构
 */
export interface CovidItem {
    /**
      * 采样时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleTime?: BaseItem;
    /**
      * 检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestTime?: BaseItem;
    /**
      * 检测机构
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestOrganization?: BaseItem;
    /**
      * 检测结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestResult?: BaseItem;
    /**
      * 健康码颜色
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeColor?: BaseItem;
}
/**
 * 值块
 */
export interface ValueBlock {
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade?: string;
    /**
      * 百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
    Percent?: Array<number>;
    /**
      * 阳性阴性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive?: string;
}
/**
 * 母亲或父亲信息
 */
export interface ParentInfo {
    /**
      * 名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    Age?: string;
    /**
      * 证件号
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdCard?: string;
    /**
      * 民族
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ethnicity?: string;
    /**
      * 国籍
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nationality?: string;
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address?: string;
}
/**
 * 出入院结构体
 */
export interface DischargeInfoBlock {
    /**
      * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseHistory?: DiseaseHistoryBlock;
    /**
      * 个人史
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersonalHistory?: PersonalHistoryBlock;
    /**
      * 药物史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DrugHistory?: DrugHistoryBlock;
    /**
      * 治疗相关
注意：此字段可能返回 null，表示取不到有效值。
      */
    TreatmentRecord?: TreatmentRecordBlock;
    /**
      * 文本段落
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParagraphBlock?: ParagraphBlock;
}
/**
 * 死亡时间
 */
export interface DeathDateBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 签发信息
 */
export interface IssueInfo {
    /**
      * 编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertNumber?: string;
    /**
      * 签发机构
注意：此字段可能返回 null，表示取不到有效值。
      */
    IssuedAuthority?: string;
    /**
      * 签发日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    IssuedDate?: string;
}
/**
 * 医学资料
 */
export interface MedDoc {
    /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Advice?: Advice;
    /**
      * 诊断结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Diagnosis?: Array<DiagCertItem>;
    /**
      * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseMedicalHistory?: DiseaseMedicalHistory;
    /**
      * 个人史
      */
    PersonalMedicalHistory?: PersonalMedicalHistory;
    /**
      * 婚孕史
      */
    ObstericalMedicalHistory?: ObstericalMedicalHistory;
    /**
      * 家族史
      */
    FamilyMedicalHistory?: FamilyMedicalHistory;
    /**
      * 月经史
      */
    MenstrualMedicalHistory?: MenstrualMedicalHistory;
    /**
      * 诊疗记录
      */
    TreatmentRecord?: TreatmentRecord;
}
/**
 * 描述
 */
export interface Desc {
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: string;
    /**
      * 器官
注意：此字段可能返回 null，表示取不到有效值。
      */
    Organ?: Array<Organ>;
    /**
      * 结节
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tuber?: Array<TuberInfo>;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
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
    /**
      * 标准化年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    AgeNorm: string;
    /**
      * 民族
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nation: string;
    /**
      * 婚姻代码
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarriedCode: string;
    /**
      * 职业代码
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProfessionCode: string;
    /**
      * 居民医保代码
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalInsuranceTypeCode: string;
    /**
      * 床号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BedNo: string;
}
/**
 * 组织学类型
 */
export interface HistologyTypeV2 {
    /**
      * 浸润
注意：此字段可能返回 null，表示取不到有效值。
      */
    Infiltration?: string;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化后的组织学类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
}
/**
 * 部位描述
 */
export interface PartDesc {
    /**
      * 主要部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainDir?: string;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part?: string;
    /**
      * 次要部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecondaryDir?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
}
/**
 * 出院诊断
 */
export interface DischargeDiagnosisBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 婚育史
 */
export interface FertilityHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 妊娠次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PregCount?: string;
    /**
      * 生产次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProduCount?: string;
}
/**
 * 疾病史
 */
export interface DiseaseHistoryBlock {
    /**
      * 主要病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainDiseaseHistory?: MainDiseaseHistoryBlock;
    /**
      * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllergyHistory?: MainDiseaseHistoryBlock;
    /**
      * 注射史
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfectHistory?: MainDiseaseHistoryBlock;
    /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryHistory?: SurgeryHistoryBlock;
    /**
      * 输血史
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransfusionHistory?: TransfusionHistoryBlock;
}
/**
 * 数值结构体
 */
export interface NumValue {
    /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Num?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
}
/**
 * 眼科子结构
 */
export interface EyeChildItem {
    /**
      * 球镜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sph?: Array<BaseItem3>;
    /**
      * 柱镜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cyl?: Array<BaseItem3>;
    /**
      * 轴位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ax?: Array<BaseItem3>;
    /**
      * 等效球镜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Se?: BaseItem2;
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
 * 检验报告v3
 */
export interface IndicatorV3 {
    /**
      * 检验报告V3结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableIndictors?: Array<TableIndicators>;
    /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version?: string;
}
/**
 * 药物史
 */
export interface DrugListBlock {
    /**
      * 通用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    CommonName?: string;
    /**
      * 商品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TradeName?: string;
    /**
      * 用法用量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dosage?: DosageBlock;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 内窥镜描述
 */
export interface EndoscopyDesc {
    /**
      * 描述内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: string;
    /**
      * 器官
注意：此字段可能返回 null，表示取不到有效值。
      */
    Organ?: Array<EndoscopyOrgan>;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords?: Array<Coord>;
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
    /**
      * 指标项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * 指标项坐标位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coords: Coordinate;
    /**
      * 推测结果是否异常
注意：此字段可能返回 null，表示取不到有效值。
      */
    InferNormal?: string;
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
 * 药物史
 */
export interface DrugHistoryBlock {
    /**
      * 药品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 药物列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    DrugList?: Array<DrugListBlock>;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 手术史
 */
export interface SurgeryHistoryBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 手术列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Surgerylist?: Array<SurgeryListBlock>;
}
/**
 * 个人史
 */
export interface PersonalHistoryBlock {
    /**
      * 出生地
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace?: BirthPlaceBlock;
    /**
      * 居住地
注意：此字段可能返回 null，表示取不到有效值。
      */
    LivePlace?: BirthPlaceBlock;
    /**
      * 职业
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job?: BirthPlaceBlock;
    /**
      * 吸烟
注意：此字段可能返回 null，表示取不到有效值。
      */
    SmokeHistory?: SmokeHistoryBlock;
    /**
      * 喝酒
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlcoholicHistory?: SmokeHistoryBlock;
    /**
      * 月经史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualHistory?: MenstrualHistoryBlock;
    /**
      * 婚姻-生育史
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObstericalHistory?: ObstetricalHistoryBlock;
    /**
      * 家族史
注意：此字段可能返回 null，表示取不到有效值。
      */
    FamilyHistory?: FamilyHistoryBlock;
}
/**
 * 复发时间
 */
export interface RelapseDateBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 疾病名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseName?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 孕产报告
 */
export interface Maternity {
    /**
      * 描述部分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc?: MaternityDesc;
    /**
      * 结论部分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Summary?: MaternitySummary;
    /**
      * 报告原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrText?: string;
}
/**
 * 是否绝经
 */
export interface MenstruationOrNotBlock {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src?: string;
    /**
      * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Norm?: string;
    /**
      * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeType?: string;
    /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp?: string;
    /**
      * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
}
/**
 * 心电图
 */
export interface Electrocardiogram {
    /**
      * 心电图详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    EcgDescription: EcgDescription;
    /**
      * 心电图诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    EcgDiagnosis: EcgDiagnosis;
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
