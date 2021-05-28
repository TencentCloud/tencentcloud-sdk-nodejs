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

    }
}

/**
 * 质地
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
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * “”
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
         * 图片列表
         * @type {Array.<ImageInfo> || null}
         */
        this.ImageInfoList = null;

        /**
         * 图片处理参数
         * @type {HandleParam || null}
         */
        this.HandleParam = null;

        /**
         * 图片类别
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否使用分类引擎
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
         * 报告类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 是否使用分类引擎
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
 * 横纵比
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
 * 病症描述
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
         * 数量
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
         * 质地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Elastic || null}
         */
        this.Elastic = null;

        /**
         * 形态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Shape = null;

        /**
         * 形态属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ShapeAttr = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SkinMedulla = null;

        /**
         * “”
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
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Operation = null;

        /**
         * “”
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
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SizeStatus = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InnerEchoDistribution = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BlockInfo> || null}
         */
        this.InnerEchoType = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Outline = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Structure = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Density = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Vas = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Cysticwall = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Capsule = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Size || null}
         */
        this.IsthmusThicknese = null;

        /**
         * “”
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
 * 数量
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
 * 家族疾病史
 * @class
 */
class FamilyMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelativeHistory = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelativeCancerHistory = null;

        /**
         * ""
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
 * 部位
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
 * Invasive
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
 * 部位
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
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Advice || null}
         */
        this.Advice = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiagCertItem> || null}
         */
        this.Diagnosis = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseaseMedicalHistory || null}
         */
        this.DiseaseMedicalHistory = null;

        /**
         * “”
         * @type {PersonalMedicalHistory || null}
         */
        this.PersonalMedicalHistory = null;

        /**
         * “”
         * @type {ObstericalMedicalHistory || null}
         */
        this.ObstericalMedicalHistory = null;

        /**
         * “”
         * @type {FamilyMedicalHistory || null}
         */
        this.FamilyMedicalHistory = null;

        /**
         * “”
         * @type {MenstrualMedicalHistory || null}
         */
        this.MenstrualMedicalHistory = null;

        /**
         * “”
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
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Envelope = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Edge = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InnerEcho = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Gland = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Shape = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Thickness = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ShapeAttr = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.CDFI = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SymDesc = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SizeStatus = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Outline = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Structure = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Density = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Vas = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Cysticwall = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Capsule = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Size || null}
         */
        this.IsthmusThicknese = null;

        /**
         * ""
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
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DmissionCondition = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChiefComplaint = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiseasePresent = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SymptomsAndSigns = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuxiliaryExamination = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BodyExamination = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecialistExamination = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MentalExamination = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckRecord = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InspectResult = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncisionHealing = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TreatmentSuggestion = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FollowUpRequirements = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckAndTreatmentProcess = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SurgeryCondition = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConditionChanges = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeCondition = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNM = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMM = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMN = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMT = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ECOG = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NRS = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KPS = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeathDate = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelapseDate = null;

        /**
         * “”
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
 * 值
 * @class
 */
class Value extends  AbstractModel {
    constructor(){
        super();

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * “”
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
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.OutDiagnosis = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.DiseaseCode = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InStatus = null;

        /**
         * ""
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
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.CancerPart = null;

        /**
         * ""
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
         * 癌症
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyLevel || null}
         */
        this.HistologyLevel = null;

        /**
         * 扩散
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyType || null}
         */
        this.HistologyType = null;

        /**
         * 淋巴
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IHCInfo> || null}
         */
        this.IHC = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.InfiltrationDepth = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Invas> || null}
         */
        this.Invasive = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Lymph> || null}
         */
        this.LymphNodes = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.PTNM = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.PathologicalReportType = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportText = null;

        /**
         * ""
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SampleType = null;

        /**
         * ""
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
 * 类型
 * @class
 */
class HistologyType extends  AbstractModel {
    constructor(){
        super();

        /**
         * “”
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
 * 总结
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
 * 等级
 * @class
 */
class HistologyLevel extends  AbstractModel {
    constructor(){
        super();

        /**
         * “”
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
 * 指标项
 * @class
 */
class IndicatorItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scode = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Sname = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Range = null;

        /**
         * “”
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
 * 月经史
 * @class
 */
class MenstrualMedicalHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastMenstrualPeriod = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstrualFlow = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenarcheAge = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstruationOrNot = null;

        /**
         * “”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstrualCycles = null;

        /**
         * “”
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
         * 图片列表
         * @type {Array.<ImageInfo> || null}
         */
        this.ImageInfoList = null;

        /**
         * 图片处理参数
         * @type {HandleParam || null}
         */
        this.HandleParam = null;

        /**
         * 图片类型
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
    ReportInfo: ReportInfo,
    IHCInfo: IHCInfo,
    HandleParam: HandleParam,
    ImageToObjectRequest: ImageToObjectRequest,
    TextToObjectRequest: TextToObjectRequest,
    AspectRatio: AspectRatio,
    SymptomInfo: SymptomInfo,
    TuberInfo: TuberInfo,
    ObstericalMedicalHistory: ObstericalMedicalHistory,
    Multiple: Multiple,
    FamilyMedicalHistory: FamilyMedicalHistory,
    Advice: Advice,
    Part: Part,
    ImageToClassResponse: ImageToClassResponse,
    Lymph: Lymph,
    Invas: Invas,
    NormPart: NormPart,
    MedDoc: MedDoc,
    Desc: Desc,
    PatientInfo: PatientInfo,
    PersonalMedicalHistory: PersonalMedicalHistory,
    Organ: Organ,
    DiagCert: DiagCert,
    TreatmentRecord: TreatmentRecord,
    Value: Value,
    DischargeDiagnosis: DischargeDiagnosis,
    DiseaseMedicalHistory: DiseaseMedicalHistory,
    PathologyReport: PathologyReport,
    TextToClassResponse: TextToClassResponse,
    HistologyType: HistologyType,
    BlockInfo: BlockInfo,
    Summary: Summary,
    TextType: TextType,
    HistologyLevel: HistologyLevel,
    IndicatorItem: IndicatorItem,
    ImageInfo: ImageInfo,
    DiagCertItem: DiagCertItem,
    MenstrualMedicalHistory: MenstrualMedicalHistory,
    ImageToClassRequest: ImageToClassRequest,
    NormSize: NormSize,
    FirstPage: FirstPage,
    Check: Check,
    TextToObjectResponse: TextToObjectResponse,
    TextToClassRequest: TextToClassRequest,
    ImageToObjectResponse: ImageToObjectResponse,
    Size: Size,

}
