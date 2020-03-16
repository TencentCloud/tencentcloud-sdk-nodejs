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
 * 内容审核 Ocr 文字鉴政、敏感任务结果类型
 * @class
 */
class VodPoliticalOcrReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Ocr 文字涉政、敏感评分，分值为0到100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉政、敏感结果建议，取值范围：
pass。
review。
block。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉政、敏感嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

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
 * 内容审核 Asr 文字鉴政、敏感任务结果类型
 * @class
 */
class VodPoliticalAsrReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
pass。
review。
block。

Asr 文字涉政、敏感评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉政、敏感结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉政、敏感嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * VideoModeration返回参数结构体
 * @class
 */
class VideoModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频审核任务ID
         * @type {string || null}
         */
        this.VodTaskId = null;

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
        this.VodTaskId = 'VodTaskId' in params ? params.VodTaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 媒体文件元信息。
 * @class
 */
class VodMetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 容器类型，例如 m4a，mp4 等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Container = null;

        /**
         * 视频流码率平均值与音频流码率平均值之和，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流高度的最大值，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流宽度的最大值，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 视频拍摄时的选择角度，单位：度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 视频流信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

        /**
         * 音频流信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * 视频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * 音频时长，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AudioDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new VodVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new VodAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.AudioDuration = 'AudioDuration' in params ? params.AudioDuration : null;

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
 * 文件视频流信息
 * @class
 */
class VodVideoStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频流的高度，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频流的宽度，单位：px。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频流的编码格式，例如 h264。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 帧率，单位：hz。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

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
 * VideoModeration请求参数结构体
 * @class
 */
class VideoModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要审核的视频的URL地址
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 开发者标识
         * @type {string || null}
         */
        this.DeveloperId = null;

        /**
         * 审核完成后回调地址
         * @type {string || null}
         */
        this.CBUrl = null;

        /**
         * 透传字段，透传简单信息。
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.DeveloperId = 'DeveloperId' in params ? params.DeveloperId : null;
        this.CBUrl = 'CBUrl' in params ? params.CBUrl : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

/**
 * 内容审核鉴政任务结果类型
 * @class
 */
class VodPoliticalReviewSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉政分数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴政结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 涉政人物、违规图标名字。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 嫌疑片段鉴政结果标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 ISO 日期格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PicUrlExpireTimeStamp = null;

        /**
         * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * 内容审核鉴黄任务结果类型
 * @class
 */
class VodPornReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 视频鉴黄评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 鉴黄结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴黄结果标签，取值范围：
porn：色情。
sexy：性感。
vulgar：低俗。
intimacy：亲密行为。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉黄嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodPornReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodPornReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

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
 * 内容审核涉黄/暴恐嫌疑片段
 * @class
 */
class VodPornReviewSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段涉黄分数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段鉴黄结果标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 嫌疑片段鉴黄结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 嫌疑图片 URL 失效时间，使用 ISO 日期格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PicUrlExpireTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTimeStamp = 'PicUrlExpireTimeStamp' in params ? params.PicUrlExpireTimeStamp : null;

    }
}

/**
 * 涉政信息
 * @class
 */
class VodPoliticalReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 视频涉政评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 涉政结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频鉴政结果标签，取值范围：
politician：政治人物。
violation_photo：违规图标。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 有涉政嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodPoliticalReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodPoliticalReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 文件音频流信息
 * @class
 */
class VodAudioStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频流的采样率，单位：hz。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * 音频流的编码格式，例如 aac。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Codec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;

    }
}

/**
 * 内容审核 Ocr 文字审核嫌疑片段
 * @class
 */
class VodOcrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

        /**
         * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

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
 * 内容审核 Asr 文字审核嫌疑片段
 * @class
 */
class VodAsrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嫌疑片段起始的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 嫌疑片段结束的偏移时间，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 嫌疑片段置信度。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 嫌疑片段审核结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 嫌疑关键词列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;

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
 * DescribeVideoTask请求参数结构体
 * @class
 */
class DescribeVideoTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的视频审核的任务ID
         * @type {string || null}
         */
        this.VodTaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VodTaskId = 'VodTaskId' in params ? params.VodTaskId : null;

    }
}

/**
 * 暴恐信息
 * @class
 */
class VodTerrorismReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频暴恐评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 暴恐结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 视频暴恐结果标签，取值范围：
guns：武器枪支。
crowd：人群聚集。
police：警察部队。
bloody：血腥画面。
banners：暴恐旗帜。
militant：武装分子。
explosion：爆炸火灾。
terrorists：暴恐人物。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 有暴恐嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodPornReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodPornReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

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
 * Asr 文字涉黄信息
 * @class
 */
class VodPornAsrReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Asr 文字涉黄评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Asr 文字涉黄结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Asr 文字有涉黄嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DescribeVideoTask返回参数结构体
 * @class
 */
class DescribeVideoTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，取值：
WAITING：等待中；
PROCESSING：处理中；
FINISH：已完成。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务开始执行的时间，采用 ISO 日期格式。
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * 任务执行完毕的时间，采用 ISO 日期格式。
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 视频内容审核智能画面鉴黄任务的查询结果。
         * @type {VodPornReviewResult || null}
         */
        this.PornResult = null;

        /**
         * 视频内容审核智能画面鉴恐任务的查询结果。
         * @type {VodTerrorismReviewResult || null}
         */
        this.TerrorismResult = null;

        /**
         * 视频内容审核智能画面鉴政任务的查询结果。
         * @type {VodPoliticalReviewResult || null}
         */
        this.PoliticalResult = null;

        /**
         * 视频内容审核 Ocr 文字鉴政任务的查询结果。
         * @type {VodPoliticalOcrReviewResult || null}
         */
        this.PoliticalOcrResult = null;

        /**
         * 视频内容审核 Asr 文字鉴黄任务的查询结果。
         * @type {VodPornAsrReviewResult || null}
         */
        this.PornAsrResult = null;

        /**
         * 视频内容审核 Asr 文字鉴政任务的查询结果。
         * @type {VodPoliticalAsrReviewResult || null}
         */
        this.PoliticalAsrResult = null;

        /**
         * 视频内容审核 Ocr 文字鉴黄任务的查询结果。
         * @type {VodPornOcrResult || null}
         */
        this.PornOcrResult = null;

        /**
         * 原始视频的元信息。
         * @type {VodMetaData || null}
         */
        this.MetaData = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.PornResult) {
            let obj = new VodPornReviewResult();
            obj.deserialize(params.PornResult)
            this.PornResult = obj;
        }

        if (params.TerrorismResult) {
            let obj = new VodTerrorismReviewResult();
            obj.deserialize(params.TerrorismResult)
            this.TerrorismResult = obj;
        }

        if (params.PoliticalResult) {
            let obj = new VodPoliticalReviewResult();
            obj.deserialize(params.PoliticalResult)
            this.PoliticalResult = obj;
        }

        if (params.PoliticalOcrResult) {
            let obj = new VodPoliticalOcrReviewResult();
            obj.deserialize(params.PoliticalOcrResult)
            this.PoliticalOcrResult = obj;
        }

        if (params.PornAsrResult) {
            let obj = new VodPornAsrReviewResult();
            obj.deserialize(params.PornAsrResult)
            this.PornAsrResult = obj;
        }

        if (params.PoliticalAsrResult) {
            let obj = new VodPoliticalAsrReviewResult();
            obj.deserialize(params.PoliticalAsrResult)
            this.PoliticalAsrResult = obj;
        }

        if (params.PornOcrResult) {
            let obj = new VodPornOcrResult();
            obj.deserialize(params.PornOcrResult)
            this.PornOcrResult = obj;
        }

        if (params.MetaData) {
            let obj = new VodMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 内容审核 Ocr 文字鉴黄任务结果类型
 * @class
 */
class VodPornOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 错误码，0：成功，其他值：失败。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * Ocr 文字涉黄评分，分值为0到100。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Ocr 文字涉黄结果建议，取值范围：
pass。
review。
block。

注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Ocr 文字有涉黄嫌疑的视频片段列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VodOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new VodOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

module.exports = {
    VodPoliticalOcrReviewResult: VodPoliticalOcrReviewResult,
    Candidate: Candidate,
    TerrorismResult: TerrorismResult,
    VodPoliticalAsrReviewResult: VodPoliticalAsrReviewResult,
    VideoModerationResponse: VideoModerationResponse,
    VodMetaData: VodMetaData,
    ImageModerationResponse: ImageModerationResponse,
    VodVideoStreamItem: VodVideoStreamItem,
    ImageModerationRequest: ImageModerationRequest,
    VideoModerationRequest: VideoModerationRequest,
    VodPoliticalReviewSegmentItem: VodPoliticalReviewSegmentItem,
    VodPornReviewResult: VodPornReviewResult,
    DisgustResult: DisgustResult,
    VodPornReviewSegmentItem: VodPornReviewSegmentItem,
    VodPoliticalReviewResult: VodPoliticalReviewResult,
    VodAudioStreamItem: VodAudioStreamItem,
    VodOcrTextSegmentItem: VodOcrTextSegmentItem,
    PoliticsResult: PoliticsResult,
    VodAsrTextSegmentItem: VodAsrTextSegmentItem,
    PornResult: PornResult,
    DescribeVideoTaskRequest: DescribeVideoTaskRequest,
    VodTerrorismReviewResult: VodTerrorismReviewResult,
    FaceResult: FaceResult,
    VodPornAsrReviewResult: VodPornAsrReviewResult,
    DescribeVideoTaskResponse: DescribeVideoTaskResponse,
    FaceRect: FaceRect,
    VodPornOcrResult: VodPornOcrResult,

}
