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
 * QueryFaceMorphJob返回参数结构体
 * @class
 */
class QueryFaceMorphJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前任务状态：排队中、处理中、处理失败或者处理完成
         * @type {string || null}
         */
        this.JobStatus = null;

        /**
         * 人像渐变输出的结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FaceMorphOutput || null}
         */
        this.FaceMorphOutput = null;

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

        if (params.FaceMorphOutput) {
            let obj = new FaceMorphOutput();
            obj.deserialize(params.FaceMorphOutput)
            this.FaceMorphOutput = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelFaceMorphJob返回参数结构体
 * @class
 */
class CancelFaceMorphJobResponse extends  AbstractModel {
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
 * 人脸变年龄信息
 * @class
 */
class AgeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变化到的人脸年龄 [10,80]。
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Age = 'Age' in params ? params.Age : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

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
         * 人脸框左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸框左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

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
        this.Y = 'Y' in params ? params.Y : null;
        this.X = 'X' in params ? params.X : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 人脸转换性别信息
 * @class
 */
class GenderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选择转换方向，0：男变女，1：女变男。
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
         * @type {FaceRect || null}
         */
        this.FaceRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = 'Gender' in params ? params.Gender : null;

        if (params.FaceRect) {
            let obj = new FaceRect();
            obj.deserialize(params.FaceRect)
            this.FaceRect = obj;
        }

    }
}

/**
 * SwapGenderPic请求参数结构体
 * @class
 */
class SwapGenderPicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸转化性别信息。 
您可以输入最多3个 GenderInfo 来实现给一张图中的最多3张人脸转换性别。
         * @type {Array.<GenderInfo> || null}
         */
        this.GenderInfos = null;

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

        if (params.GenderInfos) {
            this.GenderInfos = new Array();
            for (let z in params.GenderInfos) {
                let obj = new GenderInfo();
                obj.deserialize(params.GenderInfos[z]);
                this.GenderInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * 渐变参数
 * @class
 */
class GradientInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片的展示时长，即单张图片静止不变的时间。GIF默认每张图片0.7s，视频默认每张图片0.5s。最大取值1s。
         * @type {number || null}
         */
        this.Tempo = null;

        /**
         * 人像渐变的最长时间，即单张图片使用渐变特效的时间。 GIF默认值为0.5s，视频默值认为1s。最大取值1s。
         * @type {number || null}
         */
        this.MorphTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tempo = 'Tempo' in params ? params.Tempo : null;
        this.MorphTime = 'MorphTime' in params ? params.MorphTime : null;

    }
}

/**
 * SwapGenderPic返回参数结构体
 * @class
 */
class SwapGenderPicResponse extends  AbstractModel {
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
 * 人像渐变返回结果
 * @class
 */
class FaceMorphOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人像渐变输出的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MorphUrl = null;

        /**
         * 人像渐变输出的结果MD5，用于校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MorphMd5 = null;

        /**
         * 人像渐变输出的结果封面图base64字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CoverImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MorphUrl = 'MorphUrl' in params ? params.MorphUrl : null;
        this.MorphMd5 = 'MorphMd5' in params ? params.MorphMd5 : null;
        this.CoverImage = 'CoverImage' in params ? params.CoverImage : null;

    }
}

/**
 * MorphFace请求参数结构体
 * @class
 */
class MorphFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 
人员人脸总数量至少2张，不可超过5张。 
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 
Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 
人员人脸总数量不可超过5张。 
若图片中包含多张人脸，只选取其中人脸面积最大的人脸。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 人脸渐变参数。可调整每张图片的展示时长、人像渐变的最长时间
         * @type {Array.<GradientInfo> || null}
         */
        this.GradientInfos = null;

        /**
         * 视频帧率，取值[1,25]。默认10
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 视频类型，取值0。目前仅支持MP4格式，默认为MP4格式
         * @type {number || null}
         */
        this.OutputType = null;

        /**
         * 视频宽度，取值[128,1280]。默认值720
         * @type {number || null}
         */
        this.OutputWidth = null;

        /**
         * 视频高度，取值[128,1280]。默认值1280
         * @type {number || null}
         */
        this.OutputHeight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Images = 'Images' in params ? params.Images : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

        if (params.GradientInfos) {
            this.GradientInfos = new Array();
            for (let z in params.GradientInfos) {
                let obj = new GradientInfo();
                obj.deserialize(params.GradientInfos[z]);
                this.GradientInfos.push(obj);
            }
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.OutputType = 'OutputType' in params ? params.OutputType : null;
        this.OutputWidth = 'OutputWidth' in params ? params.OutputWidth : null;
        this.OutputHeight = 'OutputHeight' in params ? params.OutputHeight : null;

    }
}

/**
 * ChangeAgePic返回参数结构体
 * @class
 */
class ChangeAgePicResponse extends  AbstractModel {
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
 * ChangeAgePic请求参数结构体
 * @class
 */
class ChangeAgePicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸变老变年轻信息。 
您可以输入最多3个 AgeInfo 来实现给一张图中的最多3张人脸变老变年轻。
         * @type {Array.<AgeInfo> || null}
         */
        this.AgeInfos = null;

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

        if (params.AgeInfos) {
            this.AgeInfos = new Array();
            for (let z in params.AgeInfos) {
                let obj = new AgeInfo();
                obj.deserialize(params.AgeInfos[z]);
                this.AgeInfos.push(obj);
            }
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;

    }
}

/**
 * CancelFaceMorphJob请求参数结构体
 * @class
 */
class CancelFaceMorphJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人像渐变任务Job id
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
 * FaceCartoonPic请求参数结构体
 * @class
 */
class FaceCartoonPicRequest extends  AbstractModel {
    constructor(){
        super();

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
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
         * @type {string || null}
         */
        this.RspImgType = null;

        /**
         * 关闭全图动漫化，传入true（不分大小写）即关闭全图动漫化。
         * @type {string || null}
         */
        this.DisableGlobalEffect = null;

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
        this.RspImgType = 'RspImgType' in params ? params.RspImgType : null;
        this.DisableGlobalEffect = 'DisableGlobalEffect' in params ? params.DisableGlobalEffect : null;

    }
}

/**
 * QueryFaceMorphJob请求参数结构体
 * @class
 */
class QueryFaceMorphJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人像渐变任务Job id
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
 * FaceCartoonPic返回参数结构体
 * @class
 */
class FaceCartoonPicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果图片Base64信息。
         * @type {string || null}
         */
        this.ResultImage = null;

        /**
         * RspImgType 为 url 时，返回处理后的图片 url 数据。(默认为base64)
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
 * MorphFace返回参数结构体
 * @class
 */
class MorphFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人像渐变任务的Job id
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

module.exports = {
    QueryFaceMorphJobResponse: QueryFaceMorphJobResponse,
    CancelFaceMorphJobResponse: CancelFaceMorphJobResponse,
    AgeInfo: AgeInfo,
    FaceRect: FaceRect,
    GenderInfo: GenderInfo,
    SwapGenderPicRequest: SwapGenderPicRequest,
    GradientInfo: GradientInfo,
    SwapGenderPicResponse: SwapGenderPicResponse,
    FaceMorphOutput: FaceMorphOutput,
    MorphFaceRequest: MorphFaceRequest,
    ChangeAgePicResponse: ChangeAgePicResponse,
    ChangeAgePicRequest: ChangeAgePicRequest,
    CancelFaceMorphJobRequest: CancelFaceMorphJobRequest,
    FaceCartoonPicRequest: FaceCartoonPicRequest,
    QueryFaceMorphJobRequest: QueryFaceMorphJobRequest,
    FaceCartoonPicResponse: FaceCartoonPicResponse,
    MorphFaceResponse: MorphFaceResponse,

}
