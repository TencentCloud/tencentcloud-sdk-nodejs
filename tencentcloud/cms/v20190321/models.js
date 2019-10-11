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
20105：广告引流 
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
 * CreateFileSample请求参数结构体
 * @class
 */
class CreateFileSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件类型结构数组
         * @type {Array.<FileSample> || null}
         */
        this.Contents = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
20105：广告引流
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 文件类型
image：图片
audio：音频
video：视频
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Contents) {
            this.Contents = new Array();
            for (let z in params.Contents) {
                let obj = new FileSample();
                obj.deserialize(params.Contents[z]);
                this.Contents.push(obj);
            }
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Label = 'Label' in params ? params.Label : null;

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
20103：性感
24001：暴恐
21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 图片二维码详情
         * @type {CodeDetect || null}
         */
        this.CodeDetect = null;

        /**
         * 图片性感详情
         * @type {ImageHotDetect || null}
         */
        this.HotDetect = null;

        /**
         * 图片违法详情
         * @type {ImageIllegalDetect || null}
         */
        this.IllegalDetect = null;

        /**
         * 图片OCR详情
         * @type {OCRDetect || null}
         */
        this.OCRDetect = null;

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

        if (params.CodeDetect) {
            let obj = new CodeDetect();
            obj.deserialize(params.CodeDetect)
            this.CodeDetect = obj;
        }

        if (params.HotDetect) {
            let obj = new ImageHotDetect();
            obj.deserialize(params.HotDetect)
            this.HotDetect = obj;
        }

        if (params.IllegalDetect) {
            let obj = new ImageIllegalDetect();
            obj.deserialize(params.IllegalDetect)
            this.IllegalDetect = obj;
        }

        if (params.OCRDetect) {
            let obj = new OCRDetect();
            obj.deserialize(params.OCRDetect)
            this.OCRDetect = obj;
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
 * 图片涉黄详情
 * @class
 */
class ImagePornDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常
20002：色情
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
 * DeleteTextSample返回参数结构体
 * @class
 */
class DeleteTextSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文字样本信息
 * @class
 */
class TextSample extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 关键词
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 创建时间戳
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
20105：广告引流 
24001：暴恐
20004/21000：综合
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 唯一标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateTextSample返回参数结构体
 * @class
 */
class CreateTextSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 文件样本返回信息
 * @class
 */
class FileSampleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 创建时间戳
         * @type {number || null}
         */
        this.CreatedAt = null;

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
         * 文件的md5
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 唯一标识
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 文件的url
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
        this.Code = 'Code' in params ? params.Code : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * DescribeFileSample请求参数结构体
 * @class
 */
class DescribeFileSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持通过标签值进行筛选
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 数量限制，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 升序（asc）还是降序（desc），默认：desc
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 按某个字段排序，目前仅支持CreatedAt排序
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

    }
}

/**
 * 图片二维码详情
 * @class
 */
class CodeDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从图片中检测到的二维码，可能为多个
         * @type {Array.<CodeDetail> || null}
         */
        this.ModerationDetail = null;

        /**
         * 检测是否成功，0：成功，-1：出错
         * @type {number || null}
         */
        this.ModerationCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModerationDetail) {
            this.ModerationDetail = new Array();
            for (let z in params.ModerationDetail) {
                let obj = new CodeDetail();
                obj.deserialize(params.ModerationDetail[z]);
                this.ModerationDetail.push(obj);
            }
        }
        this.ModerationCode = 'ModerationCode' in params ? params.ModerationCode : null;

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
24001：暴恐
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
 * DescribeTextSample返回参数结构体
 * @class
 */
class DescribeTextSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的样本的信息
         * @type {Array.<TextSample> || null}
         */
        this.TextSampleSet = null;

        /**
         * 符合要求的样本的数量
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.TextSampleSet) {
            this.TextSampleSet = new Array();
            for (let z in params.TextSampleSet) {
                let obj = new TextSample();
                obj.deserialize(params.TextSampleSet[z]);
                this.TextSampleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 二维码在图片中的位置，由4个点的坐标表示
 * @class
 */
class CodePosition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码边界点X轴坐标
         * @type {number || null}
         */
        this.FloatX = null;

        /**
         * 二维码边界点Y轴坐标
         * @type {number || null}
         */
        this.FloatY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FloatX = 'FloatX' in params ? params.FloatX : null;
        this.FloatY = 'FloatY' in params ? params.FloatY : null;

    }
}

/**
 * DeleteFileSample返回参数结构体
 * @class
 */
class DeleteFileSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文件类型样本
 * @class
 */
class FileSample extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件md5
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件url
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
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * DescribeFileSample返回参数结构体
 * @class
 */
class DescribeFileSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的样本的信息
         * @type {Array.<FileSampleInfo> || null}
         */
        this.FileSampleSet = null;

        /**
         * 符合要求的样本的数量
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.FileSampleSet) {
            this.FileSampleSet = new Array();
            for (let z in params.FileSampleSet) {
                let obj = new FileSampleInfo();
                obj.deserialize(params.FileSampleSet[z]);
                this.FileSampleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTextSample请求参数结构体
 * @class
 */
class CreateTextSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词数组
         * @type {Array.<string> || null}
         */
        this.Contents = null;

        /**
         * 恶意类型
100：正常
20001：政治
20002：色情 
20006：涉毒违法
20007：谩骂 
24001：暴恐
21000：综合
20105：广告引流
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 样本类型
1：黑库
2：白库
         * @type {number || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Contents = 'Contents' in params ? params.Contents : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * DeleteFileSample请求参数结构体
 * @class
 */
class DeleteFileSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一标识数组
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * 筛选数据结构
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 需要过滤字段的值
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
 * OCR识别结果详情
 * @class
 */
class OCRDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别到的文本信息
         * @type {string || null}
         */
        this.TextInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TextInfo = 'TextInfo' in params ? params.TextInfo : null;

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
 * 图片性感详情
 * @class
 */
class ImageHotDetect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意类型
100：正常
20103：性感
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
         * 性感标签：性感特征中文描述
         * @type {Array.<string> || null}
         */
        this.Labels = null;

        /**
         * 性感分：分值范围 0-100，分数越高性感倾向越明显
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
 * DescribeTextSample请求参数结构体
 * @class
 */
class DescribeTextSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持通过标签值进行筛选
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 数量限制，默认为20，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 升序（asc）还是降序（desc），默认：desc
         * @type {string || null}
         */
        this.OrderDirection = null;

        /**
         * 按某个字段排序，目前仅支持CreatedAt排序
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;

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
         * 回调URL，音频识别结果将以POST请求方式发送到此地址
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
 * 从图片中检测到的二维码，可能为多个
 * @class
 */
class CodeDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码在图片中的位置，由4个点的坐标表示
         * @type {Array.<CodePosition> || null}
         */
        this.CodePosition = null;

        /**
         * 二维码文本的编码格式
         * @type {string || null}
         */
        this.CodeCharset = null;

        /**
         * 二维码的文本内容
         * @type {string || null}
         */
        this.CodeText = null;

        /**
         * 二维码的类型：1：ONED_BARCODE，2：QRCOD，3:WXCODE，4：PDF417，5:DATAMATRIX
         * @type {number || null}
         */
        this.CodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CodePosition) {
            this.CodePosition = new Array();
            for (let z in params.CodePosition) {
                let obj = new CodePosition();
                obj.deserialize(params.CodePosition[z]);
                this.CodePosition.push(obj);
            }
        }
        this.CodeCharset = 'CodeCharset' in params ? params.CodeCharset : null;
        this.CodeText = 'CodeText' in params ? params.CodeText : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;

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
         * 命中的政治物品名称
         * @type {Array.<string> || null}
         */
        this.PolityItems = null;

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
        this.PolityItems = 'PolityItems' in params ? params.PolityItems : null;
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
20006：涉毒违法
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
 * CreateFileSample返回参数结构体
 * @class
 */
class CreateFileSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
1：已完成
2：处理中
         * @type {number || null}
         */
        this.Progress = null;

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
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 回调URL，音频识别结果将以POST请求方式发送到此地址
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
 * DeleteTextSample请求参数结构体
 * @class
 */
class DeleteTextSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一标识数组，目前暂时只支持单个删除
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

module.exports = {
    AudioModerationResponse: AudioModerationResponse,
    DescribeModerationOverviewRequest: DescribeModerationOverviewRequest,
    TextModerationResponse: TextModerationResponse,
    TextData: TextData,
    VideoModerationResponse: VideoModerationResponse,
    TextModerationRequest: TextModerationRequest,
    ImageModerationResponse: ImageModerationResponse,
    ImageModerationRequest: ImageModerationRequest,
    CreateFileSampleRequest: CreateFileSampleRequest,
    ImageData: ImageData,
    ImagePornDetect: ImagePornDetect,
    DeleteTextSampleResponse: DeleteTextSampleResponse,
    TextSample: TextSample,
    CreateTextSampleResponse: CreateTextSampleResponse,
    OverviewRecord: OverviewRecord,
    FileSampleInfo: FileSampleInfo,
    DescribeFileSampleRequest: DescribeFileSampleRequest,
    CodeDetect: CodeDetect,
    ImageTerrorDetect: ImageTerrorDetect,
    DescribeTextSampleResponse: DescribeTextSampleResponse,
    CodePosition: CodePosition,
    DeleteFileSampleResponse: DeleteFileSampleResponse,
    FileSample: FileSample,
    DescribeFileSampleResponse: DescribeFileSampleResponse,
    CreateTextSampleRequest: CreateTextSampleRequest,
    DeleteFileSampleRequest: DeleteFileSampleRequest,
    Filter: Filter,
    OCRDetect: OCRDetect,
    DescribeModerationOverviewResponse: DescribeModerationOverviewResponse,
    Similar: Similar,
    ImageHotDetect: ImageHotDetect,
    DescribeTextSampleRequest: DescribeTextSampleRequest,
    AudioModerationRequest: AudioModerationRequest,
    CodeDetail: CodeDetail,
    ImagePolityDetect: ImagePolityDetect,
    ImageIllegalDetect: ImageIllegalDetect,
    CreateFileSampleResponse: CreateFileSampleResponse,
    VideoModerationRequest: VideoModerationRequest,
    DeleteTextSampleRequest: DeleteTextSampleRequest,

}
