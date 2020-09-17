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
 * 视频标签识别结果信息
 * @class
 */
class TagTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 视频标签识别结果集。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagTaskResultItem> || null}
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new TagTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 视频标签识别任务参数信息
 * @class
 */
class TagEditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启视频标签识别。0为关闭，1为开启。其他非0非1值默认为0。
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         * @type {string || null}
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 细节增强参数
 * @class
 */
class Sharp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 细节增强方式,取值：normal。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 细节增强强度，可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
         * @type {number || null}
         */
        this.Ratio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * 视频标签识别结果项
 * @class
 */
class TagTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 置信度，取值范围是 0 到 100。
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
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 画质增强参数信息
 * @class
 */
class VideoEnhance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 去编码毛刺、伪影参数。
         * @type {ArtifactReduction || null}
         */
        this.ArtifactReduction = null;

        /**
         * 去噪声参数。
         * @type {Denoising || null}
         */
        this.Denoising = null;

        /**
         * 颜色增强参数。
         * @type {ColorEnhance || null}
         */
        this.ColorEnhance = null;

        /**
         * 细节增强参数。
         * @type {Sharp || null}
         */
        this.Sharp = null;

        /**
         * 超分参数，可选项：2，目前仅支持2倍超分。
         * @type {number || null}
         */
        this.WdSuperResolution = null;

        /**
         * 人脸保护信息。
         * @type {FaceProtect || null}
         */
        this.FaceProtect = null;

        /**
         * 插帧，取值范围：[0, 60]，单位：Hz。
注意：当取值为 0，表示帧率和原始视频保持一致。
         * @type {number || null}
         */
        this.WdFps = null;

        /**
         * 去划痕参数
         * @type {ScratchRepair || null}
         */
        this.ScratchRepair = null;

        /**
         * 低光照增强参数
         * @type {LowLightEnhance || null}
         */
        this.LowLightEnhance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ArtifactReduction) {
            let obj = new ArtifactReduction();
            obj.deserialize(params.ArtifactReduction)
            this.ArtifactReduction = obj;
        }

        if (params.Denoising) {
            let obj = new Denoising();
            obj.deserialize(params.Denoising)
            this.Denoising = obj;
        }

        if (params.ColorEnhance) {
            let obj = new ColorEnhance();
            obj.deserialize(params.ColorEnhance)
            this.ColorEnhance = obj;
        }

        if (params.Sharp) {
            let obj = new Sharp();
            obj.deserialize(params.Sharp)
            this.Sharp = obj;
        }
        this.WdSuperResolution = 'WdSuperResolution' in params ? params.WdSuperResolution : null;

        if (params.FaceProtect) {
            let obj = new FaceProtect();
            obj.deserialize(params.FaceProtect)
            this.FaceProtect = obj;
        }
        this.WdFps = 'WdFps' in params ? params.WdFps : null;

        if (params.ScratchRepair) {
            let obj = new ScratchRepair();
            obj.deserialize(params.ScratchRepair)
            this.ScratchRepair = obj;
        }

        if (params.LowLightEnhance) {
            let obj = new LowLightEnhance();
            obj.deserialize(params.LowLightEnhance)
            this.LowLightEnhance = obj;
        }

    }
}

/**
 * 任务视频cos信息
 * @class
 */
class CosInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos 区域值。例如：ap-beijing。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * cos 存储桶，格式为BuketName-AppId。例如：test-123456。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * cos 路径。 
对于写表示目录，例如：/test； 
对于读表示文件路径，例如：/test/test.mp4。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * cos 授权信息，不填默认为公有权限。
         * @type {CosAuthMode || null}
         */
        this.CosAuthMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.CosAuthMode) {
            let obj = new CosAuthMode();
            obj.deserialize(params.CosAuthMode)
            this.CosAuthMode = obj;
        }

    }
}

/**
 * 任务存储信息
 * @class
 */
class SaveInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储类型，可选值： 
1：CosInfo。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Cos形式存储信息，当Type等于1时必选。
         * @type {CosInfo || null}
         */
        this.CosInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosInfo) {
            let obj = new CosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }

    }
}

/**
 * 去划痕参数
 * @class
 */
class ScratchRepair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 去划痕方式，取值：normal。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 去划痕强度， 可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
         * @type {number || null}
         */
        this.Ratio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * 去编码毛刺、伪影参数
 * @class
 */
class ArtifactReduction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 去毛刺方式：weak,,strong
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 去毛刺算法，可选项：
edaf,
wdaf，
默认edaf。
注意：edaf：速度快，去毛刺效果强，保护边缘效果较弱；
wdaf：速度慢，保护边缘效果好
         * @type {string || null}
         */
        this.Algorithm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;

    }
}

/**
 * 任务视频cos授权信息
 * @class
 */
class CosAuthMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权类型，可选值： 
0：bucket授权，需要将对应bucket授权给本服务帐号（3020447271），否则会读写cos失败； 
1：key托管，把cos的账号id和key托管于本服务，本服务会提供一个托管id； 
3：临时key授权。
注意：目前智能编辑还不支持临时key授权；画质重生目前只支持bucket授权
         * @type {number || null}
         */
        this.Type = null;

        /**
         * cos账号托管id，Type等于1时必选。
         * @type {string || null}
         */
        this.HostedId = null;

        /**
         * cos身份识别id，Type等于3时必选。
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * cos身份秘钥，Type等于3时必选。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 临时授权 token，Type等于3时必选。
         * @type {string || null}
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.HostedId = 'HostedId' in params ? params.HostedId : null;
        this.SecretId = 'SecretId' in params ? params.SecretId : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * 媒体质检任务参数信息
 * @class
 */
class QualityControlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对流进行截图的间隔ms，默认1000ms
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 是否保存截图
         * @type {boolean || null}
         */
        this.VideoShot = null;

        /**
         * 是否检测抖动重影
         * @type {boolean || null}
         */
        this.Jitter = null;

        /**
         * 是否检测模糊
         * @type {boolean || null}
         */
        this.Blur = null;

        /**
         * 是否检测低光照、过曝
         * @type {boolean || null}
         */
        this.AbnormalLighting = null;

        /**
         * 是否检测花屏
         * @type {boolean || null}
         */
        this.CrashScreen = null;

        /**
         * 是否检测黑边、白边、黑屏、白屏、绿屏
         * @type {boolean || null}
         */
        this.BlackWhiteEdge = null;

        /**
         * 是否检测噪点
         * @type {boolean || null}
         */
        this.Noise = null;

        /**
         * 是否检测马赛克
         * @type {boolean || null}
         */
        this.Mosaic = null;

        /**
         * 是否检测二维码，包括小程序码、条形码
         * @type {boolean || null}
         */
        this.QRCode = null;

        /**
         * 是否开启画面质量评价
         * @type {boolean || null}
         */
        this.QualityEvaluation = null;

        /**
         * 画面质量评价过滤阈值，结果只返回低于阈值的时间段，默认60
         * @type {number || null}
         */
        this.QualityEvalScore = null;

        /**
         * 是否检测视频音频，包含静音、低音、爆音
         * @type {boolean || null}
         */
        this.Voice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.VideoShot = 'VideoShot' in params ? params.VideoShot : null;
        this.Jitter = 'Jitter' in params ? params.Jitter : null;
        this.Blur = 'Blur' in params ? params.Blur : null;
        this.AbnormalLighting = 'AbnormalLighting' in params ? params.AbnormalLighting : null;
        this.CrashScreen = 'CrashScreen' in params ? params.CrashScreen : null;
        this.BlackWhiteEdge = 'BlackWhiteEdge' in params ? params.BlackWhiteEdge : null;
        this.Noise = 'Noise' in params ? params.Noise : null;
        this.Mosaic = 'Mosaic' in params ? params.Mosaic : null;
        this.QRCode = 'QRCode' in params ? params.QRCode : null;
        this.QualityEvaluation = 'QualityEvaluation' in params ? params.QualityEvaluation : null;
        this.QualityEvalScore = 'QualityEvalScore' in params ? params.QualityEvalScore : null;
        this.Voice = 'Voice' in params ? params.Voice : null;

    }
}

/**
 * 片头片尾识别结果项
 * @class
 */
class OpeningEndingTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频片头的结束时间点，单位：秒。
         * @type {number || null}
         */
        this.OpeningTimeOffset = null;

        /**
         * 片头识别置信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.OpeningConfidence = null;

        /**
         * 视频片尾的开始时间点，单位：秒。
         * @type {number || null}
         */
        this.EndingTimeOffset = null;

        /**
         * 片尾识别置信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.EndingConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpeningTimeOffset = 'OpeningTimeOffset' in params ? params.OpeningTimeOffset : null;
        this.OpeningConfidence = 'OpeningConfidence' in params ? params.OpeningConfidence : null;
        this.EndingTimeOffset = 'EndingTimeOffset' in params ? params.EndingTimeOffset : null;
        this.EndingConfidence = 'EndingConfidence' in params ? params.EndingConfidence : null;

    }
}

/**
 * 视频源信息
 * @class
 */
class DownInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载类型，可选值： 
0：UrlInfo； 
1：CosInfo。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Url形式下载信息，当Type等于0时必选。
         * @type {UrlInfo || null}
         */
        this.UrlInfo = null;

        /**
         * Cos形式下载信息，当Type等于1时必选。
         * @type {CosInfo || null}
         */
        this.CosInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.UrlInfo) {
            let obj = new UrlInfo();
            obj.deserialize(params.UrlInfo)
            this.UrlInfo = obj;
        }

        if (params.CosInfo) {
            let obj = new CosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }

    }
}

/**
 * 视频分类识别任务参数信息
 * @class
 */
class ClassificationEditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启视频分类识别。0为关闭，1为开启。其他非0非1值默认为0。
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         * @type {string || null}
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 低光照增强参数
 * @class
 */
class LowLightEnhance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 低光照增强类型，可选项：normal。
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeEditingTaskResult请求参数结构体
 * @class
 */
class DescribeEditingTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 智能封面结果项
 * @class
 */
class CoverTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能封面地址。
         * @type {string || null}
         */
        this.CoverUrl = null;

        /**
         * 置信度，取值范围是 0 到 100。
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
        this.CoverUrl = 'CoverUrl' in params ? params.CoverUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 输出文件信息
 * @class
 */
class TargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 目标文件切片信息
         * @type {SegmentInfo || null}
         */
        this.SegmentInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;

        if (params.SegmentInfo) {
            let obj = new SegmentInfo();
            obj.deserialize(params.SegmentInfo)
            this.SegmentInfo = obj;
        }

    }
}

/**
 * 智能拆条任务参数信息
 * @class
 */
class StripEditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启智能拆条。0为关闭，1为开启。其他非0非1值默认为0。
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         * @type {string || null}
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 智能编辑任务参数信息
 * @class
 */
class EditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频标签识别任务参数，不填则不开启。
         * @type {TagEditingInfo || null}
         */
        this.TagEditingInfo = null;

        /**
         * 视频分类识别任务参数，不填则不开启。
         * @type {ClassificationEditingInfo || null}
         */
        this.ClassificationEditingInfo = null;

        /**
         * 智能拆条任务参数，不填则不开启。
         * @type {StripEditingInfo || null}
         */
        this.StripEditingInfo = null;

        /**
         * 智能集锦任务参数，不填则不开启。
         * @type {HighlightsEditingInfo || null}
         */
        this.HighlightsEditingInfo = null;

        /**
         * 智能封面任务参数，不填则不开启。
         * @type {CoverEditingInfo || null}
         */
        this.CoverEditingInfo = null;

        /**
         * 片头片尾识别任务参数，不填则不开启。
         * @type {OpeningEndingEditingInfo || null}
         */
        this.OpeningEndingEditingInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagEditingInfo) {
            let obj = new TagEditingInfo();
            obj.deserialize(params.TagEditingInfo)
            this.TagEditingInfo = obj;
        }

        if (params.ClassificationEditingInfo) {
            let obj = new ClassificationEditingInfo();
            obj.deserialize(params.ClassificationEditingInfo)
            this.ClassificationEditingInfo = obj;
        }

        if (params.StripEditingInfo) {
            let obj = new StripEditingInfo();
            obj.deserialize(params.StripEditingInfo)
            this.StripEditingInfo = obj;
        }

        if (params.HighlightsEditingInfo) {
            let obj = new HighlightsEditingInfo();
            obj.deserialize(params.HighlightsEditingInfo)
            this.HighlightsEditingInfo = obj;
        }

        if (params.CoverEditingInfo) {
            let obj = new CoverEditingInfo();
            obj.deserialize(params.CoverEditingInfo)
            this.CoverEditingInfo = obj;
        }

        if (params.OpeningEndingEditingInfo) {
            let obj = new OpeningEndingEditingInfo();
            obj.deserialize(params.OpeningEndingEditingInfo)
            this.OpeningEndingEditingInfo = obj;
        }

    }
}

/**
 * 画质重生任务结果
 * @class
 */
class MediaQualityRestorationTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画质重生任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 画质重生处理后文件的详细信息。
         * @type {Array.<SubTaskResultItem> || null}
         */
        this.SubTaskResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.SubTaskResult) {
            this.SubTaskResult = new Array();
            for (let z in params.SubTaskResult) {
                let obj = new SubTaskResultItem();
                obj.deserialize(params.SubTaskResult[z]);
                this.SubTaskResult.push(obj);
            }
        }

    }
}

/**
 * CreateMediaQualityRestorationTask请求参数结构体
 * @class
 */
class CreateMediaQualityRestorationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源文件地址。
         * @type {DownInfo || null}
         */
        this.DownInfo = null;

        /**
         * 画质重生任务参数信息。
         * @type {Array.<SubTaskTranscodeInfo> || null}
         */
        this.TransInfo = null;

        /**
         * 任务结束后文件存储信息。
         * @type {SaveInfo || null}
         */
        this.SaveInfo = null;

        /**
         * 任务结果回调地址信息。
         * @type {CallbackInfo || null}
         */
        this.CallbackInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DownInfo) {
            let obj = new DownInfo();
            obj.deserialize(params.DownInfo)
            this.DownInfo = obj;
        }

        if (params.TransInfo) {
            this.TransInfo = new Array();
            for (let z in params.TransInfo) {
                let obj = new SubTaskTranscodeInfo();
                obj.deserialize(params.TransInfo[z]);
                this.TransInfo.push(obj);
            }
        }

        if (params.SaveInfo) {
            let obj = new SaveInfo();
            obj.deserialize(params.SaveInfo)
            this.SaveInfo = obj;
        }

        if (params.CallbackInfo) {
            let obj = new CallbackInfo();
            obj.deserialize(params.CallbackInfo)
            this.CallbackInfo = obj;
        }

    }
}

/**
 * CreateEditingTask请求参数结构体
 * @class
 */
class CreateEditingTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能编辑任务参数。
         * @type {EditingInfo || null}
         */
        this.EditingInfo = null;

        /**
         * 视频源信息。
         * @type {DownInfo || null}
         */
        this.DownInfo = null;

        /**
         * 结果存储信息。对于包含智能拆条、智能集锦或者智能封面的任务必选。
         * @type {SaveInfo || null}
         */
        this.SaveInfo = null;

        /**
         * 任务结果回调地址信息。
         * @type {CallbackInfo || null}
         */
        this.CallbackInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EditingInfo) {
            let obj = new EditingInfo();
            obj.deserialize(params.EditingInfo)
            this.EditingInfo = obj;
        }

        if (params.DownInfo) {
            let obj = new DownInfo();
            obj.deserialize(params.DownInfo)
            this.DownInfo = obj;
        }

        if (params.SaveInfo) {
            let obj = new SaveInfo();
            obj.deserialize(params.SaveInfo)
            this.SaveInfo = obj;
        }

        if (params.CallbackInfo) {
            let obj = new CallbackInfo();
            obj.deserialize(params.CallbackInfo)
            this.CallbackInfo = obj;
        }

    }
}

/**
 * 任务结束后生成的文件音频信息
 * @class
 */
class AudioInfoResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频流的流id
         * @type {number || null}
         */
        this.Stream = null;

        /**
         * 音频采样率 。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Sample = null;

        /**
         * 音频声道数。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 编码格式，如aac, mp3等。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频时长，单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Stream = 'Stream' in params ? params.Stream : null;
        this.Sample = 'Sample' in params ? params.Sample : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * 去噪参数
 * @class
 */
class Denoising extends  AbstractModel {
    constructor(){
        super();

        /**
         * 去噪方式，可选项：
templ：时域降噪；
spatial：空域降噪,
fast-spatial：快速空域降噪。
注意：可选择组合方式：
1.type:"templ,spatial" ;
2.type:"templ,fast-spatial"。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时域去噪强度，可选值：0.0-1.0 。小于0.0的默认为0.0，大于1.0的默认为1.0。
         * @type {number || null}
         */
        this.TemplStrength = null;

        /**
         * 空域去噪强度，可选值：0.0-1.0 。小于0.0的默认为0.0，大于1.0的默认为1.0。
         * @type {number || null}
         */
        this.SpatialStrength = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TemplStrength = 'TemplStrength' in params ? params.TemplStrength : null;
        this.SpatialStrength = 'SpatialStrength' in params ? params.SpatialStrength : null;

    }
}

/**
 * 人脸保护参数
 * @class
 */
class FaceProtect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸区域增强强度，可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
         * @type {number || null}
         */
        this.FaceUsmRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceUsmRatio = 'FaceUsmRatio' in params ? params.FaceUsmRatio : null;

    }
}

/**
 * 任务结束后生成的文件视频信息
 * @class
 */
class VideoInfoResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流的流id。
         * @type {number || null}
         */
        this.Stream = null;

        /**
         * 视频宽度。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频高度。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 视频帧率，用分数格式表示，如：25/1, 99/32等等。
注意：此字段可能返回 null，表示取不到有效值 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Fps = null;

        /**
         * 编码格式，如h264,h265等等 。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 播放旋转角度，可选值0-360。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * 视频时长，单位：ms 。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 颜色空间，如yuv420p，yuv444p等等。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PixFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Stream = 'Stream' in params ? params.Stream : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.PixFormat = 'PixFormat' in params ? params.PixFormat : null;

    }
}

/**
 * 智能集锦结果信息
 * @class
 */
class HighlightsTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 智能集锦结果集。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HighlightsTaskResultItem> || null}
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new HighlightsTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 画质重生子任务视频剪辑参数
 * @class
 */
class EditInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 剪辑开始时间，单位：ms。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 剪辑结束时间，单位：ms
         * @type {number || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 流封装信息
 * @class
 */
class MuxInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除流，可选项：video,audio。
         * @type {string || null}
         */
        this.DeleteStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteStream = 'DeleteStream' in params ? params.DeleteStream : null;

    }
}

/**
 * DescribeMediaQualityRestorationTaskRusult请求参数结构体
 * @class
 */
class DescribeMediaQualityRestorationTaskRusultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画质重生任务ID
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 视频转码信息
 * @class
 */
class VideoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频帧率，取值范围：[0, 60]，单位：Hz。
注意：当取值为 0，表示帧率和原始视频保持一致。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 宽度，取值范围：0 和 [128, 4096]
注意：
当 Width、Height 均为 0，则分辨率同源；
当 Width 为 0，Height 非 0，则 Width 按比例缩放；
当 Width 非 0，Height 为 0，则 Height 按比例缩放；
当 Width、Height 均非 0，则分辨率按用户指定。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高度，取值范围：0 和 [128, 4096]
注意：
当 Width、Height 均为 0，则分辨率同源；
当 Width 为 0，Height 非 0，则 Width 按比例缩放；
当 Width 非 0，Height 为 0，则 Height 按比例缩放；
当 Width、Height 均非 0，则分辨率按用户指定。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 长边分辨率，取值范围：0 和 [128, 4096]
注意：
当 LongSide、ShortSide 均为 0，则分辨率按照Width，Height；
当 LongSide 为 0，ShortSide 非 0，则 LongSide 按比例缩放；
当 LongSide非 0，ShortSide为 0，则 ShortSide 按比例缩放；
当 LongSide、ShortSide 均非 0，则分辨率按用户指定。
长短边优先级高于Weight,Height,设置长短边则忽略宽高。
         * @type {number || null}
         */
        this.LongSide = null;

        /**
         * 短边分辨率，取值范围：0 和 [128, 4096]
注意：
当 LongSide、ShortSide 均为 0，则分辨率按照Width，Height；
当 LongSide 为 0，ShortSide 非 0，则 LongSide 按比例缩放；
当 LongSide非 0，ShortSide为 0，则 ShortSide 按比例缩放；
当 LongSide、ShortSide 均非 0，则分辨率按用户指定。
长短边优先级高于Weight,Height,设置长短边则忽略宽高。
         * @type {number || null}
         */
        this.ShortSide = null;

        /**
         * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 固定I帧之间，视频帧数量，取值范围： [25, 2500]，如果不填，使用编码默认最优序列。
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * 编码器支持选项，可选值：
h264,
h265,
av1
。
不填默认h264。
         * @type {string || null}
         */
        this.VideoCodec = null;

        /**
         * 图片水印。
         * @type {Array.<PicMarkInfoItem> || null}
         */
        this.PicMarkInfo = null;

        /**
         * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。
         * @type {DarInfo || null}
         */
        this.DarInfo = null;

        /**
         * 支持hdr,可选项：
hdr10,
hlg。
此时，VideoCodec会强制设置为h265, 编码位深为10
         * @type {string || null}
         */
        this.Hdr = null;

        /**
         * 画质增强参数信息。
         * @type {VideoEnhance || null}
         */
        this.VideoEnhance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.LongSide = 'LongSide' in params ? params.LongSide : null;
        this.ShortSide = 'ShortSide' in params ? params.ShortSide : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.VideoCodec = 'VideoCodec' in params ? params.VideoCodec : null;

        if (params.PicMarkInfo) {
            this.PicMarkInfo = new Array();
            for (let z in params.PicMarkInfo) {
                let obj = new PicMarkInfoItem();
                obj.deserialize(params.PicMarkInfo[z]);
                this.PicMarkInfo.push(obj);
            }
        }

        if (params.DarInfo) {
            let obj = new DarInfo();
            obj.deserialize(params.DarInfo)
            this.DarInfo = obj;
        }
        this.Hdr = 'Hdr' in params ? params.Hdr : null;

        if (params.VideoEnhance) {
            let obj = new VideoEnhance();
            obj.deserialize(params.VideoEnhance)
            this.VideoEnhance = obj;
        }

    }
}

/**
 * 片头片尾识别结果信息
 * @class
 */
class OpeningEndingTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 片头片尾识别结果项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OpeningEndingTaskResultItem || null}
         */
        this.Item = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.Item) {
            let obj = new OpeningEndingTaskResultItem();
            obj.deserialize(params.Item)
            this.Item = obj;
        }

    }
}

/**
 * DescribeQualityControlTaskResult请求参数结构体
 * @class
 */
class DescribeQualityControlTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质检任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeEditingTaskResult返回参数结构体
 * @class
 */
class DescribeEditingTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务结果信息。
         * @type {EditingTaskResult || null}
         */
        this.TaskResult = null;

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

        if (params.TaskResult) {
            let obj = new EditingTaskResult();
            obj.deserialize(params.TaskResult)
            this.TaskResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEditingTask返回参数结构体
 * @class
 */
class CreateEditingTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务 ID，可以通过该 ID 查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 媒体质检结果信息
 * @class
 */
class QualityControlInfoTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质检任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 质检任务状态。
1：执行中；2：成功；3：失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 表示处理进度百分比
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 处理时长(s)
         * @type {number || null}
         */
        this.UsedTime = null;

        /**
         * 计费时长(s)
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 为true时表示视频无音频轨
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.NoAudio = null;

        /**
         * 为true时表示视频无视频轨
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.NoVideo = null;

        /**
         * 视频无参考质量打分，百分制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QualityEvaluationScore = null;

        /**
         * 视频画面无参考评分低于阈值的时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.QualityEvaluationResults = null;

        /**
         * 视频画面抖动时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.JitterResults = null;

        /**
         * 视频画面模糊时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.BlurResults = null;

        /**
         * 视频画面低光、过曝时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.AbnormalLightingResults = null;

        /**
         * 视频画面花屏时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.CrashScreenResults = null;

        /**
         * 视频画面黑边、白边、黑屏、白屏、纯色屏时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.BlackWhiteEdgeResults = null;

        /**
         * 视频画面有噪点时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.NoiseResults = null;

        /**
         * 视频画面有马赛克时间段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.MosaicResults = null;

        /**
         * 视频画面有二维码的时间段，包括小程序码、条形码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.QRCodeResults = null;

        /**
         * 视频音频异常时间段，包括静音、低音、爆音
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityControlResultItems> || null}
         */
        this.VoiceResults = null;

        /**
         * 任务错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.UsedTime = 'UsedTime' in params ? params.UsedTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.NoAudio = 'NoAudio' in params ? params.NoAudio : null;
        this.NoVideo = 'NoVideo' in params ? params.NoVideo : null;
        this.QualityEvaluationScore = 'QualityEvaluationScore' in params ? params.QualityEvaluationScore : null;

        if (params.QualityEvaluationResults) {
            this.QualityEvaluationResults = new Array();
            for (let z in params.QualityEvaluationResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.QualityEvaluationResults[z]);
                this.QualityEvaluationResults.push(obj);
            }
        }

        if (params.JitterResults) {
            this.JitterResults = new Array();
            for (let z in params.JitterResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.JitterResults[z]);
                this.JitterResults.push(obj);
            }
        }

        if (params.BlurResults) {
            this.BlurResults = new Array();
            for (let z in params.BlurResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.BlurResults[z]);
                this.BlurResults.push(obj);
            }
        }

        if (params.AbnormalLightingResults) {
            this.AbnormalLightingResults = new Array();
            for (let z in params.AbnormalLightingResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.AbnormalLightingResults[z]);
                this.AbnormalLightingResults.push(obj);
            }
        }

        if (params.CrashScreenResults) {
            this.CrashScreenResults = new Array();
            for (let z in params.CrashScreenResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.CrashScreenResults[z]);
                this.CrashScreenResults.push(obj);
            }
        }

        if (params.BlackWhiteEdgeResults) {
            this.BlackWhiteEdgeResults = new Array();
            for (let z in params.BlackWhiteEdgeResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.BlackWhiteEdgeResults[z]);
                this.BlackWhiteEdgeResults.push(obj);
            }
        }

        if (params.NoiseResults) {
            this.NoiseResults = new Array();
            for (let z in params.NoiseResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.NoiseResults[z]);
                this.NoiseResults.push(obj);
            }
        }

        if (params.MosaicResults) {
            this.MosaicResults = new Array();
            for (let z in params.MosaicResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.MosaicResults[z]);
                this.MosaicResults.push(obj);
            }
        }

        if (params.QRCodeResults) {
            this.QRCodeResults = new Array();
            for (let z in params.QRCodeResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.QRCodeResults[z]);
                this.QRCodeResults.push(obj);
            }
        }

        if (params.VoiceResults) {
            this.VoiceResults = new Array();
            for (let z in params.VoiceResults) {
                let obj = new QualityControlResultItems();
                obj.deserialize(params.VoiceResults[z]);
                this.VoiceResults.push(obj);
            }
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * StopMediaQualityRestorationTask返回参数结构体
 * @class
 */
class StopMediaQualityRestorationTaskResponse extends  AbstractModel {
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
 * 任务视频Url形式下载信息。
 * @class
 */
class UrlInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频 URL。音视频支持mp4、ts等格式；直播流支持flv、rtmp格式。
注意：目前智能编辑还不支持直播流场景。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 视频地址格式，可选值： 
0：音视频 ;
1：直播流。 
默认为0。其他非0非1值默认为0。画质重生任务只支持0。
         * @type {number || null}
         */
        this.Format = null;

        /**
         * 指定请求资源时，HTTP头部host的值。
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * StopMediaQualityRestorationTask请求参数结构体
 * @class
 */
class StopMediaQualityRestorationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的画质重生任务ID。
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeQualityControlTaskResult返回参数结构体
 * @class
 */
class DescribeQualityControlTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质检任务结果信息
         * @type {QualityControlInfoTaskResult || null}
         */
        this.TaskResult = null;

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

        if (params.TaskResult) {
            let obj = new QualityControlInfoTaskResult();
            obj.deserialize(params.TaskResult)
            this.TaskResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMediaQualityRestorationTaskRusult返回参数结构体
 * @class
 */
class DescribeMediaQualityRestorationTaskRusultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画质重生任务结果信息
         * @type {MediaQualityRestorationTaskResult || null}
         */
        this.TaskResult = null;

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

        if (params.TaskResult) {
            let obj = new MediaQualityRestorationTaskResult();
            obj.deserialize(params.TaskResult)
            this.TaskResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频分类识别结果项
 * @class
 */
class ClassificationTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类名称。
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * 置信度，取值范围是 0 到 100。
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
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * 视频Dar信息
 * @class
 */
class DarInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 填充模式，可选值：
1：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。
2：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“。
默认为2。
         * @type {number || null}
         */
        this.FillMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FillMode = 'FillMode' in params ? params.FillMode : null;

    }
}

/**
 * 音频参数信息
 * @class
 */
class AudioInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频码率，取值范围：0 和 [26, 256]，单位：kbps。
注意：当取值为 0，表示音频码率和原始音频保持一致。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 音频编码器，可选项：aac,mp3,ac3,flac,mp2。
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * 声道数，可选项：
1：单声道，
2：双声道，
6：立体声。
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 采样率，单位：Hz。可选项：32000，44100,48000
         * @type {number || null}
         */
        this.SampleRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;

    }
}

/**
 * CreateQualityControlTask返回参数结构体
 * @class
 */
class CreateQualityControlTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质检任务 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能识别任务结果信息
 * @class
 */
class EditingTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务 ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 编辑任务状态。 
1：执行中；2：已完成。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 视频标签识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TagTaskResult || null}
         */
        this.TagTaskResult = null;

        /**
         * 视频分类识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClassificationTaskResult || null}
         */
        this.ClassificationTaskResult = null;

        /**
         * 智能拆条结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StripTaskResult || null}
         */
        this.StripTaskResult = null;

        /**
         * 智能集锦结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HighlightsTaskResult || null}
         */
        this.HighlightsTaskResult = null;

        /**
         * 智能封面结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CoverTaskResult || null}
         */
        this.CoverTaskResult = null;

        /**
         * 片头片尾识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OpeningEndingTaskResult || null}
         */
        this.OpeningEndingTaskResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.TagTaskResult) {
            let obj = new TagTaskResult();
            obj.deserialize(params.TagTaskResult)
            this.TagTaskResult = obj;
        }

        if (params.ClassificationTaskResult) {
            let obj = new ClassificationTaskResult();
            obj.deserialize(params.ClassificationTaskResult)
            this.ClassificationTaskResult = obj;
        }

        if (params.StripTaskResult) {
            let obj = new StripTaskResult();
            obj.deserialize(params.StripTaskResult)
            this.StripTaskResult = obj;
        }

        if (params.HighlightsTaskResult) {
            let obj = new HighlightsTaskResult();
            obj.deserialize(params.HighlightsTaskResult)
            this.HighlightsTaskResult = obj;
        }

        if (params.CoverTaskResult) {
            let obj = new CoverTaskResult();
            obj.deserialize(params.CoverTaskResult)
            this.CoverTaskResult = obj;
        }

        if (params.OpeningEndingTaskResult) {
            let obj = new OpeningEndingTaskResult();
            obj.deserialize(params.OpeningEndingTaskResult)
            this.OpeningEndingTaskResult = obj;
        }

    }
}

/**
 * 画质重生子任务参数信息
 * @class
 */
class SubTaskTranscodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子任务名称。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 目标文件信息。
         * @type {TargetInfo || null}
         */
        this.TargetInfo = null;

        /**
         * 视频剪辑信息。注意：如果填写了EditInfo，则VideoInfo和AudioInfo必填
         * @type {EditInfo || null}
         */
        this.EditInfo = null;

        /**
         * 视频转码信息，不填保持和源文件一致。
         * @type {VideoInfo || null}
         */
        this.VideoInfo = null;

        /**
         * 音频转码信息，不填保持和源文件一致。
         * @type {AudioInfo || null}
         */
        this.AudioInfo = null;

        /**
         * 指定封装信息。
         * @type {MuxInfo || null}
         */
        this.MuxInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

        if (params.TargetInfo) {
            let obj = new TargetInfo();
            obj.deserialize(params.TargetInfo)
            this.TargetInfo = obj;
        }

        if (params.EditInfo) {
            let obj = new EditInfo();
            obj.deserialize(params.EditInfo)
            this.EditInfo = obj;
        }

        if (params.VideoInfo) {
            let obj = new VideoInfo();
            obj.deserialize(params.VideoInfo)
            this.VideoInfo = obj;
        }

        if (params.AudioInfo) {
            let obj = new AudioInfo();
            obj.deserialize(params.AudioInfo)
            this.AudioInfo = obj;
        }

        if (params.MuxInfo) {
            let obj = new MuxInfo();
            obj.deserialize(params.MuxInfo)
            this.MuxInfo = obj;
        }

    }
}

/**
 * 质检结果项数组
 * @class
 */
class QualityControlResultItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 质检结果项
         * @type {Array.<QualityControlItem> || null}
         */
        this.QualityControlItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.QualityControlItems) {
            this.QualityControlItems = new Array();
            for (let z in params.QualityControlItems) {
                let obj = new QualityControlItem();
                obj.deserialize(params.QualityControlItems[z]);
                this.QualityControlItems.push(obj);
            }
        }

    }
}

/**
 * 画质重生子任务结果
 * @class
 */
class SubTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子任务名称。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 子任务状态。
0：成功；
1：执行中；
其他值：失败。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 子任务状态描述。
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * 子任务进度。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProgressRate = null;

        /**
         * 画质重生处理后文件的下载地址。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 画质重生处理后文件的MD5。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 画质重生处理后文件的详细信息。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FileInfo || null}
         */
        this.FileInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.ProgressRate = 'ProgressRate' in params ? params.ProgressRate : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

        if (params.FileInfo) {
            let obj = new FileInfo();
            obj.deserialize(params.FileInfo)
            this.FileInfo = obj;
        }

    }
}

/**
 * 质检结果项
 * @class
 */
class QualityControlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置信度，取值范围是 0 到 100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 出现的起始时间戳，秒
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 出现的结束时间戳，秒
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * 区域坐标(px)，即左上角坐标、右下角坐标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AreaCoordsSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.AreaCoordsSet = 'AreaCoordsSet' in params ? params.AreaCoordsSet : null;

    }
}

/**
 * 智能集锦任务参数信息
 * @class
 */
class HighlightsEditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启智能集锦。0为关闭，1为开启。其他非0非1值默认为0。
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         * @type {string || null}
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 画质重生处理后文件的详细信息
 * @class
 */
class FileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务结束后生成的文件大小。
注意：此字段可能返回 null，表示取不到有效值 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 任务结束后生成的文件格式，例如：mp4,flv等等。
注意：此字段可能返回 null，表示取不到有效值 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 任务结束后生成的文件整体码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 任务结束后生成的文件时长，单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 任务结束后生成的文件视频信息。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VideoInfoResultItem> || null}
         */
        this.VideoInfoResult = null;

        /**
         * 任务结束后生成的文件音频信息。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AudioInfoResultItem> || null}
         */
        this.AudioInfoResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.VideoInfoResult) {
            this.VideoInfoResult = new Array();
            for (let z in params.VideoInfoResult) {
                let obj = new VideoInfoResultItem();
                obj.deserialize(params.VideoInfoResult[z]);
                this.VideoInfoResult.push(obj);
            }
        }

        if (params.AudioInfoResult) {
            this.AudioInfoResult = new Array();
            for (let z in params.AudioInfoResult) {
                let obj = new AudioInfoResultItem();
                obj.deserialize(params.AudioInfoResult[z]);
                this.AudioInfoResult.push(obj);
            }
        }

    }
}

/**
 * CreateQualityControlTask请求参数结构体
 * @class
 */
class CreateQualityControlTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 质检任务参数
         * @type {QualityControlInfo || null}
         */
        this.QualityControlInfo = null;

        /**
         * 视频源信息
         * @type {DownInfo || null}
         */
        this.DownInfo = null;

        /**
         * 任务结果回调地址信息
         * @type {CallbackInfo || null}
         */
        this.CallbackInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QualityControlInfo) {
            let obj = new QualityControlInfo();
            obj.deserialize(params.QualityControlInfo)
            this.QualityControlInfo = obj;
        }

        if (params.DownInfo) {
            let obj = new DownInfo();
            obj.deserialize(params.DownInfo)
            this.DownInfo = obj;
        }

        if (params.CallbackInfo) {
            let obj = new CallbackInfo();
            obj.deserialize(params.CallbackInfo)
            this.CallbackInfo = obj;
        }

    }
}

/**
 * 视频分类识别结果信息
 * @class
 */
class ClassificationTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 视频分类识别结果集。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClassificationTaskResultItem> || null}
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new ClassificationTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 智能拆条结果项
 * @class
 */
class StripTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频拆条片段地址。
         * @type {string || null}
         */
        this.SegmentUrl = null;

        /**
         * 拆条封面图片地址。
         * @type {string || null}
         */
        this.CovImgUrl = null;

        /**
         * 置信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 拆条片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 拆条片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SegmentUrl = 'SegmentUrl' in params ? params.SegmentUrl : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 智能集锦结果片段
 * @class
 */
class HighlightsTaskResultItemSegment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 集锦片段起始的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * 集锦片段终止的偏移时间，单位：秒。
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * 智能集锦结果项
 * @class
 */
class HighlightsTaskResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能集锦地址。
         * @type {string || null}
         */
        this.HighlightUrl = null;

        /**
         * 智能集锦封面地址。
         * @type {string || null}
         */
        this.CovImgUrl = null;

        /**
         * 置信度，取值范围是 0 到 100。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 智能集锦持续时间，单位：秒。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 智能集锦子片段结果集，集锦片段由这些子片段拼接生成。
         * @type {Array.<HighlightsTaskResultItemSegment> || null}
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
        this.HighlightUrl = 'HighlightUrl' in params ? params.HighlightUrl : null;
        this.CovImgUrl = 'CovImgUrl' in params ? params.CovImgUrl : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new HighlightsTaskResultItemSegment();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * 图片水印信息
 * @class
 */
class PicMarkInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片水印的X坐标。
         * @type {number || null}
         */
        this.PosX = null;

        /**
         * 图片水印的Y坐标 。
         * @type {number || null}
         */
        this.PosY = null;

        /**
         * 图片水印路径,，如果不从Cos拉取水印，则必填
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 图片水印的Cos 信息，从Cos上拉取图片水印时必填。
         * @type {CosInfo || null}
         */
        this.CosInfo = null;

        /**
         * 图片水印宽度，不填为图片原始宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 图片水印高度，不填为图片原始高度。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 添加图片水印的开始时间,单位：ms。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 添加图片水印的结束时间,单位：ms。
         * @type {number || null}
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
        this.PosX = 'PosX' in params ? params.PosX : null;
        this.PosY = 'PosY' in params ? params.PosY : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.CosInfo) {
            let obj = new CosInfo();
            obj.deserialize(params.CosInfo)
            this.CosInfo = obj;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 智能封面任务参数信息
 * @class
 */
class CoverEditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启智能封面。0为关闭，1为开启。其他非0非1值默认为0。
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         * @type {string || null}
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 颜色增强参数
 * @class
 */
class ColorEnhance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 颜色增强类型，可选项：weak,strong。
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateMediaQualityRestorationTask返回参数结构体
 * @class
 */
class CreateMediaQualityRestorationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画质重生任务ID，可以通过该ID查询任务状态。
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 输出文件切片信息
 * @class
 */
class SegmentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个切片平均时长，默认10s。
         * @type {number || null}
         */
        this.FragmentTime = null;

        /**
         * 切片类型，可选项：hls，不填时默认hls。
         * @type {string || null}
         */
        this.SegmentType = null;

        /**
         * 切片文件名字。注意：
1.不填切片文件名时，默认按照按照如下格式命名：m3u8文件名{order}。
2.若填了切片文件名字，则会按照如下格式命名：用户指定文件名{order}。
         * @type {string || null}
         */
        this.FragmentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FragmentTime = 'FragmentTime' in params ? params.FragmentTime : null;
        this.SegmentType = 'SegmentType' in params ? params.SegmentType : null;
        this.FragmentName = 'FragmentName' in params ? params.FragmentName : null;

    }
}

/**
 * 任务结果回调地址信息
 * @class
 */
class CallbackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调URL。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 片头片尾识别任务参数信息
 * @class
 */
class OpeningEndingEditingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启片头片尾识别。0为关闭，1为开启。其他非0非1值默认为0。
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
         * @type {string || null}
         */
        this.CustomInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CustomInfo = 'CustomInfo' in params ? params.CustomInfo : null;

    }
}

/**
 * 智能拆条结果信息
 * @class
 */
class StripTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 智能拆条结果集。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StripTaskResultItem> || null}
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new StripTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

/**
 * 智能封面结果信息
 * @class
 */
class CoverTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑任务状态。 
1：执行中；2：成功；3：失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 编辑任务失败错误码。 
0：成功；其他值：失败。
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 编辑任务失败错误描述。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 智能封面结果集。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CoverTaskResultItem> || null}
         */
        this.ItemSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.ItemSet) {
            this.ItemSet = new Array();
            for (let z in params.ItemSet) {
                let obj = new CoverTaskResultItem();
                obj.deserialize(params.ItemSet[z]);
                this.ItemSet.push(obj);
            }
        }

    }
}

module.exports = {
    TagTaskResult: TagTaskResult,
    TagEditingInfo: TagEditingInfo,
    Sharp: Sharp,
    TagTaskResultItem: TagTaskResultItem,
    VideoEnhance: VideoEnhance,
    CosInfo: CosInfo,
    SaveInfo: SaveInfo,
    ScratchRepair: ScratchRepair,
    ArtifactReduction: ArtifactReduction,
    CosAuthMode: CosAuthMode,
    QualityControlInfo: QualityControlInfo,
    OpeningEndingTaskResultItem: OpeningEndingTaskResultItem,
    DownInfo: DownInfo,
    ClassificationEditingInfo: ClassificationEditingInfo,
    LowLightEnhance: LowLightEnhance,
    DescribeEditingTaskResultRequest: DescribeEditingTaskResultRequest,
    CoverTaskResultItem: CoverTaskResultItem,
    TargetInfo: TargetInfo,
    StripEditingInfo: StripEditingInfo,
    EditingInfo: EditingInfo,
    MediaQualityRestorationTaskResult: MediaQualityRestorationTaskResult,
    CreateMediaQualityRestorationTaskRequest: CreateMediaQualityRestorationTaskRequest,
    CreateEditingTaskRequest: CreateEditingTaskRequest,
    AudioInfoResultItem: AudioInfoResultItem,
    Denoising: Denoising,
    FaceProtect: FaceProtect,
    VideoInfoResultItem: VideoInfoResultItem,
    HighlightsTaskResult: HighlightsTaskResult,
    EditInfo: EditInfo,
    MuxInfo: MuxInfo,
    DescribeMediaQualityRestorationTaskRusultRequest: DescribeMediaQualityRestorationTaskRusultRequest,
    VideoInfo: VideoInfo,
    OpeningEndingTaskResult: OpeningEndingTaskResult,
    DescribeQualityControlTaskResultRequest: DescribeQualityControlTaskResultRequest,
    DescribeEditingTaskResultResponse: DescribeEditingTaskResultResponse,
    CreateEditingTaskResponse: CreateEditingTaskResponse,
    QualityControlInfoTaskResult: QualityControlInfoTaskResult,
    StopMediaQualityRestorationTaskResponse: StopMediaQualityRestorationTaskResponse,
    UrlInfo: UrlInfo,
    StopMediaQualityRestorationTaskRequest: StopMediaQualityRestorationTaskRequest,
    DescribeQualityControlTaskResultResponse: DescribeQualityControlTaskResultResponse,
    DescribeMediaQualityRestorationTaskRusultResponse: DescribeMediaQualityRestorationTaskRusultResponse,
    ClassificationTaskResultItem: ClassificationTaskResultItem,
    DarInfo: DarInfo,
    AudioInfo: AudioInfo,
    CreateQualityControlTaskResponse: CreateQualityControlTaskResponse,
    EditingTaskResult: EditingTaskResult,
    SubTaskTranscodeInfo: SubTaskTranscodeInfo,
    QualityControlResultItems: QualityControlResultItems,
    SubTaskResultItem: SubTaskResultItem,
    QualityControlItem: QualityControlItem,
    HighlightsEditingInfo: HighlightsEditingInfo,
    FileInfo: FileInfo,
    CreateQualityControlTaskRequest: CreateQualityControlTaskRequest,
    ClassificationTaskResult: ClassificationTaskResult,
    StripTaskResultItem: StripTaskResultItem,
    HighlightsTaskResultItemSegment: HighlightsTaskResultItemSegment,
    HighlightsTaskResultItem: HighlightsTaskResultItem,
    PicMarkInfoItem: PicMarkInfoItem,
    CoverEditingInfo: CoverEditingInfo,
    ColorEnhance: ColorEnhance,
    CreateMediaQualityRestorationTaskResponse: CreateMediaQualityRestorationTaskResponse,
    SegmentInfo: SegmentInfo,
    CallbackInfo: CallbackInfo,
    OpeningEndingEditingInfo: OpeningEndingEditingInfo,
    StripTaskResult: StripTaskResult,
    CoverTaskResult: CoverTaskResult,

}
