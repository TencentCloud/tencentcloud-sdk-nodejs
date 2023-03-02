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
 * 末次月经
 * @class
 */
class LastMenstrualPeriodBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Value = 'Value' in params ? params.Value : null;

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

        /**
         * 疫苗批号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Lot = null;

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
        this.Lot = 'Lot' in params ? params.Lot : null;

    }
}

/**
 * 时间轴事件
 * @class
 */
class TimelineEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 原文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 事件子类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 事件发生时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 事件值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 位置坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Rectangle || null}
         */
        this.Rectangle = null;

        /**
         * 事件发生地点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Place = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Rectangle) {
            let obj = new Rectangle();
            obj.deserialize(params.Rectangle)
            this.Rectangle = obj;
        }
        this.Place = 'Place' in params ? params.Place : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * IHC块
 * @class
 */
class IHCBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引
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
         * 具体值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ValueBlock || null}
         */
        this.Value = null;

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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
            let obj = new ValueBlock();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 体温名称
 * @class
 */
class BodyTemperatureBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 病理详细
 * @class
 */
class PathologicalDiagnosisDetailBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Part = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HistologicalType = null;

        /**
         * 等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HistologicalGrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Part = 'Part' in params ? params.Part : null;
        this.HistologicalType = 'HistologicalType' in params ? params.HistologicalType : null;
        this.HistologicalGrade = 'HistologicalGrade' in params ? params.HistologicalGrade : null;

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

        /**
         * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。
（1）检验报告 11，默认使用 V2，最高支持 V3。
（2）病理报告 15，默认使用 V1，最高支持 V2。
（3）入院记录29、出院记录 28、病理记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。
         * @type {Array.<ReportTypeVersion> || null}
         */
        this.ReportTypeVersion = null;

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
        this.UserType = 'UserType' in params ? params.UserType : null;

        if (params.ReportTypeVersion) {
            this.ReportTypeVersion = new Array();
            for (let z in params.ReportTypeVersion) {
                let obj = new ReportTypeVersion();
                obj.deserialize(params.ReportTypeVersion[z]);
                this.ReportTypeVersion.push(obj);
            }
        }

    }
}

/**
 * 分子病理
 * @class
 */
class Molecular extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引
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
         * 基因名称标注化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分子病理详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MolecularValue || null}
         */
        this.Value = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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
            let obj = new MolecularValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

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

        /**
         * 透声度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Transparent = null;

        /**
         * MRI ADC
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriAdc = null;

        /**
         * MRI DWI
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriDwi = null;

        /**
         * MRI T1信号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriT1 = null;

        /**
         * MRI T2信号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriT2 = null;

        /**
         * CT HU值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.CtHu = null;

        /**
         * SUmax值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Suvmax = null;

        /**
         * 代谢情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Metabolism = null;

        /**
         * 放射性摄取
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.RadioactiveUptake = null;

        /**
         * 病变
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.SymDesc = null;

        /**
         * 影像特征
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ImageFeature = null;

        /**
         * 在报告图片中的坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Transparent) {
            let obj = new BlockInfo();
            obj.deserialize(params.Transparent)
            this.Transparent = obj;
        }

        if (params.MriAdc) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriAdc)
            this.MriAdc = obj;
        }

        if (params.MriDwi) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriDwi)
            this.MriDwi = obj;
        }

        if (params.MriT1) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriT1)
            this.MriT1 = obj;
        }

        if (params.MriT2) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriT2)
            this.MriT2 = obj;
        }

        if (params.CtHu) {
            let obj = new BlockInfo();
            obj.deserialize(params.CtHu)
            this.CtHu = obj;
        }

        if (params.Suvmax) {
            let obj = new BlockInfo();
            obj.deserialize(params.Suvmax)
            this.Suvmax = obj;
        }

        if (params.Metabolism) {
            let obj = new BlockInfo();
            obj.deserialize(params.Metabolism)
            this.Metabolism = obj;
        }

        if (params.RadioactiveUptake) {
            let obj = new BlockInfo();
            obj.deserialize(params.RadioactiveUptake)
            this.RadioactiveUptake = obj;
        }

        if (params.SymDesc) {
            let obj = new BlockInfo();
            obj.deserialize(params.SymDesc)
            this.SymDesc = obj;
        }

        if (params.ImageFeature) {
            let obj = new BlockInfo();
            obj.deserialize(params.ImageFeature)
            this.ImageFeature = obj;
        }

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 手术列表
 * @class
 */
class SurgeryListBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Name = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Part = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Part = 'Part' in params ? params.Part : null;

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
 * 查体
 * @class
 */
class BodyExaminationBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 体温
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BodyTemperatureBlock || null}
         */
        this.BodyTemperature = null;

        /**
         * 脉搏
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BodyTemperatureBlock || null}
         */
        this.Pulse = null;

        /**
         * 呼吸
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BodyTemperatureBlock || null}
         */
        this.Breathe = null;

        /**
         * 血压
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BloodPressureBlock || null}
         */
        this.BloodPressure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BodyTemperature) {
            let obj = new BodyTemperatureBlock();
            obj.deserialize(params.BodyTemperature)
            this.BodyTemperature = obj;
        }

        if (params.Pulse) {
            let obj = new BodyTemperatureBlock();
            obj.deserialize(params.Pulse)
            this.Pulse = obj;
        }

        if (params.Breathe) {
            let obj = new BodyTemperatureBlock();
            obj.deserialize(params.Breathe)
            this.Breathe = obj;
        }

        if (params.BloodPressure) {
            let obj = new BloodPressureBlock();
            obj.deserialize(params.BloodPressure)
            this.BloodPressure = obj;
        }

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
 * 报告类型
 * @class
 */
class Report extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 索引
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
         * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 出生地
 * @class
 */
class BirthPlaceBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * pTNM
 * @class
 */
class PTNM extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 索引
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
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * pT
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PT = null;

        /**
         * pN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PN = null;

        /**
         * pM
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PM = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.PT = 'PT' in params ? params.PT : null;
        this.PN = 'PN' in params ? params.PN : null;
        this.PM = 'PM' in params ? params.PM : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 检验报告结构
 * @class
 */
class TableIndicators extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IndicatorItemV2> || null}
         */
        this.Indicators = null;

        /**
         * 采样标本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Sample = null;

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
                let obj = new IndicatorItemV2();
                obj.deserialize(params.Indicators[z]);
                this.Indicators.push(obj);
            }
        }

        if (params.Sample) {
            let obj = new BaseItem();
            obj.deserialize(params.Sample)
            this.Sample = obj;
        }

    }
}

/**
 * 组织学类
 * @class
 */
class HistologyClass extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 索引
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
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 块信息
 * @class
 */
class BlockInfoV2 extends  AbstractModel {
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
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 疾病编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Code = 'Code' in params ? params.Code : null;

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

        /**
         * 部位详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PartDesc || null}
         */
        this.PartDetail = null;

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

        if (params.PartDetail) {
            let obj = new PartDesc();
            obj.deserialize(params.PartDetail)
            this.PartDetail = obj;
        }

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
 * 基础类型
 * @class
 */
class BaseItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原始文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化后值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 病案首页第二页
 * @class
 */
class Fp2NdItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手术编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Code = null;

        /**
         * 手术名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Name = null;

        /**
         * 手术开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.StartTime = null;

        /**
         * 手术结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.EndTime = null;

        /**
         * 手术等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Level = null;

        /**
         * 手术类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Type = null;

        /**
         * 醉愈合方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.IncisionHealingGrade = null;

        /**
         * 麻醉方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.AnesthesiaMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Code) {
            let obj = new BaseItem();
            obj.deserialize(params.Code)
            this.Code = obj;
        }

        if (params.Name) {
            let obj = new BaseItem();
            obj.deserialize(params.Name)
            this.Name = obj;
        }

        if (params.StartTime) {
            let obj = new BaseItem();
            obj.deserialize(params.StartTime)
            this.StartTime = obj;
        }

        if (params.EndTime) {
            let obj = new BaseItem();
            obj.deserialize(params.EndTime)
            this.EndTime = obj;
        }

        if (params.Level) {
            let obj = new BaseItem();
            obj.deserialize(params.Level)
            this.Level = obj;
        }

        if (params.Type) {
            let obj = new BaseItem();
            obj.deserialize(params.Type)
            this.Type = obj;
        }

        if (params.IncisionHealingGrade) {
            let obj = new BaseItem();
            obj.deserialize(params.IncisionHealingGrade)
            this.IncisionHealingGrade = obj;
        }

        if (params.AnesthesiaMethod) {
            let obj = new BaseItem();
            obj.deserialize(params.AnesthesiaMethod)
            this.AnesthesiaMethod = obj;
        }

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

        /**
         * 透声度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Transparent = null;

        /**
         * MRI ADC
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriAdc = null;

        /**
         * MRI DWI
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriDwi = null;

        /**
         * MRI T1信号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriT1 = null;

        /**
         * MRI T2信号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.MriT2 = null;

        /**
         * CT HU值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.CtHu = null;

        /**
         * SUmax值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Suvmax = null;

        /**
         * 代谢情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Metabolism = null;

        /**
         * 放射性摄取
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.RadioactiveUptake = null;

        /**
         * 淋巴结情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.LymphEnlargement = null;

        /**
         * 影像特征
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.ImageFeature = null;

        /**
         * 导管
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Duct = null;

        /**
         * 趋势
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Trend = null;

        /**
         * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfo || null}
         */
        this.Operation = null;

        /**
         * 器官在报告图片中的坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Transparent) {
            let obj = new BlockInfo();
            obj.deserialize(params.Transparent)
            this.Transparent = obj;
        }

        if (params.MriAdc) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriAdc)
            this.MriAdc = obj;
        }

        if (params.MriDwi) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriDwi)
            this.MriDwi = obj;
        }

        if (params.MriT1) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriT1)
            this.MriT1 = obj;
        }

        if (params.MriT2) {
            let obj = new BlockInfo();
            obj.deserialize(params.MriT2)
            this.MriT2 = obj;
        }

        if (params.CtHu) {
            let obj = new BlockInfo();
            obj.deserialize(params.CtHu)
            this.CtHu = obj;
        }

        if (params.Suvmax) {
            let obj = new BlockInfo();
            obj.deserialize(params.Suvmax)
            this.Suvmax = obj;
        }

        if (params.Metabolism) {
            let obj = new BlockInfo();
            obj.deserialize(params.Metabolism)
            this.Metabolism = obj;
        }

        if (params.RadioactiveUptake) {
            let obj = new BlockInfo();
            obj.deserialize(params.RadioactiveUptake)
            this.RadioactiveUptake = obj;
        }

        if (params.LymphEnlargement) {
            let obj = new BlockInfo();
            obj.deserialize(params.LymphEnlargement)
            this.LymphEnlargement = obj;
        }

        if (params.ImageFeature) {
            let obj = new BlockInfo();
            obj.deserialize(params.ImageFeature)
            this.ImageFeature = obj;
        }

        if (params.Duct) {
            let obj = new BlockInfo();
            obj.deserialize(params.Duct)
            this.Duct = obj;
        }

        if (params.Trend) {
            let obj = new BlockInfo();
            obj.deserialize(params.Trend)
            this.Trend = obj;
        }

        if (params.Operation) {
            let obj = new BlockInfo();
            obj.deserialize(params.Operation)
            this.Operation = obj;
        }

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 现病史
 * @class
 */
class DiseasePresentBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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
         * 归一化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Norm = 'Norm' in params ? params.Norm : null;

    }
}

/**
 * 月经经期
 * @class
 */
class MenstrualPeriodBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * 既往史
 * @class
 */
class MainDiseaseHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.State = null;

        /**
         * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 否定列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NeglistBlock || null}
         */
        this.Neglist = null;

        /**
         * 肯定列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PoslistBlock || null}
         */
        this.Poslist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.State = 'State' in params ? params.State : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Neglist) {
            let obj = new NeglistBlock();
            obj.deserialize(params.Neglist)
            this.Neglist = obj;
        }

        if (params.Poslist) {
            let obj = new PoslistBlock();
            obj.deserialize(params.Poslist)
            this.Poslist = obj;
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
 * 家族遗传史
 * @class
 */
class GeneticHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 遗传列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GeneticList = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.GeneticList = 'GeneticList' in params ? params.GeneticList : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 月经史
 * @class
 */
class MenstrualHistoryDetailBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.State = 'State' in params ? params.State : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 核酸报告结论
 * @class
 */
class CovidItemsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核酸报告结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CovidItem> || null}
         */
        this.CovidItems = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CovidItems) {
            this.CovidItems = new Array();
            for (let z in params.CovidItems) {
                let obj = new CovidItem();
                obj.deserialize(params.CovidItems[z]);
                this.CovidItems.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 血压
 * @class
 */
class BloodPressureBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 舒张压
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NormDiastolic = null;

        /**
         * 收缩压
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NormSystolic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.NormDiastolic = 'NormDiastolic' in params ? params.NormDiastolic : null;
        this.NormSystolic = 'NormSystolic' in params ? params.NormSystolic : null;

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
 * 眼科报告结构体
 * @class
 */
class EyeItemsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 眼科报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EyeItem || null}
         */
        this.EyeItems = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EyeItems) {
            let obj = new EyeItem();
            obj.deserialize(params.EyeItems)
            this.EyeItems = obj;
        }
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 检验指标项结构v2
 * @class
 */
class IndicatorItemV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Item = null;

        /**
         * 英文编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Code = null;

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Result = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Unit = null;

        /**
         * 参考范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Range = null;

        /**
         * 上下箭头
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Arrow = null;

        /**
         * 检测方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.Method = null;

        /**
         * 结果是否异常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Normal = null;

        /**
         * ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 推测结果是否异常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InferNormal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Item) {
            let obj = new BaseItem();
            obj.deserialize(params.Item)
            this.Item = obj;
        }

        if (params.Code) {
            let obj = new BaseItem();
            obj.deserialize(params.Code)
            this.Code = obj;
        }

        if (params.Result) {
            let obj = new BaseItem();
            obj.deserialize(params.Result)
            this.Result = obj;
        }

        if (params.Unit) {
            let obj = new BaseItem();
            obj.deserialize(params.Unit)
            this.Unit = obj;
        }

        if (params.Range) {
            let obj = new BaseItem();
            obj.deserialize(params.Range)
            this.Range = obj;
        }

        if (params.Arrow) {
            let obj = new BaseItem();
            obj.deserialize(params.Arrow)
            this.Arrow = obj;
        }

        if (params.Method) {
            let obj = new BaseItem();
            obj.deserialize(params.Method)
            this.Method = obj;
        }
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.InferNormal = 'InferNormal' in params ? params.InferNormal : null;

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

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Impl = null;

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
        this.Impl = 'Impl' in params ? params.Impl : null;

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

        /**
         * 受伤中毒的外部原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BlockInfoV2 || null}
         */
        this.DamagePoi = null;

        /**
         * 病案首页第二页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Fp2NdItem> || null}
         */
        this.Fp2NdItems = null;

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

        if (params.DamagePoi) {
            let obj = new BlockInfoV2();
            obj.deserialize(params.DamagePoi)
            this.DamagePoi = obj;
        }

        if (params.Fp2NdItems) {
            this.Fp2NdItems = new Array();
            for (let z in params.Fp2NdItems) {
                let obj = new Fp2NdItem();
                obj.deserialize(params.Fp2NdItems[z]);
                this.Fp2NdItems.push(obj);
            }
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
 * 手术经过
 * @class
 */
class SurgeryConditionBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 手术历史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SurgeryListBlock> || null}
         */
        this.SurgeryList = null;

        /**
         * 对外输出值

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
        this.Src = 'Src' in params ? params.Src : null;

        if (params.SurgeryList) {
            this.SurgeryList = new Array();
            for (let z in params.SurgeryList) {
                let obj = new SurgeryListBlock();
                obj.deserialize(params.SurgeryList[z]);
                this.SurgeryList.push(obj);
            }
        }
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 通用块信息
 * @class
 */
class FieldInfo extends  AbstractModel {
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
         * 数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NumValue> || null}
         */
        this.Nums = null;

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

        if (params.Nums) {
            this.Nums = new Array();
            for (let z in params.Nums) {
                let obj = new NumValue();
                obj.deserialize(params.Nums[z]);
                this.Nums.push(obj);
            }
        }
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 详情
 * @class
 */
class DetailInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Part || null}
         */
        this.Part = null;

        /**
         * 组织大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.TissueSizes = null;

        /**
         * 结节大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.TuberSizes = null;

        /**
         * 肿瘤大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.CancerSizes = null;

        /**
         * 组织学等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.HistologyLevel = null;

        /**
         * 组织学类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyTypeV2 || null}
         */
        this.HistologyType = null;

        /**
         * 侵犯
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InvasiveV2> || null}
         */
        this.Invasive = null;

        /**
         * pTNM
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PTNM || null}
         */
        this.PTNM = null;

        /**
         * 浸润深度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.InfiltrationDepth = null;

        /**
         * 结节数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.TuberNum = null;

        /**
         * 钙化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Calcification = null;

        /**
         * 坏死
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Necrosis = null;

        /**
         * 异形
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Abnormity = null;

        /**
         * 断链
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Breaked = null;

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

        if (params.TissueSizes) {
            this.TissueSizes = new Array();
            for (let z in params.TissueSizes) {
                let obj = new Size();
                obj.deserialize(params.TissueSizes[z]);
                this.TissueSizes.push(obj);
            }
        }

        if (params.TuberSizes) {
            this.TuberSizes = new Array();
            for (let z in params.TuberSizes) {
                let obj = new Size();
                obj.deserialize(params.TuberSizes[z]);
                this.TuberSizes.push(obj);
            }
        }

        if (params.CancerSizes) {
            this.CancerSizes = new Array();
            for (let z in params.CancerSizes) {
                let obj = new Size();
                obj.deserialize(params.CancerSizes[z]);
                this.CancerSizes.push(obj);
            }
        }

        if (params.HistologyLevel) {
            let obj = new BaseInfo();
            obj.deserialize(params.HistologyLevel)
            this.HistologyLevel = obj;
        }

        if (params.HistologyType) {
            let obj = new HistologyTypeV2();
            obj.deserialize(params.HistologyType)
            this.HistologyType = obj;
        }

        if (params.Invasive) {
            this.Invasive = new Array();
            for (let z in params.Invasive) {
                let obj = new InvasiveV2();
                obj.deserialize(params.Invasive[z]);
                this.Invasive.push(obj);
            }
        }

        if (params.PTNM) {
            let obj = new PTNM();
            obj.deserialize(params.PTNM)
            this.PTNM = obj;
        }

        if (params.InfiltrationDepth) {
            let obj = new BaseInfo();
            obj.deserialize(params.InfiltrationDepth)
            this.InfiltrationDepth = obj;
        }

        if (params.TuberNum) {
            let obj = new BaseInfo();
            obj.deserialize(params.TuberNum)
            this.TuberNum = obj;
        }

        if (params.Calcification) {
            let obj = new BaseInfo();
            obj.deserialize(params.Calcification)
            this.Calcification = obj;
        }

        if (params.Necrosis) {
            let obj = new BaseInfo();
            obj.deserialize(params.Necrosis)
            this.Necrosis = obj;
        }

        if (params.Abnormity) {
            let obj = new BaseInfo();
            obj.deserialize(params.Abnormity)
            this.Abnormity = obj;
        }

        if (params.Breaked) {
            let obj = new BaseInfo();
            obj.deserialize(params.Breaked)
            this.Breaked = obj;
        }

    }
}

/**
 * 孕产结论部分
 * @class
 */
class MaternitySummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 胎儿数据结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Fetus> || null}
         */
        this.Fetus = null;

        /**
         * 胎儿数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.FetusNum = null;

        /**
         * 病变
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FieldInfo> || null}
         */
        this.Sym = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Fetus) {
            this.Fetus = new Array();
            for (let z in params.Fetus) {
                let obj = new Fetus();
                obj.deserialize(params.Fetus[z]);
                this.Fetus.push(obj);
            }
        }

        if (params.FetusNum) {
            let obj = new FieldInfo();
            obj.deserialize(params.FetusNum)
            this.FetusNum = obj;
        }

        if (params.Sym) {
            this.Sym = new Array();
            for (let z in params.Sym) {
                let obj = new FieldInfo();
                obj.deserialize(params.Sym[z]);
                this.Sym.push(obj);
            }
        }
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
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
 * 输血史
 * @class
 */
class TransfusionHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.State = null;

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
        this.Src = 'Src' in params ? params.Src : null;
        this.State = 'State' in params ? params.State : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 分子病理详细信息
 * @class
 */
class MolecularValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外显子
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Exon = null;

        /**
         * 点位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 阳性或阴性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Positive = null;

        /**
         * 基因名称原文
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
        this.Exon = 'Exon' in params ? params.Exon : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Src = 'Src' in params ? params.Src : null;

    }
}

/**
 * 主诉详情
 * @class
 */
class ChiefComplaintDetailBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 疾病名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiseaseName = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Part = null;

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiseaseName = 'DiseaseName' in params ? params.DiseaseName : null;
        this.Part = 'Part' in params ? params.Part : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;

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

        /**
         * 检查项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckItem = null;

        /**
         * 检查方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckMethod = null;

        /**
         * 诊断时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnoseTime = null;

        /**
         * 体检号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthCheckupNum = null;

        /**
         * 其它时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherTime = null;

        /**
         * 打印时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrintTime = null;

        /**
         * 未归类时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Time> || null}
         */
        this.Times = null;

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
        this.CheckItem = 'CheckItem' in params ? params.CheckItem : null;
        this.CheckMethod = 'CheckMethod' in params ? params.CheckMethod : null;
        this.DiagnoseTime = 'DiagnoseTime' in params ? params.DiagnoseTime : null;
        this.HealthCheckupNum = 'HealthCheckupNum' in params ? params.HealthCheckupNum : null;
        this.OtherTime = 'OtherTime' in params ? params.OtherTime : null;
        this.PrintTime = 'PrintTime' in params ? params.PrintTime : null;

        if (params.Times) {
            this.Times = new Array();
            for (let z in params.Times) {
                let obj = new Time();
                obj.deserialize(params.Times[z]);
                this.Times.push(obj);
            }
        }

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
 * 家庭成员
 * @class
 */
class RelativeHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 成员列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RelativeHistoryDetailBlock> || null}
         */
        this.Detail = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 对外输出值
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

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new RelativeHistoryDetailBlock();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 体检结论
 * @class
 */
class Exame extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结论段落
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResultInfo> || null}
         */
        this.OverView = null;

        /**
         * 异常与建议段落
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResultInfo> || null}
         */
        this.Abnormality = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OverView) {
            this.OverView = new Array();
            for (let z in params.OverView) {
                let obj = new ResultInfo();
                obj.deserialize(params.OverView[z]);
                this.OverView.push(obj);
            }
        }

        if (params.Abnormality) {
            this.Abnormality = new Array();
            for (let z in params.Abnormality) {
                let obj = new ResultInfo();
                obj.deserialize(params.Abnormality[z]);
                this.Abnormality.push(obj);
            }
        }

    }
}

/**
 * 病理报告v2
 * @class
 */
class PathologyV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Report || null}
         */
        this.PathologicalReportType = null;

        /**
         * 描述段落
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DescInfo || null}
         */
        this.Desc = null;

        /**
         * 诊断结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SummaryInfo || null}
         */
        this.Summary = null;

        /**
         * 报告全文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportText = null;

        /**
         * 淋巴结总计转移信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LymphTotal> || null}
         */
        this.LymphTotal = null;

        /**
         * 单淋巴结转移信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LymphNode> || null}
         */
        this.LymphNodes = null;

        /**
         * ihc信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IHCV2> || null}
         */
        this.Ihc = null;

        /**
         * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Clinical = null;

        /**
         * 是否癌前病变
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyClass || null}
         */
        this.Precancer = null;

        /**
         * 是否恶性肿瘤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyClass || null}
         */
        this.Malignant = null;

        /**
         * 是否良性肿瘤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HistologyClass || null}
         */
        this.Benigntumor = null;

        /**
         * 送检材料
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.SampleType = null;

        /**
         * 淋巴结大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.LymphSize = null;

        /**
         * 分子病理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Molecular> || null}
         */
        this.Molecular = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PathologicalReportType) {
            let obj = new Report();
            obj.deserialize(params.PathologicalReportType)
            this.PathologicalReportType = obj;
        }

        if (params.Desc) {
            let obj = new DescInfo();
            obj.deserialize(params.Desc)
            this.Desc = obj;
        }

        if (params.Summary) {
            let obj = new SummaryInfo();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }
        this.ReportText = 'ReportText' in params ? params.ReportText : null;

        if (params.LymphTotal) {
            this.LymphTotal = new Array();
            for (let z in params.LymphTotal) {
                let obj = new LymphTotal();
                obj.deserialize(params.LymphTotal[z]);
                this.LymphTotal.push(obj);
            }
        }

        if (params.LymphNodes) {
            this.LymphNodes = new Array();
            for (let z in params.LymphNodes) {
                let obj = new LymphNode();
                obj.deserialize(params.LymphNodes[z]);
                this.LymphNodes.push(obj);
            }
        }

        if (params.Ihc) {
            this.Ihc = new Array();
            for (let z in params.Ihc) {
                let obj = new IHCV2();
                obj.deserialize(params.Ihc[z]);
                this.Ihc.push(obj);
            }
        }

        if (params.Clinical) {
            let obj = new BaseInfo();
            obj.deserialize(params.Clinical)
            this.Clinical = obj;
        }

        if (params.Precancer) {
            let obj = new HistologyClass();
            obj.deserialize(params.Precancer)
            this.Precancer = obj;
        }

        if (params.Malignant) {
            let obj = new HistologyClass();
            obj.deserialize(params.Malignant)
            this.Malignant = obj;
        }

        if (params.Benigntumor) {
            let obj = new HistologyClass();
            obj.deserialize(params.Benigntumor)
            this.Benigntumor = obj;
        }

        if (params.SampleType) {
            let obj = new BaseInfo();
            obj.deserialize(params.SampleType)
            this.SampleType = obj;
        }

        if (params.LymphSize) {
            this.LymphSize = new Array();
            for (let z in params.LymphSize) {
                let obj = new Size();
                obj.deserialize(params.LymphSize[z]);
                this.LymphSize.push(obj);
            }
        }

        if (params.Molecular) {
            this.Molecular = new Array();
            for (let z in params.Molecular) {
                let obj = new Molecular();
                obj.deserialize(params.Molecular[z]);
                this.Molecular.push(obj);
            }
        }

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

        /**
         * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
         * @type {number || null}
         */
        this.UserType = null;

        /**
         * 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。
（1）检验报告 11，默认使用 V2，最高支持 V3。
（2）病理报告 15，默认使用 V1，最高支持 V2。
（3）入院记录29、出院记录 28、病理记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。
         * @type {Array.<ReportTypeVersion> || null}
         */
        this.ReportTypeVersion = null;

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
        this.UserType = 'UserType' in params ? params.UserType : null;

        if (params.ReportTypeVersion) {
            this.ReportTypeVersion = new Array();
            for (let z in params.ReportTypeVersion) {
                let obj = new ReportTypeVersion();
                obj.deserialize(params.ReportTypeVersion[z]);
                this.ReportTypeVersion.push(obj);
            }
        }

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
 * 新生儿信息
 * @class
 */
class NeonatalInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新生儿名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NeonatalName = null;

        /**
         * 新生儿性别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NeonatalGender = null;

        /**
         * 出生身长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthLength = null;

        /**
         * 出生体重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthWeight = null;

        /**
         * 出生孕周
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GestationalAge = null;

        /**
         * 出生时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthTime = null;

        /**
         * 出生地点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BirthPlace = null;

        /**
         * 医疗机构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MedicalInstitutions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NeonatalName = 'NeonatalName' in params ? params.NeonatalName : null;
        this.NeonatalGender = 'NeonatalGender' in params ? params.NeonatalGender : null;
        this.BirthLength = 'BirthLength' in params ? params.BirthLength : null;
        this.BirthWeight = 'BirthWeight' in params ? params.BirthWeight : null;
        this.GestationalAge = 'GestationalAge' in params ? params.GestationalAge : null;
        this.BirthTime = 'BirthTime' in params ? params.BirthTime : null;
        this.BirthPlace = 'BirthPlace' in params ? params.BirthPlace : null;
        this.MedicalInstitutions = 'MedicalInstitutions' in params ? params.MedicalInstitutions : null;

    }
}

/**
 * 眼科结构体
 * @class
 */
class EyeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左眼
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EyeChildItem || null}
         */
        this.Left = null;

        /**
         * 右眼
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EyeChildItem || null}
         */
        this.Right = null;

        /**
         * 瞳距
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem2 || null}
         */
        this.Pd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Left) {
            let obj = new EyeChildItem();
            obj.deserialize(params.Left)
            this.Left = obj;
        }

        if (params.Right) {
            let obj = new EyeChildItem();
            obj.deserialize(params.Right)
            this.Right = obj;
        }

        if (params.Pd) {
            let obj = new BaseItem2();
            obj.deserialize(params.Pd)
            this.Pd = obj;
        }

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

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueBrief = null;

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
        this.ValueBrief = 'ValueBrief' in params ? params.ValueBrief : null;

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
         * 疫苗接种凭证
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

        /**
         * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportTypeDesc = null;

        /**
         * 病理报告v2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PathologyV2 || null}
         */
        this.PathologyV2 = null;

        /**
         * 碳14尿素呼气试验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Indicator || null}
         */
        this.C14 = null;

        /**
         * 体检结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Exame || null}
         */
        this.Exame = null;

        /**
         * 出院报告v2，入院报告v2，门诊病历v2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DischargeInfoBlock || null}
         */
        this.MedDocV2 = null;

        /**
         * 检验报告v3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IndicatorV3 || null}
         */
        this.IndicatorV3 = null;

        /**
         * 核酸报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CovidItemsInfo || null}
         */
        this.Covid = null;

        /**
         * 孕产报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Maternity || null}
         */
        this.Maternity = null;

        /**
         * 眼科报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EyeItemsInfo || null}
         */
        this.Eye = null;

        /**
         * 出生证明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BirthCert || null}
         */
        this.BirthCert = null;

        /**
         * 时间轴
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TimelineInformation || null}
         */
        this.Timeline = null;

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
        this.ReportTypeDesc = 'ReportTypeDesc' in params ? params.ReportTypeDesc : null;

        if (params.PathologyV2) {
            let obj = new PathologyV2();
            obj.deserialize(params.PathologyV2)
            this.PathologyV2 = obj;
        }

        if (params.C14) {
            let obj = new Indicator();
            obj.deserialize(params.C14)
            this.C14 = obj;
        }

        if (params.Exame) {
            let obj = new Exame();
            obj.deserialize(params.Exame)
            this.Exame = obj;
        }

        if (params.MedDocV2) {
            let obj = new DischargeInfoBlock();
            obj.deserialize(params.MedDocV2)
            this.MedDocV2 = obj;
        }

        if (params.IndicatorV3) {
            let obj = new IndicatorV3();
            obj.deserialize(params.IndicatorV3)
            this.IndicatorV3 = obj;
        }

        if (params.Covid) {
            let obj = new CovidItemsInfo();
            obj.deserialize(params.Covid)
            this.Covid = obj;
        }

        if (params.Maternity) {
            let obj = new Maternity();
            obj.deserialize(params.Maternity)
            this.Maternity = obj;
        }

        if (params.Eye) {
            let obj = new EyeItemsInfo();
            obj.deserialize(params.Eye)
            this.Eye = obj;
        }

        if (params.BirthCert) {
            let obj = new BirthCert();
            obj.deserialize(params.BirthCert)
            this.BirthCert = obj;
        }

        if (params.Timeline) {
            let obj = new TimelineInformation();
            obj.deserialize(params.Timeline)
            this.Timeline = obj;
        }

    }
}

/**
 * 孕产描述部分
 * @class
 */
class MaternityDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 胎儿数据结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Fetus> || null}
         */
        this.Fetus = null;

        /**
         * 胎儿数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.FetusNum = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Fetus) {
            this.Fetus = new Array();
            for (let z in params.Fetus) {
                let obj = new Fetus();
                obj.deserialize(params.Fetus[z]);
                this.Fetus.push(obj);
            }
        }

        if (params.FetusNum) {
            let obj = new FieldInfo();
            obj.deserialize(params.FetusNum)
            this.FetusNum = obj;
        }
        this.Text = 'Text' in params ? params.Text : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
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

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 临床分期
 * @class
 */
class ClinicalStaging extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * PTNM分期
 * @class
 */
class PTNMBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMM = null;

        /**
         * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMN = null;

        /**
         * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PTNMT = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.PTNMM = 'PTNMM' in params ? params.PTNMM : null;
        this.PTNMN = 'PTNMN' in params ? params.PTNMN : null;
        this.PTNMT = 'PTNMT' in params ? params.PTNMT : null;

    }
}

/**
 * 吸烟史
 * @class
 */
class SmokeHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 时间单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间归一化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeNorm = null;

        /**
         * 吸烟量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Amount = null;

        /**
         * 戒烟状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.QuitState = null;

        /**
         * 是否吸烟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.State = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeNorm = 'TimeNorm' in params ? params.TimeNorm : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.QuitState = 'QuitState' in params ? params.QuitState : null;
        this.State = 'State' in params ? params.State : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 入院情况
 * @class
 */
class AdmissionConditionBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * 治疗记录
 * @class
 */
class TreatmentRecordBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免疫组化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImmunohistochemistryBlock || null}
         */
        this.Immunohistochemistry = null;

        /**
         * 主诉
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ChiefComplaintBlock || null}
         */
        this.ChiefComplaint = null;

        /**
         * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdmissionConditionBlock || null}
         */
        this.AdmissionCondition = null;

        /**
         * 查体
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BodyExaminationBlock || null}
         */
        this.BodyExamination = null;

        /**
         * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdmissionDiagnosisBlock || null}
         */
        this.AdmissionDiagnosis = null;

        /**
         * 入院中医诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdmissionDiagnosisBlock || null}
         */
        this.AdmissionTraditionalDiagnosis = null;

        /**
         * 入院西医诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdmissionDiagnosisBlock || null}
         */
        this.AdmissionModernDiagnosis = null;

        /**
         * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PathologicalDiagnosisBlock || null}
         */
        this.PathologicalDiagnosis = null;

        /**
         * 现病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.DiseasePresent = null;

        /**
         * 体征
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.SymptomsAndSigns = null;

        /**
         * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.AuxiliaryExamination = null;

        /**
         * 特殊检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.SpecialistExamination = null;

        /**
         * 精神检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.MentalExamination = null;

        /**
         * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.CheckRecord = null;

        /**
         * 检查结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.InspectResult = null;

        /**
         * 治疗经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.CheckAndTreatmentProcess = null;

        /**
         * 手术经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryConditionBlock || null}
         */
        this.SurgeryCondition = null;

        /**
         * 切口愈合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.IncisionHealing = null;

        /**
         * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DischargeDiagnosisBlock || null}
         */
        this.DischargeDiagnosis = null;

        /**
         * 出院中医诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.DischargeTraditionalDiagnosis = null;

        /**
         * 出院西医诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DischargeDiagnosisBlock || null}
         */
        this.DischargeModernDiagnosis = null;

        /**
         * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DischargeConditionBlock || null}
         */
        this.DischargeCondition = null;

        /**
         * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.DischargeInstructions = null;

        /**
         * 治疗建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.TreatmentSuggestion = null;

        /**
         * 随访
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.FollowUpRequirements = null;

        /**
         * 治疗情况变化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.ConditionChanges = null;

        /**
         * 收缩压
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.PulmonaryArterySystolicPressure = null;

        /**
         * bclc分期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.BCLC = null;

        /**
         * PTNM分期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PTNMBlock || null}
         */
        this.PTNM = null;

        /**
         * ECOG评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.ECOG = null;

        /**
         * NRS评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.NRS = null;

        /**
         * kps评分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseasePresentBlock || null}
         */
        this.KPS = null;

        /**
         * 癌症分期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClinicalStaging || null}
         */
        this.Cancerstaging = null;

        /**
         * 死亡时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeathDateBlock || null}
         */
        this.DeathDate = null;

        /**
         * 复发日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RelapseDateBlock || null}
         */
        this.RelapseDate = null;

        /**
         * 观察日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeathDateBlock || null}
         */
        this.ObservationDays = null;

        /**
         * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncisionHealingText = null;

        /**
         * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuxiliaryExaminationText = null;

        /**
         * 特殊检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecialExamText = null;

        /**
         * 门诊诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutpatientDiagnosisText = null;

        /**
         * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionConditionText = null;

        /**
         * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckAndTreatmentProcessText = null;

        /**
         * 体征
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SymptomsAndSignsText = null;

        /**
         * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeInstructionsText = null;

        /**
         * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionDiagnosisText = null;

        /**
         * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SurgeryConditionText = null;

        /**
         * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PathologicalDiagnosisText = null;

        /**
         * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeConditionText = null;

        /**
         * 检查记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckRecordText = null;

        /**
         * 主诉
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChiefComplaintText = null;

        /**
         * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeDiagnosisText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Immunohistochemistry) {
            let obj = new ImmunohistochemistryBlock();
            obj.deserialize(params.Immunohistochemistry)
            this.Immunohistochemistry = obj;
        }

        if (params.ChiefComplaint) {
            let obj = new ChiefComplaintBlock();
            obj.deserialize(params.ChiefComplaint)
            this.ChiefComplaint = obj;
        }

        if (params.AdmissionCondition) {
            let obj = new AdmissionConditionBlock();
            obj.deserialize(params.AdmissionCondition)
            this.AdmissionCondition = obj;
        }

        if (params.BodyExamination) {
            let obj = new BodyExaminationBlock();
            obj.deserialize(params.BodyExamination)
            this.BodyExamination = obj;
        }

        if (params.AdmissionDiagnosis) {
            let obj = new AdmissionDiagnosisBlock();
            obj.deserialize(params.AdmissionDiagnosis)
            this.AdmissionDiagnosis = obj;
        }

        if (params.AdmissionTraditionalDiagnosis) {
            let obj = new AdmissionDiagnosisBlock();
            obj.deserialize(params.AdmissionTraditionalDiagnosis)
            this.AdmissionTraditionalDiagnosis = obj;
        }

        if (params.AdmissionModernDiagnosis) {
            let obj = new AdmissionDiagnosisBlock();
            obj.deserialize(params.AdmissionModernDiagnosis)
            this.AdmissionModernDiagnosis = obj;
        }

        if (params.PathologicalDiagnosis) {
            let obj = new PathologicalDiagnosisBlock();
            obj.deserialize(params.PathologicalDiagnosis)
            this.PathologicalDiagnosis = obj;
        }

        if (params.DiseasePresent) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.DiseasePresent)
            this.DiseasePresent = obj;
        }

        if (params.SymptomsAndSigns) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.SymptomsAndSigns)
            this.SymptomsAndSigns = obj;
        }

        if (params.AuxiliaryExamination) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.AuxiliaryExamination)
            this.AuxiliaryExamination = obj;
        }

        if (params.SpecialistExamination) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.SpecialistExamination)
            this.SpecialistExamination = obj;
        }

        if (params.MentalExamination) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.MentalExamination)
            this.MentalExamination = obj;
        }

        if (params.CheckRecord) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.CheckRecord)
            this.CheckRecord = obj;
        }

        if (params.InspectResult) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.InspectResult)
            this.InspectResult = obj;
        }

        if (params.CheckAndTreatmentProcess) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.CheckAndTreatmentProcess)
            this.CheckAndTreatmentProcess = obj;
        }

        if (params.SurgeryCondition) {
            let obj = new SurgeryConditionBlock();
            obj.deserialize(params.SurgeryCondition)
            this.SurgeryCondition = obj;
        }

        if (params.IncisionHealing) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.IncisionHealing)
            this.IncisionHealing = obj;
        }

        if (params.DischargeDiagnosis) {
            let obj = new DischargeDiagnosisBlock();
            obj.deserialize(params.DischargeDiagnosis)
            this.DischargeDiagnosis = obj;
        }

        if (params.DischargeTraditionalDiagnosis) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.DischargeTraditionalDiagnosis)
            this.DischargeTraditionalDiagnosis = obj;
        }

        if (params.DischargeModernDiagnosis) {
            let obj = new DischargeDiagnosisBlock();
            obj.deserialize(params.DischargeModernDiagnosis)
            this.DischargeModernDiagnosis = obj;
        }

        if (params.DischargeCondition) {
            let obj = new DischargeConditionBlock();
            obj.deserialize(params.DischargeCondition)
            this.DischargeCondition = obj;
        }

        if (params.DischargeInstructions) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.DischargeInstructions)
            this.DischargeInstructions = obj;
        }

        if (params.TreatmentSuggestion) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.TreatmentSuggestion)
            this.TreatmentSuggestion = obj;
        }

        if (params.FollowUpRequirements) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.FollowUpRequirements)
            this.FollowUpRequirements = obj;
        }

        if (params.ConditionChanges) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.ConditionChanges)
            this.ConditionChanges = obj;
        }

        if (params.PulmonaryArterySystolicPressure) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.PulmonaryArterySystolicPressure)
            this.PulmonaryArterySystolicPressure = obj;
        }

        if (params.BCLC) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.BCLC)
            this.BCLC = obj;
        }

        if (params.PTNM) {
            let obj = new PTNMBlock();
            obj.deserialize(params.PTNM)
            this.PTNM = obj;
        }

        if (params.ECOG) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.ECOG)
            this.ECOG = obj;
        }

        if (params.NRS) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.NRS)
            this.NRS = obj;
        }

        if (params.KPS) {
            let obj = new DiseasePresentBlock();
            obj.deserialize(params.KPS)
            this.KPS = obj;
        }

        if (params.Cancerstaging) {
            let obj = new ClinicalStaging();
            obj.deserialize(params.Cancerstaging)
            this.Cancerstaging = obj;
        }

        if (params.DeathDate) {
            let obj = new DeathDateBlock();
            obj.deserialize(params.DeathDate)
            this.DeathDate = obj;
        }

        if (params.RelapseDate) {
            let obj = new RelapseDateBlock();
            obj.deserialize(params.RelapseDate)
            this.RelapseDate = obj;
        }

        if (params.ObservationDays) {
            let obj = new DeathDateBlock();
            obj.deserialize(params.ObservationDays)
            this.ObservationDays = obj;
        }
        this.IncisionHealingText = 'IncisionHealingText' in params ? params.IncisionHealingText : null;
        this.AuxiliaryExaminationText = 'AuxiliaryExaminationText' in params ? params.AuxiliaryExaminationText : null;
        this.SpecialExamText = 'SpecialExamText' in params ? params.SpecialExamText : null;
        this.OutpatientDiagnosisText = 'OutpatientDiagnosisText' in params ? params.OutpatientDiagnosisText : null;
        this.AdmissionConditionText = 'AdmissionConditionText' in params ? params.AdmissionConditionText : null;
        this.CheckAndTreatmentProcessText = 'CheckAndTreatmentProcessText' in params ? params.CheckAndTreatmentProcessText : null;
        this.SymptomsAndSignsText = 'SymptomsAndSignsText' in params ? params.SymptomsAndSignsText : null;
        this.DischargeInstructionsText = 'DischargeInstructionsText' in params ? params.DischargeInstructionsText : null;
        this.AdmissionDiagnosisText = 'AdmissionDiagnosisText' in params ? params.AdmissionDiagnosisText : null;
        this.SurgeryConditionText = 'SurgeryConditionText' in params ? params.SurgeryConditionText : null;
        this.PathologicalDiagnosisText = 'PathologicalDiagnosisText' in params ? params.PathologicalDiagnosisText : null;
        this.DischargeConditionText = 'DischargeConditionText' in params ? params.DischargeConditionText : null;
        this.CheckRecordText = 'CheckRecordText' in params ? params.CheckRecordText : null;
        this.ChiefComplaintText = 'ChiefComplaintText' in params ? params.ChiefComplaintText : null;
        this.DischargeDiagnosisText = 'DischargeDiagnosisText' in params ? params.DischargeDiagnosisText : null;

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

        /**
         * 大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Size> || null}
         */
        this.Size = null;

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

        if (params.Size) {
            this.Size = new Array();
            for (let z in params.Size) {
                let obj = new Size();
                obj.deserialize(params.Size[z]);
                this.Size.push(obj);
            }
        }

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

        /**
         * 其他信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OtherInfo || null}
         */
        this.OtherInfo = null;

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

        if (params.OtherInfo) {
            let obj = new OtherInfo();
            obj.deserialize(params.OtherInfo)
            this.OtherInfo = obj;
        }

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
 * 胎儿数据结构
 * @class
 */
class Fetus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 双顶径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.BPD = null;

        /**
         * 腹前后径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.APTD = null;

        /**
         * 腹左右径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.TTD = null;

        /**
         * 头臀径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.CRL = null;

        /**
         * 头围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.HC = null;

        /**
         * 腹围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.AC = null;

        /**
         * 股骨长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.FL = null;

        /**
         * 肱骨长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.HL = null;

        /**
         * 胎儿重量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.Weight = null;

        /**
         * 颈项透明层
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.NT = null;

        /**
         * 脐动脉血流
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.UmbilicalCord = null;

        /**
         * 羊水最大深度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.WaterDeep = null;

        /**
         * 羊水四象限测量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.WaterQuad = null;

        /**
         * 羊水指数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.AFI = null;

        /**
         * 胎心
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.FHR = null;

        /**
         * 胎动
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.Movement = null;

        /**
         * 胎数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.Num = null;

        /**
         * 胎位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.Position = null;

        /**
         * 是否活胎
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.Alive = null;

        /**
         * 胎盘位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.PlacentaLocation = null;

        /**
         * 胎盘厚度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.PlacentaThickness = null;

        /**
         * 胎盘成熟度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.PlacentaGrade = null;

        /**
         * 妊娠时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.GestationTime = null;

        /**
         * 妊娠周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.GestationPeriod = null;

        /**
         * 绕颈
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FieldInfo || null}
         */
        this.AroundNeck = null;

        /**
         * 病变
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FieldInfo> || null}
         */
        this.Sym = null;

        /**
         * 原文内容
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

        if (params.BPD) {
            let obj = new FieldInfo();
            obj.deserialize(params.BPD)
            this.BPD = obj;
        }

        if (params.APTD) {
            let obj = new FieldInfo();
            obj.deserialize(params.APTD)
            this.APTD = obj;
        }

        if (params.TTD) {
            let obj = new FieldInfo();
            obj.deserialize(params.TTD)
            this.TTD = obj;
        }

        if (params.CRL) {
            let obj = new FieldInfo();
            obj.deserialize(params.CRL)
            this.CRL = obj;
        }

        if (params.HC) {
            let obj = new FieldInfo();
            obj.deserialize(params.HC)
            this.HC = obj;
        }

        if (params.AC) {
            let obj = new FieldInfo();
            obj.deserialize(params.AC)
            this.AC = obj;
        }

        if (params.FL) {
            let obj = new FieldInfo();
            obj.deserialize(params.FL)
            this.FL = obj;
        }

        if (params.HL) {
            let obj = new FieldInfo();
            obj.deserialize(params.HL)
            this.HL = obj;
        }

        if (params.Weight) {
            let obj = new FieldInfo();
            obj.deserialize(params.Weight)
            this.Weight = obj;
        }

        if (params.NT) {
            let obj = new FieldInfo();
            obj.deserialize(params.NT)
            this.NT = obj;
        }

        if (params.UmbilicalCord) {
            let obj = new FieldInfo();
            obj.deserialize(params.UmbilicalCord)
            this.UmbilicalCord = obj;
        }

        if (params.WaterDeep) {
            let obj = new FieldInfo();
            obj.deserialize(params.WaterDeep)
            this.WaterDeep = obj;
        }

        if (params.WaterQuad) {
            let obj = new FieldInfo();
            obj.deserialize(params.WaterQuad)
            this.WaterQuad = obj;
        }

        if (params.AFI) {
            let obj = new FieldInfo();
            obj.deserialize(params.AFI)
            this.AFI = obj;
        }

        if (params.FHR) {
            let obj = new FieldInfo();
            obj.deserialize(params.FHR)
            this.FHR = obj;
        }

        if (params.Movement) {
            let obj = new FieldInfo();
            obj.deserialize(params.Movement)
            this.Movement = obj;
        }

        if (params.Num) {
            let obj = new FieldInfo();
            obj.deserialize(params.Num)
            this.Num = obj;
        }

        if (params.Position) {
            let obj = new FieldInfo();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

        if (params.Alive) {
            let obj = new FieldInfo();
            obj.deserialize(params.Alive)
            this.Alive = obj;
        }

        if (params.PlacentaLocation) {
            let obj = new FieldInfo();
            obj.deserialize(params.PlacentaLocation)
            this.PlacentaLocation = obj;
        }

        if (params.PlacentaThickness) {
            let obj = new FieldInfo();
            obj.deserialize(params.PlacentaThickness)
            this.PlacentaThickness = obj;
        }

        if (params.PlacentaGrade) {
            let obj = new FieldInfo();
            obj.deserialize(params.PlacentaGrade)
            this.PlacentaGrade = obj;
        }

        if (params.GestationTime) {
            let obj = new FieldInfo();
            obj.deserialize(params.GestationTime)
            this.GestationTime = obj;
        }

        if (params.GestationPeriod) {
            let obj = new FieldInfo();
            obj.deserialize(params.GestationPeriod)
            this.GestationPeriod = obj;
        }

        if (params.AroundNeck) {
            let obj = new FieldInfo();
            obj.deserialize(params.AroundNeck)
            this.AroundNeck = obj;
        }

        if (params.Sym) {
            this.Sym = new Array();
            for (let z in params.Sym) {
                let obj = new FieldInfo();
                obj.deserialize(params.Sym[z]);
                this.Sym.push(obj);
            }
        }
        this.Src = 'Src' in params ? params.Src : null;

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
 * 点坐标
 * @class
 */
class Point extends  AbstractModel {
    constructor(){
        super();

        /**
         * x坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.X = null;

        /**
         * y坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Y = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;

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
 * 免疫组化
 * @class
 */
class ImmunohistochemistryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 免疫组化详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IHCBlock> || null}
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
        this.Src = 'Src' in params ? params.Src : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new IHCBlock();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * 诊断结论
 * @class
 */
class SummaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断结论文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Text = null;

        /**
         * 诊断结论详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetailInformation> || null}
         */
        this.Infos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Text) {
            let obj = new BaseInfo();
            obj.deserialize(params.Text)
            this.Text = obj;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DetailInformation();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }

    }
}

/**
 * 描述段落
 * @class
 */
class DescInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述段落文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Text = null;

        /**
         * 描述段落详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetailInformation> || null}
         */
        this.Infos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Text) {
            let obj = new BaseInfo();
            obj.deserialize(params.Text)
            this.Text = obj;
        }

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new DetailInformation();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }

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
         * 多级分类结果
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

        if (params.Template) {
            let obj = new Template();
            obj.deserialize(params.Template)
            this.Template = obj;
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
 * 家族史
 * @class
 */
class FamilyHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 家庭成员
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RelativeHistoryBlock || null}
         */
        this.RelativeHistory = null;

        /**
         * 家族肿瘤史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RelativeCancerHistoryBlock || null}
         */
        this.RelativeCancerHistory = null;

        /**
         * 家族遗传史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GeneticHistoryBlock || null}
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

        if (params.RelativeHistory) {
            let obj = new RelativeHistoryBlock();
            obj.deserialize(params.RelativeHistory)
            this.RelativeHistory = obj;
        }

        if (params.RelativeCancerHistory) {
            let obj = new RelativeCancerHistoryBlock();
            obj.deserialize(params.RelativeCancerHistory)
            this.RelativeCancerHistory = obj;
        }

        if (params.GeneticHistory) {
            let obj = new GeneticHistoryBlock();
            obj.deserialize(params.GeneticHistory)
            this.GeneticHistory = obj;
        }

    }
}

/**
 * 入院诊断
 * @class
 */
class AdmissionDiagnosisBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * 否定列表
 * @class
 */
class NeglistBlock extends  AbstractModel {
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
 * 指定报告类型选用其结构化版本
 * @class
 */
class ReportTypeVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检验报告
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReportType = null;

        /**
         * 版本2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 位置坐标
 * @class
 */
class Rectangle extends  AbstractModel {
    constructor(){
        super();

        /**
         * x坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.X = null;

        /**
         * y坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.W = null;

        /**
         * 高
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.H = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.W = 'W' in params ? params.W : null;
        this.H = 'H' in params ? params.H : null;

    }
}

/**
 * IHC
 * @class
 */
class IHCV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引
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
         * ihc归一化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ihc详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Value || null}
         */
        this.Value = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

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
 * 基础类型
 * @class
 */
class BaseItem3 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原始文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化后值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

        /**
         * 第几次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 基础类型
 * @class
 */
class BaseItem2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原始文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化后值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 四点坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 家族肿瘤史
 * @class
 */
class RelativeCancerHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 肿瘤史列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelativeCancerList = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.RelativeCancerList = 'RelativeCancerList' in params ? params.RelativeCancerList : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 文本块
 * @class
 */
class ParagraphBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 切口愈合情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncisionHealingText = null;

        /**
         * 辅助检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuxiliaryExaminationText = null;

        /**
         * 特殊检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecialExamText = null;

        /**
         * 门诊诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutpatientDiagnosisText = null;

        /**
         * 入院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionConditionText = null;

        /**
         * 诊疗经过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckAndTreatmentProcessText = null;

        /**
         * 体征
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SymptomsAndSignsText = null;

        /**
         * 出院医嘱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeInstructionsText = null;

        /**
         * 入院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdmissionDiagnosisText = null;

        /**
         * 手术情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SurgeryConditionText = null;

        /**
         * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PathologicalDiagnosisText = null;

        /**
         * 出院情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeConditionText = null;

        /**
         * 检查记录

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckRecordText = null;

        /**
         * 主诉
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChiefComplaintText = null;

        /**
         * 出院诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DischargeDiagnosisText = null;

        /**
         * 既往史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainDiseaseHistoryText = null;

        /**
         * 现病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiseasePresentText = null;

        /**
         * 个人史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PersonalHistoryText = null;

        /**
         * 月经史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MenstruallHistoryText = null;

        /**
         * 婚育史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ObstericalHistoryText = null;

        /**
         * 家族史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FamilyHistoryText = null;

        /**
         * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllergyHistoryText = null;

        /**
         * 病史信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiseaseHistoryText = null;

        /**
         * 其它诊断
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherDiagnosisText = null;

        /**
         * 体格检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BodyExaminationText = null;

        /**
         * 专科检查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecialistExaminationText = null;

        /**
         * 治疗结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TreatmentResultText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IncisionHealingText = 'IncisionHealingText' in params ? params.IncisionHealingText : null;
        this.AuxiliaryExaminationText = 'AuxiliaryExaminationText' in params ? params.AuxiliaryExaminationText : null;
        this.SpecialExamText = 'SpecialExamText' in params ? params.SpecialExamText : null;
        this.OutpatientDiagnosisText = 'OutpatientDiagnosisText' in params ? params.OutpatientDiagnosisText : null;
        this.AdmissionConditionText = 'AdmissionConditionText' in params ? params.AdmissionConditionText : null;
        this.CheckAndTreatmentProcessText = 'CheckAndTreatmentProcessText' in params ? params.CheckAndTreatmentProcessText : null;
        this.SymptomsAndSignsText = 'SymptomsAndSignsText' in params ? params.SymptomsAndSignsText : null;
        this.DischargeInstructionsText = 'DischargeInstructionsText' in params ? params.DischargeInstructionsText : null;
        this.AdmissionDiagnosisText = 'AdmissionDiagnosisText' in params ? params.AdmissionDiagnosisText : null;
        this.SurgeryConditionText = 'SurgeryConditionText' in params ? params.SurgeryConditionText : null;
        this.PathologicalDiagnosisText = 'PathologicalDiagnosisText' in params ? params.PathologicalDiagnosisText : null;
        this.DischargeConditionText = 'DischargeConditionText' in params ? params.DischargeConditionText : null;
        this.CheckRecordText = 'CheckRecordText' in params ? params.CheckRecordText : null;
        this.ChiefComplaintText = 'ChiefComplaintText' in params ? params.ChiefComplaintText : null;
        this.DischargeDiagnosisText = 'DischargeDiagnosisText' in params ? params.DischargeDiagnosisText : null;
        this.MainDiseaseHistoryText = 'MainDiseaseHistoryText' in params ? params.MainDiseaseHistoryText : null;
        this.DiseasePresentText = 'DiseasePresentText' in params ? params.DiseasePresentText : null;
        this.PersonalHistoryText = 'PersonalHistoryText' in params ? params.PersonalHistoryText : null;
        this.MenstruallHistoryText = 'MenstruallHistoryText' in params ? params.MenstruallHistoryText : null;
        this.ObstericalHistoryText = 'ObstericalHistoryText' in params ? params.ObstericalHistoryText : null;
        this.FamilyHistoryText = 'FamilyHistoryText' in params ? params.FamilyHistoryText : null;
        this.AllergyHistoryText = 'AllergyHistoryText' in params ? params.AllergyHistoryText : null;
        this.DiseaseHistoryText = 'DiseaseHistoryText' in params ? params.DiseaseHistoryText : null;
        this.OtherDiagnosisText = 'OtherDiagnosisText' in params ? params.OtherDiagnosisText : null;
        this.BodyExaminationText = 'BodyExaminationText' in params ? params.BodyExaminationText : null;
        this.SpecialistExaminationText = 'SpecialistExaminationText' in params ? params.SpecialistExaminationText : null;
        this.TreatmentResultText = 'TreatmentResultText' in params ? params.TreatmentResultText : null;

    }
}

/**
 * 家庭成员详情
 * @class
 */
class RelativeHistoryDetailBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Relation = null;

        /**
         * 死亡时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeOfDeath = null;

        /**
         * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Relation = 'Relation' in params ? params.Relation : null;
        this.TimeOfDeath = 'TimeOfDeath' in params ? params.TimeOfDeath : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;

    }
}

/**
 * 肯定列表
 * @class
 */
class PoslistBlock extends  AbstractModel {
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
 * 坐标
 * @class
 */
class Coord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Point> || null}
         */
        this.Points = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Points) {
            this.Points = new Array();
            for (let z in params.Points) {
                let obj = new Point();
                obj.deserialize(params.Points[z]);
                this.Points.push(obj);
            }
        }

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

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 结论信息
 * @class
 */
class ResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 段落文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseInfo || null}
         */
        this.Text = null;

        /**
         * 结论详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaseInfo> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Text) {
            let obj = new BaseInfo();
            obj.deserialize(params.Text)
            this.Text = obj;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new BaseInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

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
 * 月经史
 * @class
 */
class MenstrualHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 末次月经
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LastMenstrualPeriodBlock || null}
         */
        this.LastMenstrualPeriod = null;

        /**
         * 月经量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MenstrualFlowBlock || null}
         */
        this.MenstrualFlow = null;

        /**
         * 初潮时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LastMenstrualPeriodBlock || null}
         */
        this.MenarcheAge = null;

        /**
         * 是否绝经
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MenstruationOrNotBlock || null}
         */
        this.MenstruationOrNot = null;

        /**
         * 月经周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LastMenstrualPeriodBlock || null}
         */
        this.MenstrualCycles = null;

        /**
         * 月经经期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MenstrualPeriodBlock || null}
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

        if (params.LastMenstrualPeriod) {
            let obj = new LastMenstrualPeriodBlock();
            obj.deserialize(params.LastMenstrualPeriod)
            this.LastMenstrualPeriod = obj;
        }

        if (params.MenstrualFlow) {
            let obj = new MenstrualFlowBlock();
            obj.deserialize(params.MenstrualFlow)
            this.MenstrualFlow = obj;
        }

        if (params.MenarcheAge) {
            let obj = new LastMenstrualPeriodBlock();
            obj.deserialize(params.MenarcheAge)
            this.MenarcheAge = obj;
        }

        if (params.MenstruationOrNot) {
            let obj = new MenstruationOrNotBlock();
            obj.deserialize(params.MenstruationOrNot)
            this.MenstruationOrNot = obj;
        }

        if (params.MenstrualCycles) {
            let obj = new LastMenstrualPeriodBlock();
            obj.deserialize(params.MenstrualCycles)
            this.MenstrualCycles = obj;
        }

        if (params.MenstrualPeriod) {
            let obj = new MenstrualPeriodBlock();
            obj.deserialize(params.MenstrualPeriod)
            this.MenstrualPeriod = obj;
        }

    }
}

/**
 * 时间
 * @class
 */
class Time extends  AbstractModel {
    constructor(){
        super();

        /**
         * 具体时间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间值
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
 * 坐标
 * @class
 */
class Coordinate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上角x坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 左上角y坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽度，单位像素
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高度，单位像素
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 药物用法用量
 * @class
 */
class DosageBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 单次计量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SingleMeasurement = null;

        /**
         * 频次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * 给药途径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DrugDeliveryRoute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Value = 'Value' in params ? params.Value : null;
        this.SingleMeasurement = 'SingleMeasurement' in params ? params.SingleMeasurement : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.DrugDeliveryRoute = 'DrugDeliveryRoute' in params ? params.DrugDeliveryRoute : null;

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

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 侵犯
 * @class
 */
class InvasiveV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 索引
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
         * 阴性或阳性
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
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

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

        /**
         * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
         * @type {number || null}
         */
        this.UserType = null;

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
        this.UserType = 'UserType' in params ? params.UserType : null;

    }
}

/**
 * 标准信息类
 * @class
 */
class BaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 索引
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
         * 标准值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

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

        /**
         * 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。
         * @type {number || null}
         */
        this.UserType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.UserType = 'UserType' in params ? params.UserType : null;

    }
}

/**
 * 婚姻-生育史
 * @class
 */
class ObstetricalHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 婚姻史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MenstrualHistoryDetailBlock || null}
         */
        this.MarriageHistory = null;

        /**
         * 婚育史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FertilityHistoryBlock || null}
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

        if (params.MarriageHistory) {
            let obj = new MenstrualHistoryDetailBlock();
            obj.deserialize(params.MarriageHistory)
            this.MarriageHistory = obj;
        }

        if (params.FertilityHistory) {
            let obj = new FertilityHistoryBlock();
            obj.deserialize(params.FertilityHistory)
            this.FertilityHistory = obj;
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

        if (params.NormSize) {
            let obj = new NormSize();
            obj.deserialize(params.NormSize)
            this.NormSize = obj;
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 出院情况
 * @class
 */
class DischargeConditionBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Norm = 'Norm' in params ? params.Norm : null;

    }
}

/**
 * 淋巴结总计转移信息
 * @class
 */
class LymphTotal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 转移数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransferNum = null;

        /**
         * 总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 索引
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Index = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TransferNum = 'TransferNum' in params ? params.TransferNum : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 其他信息
 * @class
 */
class OtherInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 麻醉方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.Anesthesia = null;

        /**
         * 术中出血
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.BloodLoss = null;

        /**
         * 输血
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.BloodTransfusion = null;

        /**
         * 手术用时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.Duration = null;

        /**
         * 手术开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.EndTime = null;

        /**
         * 手术结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryAttr || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Anesthesia) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.Anesthesia)
            this.Anesthesia = obj;
        }

        if (params.BloodLoss) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.BloodLoss)
            this.BloodLoss = obj;
        }

        if (params.BloodTransfusion) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.BloodTransfusion)
            this.BloodTransfusion = obj;
        }

        if (params.Duration) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.Duration)
            this.Duration = obj;
        }

        if (params.EndTime) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.EndTime)
            this.EndTime = obj;
        }

        if (params.StartTime) {
            let obj = new SurgeryAttr();
            obj.deserialize(params.StartTime)
            this.StartTime = obj;
        }

    }
}

/**
 * 月经量
 * @class
 */
class MenstrualFlowBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 时间轴
 * @class
 */
class TimelineInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间轴
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimelineEvent> || null}
         */
        this.Timeline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Timeline) {
            this.Timeline = new Array();
            for (let z in params.Timeline) {
                let obj = new TimelineEvent();
                obj.deserialize(params.Timeline[z]);
                this.Timeline.push(obj);
            }
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

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 单淋巴结转移信息
 * @class
 */
class LymphNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 索引
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
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 转移数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransferNum = null;

        /**
         * 淋巴结大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Sizes = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Index = 'Index' in params ? params.Index : null;

        if (params.Part) {
            let obj = new Part();
            obj.deserialize(params.Part)
            this.Part = obj;
        }
        this.Src = 'Src' in params ? params.Src : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.TransferNum = 'TransferNum' in params ? params.TransferNum : null;
        this.Sizes = 'Sizes' in params ? params.Sizes : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 出生证明结构化信息
 * @class
 */
class BirthCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新生儿信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NeonatalInfo || null}
         */
        this.NeonatalInfo = null;

        /**
         * 母亲信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ParentInfo || null}
         */
        this.MotherInfo = null;

        /**
         * 父亲信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ParentInfo || null}
         */
        this.FatherInfo = null;

        /**
         * 签发信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IssueInfo || null}
         */
        this.IssueInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NeonatalInfo) {
            let obj = new NeonatalInfo();
            obj.deserialize(params.NeonatalInfo)
            this.NeonatalInfo = obj;
        }

        if (params.MotherInfo) {
            let obj = new ParentInfo();
            obj.deserialize(params.MotherInfo)
            this.MotherInfo = obj;
        }

        if (params.FatherInfo) {
            let obj = new ParentInfo();
            obj.deserialize(params.FatherInfo)
            this.FatherInfo = obj;
        }

        if (params.IssueInfo) {
            let obj = new IssueInfo();
            obj.deserialize(params.IssueInfo)
            this.IssueInfo = obj;
        }

    }
}

/**
 * 病理诊断
 * @class
 */
class PathologicalDiagnosisBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 病理详细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PathologicalDiagnosisDetailBlock> || null}
         */
        this.Detail = null;

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
        this.Src = 'Src' in params ? params.Src : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new PathologicalDiagnosisDetailBlock();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 主诉
 * @class
 */
class ChiefComplaintBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 单位输出值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 主诉详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ChiefComplaintDetailBlock> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ChiefComplaintDetailBlock();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * 核酸报告结论结构
 * @class
 */
class CovidItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 采样时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.SampleTime = null;

        /**
         * 检测时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.TestTime = null;

        /**
         * 检测机构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.TestOrganization = null;

        /**
         * 检测结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.TestResult = null;

        /**
         * 健康码颜色
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem || null}
         */
        this.CodeColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SampleTime) {
            let obj = new BaseItem();
            obj.deserialize(params.SampleTime)
            this.SampleTime = obj;
        }

        if (params.TestTime) {
            let obj = new BaseItem();
            obj.deserialize(params.TestTime)
            this.TestTime = obj;
        }

        if (params.TestOrganization) {
            let obj = new BaseItem();
            obj.deserialize(params.TestOrganization)
            this.TestOrganization = obj;
        }

        if (params.TestResult) {
            let obj = new BaseItem();
            obj.deserialize(params.TestResult)
            this.TestResult = obj;
        }

        if (params.CodeColor) {
            let obj = new BaseItem();
            obj.deserialize(params.CodeColor)
            this.CodeColor = obj;
        }

    }
}

/**
 * 值块
 * @class
 */
class ValueBlock extends  AbstractModel {
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
         * 阳性阴性
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
 * 母亲或父亲信息
 * @class
 */
class ParentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 年龄
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Age = null;

        /**
         * 证件号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdCard = null;

        /**
         * 民族
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ethnicity = null;

        /**
         * 国籍
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.IdCard = 'IdCard' in params ? params.IdCard : null;
        this.Ethnicity = 'Ethnicity' in params ? params.Ethnicity : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * 出入院结构体
 * @class
 */
class DischargeInfoBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 疾病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiseaseHistoryBlock || null}
         */
        this.DiseaseHistory = null;

        /**
         * 个人史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PersonalHistoryBlock || null}
         */
        this.PersonalHistory = null;

        /**
         * 药物史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DrugHistoryBlock || null}
         */
        this.DrugHistory = null;

        /**
         * 治疗相关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TreatmentRecordBlock || null}
         */
        this.TreatmentRecord = null;

        /**
         * 文本段落
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ParagraphBlock || null}
         */
        this.ParagraphBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DiseaseHistory) {
            let obj = new DiseaseHistoryBlock();
            obj.deserialize(params.DiseaseHistory)
            this.DiseaseHistory = obj;
        }

        if (params.PersonalHistory) {
            let obj = new PersonalHistoryBlock();
            obj.deserialize(params.PersonalHistory)
            this.PersonalHistory = obj;
        }

        if (params.DrugHistory) {
            let obj = new DrugHistoryBlock();
            obj.deserialize(params.DrugHistory)
            this.DrugHistory = obj;
        }

        if (params.TreatmentRecord) {
            let obj = new TreatmentRecordBlock();
            obj.deserialize(params.TreatmentRecord)
            this.TreatmentRecord = obj;
        }

        if (params.ParagraphBlock) {
            let obj = new ParagraphBlock();
            obj.deserialize(params.ParagraphBlock)
            this.ParagraphBlock = obj;
        }

    }
}

/**
 * 死亡时间
 * @class
 */
class DeathDateBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 签发信息
 * @class
 */
class IssueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertNumber = null;

        /**
         * 签发机构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IssuedAuthority = null;

        /**
         * 签发日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IssuedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertNumber = 'CertNumber' in params ? params.CertNumber : null;
        this.IssuedAuthority = 'IssuedAuthority' in params ? params.IssuedAuthority : null;
        this.IssuedDate = 'IssuedDate' in params ? params.IssuedDate : null;

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

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
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

        /**
         * 床号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BedNo = null;

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
        this.BedNo = 'BedNo' in params ? params.BedNo : null;

    }
}

/**
 * 组织学类型
 * @class
 */
class HistologyTypeV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 浸润
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Infiltration = null;

        /**
         * 索引
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
         * 归一化后的组织学类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文对应坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
        }

    }
}

/**
 * 部位描述
 * @class
 */
class PartDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主要部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MainDir = null;

        /**
         * 部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Part = null;

        /**
         * 次要部位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecondaryDir = null;

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
        this.MainDir = 'MainDir' in params ? params.MainDir : null;
        this.Part = 'Part' in params ? params.Part : null;
        this.SecondaryDir = 'SecondaryDir' in params ? params.SecondaryDir : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 出院诊断
 * @class
 */
class DischargeDiagnosisBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 婚育史
 * @class
 */
class FertilityHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 对外输出值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 妊娠次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PregCount = null;

        /**
         * 生产次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProduCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.State = 'State' in params ? params.State : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.PregCount = 'PregCount' in params ? params.PregCount : null;
        this.ProduCount = 'ProduCount' in params ? params.ProduCount : null;

    }
}

/**
 * 疾病史
 * @class
 */
class DiseaseHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主要病史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MainDiseaseHistoryBlock || null}
         */
        this.MainDiseaseHistory = null;

        /**
         * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MainDiseaseHistoryBlock || null}
         */
        this.AllergyHistory = null;

        /**
         * 注射史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MainDiseaseHistoryBlock || null}
         */
        this.InfectHistory = null;

        /**
         * 手术史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SurgeryHistoryBlock || null}
         */
        this.SurgeryHistory = null;

        /**
         * 输血史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TransfusionHistoryBlock || null}
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

        if (params.MainDiseaseHistory) {
            let obj = new MainDiseaseHistoryBlock();
            obj.deserialize(params.MainDiseaseHistory)
            this.MainDiseaseHistory = obj;
        }

        if (params.AllergyHistory) {
            let obj = new MainDiseaseHistoryBlock();
            obj.deserialize(params.AllergyHistory)
            this.AllergyHistory = obj;
        }

        if (params.InfectHistory) {
            let obj = new MainDiseaseHistoryBlock();
            obj.deserialize(params.InfectHistory)
            this.InfectHistory = obj;
        }

        if (params.SurgeryHistory) {
            let obj = new SurgeryHistoryBlock();
            obj.deserialize(params.SurgeryHistory)
            this.SurgeryHistory = obj;
        }

        if (params.TransfusionHistory) {
            let obj = new TransfusionHistoryBlock();
            obj.deserialize(params.TransfusionHistory)
            this.TransfusionHistory = obj;
        }

    }
}

/**
 * 数值结构体
 * @class
 */
class NumValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Num = null;

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
        this.Num = 'Num' in params ? params.Num : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * 眼科子结构
 * @class
 */
class EyeChildItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 球镜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaseItem3> || null}
         */
        this.Sph = null;

        /**
         * 柱镜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaseItem3> || null}
         */
        this.Cyl = null;

        /**
         * 轴位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BaseItem3> || null}
         */
        this.Ax = null;

        /**
         * 等效球镜
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BaseItem2 || null}
         */
        this.Se = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Sph) {
            this.Sph = new Array();
            for (let z in params.Sph) {
                let obj = new BaseItem3();
                obj.deserialize(params.Sph[z]);
                this.Sph.push(obj);
            }
        }

        if (params.Cyl) {
            this.Cyl = new Array();
            for (let z in params.Cyl) {
                let obj = new BaseItem3();
                obj.deserialize(params.Cyl[z]);
                this.Cyl.push(obj);
            }
        }

        if (params.Ax) {
            this.Ax = new Array();
            for (let z in params.Ax) {
                let obj = new BaseItem3();
                obj.deserialize(params.Ax[z]);
                this.Ax.push(obj);
            }
        }

        if (params.Se) {
            let obj = new BaseItem2();
            obj.deserialize(params.Se)
            this.Se = obj;
        }

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
 * 检验报告v3
 * @class
 */
class IndicatorV3 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检验报告V3结论
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TableIndicators> || null}
         */
        this.TableIndictors = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TableIndictors) {
            this.TableIndictors = new Array();
            for (let z in params.TableIndictors) {
                let obj = new TableIndicators();
                obj.deserialize(params.TableIndictors[z]);
                this.TableIndictors.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 药物史
 * @class
 */
class DrugListBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * 商品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeName = null;

        /**
         * 用法用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DosageBlock || null}
         */
        this.Dosage = null;

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
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.TradeName = 'TradeName' in params ? params.TradeName : null;

        if (params.Dosage) {
            let obj = new DosageBlock();
            obj.deserialize(params.Dosage)
            this.Dosage = obj;
        }
        this.Value = 'Value' in params ? params.Value : null;

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

        /**
         * 坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Coords = null;

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

        if (params.Coords) {
            this.Coords = new Array();
            for (let z in params.Coords) {
                let obj = new Coord();
                obj.deserialize(params.Coords[z]);
                this.Coords.push(obj);
            }
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

        /**
         * 指标项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 指标项坐标位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Coordinate || null}
         */
        this.Coords = null;

        /**
         * 推测结果是否异常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InferNormal = null;

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
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Coords) {
            let obj = new Coordinate();
            obj.deserialize(params.Coords)
            this.Coords = obj;
        }
        this.InferNormal = 'InferNormal' in params ? params.InferNormal : null;

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
 * 药物史
 * @class
 */
class DrugHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 药品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 药物列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DrugListBlock> || null}
         */
        this.DrugList = null;

        /**
         * 归一化值
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
        this.Src = 'Src' in params ? params.Src : null;

        if (params.DrugList) {
            this.DrugList = new Array();
            for (let z in params.DrugList) {
                let obj = new DrugListBlock();
                obj.deserialize(params.DrugList[z]);
                this.DrugList.push(obj);
            }
        }
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 手术史
 * @class
 */
class SurgeryHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

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
         * 手术列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SurgeryListBlock> || null}
         */
        this.Surgerylist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Src = 'Src' in params ? params.Src : null;
        this.Value = 'Value' in params ? params.Value : null;

        if (params.Surgerylist) {
            this.Surgerylist = new Array();
            for (let z in params.Surgerylist) {
                let obj = new SurgeryListBlock();
                obj.deserialize(params.Surgerylist[z]);
                this.Surgerylist.push(obj);
            }
        }

    }
}

/**
 * 个人史
 * @class
 */
class PersonalHistoryBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出生地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BirthPlaceBlock || null}
         */
        this.BirthPlace = null;

        /**
         * 居住地
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BirthPlaceBlock || null}
         */
        this.LivePlace = null;

        /**
         * 职业
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BirthPlaceBlock || null}
         */
        this.Job = null;

        /**
         * 吸烟
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmokeHistoryBlock || null}
         */
        this.SmokeHistory = null;

        /**
         * 喝酒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmokeHistoryBlock || null}
         */
        this.AlcoholicHistory = null;

        /**
         * 月经史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MenstrualHistoryBlock || null}
         */
        this.MenstrualHistory = null;

        /**
         * 婚姻-生育史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ObstetricalHistoryBlock || null}
         */
        this.ObstericalHistory = null;

        /**
         * 家族史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FamilyHistoryBlock || null}
         */
        this.FamilyHistory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BirthPlace) {
            let obj = new BirthPlaceBlock();
            obj.deserialize(params.BirthPlace)
            this.BirthPlace = obj;
        }

        if (params.LivePlace) {
            let obj = new BirthPlaceBlock();
            obj.deserialize(params.LivePlace)
            this.LivePlace = obj;
        }

        if (params.Job) {
            let obj = new BirthPlaceBlock();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.SmokeHistory) {
            let obj = new SmokeHistoryBlock();
            obj.deserialize(params.SmokeHistory)
            this.SmokeHistory = obj;
        }

        if (params.AlcoholicHistory) {
            let obj = new SmokeHistoryBlock();
            obj.deserialize(params.AlcoholicHistory)
            this.AlcoholicHistory = obj;
        }

        if (params.MenstrualHistory) {
            let obj = new MenstrualHistoryBlock();
            obj.deserialize(params.MenstrualHistory)
            this.MenstrualHistory = obj;
        }

        if (params.ObstericalHistory) {
            let obj = new ObstetricalHistoryBlock();
            obj.deserialize(params.ObstericalHistory)
            this.ObstericalHistory = obj;
        }

        if (params.FamilyHistory) {
            let obj = new FamilyHistoryBlock();
            obj.deserialize(params.FamilyHistory)
            this.FamilyHistory = obj;
        }

    }
}

/**
 * 复发时间
 * @class
 */
class RelapseDateBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 疾病名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiseaseName = null;

        /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.DiseaseName = 'DiseaseName' in params ? params.DiseaseName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 孕产报告
 * @class
 */
class Maternity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述部分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaternityDesc || null}
         */
        this.Desc = null;

        /**
         * 结论部分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaternitySummary || null}
         */
        this.Summary = null;

        /**
         * 报告原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcrText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Desc) {
            let obj = new MaternityDesc();
            obj.deserialize(params.Desc)
            this.Desc = obj;
        }

        if (params.Summary) {
            let obj = new MaternitySummary();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }
        this.OcrText = 'OcrText' in params ? params.OcrText : null;

    }
}

/**
 * 是否绝经
 * @class
 */
class MenstruationOrNotBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 原文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Src = null;

        /**
         * 归一化值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Norm = null;

        /**
         * 时间类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeType = null;

        /**
         * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 对外输出值
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
        this.Src = 'Src' in params ? params.Src : null;
        this.Norm = 'Norm' in params ? params.Norm : null;
        this.TimeType = 'TimeType' in params ? params.TimeType : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

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

module.exports = {
    Indicator: Indicator,
    LastMenstrualPeriodBlock: LastMenstrualPeriodBlock,
    Vaccination: Vaccination,
    TimelineEvent: TimelineEvent,
    IHCBlock: IHCBlock,
    BodyTemperatureBlock: BodyTemperatureBlock,
    PathologicalDiagnosisDetailBlock: PathologicalDiagnosisDetailBlock,
    ImageToObjectRequest: ImageToObjectRequest,
    Molecular: Molecular,
    TuberInfo: TuberInfo,
    SurgeryListBlock: SurgeryListBlock,
    Multiple: Multiple,
    Hospitalization: Hospitalization,
    BodyExaminationBlock: BodyExaminationBlock,
    Advice: Advice,
    Report: Report,
    BirthPlaceBlock: BirthPlaceBlock,
    PTNM: PTNM,
    TableIndicators: TableIndicators,
    HistologyClass: HistologyClass,
    BlockInfoV2: BlockInfoV2,
    NormPart: NormPart,
    Lymph: Lymph,
    BaseItem: BaseItem,
    Fp2NdItem: Fp2NdItem,
    Organ: Organ,
    DiseasePresentBlock: DiseasePresentBlock,
    MenstrualPeriodBlock: MenstrualPeriodBlock,
    VaccineCertificate: VaccineCertificate,
    Value: Value,
    MainDiseaseHistoryBlock: MainDiseaseHistoryBlock,
    DiseaseMedicalHistory: DiseaseMedicalHistory,
    GeneticHistoryBlock: GeneticHistoryBlock,
    MenstrualHistoryDetailBlock: MenstrualHistoryDetailBlock,
    CovidItemsInfo: CovidItemsInfo,
    BloodPressureBlock: BloodPressureBlock,
    HistologyLevel: HistologyLevel,
    EcgDescription: EcgDescription,
    MedicalRecordInfo: MedicalRecordInfo,
    EyeItemsInfo: EyeItemsInfo,
    IndicatorItemV2: IndicatorItemV2,
    NormSize: NormSize,
    FirstPage: FirstPage,
    TextToObjectResponse: TextToObjectResponse,
    SurgeryConditionBlock: SurgeryConditionBlock,
    FieldInfo: FieldInfo,
    DetailInformation: DetailInformation,
    MaternitySummary: MaternitySummary,
    DischargeDiagnosis: DischargeDiagnosis,
    TransfusionHistoryBlock: TransfusionHistoryBlock,
    MolecularValue: MolecularValue,
    ChiefComplaintDetailBlock: ChiefComplaintDetailBlock,
    ReportInfo: ReportInfo,
    Endoscopy: Endoscopy,
    RelativeHistoryBlock: RelativeHistoryBlock,
    Exame: Exame,
    PathologyV2: PathologyV2,
    TextToObjectRequest: TextToObjectRequest,
    AspectRatio: AspectRatio,
    NeonatalInfo: NeonatalInfo,
    EyeItem: EyeItem,
    FamilyMedicalHistory: FamilyMedicalHistory,
    Part: Part,
    ImageToClassResponse: ImageToClassResponse,
    Invas: Invas,
    Template: Template,
    MaternityDesc: MaternityDesc,
    EndoscopyOrgan: EndoscopyOrgan,
    ClinicalStaging: ClinicalStaging,
    PersonalMedicalHistory: PersonalMedicalHistory,
    DiagCert: DiagCert,
    PTNMBlock: PTNMBlock,
    SmokeHistoryBlock: SmokeHistoryBlock,
    AdmissionConditionBlock: AdmissionConditionBlock,
    TextToClassResponse: TextToClassResponse,
    TreatmentRecordBlock: TreatmentRecordBlock,
    HistologyType: HistologyType,
    BlockInfo: BlockInfo,
    Surgery: Surgery,
    TextType: TextType,
    EcgItem: EcgItem,
    Fetus: Fetus,
    ImageInfo: ImageInfo,
    Point: Point,
    MenstrualMedicalHistory: MenstrualMedicalHistory,
    Check: Check,
    EcgDiagnosis: EcgDiagnosis,
    ImmunohistochemistryBlock: ImmunohistochemistryBlock,
    SummaryInfo: SummaryInfo,
    DescInfo: DescInfo,
    ImageToObjectResponse: ImageToObjectResponse,
    FamilyHistoryBlock: FamilyHistoryBlock,
    AdmissionDiagnosisBlock: AdmissionDiagnosisBlock,
    Elastic: Elastic,
    IHCInfo: IHCInfo,
    HandleParam: HandleParam,
    NeglistBlock: NeglistBlock,
    Medicine: Medicine,
    ReportTypeVersion: ReportTypeVersion,
    Rectangle: Rectangle,
    IHCV2: IHCV2,
    ObstericalMedicalHistory: ObstericalMedicalHistory,
    BaseItem3: BaseItem3,
    BaseItem2: BaseItem2,
    RelativeCancerHistoryBlock: RelativeCancerHistoryBlock,
    ParagraphBlock: ParagraphBlock,
    RelativeHistoryDetailBlock: RelativeHistoryDetailBlock,
    PoslistBlock: PoslistBlock,
    Prescription: Prescription,
    Coord: Coord,
    Summary: Summary,
    ResultInfo: ResultInfo,
    PathologyReport: PathologyReport,
    MenstrualHistoryBlock: MenstrualHistoryBlock,
    Time: Time,
    Coordinate: Coordinate,
    DosageBlock: DosageBlock,
    BiopsyPart: BiopsyPart,
    InvasiveV2: InvasiveV2,
    ImageToClassRequest: ImageToClassRequest,
    BaseInfo: BaseInfo,
    TextToClassRequest: TextToClassRequest,
    ObstetricalHistoryBlock: ObstetricalHistoryBlock,
    Size: Size,
    DischargeConditionBlock: DischargeConditionBlock,
    LymphTotal: LymphTotal,
    OtherInfo: OtherInfo,
    MenstrualFlowBlock: MenstrualFlowBlock,
    TimelineInformation: TimelineInformation,
    SurgeryHistory: SurgeryHistory,
    SymptomInfo: SymptomInfo,
    LymphNode: LymphNode,
    BirthCert: BirthCert,
    PathologicalDiagnosisBlock: PathologicalDiagnosisBlock,
    ChiefComplaintBlock: ChiefComplaintBlock,
    CovidItem: CovidItem,
    ValueBlock: ValueBlock,
    ParentInfo: ParentInfo,
    DischargeInfoBlock: DischargeInfoBlock,
    DeathDateBlock: DeathDateBlock,
    IssueInfo: IssueInfo,
    MedDoc: MedDoc,
    Desc: Desc,
    PatientInfo: PatientInfo,
    HistologyTypeV2: HistologyTypeV2,
    PartDesc: PartDesc,
    DischargeDiagnosisBlock: DischargeDiagnosisBlock,
    FertilityHistoryBlock: FertilityHistoryBlock,
    DiseaseHistoryBlock: DiseaseHistoryBlock,
    NumValue: NumValue,
    EyeChildItem: EyeChildItem,
    SurgeryAttr: SurgeryAttr,
    IndicatorV3: IndicatorV3,
    DrugListBlock: DrugListBlock,
    EndoscopyDesc: EndoscopyDesc,
    IndicatorItem: IndicatorItem,
    DiagCertItem: DiagCertItem,
    DrugHistoryBlock: DrugHistoryBlock,
    SurgeryHistoryBlock: SurgeryHistoryBlock,
    PersonalHistoryBlock: PersonalHistoryBlock,
    RelapseDateBlock: RelapseDateBlock,
    Maternity: Maternity,
    MenstruationOrNotBlock: MenstruationOrNotBlock,
    Electrocardiogram: Electrocardiogram,
    TreatmentRecord: TreatmentRecord,

}
