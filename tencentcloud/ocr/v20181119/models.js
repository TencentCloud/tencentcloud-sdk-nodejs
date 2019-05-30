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
         * 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。
返回结果含义为：zh-中英混合，jap-日文，kor-韩文。
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
 * WaybillOCR返回参数结构体
 * @class
 */
class WaybillOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 扩展信息，根据请求的可选字段返回对应内容，不请求则不返回，具体输入参考示例3。目前支持的扩展字段为：
IdCard，身份证照片，请求 CropIdCard 时返回；
Portrait，人像照片，请求 CropPortrait 时返回；
WarnInfos，告警信息（Code - 告警码，Msg - 告警信息内容），识别出翻拍件或复印件时返回。

Code 告警码列表和释义：
-9103	身份证翻拍告警，
-9102	身份证复印件告警。
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
         * 结果
         * @type {boolean || null}
         */
        this.Result = null;

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
 * IDCardOCR请求参数结构体
 * @class
 */
class IDCardOCRRequest extends  AbstractModel {
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
         * FRONT 为身份证有照片的一面（人像面），
BACK 为身份证有国徽的一面（国徽面）。
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。
目前包含的字段为：
CropIdCard，身份证照片裁剪，bool 类型，
CropPortrait，人像照片裁剪，bool 类型，
CopyWarn，复印件告警，bool 类型，
ReshootWarn，翻拍告警，bool 类型。

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

    }
}

module.exports = {
    ArithmeticOCRResponse: ArithmeticOCRResponse,
    EnglishOCRRequest: EnglishOCRRequest,
    GeneralAccurateOCRResponse: GeneralAccurateOCRResponse,
    GeneralFastOCRRequest: GeneralFastOCRRequest,
    TextTable: TextTable,
    GeneralAccurateOCRRequest: GeneralAccurateOCRRequest,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    VinOCRRequest: VinOCRRequest,
    EnglishOCRResponse: EnglishOCRResponse,
    WaybillOCRResponse: WaybillOCRResponse,
    IDCardOCRResponse: IDCardOCRResponse,
    TextDetectionEn: TextDetectionEn,
    ArithmeticOCRRequest: ArithmeticOCRRequest,
    TableOCRResponse: TableOCRResponse,
    Coord: Coord,
    WaybillOCRRequest: WaybillOCRRequest,
    TextWaybill: TextWaybill,
    TextArithmetic: TextArithmetic,
    IDCardOCRRequest: IDCardOCRRequest,
    TextDetection: TextDetection,
    VinOCRResponse: VinOCRResponse,
    WaybillObj: WaybillObj,
    TableOCRRequest: TableOCRRequest,
    GeneralFastOCRResponse: GeneralFastOCRResponse,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,

}
