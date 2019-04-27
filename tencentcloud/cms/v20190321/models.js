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
 * AudioModeration返回参数结构体
 * @class
 */
class AudioModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务返回码 
60001：成功请求回调任务
         * @type {number || null}
         */
        this.BusinessCode = null;

        /**
         * 识别返回结果
         * @type {Array.<string> || null}
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
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeModerationOverview请求参数结构体
 * @class
 */
class DescribeModerationOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期，如2019-01-01， 查询该日期的概览数据
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 服务类型数组，可以动态配置，Text:文本，Image:图片，Audio:音频，Video:视频, 使用"ALL"表示所有类型, 不区分大小写，如 ["Text", "Image"]查询文本和图片服务的数据，["all"]查询所有服务的数据。
         * @type {Array.<string> || null}
         */
        this.ServiceTypes = null;

        /**
         * 渠道号数组，1:直播 2:点播 3:IM 4:GME，统计指定渠道组合的汇总数据，如[1,2]表示获取直播和点播两个渠道的汇总数据，不填[]为所有渠道汇总数据
         * @type {Array.<number> || null}
         */
        this.Channels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.ServiceTypes = 'ServiceTypes' in params ? params.ServiceTypes : null;
        this.Channels = 'Channels' in params ? params.Channels : null;

    }
}

/**
 * AudioModeration请求参数结构体
 * @class
 */
class AudioModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回调url
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 音频内容的base64
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 音频文件的MD5值
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * 音频内容Url ，其中FileUrl和FileContent二选一
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * 图片识别结果详情
 * @class
 */
class ImageData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否恶意 0：正常 1：可疑
         * @type {number || null}
         */
        this.EvilFlag = null;

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 图片违法详情
         * @type {ImageIllegalDetect || null}
         */
        this.IllegalDetect = null;

        /**
         * 图片涉政详情
         * @type {ImagePolityDetect || null}
         */
        this.PolityDetect = null;

        /**
         * 图片涉黄详情
         * @type {ImagePornDetect || null}
         */
        this.PornDetect = null;

        /**
         * 图片相似度详情
         * @type {Similar || null}
         */
        this.Similar = null;

        /**
         * 图片暴恐详情
         * @type {ImageTerrorDetect || null}
         */
        this.TerrorDetect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilFlag = 'EvilFlag' in params ? params.EvilFlag : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;

        if (params.IllegalDetect) {
            let obj = new ImageIllegalDetect();
            obj.deserialize(params.IllegalDetect)
            this.IllegalDetect = obj;
        }

        if (params.PolityDetect) {
            let obj = new ImagePolityDetect();
            obj.deserialize(params.PolityDetect)
            this.PolityDetect = obj;
        }

        if (params.PornDetect) {
            let obj = new ImagePornDetect();
            obj.deserialize(params.PornDetect)
            this.PornDetect = obj;
        }

        if (params.Similar) {
            let obj = new Similar();
            obj.deserialize(params.Similar)
            this.Similar = obj;
        }

        if (params.TerrorDetect) {
            let obj = new ImageTerrorDetect();
            obj.deserialize(params.TerrorDetect)
            this.TerrorDetect = obj;
        }

    }
}

/**
 * 概览数据
 * @class
 */
class OverviewRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用恶意量
         * @type {number || null}
         */
        this.EvilCount = null;

        /**
         * Text表示文本，Image表示图片，Audio表示音频，Video表示视频
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 调用总量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 恶意量同比增长率
         * @type {string || null}
         */
        this.Yoy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilCount = 'EvilCount' in params ? params.EvilCount : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Yoy = 'Yoy' in params ? params.Yoy : null;

    }
}

/**
 * 相似度详情
 * @class
 */
class Similar extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：未匹配到 1：恶意 2：白样本
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 返回的种子url
         * @type {string || null}
         */
        this.SeedUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.SeedUrl = 'SeedUrl' in params ? params.SeedUrl : null;

    }
}

/**
 * 图片涉黄详情
 * @class
 */
class ImagePornDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 色情标签：色情特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 色情分：分值范围 0-100，分数越高色情倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 文本识别结果详情
 * @class
 */
class TextData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否恶意 0：正常 1：可疑
         * @type {number || null}
         */
        this.EvilFlag = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 命中的关键词
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilFlag = 'EvilFlag' in params ? params.EvilFlag : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;

    }
}

/**
 * 图片暴恐详情
 * @class
 */
class ImageTerrorDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 暴恐标签：返回暴恐特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 暴恐分：分值范围0--100，分数越高暴恐倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 图片违法详情
 * @class
 */
class ImageIllegalDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定 0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 违法标签：返回违法特征中文描述，如赌桌，枪支
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 违法分：分值范围 0-100，分数越高违法倾向越明显
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Score = 'Score' in params ? params.Score : null;

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
         * 文件内容 Base64,与FileUrl必须二填一
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 文件MD5值
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * 文件地址
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

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
         * 回调Url
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 视频文件MD5
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * 视频内容base64
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 视频内容Url,其中FileUrl与FileContent二选一
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * DescribeModerationOverview返回参数结构体
 * @class
 */
class DescribeModerationOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 概览数据集合
         * @type {Array.<OverviewRecord> || null}
         */
        this.Results = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new OverviewRecord();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 业务返回码
60001：成功请求回调任务
         * @type {number || null}
         */
        this.BusinessCode = null;

        /**
         * 识别返回结果
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
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图片涉政详情
 * @class
 */
class ImagePolityDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常 
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 处置判定  0：正常 1：可疑
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 命中的人脸名称
         * @type {Array.<string> || null}
         */
        this.FaceNames = null;

        /**
         * 关键词明细
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 政治（人脸）分：分值范围 0-100，分数越高可疑程度越高
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.FaceNames = 'FaceNames' in params ? params.FaceNames : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

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
         * 识别结果
         * @type {ImageData || null}
         */
        this.Data = null;

        /**
         * 业务返回码
         * @type {number || null}
         */
        this.BusinessCode = null;

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

        if (params.Data) {
            let obj = new ImageData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextModeration返回参数结构体
 * @class
 */
class TextModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果
         * @type {TextData || null}
         */
        this.Data = null;

        /**
         * 业务返回码
         * @type {number || null}
         */
        this.BusinessCode = null;

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

        if (params.Data) {
            let obj = new TextData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.BusinessCode = 'BusinessCode' in params ? params.BusinessCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextModeration请求参数结构体
 * @class
 */
class TextModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本内容Base64编码
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

module.exports = {
    AudioModerationResponse: AudioModerationResponse,
    DescribeModerationOverviewRequest: DescribeModerationOverviewRequest,
    AudioModerationRequest: AudioModerationRequest,
    ImageData: ImageData,
    OverviewRecord: OverviewRecord,
    Similar: Similar,
    ImagePornDetect: ImagePornDetect,
    TextData: TextData,
    ImageTerrorDetect: ImageTerrorDetect,
    ImageIllegalDetect: ImageIllegalDetect,
    ImageModerationRequest: ImageModerationRequest,
    VideoModerationRequest: VideoModerationRequest,
    DescribeModerationOverviewResponse: DescribeModerationOverviewResponse,
    VideoModerationResponse: VideoModerationResponse,
    ImagePolityDetect: ImagePolityDetect,
    ImageModerationResponse: ImageModerationResponse,
    TextModerationResponse: TextModerationResponse,
    TextModerationRequest: TextModerationRequest,

}
