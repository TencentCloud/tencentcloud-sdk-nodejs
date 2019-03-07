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
 * GeneralFastOCR请求参数结构体
 * @class
 */
class GeneralFastOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的BASE64值。
支持的图片格式：PNG、JPG、JPEG，暂不支持GIF格式。
支持的图片大小：所下载图片经Base64编码后不超过3M。图片下载时间不超过3秒。
图片的 ImageUrl、ImageBase64必须提供一个，如果都提供，只使用ImageBase64。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的URL地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持GIF格式。
支持的图片大小：所下载图片经Base64编码后不超过3M。图片下载时间不超过3秒。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
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
 * Coord
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
 * IDCardOCR返回参数结构体
 * @class
 */
class IDCardOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 姓名（正面）
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 性别（正面）
         * @type {string || null}
         */
        this.Sex = null;

        /**
         * 民族（正面）
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 出生日期（正面）
         * @type {string || null}
         */
        this.Birth = null;

        /**
         * 地址（正面）
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 身份证号（正面）
         * @type {string || null}
         */
        this.IdNum = null;

        /**
         * 发证机关（反面）
         * @type {string || null}
         */
        this.Authority = null;

        /**
         * 证件有效期（反面）
         * @type {string || null}
         */
        this.ValidDate = null;

        /**
         * 扩展信息，根据请求的可选字段返回对应内容，不请求则不返回。目前支持的扩展字段为：
IdCard身份证照片，请求CropIdCard时返回；
Portrait人像照片，请求CropPortrait时返回；
WarnInfos告警信息（Code告警码，Msg告警信息），识别出翻拍件或复印件时返回。
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
 * GeneralBasicOCR返回参数结构体
 * @class
 */
class GeneralBasicOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接
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
 * IDCardOCR请求参数结构体
 * @class
 */
class IDCardOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的BASE64值。
支持的图片格式：PNG、JPG、JPEG，暂不支持GIF格式。
支持的图片大小：所下载图片经Base64编码后不超过6M。图片下载时间不超过3秒。
图片的 ImageUrl、ImageBase64必须提供一个，如果都提供，只使用ImageBase64。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片URL地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持GIF格式。
支持的图片大小：所下载图片经Base64编码后不超过3M。图片下载时间不超过3秒。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * FRONT为身份证有照片的一面（正面）
BACK为身份证有国徽的一面（反面）
         * @type {string || null}
         */
        this.CardSide = null;

        /**
         * 可选字段，根据需要选择是否请求对应字段。目前包含的字段为：
CropIdCard-身份证照片裁剪，
CropPortrait-人像照片裁剪，
CopyWarn-复印件告警，
ReshootWarn-翻拍告警。
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
 * TextDetection
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
 * GeneralFastOCR返回参数结构体
 * @class
 */
class GeneralFastOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的文本信息，具体内容请点击左侧链接
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
 * GeneralBasicOCR请求参数结构体
 * @class
 */
class GeneralBasicOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的BASE64值。
支持的图片格式：PNG、JPG、JPEG，暂不支持GIF格式。
支持的图片大小：所下载图片经Base64编码后不超过3M。图片下载时间不超过3秒。
图片的 ImageUrl、ImageBase64必须提供一个，如果都提供，只使用ImageBase64。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片的URL地址。
支持的图片格式：PNG、JPG、JPEG，暂不支持GIF格式。
支持的图片大小：所下载图片经Base64编码后不超过3M。图片下载时间不超过3秒。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。
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

module.exports = {
    GeneralFastOCRRequest: GeneralFastOCRRequest,
    Coord: Coord,
    IDCardOCRResponse: IDCardOCRResponse,
    GeneralBasicOCRResponse: GeneralBasicOCRResponse,
    IDCardOCRRequest: IDCardOCRRequest,
    TextDetection: TextDetection,
    GeneralFastOCRResponse: GeneralFastOCRResponse,
    GeneralBasicOCRRequest: GeneralBasicOCRRequest,

}
