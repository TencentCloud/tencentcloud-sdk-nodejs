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
 * DeleteModel请求参数结构体
 * @class
 */
class DeleteModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 素材ID。
         * @type {string || null}
         */
        this.ModelId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

    }
}

/**
 * BeautifyVideo请求参数结构体
 * @class
 */
class BeautifyVideoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频url地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 美颜参数 - 美白、平滑、大眼和瘦脸。参数值范围[0, 100]。参数值为0，则不做美颜。参数默认值为0。目前默认取数组第一个元素是对所有人脸美颜。
         * @type {Array.<BeautyParam> || null}
         */
        this.BeautyParam = null;

        /**
         * 目前只支持mp4
         * @type {string || null}
         */
        this.OutputVideoType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.BeautyParam) {
            this.BeautyParam = new Array();
            for (let z in params.BeautyParam) {
                let obj = new BeautyParam();
                obj.deserialize(params.BeautyParam[z]);
                this.BeautyParam.push(obj);
            }
        }
        this.OutputVideoType = 'OutputVideoType' in params ? params.OutputVideoType : null;

    }
}

/**
 * CancelBeautifyVideoJob返回参数结构体
 * @class
 */
class CancelBeautifyVideoJobResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RGBA通道信息
 * @class
 */
class RGBAInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * R通道数值。[0,255]。
         * @type {number || null}
         */
        this.R = null;

        /**
         * G通道数值。[0,255]。
         * @type {number || null}
         */
        this.G = null;

        /**
         * B通道数值。[0,255]。
         * @type {number || null}
         */
        this.B = null;

        /**
         * A通道数值。[0,100]。建议取值50。
         * @type {number || null}
         */
        this.A = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.R = 'R' in params ? params.R : null;
        this.G = 'G' in params ? params.G : null;
        this.B = 'B' in params ? params.B : null;
        this.A = 'A' in params ? params.A : null;

    }
}

/**
 * 视频美颜返回结果
 * @class
 */
class BeautifyVideoOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频美颜输出的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 视频美颜输出的视频MD5，用于校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VideoMD5 = null;

        /**
         * 美颜输出的视频封面图base64字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverImage = null;

        /**
         * 视频宽度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频高度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 每秒传输帧数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 视频播放时长，单位为秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DurationInSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoMD5 = 'VideoMD5' in params ? params.VideoMD5 : null;
        this.CoverImage = 'CoverImage' in params ? params.CoverImage : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.DurationInSec = 'DurationInSec' in params ? params.DurationInSec : null;

    }
}

/**
 * StyleImagePro返回参数结构体
 * @class
 */
class StyleImageProResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultUrl = null;

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
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 唇色信息
 * @class
 */
class LipColorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用RGBA模型试唇色。
         * @type {RGBAInfo || null}
         */
        this.RGBA = null;

        /**
         * 使用已注册的 LUT 文件试唇色。  
ModelId 和 RGBA 两个参数只需提供一个，若都提供只使用 ModelId。
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

        /**
         * 涂妆浓淡[0,100]。建议取值50。本参数仅控制ModelId对应的涂妆浓淡。
         * @type {number || null}
         */
        this.ModelAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RGBA) {
            let obj = new RGBAInfo();
            obj.deserialize(params.RGBA)
            this.RGBA = obj;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }
        this.ModelAlpha = 'ModelAlpha' in params ? params.ModelAlpha : null;

    }
}

/**
 * StyleImage请求参数结构体
 * @class
 */
class StyleImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 滤镜类型，取值如下： 
1.白茶；2 白皙；3.初夏；4.东京；5.告白；6.暖阳；7.蔷薇；8.清澄；9.清透；10.甜薄荷；11.默认；12.心动；13.哑灰；14.樱桃布丁；15.自然；16.清逸；17.黑白；18.水果；19.爱情；20.冬日；21.相片；22.夏日；23.香氛；24.魅惑；25.悸动；26.沙滩；27.街拍；28.甜美；29.初吻；30.午后。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。  
支持PNG、JPG、JPEG、BMP 等图片格式，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 滤镜效果，取值[0,100]，0表示无效果，100表示满滤镜效果。默认值为80。
         * @type {number || null}
         */
        this.FilterDegree = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FilterDegree = 'FilterDegree' in params ? params.FilterDegree : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * CreateModel返回参数结构体
 * @class
 */
class CreateModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唇色素材ID。
         * @type {string || null}
         */
        this.ModelId = null;

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
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetModelList返回参数结构体
 * @class
 */
class GetModelListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唇色素材总数量。
         * @type {number || null}
         */
        this.ModelIdNum = null;

        /**
         * 素材数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ModelInfo> || null}
         */
        this.ModelInfos = null;

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
        this.ModelIdNum = 'ModelIdNum' in params ? params.ModelIdNum : null;

        if (params.ModelInfos) {
            this.ModelInfos = new Array();
            for (let z in params.ModelInfos) {
                let obj = new ModelInfo();
                obj.deserialize(params.ModelInfos[z]);
                this.ModelInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BeautifyPic返回参数结构体
 * @class
 */
class BeautifyPicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
         * @type {string || null}
         */
        this.ResultUrl = null;

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
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetModelList请求参数结构体
 * @class
 */
class GetModelListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始序号，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * BeautifyVideo返回参数结构体
 * @class
 */
class BeautifyVideoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频美颜任务的Job id
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 预估处理时间，粒度为秒
         * @type {number || null}
         */
        this.EstimatedProcessTime = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.EstimatedProcessTime = 'EstimatedProcessTime' in params ? params.EstimatedProcessTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LUT素材信息
 * @class
 */
class ModelInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唇色素材ID
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 唇色素材 url 。 LUT 文件 url 5分钟有效。
         * @type {string || null}
         */
        this.LUTFileUrl = null;

        /**
         * 文件描述信息。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.LUTFileUrl = 'LUTFileUrl' in params ? params.LUTFileUrl : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * TryLipstickPic返回参数结构体
 * @class
 */
class TryLipstickPicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
         * @type {string || null}
         */
        this.ResultUrl = null;

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
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteModel返回参数结构体
 * @class
 */
class DeleteModelResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelBeautifyVideoJob请求参数结构体
 * @class
 */
class CancelBeautifyVideoJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 美颜视频的Job id
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 全局美颜参数，针对所有人脸做美颜。参数全部为0，则为不做美颜
 * @class
 */
class BeautyParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 美白程度，取值范围[0,100]。0不美白，100代表最高程度。默认值30。
         * @type {number || null}
         */
        this.WhitenLevel = null;

        /**
         * 磨皮程度，取值范围[0,100]。0不磨皮，100代表最高程度。默认值30。
         * @type {number || null}
         */
        this.SmoothingLevel = null;

        /**
         * 大眼程度，取值范围[0,100]。0不大眼，100代表最高程度。默认值70。
         * @type {number || null}
         */
        this.EyeEnlargeLevel = null;

        /**
         * 瘦脸程度，取值范围[0,100]。0不瘦脸，100代表最高程度。默认值70。
         * @type {number || null}
         */
        this.FaceShrinkLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhitenLevel = 'WhitenLevel' in params ? params.WhitenLevel : null;
        this.SmoothingLevel = 'SmoothingLevel' in params ? params.SmoothingLevel : null;
        this.EyeEnlargeLevel = 'EyeEnlargeLevel' in params ? params.EyeEnlargeLevel : null;
        this.FaceShrinkLevel = 'FaceShrinkLevel' in params ? params.FaceShrinkLevel : null;

    }
}

/**
 * TryLipstickPic请求参数结构体
 * @class
 */
class TryLipstickPicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唇色信息。 
您可以输入最多3个 LipColorInfo 来实现给一张图中的最多3张人脸试唇色。
         * @type {Array.<LipColorInfo> || null}
         */
        this.LipColorInfos = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过6M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url ，对应图片 base64 编码后大小不可超过6M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LipColorInfos) {
            this.LipColorInfos = new Array();
            for (let z in params.LipColorInfos) {
                let obj = new LipColorInfo();
                obj.deserialize(params.LipColorInfos[z]);
                this.LipColorInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * StyleImagePro请求参数结构体
 * @class
 */
class StyleImageProRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 滤镜类型，取值如下： 
1.白茶；2 白皙；3.初夏；4.东京；5.告白；6.暖阳；7.蔷薇；8.清澄；9.清透；10.甜薄荷；11.默认；12.心动；13.哑灰；14.樱桃布丁；15.自然；16.清逸；17.黑白；18.水果；19.爱情；20.冬日；21.相片；22.夏日；23.香氛；24.魅惑；25.悸动；26.沙滩；27.街拍；28.甜美；29.初吻；30.午后；31.活力；32.朦胧；33.悦动；34.时尚；35.气泡；36.柠檬；37.棉花糖；38.小溪；39.丽人；40.咖啡；41.嫩芽；42.热情；43.渐暖；44.早餐；45.白茶；46.白嫩；47.圣代；48.森林；49.冲浪；50.奶咖；51.清澈；52.微风；53.日落；54.水光；55.日系；56.星光；57.阳光；58.落叶；59.生机；60.甜心；61.清逸；62.春意；63.罗马；64.青涩；65.清风；66.暖心；67.海水；68.神秘；69.旧调1；70.旧调2；71.雪顶；72.日光；73.浮云；74.流彩；75.胶片；76.回味；77.奶酪；78.蝴蝶。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。  
支持PNG、JPG、JPEG、BMP 等图片格式，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 滤镜效果，取值[0,100]，0表示无效果，100表示满滤镜效果。默认值为80。
         * @type {number || null}
         */
        this.FilterDegree = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.FilterDegree = 'FilterDegree' in params ? params.FilterDegree : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * QueryBeautifyVideoJob返回参数结构体
 * @class
 */
class QueryBeautifyVideoJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前任务状态：排队中、处理中、处理失败或者处理完成
         * @type {string || null}
         */
        this.JobStatus = null;

        /**
         * 视频美颜输出的结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BeautifyVideoOutput || null}
         */
        this.BeautifyVideoOutput = null;

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
        this.JobStatus = 'JobStatus' in params ? params.JobStatus : null;

        if (params.BeautifyVideoOutput) {
            let obj = new BeautifyVideoOutput();
            obj.deserialize(params.BeautifyVideoOutput)
            this.BeautifyVideoOutput = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StyleImage返回参数结构体
 * @class
 */
class StyleImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultUrl = null;

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
        this.ResultImage = 'ResultImage' in params ? params.ResultImage : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateModel请求参数结构体
 * @class
 */
class CreateModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片base64数据，用于试唇色，要求必须是LUT 格式的cube文件转换成512*512的PNG图片。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。了解 [cube文件转png图片小工具](http://yyb.gtimg.com/aiplat/static/qcloud-cube-to-png.html)。
         * @type {string || null}
         */
        this.LUTFile = null;

        /**
         * 文件描述信息，可用于备注。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LUTFile = 'LUTFile' in params ? params.LUTFile : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 人脸框信息
 * @class
 */
class FaceRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸框左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸框左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸框宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人脸框高度。
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
 * BeautifyPic请求参数结构体
 * @class
 */
class BeautifyPicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 美白程度，取值范围[0,100]。0不美白，100代表最高程度。默认值30。
         * @type {number || null}
         */
        this.Whitening = null;

        /**
         * 磨皮程度，取值范围[0,100]。0不磨皮，100代表最高程度。默认值10。
         * @type {number || null}
         */
        this.Smoothing = null;

        /**
         * 瘦脸程度，取值范围[0,100]。0不瘦脸，100代表最高程度。默认值70。
         * @type {number || null}
         */
        this.FaceLifting = null;

        /**
         * 大眼程度，取值范围[0,100]。0不大眼，100代表最高程度。默认值70。
         * @type {number || null}
         */
        this.EyeEnlarging = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Whitening = 'Whitening' in params ? params.Whitening : null;
        this.Smoothing = 'Smoothing' in params ? params.Smoothing : null;
        this.FaceLifting = 'FaceLifting' in params ? params.FaceLifting : null;
        this.EyeEnlarging = 'EyeEnlarging' in params ? params.EyeEnlarging : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * QueryBeautifyVideoJob请求参数结构体
 * @class
 */
class QueryBeautifyVideoJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频美颜Job id
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

module.exports = {
    DeleteModelRequest: DeleteModelRequest,
    BeautifyVideoRequest: BeautifyVideoRequest,
    CancelBeautifyVideoJobResponse: CancelBeautifyVideoJobResponse,
    RGBAInfo: RGBAInfo,
    BeautifyVideoOutput: BeautifyVideoOutput,
    StyleImageProResponse: StyleImageProResponse,
    LipColorInfo: LipColorInfo,
    StyleImageRequest: StyleImageRequest,
    CreateModelResponse: CreateModelResponse,
    GetModelListResponse: GetModelListResponse,
    BeautifyPicResponse: BeautifyPicResponse,
    GetModelListRequest: GetModelListRequest,
    BeautifyVideoResponse: BeautifyVideoResponse,
    ModelInfo: ModelInfo,
    TryLipstickPicResponse: TryLipstickPicResponse,
    DeleteModelResponse: DeleteModelResponse,
    CancelBeautifyVideoJobRequest: CancelBeautifyVideoJobRequest,
    BeautyParam: BeautyParam,
    TryLipstickPicRequest: TryLipstickPicRequest,
    StyleImageProRequest: StyleImageProRequest,
    QueryBeautifyVideoJobResponse: QueryBeautifyVideoJobResponse,
    StyleImageResponse: StyleImageResponse,
    CreateModelRequest: CreateModelRequest,
    FaceRect: FaceRect,
    BeautifyPicRequest: BeautifyPicRequest,
    QueryBeautifyVideoJobRequest: QueryBeautifyVideoJobRequest,

}
