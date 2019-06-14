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
 * ImageModeration请求参数结构体
 * @class
 */
class ImageModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次调用支持的识别场景，可选值如下：
1. PORN，即色情识别
2. TERRORISM，即暴恐识别
3. POLITICS，即政治敏感识别

支持多场景（Scenes）一起检测。例如，使用 Scenes=["PORN", "TERRORISM"]，即对一张图片同时进行色情识别和暴恐识别。
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

        /**
         * 图片URL地址。 
图片限制： 
 • 图片格式：PNG、JPG、JPEG。 
 • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
 • 图片像素：大于50*50像素，否则影响识别效果； 
 • 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 预留字段，后期用于展示更多识别信息。
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 透传字段，透传简单信息。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scenes = 'Scenes' in params ? params.Scenes : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * 识别出人脸对应的候选人。
 * @class
 */
class Candidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出人脸对应的候选人数组。当前返回相似度最高的候选人。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 相似度，0-100之间。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 暴恐识别结果。
 * @class
 */
class TerrorismResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该识别场景的错误码：
0表示成功，
-1表示系统错误，
-2表示引擎错误，
-1400表示图片解码失败。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误码描述信息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 图像涉恐的分数，0-100之间，分数越高涉恐几率越大。
Type为LABEL时：
0到86，Suggestion建议为PASS
86到91，Suggestion建议为REVIEW
91到100，Suggestion建议为BLOCK
Type为FACE时：
0到55，Suggestion建议为PASS
55到60，Suggestion建议为REVIEW
60到100，Suggestion建议为BLOCK
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Type取值为‘FACE’时，人脸识别的结果列表。基于图片中实际检测到的人脸数，返回数组最大值不超过5个。
         * @type {Array.<FaceResult> || null}
         */
        this.FaceResults = null;

        /**
         * 暴恐识别返回的详细标签后期开放。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 取值'LABEL' 或‘FACE’，LABEL表示结论和置信度来自标签分类，FACE表示结论和置信度来自人脸识别。
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.FaceResults) {
            this.FaceResults = new Array();
            for (let z in params.FaceResults) {
                let obj = new FaceResult();
                obj.deserialize(params.FaceResults[z]);
                this.FaceResults.push(obj);
            }
        }
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DetectLabel请求参数结构体
 * @class
 */
class DetectLabelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的URL地址。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。与ImageUrl同时存在时优先使用ImageUrl字段。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * DetectLabel返回参数结构体
 * @class
 */
class DetectLabelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签结果数组。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.Labels = null;

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

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 政治敏感识别结果。
 * @class
 */
class PoliticsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该识别场景的错误码：
0表示成功，
-1表示系统错误，
-2表示引擎错误，
-1400表示图片解码失败，
-1401表示图片不符合规范。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误码描述信息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 图像涉政的分数，0-100之间，分数越高涉政几率越大。
Type为DNA时：
0到75，Suggestion建议为PASS
75到90，Suggestion建议为REVIEW
90到100，Suggestion建议为BLOCK
Type为FACE时：
0到55，Suggestion建议为PASS
55到60，Suggestion建议为REVIEW
60到100，Suggestion建议为BLOCK
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Type取值为‘FACE’时，人脸识别的结果列表。基于图片中实际检测到的人脸数，返回数组最大值不超过5个。
         * @type {Array.<FaceResult> || null}
         */
        this.FaceResults = null;

        /**
         * 取值'DNA' 或‘FACE’。DNA表示结论和置信度来自图像指纹，FACE表示结论和置信度来自人脸识别。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 鉴政识别返回的详细标签后期开放。
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.FaceResults) {
            this.FaceResults = new Array();
            for (let z in params.FaceResults) {
                let obj = new FaceResult();
                obj.deserialize(params.FaceResults[z]);
                this.FaceResults.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;

    }
}

/**
 * 色情识别结果。
 * @class
 */
class PornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该识别场景的错误码：
0表示成功，
-1表示系统错误，
-2表示引擎错误，
-1400表示图片解码失败。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误码描述信息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 算法对于Suggestion的置信度，0-100之间，值越高，表示对于Suggestion越确定。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 预留字段，后期用于展示更多识别信息。
         * @type {string || null}
         */
        this.AdvancedInfo = null;

        /**
         * 取值'LABEL‘，LABEL表示结论和置信度来自标签分类。
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AdvancedInfo = 'AdvancedInfo' in params ? params.AdvancedInfo : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 恶心识别结果。
 * @class
 */
class DisgustResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该识别场景的错误码：
0表示成功，
-1表示系统错误，
-2表示引擎错误。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误码描述信息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 图像恶心的分数，0-100之间，分数越高恶心几率越大。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 识别出的人脸在图片中的位置。

 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸区域左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸区域左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸区域宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人脸区域高度。
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
 * 人脸识别结果。
 * @class
 */
class FaceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测出的人脸框位置。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * 候选人列表。当前返回相似度最高的候选人。
         * @type {Array.<Candidate> || null}
         */
        this.Candidates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

        if (params.Candidates) {
            this.Candidates = new Array();
            for (let z in params.Candidates) {
                let obj = new Candidate();
                obj.deserialize(params.Candidates[z]);
                this.Candidates.push(obj);
            }
        }

    }
}

/**
 * ImageModeration返回参数结构体
 * @class
 */
class ImageModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别场景的审核结论：
PASS：正常
REVIEW：疑似
BLOCK：违规
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 色情识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PornResult || null}
         */
        this.PornResult = null;

        /**
         * 暴恐识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TerrorismResult || null}
         */
        this.TerrorismResult = null;

        /**
         * 政治敏感识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PoliticsResult || null}
         */
        this.PoliticsResult = null;

        /**
         * 透传字段，透传简单信息。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 恶心内容识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DisgustResult || null}
         */
        this.DisgustResult = null;

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
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.PornResult) {
            let obj = new PornResult();
            obj.deserialize(params.PornResult)
            this.PornResult = obj;
        }

        if (params.TerrorismResult) {
            let obj = new TerrorismResult();
            obj.deserialize(params.TerrorismResult)
            this.TerrorismResult = obj;
        }

        if (params.PoliticsResult) {
            let obj = new PoliticsResult();
            obj.deserialize(params.PoliticsResult)
            this.PoliticsResult = obj;
        }
        this.Extra = 'Extra' in params ? params.Extra : null;

        if (params.DisgustResult) {
            let obj = new DisgustResult();
            obj.deserialize(params.DisgustResult)
            this.DisgustResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图像标签检测结果。
 * @class
 */
class DetectLabelItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片中的物体名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 算法对于Name的置信度，0-100之间，值越高，表示对于Name越确定。
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

module.exports = {
    ImageModerationRequest: ImageModerationRequest,
    Candidate: Candidate,
    TerrorismResult: TerrorismResult,
    DetectLabelRequest: DetectLabelRequest,
    DetectLabelResponse: DetectLabelResponse,
    PoliticsResult: PoliticsResult,
    PornResult: PornResult,
    DisgustResult: DisgustResult,
    FaceRect: FaceRect,
    FaceResult: FaceResult,
    ImageModerationResponse: ImageModerationResponse,
    DetectLabelItem: DetectLabelItem,

}
