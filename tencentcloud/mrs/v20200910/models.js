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
const AbstractModel = require("../../common/abstract_model");

/**
 * 检验报告
 * @class
 */
class Indicator extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检验指标项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IndicatorItem> || null}
         */
        this.Indicators = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Indicators) {
            this.Indicators = new Array();
            for (let z in params.Indicators) {
                let obj = new IndicatorItem();
                obj.deserialize(params.Indicators[z]);
                this.Indicators.push(obj);
            }
        }

    }
}

/**
 * 报告模板
 * @class
 */
class Template extends  AbstractModel {
    constructor(){
        super();

        /**
         * 患者信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PatientInfo || null}
         */
        this.PatientInfo = null;

        /**
         * 报告信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReportInfo || null}
         */
        this.ReportInfo = null;

        /**
         * 检查报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Check || null}
         */
        this.Check = null;

        /**
         * 病理报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PathologyReport || null}
         */
        this.Pathology = null;

        /**
         * 出院报告，入院报告，门诊病历
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MedDoc || null}
         */
        this.MedDoc = null;

        /**
         * 诊断证明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiagCert || null}
         */
        this.DiagCert = null;

        /**
         * 病案首页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FirstPage || null}
         */
        this.FirstPage = null;

        /**
         * 检验报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Indicator || null}
         */
        this.Indicator = null;

        /**
         * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * 门诊病历信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MedicalRecordInfo || null}
         */
        this.MedicalRecordInfo = null;

        /**
         * 出入院信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Hospitalization || null}
         */
        this.Hospitalization = null;

        /**
         * 手术记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Surgery || null}
         */
        this.Surgery = null;

        /**
         * 心电图报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Electrocardiogram || null}
         */
        this.Electrocardiogram = null;

        /**
         * 内窥镜报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Endoscopy || null}
         */
        this.Endoscopy = null;

        /**
         * 处方单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Prescription || null}
         */
        this.Prescription = null;

        /**
         * 免疫接种证明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VaccineCertificate || null}
         */
        this.VaccineCertificate = null;

        /**
         * OCR文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrText = null;

        /**
         * OCR拼接后文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PatientInfo) {
            let obj = new PatientInfo();
            obj.deserialize(params.PatientInfo)
            this.PatientInfo = obj;
        }

        if (params.ReportInfo) {
            let obj = new ReportInfo();
            obj.deserialize(params.ReportInfo)
            this.ReportInfo = obj;
        }

        if (params.Check) {
            let obj = new Check();
            obj.deserialize(params.Check)
            this.Check = obj;
        }

        if (params.Pathology) {
            let obj = new PathologyReport();
            obj.deserialize(params.Pathology)
            this.Pathology = obj;
        }

        if (params.MedDoc) {
            let obj = new MedDoc();
            obj.deserialize(params.MedDoc)
            this.MedDoc = obj;
        }

        if (params.DiagCert) {
            let obj = new DiagCert();
            obj.deserialize(params.DiagCert)
            this.DiagCert = obj;
        }

        if (params.FirstPage) {
            let obj = new FirstPage();
            obj.deserialize(params.FirstPage)
            this.FirstPage = obj;
        }

        if (params.Indicator) {
            let obj = new Indicator();
            obj.deserialize(params.Indicator)
            this.Indicator = obj;
        }
        this.ReportType = 'ReportType' in params ? params.ReportType : null;

        if (params.MedicalRecordInfo) {
            let obj = new MedicalRecordInfo();
            obj.deserialize(params.MedicalRecordInfo)
            this.MedicalRecordInfo = obj;
        }

        if (params.Hospitalization) {
            let obj = new Hospitalization();
            obj.deserialize(params.Hospitalization)
            this.Hospitalization = obj;
        }

        if (params.Surgery) {
            let obj = new Surgery();
            obj.deserialize(params.Surgery)
            this.Surgery = obj;
        }

        if (params.Electrocardiogram) {
            let obj = new Electrocardiogram();
            obj.deserialize(params.Electrocardiogram)
            this.Electrocardiogram = obj;
        }

        if (params.Endoscopy) {
            let obj = new Endoscopy();
            obj.deserialize(params.Endoscopy)
            this.Endoscopy = obj;
        }

        if (params.Prescription) {
            let obj = new Prescription();
            obj.deserialize(params.Prescription)
            this.Prescription = obj;
        }

        if (params.VaccineCertificate) {
            let obj = new VaccineCertificate();
            obj.deserialize(params.VaccineCertificate)
            this.VaccineCertificate = obj;
        }
        this.OcrText = 'OcrText' in params ? params.OcrText : null;
        this.OcrResult = 'OcrResult' in params ? params.OcrResult : null;

    }
}

/**
 * 弹性质地
 * @class
 */
class Elastic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Score = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 免疫接种记录
 * @class
 */
class Vaccination extends  AbstractModel {
    constructor(){
        super();

        /**
         * 序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 疫苗名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vaccine = null;

        /**
         * 剂次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Dose = null;

        /**
         * 接种日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 疫苗批号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LotNumber = null;

        /**
         * 生产企业
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Manufacturer = null;

        /**
         * 接种单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Clinic = null;

        /**
         * 接种部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Site = null;

        /**
         * 接种者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Provider = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Vaccine = 'Vaccine' in params ? params.Vaccine : null;
        this.Dose = 'Dose' in params ? params.Dose : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.LotNumber = 'LotNumber' in params ? params.LotNumber : null;
        this.Manufacturer = 'Manufacturer' in params ? params.Manufacturer : null;
        this.Clinic = 'Clinic' in params ? params.Clinic : null;
        this.Site = 'Site' in params ? params.Site : null;
        this.Provider = 'Provider' in params ? params.Provider : null;

    }
}

/**
 * 报告基本信息
 * @class
 */
class ReportInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 医院名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Hospital = null;

        /**
         * 科室名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DepartmentName = null;

        /**
         * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillingTime = null;

        /**
         * 报告时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportTime = null;

        /**
         * 检查时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InspectTime = null;

        /**
         * 检查号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckNum = null;

        /**
         * 影像号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageNum = null;

        /**
         * 放射号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RadiationNum = null;

        /**
         * 检验号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TestNum = null;

        /**
         * 门诊号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutpatientNum = null;

        /**
         * 病理号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PathologyNum = null;

        /**
         * 住院号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InHospitalNum = null;

        /**
         * 样本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SampleNum = null;

        /**
         * 标本种类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * 病历号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MedicalRecordNum = null;

        /**
         * 报告名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportName = null;

        /**
         * 超声号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UltraNum = null;

        /**
         * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Diagnose = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hospital = 'Hospital' in params ? params.Hospital : null;
        this.DepartmentName = 'DepartmentName' in params ? params.DepartmentName : null;
        this.BillingTime = 'BillingTime' in params ? params.BillingTime : null;
        this.ReportTime = 'ReportTime' in params ? params.ReportTime : null;
        this.InspectTime = 'InspectTime' in params ? params.InspectTime : null;
        this.CheckNum = 'CheckNum' in params ? params.CheckNum : null;
        this.ImageNum = 'ImageNum' in params ? params.ImageNum : null;
        this.RadiationNum = 'RadiationNum' in params ? params.RadiationNum : null;
        this.TestNum = 'TestNum' in params ? params.TestNum : null;
        this.OutpatientNum = 'OutpatientNum' in params ? params.OutpatientNum : null;
        this.PathologyNum = 'PathologyNum' in params ? params.PathologyNum : null;
        this.InHospitalNum = 'InHospitalNum' in params ? params.InHospitalNum : null;
        this.SampleNum = 'SampleNum' in params ? params.SampleNum : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.MedicalRecordNum = 'MedicalRecordNum' in params ? params.MedicalRecordNum : null;
        this.ReportName = 'ReportName' in params ? params.ReportName : null;
        this.UltraNum = 'UltraNum' in params ? params.UltraNum : null;
        this.Diagnose = 'Diagnose' in params ? params.Diagnose : null;

    }
}

/**
 * 内窥镜报告
 * @class
 */
class Endoscopy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 活检部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BiopsyPart || null}
         */
        this.BiopsyPart = null;

        /**
         * 可见描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EndoscopyDesc || null}
         */
        this.Desc = null;

        /**
         * 结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Summary || null}
         */
        this.Summary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BiopsyPart) {
            let obj = new BiopsyPart();
            obj.deserialize(params.BiopsyPart)
            this.BiopsyPart = obj;
        }

        if (params.Desc) {
            let obj = new EndoscopyDesc();
            obj.deserialize(params.Desc)
            this.Desc = obj;
        }

        if (params.Summary) {
            let obj = new Summary();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }

    }
}

/**
 * Ihc信息
 * @class
 */
class IHCInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
         * @type {Value || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Value) {
            let obj = new Value();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * 手术史
 * @class
 */
class SurgeryHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手术名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.SurgeryName = null;

        /**
         * 手术日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.SurgeryDate = null;

        /**
         * 术前诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.PreoperativePathology = null;

        /**
         * 术中诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.IntraoperativePathology = null;

        /**
         * 术后诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.PostoperativePathology = null;

        /**
         * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.DischargeDiagnosis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SurgeryName) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.SurgeryName)
            this.SurgeryName = obj;
        }

        if (params.SurgeryDate) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.SurgeryDate)
            this.SurgeryDate = obj;
        }

        if (params.PreoperativePathology) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.PreoperativePathology)
            this.PreoperativePathology = obj;
        }

        if (params.IntraoperativePathology) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.IntraoperativePathology)
            this.IntraoperativePathology = obj;
        }

        if (params.PostoperativePathology) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.PostoperativePathology)
            this.PostoperativePathology = obj;
        }

        if (params.DischargeDiagnosis) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.DischargeDiagnosis)
            this.DischargeDiagnosis = obj;
        }

    }
}

/**
 * 药品
 * @class
 */
class Medicine extends  AbstractModel {
    constructor(){
        super();

        /**
         * 药品名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商品名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeName = null;

        /**
         * 厂商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Firm = null;

        /**
         * 医保类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 最小包装数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MinQuantity = null;

        /**
         * 最小制剂单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DosageUnit = null;

        /**
         * 最小包装单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackingUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TradeName = 'TradeName' in params ? params.TradeName : null;
        this.Firm = 'Firm' in params ? params.Firm : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.MinQuantity = 'MinQuantity' in params ? params.MinQuantity : null;
        this.DosageUnit = 'DosageUnit' in params ? params.DosageUnit : null;
        this.PackingUnit = 'PackingUnit' in params ? params.PackingUnit : null;

    }
}

/**
 * 图片处理参数
 * @class
 */
class HandleParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * ocr引擎
         * @type {number || null}
         */
        this.OcrEngineType = null;

        /**
         * 是否返回分行文本内容
         * @type {boolean || null}
         */
        this.IsReturnText = null;

        /**
         * 顺时针旋转角度
         * @type {number || null}
         */
        this.RotateTheAngle = null;

        /**
         * 自动适配方向,仅支持优图引擎
         * @type {boolean || null}
         */
        this.AutoFitDirection = null;

        /**
         * 坐标优化
         * @type {boolean || null}
         */
        this.AutoOptimizeCoordinate = null;

        /**
         * 是否开启图片压缩，开启时imageOriginalSize必须正确填写
         * @type {boolean || null}
         */
        this.IsScale = null;

        /**
         * 原始图片大小(单位byes),用来判断该图片是否需要压缩
         * @type {number || null}
         */
        this.ImageOriginalSize = null;

        /**
         * 采用后台默认值(2048Kb)
         * @type {number || null}
         */
        this.ScaleTargetSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OcrEngineType = 'OcrEngineType' in params ? params.OcrEngineType : null;
        this.IsReturnText = 'IsReturnText' in params ? params.IsReturnText : null;
        this.RotateTheAngle = 'RotateTheAngle' in params ? params.RotateTheAngle : null;
        this.AutoFitDirection = 'AutoFitDirection' in params ? params.AutoFitDirection : null;
        this.AutoOptimizeCoordinate = 'AutoOptimizeCoordinate' in params ? params.AutoOptimizeCoordinate : null;
        this.IsScale = 'IsScale' in params ? params.IsScale : null;
        this.ImageOriginalSize = 'ImageOriginalSize' in params ? params.ImageOriginalSize : null;
        this.ScaleTargetSize = 'ScaleTargetSize' in params ? params.ScaleTargetSize : null;

    }
}

/**
 * ImageToObject请求参数结构体
 * @class
 */
class ImageToObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片列表，允许传入多张图片，目前只支持传入图片base64编码，图片url暂不支持
         * @type {Array.<ImageInfo> || null}
         */
        this.ImageInfoList = null;

        /**
         * 图片处理参数
         * @type {HandleParam || null}
         */
        this.HandleParam = null;

        /**
         * 报告类型，目前支持11（检验报告），12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为 False，则 Type 字段不能为 0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
         * @type {boolean || null}
         */
        this.IsUsedClassify = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageInfoList) {
            this.ImageInfoList = new Array();
            for (let z in params.ImageInfoList) {
                let obj = new ImageInfo();
                obj.deserialize(params.ImageInfoList[z]);
                this.ImageInfoList.push(obj);
            }
        }

        if (params.HandleParam) {
            let obj = new HandleParam();
            obj.deserialize(params.HandleParam)
            this.HandleParam = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.IsUsedClassify = 'IsUsedClassify' in params ? params.IsUsedClassify : null;

    }
}

/**
 * TextToObject请求参数结构体
 * @class
 */
class TextToObjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告文本
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 报告类型，目前支持12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为False，则Type字段不能为0，否则无法输出结果。
注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。
         * @type {boolean || null}
         */
        this.IsUsedClassify = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IsUsedClassify = 'IsUsedClassify' in params ? params.IsUsedClassify : null;

    }
}

/**
 * 纵横比
 * @class
 */
class AspectRatio extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Relation = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Relation = 'Relation' in params ? params.Relation : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 病症描述信息
 * @class
 */
class SymptomInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Grade = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 病变
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Symptom = null;

        /**
         * 属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BlockInfo> || null}
         */
        this.Attrs = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Grade) {
            let obj = new BlockInfo();
            obj.deserialize(params.Grade)
            this.Grade = obj;
        }

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Symptom) {
            let obj = new BlockInfo();
            obj.deserialize(params.Symptom)
            this.Symptom = obj;
        }

        if (params.Attrs) {
            this.Attrs = new Array();
            for (let z in params.Attrs) {
                let obj = new BlockInfo();
                obj.deserialize(params.Attrs[z]);
                this.Attrs.push(obj);
            }
        }
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 结节
 * @class
 */
class TuberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Type = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.Size = null;

        /**
         * 多发
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Multiple || null}
         */
        this.Multiple = null;

        /**
         * 纵横比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AspectRatio || null}
         */
        this.AspectRatio = null;

        /**
         * 边缘
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Edge = null;

        /**
         * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InnerEcho = null;

        /**
         * 外部回声
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.RearEcho = null;

        /**
         * 弹性质地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Elastic || null}
         */
        this.Elastic = null;

        /**
         * 形状
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Shape = null;

        /**
         * 形态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ShapeAttr = null;

        /**
         * 皮髓质信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SkinMedulla = null;

        /**
         * 变化趋势
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Trend = null;

        /**
         * 钙化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Calcification = null;

        /**
         * 包膜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Envelope = null;

        /**
         * 强化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Enhancement = null;

        /**
         * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.LymphEnlargement = null;

        /**
         * 淋巴门
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.LymphDoor = null;

        /**
         * 活动度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Activity = null;

        /**
         * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Operation = null;

        /**
         * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.CDFI = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SizeStatus = null;

        /**
         * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InnerEchoDistribution = null;

        /**
         * 内部回声类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BlockInfo> || null}
         */
        this.InnerEchoType = null;

        /**
         * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Outline = null;

        /**
         * 结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Structure = null;

        /**
         * 密度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Density = null;

        /**
         * 血管
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Vas = null;

        /**
         * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Cysticwall = null;

        /**
         * 被膜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Capsule = null;

        /**
         * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Size || null}
         */
        this.IsthmusThicknese = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Type) {
            let obj = new BlockInfo();
            obj.deserialize(params.Type)
            this.Type = obj;
        }

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }

        if (params.Size) {
            this.Size = new Array();
            for (let z in params.Size) {
                let obj = new Size();
                obj.deserialize(params.Size[z]);
                this.Size.push(obj);
            }
        }

        if (params.Multiple) {
            let obj = new Multiple();
            obj.deserialize(params.Multiple)
            this.Multiple = obj;
        }

        if (params.AspectRatio) {
            let obj = new AspectRatio();
            obj.deserialize(params.AspectRatio)
            this.AspectRatio = obj;
        }

        if (params.Edge) {
            let obj = new BlockInfo();
            obj.deserialize(params.Edge)
            this.Edge = obj;
        }

        if (params.InnerEcho) {
            let obj = new BlockInfo();
            obj.deserialize(params.InnerEcho)
            this.InnerEcho = obj;
        }

        if (params.RearEcho) {
            let obj = new BlockInfo();
            obj.deserialize(params.RearEcho)
            this.RearEcho = obj;
        }

        if (params.Elastic) {
            let obj = new Elastic();
            obj.deserialize(params.Elastic)
            this.Elastic = obj;
        }

        if (params.Shape) {
            let obj = new BlockInfo();
            obj.deserialize(params.Shape)
            this.Shape = obj;
        }

        if (params.ShapeAttr) {
            let obj = new BlockInfo();
            obj.deserialize(params.ShapeAttr)
            this.ShapeAttr = obj;
        }

        if (params.SkinMedulla) {
            let obj = new BlockInfo();
            obj.deserialize(params.SkinMedulla)
            this.SkinMedulla = obj;
        }

        if (params.Trend) {
            let obj = new BlockInfo();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

        if (params.Calcification) {
            let obj = new BlockInfo();
            obj.deserialize(params.Calcification)
            this.Calcification = obj;
        }

        if (params.Envelope) {
            let obj = new BlockInfo();
            obj.deserialize(params.Envelope)
            this.Envelope = obj;
        }

        if (params.Enhancement) {
            let obj = new BlockInfo();
            obj.deserialize(params.Enhancement)
            this.Enhancement = obj;
        }

        if (params.LymphEnlargement) {
            let obj = new BlockInfo();
            obj.deserialize(params.LymphEnlargement)
            this.LymphEnlargement = obj;
        }

        if (params.LymphDoor) {
            let obj = new BlockInfo();
            obj.deserialize(params.LymphDoor)
            this.LymphDoor = obj;
        }

        if (params.Activity) {
            let obj = new BlockInfo();
            obj.deserialize(params.Activity)
            this.Activity = obj;
        }

        if (params.Operation) {
            let obj = new BlockInfo();
            obj.deserialize(params.Operation)
            this.Operation = obj;
        }

        if (params.CDFI) {
            let obj = new BlockInfo();
            obj.deserialize(params.CDFI)
            this.CDFI = obj;
        }
        this.Index = 'Index' in params ? params.Index : null;

        if (params.SizeStatus) {
            let obj = new BlockInfo();
            obj.deserialize(params.SizeStatus)
            this.SizeStatus = obj;
        }

        if (params.InnerEchoDistribution) {
            let obj = new BlockInfo();
            obj.deserialize(params.InnerEchoDistribution)
            this.InnerEchoDistribution = obj;
        }

        if (params.InnerEchoType) {
            this.InnerEchoType = new Array();
            for (let z in params.InnerEchoType) {
                let obj = new BlockInfo();
                obj.deserialize(params.InnerEchoType[z]);
                this.InnerEchoType.push(obj);
            }
        }

        if (params.Outline) {
            let obj = new BlockInfo();
            obj.deserialize(params.Outline)
            this.Outline = obj;
        }

        if (params.Structure) {
            let obj = new BlockInfo();
            obj.deserialize(params.Structure)
            this.Structure = obj;
        }

        if (params.Density) {
            let obj = new BlockInfo();
            obj.deserialize(params.Density)
            this.Density = obj;
        }

        if (params.Vas) {
            let obj = new BlockInfo();
            obj.deserialize(params.Vas)
            this.Vas = obj;
        }

        if (params.Cysticwall) {
            let obj = new BlockInfo();
            obj.deserialize(params.Cysticwall)
            this.Cysticwall = obj;
        }

        if (params.Capsule) {
            let obj = new BlockInfo();
            obj.deserialize(params.Capsule)
            this.Capsule = obj;
        }

        if (params.IsthmusThicknese) {
            let obj = new Size();
            obj.deserialize(params.IsthmusThicknese)
            this.IsthmusThicknese = obj;
        }
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 孕产史
 * @class
 */
class ObstericalMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 婚史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MarriageHistory = null;

        /**
         * 孕史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FertilityHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MarriageHistory = 'MarriageHistory' in params ? params.MarriageHistory : null;
        this.FertilityHistory = 'FertilityHistory' in params ? params.FertilityHistory : null;

    }
}

/**
 * 多发
 * @class
 */
class Multiple extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 出入院信息
 * @class
 */
class Hospitalization extends  AbstractModel {
    constructor(){
        super();

        /**
         * 入院时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionTime = null;

        /**
         * 出院时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeTime = null;

        /**
         * 住院天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionDays = null;

        /**
         * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionDignosis = null;

        /**
         * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionCondition = null;

        /**
         * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnosisTreatment = null;

        /**
         * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeDiagnosis = null;

        /**
         * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeInstruction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AdmissionTime = 'AdmissionTime' in params ? params.AdmissionTime : null;
        this.DischargeTime = 'DischargeTime' in params ? params.DischargeTime : null;
        this.AdmissionDays = 'AdmissionDays' in params ? params.AdmissionDays : null;
        this.AdmissionDignosis = 'AdmissionDignosis' in params ? params.AdmissionDignosis : null;
        this.AdmissionCondition = 'AdmissionCondition' in params ? params.AdmissionCondition : null;
        this.DiagnosisTreatment = 'DiagnosisTreatment' in params ? params.DiagnosisTreatment : null;
        this.DischargeDiagnosis = 'DischargeDiagnosis' in params ? params.DischargeDiagnosis : null;
        this.DischargeInstruction = 'DischargeInstruction' in params ? params.DischargeInstruction : null;

    }
}

/**
 * 家族疾病史
 * @class
 */
class FamilyMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 家族成员史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelativeHistory = null;

        /**
         * 家族肿瘤史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelativeCancerHistory = null;

        /**
         * 家族遗传史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GeneticHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RelativeHistory = 'RelativeHistory' in params ? params.RelativeHistory : null;
        this.RelativeCancerHistory = 'RelativeCancerHistory' in params ? params.RelativeCancerHistory : null;
        this.GeneticHistory = 'GeneticHistory' in params ? params.GeneticHistory : null;

    }
}

/**
 * 建议
 * @class
 */
class Advice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * TextToObject返回参数结构体
 * @class
 */
class TextToObjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告结构化结果
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 门诊病历信息
 * @class
 */
class MedicalRecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 就诊日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnosisTime = null;

        /**
         * 就诊科室
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnosisDepartmentName = null;

        /**
         * 就诊医生
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnosisDoctorName = null;

        /**
         * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClinicalDiagnosis = null;

        /**
         * 主述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainNarration = null;

        /**
         * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhysicalExamination = null;

        /**
         * 检查结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InspectionFindings = null;

        /**
         * 治疗意见
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TreatmentOpinion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagnosisTime = 'DiagnosisTime' in params ? params.DiagnosisTime : null;
        this.DiagnosisDepartmentName = 'DiagnosisDepartmentName' in params ? params.DiagnosisDepartmentName : null;
        this.DiagnosisDoctorName = 'DiagnosisDoctorName' in params ? params.DiagnosisDoctorName : null;
        this.ClinicalDiagnosis = 'ClinicalDiagnosis' in params ? params.ClinicalDiagnosis : null;
        this.MainNarration = 'MainNarration' in params ? params.MainNarration : null;
        this.PhysicalExamination = 'PhysicalExamination' in params ? params.PhysicalExamination : null;
        this.InspectionFindings = 'InspectionFindings' in params ? params.InspectionFindings : null;
        this.TreatmentOpinion = 'TreatmentOpinion' in params ? params.TreatmentOpinion : null;

    }
}

/**
 * 部位信息
 * @class
 */
class Part extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NormPart || null}
         */
        this.NormPart = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;

        if (params.NormPart) {
            let obj = new NormPart();
            obj.deserialize(params.NormPart)
            this.NormPart = obj;
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ImageToClass返回参数结构体
 * @class
 */
class ImageToClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TextType> || null}
         */
        this.TextTypeList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TextTypeList) {
            this.TextTypeList = new Array();
            for (let z in params.TextTypeList) {
                let obj = new TextType();
                obj.deserialize(params.TextTypeList[z]);
                this.TextTypeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 淋巴
 * @class
 */
class Lymph extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 转移数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransferNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.TransferNum = 'TransferNum' in params ? params.TransferNum : null;

    }
}

/**
 * 侵犯扩散
 * @class
 */
class Invas extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 阳性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Positive = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 心电图指标项
 * @class
 */
class EcgItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 标准部位
 * @class
 */
class NormPart extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部位值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Part = null;

        /**
         * 部位方向
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PartDirection = null;

        /**
         * 组织值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tissue = null;

        /**
         * 组织方向
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TissueDirection = null;

        /**
         * 上级部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Upper = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Part = 'Part' in params ? params.Part : null;
        this.PartDirection = 'PartDirection' in params ? params.PartDirection : null;
        this.Tissue = 'Tissue' in params ? params.Tissue : null;
        this.TissueDirection = 'TissueDirection' in params ? params.TissueDirection : null;
        this.Upper = 'Upper' in params ? params.Upper : null;

    }
}

/**
 * 医学资料
 * @class
 */
class MedDoc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Advice || null}
         */
        this.Advice = null;

        /**
         * 诊断结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiagCertItem> || null}
         */
        this.Diagnosis = null;

        /**
         * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseaseMedicalHistory || null}
         */
        this.DiseaseMedicalHistory = null;

        /**
         * 个人史
         * @type {PersonalMedicalHistory || null}
         */
        this.PersonalMedicalHistory = null;

        /**
         * 婚孕史
         * @type {ObstericalMedicalHistory || null}
         */
        this.ObstericalMedicalHistory = null;

        /**
         * 家族史
         * @type {FamilyMedicalHistory || null}
         */
        this.FamilyMedicalHistory = null;

        /**
         * 月经史
         * @type {MenstrualMedicalHistory || null}
         */
        this.MenstrualMedicalHistory = null;

        /**
         * 诊疗记录
         * @type {TreatmentRecord || null}
         */
        this.TreatmentRecord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Advice) {
            let obj = new Advice();
            obj.deserialize(params.Advice)
            this.Advice = obj;
        }

        if (params.Diagnosis) {
            this.Diagnosis = new Array();
            for (let z in params.Diagnosis) {
                let obj = new DiagCertItem();
                obj.deserialize(params.Diagnosis[z]);
                this.Diagnosis.push(obj);
            }
        }

        if (params.DiseaseMedicalHistory) {
            let obj = new DiseaseMedicalHistory();
            obj.deserialize(params.DiseaseMedicalHistory)
            this.DiseaseMedicalHistory = obj;
        }

        if (params.PersonalMedicalHistory) {
            let obj = new PersonalMedicalHistory();
            obj.deserialize(params.PersonalMedicalHistory)
            this.PersonalMedicalHistory = obj;
        }

        if (params.ObstericalMedicalHistory) {
            let obj = new ObstericalMedicalHistory();
            obj.deserialize(params.ObstericalMedicalHistory)
            this.ObstericalMedicalHistory = obj;
        }

        if (params.FamilyMedicalHistory) {
            let obj = new FamilyMedicalHistory();
            obj.deserialize(params.FamilyMedicalHistory)
            this.FamilyMedicalHistory = obj;
        }

        if (params.MenstrualMedicalHistory) {
            let obj = new MenstrualMedicalHistory();
            obj.deserialize(params.MenstrualMedicalHistory)
            this.MenstrualMedicalHistory = obj;
        }

        if (params.TreatmentRecord) {
            let obj = new TreatmentRecord();
            obj.deserialize(params.TreatmentRecord)
            this.TreatmentRecord = obj;
        }

    }
}

/**
 * 内窥部位
 * @class
 */
class EndoscopyOrgan extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 部位别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PartAlias = null;

        /**
         * 症状描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BlockInfo> || null}
         */
        this.SymDescList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.PartAlias = 'PartAlias' in params ? params.PartAlias : null;

        if (params.SymDescList) {
            this.SymDescList = new Array();
            for (let z in params.SymDescList) {
                let obj = new BlockInfo();
                obj.deserialize(params.SymDescList[z]);
                this.SymDescList.push(obj);
            }
        }

    }
}

/**
 * 患者信息
 * @class
 */
class PatientInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 患者姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 患者性别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 患者年龄
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Age = null;

        /**
         * 患者手机号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 患者地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 患者身份证
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 健康卡号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthCardNo = null;

        /**
         * 社保卡号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SocialSecurityCardNo = null;

        /**
         * 出生日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * 民族
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ethnicity = null;

        /**
         * 婚姻状况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Married = null;

        /**
         * 职业
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Profession = null;

        /**
         * 教育程度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EducationBackground = null;

        /**
         * 国籍
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 籍贯
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * 医保类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MedicalInsuranceType = null;

        /**
         * 标准化年龄
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgeNorm = null;

        /**
         * 民族
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 婚姻代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MarriedCode = null;

        /**
         * 职业代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProfessionCode = null;

        /**
         * 居民医保代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MedicalInsuranceTypeCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.HealthCardNo = 'HealthCardNo' in params ? params.HealthCardNo : null;
        this.SocialSecurityCardNo = 'SocialSecurityCardNo' in params ? params.SocialSecurityCardNo : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Ethnicity = 'Ethnicity' in params ? params.Ethnicity : null;
        this.Married = 'Married' in params ? params.Married : null;
        this.Profession = 'Profession' in params ? params.Profession : null;
        this.EducationBackground = 'EducationBackground' in params ? params.EducationBackground : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.MedicalInsuranceType = 'MedicalInsuranceType' in params ? params.MedicalInsuranceType : null;
        this.AgeNorm = 'AgeNorm' in params ? params.AgeNorm : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.MarriedCode = 'MarriedCode' in params ? params.MarriedCode : null;
        this.ProfessionCode = 'ProfessionCode' in params ? params.ProfessionCode : null;
        this.MedicalInsuranceTypeCode = 'MedicalInsuranceTypeCode' in params ? params.MedicalInsuranceTypeCode : null;

    }
}

/**
 * 组织学等级
 * @class
 */
class HistologyLevel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * ImageToObject返回参数结构体
 * @class
 */
class ImageToObjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告结构化结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Template || null}
         */
        this.Template = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 处方单
 * @class
 */
class Prescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 药品列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Medicine> || null}
         */
        this.MedicineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MedicineList) {
            this.MedicineList = new Array();
            for (let z in params.MedicineList) {
                let obj = new Medicine();
                obj.deserialize(params.MedicineList[z]);
                this.MedicineList.push(obj);
            }
        }

    }
}

/**
 * 个人史
 * @class
 */
class PersonalMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出生史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * 居住史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LivePlace = null;

        /**
         * 工作史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Job = null;

        /**
         * 吸烟史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SmokeHistory = null;

        /**
         * 饮酒史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlcoholicHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.LivePlace = 'LivePlace' in params ? params.LivePlace : null;
        this.Job = 'Job' in params ? params.Job : null;
        this.SmokeHistory = 'SmokeHistory' in params ? params.SmokeHistory : null;
        this.AlcoholicHistory = 'AlcoholicHistory' in params ? params.AlcoholicHistory : null;

    }
}

/**
 * 器官
 * @class
 */
class Organ extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.Size = null;

        /**
         * 包膜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Envelope = null;

        /**
         * 边缘
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Edge = null;

        /**
         * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InnerEcho = null;

        /**
         * 腺体
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Gland = null;

        /**
         * 形状
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Shape = null;

        /**
         * 厚度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Thickness = null;

        /**
         * 形态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ShapeAttr = null;

        /**
         * 血液cdfi
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.CDFI = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SymDesc = null;

        /**
         * 大小状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SizeStatus = null;

        /**
         * 轮廓
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Outline = null;

        /**
         * 结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Structure = null;

        /**
         * 密度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Density = null;

        /**
         * 血管
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Vas = null;

        /**
         * 囊壁
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Cysticwall = null;

        /**
         * 被膜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Capsule = null;

        /**
         * 峡部厚度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Size || null}
         */
        this.IsthmusThicknese = null;

        /**
         * 内部回声分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InnerEchoDistribution = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }

        if (params.Size) {
            this.Size = new Array();
            for (let z in params.Size) {
                let obj = new Size();
                obj.deserialize(params.Size[z]);
                this.Size.push(obj);
            }
        }

        if (params.Envelope) {
            let obj = new BlockInfo();
            obj.deserialize(params.Envelope)
            this.Envelope = obj;
        }

        if (params.Edge) {
            let obj = new BlockInfo();
            obj.deserialize(params.Edge)
            this.Edge = obj;
        }

        if (params.InnerEcho) {
            let obj = new BlockInfo();
            obj.deserialize(params.InnerEcho)
            this.InnerEcho = obj;
        }

        if (params.Gland) {
            let obj = new BlockInfo();
            obj.deserialize(params.Gland)
            this.Gland = obj;
        }

        if (params.Shape) {
            let obj = new BlockInfo();
            obj.deserialize(params.Shape)
            this.Shape = obj;
        }

        if (params.Thickness) {
            let obj = new BlockInfo();
            obj.deserialize(params.Thickness)
            this.Thickness = obj;
        }

        if (params.ShapeAttr) {
            let obj = new BlockInfo();
            obj.deserialize(params.ShapeAttr)
            this.ShapeAttr = obj;
        }

        if (params.CDFI) {
            let obj = new BlockInfo();
            obj.deserialize(params.CDFI)
            this.CDFI = obj;
        }

        if (params.SymDesc) {
            let obj = new BlockInfo();
            obj.deserialize(params.SymDesc)
            this.SymDesc = obj;
        }

        if (params.SizeStatus) {
            let obj = new BlockInfo();
            obj.deserialize(params.SizeStatus)
            this.SizeStatus = obj;
        }

        if (params.Outline) {
            let obj = new BlockInfo();
            obj.deserialize(params.Outline)
            this.Outline = obj;
        }

        if (params.Structure) {
            let obj = new BlockInfo();
            obj.deserialize(params.Structure)
            this.Structure = obj;
        }

        if (params.Density) {
            let obj = new BlockInfo();
            obj.deserialize(params.Density)
            this.Density = obj;
        }

        if (params.Vas) {
            let obj = new BlockInfo();
            obj.deserialize(params.Vas)
            this.Vas = obj;
        }

        if (params.Cysticwall) {
            let obj = new BlockInfo();
            obj.deserialize(params.Cysticwall)
            this.Cysticwall = obj;
        }

        if (params.Capsule) {
            let obj = new BlockInfo();
            obj.deserialize(params.Capsule)
            this.Capsule = obj;
        }

        if (params.IsthmusThicknese) {
            let obj = new Size();
            obj.deserialize(params.IsthmusThicknese)
            this.IsthmusThicknese = obj;
        }

        if (params.InnerEchoDistribution) {
            let obj = new BlockInfo();
            obj.deserialize(params.InnerEchoDistribution)
            this.InnerEchoDistribution = obj;
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * 诊断证明
 * @class
 */
class DiagCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Advice || null}
         */
        this.Advice = null;

        /**
         * 诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiagCertItem> || null}
         */
        this.Diagnosis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Advice) {
            let obj = new Advice();
            obj.deserialize(params.Advice)
            this.Advice = obj;
        }

        if (params.Diagnosis) {
            this.Diagnosis = new Array();
            for (let z in params.Diagnosis) {
                let obj = new DiagCertItem();
                obj.deserialize(params.Diagnosis[z]);
                this.Diagnosis.push(obj);
            }
        }

    }
}

/**
 * 病历
 * @class
 */
class TreatmentRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 入院
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DmissionCondition = null;

        /**
         * 主诉
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChiefComplaint = null;

        /**
         * 现病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiseasePresent = null;

        /**
         * 主要症状体征
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SymptomsAndSigns = null;

        /**
         * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuxiliaryExamination = null;

        /**
         * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BodyExamination = null;

        /**
         * 专科检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecialistExamination = null;

        /**
         * 精神检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MentalExamination = null;

        /**
         * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckRecord = null;

        /**
         * 化验结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InspectResult = null;

        /**
         * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncisionHealing = null;

        /**
         * 处理意见
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TreatmentSuggestion = null;

        /**
         * 门诊随访要求
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FollowUpRequirements = null;

        /**
         * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckAndTreatmentProcess = null;

        /**
         * 手术经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SurgeryCondition = null;

        /**
         * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionChanges = null;

        /**
         * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeCondition = null;

        /**
         * pTNM信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNM = null;

        /**
         * pTNMM信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMM = null;

        /**
         * pTNMN信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMN = null;

        /**
         * pTNMT信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMT = null;

        /**
         * ECOG信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ECOG = null;

        /**
         * NRS信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NRS = null;

        /**
         * KPS信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KPS = null;

        /**
         * 死亡日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeathDate = null;

        /**
         * 复发日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelapseDate = null;

        /**
         * 观测天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObservationDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DmissionCondition = 'DmissionCondition' in params ? params.DmissionCondition : null;
        this.ChiefComplaint = 'ChiefComplaint' in params ? params.ChiefComplaint : null;
        this.DiseasePresent = 'DiseasePresent' in params ? params.DiseasePresent : null;
        this.SymptomsAndSigns = 'SymptomsAndSigns' in params ? params.SymptomsAndSigns : null;
        this.AuxiliaryExamination = 'AuxiliaryExamination' in params ? params.AuxiliaryExamination : null;
        this.BodyExamination = 'BodyExamination' in params ? params.BodyExamination : null;
        this.SpecialistExamination = 'SpecialistExamination' in params ? params.SpecialistExamination : null;
        this.MentalExamination = 'MentalExamination' in params ? params.MentalExamination : null;
        this.CheckRecord = 'CheckRecord' in params ? params.CheckRecord : null;
        this.InspectResult = 'InspectResult' in params ? params.InspectResult : null;
        this.IncisionHealing = 'IncisionHealing' in params ? params.IncisionHealing : null;
        this.TreatmentSuggestion = 'TreatmentSuggestion' in params ? params.TreatmentSuggestion : null;
        this.FollowUpRequirements = 'FollowUpRequirements' in params ? params.FollowUpRequirements : null;
        this.CheckAndTreatmentProcess = 'CheckAndTreatmentProcess' in params ? params.CheckAndTreatmentProcess : null;
        this.SurgeryCondition = 'SurgeryCondition' in params ? params.SurgeryCondition : null;
        this.ConditionChanges = 'ConditionChanges' in params ? params.ConditionChanges : null;
        this.DischargeCondition = 'DischargeCondition' in params ? params.DischargeCondition : null;
        this.PTNM = 'PTNM' in params ? params.PTNM : null;
        this.PTNMM = 'PTNMM' in params ? params.PTNMM : null;
        this.PTNMN = 'PTNMN' in params ? params.PTNMN : null;
        this.PTNMT = 'PTNMT' in params ? params.PTNMT : null;
        this.ECOG = 'ECOG' in params ? params.ECOG : null;
        this.NRS = 'NRS' in params ? params.NRS : null;
        this.KPS = 'KPS' in params ? params.KPS : null;
        this.DeathDate = 'DeathDate' in params ? params.DeathDate : null;
        this.RelapseDate = 'RelapseDate' in params ? params.RelapseDate : null;
        this.ObservationDays = 'ObservationDays' in params ? params.ObservationDays : null;

    }
}

/**
 * 免疫接种证明
 * @class
 */
class VaccineCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免疫接种列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Vaccination> || null}
         */
        this.VaccineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VaccineList) {
            this.VaccineList = new Array();
            for (let z in params.VaccineList) {
                let obj = new Vaccination();
                obj.deserialize(params.VaccineList[z]);
                this.VaccineList.push(obj);
            }
        }

    }
}

/**
 * 值
 * @class
 */
class Value extends  AbstractModel {
    constructor(){
        super();

        /**
         * 等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 百分比
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Percent = null;

        /**
         * 阳性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Positive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.Positive = 'Positive' in params ? params.Positive : null;

    }
}

/**
 * 结论
 * @class
 */
class Summary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 症状
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SymptomInfo> || null}
         */
        this.Symptom = null;

        /**
         * 文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Symptom) {
            this.Symptom = new Array();
            for (let z in params.Symptom) {
                let obj = new SymptomInfo();
                obj.deserialize(params.Symptom[z]);
                this.Symptom.push(obj);
            }
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 疾病史
 * @class
 */
class DiseaseMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainDiseaseHistory = null;

        /**
         * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllergyHistory = null;

        /**
         * 传染疾病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InfectHistory = null;

        /**
         * 手术史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperationHistory = null;

        /**
         * 输血史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransfusionHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainDiseaseHistory = 'MainDiseaseHistory' in params ? params.MainDiseaseHistory : null;
        this.AllergyHistory = 'AllergyHistory' in params ? params.AllergyHistory : null;
        this.InfectHistory = 'InfectHistory' in params ? params.InfectHistory : null;
        this.OperationHistory = 'OperationHistory' in params ? params.OperationHistory : null;
        this.TransfusionHistory = 'TransfusionHistory' in params ? params.TransfusionHistory : null;

    }
}

/**
 * 病理报告
 * @class
 */
class PathologyReport extends  AbstractModel {
    constructor(){
        super();

        /**
         * 癌症部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.CancerPart = null;

        /**
         * 癌症部位大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.CancerSize = null;

        /**
         * 描述文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DescText = null;

        /**
         * 组织学等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyLevel || null}
         */
        this.HistologyLevel = null;

        /**
         * 组织学类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyType || null}
         */
        this.HistologyType = null;

        /**
         * IHC信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IHCInfo> || null}
         */
        this.IHC = null;

        /**
         * 浸润深度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InfiltrationDepth = null;

        /**
         * 肿瘤扩散
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Invas> || null}
         */
        this.Invasive = null;

        /**
         * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Lymph> || null}
         */
        this.LymphNodes = null;

        /**
         * PTNM信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.PTNM = null;

        /**
         * 病理报告类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.PathologicalReportType = null;

        /**
         * 报告原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportText = null;

        /**
         * 标本类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SampleType = null;

        /**
         * 结论文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SummaryText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CancerPart) {
            let obj = new Part();
            obj.deserialize(params.CancerPart)
            this.CancerPart = obj;
        }

        if (params.CancerSize) {
            this.CancerSize = new Array();
            for (let z in params.CancerSize) {
                let obj = new Size();
                obj.deserialize(params.CancerSize[z]);
                this.CancerSize.push(obj);
            }
        }
        this.DescText = 'DescText' in params ? params.DescText : null;

        if (params.HistologyLevel) {
            let obj = new HistologyLevel();
            obj.deserialize(params.HistologyLevel)
            this.HistologyLevel = obj;
        }

        if (params.HistologyType) {
            let obj = new HistologyType();
            obj.deserialize(params.HistologyType)
            this.HistologyType = obj;
        }

        if (params.IHC) {
            this.IHC = new Array();
            for (let z in params.IHC) {
                let obj = new IHCInfo();
                obj.deserialize(params.IHC[z]);
                this.IHC.push(obj);
            }
        }

        if (params.InfiltrationDepth) {
            let obj = new BlockInfo();
            obj.deserialize(params.InfiltrationDepth)
            this.InfiltrationDepth = obj;
        }

        if (params.Invasive) {
            this.Invasive = new Array();
            for (let z in params.Invasive) {
                let obj = new Invas();
                obj.deserialize(params.Invasive[z]);
                this.Invasive.push(obj);
            }
        }

        if (params.LymphNodes) {
            this.LymphNodes = new Array();
            for (let z in params.LymphNodes) {
                let obj = new Lymph();
                obj.deserialize(params.LymphNodes[z]);
                this.LymphNodes.push(obj);
            }
        }

        if (params.PTNM) {
            let obj = new BlockInfo();
            obj.deserialize(params.PTNM)
            this.PTNM = obj;
        }

        if (params.PathologicalReportType) {
            let obj = new BlockInfo();
            obj.deserialize(params.PathologicalReportType)
            this.PathologicalReportType = obj;
        }
        this.ReportText = 'ReportText' in params ? params.ReportText : null;

        if (params.SampleType) {
            let obj = new BlockInfo();
            obj.deserialize(params.SampleType)
            this.SampleType = obj;
        }
        this.SummaryText = 'SummaryText' in params ? params.SummaryText : null;

    }
}

/**
 * TextToClass返回参数结构体
 * @class
 */
class TextToClassResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类结果
         * @type {Array.<TextType> || null}
         */
        this.TextTypeList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TextTypeList) {
            this.TextTypeList = new Array();
            for (let z in params.TextTypeList) {
                let obj = new TextType();
                obj.deserialize(params.TextTypeList[z]);
                this.TextTypeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 组织学类型
 * @class
 */
class HistologyType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 浸润
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Infiltration = null;

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Infiltration = 'Infiltration' in params ? params.Infiltration : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 块信息
 * @class
 */
class BlockInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 阳性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Positive = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 手术记录属性
 * @class
 */
class SurgeryAttr extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 文本类型
 * @class
 */
class TextType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类别Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 类别层级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 类别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 内窥镜描述
 * @class
 */
class EndoscopyDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 器官
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EndoscopyOrgan> || null}
         */
        this.Organ = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Organ) {
            this.Organ = new Array();
            for (let z in params.Organ) {
                let obj = new EndoscopyOrgan();
                obj.deserialize(params.Organ[z]);
                this.Organ.push(obj);
            }
        }

    }
}

/**
 * 心电图详情
 * @class
 */
class EcgDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 心率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.HeartRate = null;

        /**
         * 心房率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.AuricularRate = null;

        /**
         * 心室率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.VentricularRate = null;

        /**
         * 节律
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.Rhythm = null;

        /**
         * P波时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.PDuration = null;

        /**
         * QRS时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.QrsDuration = null;

        /**
         * QRS电轴
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.QrsAxis = null;

        /**
         * P-R间期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.PRInterval = null;

        /**
         * P-P间期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.PPInterval = null;

        /**
         * R-R间期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.RRInterval = null;

        /**
         * P-J间期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.PJInterval = null;

        /**
         * Q-T间期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.QTInterval = null;

        /**
         * qt/qtc间期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.QTCInterval = null;

        /**
         * RV5/SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.Rv5SV1Amplitude = null;

        /**
         * RV5+SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.Rv5AddSV1Amplitude = null;

        /**
         * PRT电轴
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.PRTAxis = null;

        /**
         * RV5振幅
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.Rv5Amplitude = null;

        /**
         * SV1振幅
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.SV1Amplitude = null;

        /**
         * RV6/SV2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.RV6SV2 = null;

        /**
         * P/QRS/T电轴
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgItem || null}
         */
        this.PQRSTAxis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HeartRate) {
            let obj = new EcgItem();
            obj.deserialize(params.HeartRate)
            this.HeartRate = obj;
        }

        if (params.AuricularRate) {
            let obj = new EcgItem();
            obj.deserialize(params.AuricularRate)
            this.AuricularRate = obj;
        }

        if (params.VentricularRate) {
            let obj = new EcgItem();
            obj.deserialize(params.VentricularRate)
            this.VentricularRate = obj;
        }

        if (params.Rhythm) {
            let obj = new EcgItem();
            obj.deserialize(params.Rhythm)
            this.Rhythm = obj;
        }

        if (params.PDuration) {
            let obj = new EcgItem();
            obj.deserialize(params.PDuration)
            this.PDuration = obj;
        }

        if (params.QrsDuration) {
            let obj = new EcgItem();
            obj.deserialize(params.QrsDuration)
            this.QrsDuration = obj;
        }

        if (params.QrsAxis) {
            let obj = new EcgItem();
            obj.deserialize(params.QrsAxis)
            this.QrsAxis = obj;
        }

        if (params.PRInterval) {
            let obj = new EcgItem();
            obj.deserialize(params.PRInterval)
            this.PRInterval = obj;
        }

        if (params.PPInterval) {
            let obj = new EcgItem();
            obj.deserialize(params.PPInterval)
            this.PPInterval = obj;
        }

        if (params.RRInterval) {
            let obj = new EcgItem();
            obj.deserialize(params.RRInterval)
            this.RRInterval = obj;
        }

        if (params.PJInterval) {
            let obj = new EcgItem();
            obj.deserialize(params.PJInterval)
            this.PJInterval = obj;
        }

        if (params.QTInterval) {
            let obj = new EcgItem();
            obj.deserialize(params.QTInterval)
            this.QTInterval = obj;
        }

        if (params.QTCInterval) {
            let obj = new EcgItem();
            obj.deserialize(params.QTCInterval)
            this.QTCInterval = obj;
        }

        if (params.Rv5SV1Amplitude) {
            let obj = new EcgItem();
            obj.deserialize(params.Rv5SV1Amplitude)
            this.Rv5SV1Amplitude = obj;
        }

        if (params.Rv5AddSV1Amplitude) {
            let obj = new EcgItem();
            obj.deserialize(params.Rv5AddSV1Amplitude)
            this.Rv5AddSV1Amplitude = obj;
        }

        if (params.PRTAxis) {
            let obj = new EcgItem();
            obj.deserialize(params.PRTAxis)
            this.PRTAxis = obj;
        }

        if (params.Rv5Amplitude) {
            let obj = new EcgItem();
            obj.deserialize(params.Rv5Amplitude)
            this.Rv5Amplitude = obj;
        }

        if (params.SV1Amplitude) {
            let obj = new EcgItem();
            obj.deserialize(params.SV1Amplitude)
            this.SV1Amplitude = obj;
        }

        if (params.RV6SV2) {
            let obj = new EcgItem();
            obj.deserialize(params.RV6SV2)
            this.RV6SV2 = obj;
        }

        if (params.PQRSTAxis) {
            let obj = new EcgItem();
            obj.deserialize(params.PQRSTAxis)
            this.PQRSTAxis = obj;
        }

    }
}

/**
 * 检验指标项
 * @class
 */
class IndicatorItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 英文缩写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 标准缩写
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scode = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标准名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sname = null;

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 参考范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Range = null;

        /**
         * 上下箭头
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Arrow = null;

        /**
         * 是否正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Normal = null;

        /**
         * 项目原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ItemString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Scode = 'Scode' in params ? params.Scode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sname = 'Sname' in params ? params.Sname : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Range = 'Range' in params ? params.Range : null;
        this.Arrow = 'Arrow' in params ? params.Arrow : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.ItemString = 'ItemString' in params ? params.ItemString : null;

    }
}

/**
 * 图片信息
 * @class
 */
class ImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 图片url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 图片base64编码
         * @type {string || null}
         */
        this.Base64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Base64 = 'Base64' in params ? params.Base64 : null;

    }
}

/**
 * 诊断证明项
 * @class
 */
class DiagCertItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 活检部位
 * @class
 */
class BiopsyPart extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 月经史
 * @class
 */
class MenstrualMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 末次月经时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastMenstrualPeriod = null;

        /**
         * 经量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstrualFlow = null;

        /**
         * 月经初潮年龄
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenarcheAge = null;

        /**
         * 是否来月经
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstruationOrNot = null;

        /**
         * 月经周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstrualCycles = null;

        /**
         * 月经持续天数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstrualPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LastMenstrualPeriod = 'LastMenstrualPeriod' in params ? params.LastMenstrualPeriod : null;
        this.MenstrualFlow = 'MenstrualFlow' in params ? params.MenstrualFlow : null;
        this.MenarcheAge = 'MenarcheAge' in params ? params.MenarcheAge : null;
        this.MenstruationOrNot = 'MenstruationOrNot' in params ? params.MenstruationOrNot : null;
        this.MenstrualCycles = 'MenstrualCycles' in params ? params.MenstrualCycles : null;
        this.MenstrualPeriod = 'MenstrualPeriod' in params ? params.MenstrualPeriod : null;

    }
}

/**
 * ImageToClass请求参数结构体
 * @class
 */
class ImageToClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片列表，允许传入多张图片，支持传入图片的base64编码，暂不支持图片url
         * @type {Array.<ImageInfo> || null}
         */
        this.ImageInfoList = null;

        /**
         * 图片处理参数
         * @type {HandleParam || null}
         */
        this.HandleParam = null;

        /**
         * 不填，默认为0
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageInfoList) {
            this.ImageInfoList = new Array();
            for (let z in params.ImageInfoList) {
                let obj = new ImageInfo();
                obj.deserialize(params.ImageInfoList[z]);
                this.ImageInfoList.push(obj);
            }
        }

        if (params.HandleParam) {
            let obj = new HandleParam();
            obj.deserialize(params.HandleParam)
            this.HandleParam = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 大小
 * @class
 */
class NormSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Number = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Number = 'Number' in params ? params.Number : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * 病案首页
 * @class
 */
class FirstPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出入院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DischargeDiagnosis> || null}
         */
        this.DischargeDiagnosis = null;

        /**
         * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.PathologicalDiagnosis = null;

        /**
         * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ClinicalDiagnosis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DischargeDiagnosis) {
            this.DischargeDiagnosis = new Array();
            for (let z in params.DischargeDiagnosis) {
                let obj = new DischargeDiagnosis();
                obj.deserialize(params.DischargeDiagnosis[z]);
                this.DischargeDiagnosis.push(obj);
            }
        }

        if (params.PathologicalDiagnosis) {
            let obj = new BlockInfo();
            obj.deserialize(params.PathologicalDiagnosis)
            this.PathologicalDiagnosis = obj;
        }

        if (params.ClinicalDiagnosis) {
            let obj = new BlockInfo();
            obj.deserialize(params.ClinicalDiagnosis)
            this.ClinicalDiagnosis = obj;
        }

    }
}

/**
 * 检查报告单
 * @class
 */
class Check extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Desc || null}
         */
        this.Desc = null;

        /**
         * 结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Summary || null}
         */
        this.Summary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Desc) {
            let obj = new Desc();
            obj.deserialize(params.Desc)
            this.Desc = obj;
        }

        if (params.Summary) {
            let obj = new Summary();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }

    }
}

/**
 * 心电图诊断
 * @class
 */
class EcgDiagnosis extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * TextToClass请求参数结构体
 * @class
 */
class TextToClassRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告文本
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 手术记录
 * @class
 */
class Surgery extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手术史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryHistory || null}
         */
        this.SurgeryHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SurgeryHistory) {
            let obj = new SurgeryHistory();
            obj.deserialize(params.SurgeryHistory)
            this.SurgeryHistory = obj;
        }

    }
}

/**
 * 描述
 * @class
 */
class Desc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 器官
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Organ> || null}
         */
        this.Organ = null;

        /**
         * 结节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TuberInfo> || null}
         */
        this.Tuber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Organ) {
            this.Organ = new Array();
            for (let z in params.Organ) {
                let obj = new Organ();
                obj.deserialize(params.Organ[z]);
                this.Organ.push(obj);
            }
        }

        if (params.Tuber) {
            this.Tuber = new Array();
            for (let z in params.Tuber) {
                let obj = new TuberInfo();
                obj.deserialize(params.Tuber[z]);
                this.Tuber.push(obj);
            }
        }

    }
}

/**
 * 出入院诊断
 * @class
 */
class DischargeDiagnosis extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableIndex = null;

        /**
         * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.OutDiagnosis = null;

        /**
         * 疾病编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.DiseaseCode = null;

        /**
         * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InStatus = null;

        /**
         * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.OutStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableIndex = 'TableIndex' in params ? params.TableIndex : null;

        if (params.OutDiagnosis) {
            let obj = new BlockInfo();
            obj.deserialize(params.OutDiagnosis)
            this.OutDiagnosis = obj;
        }

        if (params.DiseaseCode) {
            let obj = new BlockInfo();
            obj.deserialize(params.DiseaseCode)
            this.DiseaseCode = obj;
        }

        if (params.InStatus) {
            let obj = new BlockInfo();
            obj.deserialize(params.InStatus)
            this.InStatus = obj;
        }

        if (params.OutStatus) {
            let obj = new BlockInfo();
            obj.deserialize(params.OutStatus)
            this.OutStatus = obj;
        }

    }
}

/**
 * 心电图
 * @class
 */
class Electrocardiogram extends  AbstractModel {
    constructor(){
        super();

        /**
         * 心电图详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgDescription || null}
         */
        this.EcgDescription = null;

        /**
         * 心电图诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EcgDiagnosis || null}
         */
        this.EcgDiagnosis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EcgDescription) {
            let obj = new EcgDescription();
            obj.deserialize(params.EcgDescription)
            this.EcgDescription = obj;
        }

        if (params.EcgDiagnosis) {
            let obj = new EcgDiagnosis();
            obj.deserialize(params.EcgDiagnosis)
            this.EcgDiagnosis = obj;
        }

    }
}

/**
 * 大小
 * @class
 */
class Size extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 标准大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NormSize || null}
         */
        this.NormSize = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;

        if (params.NormSize) {
            let obj = new NormSize();
            obj.deserialize(params.NormSize)
            this.NormSize = obj;
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

module.exports = {
    Indicator: Indicator,
    Template: Template,
    Elastic: Elastic,
    Vaccination: Vaccination,
    ReportInfo: ReportInfo,
    Endoscopy: Endoscopy,
    IHCInfo: IHCInfo,
    SurgeryHistory: SurgeryHistory,
    Medicine: Medicine,
    HandleParam: HandleParam,
    ImageToObjectRequest: ImageToObjectRequest,
    TextToObjectRequest: TextToObjectRequest,
    AspectRatio: AspectRatio,
    SymptomInfo: SymptomInfo,
    TuberInfo: TuberInfo,
    ObstericalMedicalHistory: ObstericalMedicalHistory,
    Multiple: Multiple,
    Hospitalization: Hospitalization,
    FamilyMedicalHistory: FamilyMedicalHistory,
    Advice: Advice,
    TextToObjectResponse: TextToObjectResponse,
    MedicalRecordInfo: MedicalRecordInfo,
    Part: Part,
    ImageToClassResponse: ImageToClassResponse,
    Lymph: Lymph,
    Invas: Invas,
    EcgItem: EcgItem,
    NormPart: NormPart,
    MedDoc: MedDoc,
    EndoscopyOrgan: EndoscopyOrgan,
    PatientInfo: PatientInfo,
    HistologyLevel: HistologyLevel,
    ImageToObjectResponse: ImageToObjectResponse,
    Prescription: Prescription,
    PersonalMedicalHistory: PersonalMedicalHistory,
    Organ: Organ,
    DiagCert: DiagCert,
    TreatmentRecord: TreatmentRecord,
    VaccineCertificate: VaccineCertificate,
    Value: Value,
    Summary: Summary,
    DiseaseMedicalHistory: DiseaseMedicalHistory,
    PathologyReport: PathologyReport,
    TextToClassResponse: TextToClassResponse,
    HistologyType: HistologyType,
    BlockInfo: BlockInfo,
    SurgeryAttr: SurgeryAttr,
    TextType: TextType,
    EndoscopyDesc: EndoscopyDesc,
    EcgDescription: EcgDescription,
    IndicatorItem: IndicatorItem,
    ImageInfo: ImageInfo,
    DiagCertItem: DiagCertItem,
    BiopsyPart: BiopsyPart,
    MenstrualMedicalHistory: MenstrualMedicalHistory,
    ImageToClassRequest: ImageToClassRequest,
    NormSize: NormSize,
    FirstPage: FirstPage,
    Check: Check,
    EcgDiagnosis: EcgDiagnosis,
    TextToClassRequest: TextToClassRequest,
    Surgery: Surgery,
    Desc: Desc,
    DischargeDiagnosis: DischargeDiagnosis,
    Electrocardiogram: Electrocardiogram,
    Size: Size,

}
