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
 * CarInvoiceOCR返回参数结构体
 * @class
 */
class CarInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购车发票识别结果，具体内容请点击左侧链接。
         * @type {Array.<CarInvoiceInfo> || null}
         */
        this.CarInvoiceInfos = null;

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

        if (params.CarInvoiceInfos) {
            this.CarInvoiceInfos = new Array();
            for (let z in params.CarInvoiceInfos) {
                let obj = new CarInvoiceInfo();
                obj.deserialize(params.CarInvoiceInfos[z]);
                this.CarInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ArithmeticOCR返回参数结构体
 * @class
 */
class ArithmeticOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextArithmetic> || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextArithmetic();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 行驶证副页正面的识别结果
 * @class
 */
class TextVehicleBack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlateNo = null;

        /**
         * 档案编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileNo = null;

        /**
         * 核定人数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllowNum = null;

        /**
         * 总质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalMass = null;

        /**
         * 整备质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurbWeight = null;

        /**
         * 核定载质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadQuality = null;

        /**
         * 外廓尺寸
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalSize = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Marks = null;

        /**
         * 检验记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 准牵引总质量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalQuasiMass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlateNo = 'PlateNo' in params ? params.PlateNo : null;
        this.FileNo = 'FileNo' in params ? params.FileNo : null;
        this.AllowNum = 'AllowNum' in params ? params.AllowNum : null;
        this.TotalMass = 'TotalMass' in params ? params.TotalMass : null;
        this.CurbWeight = 'CurbWeight' in params ? params.CurbWeight : null;
        this.LoadQuality = 'LoadQuality' in params ? params.LoadQuality : null;
        this.ExternalSize = 'ExternalSize' in params ? params.ExternalSize : null;
        this.Marks = 'Marks' in params ? params.Marks : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.TotalQuasiMass = 'TotalQuasiMass' in params ? params.TotalQuasiMass : null;

    }
}

/**
 * BusinessCardOCR返回参数结构体
 * @class
 */
class BusinessCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名片识别结果，具体内容请点击左侧链接。
         * @type {Array.<BusinessCardInfo> || null}
         */
        this.BusinessCardInfos = null;

        /**
         * 返回图像预处理后的图片，图像预处理未开启时返回内容为空。
         * @type {string || null}
         */
        this.RetImageBase64 = null;

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

        if (params.BusinessCardInfos) {
            this.BusinessCardInfos = new Array();
            for (let z in params.BusinessCardInfos) {
                let obj = new BusinessCardInfo();
                obj.deserialize(params.BusinessCardInfos[z]);
                this.BusinessCardInfos.push(obj);
            }
        }
        this.RetImageBase64 = 'RetImageBase64' in params ? params.RetImageBase64 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 增值税发票识别结果
 * @class
 */
class TextVatInvoice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
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
 * EnglishOCR请求参数结构体
 * @class
 */
class EnglishOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BizLicenseOCR请求参数结构体
 * @class
 */
class BizLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * CarInvoiceOCR请求参数结构体
 * @class
 */
class CarInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * TrainTicketOCR请求参数结构体
 * @class
 */
class TrainTicketOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralAccurateOCR返回参数结构体
 * @class
 */
class GeneralAccurateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表格识别结果
 * @class
 */
class TextTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元格左上角的列索引
         * @type {number || null}
         */
        this.ColTl = null;

        /**
         * 单元格左上角的行索引
         * @type {number || null}
         */
        this.RowTl = null;

        /**
         * 单元格右下角的列索引
         * @type {number || null}
         */
        this.ColBr = null;

        /**
         * 单元格右下角的行索引
         * @type {number || null}
         */
        this.RowBr = null;

        /**
         * 单元格文字
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 单元格类型，包含body（表格主体）、header（表头）、footer（表尾）三种
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColTl = 'ColTl' in params ? params.ColTl : null;
        this.RowTl = 'RowTl' in params ? params.RowTl : null;
        this.ColBr = 'ColBr' in params ? params.ColBr : null;
        this.RowBr = 'RowBr' in params ? params.RowBr : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * EnglishOCR返回参数结构体
 * @class
 */
class EnglishOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetectionEn> || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetectionEn();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MLIDPassportOCR请求参数结构体
 * @class
 */
class MLIDPassportOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 是否返回图片
         * @type {boolean || null}
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * GeneralAccurateOCR请求参数结构体
 * @class
 */
class GeneralAccurateOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * PermitOCR返回参数结构体
 * @class
 */
class PermitOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 英文姓名
         * @type {string || null}
         */
        this.EnglishName = null;

        /**
         * 证件号
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 有效期限
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 签发机关
         * @type {string || null}
         */
        this.IssueAuthority = null;

        /**
         * 签发地点
         * @type {string || null}
         */
        this.IssueAddress = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.Birthday = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.IssueAuthority = 'IssueAuthority' in params ? params.IssueAuthority : null;
        this.IssueAddress = 'IssueAddress' in params ? params.IssueAddress : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlightInvoiceOCR返回参数结构体
 * @class
 */
class FlightInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机票行程单识别结果，具体内容请点击左侧链接。
         * @type {Array.<FlightInvoiceInfo> || null}
         */
        this.FlightInvoiceInfos = null;

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

        if (params.FlightInvoiceInfos) {
            this.FlightInvoiceInfos = new Array();
            for (let z in params.FlightInvoiceInfos) {
                let obj = new FlightInvoiceInfo();
                obj.deserialize(params.FlightInvoiceInfos[z]);
                this.FlightInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VinOCR请求参数结构体
 * @class
 */
class VinOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * QuotaInvoiceOCR请求参数结构体
 * @class
 */
class QuotaInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 购车发票识别结果
 * @class
 */
class CarInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
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
 * GeneralFastOCR请求参数结构体
 * @class
 */
class GeneralFastOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BankCardOCR请求参数结构体
 * @class
 */
class BankCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 机票行程单识别结果
 * @class
 */
class FlightInvoiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字）。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。
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
 * FlightInvoiceOCR请求参数结构体
 * @class
 */
class FlightInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * DriverLicenseOCR返回参数结构体
 * @class
 */
class DriverLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 国籍
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 住址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * 初次领证日期
         * @type {string || null}
         */
        this.DateOfFirstIssue = null;

        /**
         * 准驾车型
         * @type {string || null}
         */
        this.Class = null;

        /**
         * 有效期开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 有效期截止时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 证号
         * @type {string || null}
         */
        this.CardCode = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.DateOfFirstIssue = 'DateOfFirstIssue' in params ? params.DateOfFirstIssue : null;
        this.Class = 'Class' in params ? params.Class : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.CardCode = 'CardCode' in params ? params.CardCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WaybillOCR返回参数结构体
 * @class
 */
class WaybillOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {TextWaybill || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            let obj = new TextWaybill();
            obj.deserialize(params.TextDetections)
            this.TextDetections = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VehicleLicenseOCR返回参数结构体
 * @class
 */
class VehicleLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行驶证主页正面的识别结果，CardSide 为 FRONT。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextVehicleFront || null}
         */
        this.FrontInfo = null;

        /**
         * 行驶证副页正面的识别结果，CardSide 为 BACK。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextVehicleBack || null}
         */
        this.BackInfo = null;

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

        if (params.FrontInfo) {
            let obj = new TextVehicleFront();
            obj.deserialize(params.FrontInfo)
            this.FrontInfo = obj;
        }

        if (params.BackInfo) {
            let obj = new TextVehicleBack();
            obj.deserialize(params.BackInfo)
            this.BackInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QuotaInvoiceOCR返回参数结构体
 * @class
 */
class QuotaInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票号码
         * @type {string || null}
         */
        this.InvoiceNum = null;

        /**
         * 发票代码
         * @type {string || null}
         */
        this.InvoiceCode = null;

        /**
         * 大写金额
         * @type {string || null}
         */
        this.Rate = null;

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
        this.InvoiceNum = 'InvoiceNum' in params ? params.InvoiceNum : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IDCardOCR返回参数结构体
 * @class
 */
class IDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名（人像面）
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 性别（人像面）
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 民族（人像面）
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 出生日期（人像面）
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * 地址（人像面）
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 身份证号（人像面）
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * 发证机关（国徽面）
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * 证件有效期（国徽面）
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 扩展信息，根据请求的可选字段返回对应内容，不请求则不返回，具体输入参考示例3和示例4。

目前支持的扩展字段为：
IdCard，身份证照片，请求 CropIdCard 时返回；
Portrait，人像照片，请求 CropPortrait 时返回；
WarnInfos，告警信息（Code - 告警码），识别出以下告警内容时返回。

Code 告警码列表和释义：
-9100	身份证有效日期不合法告警，
-9101	身份证边框不完整告警，
-9102	身份证复印件告警，
-9103	身份证翻拍告警，
-9105	身份证框内遮挡告警，
-9104	临时身份证告警，
-9106	身份证 PS 告警。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.Birth = 'Birth' in params ? params.Birth : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.IdNum = 'IdNum' in params ? params.IdNum : null;
        this.Authority = 'Authority' in params ? params.Authority : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 英文识别结果
 * @class
 */
class TextDetectionEn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。目前EnglishOCR接口返回内容为空。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * ArithmeticOCR请求参数结构体
 * @class
 */
class ArithmeticOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDCardOCR返回参数结构体
 * @class
 */
class MLIDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 身份证号
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * 证件图片
         * @type {string || null}
         */
        this.Image = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 行驶证主页正面的识别结果
 * @class
 */
class TextVehicleFront extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号牌号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlateNo = null;

        /**
         * 车辆类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VehicleType = null;

        /**
         * 所有人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 住址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 使用性质
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UseCharacter = null;

        /**
         * 品牌型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 车辆识别代号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vin = null;

        /**
         * 发动机号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EngineNo = null;

        /**
         * 注册日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegisterDate = null;

        /**
         * 发证日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IssueDate = null;

        /**
         * 印章
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Seal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlateNo = 'PlateNo' in params ? params.PlateNo : null;
        this.VehicleType = 'VehicleType' in params ? params.VehicleType : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.UseCharacter = 'UseCharacter' in params ? params.UseCharacter : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.Vin = 'Vin' in params ? params.Vin : null;
        this.EngineNo = 'EngineNo' in params ? params.EngineNo : null;
        this.RegisterDate = 'RegisterDate' in params ? params.RegisterDate : null;
        this.IssueDate = 'IssueDate' in params ? params.IssueDate : null;
        this.Seal = 'Seal' in params ? params.Seal : null;

    }
}

/**
 * TaxiInvoiceOCR返回参数结构体
 * @class
 */
class TaxiInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票代码
         * @type {string || null}
         */
        this.InvoiceNum = null;

        /**
         * 发票号码
         * @type {string || null}
         */
        this.InvoiceCode = null;

        /**
         * 日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 金额
         * @type {string || null}
         */
        this.Fare = null;

        /**
         * 上车时间
         * @type {string || null}
         */
        this.GetOnTime = null;

        /**
         * 下车时间
         * @type {string || null}
         */
        this.GetOffTime = null;

        /**
         * 里程
         * @type {string || null}
         */
        this.Distance = null;

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
        this.InvoiceNum = 'InvoiceNum' in params ? params.InvoiceNum : null;
        this.InvoiceCode = 'InvoiceCode' in params ? params.InvoiceCode : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.Fare = 'Fare' in params ? params.Fare : null;
        this.GetOnTime = 'GetOnTime' in params ? params.GetOnTime : null;
        this.GetOffTime = 'GetOffTime' in params ? params.GetOffTime : null;
        this.Distance = 'Distance' in params ? params.Distance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MLIDPassportOCR返回参数结构体
 * @class
 */
class MLIDPassportOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 护照ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 出生日期
         * @type {string || null}
         */
        this.DateOfBirth = null;

        /**
         * 性别（F女，M男）
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 有效期
         * @type {string || null}
         */
        this.DateOfExpiration = null;

        /**
         * 发行国
         * @type {string || null}
         */
        this.IssuingCountry = null;

        /**
         * 国籍
         * @type {string || null}
         */
        this.Nationality = null;

        /**
         * 告警码
-9103	证照翻拍告警
-9102	证照复印件告警
         * @type {Array.<number> || null}
         */
        this.Warn = null;

        /**
         * 证件图片
         * @type {string || null}
         */
        this.Image = null;

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
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DateOfBirth = 'DateOfBirth' in params ? params.DateOfBirth : null;
        this.Sex = 'Sex' in params ? params.Sex : null;
        this.DateOfExpiration = 'DateOfExpiration' in params ? params.DateOfExpiration : null;
        this.IssuingCountry = 'IssuingCountry' in params ? params.IssuingCountry : null;
        this.Nationality = 'Nationality' in params ? params.Nationality : null;
        this.Warn = 'Warn' in params ? params.Warn : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralHandwritingOCR返回参数结构体
 * @class
 */
class GeneralHandwritingOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextGeneralHandwriting> || null}
         */
        this.TextDetections = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextGeneralHandwriting();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PermitOCR请求参数结构体
 * @class
 */
class PermitOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * MLIDCardOCR请求参数结构体
 * @class
 */
class MLIDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。( 中国地区之外不支持这个字段 )
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 是否返回图片
         * @type {boolean || null}
         */
        this.RetImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RetImage = 'RetImage' in params ? params.RetImage : null;

    }
}

/**
 * TableOCR返回参数结构体
 * @class
 */
class TableOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextTable> || null}
         */
        this.TextDetections = null;

        /**
         * Base64 编码后的 Excel 数据。
         * @type {string || null}
         */
        this.Data = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextTable();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 横坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * 纵坐标
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
 * TaxiInvoiceOCR请求参数结构体
 * @class
 */
class TaxiInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * WaybillOCR请求参数结构体
 * @class
 */
class WaybillOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VehicleLicenseOCR请求参数结构体
 * @class
 */
class VehicleLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT 为行驶证主页正面（有红色印章的一面），
BACK 为行驶证副页正面（有号码号牌的一面）。
         * @type {string || null}
         */
        this.CardSide = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CardSide = 'CardSide' in params ? params.CardSide : null;

    }
}

/**
 * 运单识别结果
 * @class
 */
class TextWaybill extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收件人姓名
         * @type {WaybillObj || null}
         */
        this.RecName = null;

        /**
         * 收件人手机号
         * @type {WaybillObj || null}
         */
        this.RecNum = null;

        /**
         * 收件人地址
         * @type {WaybillObj || null}
         */
        this.RecAddr = null;

        /**
         * 寄件人姓名
         * @type {WaybillObj || null}
         */
        this.SenderName = null;

        /**
         * 寄件人手机号
         * @type {WaybillObj || null}
         */
        this.SenderNum = null;

        /**
         * 寄件人地址
         * @type {WaybillObj || null}
         */
        this.SenderAddr = null;

        /**
         * 运单号
         * @type {WaybillObj || null}
         */
        this.WaybillNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecName) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecName)
            this.RecName = obj;
        }

        if (params.RecNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecNum)
            this.RecNum = obj;
        }

        if (params.RecAddr) {
            let obj = new WaybillObj();
            obj.deserialize(params.RecAddr)
            this.RecAddr = obj;
        }

        if (params.SenderName) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderName)
            this.SenderName = obj;
        }

        if (params.SenderNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderNum)
            this.SenderNum = obj;
        }

        if (params.SenderAddr) {
            let obj = new WaybillObj();
            obj.deserialize(params.SenderAddr)
            this.SenderAddr = obj;
        }

        if (params.WaybillNum) {
            let obj = new WaybillObj();
            obj.deserialize(params.WaybillNum)
            this.WaybillNum = obj;
        }

    }
}

/**
 * 算式识别结果
 * @class
 */
class TextArithmetic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 算式运算结果
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 保留字段，暂不支持
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示（保留字段，暂不支持）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 保留字段，暂不支持
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * GeneralBasicOCR返回参数结构体
 * @class
 */
class GeneralBasicOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。
         * @type {string || null}
         */
        this.Language = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IDCardOCR请求参数结构体
 * @class
 */
class IDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT 为身份证有照片的一面（人像面），
BACK 为身份证有国徽的一面（国徽面）。
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。
目前包含的字段为：
CropIdCard，身份证照片裁剪，bool 类型，默认false，
CropPortrait，人像照片裁剪，bool 类型，默认false，
CopyWarn，复印件告警，bool 类型，默认false，
BorderCheckWarn，边框和框内遮挡告警，bool 类型，默认false，
ReshootWarn，翻拍告警，bool 类型，默认false，
DetectPsWarn，PS检测告警，bool类型，默认false，
TempIdWarn，临时身份证告警，bool类型，默认false，
InvalidDateWarn，身份证有效日期不合法告警，bool类型，默认false。

SDK 设置方式参考：
Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
API 3.0 Explorer 设置方式参考：
Config = {"CropIdCard":true,"CropPortrait":true}
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CardSide = 'CardSide' in params ? params.CardSide : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * DriverLicenseOCR请求参数结构体
 * @class
 */
class DriverLicenseOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 文字识别结果
 * @class
 */
class TextDetection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 ~100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段。
GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * VatInvoiceOCR请求参数结构体
 * @class
 */
class VatInvoiceOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VinOCR返回参数结构体
 * @class
 */
class VinOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的车辆 VIN 码。
         * @type {string || null}
         */
        this.Vin = null;

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
        this.Vin = 'Vin' in params ? params.Vin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LicensePlateOCR返回参数结构体
 * @class
 */
class LicensePlateOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的车牌号码。
         * @type {string || null}
         */
        this.Number = null;

        /**
         * 置信度，0 - 100 之间。
         * @type {number || null}
         */
        this.Confidence = null;

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
        this.Number = 'Number' in params ? params.Number : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 名片识别结果
 * @class
 */
class BusinessCardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的字段名称（关键字，可能重复，比如多个手机），能识别的字段名为：
姓名、英文姓名、英文地址、公司、英文公司、职位、英文职位、部门、英文部门、手机、电话、传真、社交帐号、QQ、MSN、微信、微博、邮箱、邮编、网址、公司账号、其他。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
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
 * 文字识别结果
 * @class
 */
class TextGeneralHandwriting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
         * @type {string || null}
         */
        this.DetectedText = null;

        /**
         * 置信度 0 - 100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文本行坐标，以四个顶点坐标表示
         * @type {Array.<Coord> || null}
         */
        this.Polygon = null;

        /**
         * 此字段为扩展字段
         * @type {string || null}
         */
        this.AdvancedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectedText = 'DetectedText' in params ? params.DetectedText : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.Polygon) {
            this.Polygon = new Array();
            for (let z in params.Polygon) {
                let obj = new Coord();
                obj.deserialize(params.Polygon[z]);
                this.Polygon.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * 运单识别对象
 * @class
 */
class WaybillObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的文本行内容
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
 * TableOCR请求参数结构体
 * @class
 */
class TableOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * BizLicenseOCR返回参数结构体
 * @class
 */
class BizLicenseOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册号
         * @type {string || null}
         */
        this.RegNum = null;

        /**
         * 公司名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 注册资本
         * @type {string || null}
         */
        this.Capital = null;

        /**
         * 法定代表人
         * @type {string || null}
         */
        this.Person = null;

        /**
         * 地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 经营范围
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 主体类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 营业期限
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 组成形式
         * @type {string || null}
         */
        this.ComposingForm = null;

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
        this.RegNum = 'RegNum' in params ? params.RegNum : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Capital = 'Capital' in params ? params.Capital : null;
        this.Person = 'Person' in params ? params.Person : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ComposingForm = 'ComposingForm' in params ? params.ComposingForm : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GeneralHandwritingOCR请求参数结构体
 * @class
 */
class GeneralHandwritingOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * VatInvoiceOCR返回参数结构体
 * @class
 */
class VatInvoiceOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextVatInvoice> || null}
         */
        this.VatInvoiceInfos = null;

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

        if (params.VatInvoiceInfos) {
            this.VatInvoiceInfos = new Array();
            for (let z in params.VatInvoiceInfos) {
                let obj = new TextVatInvoice();
                obj.deserialize(params.VatInvoiceInfos[z]);
                this.VatInvoiceInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TrainTicketOCR返回参数结构体
 * @class
 */
class TrainTicketOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编号
         * @type {string || null}
         */
        this.TicketNum = null;

        /**
         * 出发站
         * @type {string || null}
         */
        this.StartStation = null;

        /**
         * 到达站
         * @type {string || null}
         */
        this.DestinationStation = null;

        /**
         * 出发时间
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 车次
         * @type {string || null}
         */
        this.TrainNum = null;

        /**
         * 座位号
         * @type {string || null}
         */
        this.Seat = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 票价
         * @type {string || null}
         */
        this.Price = null;

        /**
         * 席别
         * @type {string || null}
         */
        this.SeatCategory = null;

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
        this.TicketNum = 'TicketNum' in params ? params.TicketNum : null;
        this.StartStation = 'StartStation' in params ? params.StartStation : null;
        this.DestinationStation = 'DestinationStation' in params ? params.DestinationStation : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.TrainNum = 'TrainNum' in params ? params.TrainNum : null;
        this.Seat = 'Seat' in params ? params.Seat : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.SeatCategory = 'SeatCategory' in params ? params.SeatCategory : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BankCardOCR返回参数结构体
 * @class
 */
class BankCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卡号
         * @type {string || null}
         */
        this.CardNo = null;

        /**
         * 银行信息
         * @type {string || null}
         */
        this.BankInfo = null;

        /**
         * 有效期
         * @type {string || null}
         */
        this.ValidDate = null;

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
        this.CardNo = 'CardNo' in params ? params.CardNo : null;
        this.BankInfo = 'BankInfo' in params ? params.BankInfo : null;
        this.ValidDate = 'ValidDate' in params ? params.ValidDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BusinessCardOCR请求参数结构体
 * @class
 */
class BusinessCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。
目前支持的字段为：
RetImageType-“PROPROCESS” 图像预处理，string 类型。
图像预处理功能为，检测图片倾斜的角度，将原本倾斜的图片围绕中心点转正，最终输出一张正的名片抠图。

SDK 设置方式参考：
Config = Json.stringify({"RetImageType":"PROPROCESS"})
API 3.0 Explorer 设置方式参考：
Config = {"RetImageType":"PROPROCESS"}
         * @type {string || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Config = 'Config' in params ? params.Config : null;

    }
}

/**
 * GeneralFastOCR返回参数结构体
 * @class
 */
class GeneralFastOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
         * @type {Array.<TextDetection> || null}
         */
        this.TextDetections = null;

        /**
         * 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。
返回结果含义为：zh - 中英混合，jap - 日文，kor - 韩文。
         * @type {string || null}
         */
        this.Language = null;

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

        if (params.TextDetections) {
            this.TextDetections = new Array();
            for (let z in params.TextDetections) {
                let obj = new TextDetection();
                obj.deserialize(params.TextDetections[z]);
                this.TextDetections.push(obj);
            }
        }
        this.Language = 'Language' in params ? params.Language : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LicensePlateOCR请求参数结构体
 * @class
 */
class LicensePlateOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * GeneralBasicOCR请求参数结构体
 * @class
 */
class GeneralBasicOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的 Base64 值。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的 Url 地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
非腾讯云存储的 Url 速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 保留字段。
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 识别语言类型。
支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)。
可选值：
zh\auto\jap\kor\
spa\fre\ger\por\
vie\may\rus\ita\
hol\swe\fin\dan\
nor\hun\tha\lat
可选值分别表示：
中英文混合、自动识别、日语、韩语、
西班牙语、法语、德语、葡萄牙语、
越南语、马来语、俄语、意大利语、
荷兰语、瑞典语、芬兰语、丹麦语、
挪威语、匈牙利语、泰语、拉丁语系。
         * @type {string || null}
         */
        this.LanguageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.LanguageType = 'LanguageType' in params ? params.LanguageType : null;

    }
}

module.exports = {
    CarInvoiceOCRResponse: CarInvoiceOCRResponse,
    ArithmeticOCRResponse: ArithmeticOCRResponse,
    TextVehicleBack: TextVehicleBack,
    BusinessCardOCRResponse: BusinessCardOCRResponse,
    TextVatInvoice: TextVatInvoice,
    EnglishOCRRequest: EnglishOCRRequest,
    BizLicenseOCRRequest: BizLicenseOCRRequest,
    CarInvoiceOCRRequest: CarInvoiceOCRRequest,
    TrainTicketOCRRequest: TrainTicketOCRRequest,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    TextTable: TextTable,
    EnglishOCRResponse: EnglishOCRResponse,
    MLIDPassportOCRRequest: MLIDPassportOCRRequest,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    PermitOCRResponse: PermitOCRResponse,
    FlightInvoiceOCRResponse: FlightInvoiceOCRResponse,
    VinOCRRequest: VinOCRRequest,
    QuotaInvoiceOCRRequest: QuotaInvoiceOCRRequest,
    CarInvoiceInfo: CarInvoiceInfo,
    GeneralFastOCRRequest: GeneralFastOCRRequest,
    BankCardOCRRequest: BankCardOCRRequest,
    FlightInvoiceInfo: FlightInvoiceInfo,
    FlightInvoiceOCRRequest: FlightInvoiceOCRRequest,
    DriverLicenseOCRResponse: DriverLicenseOCRResponse,
    WaybillOCRResponse: WaybillOCRResponse,
    VehicleLicenseOCRResponse: VehicleLicenseOCRResponse,
    QuotaInvoiceOCRResponse: QuotaInvoiceOCRResponse,
    IDCardOCRResponse: IDCardOCRResponse,
    TextDetectionEn: TextDetectionEn,
    ArithmeticOCRRequest: ArithmeticOCRRequest,
    MLIDCardOCRResponse: MLIDCardOCRResponse,
    TextVehicleFront: TextVehicleFront,
    TaxiInvoiceOCRResponse: TaxiInvoiceOCRResponse,
    MLIDPassportOCRResponse: MLIDPassportOCRResponse,
    GeneralHandwritingOCRResponse: GeneralHandwritingOCRResponse,
    PermitOCRRequest: PermitOCRRequest,
    MLIDCardOCRRequest: MLIDCardOCRRequest,
    TableOCRResponse: TableOCRResponse,
    Coord: Coord,
    TaxiInvoiceOCRRequest: TaxiInvoiceOCRRequest,
    WaybillOCRRequest: WaybillOCRRequest,
    VehicleLicenseOCRRequest: VehicleLicenseOCRRequest,
    TextWaybill: TextWaybill,
    TextArithmetic: TextArithmetic,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    IDCardOCRRequest: IDCardOCRRequest,
    DriverLicenseOCRRequest: DriverLicenseOCRRequest,
    TextDetection: TextDetection,
    VatInvoiceOCRRequest: VatInvoiceOCRRequest,
    VinOCRResponse: VinOCRResponse,
    LicensePlateOCRResponse: LicensePlateOCRResponse,
    BusinessCardInfo: BusinessCardInfo,
    TextGeneralHandwriting: TextGeneralHandwriting,
    WaybillObj: WaybillObj,
    TableOCRRequest: TableOCRRequest,
    BizLicenseOCRResponse: BizLicenseOCRResponse,
    GeneralHandwritingOCRRequest: GeneralHandwritingOCRRequest,
    VatInvoiceOCRResponse: VatInvoiceOCRResponse,
    TrainTicketOCRResponse: TrainTicketOCRResponse,
    BankCardOCRResponse: BankCardOCRResponse,
    BusinessCardOCRRequest: BusinessCardOCRRequest,
    GeneralFastOCRResponse: GeneralFastOCRResponse,
    LicensePlateOCRRequest: LicensePlateOCRRequest,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,

}
