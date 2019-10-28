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
 * CreateVocabLib返回参数结构体
 * @class
 */
class CreateVocabLibResponse extends  AbstractModel {
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
 * 人员检索统计结果
 * @class
 */
class FaceIdentifyStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 持续时间
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTs = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 相似度
         * @type {number || null}
         */
        this.Similarity = null;

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.EndTs = 'EndTs' in params ? params.EndTs : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.StartTs = 'StartTs' in params ? params.StartTs : null;

    }
}

/**
 * 单词出现的那个句子的起始时间和结束时间信息
 * @class
 */
class DetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单词出现在该音频中的那个句子的时间戳，出现了几次， 就返回对应次数的起始和结束时间戳
         * @type {Array.<WordTimePair> || null}
         */
        this.Value = null;

        /**
         * 词汇库中的单词
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new WordTimePair();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * SubmitImageTaskPlus请求参数结构体
 * @class
 */
class SubmitImageTaskPlusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {Array.<string> || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture：二进制图片的 base64 编码字符串，picture_url:图片地址，vod_url：视频地址，live_url：直播地址
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 任务控制选项
         * @type {ImageTaskFunction || null}
         */
        this.Functions = null;

        /**
         * 光照标准列表
         * @type {Array.<LightStandard> || null}
         */
        this.LightStandardSet = null;

        /**
         * 抽帧的时间间隔，单位毫秒，默认值1000，保留字段，当前不支持填写。
         * @type {number || null}
         */
        this.FrameInterval = null;

        /**
         * 查询人员库列表
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 人脸识别中的相似度阈值，默认值为0.89，保留字段，当前不支持填写。
         * @type {number || null}
         */
        this.SimThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

        if (params.Functions) {
            let obj = new ImageTaskFunction();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }

        if (params.LightStandardSet) {
            this.LightStandardSet = new Array();
            for (let z in params.LightStandardSet) {
                let obj = new LightStandard();
                obj.deserialize(params.LightStandardSet[z]);
                this.LightStandardSet.push(obj);
            }
        }
        this.FrameInterval = 'FrameInterval' in params ? params.FrameInterval : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.SimThreshold = 'SimThreshold' in params ? params.SimThreshold : null;

    }
}

/**
 * FacePoseResult
 * @class
 */
class FacePoseResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正脸或侧脸的消息
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 围绕Z轴旋转角度，俯仰角
         * @type {number || null}
         */
        this.Pitch = null;

        /**
         * 围绕X轴旋转角度，翻滚角
         * @type {number || null}
         */
        this.Roll = null;

        /**
         * 围绕Y轴旋转角度，偏航角
         * @type {number || null}
         */
        this.Yaw = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Pitch = 'Pitch' in params ? params.Pitch : null;
        this.Roll = 'Roll' in params ? params.Roll : null;
        this.Yaw = 'Yaw' in params ? params.Yaw : null;

    }
}

/**
 * DeleteVocabLib请求参数结构体
 * @class
 */
class DeleteVocabLibRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词汇库名称
         * @type {string || null}
         */
        this.VocabLibName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;

    }
}

/**
 * DescribeAITaskResult请求参数结构体
 * @class
 */
class DescribeAITaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识符。在URL方式时提交请求后会返回一个任务标识符，后续查询该url的结果时使用这个标识符进行查询。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 时长统计结果
 * @class
 */
class ActionDurationStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时长
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CreatePerson请求参数结构体
 * @class
 */
class CreatePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 图片数据 base64 字符串，与 Urls 参数选择一个输入
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 人员工作号码
         * @type {string || null}
         */
        this.JobNumber = null;

        /**
         * 人员邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 人员性别，0：未知 1：男性，2：女性
         * @type {number || null}
         */
        this.Male = null;

        /**
         * 自定义人员 ID，注意不能使用 tci_person_ 前缀
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 人员学生号码
         * @type {string || null}
         */
        this.StudentNumber = null;

        /**
         * 图片下载地址，与 Images 参数选择一个输入
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.JobNumber = 'JobNumber' in params ? params.JobNumber : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Male = 'Male' in params ? params.Male : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.StudentNumber = 'StudentNumber' in params ? params.StudentNumber : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * 光照统计结果
 * @class
 */
class LightStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 各个时间点的光线值
         * @type {Array.<LightDistributionStatistic> || null}
         */
        this.LightDistribution = null;

        /**
         * 光照程度比例统计结果
         * @type {Array.<LightLevelRatioStatistic> || null}
         */
        this.LightLevelRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LightDistribution) {
            this.LightDistribution = new Array();
            for (let z in params.LightDistribution) {
                let obj = new LightDistributionStatistic();
                obj.deserialize(params.LightDistribution[z]);
                this.LightDistribution.push(obj);
            }
        }

        if (params.LightLevelRatio) {
            this.LightLevelRatio = new Array();
            for (let z in params.LightLevelRatio) {
                let obj = new LightLevelRatioStatistic();
                obj.deserialize(params.LightLevelRatio[z]);
                this.LightLevelRatio.push(obj);
            }
        }

    }
}

/**
 * DescribePersons请求参数结构体
 * @class
 */
class DescribePersonsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * SubmitOneByOneClassTask请求参数结构体
 * @class
 */
class SubmitOneByOneClassTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture: 图片二进制数据的BASE64编码
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 音频源的语言，默认0为英文，1为中文 
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 查询人员库列表，可填写学生的注册照所在人员库
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 识别词库名列表，这些词汇库用来维护关键词，评估学生对这些关键词的使用情况
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

        /**
         * 语音编码类型 1:pcm，当FileType为vod_url或live_url时为必填
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型10:视频（三种音频格式目前仅支持16k采样率16bit），当FileType为vod_url或live_url时为必填
         * @type {number || null}
         */
        this.VoiceFileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;

    }
}

/**
 * CreateVocab返回参数结构体
 * @class
 */
class CreateVocabResponse extends  AbstractModel {
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
 * SubmitConversationTask返回参数结构体
 * @class
 */
class SubmitConversationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 	查询结果时指名的jobid。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
         */
        this.JobId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVocabLib请求参数结构体
 * @class
 */
class DescribeVocabLibRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 动作行为子类型
 * @class
 */
class ActionType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 动作类别
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
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribePersons返回参数结构体
 * @class
 */
class DescribePersonsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员列表
         * @type {Array.<Person> || null}
         */
        this.PersonSet = null;

        /**
         * 人员总数
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

        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new Person();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 检索配置开关项
 * @class
 */
class HLFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启人脸检测
         * @type {boolean || null}
         */
        this.EnableFaceDetect = null;

        /**
         * 是否开启表情识别
         * @type {boolean || null}
         */
        this.EnableFaceExpression = null;

        /**
         * 是否开启人脸检索
         * @type {boolean || null}
         */
        this.EnableFaceIdent = null;

        /**
         * 是否开启视频集锦-老师关键字识别
         * @type {boolean || null}
         */
        this.EnableKeywordWonderfulTime = null;

        /**
         * 是否开启视频集锦-微笑识别
         * @type {boolean || null}
         */
        this.EnableSmileWonderfulTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableFaceDetect = 'EnableFaceDetect' in params ? params.EnableFaceDetect : null;
        this.EnableFaceExpression = 'EnableFaceExpression' in params ? params.EnableFaceExpression : null;
        this.EnableFaceIdent = 'EnableFaceIdent' in params ? params.EnableFaceIdent : null;
        this.EnableKeywordWonderfulTime = 'EnableKeywordWonderfulTime' in params ? params.EnableKeywordWonderfulTime : null;
        this.EnableSmileWonderfulTime = 'EnableSmileWonderfulTime' in params ? params.EnableSmileWonderfulTime : null;

    }
}

/**
 * CreateFace请求参数结构体
 * @class
 */
class CreateFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 图片数据 base64 字符串，与 Urls 参数选择一个输入
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 图片下载地址，与 Images 参数选择一个输入
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * DescribeImageTaskStatistic请求参数结构体
 * @class
 */
class DescribeImageTaskStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务标识符
         * @type {number || null}
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
 * SubmitCheckAttendanceTaskPlus返回参数结构体
 * @class
 */
class SubmitCheckAttendanceTaskPlusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务标识符
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 没有注册的人的ID列表
         * @type {string || null}
         */
        this.NotRegisteredSet = null;

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
        this.NotRegisteredSet = 'NotRegisteredSet' in params ? params.NotRegisteredSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitImageTask请求参数结构体
 * @class
 */
class SubmitImageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture：二进制图片的 base64 编码字符串，picture_url:图片地址，vod_url：视频地址，live_url：直播地址
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 任务控制选项
         * @type {ImageTaskFunction || null}
         */
        this.Functions = null;

        /**
         * 光照标准列表
         * @type {Array.<LightStandard> || null}
         */
        this.LightStandardSet = null;

        /**
         * 抽帧的时间间隔，单位毫秒，默认值1000，保留字段，当前不支持填写。
         * @type {number || null}
         */
        this.FrameInterval = null;

        /**
         * 查询人员库列表
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 人脸识别中的相似度阈值，默认值为0.89，保留字段，当前不支持填写。
         * @type {number || null}
         */
        this.SimThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

        if (params.Functions) {
            let obj = new ImageTaskFunction();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }

        if (params.LightStandardSet) {
            this.LightStandardSet = new Array();
            for (let z in params.LightStandardSet) {
                let obj = new LightStandard();
                obj.deserialize(params.LightStandardSet[z]);
                this.LightStandardSet.push(obj);
            }
        }
        this.FrameInterval = 'FrameInterval' in params ? params.FrameInterval : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.SimThreshold = 'SimThreshold' in params ? params.SimThreshold : null;

    }
}

/**
 * 单词出现的那个句子的起始时间和结束时间信息
 * @class
 */
class WordTimePair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单词出现的那个句子的起始时间
         * @type {number || null}
         */
        this.Mbtm = null;

        /**
         * 	单词出现的那个句子的结束时间
         * @type {number || null}
         */
        this.Metm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mbtm = 'Mbtm' in params ? params.Mbtm : null;
        this.Metm = 'Metm' in params ? params.Metm : null;

    }
}

/**
 * ModifyLibrary请求参数结构体
 * @class
 */
class ModifyLibraryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.LibraryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.LibraryName = 'LibraryName' in params ? params.LibraryName : null;

    }
}

/**
 * 人脸操作信息
 * @class
 */
class FaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸操作错误码
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * 人脸操作结果信息
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 人脸唯一标识符
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 人脸保存地址
         * @type {string || null}
         */
        this.FaceUrl = null;

        /**
         * 人员唯一标识
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.FaceUrl = 'FaceUrl' in params ? params.FaceUrl : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 光照强度统计结果
 * @class
 */
class LightDistributionStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 光线值
         * @type {number || null}
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteLibrary返回参数结构体
 * @class
 */
class DeleteLibraryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.LibraryName = null;

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
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.LibraryName = 'LibraryName' in params ? params.LibraryName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitFullBodyClassTask请求参数结构体
 * @class
 */
class SubmitFullBodyClassTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture: 图片二进制数据的BASE64编码
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 音频源的语言，默认0为英文，1为中文
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 查询人员库列表，可填写老师的注册照所在人员库
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 识别词库名列表，这些词汇库用来维护关键词，评估老师授课过程中，对这些关键词的使用情况
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

        /**
         * 语音编码类型 1:pcm，当FileType为vod_url或live_url时为必填
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型 10:视频（三种音频格式目前仅支持16k采样率16bit），当FileType为vod_url或live_url时为必填
         * @type {number || null}
         */
        this.VoiceFileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;

    }
}

/**
 * LightResult
 * @class
 */
class LightResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 光照程度，参考提交任务时的LightStandard指定的Name参数
         * @type {string || null}
         */
        this.LightLevel = null;

        /**
         * 光照亮度
         * @type {number || null}
         */
        this.LightValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LightLevel = 'LightLevel' in params ? params.LightLevel : null;
        this.LightValue = 'LightValue' in params ? params.LightValue : null;

    }
}

/**
 * DescribeAttendanceResult请求参数结构体
 * @class
 */
class DescribeAttendanceResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识符
         * @type {number || null}
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
 * SubmitOpenClassTask返回参数结构体
 * @class
 */
class SubmitOpenClassTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务直接返回结果，包括：FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 StudentBodyMovement、TimeInfo
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ImageResults = null;

        /**
         * 任务ID
         * @type {number || null}
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

        if (params.ImageResults) {
            this.ImageResults = new Array();
            for (let z in params.ImageResults) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ImageResults[z]);
                this.ImageResults.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 含有语速的句子信息
 * @class
 */
class WholeTextItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前句子的信息
         * @type {TextItem || null}
         */
        this.TextItem = null;

        /**
         * Vad的平均音量
         * @type {number || null}
         */
        this.AvgVolume = null;

        /**
         * Vad的最大音量
         * @type {number || null}
         */
        this.MaxVolume = null;

        /**
         * Vad的最小音量
         * @type {number || null}
         */
        this.MinVolume = null;

        /**
         * 当前句子的语速
         * @type {number || null}
         */
        this.Speed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TextItem) {
            let obj = new TextItem();
            obj.deserialize(params.TextItem)
            this.TextItem = obj;
        }
        this.AvgVolume = 'AvgVolume' in params ? params.AvgVolume : null;
        this.MaxVolume = 'MaxVolume' in params ? params.MaxVolume : null;
        this.MinVolume = 'MinVolume' in params ? params.MinVolume : null;
        this.Speed = 'Speed' in params ? params.Speed : null;

    }
}

/**
 * SubmitCheckAttendanceTaskPlus请求参数结构体
 * @class
 */
class SubmitCheckAttendanceTaskPlusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入数据
         * @type {Array.<string> || null}
         */
        this.FileContent = null;

        /**
         * 视频流类型，vod_url表示点播URL，live_url表示直播URL，默认vod_url
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 人员库 ID列表
         * @type {Array.<string> || null}
         */
        this.LibraryIds = null;

        /**
         * 确定出勤阈值；默认为0.92
         * @type {number || null}
         */
        this.AttendanceThreshold = null;

        /**
         * 是否开启陌生人模式，陌生人模式是指在任务中发现的非注册人脸库中的人脸也返回相关统计信息，默认不开启
         * @type {boolean || null}
         */
        this.EnableStranger = null;

        /**
         * 考勤结束时间（到视频的第几秒结束考勤），单位秒；默认为900 
对于直播场景，使用绝对时间戳，单位秒，默认当前时间往后12小时
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 通知回调地址，要求方法为post，application/json格式
         * @type {string || null}
         */
        this.NoticeUrl = null;

        /**
         * 考勤开始时间（从视频的第几秒开始考勤），单位秒；默认为0 
对于直播场景，使用绝对时间戳，单位秒，默认当前时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 识别阈值；默认为0.8
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.LibraryIds = 'LibraryIds' in params ? params.LibraryIds : null;
        this.AttendanceThreshold = 'AttendanceThreshold' in params ? params.AttendanceThreshold : null;
        this.EnableStranger = 'EnableStranger' in params ? params.EnableStranger : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NoticeUrl = 'NoticeUrl' in params ? params.NoticeUrl : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * DescribeConversationTask返回参数结构体
 * @class
 */
class DescribeConversationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的当前音频的统计信息。当进度为100时返回。
         * @type {ASRStat || null}
         */
        this.AsrStat = null;

        /**
         * 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。
         * @type {Array.<WholeTextItem> || null}
         */
        this.Texts = null;

        /**
         * 返回词汇库中的单词出现的详细时间信息。
         * @type {Array.<VocabDetailInfomation> || null}
         */
        this.VocabAnalysisDetailInfo = null;

        /**
         * 返回词汇库中的单词出现的次数信息。
         * @type {Array.<VocabStatInfomation> || null}
         */
        this.VocabAnalysisStatInfo = null;

        /**
         * 整个音频流的全部文本
         * @type {string || null}
         */
        this.AllTexts = null;

        /**
         * 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 返回的当前处理进度。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 结果总数
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

        if (params.AsrStat) {
            let obj = new ASRStat();
            obj.deserialize(params.AsrStat)
            this.AsrStat = obj;
        }

        if (params.Texts) {
            this.Texts = new Array();
            for (let z in params.Texts) {
                let obj = new WholeTextItem();
                obj.deserialize(params.Texts[z]);
                this.Texts.push(obj);
            }
        }

        if (params.VocabAnalysisDetailInfo) {
            this.VocabAnalysisDetailInfo = new Array();
            for (let z in params.VocabAnalysisDetailInfo) {
                let obj = new VocabDetailInfomation();
                obj.deserialize(params.VocabAnalysisDetailInfo[z]);
                this.VocabAnalysisDetailInfo.push(obj);
            }
        }

        if (params.VocabAnalysisStatInfo) {
            this.VocabAnalysisStatInfo = new Array();
            for (let z in params.VocabAnalysisStatInfo) {
                let obj = new VocabStatInfomation();
                obj.deserialize(params.VocabAnalysisStatInfo[z]);
                this.VocabAnalysisStatInfo.push(obj);
            }
        }
        this.AllTexts = 'AllTexts' in params ? params.AllTexts : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePerson返回参数结构体
 * @class
 */
class CreatePersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸操作结果信息
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfoSet = null;

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

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

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageTask请求参数结构体
 * @class
 */
class DescribeImageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务标识符
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 精彩集锦信息
 * @class
 */
class HighlightsInfomation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专注的起始与终止时间信息。
         * @type {Array.<TimeType> || null}
         */
        this.Concentration = null;

        /**
         * 微笑的起始与终止时间信息。
         * @type {Array.<TimeType> || null}
         */
        this.Smile = null;

        /**
         * 高光集锦视频地址，保存剪辑好的视频地址。
         * @type {string || null}
         */
        this.HighlightsUrl = null;

        /**
         * 片段中识别出来的人脸ID。
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Concentration) {
            this.Concentration = new Array();
            for (let z in params.Concentration) {
                let obj = new TimeType();
                obj.deserialize(params.Concentration[z]);
                this.Concentration.push(obj);
            }
        }

        if (params.Smile) {
            this.Smile = new Array();
            for (let z in params.Smile) {
                let obj = new TimeType();
                obj.deserialize(params.Smile[z]);
                this.Smile.push(obj);
            }
        }
        this.HighlightsUrl = 'HighlightsUrl' in params ? params.HighlightsUrl : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 起止时间
 * @class
 */
class TimeType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结束时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 起始时间戳
         * @type {number || null}
         */
        this.StartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;

    }
}

/**
 * SubmitTraditionalClassTask请求参数结构体
 * @class
 */
class SubmitTraditionalClassTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture：图片二进制数据的BASE64编码
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 查询人员库列表，可填写学生们的注册照所在人员库
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;

    }
}

/**
 * DeleteFace返回参数结构体
 * @class
 */
class DeleteFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸操作结果
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfoSet = null;

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

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitDoubleVideoHighlights请求参数结构体
 * @class
 */
class SubmitDoubleVideoHighlightsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 学生视频url
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 需要检索的人脸合集库，不在库中的人脸将不参与精彩集锦；目前仅支持输入一个人脸库。
         * @type {Array.<string> || null}
         */
        this.LibIds = null;

        /**
         * 详细功能开关配置项
         * @type {DoubleVideoFunction || null}
         */
        this.Functions = null;

        /**
         * 需要匹配的人员信息列表。
         * @type {Array.<PersonInfo> || null}
         */
        this.PersonInfoList = null;

        /**
         * 视频处理的抽帧间隔，单位毫秒。建议留空。
         * @type {number || null}
         */
        this.FrameInterval = null;

        /**
         * 旧版本需要匹配的人员信息列表。
         * @type {Array.<string> || null}
         */
        this.PersonIds = null;

        /**
         * 人脸检索的相似度阈值，默认值0.89。建议留空。
         * @type {number || null}
         */
        this.SimThreshold = null;

        /**
         * 老师视频url
         * @type {string || null}
         */
        this.TeacherFileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.LibIds = 'LibIds' in params ? params.LibIds : null;

        if (params.Functions) {
            let obj = new DoubleVideoFunction();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }

        if (params.PersonInfoList) {
            this.PersonInfoList = new Array();
            for (let z in params.PersonInfoList) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfoList[z]);
                this.PersonInfoList.push(obj);
            }
        }
        this.FrameInterval = 'FrameInterval' in params ? params.FrameInterval : null;
        this.PersonIds = 'PersonIds' in params ? params.PersonIds : null;
        this.SimThreshold = 'SimThreshold' in params ? params.SimThreshold : null;
        this.TeacherFileContent = 'TeacherFileContent' in params ? params.TeacherFileContent : null;

    }
}

/**
 * 表情比例统计
 * @class
 */
class ExpressRatioStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出现次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 表情
         * @type {string || null}
         */
        this.Express = null;

        /**
         * 该表情时长占所有表情时长的比例
         * @type {number || null}
         */
        this.Ratio = null;

        /**
         * 该表情时长占视频总时长的比例
         * @type {number || null}
         */
        this.RatioUseDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Express = 'Express' in params ? params.Express : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;
        this.RatioUseDuration = 'RatioUseDuration' in params ? params.RatioUseDuration : null;

    }
}

/**
 * TransmitAudioStream返回参数结构体
 * @class
 */
class TransmitAudioStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的当前音频的统计信息。当进度为100时返回。
         * @type {ASRStat || null}
         */
        this.AsrStat = null;

        /**
         * 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。
         * @type {Array.<WholeTextItem> || null}
         */
        this.Texts = null;

        /**
         * 返回词汇库中的单词出现的详细时间信息。
         * @type {Array.<VocabDetailInfomation> || null}
         */
        this.VocabAnalysisDetailInfo = null;

        /**
         * 返回词汇库中的单词出现的次数信息。
         * @type {Array.<VocabStatInfomation> || null}
         */
        this.VocabAnalysisStatInfo = null;

        /**
         * 音频全部文本。
         * @type {string || null}
         */
        this.AllTexts = null;

        /**
         * 临时保存的音频链接
         * @type {string || null}
         */
        this.AudioUrl = null;

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

        if (params.AsrStat) {
            let obj = new ASRStat();
            obj.deserialize(params.AsrStat)
            this.AsrStat = obj;
        }

        if (params.Texts) {
            this.Texts = new Array();
            for (let z in params.Texts) {
                let obj = new WholeTextItem();
                obj.deserialize(params.Texts[z]);
                this.Texts.push(obj);
            }
        }

        if (params.VocabAnalysisDetailInfo) {
            this.VocabAnalysisDetailInfo = new Array();
            for (let z in params.VocabAnalysisDetailInfo) {
                let obj = new VocabDetailInfomation();
                obj.deserialize(params.VocabAnalysisDetailInfo[z]);
                this.VocabAnalysisDetailInfo.push(obj);
            }
        }

        if (params.VocabAnalysisStatInfo) {
            this.VocabAnalysisStatInfo = new Array();
            for (let z in params.VocabAnalysisStatInfo) {
                let obj = new VocabStatInfomation();
                obj.deserialize(params.VocabAnalysisStatInfo[z]);
                this.VocabAnalysisStatInfo.push(obj);
            }
        }
        this.AllTexts = 'AllTexts' in params ? params.AllTexts : null;
        this.AudioUrl = 'AudioUrl' in params ? params.AudioUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePerson请求参数结构体
 * @class
 */
class DeletePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * DescribeLibraries返回参数结构体
 * @class
 */
class DescribeLibrariesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库列表
         * @type {Array.<Library> || null}
         */
        this.LibrarySet = null;

        /**
         * 人员库总数量
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

        if (params.LibrarySet) {
            this.LibrarySet = new Array();
            for (let z in params.LibrarySet) {
                let obj = new Library();
                obj.deserialize(params.LibrarySet[z]);
                this.LibrarySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFace请求参数结构体
 * @class
 */
class DeleteFaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸标识符数组
         * @type {Array.<string> || null}
         */
        this.FaceIdSet = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceIdSet = 'FaceIdSet' in params ? params.FaceIdSet : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;

    }
}

/**
 * DeleteLibrary请求参数结构体
 * @class
 */
class DeleteLibraryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;

    }
}

/**
 * DescribePerson返回参数结构体
 * @class
 */
class DescribePersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员人脸列表
         * @type {Array.<Face> || null}
         */
        this.FaceSet = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 工作号码
         * @type {string || null}
         */
        this.JobNumber = null;

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 性别
         * @type {number || null}
         */
        this.Male = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 学生号码
         * @type {string || null}
         */
        this.StudentNumber = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

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

        if (params.FaceSet) {
            this.FaceSet = new Array();
            for (let z in params.FaceSet) {
                let obj = new Face();
                obj.deserialize(params.FaceSet[z]);
                this.FaceSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.JobNumber = 'JobNumber' in params ? params.JobNumber : null;
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Male = 'Male' in params ? params.Male : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.StudentNumber = 'StudentNumber' in params ? params.StudentNumber : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标准化接口图像分析结果
 * @class
 */
class StandardImageResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详细结果
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ResultSet = null;

        /**
         * 分析完成后的统计结果
         * @type {ImageTaskStatistic || null}
         */
        this.Statistic = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

        if (params.Statistic) {
            let obj = new ImageTaskStatistic();
            obj.deserialize(params.Statistic)
            this.Statistic = obj;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeVocabLib返回参数结构体
 * @class
 */
class DescribeVocabLibResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回该appid下的所有词汇库名
         * @type {Array.<string> || null}
         */
        this.VocabLibNameSet = null;

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
        this.VocabLibNameSet = 'VocabLibNameSet' in params ? params.VocabLibNameSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别到的人员信息
 * @class
 */
class AttendanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别到的人员信息
         * @type {FrameInfo || null}
         */
        this.Face = null;

        /**
         * 识别到的人员id
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Face) {
            let obj = new FrameInfo();
            obj.deserialize(params.Face)
            this.Face = obj;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * SubmitCheckAttendanceTask返回参数结构体
 * @class
 */
class SubmitCheckAttendanceTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务标识符
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 没有注册的人的ID列表
         * @type {Array.<string> || null}
         */
        this.NotRegisteredSet = null;

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
        this.NotRegisteredSet = 'NotRegisteredSet' in params ? params.NotRegisteredSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteVocab返回参数结构体
 * @class
 */
class DeleteVocabResponse extends  AbstractModel {
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
 * CheckFacePhoto请求参数结构体
 * @class
 */
class CheckFacePhotoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址
         * @type {string || null}
         */
        this.FileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;

    }
}

/**
 * 教师是否在屏幕内判断结果
 * @class
 */
class TeacherOutScreenResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作识别结果，InScreen：在屏幕内
OutScreen：不在屏幕内
         * @type {string || null}
         */
        this.Class = null;

        /**
         * 识别结果高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 识别结果左坐标
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 识别结果顶坐标
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 识别结果宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Class = 'Class' in params ? params.Class : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * 当前句子包含的所有单词信息
 * @class
 */
class Word extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前词的置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 当前单词语音的起始时间点，单位为ms
         * @type {number || null}
         */
        this.Mbtm = null;

        /**
         * 当前单词语音的终止时间点，单位为ms
         * @type {number || null}
         */
        this.Metm = null;

        /**
         * 当前词
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 当前词的字节数
         * @type {number || null}
         */
        this.Wsize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Mbtm = 'Mbtm' in params ? params.Mbtm : null;
        this.Metm = 'Metm' in params ? params.Metm : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Wsize = 'Wsize' in params ? params.Wsize : null;

    }
}

/**
 * DeleteVocab请求参数结构体
 * @class
 */
class DeleteVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除词汇的词汇库名
         * @type {string || null}
         */
        this.VocabLibName = null;

        /**
         * 要删除的词汇列表
         * @type {Array.<string> || null}
         */
        this.VocabList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;
        this.VocabList = 'VocabList' in params ? params.VocabList : null;

    }
}

/**
 * 大教室场景肢体动作识别信息
 * @class
 */
class ActionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 躯体动作识别结果，包含坐着（sit）、站立（stand）和趴睡（sleep）
         * @type {ActionType || null}
         */
        this.BodyPosture = null;

        /**
         * 举手识别结果，包含举手（hand）和未检测到举手（nothand）
         * @type {ActionType || null}
         */
        this.Handup = null;

        /**
         * 是否低头识别结果，包含抬头（lookingahead）和未检测到抬头（notlookingahead）
         * @type {ActionType || null}
         */
        this.LookHead = null;

        /**
         * 是否写字识别结果，包含写字（write）和未检测到写字（notlookingahead）
         * @type {ActionType || null}
         */
        this.Writing = null;

        /**
         * 动作图像高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 动作出现图像的左侧起始坐标位置
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 动作出现图像的上侧起始侧坐标位置
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 动作图像宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BodyPosture) {
            let obj = new ActionType();
            obj.deserialize(params.BodyPosture)
            this.BodyPosture = obj;
        }

        if (params.Handup) {
            let obj = new ActionType();
            obj.deserialize(params.Handup)
            this.Handup = obj;
        }

        if (params.LookHead) {
            let obj = new ActionType();
            obj.deserialize(params.LookHead)
            this.LookHead = obj;
        }

        if (params.Writing) {
            let obj = new ActionType();
            obj.deserialize(params.Writing)
            this.Writing = obj;
        }
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * FaceExpressionResult
 * @class
 */
class FaceExpressionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表情置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 表情识别结果，包括"neutral":中性,"happiness":开心，"angry":"生气"，"disgust":厌恶，"fear":"恐惧"，"sadness":"悲伤"，"surprise":"惊讶"，"contempt":"蔑视"
         * @type {string || null}
         */
        this.Expression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Expression = 'Expression' in params ? params.Expression : null;

    }
}

/**
 * 单词出现的次数信息
 * @class
 */
class StatInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词汇库中的单词
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 单词出现在该音频中总次数
         * @type {number || null}
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
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 数量统计结果
 * @class
 */
class ActionCountStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * GestureResult
 * @class
 */
class GestureResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果，包含"USPEAK":听你说，"LISTEN":听我说，"GOOD":GOOD，"TOOLS":拿教具，"OTHERS":其他
         * @type {string || null}
         */
        this.Class = null;

        /**
         * 置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 识别结果左坐标
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 识别结果顶坐标
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 识别结果宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Class = 'Class' in params ? params.Class : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * CreateFace返回参数结构体
 * @class
 */
class CreateFaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸操作结果信息
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfoSet = null;

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

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 老师肢体动作识别结果
 * @class
 */
class BodyMovementResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 识别结果左坐标
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 老师动作识别结果，包含
1、teach_on_positive_attitude 正面讲解
2、point_to_the_blackboard 指黑板
3、writing_blackboard 写板书
4、other 其他
         * @type {string || null}
         */
        this.Movements = null;

        /**
         * 识别结果顶坐标
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 识别结果宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Movements = 'Movements' in params ? params.Movements : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * DescribeAITaskResult返回参数结构体
 * @class
 */
class DescribeAITaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频分析结果
         * @type {StandardAudioResult || null}
         */
        this.AudioResult = null;

        /**
         * 图像分析结果
         * @type {StandardImageResult || null}
         */
        this.ImageResult = null;

        /**
         * 视频分析结果
         * @type {StandardVideoResult || null}
         */
        this.VideoResult = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
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

        if (params.AudioResult) {
            let obj = new StandardAudioResult();
            obj.deserialize(params.AudioResult)
            this.AudioResult = obj;
        }

        if (params.ImageResult) {
            let obj = new StandardImageResult();
            obj.deserialize(params.ImageResult)
            this.ImageResult = obj;
        }

        if (params.VideoResult) {
            let obj = new StandardVideoResult();
            obj.deserialize(params.VideoResult)
            this.VideoResult = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAudioTask返回参数结构体
 * @class
 */
class DescribeAudioTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果请求中开启了静音检测开关，则会返回所有的静音片段（静音时长超过阈值的片段）。
         * @type {AllMuteSlice || null}
         */
        this.AllMuteSlice = null;

        /**
         * 返回的当前音频的统计信息。当进度为100时返回。
         * @type {ASRStat || null}
         */
        this.AsrStat = null;

        /**
         * 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。
         * @type {Array.<WholeTextItem> || null}
         */
        this.Texts = null;

        /**
         * 返回词汇库中的单词出现的详细时间信息。
         * @type {Array.<VocabDetailInfomation> || null}
         */
        this.VocabAnalysisDetailInfo = null;

        /**
         * 返回词汇库中的单词出现的次数信息。
         * @type {Array.<VocabStatInfomation> || null}
         */
        this.VocabAnalysisStatInfo = null;

        /**
         * 返回音频全部文本。
         * @type {string || null}
         */
        this.AllTexts = null;

        /**
         * 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 返回的当前处理进度。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 结果总数
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

        if (params.AllMuteSlice) {
            let obj = new AllMuteSlice();
            obj.deserialize(params.AllMuteSlice)
            this.AllMuteSlice = obj;
        }

        if (params.AsrStat) {
            let obj = new ASRStat();
            obj.deserialize(params.AsrStat)
            this.AsrStat = obj;
        }

        if (params.Texts) {
            this.Texts = new Array();
            for (let z in params.Texts) {
                let obj = new WholeTextItem();
                obj.deserialize(params.Texts[z]);
                this.Texts.push(obj);
            }
        }

        if (params.VocabAnalysisDetailInfo) {
            this.VocabAnalysisDetailInfo = new Array();
            for (let z in params.VocabAnalysisDetailInfo) {
                let obj = new VocabDetailInfomation();
                obj.deserialize(params.VocabAnalysisDetailInfo[z]);
                this.VocabAnalysisDetailInfo.push(obj);
            }
        }

        if (params.VocabAnalysisStatInfo) {
            this.VocabAnalysisStatInfo = new Array();
            for (let z in params.VocabAnalysisStatInfo) {
                let obj = new VocabStatInfomation();
                obj.deserialize(params.VocabAnalysisStatInfo[z]);
                this.VocabAnalysisStatInfo.push(obj);
            }
        }
        this.AllTexts = 'AllTexts' in params ? params.AllTexts : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 时长占比统计结果
 * @class
 */
class ActionDurationRatioStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 比例
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * DescribePerson请求参数结构体
 * @class
 */
class DescribePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 标准化接口图像分析结果
 * @class
 */
class StandardVideoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分析完成后的统计结果
         * @type {Array.<HighlightsInfomation> || null}
         */
        this.HighlightsInfo = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 任务状态
         * @type {string || null}
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

        if (params.HighlightsInfo) {
            this.HighlightsInfo = new Array();
            for (let z in params.HighlightsInfo) {
                let obj = new HighlightsInfomation();
                obj.deserialize(params.HighlightsInfo[z]);
                this.HighlightsInfo.push(obj);
            }
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyLibrary返回参数结构体
 * @class
 */
class ModifyLibraryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.LibraryName = null;

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
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.LibraryName = 'LibraryName' in params ? params.LibraryName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TimeInfoResult
 * @class
 */
class TimeInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 持续时间，单位毫秒
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 结束时间戳，单位毫秒
         * @type {number || null}
         */
        this.EndTs = null;

        /**
         * 开始时间戳，单位毫秒
         * @type {number || null}
         */
        this.StartTs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.EndTs = 'EndTs' in params ? params.EndTs : null;
        this.StartTs = 'StartTs' in params ? params.StartTs : null;

    }
}

/**
 * SubmitPartialBodyClassTask返回参数结构体
 * @class
 */
class SubmitPartialBodyClassTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务直接返回结果，包括： FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 Gesture 、 Light、 TimeInfo
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ImageResults = null;

        /**
         * 任务ID
         * @type {number || null}
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

        if (params.ImageResults) {
            this.ImageResults = new Array();
            for (let z in params.ImageResults) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ImageResults[z]);
                this.ImageResults.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 当前音频的统计结果
 * @class
 */
class ASRStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前音频的平均语速
         * @type {number || null}
         */
        this.AvgSpeed = null;

        /**
         * Vad的平均音量
         * @type {number || null}
         */
        this.AvgVolume = null;

        /**
         * Vad的最大音量
         * @type {number || null}
         */
        this.MaxVolume = null;

        /**
         * Vad的最小音量
         * @type {number || null}
         */
        this.MinVolume = null;

        /**
         * 当前音频的非发音时长
         * @type {number || null}
         */
        this.MuteDuration = null;

        /**
         * 当前音频的发音时长
         * @type {number || null}
         */
        this.SoundDuration = null;

        /**
         * 当前音频的总时长
         * @type {number || null}
         */
        this.TotalDuration = null;

        /**
         * 当前音频的句子总数
         * @type {number || null}
         */
        this.VadNum = null;

        /**
         * 当前音频的单词总数
         * @type {number || null}
         */
        this.WordNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AvgSpeed = 'AvgSpeed' in params ? params.AvgSpeed : null;
        this.AvgVolume = 'AvgVolume' in params ? params.AvgVolume : null;
        this.MaxVolume = 'MaxVolume' in params ? params.MaxVolume : null;
        this.MinVolume = 'MinVolume' in params ? params.MinVolume : null;
        this.MuteDuration = 'MuteDuration' in params ? params.MuteDuration : null;
        this.SoundDuration = 'SoundDuration' in params ? params.SoundDuration : null;
        this.TotalDuration = 'TotalDuration' in params ? params.TotalDuration : null;
        this.VadNum = 'VadNum' in params ? params.VadNum : null;
        this.WordNum = 'WordNum' in params ? params.WordNum : null;

    }
}

/**
 * 当前句子的信息
 * @class
 */
class TextItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前句子包含的所有单词信息
         * @type {Array.<Word> || null}
         */
        this.Words = null;

        /**
         * 当前句子的置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 当前句子语音的起始时间点，单位为ms
         * @type {number || null}
         */
        this.Mbtm = null;

        /**
         * 当前句子语音的终止时间点，单位为ms
         * @type {number || null}
         */
        this.Metm = null;

        /**
         * 保留参数，暂无意义
         * @type {number || null}
         */
        this.Tag = null;

        /**
         * 当前句子
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 当前句子的字节数
         * @type {number || null}
         */
        this.TextSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new Word();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Mbtm = 'Mbtm' in params ? params.Mbtm : null;
        this.Metm = 'Metm' in params ? params.Metm : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.TextSize = 'TextSize' in params ? params.TextSize : null;

    }
}

/**
 * CancelTask请求参数结构体
 * @class
 */
class CancelTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待取消任务标志符。
         * @type {number || null}
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
 * 如果请求中开启了静音检测开关，则会返回所有的静音片段（静音时长超过阈值的片段）。
 * @class
 */
class AllMuteSlice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所有静音片段。
         * @type {Array.<MuteSlice> || null}
         */
        this.MuteSlice = null;

        /**
         * 静音时长占比。
         * @type {number || null}
         */
        this.MuteRatio = null;

        /**
         * 静音总时长。
         * @type {number || null}
         */
        this.TotalMuteDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MuteSlice) {
            this.MuteSlice = new Array();
            for (let z in params.MuteSlice) {
                let obj = new MuteSlice();
                obj.deserialize(params.MuteSlice[z]);
                this.MuteSlice.push(obj);
            }
        }
        this.MuteRatio = 'MuteRatio' in params ? params.MuteRatio : null;
        this.TotalMuteDuration = 'TotalMuteDuration' in params ? params.TotalMuteDuration : null;

    }
}

/**
 * 双路混流视频集锦开关项
 * @class
 */
class DoubleVideoFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 片头片尾增加图片开关
         * @type {boolean || null}
         */
        this.EnableCoverPictures = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableCoverPictures = 'EnableCoverPictures' in params ? params.EnableCoverPictures : null;

    }
}

/**
 * SubmitPartialBodyClassTask请求参数结构体
 * @class
 */
class SubmitPartialBodyClassTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture: 图片二进制数据的BASE64编码
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 音频源的语言，默认0为英文，1为中文
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 查询人员库列表，可填写老师的注册照所在人员库
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 识别词库名列表，这些词汇库用来维护关键词，评估老师授课过程中，对这些关键词的使用情况
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

        /**
         * 语音编码类型 1:pcm，当FileType为vod_url或live_url时为必填
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型 10:视频（三种音频格式目前仅支持16k采样率16bit），当FileType为vod_url或live_url时为必填
         * @type {number || null}
         */
        this.VoiceFileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;

    }
}

/**
 * DescribeHighlightResult返回参数结构体
 * @class
 */
class DescribeHighlightResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 精彩集锦详细信息。
         * @type {Array.<HighlightsInfomation> || null}
         */
        this.HighlightsInfo = null;

        /**
         * 精彩集锦任务唯一id。在URL方式时提交请求后会返回一个JobId，后续查询该url的结果时使用这个JobId进行查询。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 任务的进度百分比，100表示任务已完成。
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

        if (params.HighlightsInfo) {
            this.HighlightsInfo = new Array();
            for (let z in params.HighlightsInfo) {
                let obj = new HighlightsInfomation();
                obj.deserialize(params.HighlightsInfo[z]);
                this.HighlightsInfo.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitOneByOneClassTask返回参数结构体
 * @class
 */
class SubmitOneByOneClassTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务直接返回结果，包括：FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、TimeInfo
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ImageResults = null;

        /**
         * 任务ID
         * @type {number || null}
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

        if (params.ImageResults) {
            this.ImageResults = new Array();
            for (let z in params.ImageResults) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ImageResults[z]);
                this.ImageResults.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 光照标准，结构的相关示例为：
{
    "Name":"dark"，
    "Range":[0,30]
}
当光照的区间落入在0到30的范围时，就会命中dark的光照标准
 * @class
 */
class LightStandard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 光照名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 范围
         * @type {Array.<number> || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Range = 'Range' in params ? params.Range : null;

    }
}

/**
 * SubmitHighlights请求参数结构体
 * @class
 */
class SubmitHighlightsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表情配置开关项。
         * @type {HLFunction || null}
         */
        this.Functions = null;

        /**
         * 视频url。
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 视频类型及来源，目前只支持点播类型："vod_url"。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 需要检索的人脸合集库，不在库中的人脸将不参与精彩集锦。
         * @type {Array.<string> || null}
         */
        this.LibIds = null;

        /**
         * 视频处理的抽帧间隔，单位毫秒。建议留空。
         * @type {number || null}
         */
        this.FrameInterval = null;

        /**
         * 关键词语言类型，0为英文，1为中文。
         * @type {number || null}
         */
        this.KeywordsLanguage = null;

        /**
         * 关键词数组，当且仅当Funtions中的EnableKeywordWonderfulTime为true时有意义，匹配相应的关键字。
         * @type {Array.<string> || null}
         */
        this.KeywordsStrings = null;

        /**
         * 处理视频的总时长，单位毫秒。该值为0或未设置时，默认值两小时生效；当该值大于视频实际时长时，视频实际时长生效；当该值小于视频实际时长时，该值生效；当获取视频实际时长失败时，若该值设置则生效，否则默认值生效。建议留空。
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 人脸检索的相似度阈值，默认值0.89。建议留空。
         * @type {number || null}
         */
        this.SimThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Functions) {
            let obj = new HLFunction();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.LibIds = 'LibIds' in params ? params.LibIds : null;
        this.FrameInterval = 'FrameInterval' in params ? params.FrameInterval : null;
        this.KeywordsLanguage = 'KeywordsLanguage' in params ? params.KeywordsLanguage : null;
        this.KeywordsStrings = 'KeywordsStrings' in params ? params.KeywordsStrings : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.SimThreshold = 'SimThreshold' in params ? params.SimThreshold : null;

    }
}

/**
 * ModifyPerson返回参数结构体
 * @class
 */
class ModifyPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸信息
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfoSet = null;

        /**
         * 人员所属人员库标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

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

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人员信息
 * @class
 */
class PersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要匹配的人员的ID列表。
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 视频集锦开始封面照片。
         * @type {string || null}
         */
        this.CoverBeginUrl = null;

        /**
         * 视频集锦结束封面照片。
         * @type {string || null}
         */
        this.CoverEndUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.CoverBeginUrl = 'CoverBeginUrl' in params ? params.CoverBeginUrl : null;
        this.CoverEndUrl = 'CoverEndUrl' in params ? params.CoverEndUrl : null;

    }
}

/**
 * 人脸描述
 * @class
 */
class Face extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸唯一标识符
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 人脸图片 URL
         * @type {string || null}
         */
        this.FaceUrl = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.FaceUrl = 'FaceUrl' in params ? params.FaceUrl : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 人员描述
 * @class
 */
class Person extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 工作号码
         * @type {string || null}
         */
        this.JobNumber = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 性别
         * @type {number || null}
         */
        this.Male = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 学生号码
         * @type {string || null}
         */
        this.StudentNumber = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.JobNumber = 'JobNumber' in params ? params.JobNumber : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Male = 'Male' in params ? params.Male : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.StudentNumber = 'StudentNumber' in params ? params.StudentNumber : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 光照强度比例统计结果
 * @class
 */
class LightLevelRatioStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 比例
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
        this.Level = 'Level' in params ? params.Level : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * DescribeVocab返回参数结构体
 * @class
 */
class DescribeVocabResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词汇列表
         * @type {Array.<string> || null}
         */
        this.VocabNameSet = null;

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
        this.VocabNameSet = 'VocabNameSet' in params ? params.VocabNameSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageTaskStatistic返回参数结构体
 * @class
 */
class DescribeImageTaskStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务统计信息
         * @type {ImageTaskStatistic || null}
         */
        this.Statistic = null;

        /**
         * 图像任务唯一标识符
         * @type {number || null}
         */
        this.JobId = null;

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

        if (params.Statistic) {
            let obj = new ImageTaskStatistic();
            obj.deserialize(params.Statistic)
            this.Statistic = obj;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCheckAttendanceTask请求参数结构体
 * @class
 */
class SubmitCheckAttendanceTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入数据
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 视频流类型，vod_url表示点播URL，live_url表示直播URL，默认vod_url
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 人员库 ID列表
         * @type {Array.<string> || null}
         */
        this.LibraryIds = null;

        /**
         * 确定出勤阈值；默认为0.92
         * @type {number || null}
         */
        this.AttendanceThreshold = null;

        /**
         * 是否开启陌生人模式，陌生人模式是指在任务中发现的非注册人脸库中的人脸也返回相关统计信息，默认不开启
         * @type {boolean || null}
         */
        this.EnableStranger = null;

        /**
         * 考勤结束时间（到视频的第几秒结束考勤），单位秒；默认为900 
对于直播场景，使用绝对时间戳，单位秒，默认当前时间往后12小时
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 通知回调地址，要求方法为post，application/json格式
         * @type {string || null}
         */
        this.NoticeUrl = null;

        /**
         * 考勤开始时间（从视频的第几秒开始考勤），单位秒；默认为0 
对于直播场景，使用绝对时间戳，单位秒，默认当前时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 识别阈值；默认为0.8
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.LibraryIds = 'LibraryIds' in params ? params.LibraryIds : null;
        this.AttendanceThreshold = 'AttendanceThreshold' in params ? params.AttendanceThreshold : null;
        this.EnableStranger = 'EnableStranger' in params ? params.EnableStranger : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.NoticeUrl = 'NoticeUrl' in params ? params.NoticeUrl : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * CancelTask返回参数结构体
 * @class
 */
class CancelTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取消任务标志符。
         * @type {number || null}
         */
        this.JobId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 学生肢体动作结果
 * @class
 */
class StudentBodyMovementResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 置信度（已废弃）
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 举手识别结果置信度
         * @type {number || null}
         */
        this.HandupConfidence = null;

        /**
         * 举手识别结果，包含举手（handup）和未举手（nothandup）
         * @type {string || null}
         */
        this.HandupStatus = null;

        /**
         * 识别结果高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 识别结果左坐标
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 动作识别结果（已废弃）
         * @type {string || null}
         */
        this.Movements = null;

        /**
         * 站立识别结果置信度
         * @type {number || null}
         */
        this.StandConfidence = null;

        /**
         * 站立识别结果，包含站立（stand）和坐着（sit）
         * @type {string || null}
         */
        this.StandStatus = null;

        /**
         * 识别结果顶坐标
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 识别结果宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.HandupConfidence = 'HandupConfidence' in params ? params.HandupConfidence : null;
        this.HandupStatus = 'HandupStatus' in params ? params.HandupStatus : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Movements = 'Movements' in params ? params.Movements : null;
        this.StandConfidence = 'StandConfidence' in params ? params.StandConfidence : null;
        this.StandStatus = 'StandStatus' in params ? params.StandStatus : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * 缺勤人员信息
 * @class
 */
class AbsenceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别到的人员所在的库id
         * @type {string || null}
         */
        this.LibraryIds = null;

        /**
         * 识别到的人员id
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryIds = 'LibraryIds' in params ? params.LibraryIds : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * 图像任务控制选项
 * @class
 */
class ImageTaskFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大教室场景学生肢体动作识别选项
         * @type {boolean || null}
         */
        this.EnableActionClass = null;

        /**
         * 人脸检测选项
         * @type {boolean || null}
         */
        this.EnableFaceDetect = null;

        /**
         * 人脸表情识别选项
         * @type {boolean || null}
         */
        this.EnableFaceExpression = null;

        /**
         * 人脸检索选项
         * @type {boolean || null}
         */
        this.EnableFaceIdentify = null;

        /**
         * 手势选项
         * @type {boolean || null}
         */
        this.EnableGesture = null;

        /**
         * 优图手势选项（该功能尚未支持）
         * @type {boolean || null}
         */
        this.EnableHandTracking = null;

        /**
         * 光照选项
         * @type {boolean || null}
         */
        this.EnableLightJudge = null;

        /**
         * 小班课场景学生肢体动作识别选项
         * @type {boolean || null}
         */
        this.EnableStudentBodyMovements = null;

        /**
         * 教师动作选项（该功能尚未支持）
         * @type {boolean || null}
         */
        this.EnableTeacherBodyMovements = null;

        /**
         * 判断老师是否在屏幕中
         * @type {boolean || null}
         */
        this.EnableTeacherOutScreen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableActionClass = 'EnableActionClass' in params ? params.EnableActionClass : null;
        this.EnableFaceDetect = 'EnableFaceDetect' in params ? params.EnableFaceDetect : null;
        this.EnableFaceExpression = 'EnableFaceExpression' in params ? params.EnableFaceExpression : null;
        this.EnableFaceIdentify = 'EnableFaceIdentify' in params ? params.EnableFaceIdentify : null;
        this.EnableGesture = 'EnableGesture' in params ? params.EnableGesture : null;
        this.EnableHandTracking = 'EnableHandTracking' in params ? params.EnableHandTracking : null;
        this.EnableLightJudge = 'EnableLightJudge' in params ? params.EnableLightJudge : null;
        this.EnableStudentBodyMovements = 'EnableStudentBodyMovements' in params ? params.EnableStudentBodyMovements : null;
        this.EnableTeacherBodyMovements = 'EnableTeacherBodyMovements' in params ? params.EnableTeacherBodyMovements : null;
        this.EnableTeacherOutScreen = 'EnableTeacherOutScreen' in params ? params.EnableTeacherOutScreen : null;

    }
}

/**
 * 人员信息
 * @class
 */
class FrameInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 相似度
         * @type {number || null}
         */
        this.Similarity = null;

        /**
         * 截图的存储地址
         * @type {string || null}
         */
        this.SnapshotUrl = null;

        /**
         * 相对于视频起始时间的时间戳，单位秒
         * @type {number || null}
         */
        this.Ts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.SnapshotUrl = 'SnapshotUrl' in params ? params.SnapshotUrl : null;
        this.Ts = 'Ts' in params ? params.Ts : null;

    }
}

/**
 * 人员库描述
 * @class
 */
class Library extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.LibraryName = null;

        /**
         * 人员库人员数量
         * @type {number || null}
         */
        this.PersonCount = null;

        /**
         * 人员库修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.LibraryName = 'LibraryName' in params ? params.LibraryName : null;
        this.PersonCount = 'PersonCount' in params ? params.PersonCount : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * SubmitConversationTask请求参数结构体
 * @class
 */
class SubmitConversationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频源的语言，默认0为英文，1为中文
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 学生音频流
         * @type {string || null}
         */
        this.StudentUrl = null;

        /**
         * 教师音频流
         * @type {string || null}
         */
        this.TeacherUrl = null;

        /**
         * 语音编码类型 1:pcm
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型 1:raw, 2:wav, 3:mp3（三种格式目前仅支持16k采样率16bit）
         * @type {number || null}
         */
        this.VoiceFileType = null;

        /**
         * 功能开关列表，表示是否需要打开相应的功能，返回相应的信息
         * @type {Function || null}
         */
        this.Functions = null;

        /**
         * 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.StudentUrl = 'StudentUrl' in params ? params.StudentUrl : null;
        this.TeacherUrl = 'TeacherUrl' in params ? params.TeacherUrl : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;

        if (params.Functions) {
            let obj = new Function();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;

    }
}

/**
 * SubmitHighlights返回参数结构体
 * @class
 */
class SubmitHighlightsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频拆条任务ID，用来唯一标识视频拆条任务。
         * @type {number || null}
         */
        this.JobId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePerson返回参数结构体
 * @class
 */
class DeletePersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸信息
         * @type {Array.<FaceInfo> || null}
         */
        this.FaceInfoSet = null;

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

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

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new FaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图像任务统计结果
 * @class
 */
class ImageTaskStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员检测统计信息
         * @type {Array.<FaceDetectStatistic> || null}
         */
        this.FaceDetect = null;

        /**
         * 人脸表情统计信息
         * @type {Array.<FaceExpressStatistic> || null}
         */
        this.FaceExpression = null;

        /**
         * 人脸检索统计信息
         * @type {Array.<FaceIdentifyStatistic> || null}
         */
        this.FaceIdentify = null;

        /**
         * 姿势识别统计信息
         * @type {ActionStatistic || null}
         */
        this.Gesture = null;

        /**
         * 手势识别统计信息
         * @type {ActionStatistic || null}
         */
        this.Handtracking = null;

        /**
         * 光照统计信息
         * @type {LightStatistic || null}
         */
        this.Light = null;

        /**
         * 学生动作统计信息
         * @type {ActionStatistic || null}
         */
        this.StudentMovement = null;

        /**
         * 教师动作统计信息
         * @type {ActionStatistic || null}
         */
        this.TeacherMovement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceDetect) {
            this.FaceDetect = new Array();
            for (let z in params.FaceDetect) {
                let obj = new FaceDetectStatistic();
                obj.deserialize(params.FaceDetect[z]);
                this.FaceDetect.push(obj);
            }
        }

        if (params.FaceExpression) {
            this.FaceExpression = new Array();
            for (let z in params.FaceExpression) {
                let obj = new FaceExpressStatistic();
                obj.deserialize(params.FaceExpression[z]);
                this.FaceExpression.push(obj);
            }
        }

        if (params.FaceIdentify) {
            this.FaceIdentify = new Array();
            for (let z in params.FaceIdentify) {
                let obj = new FaceIdentifyStatistic();
                obj.deserialize(params.FaceIdentify[z]);
                this.FaceIdentify.push(obj);
            }
        }

        if (params.Gesture) {
            let obj = new ActionStatistic();
            obj.deserialize(params.Gesture)
            this.Gesture = obj;
        }

        if (params.Handtracking) {
            let obj = new ActionStatistic();
            obj.deserialize(params.Handtracking)
            this.Handtracking = obj;
        }

        if (params.Light) {
            let obj = new LightStatistic();
            obj.deserialize(params.Light)
            this.Light = obj;
        }

        if (params.StudentMovement) {
            let obj = new ActionStatistic();
            obj.deserialize(params.StudentMovement)
            this.StudentMovement = obj;
        }

        if (params.TeacherMovement) {
            let obj = new ActionStatistic();
            obj.deserialize(params.TeacherMovement)
            this.TeacherMovement = obj;
        }

    }
}

/**
 * 疑似出席人员
 * @class
 */
class SuspectedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopN匹配信息列表
         * @type {Array.<FrameInfo> || null}
         */
        this.FaceSet = null;

        /**
         * 识别到的人员id
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceSet) {
            this.FaceSet = new Array();
            for (let z in params.FaceSet) {
                let obj = new FrameInfo();
                obj.deserialize(params.FaceSet[z]);
                this.FaceSet.push(obj);
            }
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * CheckFacePhoto返回参数结构体
 * @class
 */
class CheckFacePhotoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸检查结果，0：通过检查，1：图片模糊
         * @type {number || null}
         */
        this.CheckResult = null;

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
        this.CheckResult = 'CheckResult' in params ? params.CheckResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 统计结果
 * @class
 */
class ActionStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量统计
         * @type {Array.<ActionCountStatistic> || null}
         */
        this.ActionCount = null;

        /**
         * 时长统计
         * @type {Array.<ActionDurationStatistic> || null}
         */
        this.ActionDuration = null;

        /**
         * 时长比例统计
         * @type {Array.<ActionDurationRatioStatistic> || null}
         */
        this.ActionDurationRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ActionCount) {
            this.ActionCount = new Array();
            for (let z in params.ActionCount) {
                let obj = new ActionCountStatistic();
                obj.deserialize(params.ActionCount[z]);
                this.ActionCount.push(obj);
            }
        }

        if (params.ActionDuration) {
            this.ActionDuration = new Array();
            for (let z in params.ActionDuration) {
                let obj = new ActionDurationStatistic();
                obj.deserialize(params.ActionDuration[z]);
                this.ActionDuration.push(obj);
            }
        }

        if (params.ActionDurationRatio) {
            this.ActionDurationRatio = new Array();
            for (let z in params.ActionDurationRatio) {
                let obj = new ActionDurationRatioStatistic();
                obj.deserialize(params.ActionDurationRatio[z]);
                this.ActionDurationRatio.push(obj);
            }
        }

    }
}

/**
 * DescribeHighlightResult请求参数结构体
 * @class
 */
class DescribeHighlightResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 精彩集锦任务唯一id。在URL方式时提交请求后会返回一个JobId，后续查询该url的结果时使用这个JobId进行查询。
         * @type {number || null}
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
 * DescribeVocab请求参数结构体
 * @class
 */
class DescribeVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询词汇的词汇库名
         * @type {string || null}
         */
        this.VocabLibName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;

    }
}

/**
 * DeleteVocabLib返回参数结构体
 * @class
 */
class DeleteVocabLibResponse extends  AbstractModel {
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
 * 图像任务结果
 * @class
 */
class ImageTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大教室场景学生肢体动作识别信息
         * @type {ActionInfo || null}
         */
        this.ActionInfo = null;

        /**
         * 属性识别结果
         * @type {FaceAttrResult || null}
         */
        this.FaceAttr = null;

        /**
         * 表情识别结果
         * @type {FaceExpressionResult || null}
         */
        this.FaceExpression = null;

        /**
         * 人脸检索结果
         * @type {FaceIdentifyResult || null}
         */
        this.FaceIdentify = null;

        /**
         * 人脸检测结果
         * @type {FaceInfoResult || null}
         */
        this.FaceInfo = null;

        /**
         * 姿势识别结果
         * @type {FacePoseResult || null}
         */
        this.FacePose = null;

        /**
         * 动作分类结果
         * @type {GestureResult || null}
         */
        this.Gesture = null;

        /**
         * 手势分类结果
         * @type {HandTrackingResult || null}
         */
        this.HandTracking = null;

        /**
         * 光照识别结果
         * @type {LightResult || null}
         */
        this.Light = null;

        /**
         * 学生肢体动作识别结果
         * @type {StudentBodyMovementResult || null}
         */
        this.StudentBodyMovement = null;

        /**
         * 老师肢体动作识别结果
         * @type {BodyMovementResult || null}
         */
        this.TeacherBodyMovement = null;

        /**
         * 教师是否在屏幕内判断结果
         * @type {TeacherOutScreenResult || null}
         */
        this.TeacherOutScreen = null;

        /**
         * 时间统计结果
         * @type {TimeInfoResult || null}
         */
        this.TimeInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ActionInfo) {
            let obj = new ActionInfo();
            obj.deserialize(params.ActionInfo)
            this.ActionInfo = obj;
        }

        if (params.FaceAttr) {
            let obj = new FaceAttrResult();
            obj.deserialize(params.FaceAttr)
            this.FaceAttr = obj;
        }

        if (params.FaceExpression) {
            let obj = new FaceExpressionResult();
            obj.deserialize(params.FaceExpression)
            this.FaceExpression = obj;
        }

        if (params.FaceIdentify) {
            let obj = new FaceIdentifyResult();
            obj.deserialize(params.FaceIdentify)
            this.FaceIdentify = obj;
        }

        if (params.FaceInfo) {
            let obj = new FaceInfoResult();
            obj.deserialize(params.FaceInfo)
            this.FaceInfo = obj;
        }

        if (params.FacePose) {
            let obj = new FacePoseResult();
            obj.deserialize(params.FacePose)
            this.FacePose = obj;
        }

        if (params.Gesture) {
            let obj = new GestureResult();
            obj.deserialize(params.Gesture)
            this.Gesture = obj;
        }

        if (params.HandTracking) {
            let obj = new HandTrackingResult();
            obj.deserialize(params.HandTracking)
            this.HandTracking = obj;
        }

        if (params.Light) {
            let obj = new LightResult();
            obj.deserialize(params.Light)
            this.Light = obj;
        }

        if (params.StudentBodyMovement) {
            let obj = new StudentBodyMovementResult();
            obj.deserialize(params.StudentBodyMovement)
            this.StudentBodyMovement = obj;
        }

        if (params.TeacherBodyMovement) {
            let obj = new BodyMovementResult();
            obj.deserialize(params.TeacherBodyMovement)
            this.TeacherBodyMovement = obj;
        }

        if (params.TeacherOutScreen) {
            let obj = new TeacherOutScreenResult();
            obj.deserialize(params.TeacherOutScreen)
            this.TeacherOutScreen = obj;
        }

        if (params.TimeInfo) {
            let obj = new TimeInfoResult();
            obj.deserialize(params.TimeInfo)
            this.TimeInfo = obj;
        }

    }
}

/**
 * SubmitImageTaskPlus返回参数结构体
 * @class
 */
class SubmitImageTaskPlusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ResultSet = null;

        /**
         * 任务标识符
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 任务进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 结果总数目
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

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 词汇库中的单词出现在音频中的总次数信息
 * @class
 */
class VocabStatInfomation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单词出现在该音频中总次数
         * @type {Array.<StatInfo> || null}
         */
        this.VocabDetailInfo = null;

        /**
         * 词汇库名称
         * @type {string || null}
         */
        this.VocabLibName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VocabDetailInfo) {
            this.VocabDetailInfo = new Array();
            for (let z in params.VocabDetailInfo) {
                let obj = new StatInfo();
                obj.deserialize(params.VocabDetailInfo[z]);
                this.VocabDetailInfo.push(obj);
            }
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;

    }
}

/**
 * SubmitDoubleVideoHighlights返回参数结构体
 * @class
 */
class SubmitDoubleVideoHighlightsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频拆条任务ID，用来唯一标识视频拆条任务。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 未注册的人员ID列表。若出现此项，代表评估出现了问题，输入的PersonId中有不在库中的人员ID。
         * @type {Array.<string> || null}
         */
        this.NotRegistered = null;

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
        this.NotRegistered = 'NotRegistered' in params ? params.NotRegistered : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 功能开关列表，表示是否需要打开相应的功能，返回相应的信息
 * @class
 */
class Function extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出全部文本标识，当该值设置为true时，会输出当前音频的全部文本
         * @type {boolean || null}
         */
        this.EnableAllText = null;

        /**
         * 输出关键词信息标识，当该值设置为true时，会输出当前音频的关键词信息。
         * @type {boolean || null}
         */
        this.EnableKeyword = null;

        /**
         * 静音检测标识，当设置为 true 时，需要设置静音时间阈值字段mute_threshold，统计结果中会返回静音片段。
         * @type {boolean || null}
         */
        this.EnableMuteDetect = null;

        /**
         * 输出音频统计信息标识，当设置为 true 时，任务查询结果会输出音频的统计信息（AsrStat）
         * @type {boolean || null}
         */
        this.EnableVadInfo = null;

        /**
         * 输出音频音量信息标识，当设置为 true 时，会输出当前音频音量信息。
         * @type {boolean || null}
         */
        this.EnableVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableAllText = 'EnableAllText' in params ? params.EnableAllText : null;
        this.EnableKeyword = 'EnableKeyword' in params ? params.EnableKeyword : null;
        this.EnableMuteDetect = 'EnableMuteDetect' in params ? params.EnableMuteDetect : null;
        this.EnableVadInfo = 'EnableVadInfo' in params ? params.EnableVadInfo : null;
        this.EnableVolume = 'EnableVolume' in params ? params.EnableVolume : null;

    }
}

/**
 * DescribeAudioTask请求参数结构体
 * @class
 */
class DescribeAudioTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeAttendanceResult返回参数结构体
 * @class
 */
class DescribeAttendanceResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缺失人员的ID列表(只针对请求中的libids字段)
         * @type {Array.<AbsenceInfo> || null}
         */
        this.AbsenceSetInLibs = null;

        /**
         * 确定出勤人员列表
         * @type {Array.<AttendanceInfo> || null}
         */
        this.AttendanceSet = null;

        /**
         * 疑似出勤人员列表
         * @type {Array.<SuspectedInfo> || null}
         */
        this.SuspectedSet = null;

        /**
         * 缺失人员的ID列表(只针对请求中的personids字段)
         * @type {Array.<string> || null}
         */
        this.AbsenceSet = null;

        /**
         * 请求处理进度
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

        if (params.AbsenceSetInLibs) {
            this.AbsenceSetInLibs = new Array();
            for (let z in params.AbsenceSetInLibs) {
                let obj = new AbsenceInfo();
                obj.deserialize(params.AbsenceSetInLibs[z]);
                this.AbsenceSetInLibs.push(obj);
            }
        }

        if (params.AttendanceSet) {
            this.AttendanceSet = new Array();
            for (let z in params.AttendanceSet) {
                let obj = new AttendanceInfo();
                obj.deserialize(params.AttendanceSet[z]);
                this.AttendanceSet.push(obj);
            }
        }

        if (params.SuspectedSet) {
            this.SuspectedSet = new Array();
            for (let z in params.SuspectedSet) {
                let obj = new SuspectedInfo();
                obj.deserialize(params.SuspectedSet[z]);
                this.SuspectedSet.push(obj);
            }
        }
        this.AbsenceSet = 'AbsenceSet' in params ? params.AbsenceSet : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 人脸表情统计结果
 * @class
 */
class FaceExpressStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 表情统计结果
         * @type {Array.<ExpressRatioStatistic> || null}
         */
        this.ExpressRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

        if (params.ExpressRatio) {
            this.ExpressRatio = new Array();
            for (let z in params.ExpressRatio) {
                let obj = new ExpressRatioStatistic();
                obj.deserialize(params.ExpressRatio[z]);
                this.ExpressRatio.push(obj);
            }
        }

    }
}

/**
 * AIAssistant请求参数结构体
 * @class
 */
class AIAssistantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，audio_url: 音频文件，picture：图片二进制数据的BASE64编码
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 音频源的语言，默认0为英文，1为中文
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 查询人员库列表
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

        /**
         * 标准化模板选择：0：AI助教基础版本，1：AI评教基础版本，2：AI评教标准版本。AI 助教基础版本功能包括：人脸检索、人脸检测、人脸表情识别、学生动作选项，音频信息分析，微笑识别。AI 评教基础版本功能包括：人脸检索、人脸检测、人脸表情识别、音频信息分析。AI 评教标准版功能包括人脸检索、人脸检测、人脸表情识别、手势识别、音频信息分析、音频关键词分析、视频精彩集锦分析。
         * @type {number || null}
         */
        this.Template = null;

        /**
         * 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

        /**
         * 语音编码类型 1:pcm
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型 1:raw, 2:wav, 3:mp3，10:视频（三种音频格式目前仅支持16k采样率16bit）
         * @type {number || null}
         */
        this.VoiceFileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;
        this.Template = 'Template' in params ? params.Template : null;
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;

    }
}

/**
 * DescribeLibraries请求参数结构体
 * @class
 */
class DescribeLibrariesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * SubmitFullBodyClassTask返回参数结构体
 * @class
 */
class SubmitFullBodyClassTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务直接返回结果，包括： FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 TeacherBodyMovement、TimeInfo
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ImageResults = null;

        /**
         * 任务ID
         * @type {number || null}
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

        if (params.ImageResults) {
            this.ImageResults = new Array();
            for (let z in params.ImageResults) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ImageResults[z]);
                this.ImageResults.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPerson请求参数结构体
 * @class
 */
class ModifyPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 人员工作号码
         * @type {string || null}
         */
        this.JobNumber = null;

        /**
         * 人员邮箱
         * @type {string || null}
         */
        this.Mail = null;

        /**
         * 人员性别
         * @type {number || null}
         */
        this.Male = null;

        /**
         * 人员名称
         * @type {string || null}
         */
        this.PersonName = null;

        /**
         * 人员电话号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 人员学生号码
         * @type {string || null}
         */
        this.StudentNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.JobNumber = 'JobNumber' in params ? params.JobNumber : null;
        this.Mail = 'Mail' in params ? params.Mail : null;
        this.Male = 'Male' in params ? params.Male : null;
        this.PersonName = 'PersonName' in params ? params.PersonName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.StudentNumber = 'StudentNumber' in params ? params.StudentNumber : null;

    }
}

/**
 * DescribeImageTask返回参数结构体
 * @class
 */
class DescribeImageTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务处理结果
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ResultSet = null;

        /**
         * 任务唯一标识
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 任务执行进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务结果数目
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

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标准化接口图像分析结果
 * @class
 */
class StandardAudioResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的当前音频的统计信息。当进度为100时返回。
         * @type {ASRStat || null}
         */
        this.AsrStat = null;

        /**
         * 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。
         * @type {Array.<WholeTextItem> || null}
         */
        this.Texts = null;

        /**
         * 返回词汇库中的单词出现的详细时间信息。
         * @type {Array.<VocabDetailInfomation> || null}
         */
        this.VocabAnalysisDetailInfo = null;

        /**
         * 返回词汇库中的单词出现的次数信息。
         * @type {Array.<VocabStatInfomation> || null}
         */
        this.VocabAnalysisStatInfo = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AsrStat) {
            let obj = new ASRStat();
            obj.deserialize(params.AsrStat)
            this.AsrStat = obj;
        }

        if (params.Texts) {
            this.Texts = new Array();
            for (let z in params.Texts) {
                let obj = new WholeTextItem();
                obj.deserialize(params.Texts[z]);
                this.Texts.push(obj);
            }
        }

        if (params.VocabAnalysisDetailInfo) {
            this.VocabAnalysisDetailInfo = new Array();
            for (let z in params.VocabAnalysisDetailInfo) {
                let obj = new VocabDetailInfomation();
                obj.deserialize(params.VocabAnalysisDetailInfo[z]);
                this.VocabAnalysisDetailInfo.push(obj);
            }
        }

        if (params.VocabAnalysisStatInfo) {
            this.VocabAnalysisStatInfo = new Array();
            for (let z in params.VocabAnalysisStatInfo) {
                let obj = new VocabStatInfomation();
                obj.deserialize(params.VocabAnalysisStatInfo[z]);
                this.VocabAnalysisStatInfo.push(obj);
            }
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * HandTrackingResult
 * @class
 */
class HandTrackingResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果
         * @type {string || null}
         */
        this.Class = null;

        /**
         * 置信度
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 识别结果高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 识别结果左坐标
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 识别结果顶坐标
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 识别结果宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Class = 'Class' in params ? params.Class : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * SubmitOpenClassTask请求参数结构体
 * @class
 */
class SubmitOpenClassTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入分析对象内容，输入数据格式参考FileType参数释义
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址,picture: 图片二进制数据的BASE64编码
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 查询人员库列表，可填写学生们的注册照所在人员库
         * @type {Array.<string> || null}
         */
        this.LibrarySet = null;

        /**
         * 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束
         * @type {number || null}
         */
        this.MaxVideoDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.LibrarySet = 'LibrarySet' in params ? params.LibrarySet : null;
        this.MaxVideoDuration = 'MaxVideoDuration' in params ? params.MaxVideoDuration : null;

    }
}

/**
 * SubmitAudioTask请求参数结构体
 * @class
 */
class SubmitAudioTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频源的语言，默认0为英文，1为中文
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 音频URL。客户请求为URL方式时必须带此字段指名音频的url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 语音编码类型 1:pcm
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型 1:raw, 2:wav, 3:mp3，10:视频（三种音频格式目前仅支持16k采样率16bit）
         * @type {number || null}
         */
        this.VoiceFileType = null;

        /**
         * 功能开关列表，表示是否需要打开相应的功能，返回相应的信息
         * @type {Function || null}
         */
        this.Functions = null;

        /**
         * 视频文件类型，默认点播，直播填 live_url
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 静音阈值设置，如果静音检测开关开启，则静音时间超过这个阈值认为是静音片段，在结果中会返回, 没给的话默认值为3s
         * @type {number || null}
         */
        this.MuteThreshold = null;

        /**
         * 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;

        if (params.Functions) {
            let obj = new Function();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.MuteThreshold = 'MuteThreshold' in params ? params.MuteThreshold : null;
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;

    }
}

/**
 * CreateVocab请求参数结构体
 * @class
 */
class CreateVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要添加词汇的词汇库名
         * @type {string || null}
         */
        this.VocabLibName = null;

        /**
         * 要添加的词汇列表
         * @type {Array.<string> || null}
         */
        this.VocabList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;
        this.VocabList = 'VocabList' in params ? params.VocabList : null;

    }
}

/**
 * TransmitAudioStream请求参数结构体
 * @class
 */
class TransmitAudioStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能开关列表，表示是否需要打开相应的功能，返回相应的信息
         * @type {Function || null}
         */
        this.Functions = null;

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义。
         * @type {number || null}
         */
        this.SeqId = null;

        /**
         * 语音段唯一标识，一个完整语音一个SessionId。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络良好的情况下，建议设置为0.5k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
         * @type {string || null}
         */
        this.UserVoiceData = null;

        /**
         * 语音编码类型 1:pcm。
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 语音文件类型 	1: raw, 2: wav, 3: mp3 (语言文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败)。
         * @type {number || null}
         */
        this.VoiceFileType = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         * @type {number || null}
         */
        this.IsEnd = null;

        /**
         * 音频源的语言，默认0为英文，1为中文
         * @type {number || null}
         */
        this.Lang = null;

        /**
         * 是否临时保存 音频链接
         * @type {number || null}
         */
        this.StorageMode = null;

        /**
         * 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析
         * @type {Array.<string> || null}
         */
        this.VocabLibNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Functions) {
            let obj = new Function();
            obj.deserialize(params.Functions)
            this.Functions = obj;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.StorageMode = 'StorageMode' in params ? params.StorageMode : null;
        this.VocabLibNameList = 'VocabLibNameList' in params ? params.VocabLibNameList : null;

    }
}

/**
 * FaceAttrResult
 * @class
 */
class FaceAttrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 年龄
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Sex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Age = 'Age' in params ? params.Age : null;
        this.Sex = 'Sex' in params ? params.Sex : null;

    }
}

/**
 * SubmitTraditionalClassTask返回参数结构体
 * @class
 */
class SubmitTraditionalClassTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务直接返回结果，包括： ActionInfo、FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 TimeInfo
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ImageResults = null;

        /**
         * 任务ID
         * @type {number || null}
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

        if (params.ImageResults) {
            this.ImageResults = new Array();
            for (let z in params.ImageResults) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ImageResults[z]);
                this.ImageResults.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AIAssistant返回参数结构体
 * @class
 */
class AIAssistantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像任务直接返回结果
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ImageResults = null;

        /**
         * 任务ID
         * @type {number || null}
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

        if (params.ImageResults) {
            this.ImageResults = new Array();
            for (let z in params.ImageResults) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ImageResults[z]);
                this.ImageResults.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitImageTask返回参数结构体
 * @class
 */
class SubmitImageTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果
         * @type {Array.<ImageTaskResult> || null}
         */
        this.ResultSet = null;

        /**
         * 任务标识符
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 任务进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 结果总数目
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

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new ImageTaskResult();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVocabLib请求参数结构体
 * @class
 */
class CreateVocabLibRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词汇库名称
         * @type {string || null}
         */
        this.VocabLibName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;

    }
}

/**
 * CreateLibrary返回参数结构体
 * @class
 */
class CreateLibraryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库唯一标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.LibraryName = null;

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
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.LibraryName = 'LibraryName' in params ? params.LibraryName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FaceIdentifyResult
 * @class
 */
class FaceIdentifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸标识符
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * 人员库标识符
         * @type {string || null}
         */
        this.LibraryId = null;

        /**
         * 人员标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 相似度
         * @type {number || null}
         */
        this.Similarity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Similarity = 'Similarity' in params ? params.Similarity : null;

    }
}

/**
 * SubmitAudioTask返回参数结构体
 * @class
 */
class SubmitAudioTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 	查询结果时指名的jobid。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
         */
        this.JobId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 所有静音片段。
 * @class
 */
class MuteSlice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间。
         * @type {number || null}
         */
        this.MuteBtm = null;

        /**
         * 终止时间。
         * @type {number || null}
         */
        this.MuteEtm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MuteBtm = 'MuteBtm' in params ? params.MuteBtm : null;
        this.MuteEtm = 'MuteEtm' in params ? params.MuteEtm : null;

    }
}

/**
 * DescribeConversationTask请求参数结构体
 * @class
 */
class DescribeConversationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 要查询明细的流的身份，1 老师 2 学生
         * @type {number || null}
         */
        this.Identity = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Identity = 'Identity' in params ? params.Identity : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 词汇库中的单词出现在音频中的那个句子的起始时间和结束时间信息
 * @class
 */
class VocabDetailInfomation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词汇库中的单词出现在该音频中的那个句子的时间戳，出现了几次，就返回对应次数的起始和结束时间戳
         * @type {Array.<DetailInfo> || null}
         */
        this.VocabDetailInfo = null;

        /**
         * 词汇库名
         * @type {string || null}
         */
        this.VocabLibName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VocabDetailInfo) {
            this.VocabDetailInfo = new Array();
            for (let z in params.VocabDetailInfo) {
                let obj = new DetailInfo();
                obj.deserialize(params.VocabDetailInfo[z]);
                this.VocabDetailInfo.push(obj);
            }
        }
        this.VocabLibName = 'VocabLibName' in params ? params.VocabLibName : null;

    }
}

/**
 * CreateLibrary请求参数结构体
 * @class
 */
class CreateLibraryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人员库名称
         * @type {string || null}
         */
        this.LibraryName = null;

        /**
         * 人员库唯一标志符，为空则系统自动生成。
         * @type {string || null}
         */
        this.LibraryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LibraryName = 'LibraryName' in params ? params.LibraryName : null;
        this.LibraryId = 'LibraryId' in params ? params.LibraryId : null;

    }
}

/**
 * FaceInfoResult
 * @class
 */
class FaceInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸尺寸的占比
         * @type {number || null}
         */
        this.FaceRatio = null;

        /**
         * 帧高度
         * @type {number || null}
         */
        this.FrameHeight = null;

        /**
         * 帧宽度
         * @type {number || null}
         */
        this.FrameWidth = null;

        /**
         * 人脸高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 人脸左坐标
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 人脸顶坐标
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 人脸宽度
         * @type {number || null}
         */
        this.Width = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceRatio = 'FaceRatio' in params ? params.FaceRatio : null;
        this.FrameHeight = 'FrameHeight' in params ? params.FrameHeight : null;
        this.FrameWidth = 'FrameWidth' in params ? params.FrameWidth : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Width = 'Width' in params ? params.Width : null;

    }
}

/**
 * 人脸监测统计信息
 * @class
 */
class FaceDetectStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人脸大小占画面平均占比
         * @type {number || null}
         */
        this.FaceSizeRatio = null;

        /**
         * 检测到正脸次数
         * @type {number || null}
         */
        this.FrontalFaceCount = null;

        /**
         * 正脸时长占比
         * @type {number || null}
         */
        this.FrontalFaceRatio = null;

        /**
         * 正脸时长在总出现时常占比
         * @type {number || null}
         */
        this.FrontalFaceRealRatio = null;

        /**
         * 人员唯一标识符
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 检测到侧脸次数
         * @type {number || null}
         */
        this.SideFaceCount = null;

        /**
         * 侧脸时长占比
         * @type {number || null}
         */
        this.SideFaceRatio = null;

        /**
         * 侧脸时长在总出现时常占比
         * @type {number || null}
         */
        this.SideFaceRealRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceSizeRatio = 'FaceSizeRatio' in params ? params.FaceSizeRatio : null;
        this.FrontalFaceCount = 'FrontalFaceCount' in params ? params.FrontalFaceCount : null;
        this.FrontalFaceRatio = 'FrontalFaceRatio' in params ? params.FrontalFaceRatio : null;
        this.FrontalFaceRealRatio = 'FrontalFaceRealRatio' in params ? params.FrontalFaceRealRatio : null;
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.SideFaceCount = 'SideFaceCount' in params ? params.SideFaceCount : null;
        this.SideFaceRatio = 'SideFaceRatio' in params ? params.SideFaceRatio : null;
        this.SideFaceRealRatio = 'SideFaceRealRatio' in params ? params.SideFaceRealRatio : null;

    }
}

module.exports = {
    CreateVocabLibResponse: CreateVocabLibResponse,
    FaceIdentifyStatistic: FaceIdentifyStatistic,
    DetailInfo: DetailInfo,
    SubmitImageTaskPlusRequest: SubmitImageTaskPlusRequest,
    FacePoseResult: FacePoseResult,
    DeleteVocabLibRequest: DeleteVocabLibRequest,
    DescribeAITaskResultRequest: DescribeAITaskResultRequest,
    ActionDurationStatistic: ActionDurationStatistic,
    CreatePersonRequest: CreatePersonRequest,
    LightStatistic: LightStatistic,
    DescribePersonsRequest: DescribePersonsRequest,
    SubmitOneByOneClassTaskRequest: SubmitOneByOneClassTaskRequest,
    CreateVocabResponse: CreateVocabResponse,
    SubmitConversationTaskResponse: SubmitConversationTaskResponse,
    DescribeVocabLibRequest: DescribeVocabLibRequest,
    ActionType: ActionType,
    DescribePersonsResponse: DescribePersonsResponse,
    HLFunction: HLFunction,
    CreateFaceRequest: CreateFaceRequest,
    DescribeImageTaskStatisticRequest: DescribeImageTaskStatisticRequest,
    SubmitCheckAttendanceTaskPlusResponse: SubmitCheckAttendanceTaskPlusResponse,
    SubmitImageTaskRequest: SubmitImageTaskRequest,
    WordTimePair: WordTimePair,
    ModifyLibraryRequest: ModifyLibraryRequest,
    FaceInfo: FaceInfo,
    LightDistributionStatistic: LightDistributionStatistic,
    DeleteLibraryResponse: DeleteLibraryResponse,
    SubmitFullBodyClassTaskRequest: SubmitFullBodyClassTaskRequest,
    LightResult: LightResult,
    DescribeAttendanceResultRequest: DescribeAttendanceResultRequest,
    SubmitOpenClassTaskResponse: SubmitOpenClassTaskResponse,
    WholeTextItem: WholeTextItem,
    SubmitCheckAttendanceTaskPlusRequest: SubmitCheckAttendanceTaskPlusRequest,
    DescribeConversationTaskResponse: DescribeConversationTaskResponse,
    CreatePersonResponse: CreatePersonResponse,
    DescribeImageTaskRequest: DescribeImageTaskRequest,
    HighlightsInfomation: HighlightsInfomation,
    TimeType: TimeType,
    SubmitTraditionalClassTaskRequest: SubmitTraditionalClassTaskRequest,
    DeleteFaceResponse: DeleteFaceResponse,
    SubmitDoubleVideoHighlightsRequest: SubmitDoubleVideoHighlightsRequest,
    ExpressRatioStatistic: ExpressRatioStatistic,
    TransmitAudioStreamResponse: TransmitAudioStreamResponse,
    DeletePersonRequest: DeletePersonRequest,
    DescribeLibrariesResponse: DescribeLibrariesResponse,
    DeleteFaceRequest: DeleteFaceRequest,
    DeleteLibraryRequest: DeleteLibraryRequest,
    DescribePersonResponse: DescribePersonResponse,
    StandardImageResult: StandardImageResult,
    DescribeVocabLibResponse: DescribeVocabLibResponse,
    AttendanceInfo: AttendanceInfo,
    SubmitCheckAttendanceTaskResponse: SubmitCheckAttendanceTaskResponse,
    DeleteVocabResponse: DeleteVocabResponse,
    CheckFacePhotoRequest: CheckFacePhotoRequest,
    TeacherOutScreenResult: TeacherOutScreenResult,
    Word: Word,
    DeleteVocabRequest: DeleteVocabRequest,
    ActionInfo: ActionInfo,
    FaceExpressionResult: FaceExpressionResult,
    StatInfo: StatInfo,
    ActionCountStatistic: ActionCountStatistic,
    GestureResult: GestureResult,
    CreateFaceResponse: CreateFaceResponse,
    BodyMovementResult: BodyMovementResult,
    DescribeAITaskResultResponse: DescribeAITaskResultResponse,
    DescribeAudioTaskResponse: DescribeAudioTaskResponse,
    ActionDurationRatioStatistic: ActionDurationRatioStatistic,
    DescribePersonRequest: DescribePersonRequest,
    StandardVideoResult: StandardVideoResult,
    ModifyLibraryResponse: ModifyLibraryResponse,
    TimeInfoResult: TimeInfoResult,
    SubmitPartialBodyClassTaskResponse: SubmitPartialBodyClassTaskResponse,
    ASRStat: ASRStat,
    TextItem: TextItem,
    CancelTaskRequest: CancelTaskRequest,
    AllMuteSlice: AllMuteSlice,
    DoubleVideoFunction: DoubleVideoFunction,
    SubmitPartialBodyClassTaskRequest: SubmitPartialBodyClassTaskRequest,
    DescribeHighlightResultResponse: DescribeHighlightResultResponse,
    SubmitOneByOneClassTaskResponse: SubmitOneByOneClassTaskResponse,
    LightStandard: LightStandard,
    SubmitHighlightsRequest: SubmitHighlightsRequest,
    ModifyPersonResponse: ModifyPersonResponse,
    PersonInfo: PersonInfo,
    Face: Face,
    Person: Person,
    LightLevelRatioStatistic: LightLevelRatioStatistic,
    DescribeVocabResponse: DescribeVocabResponse,
    DescribeImageTaskStatisticResponse: DescribeImageTaskStatisticResponse,
    SubmitCheckAttendanceTaskRequest: SubmitCheckAttendanceTaskRequest,
    CancelTaskResponse: CancelTaskResponse,
    StudentBodyMovementResult: StudentBodyMovementResult,
    AbsenceInfo: AbsenceInfo,
    ImageTaskFunction: ImageTaskFunction,
    FrameInfo: FrameInfo,
    Library: Library,
    SubmitConversationTaskRequest: SubmitConversationTaskRequest,
    SubmitHighlightsResponse: SubmitHighlightsResponse,
    DeletePersonResponse: DeletePersonResponse,
    ImageTaskStatistic: ImageTaskStatistic,
    SuspectedInfo: SuspectedInfo,
    CheckFacePhotoResponse: CheckFacePhotoResponse,
    ActionStatistic: ActionStatistic,
    DescribeHighlightResultRequest: DescribeHighlightResultRequest,
    DescribeVocabRequest: DescribeVocabRequest,
    DeleteVocabLibResponse: DeleteVocabLibResponse,
    ImageTaskResult: ImageTaskResult,
    SubmitImageTaskPlusResponse: SubmitImageTaskPlusResponse,
    VocabStatInfomation: VocabStatInfomation,
    SubmitDoubleVideoHighlightsResponse: SubmitDoubleVideoHighlightsResponse,
    Function: Function,
    DescribeAudioTaskRequest: DescribeAudioTaskRequest,
    DescribeAttendanceResultResponse: DescribeAttendanceResultResponse,
    FaceExpressStatistic: FaceExpressStatistic,
    AIAssistantRequest: AIAssistantRequest,
    DescribeLibrariesRequest: DescribeLibrariesRequest,
    SubmitFullBodyClassTaskResponse: SubmitFullBodyClassTaskResponse,
    ModifyPersonRequest: ModifyPersonRequest,
    DescribeImageTaskResponse: DescribeImageTaskResponse,
    StandardAudioResult: StandardAudioResult,
    HandTrackingResult: HandTrackingResult,
    SubmitOpenClassTaskRequest: SubmitOpenClassTaskRequest,
    SubmitAudioTaskRequest: SubmitAudioTaskRequest,
    CreateVocabRequest: CreateVocabRequest,
    TransmitAudioStreamRequest: TransmitAudioStreamRequest,
    FaceAttrResult: FaceAttrResult,
    SubmitTraditionalClassTaskResponse: SubmitTraditionalClassTaskResponse,
    AIAssistantResponse: AIAssistantResponse,
    SubmitImageTaskResponse: SubmitImageTaskResponse,
    CreateVocabLibRequest: CreateVocabLibRequest,
    CreateLibraryResponse: CreateLibraryResponse,
    FaceIdentifyResult: FaceIdentifyResult,
    SubmitAudioTaskResponse: SubmitAudioTaskResponse,
    MuteSlice: MuteSlice,
    DescribeConversationTaskRequest: DescribeConversationTaskRequest,
    VocabDetailInfomation: VocabDetailInfomation,
    CreateLibraryRequest: CreateLibraryRequest,
    FaceInfoResult: FaceInfoResult,
    FaceDetectStatistic: FaceDetectStatistic,

}
