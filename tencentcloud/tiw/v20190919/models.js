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
 * 混流画布参数
 * @class
 */
class Canvas extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流画布宽高配置
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
         * @type {string || null}
         */
        this.BackgroundColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;

    }
}

/**
 * 自定义混流配置布局参数
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流画面宽，取值范围[2,3000]
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 流画面高，取值范围[2,3000]
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 当前画面左上角顶点相对于Canvas左上角顶点的x轴偏移量，默认为0，取值范围[0,3000]
         * @type {number || null}
         */
        this.X = null;

        /**
         * 当前画面左上角顶点相对于Canvas左上角顶点的y轴偏移量，默认为0， 取值范围[0,3000]
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 画面z轴位置，默认为0
z轴确定了重叠画面的遮盖顺序，z轴值大的画面处于顶层
         * @type {number || null}
         */
        this.ZOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;

    }
}

/**
 * SetVideoGenerationTaskCallback请求参数结构体
 * @class
 */
class SetVideoGenerationTaskCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 课后录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * 指定流录制的控制参数，比如是否禁用音频、视频是录制大画面还是录制小画面等
 * @class
 */
class StreamControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流ID
视频流ID的取值含义如下：
1. tic_record_user - 表示白板视频流
2. tic_substream - 表示辅路视频流
3. 特定用户ID - 表示指定用户的视频流

在实际录制过程中，视频流ID的匹配规则为前缀匹配，只要真实流ID的前缀与指定的流ID一致就认为匹配成功。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 设置是否对此路流开启录制。

true - 表示不对这路流进行录制，录制结果将不包含这路流的视频。
false - 表示需要对这路流进行录制，录制结果会包含这路流的视频。

默认为 false。
         * @type {boolean || null}
         */
        this.DisableRecord = null;

        /**
         * 设置是否禁用这路流的音频录制。

true - 表示不对这路流的音频进行录制，录制结果里这路流的视频将会没有声音。
false - 录制视频会保留音频，如果设置为true，则录制视频会丢弃这路流的音频。

默认为 false。
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * 设置当前流录制视频是否只录制小画面。

true - 录制小画面。设置为true时，请确保上行端同时上行了小画面，否则录制视频可能是黑屏。
false - 录制大画面。

默认为 false。
         * @type {boolean || null}
         */
        this.PullSmallVideo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.PullSmallVideo = 'PullSmallVideo' in params ? params.PullSmallVideo : null;

    }
}

/**
 * StopOnlineRecord返回参数结构体
 * @class
 */
class StopOnlineRecordResponse extends  AbstractModel {
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
 * SetVideoGenerationTaskCallbackKey请求参数结构体
 * @class
 */
class SetVideoGenerationTaskCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 设置视频生成回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * 拼接视频中被忽略的时间段
 * @class
 */
class OmittedDuration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制暂停时间戳对应的视频播放时间(单位: 毫秒)
         * @type {number || null}
         */
        this.VideoTime = null;

        /**
         * 录制暂停时间戳(单位: 毫秒)
         * @type {number || null}
         */
        this.PauseTime = null;

        /**
         * 录制恢复时间戳(单位: 毫秒)
         * @type {number || null}
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoTime = 'VideoTime' in params ? params.VideoTime : null;
        this.PauseTime = 'PauseTime' in params ? params.PauseTime : null;
        this.ResumeTime = 'ResumeTime' in params ? params.ResumeTime : null;

    }
}

/**
 * DescribeVideoGenerationTaskCallback返回参数结构体
 * @class
 */
class DescribeVideoGenerationTaskCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制视频生成回调地址
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * 录制视频生成回调鉴权密钥
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResumeOnlineRecord返回参数结构体
 * @class
 */
class ResumeOnlineRecordResponse extends  AbstractModel {
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
 * SetVideoGenerationTaskCallback返回参数结构体
 * @class
 */
class SetVideoGenerationTaskCallbackResponse extends  AbstractModel {
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
 * StartOnlineRecord请求参数结构体
 * @class
 */
class StartOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 需要录制的房间号，取值范围: (1, 4294967295)
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 用于录制服务进房的用户ID，格式为`tic_record_user_${RoomId}_${Random}`，其中 `${RoomId} `与录制房间号对应，`${Random}`为一个随机字符串。
该ID必须是一个单独的未在SDK中使用的ID，录制服务使用这个用户ID进入房间进行音视频与白板录制，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常录制。
         * @type {string || null}
         */
        this.RecordUserId = null;

        /**
         * 与RecordUserId对应的签名
         * @type {string || null}
         */
        this.RecordUserSig = null;

        /**
         * （已废弃，设置无效）白板的 IM 群组 Id，默认同房间号
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 录制视频拼接参数
         * @type {Concat || null}
         */
        this.Concat = null;

        /**
         * 录制白板参数，例如白板宽高等
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * 录制混流参数
特别说明：
1. 混流功能需要根据额外开通， 请联系腾讯云互动白板客服人员
2. 使用混流功能，必须提供 Extras 参数，且 Extras 参数中必须包含 "MIX_STREAM"
         * @type {MixStream || null}
         */
        this.MixStream = null;

        /**
         * 使用到的高级功能列表
可以选值列表：
MIX_STREAM - 混流功能
         * @type {Array.<string> || null}
         */
        this.Extras = null;

        /**
         * 是否需要在结果回调中返回各路流的纯音频录制文件，文件格式为mp3
         * @type {boolean || null}
         */
        this.AudioFileNeeded = null;

        /**
         * 录制控制参数，用于更精细地指定需要录制哪些流，某一路流是否禁用音频，是否只录制小画面等
         * @type {RecordControl || null}
         */
        this.RecordControl = null;

        /**
         * 录制模式

REALTIME_MODE - 实时录制模式（默认）
VIDEO_GENERATION_MODE - 视频生成模式（内测中，需邮件申请开通）
         * @type {string || null}
         */
        this.RecordMode = null;

        /**
         * 聊天群组ID，此字段仅适用于`视频生成模式`

在`视频生成模式`下，默认会记录白板群组内的非白板信令消息，如果指定了`ChatGroupId`，则会记录指定群ID的聊天消息。
         * @type {string || null}
         */
        this.ChatGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordUserSig = 'RecordUserSig' in params ? params.RecordUserSig : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.Concat) {
            let obj = new Concat();
            obj.deserialize(params.Concat)
            this.Concat = obj;
        }

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }
        this.Extras = 'Extras' in params ? params.Extras : null;
        this.AudioFileNeeded = 'AudioFileNeeded' in params ? params.AudioFileNeeded : null;

        if (params.RecordControl) {
            let obj = new RecordControl();
            obj.deserialize(params.RecordControl)
            this.RecordControl = obj;
        }
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;
        this.ChatGroupId = 'ChatGroupId' in params ? params.ChatGroupId : null;

    }
}

/**
 * DescribeOnlineRecordCallback请求参数结构体
 * @class
 */
class DescribeOnlineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeOnlineRecordCallback返回参数结构体
 * @class
 */
class DescribeOnlineRecordCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时录制事件回调地址，如果未设置回调地址，该字段为空字符串
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * 实时录制回调鉴权密钥
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallback返回参数结构体
 * @class
 */
class SetTranscodeCallbackResponse extends  AbstractModel {
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
 * StopOnlineRecord请求参数结构体
 * @class
 */
class StopOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 需要停止录制的任务 Id
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SetVideoGenerationTaskCallbackKey返回参数结构体
 * @class
 */
class SetVideoGenerationTaskCallbackKeyResponse extends  AbstractModel {
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
 * CreateTranscode返回参数结构体
 * @class
 */
class CreateTranscodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档转码任务的唯一标识Id，用于查询该任务的进度以及转码结果
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
 * DescribeVideoGenerationTask返回参数结构体
 * @class
 */
class DescribeVideoGenerationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务对应的群组Id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 任务对应的房间号
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 任务的Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 已废弃
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 录制视频生成任务状态
- QUEUED: 正在排队
- PROCESSING: 正在生成视频
- FINISHED: 生成视频结束（成功完成或失败结束，可以通过错误码和错误信息进一步判断）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 回放视频总时长,单位：毫秒
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * 已废弃，请使用`VideoInfoList`参数
         * @type {VideoInfo || null}
         */
        this.VideoInfos = null;

        /**
         * 录制视频生成视频列表
         * @type {Array.<VideoInfo> || null}
         */
        this.VideoInfoList = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;

        if (params.VideoInfos) {
            let obj = new VideoInfo();
            obj.deserialize(params.VideoInfos)
            this.VideoInfos = obj;
        }

        if (params.VideoInfoList) {
            this.VideoInfoList = new Array();
            for (let z in params.VideoInfoList) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfoList[z]);
                this.VideoInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视频信息
 * @class
 */
class VideoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频开始播放的时间（单位：毫秒）
         * @type {number || null}
         */
        this.VideoPlayTime = null;

        /**
         * 视频大小（字节）
         * @type {number || null}
         */
        this.VideoSize = null;

        /**
         * 视频格式
         * @type {string || null}
         */
        this.VideoFormat = null;

        /**
         * 视频播放时长（单位：毫秒）
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * 视频文件URL
         * @type {string || null}
         */
        this.VideoUrl = null;

        /**
         * 视频文件Id
         * @type {string || null}
         */
        this.VideoId = null;

        /**
         * 视频流类型 
- 0：摄像头视频 
- 1：屏幕分享视频
- 2：白板视频 
- 3：混流视频
- 4：纯音频（mp3)
         * @type {number || null}
         */
        this.VideoType = null;

        /**
         * 摄像头/屏幕分享视频所属用户的 Id（白板视频为空、混流视频tic_mixstream_房间号_混流布局类型、辅路视频tic_substream_用户Id）
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 视频分辨率的宽
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频分辨率的高
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
        this.VideoPlayTime = 'VideoPlayTime' in params ? params.VideoPlayTime : null;
        this.VideoSize = 'VideoSize' in params ? params.VideoSize : null;
        this.VideoFormat = 'VideoFormat' in params ? params.VideoFormat : null;
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.VideoUrl = 'VideoUrl' in params ? params.VideoUrl : null;
        this.VideoId = 'VideoId' in params ? params.VideoId : null;
        this.VideoType = 'VideoType' in params ? params.VideoType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * 自定义混流布局参数
 * @class
 */
class CustomLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流画布参数
         * @type {Canvas || null}
         */
        this.Canvas = null;

        /**
         * 流布局参数，每路流的布局不能超出画布区域
         * @type {Array.<StreamLayout> || null}
         */
        this.InputStreamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Canvas) {
            let obj = new Canvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.InputStreamList) {
            this.InputStreamList = new Array();
            for (let z in params.InputStreamList) {
                let obj = new StreamLayout();
                obj.deserialize(params.InputStreamList[z]);
                this.InputStreamList.push(obj);
            }
        }

    }
}

/**
 * SetTranscodeCallbackKey返回参数结构体
 * @class
 */
class SetTranscodeCallbackKeyResponse extends  AbstractModel {
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
 * 实时录制视频拼接参数
 * @class
 */
class Concat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启拼接功能
在开启了视频拼接功能的情况下，实时录制服务会把同一个用户因为暂停导致的多段视频拼接成一个视频
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 视频拼接时使用的垫片图片下载地址，不填默认用全黑的图片进行视频垫片
         * @type {string || null}
         */
        this.Image = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Image = 'Image' in params ? params.Image : null;

    }
}

/**
 * DescribeOnlineRecord请求参数结构体
 * @class
 */
class DescribeOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 实时录制任务Id
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * StartOnlineRecord返回参数结构体
 * @class
 */
class StartOnlineRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制任务Id
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
 * 实时录制白板参数，例如白板宽高等
 * @class
 */
class Whiteboard extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实时录制结果里白板视频宽，默认为1280
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 实时录制结果里白板视频高，默认为960
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 白板初始化参数，透传到白板 SDK
         * @type {string || null}
         */
        this.InitParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.InitParam = 'InitParam' in params ? params.InitParam : null;

    }
}

/**
 * DescribeVideoGenerationTask请求参数结构体
 * @class
 */
class DescribeVideoGenerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 录制视频生成的任务Id
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreateVideoGenerationTask返回参数结构体
 * @class
 */
class CreateVideoGenerationTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频生成的任务Id
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
 * PauseOnlineRecord返回参数结构体
 * @class
 */
class PauseOnlineRecordResponse extends  AbstractModel {
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
 * CreateTranscode请求参数结构体
 * @class
 */
class CreateTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 需要进行转码文件地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 是否为静态PPT，默认为False；
如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片；
         * @type {boolean || null}
         */
        this.IsStaticPPT = null;

        /**
         * 转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率

注意分辨率宽高中间为英文字母"xyz"的"x"
         * @type {string || null}
         */
        this.MinResolution = null;

        /**
         * 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图，分辨率格式同MinResolution

静态转码这个参数不起作用
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * 转码文件压缩格式，不传、传空字符串或不是指定的格式则不生成压缩文件，目前支持如下压缩格式：

zip： 生成`.zip`压缩包
tar.gz： 生成`.tar.gz`压缩包
         * @type {string || null}
         */
        this.CompressFileType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.IsStaticPPT = 'IsStaticPPT' in params ? params.IsStaticPPT : null;
        this.MinResolution = 'MinResolution' in params ? params.MinResolution : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileType = 'CompressFileType' in params ? params.CompressFileType : null;

    }
}

/**
 * SetOnlineRecordCallbackKey返回参数结构体
 * @class
 */
class SetOnlineRecordCallbackKeyResponse extends  AbstractModel {
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
 * DescribeOnlineRecord返回参数结构体
 * @class
 */
class DescribeOnlineRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止录制
- USER_CALL: 主动调用了停止录制接口
- EXCEPTION: 录制异常结束
         * @type {string || null}
         */
        this.FinishReason = null;

        /**
         * 需要查询结果的录制任务Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 录制任务状态
- PREPARED: 表示录制正在准备中（进房/启动录制服务等操作）
- RECORDING: 表示录制已开始
- PAUSED: 表示录制已暂停
- STOPPED: 表示录制已停止，正在处理并上传视频
- FINISHED: 表示视频处理并上传完成，成功生成录制结果
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 房间号
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 白板的群组 Id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 录制用户Id
         * @type {string || null}
         */
        this.RecordUserId = null;

        /**
         * 实际开始录制时间，Unix 时间戳，单位秒
         * @type {number || null}
         */
        this.RecordStartTime = null;

        /**
         * 实际停止录制时间，Unix 时间戳，单位秒
         * @type {number || null}
         */
        this.RecordStopTime = null;

        /**
         * 回放视频总时长（单位：毫秒）
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * 录制过程中出现异常的次数
         * @type {number || null}
         */
        this.ExceptionCnt = null;

        /**
         * 拼接视频中被忽略的时间段，只有开启视频拼接功能的时候，这个参数才是有效的
         * @type {Array.<OmittedDuration> || null}
         */
        this.OmittedDurations = null;

        /**
         * 录制视频列表
         * @type {Array.<VideoInfo> || null}
         */
        this.VideoInfos = null;

        /**
         * 回放URL，需配合信令播放器使用。此字段仅适用于`视频生成模式`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReplayUrl = null;

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
        this.FinishReason = 'FinishReason' in params ? params.FinishReason : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordUserId = 'RecordUserId' in params ? params.RecordUserId : null;
        this.RecordStartTime = 'RecordStartTime' in params ? params.RecordStartTime : null;
        this.RecordStopTime = 'RecordStopTime' in params ? params.RecordStopTime : null;
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.ExceptionCnt = 'ExceptionCnt' in params ? params.ExceptionCnt : null;

        if (params.OmittedDurations) {
            this.OmittedDurations = new Array();
            for (let z in params.OmittedDurations) {
                let obj = new OmittedDuration();
                obj.deserialize(params.OmittedDurations[z]);
                this.OmittedDurations.push(obj);
            }
        }

        if (params.VideoInfos) {
            this.VideoInfos = new Array();
            for (let z in params.VideoInfos) {
                let obj = new VideoInfo();
                obj.deserialize(params.VideoInfos[z]);
                this.VideoInfos.push(obj);
            }
        }
        this.ReplayUrl = 'ReplayUrl' in params ? params.ReplayUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallbackKey请求参数结构体
 * @class
 */
class SetTranscodeCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 设置文档转码回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * DescribeTranscode请求参数结构体
 * @class
 */
class DescribeTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 文档转码任务的唯一标识Id
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTranscode返回参数结构体
 * @class
 */
class DescribeTranscodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档的总页数
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 转码的当前进度,取值范围为0~100
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 文档的分辨率
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 转码完成后结果的URL
动态转码：PPT转动态H5的链接
静态转码：文档每一页的图片URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/`，那么文档第1页的图片URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推
         * @type {string || null}
         */
        this.ResultUrl = null;

        /**
         * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 转码任务的唯一标识Id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 文档的文件名
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 缩略图URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/ `，那么动态PPT第1页的缩略图URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推

如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串
         * @type {string || null}
         */
        this.ThumbnailUrl = null;

        /**
         * 动态转码缩略图生成分辨率
         * @type {string || null}
         */
        this.ThumbnailResolution = null;

        /**
         * 转码压缩文件下载的URL，如果发起文档转码请求参数中`CompressFileType`为空或者不是支持的压缩格式，该参数为空字符串
         * @type {string || null}
         */
        this.CompressFileUrl = null;

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
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ResultUrl = 'ResultUrl' in params ? params.ResultUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.ThumbnailUrl = 'ThumbnailUrl' in params ? params.ThumbnailUrl : null;
        this.ThumbnailResolution = 'ThumbnailResolution' in params ? params.ThumbnailResolution : null;
        this.CompressFileUrl = 'CompressFileUrl' in params ? params.CompressFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流布局参数
 * @class
 */
class StreamLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流布局配置参数
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 视频流ID
流ID的取值含义如下：
1. tic_record_user - 表示当前画面用于显示白板视频流
2. tic_substream - 表示当前画面用于显示辅路视频流
3. 特定用户ID - 表示当前画面用于显示指定用户的视频流
4. 不填 - 表示当前画面用于备选，当有新的视频流加入时，会从这些备选的空位中选择一个没有被占用的位置来显示新的视频流画面
         * @type {string || null}
         */
        this.InputStreamId = null;

        /**
         * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
         * @type {string || null}
         */
        this.BackgroundColor = null;

        /**
         * 视频画面填充模式。

0 - 自适应模式，对视频画面进行等比例缩放，在指定区域内显示完整的画面。此模式可能存在黑边。
1 - 全屏模式，对视频画面进行等比例缩放，让画面填充满整个指定区域。此模式不会存在黑边，但会将超出区域的那一部分画面裁剪掉。
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

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }
        this.InputStreamId = 'InputStreamId' in params ? params.InputStreamId : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;
        this.FillMode = 'FillMode' in params ? params.FillMode : null;

    }
}

/**
 * SetOnlineRecordCallback返回参数结构体
 * @class
 */
class SetOnlineRecordCallbackResponse extends  AbstractModel {
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
 * SetOnlineRecordCallbackKey请求参数结构体
 * @class
 */
class SetOnlineRecordCallbackKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 设置实时录制回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
         * @type {string || null}
         */
        this.CallbackKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;

    }
}

/**
 * CreateVideoGenerationTask请求参数结构体
 * @class
 */
class CreateVideoGenerationTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制任务的TaskId
         * @type {string || null}
         */
        this.OnlineRecordTaskId = null;

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 视频生成的白板参数，例如白板宽高等。

此参数与开始录制接口提供的Whiteboard参数互斥，在本接口与开始录制接口都提供了Whiteboard参数时，优先使用本接口指定的Whiteboard参数进行视频生成，否则使用开始录制接口提供的Whiteboard参数进行视频生成。
         * @type {Whiteboard || null}
         */
        this.Whiteboard = null;

        /**
         * 视频拼接参数

此参数与开始录制接口提供的Concat参数互斥，在本接口与开始录制接口都提供了Concat参数时，优先使用本接口指定的Concat参数进行视频拼接，否则使用开始录制接口提供的Concat参数进行视频拼接。
         * @type {Concat || null}
         */
        this.Concat = null;

        /**
         * 视频生成混流参数

此参数与开始录制接口提供的MixStream参数互斥，在本接口与开始录制接口都提供了MixStream参数时，优先使用本接口指定的MixStream参数进行视频混流，否则使用开始录制接口提供的MixStream参数进行视频拼混流。
         * @type {MixStream || null}
         */
        this.MixStream = null;

        /**
         * 视频生成控制参数，用于更精细地指定需要生成哪些流，某一路流是否禁用音频，是否只录制小画面等

此参数与开始录制接口提供的RecordControl参数互斥，在本接口与开始录制接口都提供了RecordControl参数时，优先使用本接口指定的RecordControl参数进行视频生成控制，否则使用开始录制接口提供的RecordControl参数进行视频拼生成控制。
         * @type {RecordControl || null}
         */
        this.RecordControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OnlineRecordTaskId = 'OnlineRecordTaskId' in params ? params.OnlineRecordTaskId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Whiteboard) {
            let obj = new Whiteboard();
            obj.deserialize(params.Whiteboard)
            this.Whiteboard = obj;
        }

        if (params.Concat) {
            let obj = new Concat();
            obj.deserialize(params.Concat)
            this.Concat = obj;
        }

        if (params.MixStream) {
            let obj = new MixStream();
            obj.deserialize(params.MixStream)
            this.MixStream = obj;
        }

        if (params.RecordControl) {
            let obj = new RecordControl();
            obj.deserialize(params.RecordControl)
            this.RecordControl = obj;
        }

    }
}

/**
 * DescribeTranscodeCallback请求参数结构体
 * @class
 */
class DescribeTranscodeCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * ResumeOnlineRecord请求参数结构体
 * @class
 */
class ResumeOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 恢复录制的实时录制任务 Id
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTranscodeCallback返回参数结构体
 * @class
 */
class DescribeTranscodeCallbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文档转码回调地址
         * @type {string || null}
         */
        this.Callback = null;

        /**
         * 文档转码回调鉴权密钥
         * @type {string || null}
         */
        this.CallbackKey = null;

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
        this.Callback = 'Callback' in params ? params.Callback : null;
        this.CallbackKey = 'CallbackKey' in params ? params.CallbackKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTranscodeCallback请求参数结构体
 * @class
 */
class SetTranscodeCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 文档转码进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。
回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * 录制控制参数， 用于指定全局录制控制及具体流录制控制参数，比如设置需要对哪些流进行录制，是否只录制小画面等
 * @class
 */
class RecordControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置是否开启录制控制参数，只有设置为true的时候，录制控制参数才生效。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 设置是否禁用录制的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流都不录制。
false - 所有流都录制。默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
         * @type {boolean || null}
         */
        this.DisableRecord = null;

        /**
         * 设置是否禁用所有流的音频录制的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流的录制都不对音频进行录制。
false - 所有流的录制都需要对音频进行录制。默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * 设置是否所有流都只录制小画面的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流都只录制小画面。设置为true时，请确保上行端在推流的时候同时上行了小画面，否则录制视频可能是黑屏。
false - 所有流都录制大画面，默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
         * @type {boolean || null}
         */
        this.PullSmallVideo = null;

        /**
         * 针对具体流指定控制参数，如果列表为空，则所有流采用全局配置的控制参数进行录制。列表不为空，则列表中指定的流将优先按此列表指定的控制参数进行录制。
         * @type {Array.<StreamControl> || null}
         */
        this.StreamControls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableRecord = 'DisableRecord' in params ? params.DisableRecord : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.PullSmallVideo = 'PullSmallVideo' in params ? params.PullSmallVideo : null;

        if (params.StreamControls) {
            this.StreamControls = new Array();
            for (let z in params.StreamControls) {
                let obj = new StreamControl();
                obj.deserialize(params.StreamControls[z]);
                this.StreamControls.push(obj);
            }
        }

    }
}

/**
 * SetOnlineRecordCallback请求参数结构体
 * @class
 */
class SetOnlineRecordCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 实时录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
         * @type {string || null}
         */
        this.Callback = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Callback = 'Callback' in params ? params.Callback : null;

    }
}

/**
 * 混流配置
 * @class
 */
class MixStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启混流
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 是否禁用音频混流
         * @type {boolean || null}
         */
        this.DisableAudio = null;

        /**
         * 内置混流布局模板ID, 取值 [1, 2], 区别见内置混流布局模板样式示例说明
在没有填Custom字段时候，ModelId是必填的
         * @type {number || null}
         */
        this.ModelId = null;

        /**
         * 老师用户ID
此字段只有在ModelId填了的情况下生效
填写TeacherId的效果是把指定为TeacherId的用户视频流显示在内置模板的第一个小画面中
         * @type {string || null}
         */
        this.TeacherId = null;

        /**
         * 自定义混流布局参数
当此字段存在时，ModelId 及 TeacherId 字段将被忽略
         * @type {CustomLayout || null}
         */
        this.Custom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.DisableAudio = 'DisableAudio' in params ? params.DisableAudio : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.TeacherId = 'TeacherId' in params ? params.TeacherId : null;

        if (params.Custom) {
            let obj = new CustomLayout();
            obj.deserialize(params.Custom)
            this.Custom = obj;
        }

    }
}

/**
 * DescribeVideoGenerationTaskCallback请求参数结构体
 * @class
 */
class DescribeVideoGenerationTaskCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * PauseOnlineRecord请求参数结构体
 * @class
 */
class PauseOnlineRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的SdkAppId
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 实时录制任务 Id
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

module.exports = {
    Canvas: Canvas,
    LayoutParams: LayoutParams,
    SetVideoGenerationTaskCallbackRequest: SetVideoGenerationTaskCallbackRequest,
    StreamControl: StreamControl,
    StopOnlineRecordResponse: StopOnlineRecordResponse,
    SetVideoGenerationTaskCallbackKeyRequest: SetVideoGenerationTaskCallbackKeyRequest,
    OmittedDuration: OmittedDuration,
    DescribeVideoGenerationTaskCallbackResponse: DescribeVideoGenerationTaskCallbackResponse,
    ResumeOnlineRecordResponse: ResumeOnlineRecordResponse,
    SetVideoGenerationTaskCallbackResponse: SetVideoGenerationTaskCallbackResponse,
    StartOnlineRecordRequest: StartOnlineRecordRequest,
    DescribeOnlineRecordCallbackRequest: DescribeOnlineRecordCallbackRequest,
    DescribeOnlineRecordCallbackResponse: DescribeOnlineRecordCallbackResponse,
    SetTranscodeCallbackResponse: SetTranscodeCallbackResponse,
    StopOnlineRecordRequest: StopOnlineRecordRequest,
    SetVideoGenerationTaskCallbackKeyResponse: SetVideoGenerationTaskCallbackKeyResponse,
    CreateTranscodeResponse: CreateTranscodeResponse,
    DescribeVideoGenerationTaskResponse: DescribeVideoGenerationTaskResponse,
    VideoInfo: VideoInfo,
    CustomLayout: CustomLayout,
    SetTranscodeCallbackKeyResponse: SetTranscodeCallbackKeyResponse,
    Concat: Concat,
    DescribeOnlineRecordRequest: DescribeOnlineRecordRequest,
    StartOnlineRecordResponse: StartOnlineRecordResponse,
    Whiteboard: Whiteboard,
    DescribeVideoGenerationTaskRequest: DescribeVideoGenerationTaskRequest,
    CreateVideoGenerationTaskResponse: CreateVideoGenerationTaskResponse,
    PauseOnlineRecordResponse: PauseOnlineRecordResponse,
    CreateTranscodeRequest: CreateTranscodeRequest,
    SetOnlineRecordCallbackKeyResponse: SetOnlineRecordCallbackKeyResponse,
    DescribeOnlineRecordResponse: DescribeOnlineRecordResponse,
    SetTranscodeCallbackKeyRequest: SetTranscodeCallbackKeyRequest,
    DescribeTranscodeRequest: DescribeTranscodeRequest,
    DescribeTranscodeResponse: DescribeTranscodeResponse,
    StreamLayout: StreamLayout,
    SetOnlineRecordCallbackResponse: SetOnlineRecordCallbackResponse,
    SetOnlineRecordCallbackKeyRequest: SetOnlineRecordCallbackKeyRequest,
    CreateVideoGenerationTaskRequest: CreateVideoGenerationTaskRequest,
    DescribeTranscodeCallbackRequest: DescribeTranscodeCallbackRequest,
    ResumeOnlineRecordRequest: ResumeOnlineRecordRequest,
    DescribeTranscodeCallbackResponse: DescribeTranscodeCallbackResponse,
    SetTranscodeCallbackRequest: SetTranscodeCallbackRequest,
    RecordControl: RecordControl,
    SetOnlineRecordCallbackRequest: SetOnlineRecordCallbackRequest,
    MixStream: MixStream,
    DescribeVideoGenerationTaskCallbackRequest: DescribeVideoGenerationTaskCallbackRequest,
    PauseOnlineRecordRequest: PauseOnlineRecordRequest,

}
