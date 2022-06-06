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
 * DismissRoomByStrRoomId请求参数结构体
 * @class
 */
class DismissRoomByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {string || null}
         */
        this.RoomId = null;

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

    }
}

/**
 * DescribeAbnormalEvent返回参数结构体
 * @class
 */
class DescribeAbnormalEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 异常体验列表
         * @type {Array.<AbnormalExperience> || null}
         */
        this.AbnormalExperienceList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.AbnormalExperienceList) {
            this.AbnormalExperienceList = new Array();
            for (let z in params.AbnormalExperienceList) {
                let obj = new AbnormalExperience();
                obj.deserialize(params.AbnormalExperienceList[z]);
                this.AbnormalExperienceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 第三方云存储的账号信息。
 * @class
 */
class CloudStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方云储存的供应商:
0：腾讯云存储 COS，暂不支持其他家。
         * @type {number || null}
         */
        this.Vendor = null;

        /**
         * 第三方云存储的地域信息。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 第三方存储桶信息。
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 第三方存储的access_key账号信息。
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * 第三方存储的secret_key账号信息。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 第三方云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围a~z,A~Z,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。
         * @type {Array.<string> || null}
         */
        this.FileNamePrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vendor = 'Vendor' in params ? params.Vendor : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.FileNamePrefix = 'FileNamePrefix' in params ? params.FileNamePrefix : null;

    }
}

/**
 * DescribeAbnormalEvent请求参数结构体
 * @class
 */
class DescribeAbnormalEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户SDKAppID，查询SDKAppID下任意20条异常体验事件（可能不同房间）
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询开始时间,本地unix时间戳（1592448600s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间,本地unix时间戳（1592449080s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 房间号，查询房间内任意20条以内异常体验事件
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * 查询旁路转码计费时长。
查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
 * @class
 */
class SdkAppIdTrtcMcuTranscodeTimeUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本组数据对应的时间点，格式如：2020-09-07或2020-09-07 00:05:05。
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * 语音时长，单位：秒。
         * @type {number || null}
         */
        this.AudioTime = null;

        /**
         * 视频时长-标清SD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeSd = null;

        /**
         * 视频时长-高清HD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeHd = null;

        /**
         * 视频时长-全高清FHD，单位：秒。
         * @type {number || null}
         */
        this.VideoTimeFhd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.AudioTime = 'AudioTime' in params ? params.AudioTime : null;
        this.VideoTimeSd = 'VideoTimeSd' in params ? params.VideoTimeSd : null;
        this.VideoTimeHd = 'VideoTimeHd' in params ? params.VideoTimeHd : null;
        this.VideoTimeFhd = 'VideoTimeFhd' in params ? params.VideoTimeFhd : null;

    }
}

/**
 * ModifyPicture返回参数结构体
 * @class
 */
class ModifyPictureResponse extends  AbstractModel {
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
 * RemoveUser请求参数结构体
 * @class
 */
class RemoveUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 要移出的用户列表，最多10个。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

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
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * DescribeCloudRecording返回参数结构体
 * @class
 */
class DescribeCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制任务的唯一Id。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 云端录制任务的状态信息。
Idle：表示当前录制任务空闲中
InProgress：表示当前录制任务正在进行中。
Exited：表示当前录制任务正在退出的过程中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 录制文件信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StorageFile> || null}
         */
        this.StorageFileList = null;

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
        this.Status = 'Status' in params ? params.Status : null;

        if (params.StorageFileList) {
            this.StorageFileList = new Array();
            for (let z in params.StorageFileList) {
                let obj = new StorageFile();
                obj.deserialize(params.StorageFileList[z]);
                this.StorageFileList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回的质量数据，时间:值
 * @class
 */
class TimeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间，unix时间戳（1590065877s)
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 当前时间返回参数取值，如（bigvCapFps在1590065877取值为0，则Value：0 ）
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
 * StartMCUMixTranscodeByStrRoomId请求参数结构体
 * @class
 */
class StartMCUMixTranscodeByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 字符串房间号。
         * @type {string || null}
         */
        this.StrRoomId = null;

        /**
         * 混流输出控制参数。
         * @type {OutputParams || null}
         */
        this.OutputParams = null;

        /**
         * 混流输出编码参数。
         * @type {EncodeParams || null}
         */
        this.EncodeParams = null;

        /**
         * 混流输出布局参数。
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 第三方CDN转推参数。
         * @type {PublishCdnParams || null}
         */
        this.PublishCdnParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

        if (params.OutputParams) {
            let obj = new OutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }

        if (params.EncodeParams) {
            let obj = new EncodeParams();
            obj.deserialize(params.EncodeParams)
            this.EncodeParams = obj;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.PublishCdnParams) {
            let obj = new PublishCdnParams();
            obj.deserialize(params.PublishCdnParams)
            this.PublishCdnParams = obj;
        }

    }
}

/**
 * CreatePicture请求参数结构体
 * @class
 */
class CreatePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片内容经base64编码后的string格式
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 图片后缀名
         * @type {string || null}
         */
        this.Suffix = null;

        /**
         * 图片长度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 显示位置x轴方向
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置y轴方向
         * @type {number || null}
         */
        this.YPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Suffix = 'Suffix' in params ? params.Suffix : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;

    }
}

/**
 * DescribeTrtcMcuTranscodeTime请求参数结构体
 * @class
 */
class DescribeTrtcMcuTranscodeTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始时间，格式为YYYY-MM-DD。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * StopMCUMixTranscode返回参数结构体
 * @class
 */
class StopMCUMixTranscodeResponse extends  AbstractModel {
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
 * RemoveUserByStrRoomId请求参数结构体
 * @class
 */
class RemoveUserByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 要移出的用户列表，最多10个。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

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
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * 指定订阅流白名单或者黑名单，音频的白名单和音频黑名单不能同时设置，视频亦然。同时实际并发订阅的媒体流路数最大支持25路流，混流场景下视频的多画面最大支持24画面。支持通过设置".*$"通配符，来前缀匹配黑白名单的UserId，注意房间里不能有和通配符规则相同的用户，否则将视为订阅具体用户，前缀规则会失效。
 * @class
 */
class SubscribeStreamUserIds extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅音频流白名单，指定订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表订阅UserId 1，2，3的音频流；["1.*$"], 代表订阅UserId前缀为1的音频流。默认不填订阅房间内所有的音频流，订阅列表用户数不超过32。
         * @type {Array.<string> || null}
         */
        this.SubscribeAudioUserIds = null;

        /**
         * 订阅音频流黑名单，指定不订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表不订阅UserId 1，2，3的音频流；["1.*$"], 代表不订阅UserId前缀为1的音频流。默认不填订阅房间内所有音频流，订阅列表用户数不超过32。
         * @type {Array.<string> || null}
         */
        this.UnSubscribeAudioUserIds = null;

        /**
         * 订阅视频流白名单，指定订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表订阅UserId  1，2，3的视频流；["1.*$"], 代表订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。
         * @type {Array.<string> || null}
         */
        this.SubscribeVideoUserIds = null;

        /**
         * 订阅视频流黑名单，指定不订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表不订阅UserId  1，2，3的视频流；["1.*$"], 代表不订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。
         * @type {Array.<string> || null}
         */
        this.UnSubscribeVideoUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscribeAudioUserIds = 'SubscribeAudioUserIds' in params ? params.SubscribeAudioUserIds : null;
        this.UnSubscribeAudioUserIds = 'UnSubscribeAudioUserIds' in params ? params.UnSubscribeAudioUserIds : null;
        this.SubscribeVideoUserIds = 'SubscribeVideoUserIds' in params ? params.SubscribeVideoUserIds : null;
        this.UnSubscribeVideoUserIds = 'UnSubscribeVideoUserIds' in params ? params.UnSubscribeVideoUserIds : null;

    }
}

/**
 * 录制的混流布局参数。

 * @class
 */
class MixLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 布局模式:
1：悬浮布局；
2：屏幕分享布局；
3：九宫格布局（默认）；
4：自定义布局；

悬浮布局：默认第一个进入房间的主播（也可以指定一个主播）的视频画面会铺满整个屏幕。其他主播的视频画面从左下角开始依次按照进房顺序水平排列，显示为小画面，小画面悬浮于大画面之上。当画面数量小于等于17个时，每行4个（4 x 4排列）。当画面数量大于17个时，重新布局小画面为每行5个（5 x 5）排列。最多支持25个画面，如果用户只发送音频，仍然会占用画面位置。

屏幕分享布局：指定一个主播在屏幕左侧的大画面位置（如果不指定，那么大画面位置为背景色），其他主播自上而下依次垂直排列于右侧。当画面数量少于17个的时候，右侧每列最多8人，最多占据两列。当画面数量多于17个的时候，超过17个画面的主播从左下角开始依次水平排列。最多支持25个画面，如果主播只发送音频，仍然会占用画面位置。

九宫格布局：根据主播的数量自动调整每个画面的大小，每个主播的画面大小一致，最多支持25个画面。

自定义布局：根据需要在MixLayoutList内定制每个主播画面的布局。
         * @type {number || null}
         */
        this.MixLayoutMode = null;

        /**
         * 如果MixLayoutMode 选择为4自定义布局模式的话，设置此参数为每个主播所对应的布局画面的详细信息，最大不超过25个。
         * @type {Array.<MixLayout> || null}
         */
        this.MixLayoutList = null;

        /**
         * 录制背景颜色，RGB的颜色表的16进制表示，每个颜色通过8bit长度标识，默认为黑色。比如橙色对应的RGB为 R:255 G:165 B:0, 那么对应的字符串描述为#FFA500，格式规范：‘#‘开头，后面跟固定RGB的颜色值
         * @type {string || null}
         */
        this.BackGroundColor = null;

        /**
         * 在布局模式为1：悬浮布局和 2：屏幕分享布局时，设定为显示大视频画面的UserId。不填的话：悬浮布局默认是第一个进房间的主播，屏幕分享布局默认是背景色
         * @type {string || null}
         */
        this.MaxResolutionUserId = null;

        /**
         * 主辅路标识，
0：主流（默认）；
1：辅流（屏幕分享）；
这个位置的MediaId代表的是对应MaxResolutionUserId的主辅路，MixLayoutList内代表的是自定义用户的主辅路。
         * @type {number || null}
         */
        this.MediaId = null;

        /**
         * 下载的url地址， 只支持jpg， png，大小限制不超过5M。
         * @type {string || null}
         */
        this.BackgroundImageUrl = null;

        /**
         * 设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
         * @type {number || null}
         */
        this.PlaceHolderMode = null;

        /**
         * 背景画面宽高比不一致的时候处理方案，与MixLayoufList定义的RenderMode一致。
         * @type {number || null}
         */
        this.BackgroundImageRenderMode = null;

        /**
         * 下载的url地址， 只支持jpg， png，大小限制不超过5M，宽高比不一致的处理方案同 RenderMode。
         * @type {string || null}
         */
        this.DefaultSubBackgroundImage = null;

        /**
         * 水印布局参数， 最多支持25个。
         * @type {Array.<WaterMark> || null}
         */
        this.WaterMarkList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MixLayoutMode = 'MixLayoutMode' in params ? params.MixLayoutMode : null;

        if (params.MixLayoutList) {
            this.MixLayoutList = new Array();
            for (let z in params.MixLayoutList) {
                let obj = new MixLayout();
                obj.deserialize(params.MixLayoutList[z]);
                this.MixLayoutList.push(obj);
            }
        }
        this.BackGroundColor = 'BackGroundColor' in params ? params.BackGroundColor : null;
        this.MaxResolutionUserId = 'MaxResolutionUserId' in params ? params.MaxResolutionUserId : null;
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.BackgroundImageUrl = 'BackgroundImageUrl' in params ? params.BackgroundImageUrl : null;
        this.PlaceHolderMode = 'PlaceHolderMode' in params ? params.PlaceHolderMode : null;
        this.BackgroundImageRenderMode = 'BackgroundImageRenderMode' in params ? params.BackgroundImageRenderMode : null;
        this.DefaultSubBackgroundImage = 'DefaultSubBackgroundImage' in params ? params.DefaultSubBackgroundImage : null;

        if (params.WaterMarkList) {
            this.WaterMarkList = new Array();
            for (let z in params.WaterMarkList) {
                let obj = new WaterMark();
                obj.deserialize(params.WaterMarkList[z]);
                this.WaterMarkList.push(obj);
            }
        }

    }
}

/**
 * DismissRoom返回参数结构体
 * @class
 */
class DismissRoomResponse extends  AbstractModel {
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
 * 事件信息，包括，事件时间戳，事件ID,
 * @class
 */
class EventMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频流类型：
0：与视频无关的事件；
2：视频为大画面；
3：视频为小画面；
7：视频为旁路画面；
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 事件上报的时间戳，unix时间（1589891188801ms)
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 事件Id：分为sdk的事件和webrtc的事件，详情见：附录/事件 ID 映射表：https://cloud.tencent.com/document/product/647/44916
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 事件的第一个参数，如视频分辨率宽
         * @type {number || null}
         */
        this.ParamOne = null;

        /**
         * 事件的第二个参数，如视频分辨率高
         * @type {number || null}
         */
        this.ParamTwo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.ParamOne = 'ParamOne' in params ? params.ParamOne : null;
        this.ParamTwo = 'ParamTwo' in params ? params.ParamTwo : null;

    }
}

/**
 * DescribeRecordStatistic请求参数结构体
 * @class
 */
class DescribeRecordStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询开始日期，格式为YYYY-MM-DD。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束日期，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeUserInformation请求参数结构体
 * @class
 */
class DescribeUserInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1590065777）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1590065877）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户SDKAppID（1400353843）
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,PageSize最大不超过100）
         * @type {string || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeCallDetail请求参数结构体
 * @class
 */
class DescribeCallDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1590065777s），查询实时数据时，查询起止时间不超过1个小时。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1590065877s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户SDKAppID（1400353843）
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

        /**
         * 需查询的指标，不填则只返回用户列表，填all则返回所有指标。
appCpu：APP CPU使用率；
sysCpu：系统 CPU使用率；
aBit：上/下行音频码率；单位：bps
aBlock：音频卡顿时长；单位：ms
bigvBit：上/下行视频码率；单位：bps
bigvCapFps：视频采集帧率；
bigvEncFps：视频发送帧率；
bigvDecFps：渲染帧率；
bigvBlock：视频卡顿时长；单位：ms
aLoss：上/下行音频丢包率；
bigvLoss：上/下行视频丢包率；
bigvWidth：上/下行分辨率宽；
bigvHeight：上/下行分辨率高
         * @type {Array.<string> || null}
         */
        this.DataType = null;

        /**
         * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,DataType，UserIds不为null，PageSize最大不超过6，DataType，UserIds为null，PageSize最大不超过100）
         * @type {string || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;
        this.DataType = 'DataType' in params ? params.DataType : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 历史规模信息
 * @class
 */
class ScaleInfomation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每天开始的时间
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 房间人数，用户重复进入同一个房间为1次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserNumber = null;

        /**
         * 房间人次，用户每次进入房间为一次
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UserCount = null;

        /**
         * sdkappid下一天内的房间数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RoomNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.UserNumber = 'UserNumber' in params ? params.UserNumber : null;
        this.UserCount = 'UserCount' in params ? params.UserCount : null;
        this.RoomNumbers = 'RoomNumbers' in params ? params.RoomNumbers : null;

    }
}

/**
 * 第三方存储参数。
 * @class
 */
class StorageParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方云存储的账号信息。
         * @type {CloudStorage || null}
         */
        this.CloudStorage = null;

        /**
         * 第三方云点播的账号信息。
         * @type {CloudVod || null}
         */
        this.CloudVod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CloudStorage) {
            let obj = new CloudStorage();
            obj.deserialize(params.CloudStorage)
            this.CloudStorage = obj;
        }

        if (params.CloudVod) {
            let obj = new CloudVod();
            obj.deserialize(params.CloudVod)
            this.CloudVod = obj;
        }

    }
}

/**
 * 点播相关参数。
 * @class
 */
class CloudVod extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云点播相关参数。
         * @type {TencentVod || null}
         */
        this.TencentVod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TencentVod) {
            let obj = new TencentVod();
            obj.deserialize(params.TencentVod)
            this.TencentVod = obj;
        }

    }
}

/**
 * MCU混流输出流编码参数
 * @class
 */
class EncodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流-输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。
         * @type {number || null}
         */
        this.AudioSampleRate = null;

        /**
         * 混流-输出流音频码率。取值范围[8,500]，单位为kbps。
         * @type {number || null}
         */
        this.AudioBitrate = null;

        /**
         * 混流-输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。
         * @type {number || null}
         */
        this.AudioChannels = null;

        /**
         * 混流-输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。
         * @type {number || null}
         */
        this.VideoWidth = null;

        /**
         * 混流-输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。
         * @type {number || null}
         */
        this.VideoHeight = null;

        /**
         * 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。
         * @type {number || null}
         */
        this.VideoBitrate = null;

        /**
         * 混流-输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。
         * @type {number || null}
         */
        this.VideoFramerate = null;

        /**
         * 混流-输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
         * @type {number || null}
         */
        this.VideoGop = null;

        /**
         * 混流-输出流背景色，取值是十进制整数。常用的颜色有：
红色：0xff0000，对应的十进制整数是16724736。
黄色：0xffff00。对应的十进制整数是16776960。
绿色：0x33cc00。对应的十进制整数是3394560。
蓝色：0x0066ff。对应的十进制整数是26367。
黑色：0x000000。对应的十进制整数是0。
白色：0xFFFFFF。对应的十进制整数是16777215。
灰色：0x999999。对应的十进制整数是10066329。
         * @type {number || null}
         */
        this.BackgroundColor = null;

        /**
         * 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。
         * @type {number || null}
         */
        this.BackgroundImageId = null;

        /**
         * 混流-输出流音频编码类型，取值范围[0,1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]
         * @type {number || null}
         */
        this.AudioCodec = null;

        /**
         * 混流-输出流背景图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。BackgroundImageUrl和BackgroundImageId参数都填时，以BackgroundImageUrl为准。图片大小限制不超过2MB。
         * @type {string || null}
         */
        this.BackgroundImageUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AudioSampleRate = 'AudioSampleRate' in params ? params.AudioSampleRate : null;
        this.AudioBitrate = 'AudioBitrate' in params ? params.AudioBitrate : null;
        this.AudioChannels = 'AudioChannels' in params ? params.AudioChannels : null;
        this.VideoWidth = 'VideoWidth' in params ? params.VideoWidth : null;
        this.VideoHeight = 'VideoHeight' in params ? params.VideoHeight : null;
        this.VideoBitrate = 'VideoBitrate' in params ? params.VideoBitrate : null;
        this.VideoFramerate = 'VideoFramerate' in params ? params.VideoFramerate : null;
        this.VideoGop = 'VideoGop' in params ? params.VideoGop : null;
        this.BackgroundColor = 'BackgroundColor' in params ? params.BackgroundColor : null;
        this.BackgroundImageId = 'BackgroundImageId' in params ? params.BackgroundImageId : null;
        this.AudioCodec = 'AudioCodec' in params ? params.AudioCodec : null;
        this.BackgroundImageUrl = 'BackgroundImageUrl' in params ? params.BackgroundImageUrl : null;

    }
}

/**
 * ModifyPicture请求参数结构体
 * @class
 */
class ModifyPictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片长度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 显示位置x轴方向
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置y轴方向
         * @type {number || null}
         */
        this.YPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;

    }
}

/**
 * StartMCUMixTranscode请求参数结构体
 * @class
 */
class StartMCUMixTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 混流输出控制参数。
         * @type {OutputParams || null}
         */
        this.OutputParams = null;

        /**
         * 混流输出编码参数。
         * @type {EncodeParams || null}
         */
        this.EncodeParams = null;

        /**
         * 混流输出布局参数。
         * @type {LayoutParams || null}
         */
        this.LayoutParams = null;

        /**
         * 第三方CDN转推参数。
         * @type {PublishCdnParams || null}
         */
        this.PublishCdnParams = null;

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

        if (params.OutputParams) {
            let obj = new OutputParams();
            obj.deserialize(params.OutputParams)
            this.OutputParams = obj;
        }

        if (params.EncodeParams) {
            let obj = new EncodeParams();
            obj.deserialize(params.EncodeParams)
            this.EncodeParams = obj;
        }

        if (params.LayoutParams) {
            let obj = new LayoutParams();
            obj.deserialize(params.LayoutParams)
            this.LayoutParams = obj;
        }

        if (params.PublishCdnParams) {
            let obj = new PublishCdnParams();
            obj.deserialize(params.PublishCdnParams)
            this.PublishCdnParams = obj;
        }

    }
}

/**
 * DescribeCloudRecording请求参数结构体
 * @class
 */
class DescribeCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 录制任务的唯一Id，在启动录制成功后会返回。
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
 * 腾讯云点播相关参数。
 * @class
 */
class TencentVod extends  AbstractModel {
    constructor(){
        super();

        /**
         * 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 创建任务流模板 并为模板命名。
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * 媒体文件过期时间，为当前时间的绝对过期时间；保存一天，就填"86400"，永久保存就填"0"，默认永久保存。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 指定上传园区，仅适用于对上传地域有特殊需求的用户。
         * @type {string || null}
         */
        this.StorageRegion = null;

        /**
         * 分类ID，用于对媒体进行分类管理，可通过 创建分类 接口，创建分类，获得分类 ID。
默认值：0，表示其他分类。
         * @type {number || null}
         */
        this.ClassId = null;

        /**
         * 点播 子应用 ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
         * @type {number || null}
         */
        this.SubAppId = null;

        /**
         * 任务流上下文，任务完成回调时透传。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 上传上下文，上传完成回调时透传。
         * @type {string || null}
         */
        this.SourceContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.StorageRegion = 'StorageRegion' in params ? params.StorageRegion : null;
        this.ClassId = 'ClassId' in params ? params.ClassId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SourceContext = 'SourceContext' in params ? params.SourceContext : null;

    }
}

/**
 * 云端录制控制参数。
 * @class
 */
class RecordParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制模式：
1：单流录制，分别录制房间的订阅UserId的音频和视频，将录制文件（M3U8/TS）上传至云存储；
2：混流录制，将房间内订阅UserId的音视频混录成一个音视频文件，将录制文件[M3U8/TS]上传至云存储；
         * @type {number || null}
         */
        this.RecordMode = null;

        /**
         * 房间内持续没有主播的状态超过MaxIdleTime的时长，自动停止录制，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。
         * @type {number || null}
         */
        this.MaxIdleTime = null;

        /**
         * 录制的媒体流类型：
0：录制音频+视频流（默认）;
1：仅录制音频流；
2：仅录制视频流，
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * 指定订阅流白名单或者黑名单。
         * @type {SubscribeStreamUserIds || null}
         */
        this.SubscribeStreamUserIds = null;

        /**
         * 输出文件的格式。0：(默认)输出文件为hls格式。1：输出文件格式为hls+mp4（hls录制完成后转mp4文件）
         * @type {number || null}
         */
        this.OutputFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordMode = 'RecordMode' in params ? params.RecordMode : null;
        this.MaxIdleTime = 'MaxIdleTime' in params ? params.MaxIdleTime : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;

        if (params.SubscribeStreamUserIds) {
            let obj = new SubscribeStreamUserIds();
            obj.deserialize(params.SubscribeStreamUserIds)
            this.SubscribeStreamUserIds = obj;
        }
        this.OutputFormat = 'OutputFormat' in params ? params.OutputFormat : null;

    }
}

/**
 * StopMCUMixTranscode请求参数结构体
 * @class
 */
class StopMCUMixTranscodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

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

    }
}

/**
 * 用户信息，包括用户进房时间，退房时间等
 * @class
 */
class UserInformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间号
         * @type {string || null}
         */
        this.RoomStr = null;

        /**
         * 用户Id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户进房时间
         * @type {number || null}
         */
        this.JoinTs = null;

        /**
         * 用户退房时间，用户没有退房则返回当前时间
         * @type {number || null}
         */
        this.LeaveTs = null;

        /**
         * 终端类型
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Sdk版本号
         * @type {string || null}
         */
        this.SdkVersion = null;

        /**
         * 客户端IP地址
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 判断用户是否已经离开房间
         * @type {boolean || null}
         */
        this.Finished = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoomStr = 'RoomStr' in params ? params.RoomStr : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.JoinTs = 'JoinTs' in params ? params.JoinTs : null;
        this.LeaveTs = 'LeaveTs' in params ? params.LeaveTs : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.SdkVersion = 'SdkVersion' in params ? params.SdkVersion : null;
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.Finished = 'Finished' in params ? params.Finished : null;

    }
}

/**
 * 用户自定义混流布局参数列表。
 * @class
 */
class MixLayout extends  AbstractModel {
    constructor(){
        super();

        /**
         * 画布上该画面左上角的 y 轴坐标，取值范围 [0, 1920]，不能超过画布的高。
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 画布上该画面左上角的 x 轴坐标，取值范围 [0, 1920]，不能超过画布的宽。
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 画布上该画面宽度的相对值，取值范围 [0, 1920]，与Left相加不应超过画布的宽。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 画布上该画面高度的相对值，取值范围 [0, 1920]，与Top相加不应超过画布的高。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 字符串内容为待显示在该画面的主播对应的UserId，如果不指定，会按照主播加入房间的顺序匹配。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 画布的透明度值，取值范围[0, 255]。0表示不透明，255表示全透明。默认值为0。
         * @type {number || null}
         */
        this.Alpha = null;

        /**
         * 0 ：拉伸模式，这个模式下整个视频内容会全部显示，并填满子画面，在源视频和目的视频宽高比不一致的时候，画面不会缺少内容，但是画面可能产生形变；

1 ：剪裁模式（默认），这个模式下会严格按照目的视频的宽高比对源视频剪裁之后再拉伸，并填满子画面画布，在源视频和目的视频宽高比不一致的时候，画面保持不变形，但是会被剪裁；

2 ：填黑模式，这个模式下会严格保持源视频的宽高比进行等比缩放，在源视频和目的视频宽高比不一致的时候，画面的上下侧边缘或者左右侧边缘会露出子画面画布的背景；

3 ：智能拉伸模式，这个模式类似剪裁模式，区别是在源视频和目的视频宽高比不一致的时候，限制了最大剪裁比例为画面的宽度或者高度的20%；
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * 对应订阅流的主辅路标识：
0：主流（默认）；
1：辅流；
         * @type {number || null}
         */
        this.MediaId = null;

        /**
         * 该画布的图层顺序, 这个值越小表示图层越靠后。默认值为0。
         * @type {number || null}
         */
        this.ImageLayer = null;

        /**
         * 下载的url地址， 只支持jpg， png，大小限制不超过5M，宽高比不一致的处理方案同 RenderMode。
         * @type {string || null}
         */
        this.SubBackgroundImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Top = 'Top' in params ? params.Top : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Alpha = 'Alpha' in params ? params.Alpha : null;
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.MediaId = 'MediaId' in params ? params.MediaId : null;
        this.ImageLayer = 'ImageLayer' in params ? params.ImageLayer : null;
        this.SubBackgroundImage = 'SubBackgroundImage' in params ? params.SubBackgroundImage : null;

    }
}

/**
 * DescribeHistoryScale请求参数结构体
 * @class
 */
class DescribeHistoryScaleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户sdkappid(1400188366)
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询开始时间，5天内。本地unix时间戳（1587571000s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588034999s）
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
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DeletePicture请求参数结构体
 * @class
 */
class DeletePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

        /**
         * 应用id
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
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * MCU混流布局参数
 * @class
 */
class LayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板;4为自定义模板。
         * @type {number || null}
         */
        this.Template = null;

        /**
         * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的用户ID。
         * @type {string || null}
         */
        this.MainVideoUserId = null;

        /**
         * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的流类型，0为摄像头，1为屏幕分享。左侧大画面为web用户时此值填0。
         * @type {number || null}
         */
        this.MainVideoStreamType = null;

        /**
         * 画中画模板中有效，代表小画面的布局参数。
         * @type {SmallVideoLayoutParams || null}
         */
        this.SmallVideoLayoutParams = null;

        /**
         * 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。
         * @type {number || null}
         */
        this.MainVideoRightAlign = null;

        /**
         * 悬浮模板、九宫格、屏幕分享模板有效。设置此参数后，输出流混合此参数中包含用户的音视频，以及其他用户的纯音频。最多可设置16个用户。
         * @type {Array.<string> || null}
         */
        this.MixVideoUids = null;

        /**
         * 自定义模板中有效，指定用户视频在混合画面中的位置。
         * @type {Array.<PresetLayoutConfig> || null}
         */
        this.PresetLayoutConfig = null;

        /**
         * 自定义模板中有效，设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
         * @type {number || null}
         */
        this.PlaceHolderMode = null;

        /**
         * 悬浮模板、九宫格、屏幕分享模板生效，用于控制纯音频上行是否占用画面布局位置。设置为0是代表后台默认处理方式，悬浮小画面占布局位置，九宫格画面占布局位置、屏幕分享小画面不占布局位置；设置为1时代表纯音频上行占布局位置；设置为2时代表纯音频上行不占布局位置。默认为0。
         * @type {number || null}
         */
        this.PureAudioHoldPlaceMode = null;

        /**
         * 水印参数。
         * @type {WaterMarkParams || null}
         */
        this.WaterMarkParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.MainVideoUserId = 'MainVideoUserId' in params ? params.MainVideoUserId : null;
        this.MainVideoStreamType = 'MainVideoStreamType' in params ? params.MainVideoStreamType : null;

        if (params.SmallVideoLayoutParams) {
            let obj = new SmallVideoLayoutParams();
            obj.deserialize(params.SmallVideoLayoutParams)
            this.SmallVideoLayoutParams = obj;
        }
        this.MainVideoRightAlign = 'MainVideoRightAlign' in params ? params.MainVideoRightAlign : null;
        this.MixVideoUids = 'MixVideoUids' in params ? params.MixVideoUids : null;

        if (params.PresetLayoutConfig) {
            this.PresetLayoutConfig = new Array();
            for (let z in params.PresetLayoutConfig) {
                let obj = new PresetLayoutConfig();
                obj.deserialize(params.PresetLayoutConfig[z]);
                this.PresetLayoutConfig.push(obj);
            }
        }
        this.PlaceHolderMode = 'PlaceHolderMode' in params ? params.PlaceHolderMode : null;
        this.PureAudioHoldPlaceMode = 'PureAudioHoldPlaceMode' in params ? params.PureAudioHoldPlaceMode : null;

        if (params.WaterMarkParams) {
            let obj = new WaterMarkParams();
            obj.deserialize(params.WaterMarkParams)
            this.WaterMarkParams = obj;
        }

    }
}

/**
 * DescribeRoomInformation返回参数结构体
 * @class
 */
class DescribeRoomInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回当页数据总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 房间信息列表
         * @type {Array.<RoomState> || null}
         */
        this.RoomList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RoomList) {
            this.RoomList = new Array();
            for (let z in params.RoomList) {
                let obj = new RoomState();
                obj.deserialize(params.RoomList[z]);
                this.RoomList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 录制的使用信息。
 * @class
 */
class RecordUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本组数据对应的时间点，格式如:2020-09-07或2020-09-07 00:05:05。
         * @type {string || null}
         */
        this.TimeKey = null;

        /**
         * 视频时长-标清SD，单位：秒。
         * @type {number || null}
         */
        this.Class1VideoTime = null;

        /**
         * 视频时长-高清HD，单位：秒。
         * @type {number || null}
         */
        this.Class2VideoTime = null;

        /**
         * 视频时长-超清HD，单位：秒。
         * @type {number || null}
         */
        this.Class3VideoTime = null;

        /**
         * 语音时长，单位：秒。
         * @type {number || null}
         */
        this.AudioTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeKey = 'TimeKey' in params ? params.TimeKey : null;
        this.Class1VideoTime = 'Class1VideoTime' in params ? params.Class1VideoTime : null;
        this.Class2VideoTime = 'Class2VideoTime' in params ? params.Class2VideoTime : null;
        this.Class3VideoTime = 'Class3VideoTime' in params ? params.Class3VideoTime : null;
        this.AudioTime = 'AudioTime' in params ? params.AudioTime : null;

    }
}

/**
 * CreateCloudRecording请求参数结构体
 * @class
 */
class CreateCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351#sdkappid)，和录制的房间所对应的SdkAppId相同。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351#roomid)，录制的TRTC房间所对应的RoomId。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 录制服务在TRTC房间使用的[UserId](https://cloud.tencent.com/document/product/647/46351#userid)，注意这个userId不能与其他TRTC或者录制服务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 云端录制加入房间的用户签名，当前 UserId 对应的验证签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910#UserSig)的方案。
         * @type {string || null}
         */
        this.UserSig = null;

        /**
         * 云端录制控制参数。
         * @type {RecordParams || null}
         */
        this.RecordParams = null;

        /**
         * 云端录制文件上传到云存储的参数。
         * @type {StorageParams || null}
         */
        this.StorageParams = null;

        /**
         * TRTC房间号的类型，必须和录制的房间所对应的RoomId类型相同:
0: 字符串类型的RoomId
1: 32位整型的RoomId（默认）
         * @type {number || null}
         */
        this.RoomIdType = null;

        /**
         * 混流的转码参数，录制模式为混流的时候可以设置。
         * @type {MixTranscodeParams || null}
         */
        this.MixTranscodeParams = null;

        /**
         * 混流的布局参数，录制模式为混流的时候可以设置。
         * @type {MixLayoutParams || null}
         */
        this.MixLayoutParams = null;

        /**
         * 接口可以调用的时效性，从成功开启录制并获得任务ID后开始计算，超时后无法调用查询、更新和停止等接口，但是录制任务不会停止。 参数的单位是小时，默认72小时（3天），最大可设置720小时（30天），最小设置6小时。举例说明：如果不设置该参数，那么开始录制成功后，查询、更新和停止录制的调用时效为72个小时。
         * @type {number || null}
         */
        this.ResourceExpiredHour = null;

        /**
         * TRTC房间权限加密串，只有在TRTC控制台启用了高级权限控制的时候需要携带，在TRTC控制台如果开启高级权限控制后，TRTC 的后台服务系统会校验一个叫做 [PrivateMapKey]（https://cloud.tencent.com/document/product/647/32240） 的“权限票据”，权限票据中包含了一个加密后的 RoomId 和一个加密后的“权限位列表”。由于 PrivateMapKey 中包含 RoomId，所以只提供了 UserSig 没有提供 PrivateMapKey 时，并不能进入指定的房间。
         * @type {string || null}
         */
        this.PrivateMapKey = null;

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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserSig = 'UserSig' in params ? params.UserSig : null;

        if (params.RecordParams) {
            let obj = new RecordParams();
            obj.deserialize(params.RecordParams)
            this.RecordParams = obj;
        }

        if (params.StorageParams) {
            let obj = new StorageParams();
            obj.deserialize(params.StorageParams)
            this.StorageParams = obj;
        }
        this.RoomIdType = 'RoomIdType' in params ? params.RoomIdType : null;

        if (params.MixTranscodeParams) {
            let obj = new MixTranscodeParams();
            obj.deserialize(params.MixTranscodeParams)
            this.MixTranscodeParams = obj;
        }

        if (params.MixLayoutParams) {
            let obj = new MixLayoutParams();
            obj.deserialize(params.MixLayoutParams)
            this.MixLayoutParams = obj;
        }
        this.ResourceExpiredHour = 'ResourceExpiredHour' in params ? params.ResourceExpiredHour : null;
        this.PrivateMapKey = 'PrivateMapKey' in params ? params.PrivateMapKey : null;

    }
}

/**
 * MCU混流的输出参数
 * @class
 */
class OutputParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流 ID，由用户自定义设置，该流 ID 不能与用户旁路的流 ID 相同。
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 取值范围[0,1]， 填0：直播流为音视频(默认); 填1：直播流为纯音频
         * @type {number || null}
         */
        this.PureAudioStream = null;

        /**
         * 自定义录制文件名称前缀。请先在实时音视频控制台开通录制功能，https://cloud.tencent.com/document/product/647/50768
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3。此参数不建议使用，建议在实时音视频控制台配置纯音频录制模板。
         * @type {number || null}
         */
        this.RecordAudioOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamId = 'StreamId' in params ? params.StreamId : null;
        this.PureAudioStream = 'PureAudioStream' in params ? params.PureAudioStream : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordAudioOnly = 'RecordAudioOnly' in params ? params.RecordAudioOnly : null;

    }
}

/**
 * 水印布局参数
 * @class
 */
class WaterMark extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印类型，0为图片（默认），1为文字（暂不支持）。
         * @type {number || null}
         */
        this.WaterMarkType = null;

        /**
         * 水印为图片时的参数列表，水印为图片时校验必填。
         * @type {WaterMarkImage || null}
         */
        this.WaterMarkImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkType = 'WaterMarkType' in params ? params.WaterMarkType : null;

        if (params.WaterMarkImage) {
            let obj = new WaterMarkImage();
            obj.deserialize(params.WaterMarkImage)
            this.WaterMarkImage = obj;
        }

    }
}

/**
 * DeleteCloudRecording返回参数结构体
 * @class
 */
class DeleteCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。
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
 * 录制的音视频转码参数。
 * @class
 */
class MixTranscodeParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制视频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。
         * @type {VideoParams || null}
         */
        this.VideoParams = null;

        /**
         * 录制音频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。
         * @type {AudioParams || null}
         */
        this.AudioParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VideoParams) {
            let obj = new VideoParams();
            obj.deserialize(params.VideoParams)
            this.VideoParams = obj;
        }

        if (params.AudioParams) {
            let obj = new AudioParams();
            obj.deserialize(params.AudioParams)
            this.AudioParams = obj;
        }

    }
}

/**
 * CreateTroubleInfo返回参数结构体
 * @class
 */
class CreateTroubleInfoResponse extends  AbstractModel {
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
 * StopMCUMixTranscodeByStrRoomId请求参数结构体
 * @class
 */
class StopMCUMixTranscodeByStrRoomIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 字符串房间号。
         * @type {string || null}
         */
        this.StrRoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StrRoomId = 'StrRoomId' in params ? params.StrRoomId : null;

    }
}

/**
 * Es返回的质量数据
 * @class
 */
class QualityData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据内容
         * @type {Array.<TimeValue> || null}
         */
        this.Content = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 对端Id,为空时表示上行数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PeerId = null;

        /**
         * 数据类型
         * @type {string || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new TimeValue();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PeerId = 'PeerId' in params ? params.PeerId : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * 造成异常体验可能的异常事件类型
 * @class
 */
class AbnormalEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常事件ID，具体值查看附录：异常体验ID映射表：https://cloud.tencent.com/document/product/647/44916
         * @type {number || null}
         */
        this.AbnormalEventId = null;

        /**
         * 远端用户ID,""：表示异常事件不是由远端用户产生
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PeerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AbnormalEventId = 'AbnormalEventId' in params ? params.AbnormalEventId : null;
        this.PeerId = 'PeerId' in params ? params.PeerId : null;

    }
}

/**
 * RemoveUserByStrRoomId返回参数结构体
 * @class
 */
class RemoveUserByStrRoomIdResponse extends  AbstractModel {
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
 * StopMCUMixTranscodeByStrRoomId返回参数结构体
 * @class
 */
class StopMCUMixTranscodeByStrRoomIdResponse extends  AbstractModel {
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
 * DeletePicture返回参数结构体
 * @class
 */
class DeletePictureResponse extends  AbstractModel {
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
 * ModifyCloudRecording请求参数结构体
 * @class
 */
class ModifyCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 录制任务的唯一Id，在启动录制成功后会返回。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 需要更新的混流的布局参数。
         * @type {MixLayoutParams || null}
         */
        this.MixLayoutParams = null;

        /**
         * 指定订阅流白名单或者黑名单。
         * @type {SubscribeStreamUserIds || null}
         */
        this.SubscribeStreamUserIds = null;

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

        if (params.MixLayoutParams) {
            let obj = new MixLayoutParams();
            obj.deserialize(params.MixLayoutParams)
            this.MixLayoutParams = obj;
        }

        if (params.SubscribeStreamUserIds) {
            let obj = new SubscribeStreamUserIds();
            obj.deserialize(params.SubscribeStreamUserIds)
            this.SubscribeStreamUserIds = obj;
        }

    }
}

/**
 * CreateTroubleInfo请求参数结构体
 * @class
 */
class CreateTroubleInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的ID
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 房间ID
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 老师用户ID
         * @type {string || null}
         */
        this.TeacherUserId = null;

        /**
         * 学生用户ID
         * @type {string || null}
         */
        this.StudentUserId = null;

        /**
         * 体验异常端（老师或学生）的用户 ID。
         * @type {string || null}
         */
        this.TroubleUserId = null;

        /**
         * 异常类型。
1. 仅视频异常
2. 仅声音异常
3. 音视频都异常
5. 进房异常
4. 切课
6. 求助
7. 问题反馈
8. 投诉
         * @type {number || null}
         */
        this.TroubleType = null;

        /**
         * 异常发生的UNIX 时间戳，单位为秒。
         * @type {number || null}
         */
        this.TroubleTime = null;

        /**
         * 异常详情
         * @type {string || null}
         */
        this.TroubleMsg = null;

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
        this.TeacherUserId = 'TeacherUserId' in params ? params.TeacherUserId : null;
        this.StudentUserId = 'StudentUserId' in params ? params.StudentUserId : null;
        this.TroubleUserId = 'TroubleUserId' in params ? params.TroubleUserId : null;
        this.TroubleType = 'TroubleType' in params ? params.TroubleType : null;
        this.TroubleTime = 'TroubleTime' in params ? params.TroubleTime : null;
        this.TroubleMsg = 'TroubleMsg' in params ? params.TroubleMsg : null;

    }
}

/**
 * sdk或webrtc的事件列表。
 * @class
 */
class EventList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据内容
         * @type {Array.<EventMessage> || null}
         */
        this.Content = null;

        /**
         * 发送端的userId
         * @type {string || null}
         */
        this.PeerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new EventMessage();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.PeerId = 'PeerId' in params ? params.PeerId : null;

    }
}

/**
 * 云端录制查询接口，录制文件的信息
 * @class
 */
class StorageFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录制文件对应的UserId，如果是混流的话的这里返回的是空串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 录制索引文件名。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 录制文件流信息。
video：视频录制文件
audio：音频录制文件
audio_video：音视频录制文件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrackType = null;

        /**
         * 录制文件开始Unix时间戳。
         * @type {number || null}
         */
        this.BeginTimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.TrackType = 'TrackType' in params ? params.TrackType : null;
        this.BeginTimeStamp = 'BeginTimeStamp' in params ? params.BeginTimeStamp : null;

    }
}

/**
 * 图片列表信息
 * @class
 */
class PictureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片长度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 显示位置x轴方向
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置y轴方向
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 应用id
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.XPosition = 'XPosition' in params ? params.XPosition : null;
        this.YPosition = 'YPosition' in params ? params.YPosition : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PictureId = 'PictureId' in params ? params.PictureId : null;

    }
}

/**
 * DescribeUserInformation返回参数结构体
 * @class
 */
class DescribeUserInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的用户总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDetailEvent返回参数结构体
 * @class
 */
class DescribeDetailEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的事件列表，若没有数据，会返回空数组。
         * @type {Array.<EventList> || null}
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new EventList();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCloudRecording返回参数结构体
 * @class
 */
class CreateCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。任务 ID需要业务保存下来，作为下次针对这个录制任务操作的参数。
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
 * DescribeCallDetail返回参数结构体
 * @class
 */
class DescribeCallDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的用户总条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserInformation> || null}
         */
        this.UserList = null;

        /**
         * 质量数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QualityData> || null}
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new UserInformation();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QualityData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 旁路转码时长的查询结果
 * @class
 */
class OneSdkAppIdTranscodeTimeUsagesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 旁路转码时长查询结果数组
         * @type {Array.<SdkAppIdTrtcMcuTranscodeTimeUsage> || null}
         */
        this.SdkAppIdTranscodeTimeUsages = null;

        /**
         * 查询记录数量
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 所查询的应用ID，可能值为:1-应用的应用ID，2-total，显示为total则表示查询的是所有应用的用量合计值。
         * @type {string || null}
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

        if (params.SdkAppIdTranscodeTimeUsages) {
            this.SdkAppIdTranscodeTimeUsages = new Array();
            for (let z in params.SdkAppIdTranscodeTimeUsages) {
                let obj = new SdkAppIdTrtcMcuTranscodeTimeUsage();
                obj.deserialize(params.SdkAppIdTranscodeTimeUsages[z]);
                this.SdkAppIdTranscodeTimeUsages.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

    }
}

/**
 * DescribeTrtcMcuTranscodeTime返回参数结构体
 * @class
 */
class DescribeTrtcMcuTranscodeTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的用量信息数组。
         * @type {Array.<OneSdkAppIdTranscodeTimeUsagesInfo> || null}
         */
        this.Usages = null;

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

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new OneSdkAppIdTranscodeTimeUsagesInfo();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCloudRecording请求参数结构体
 * @class
 */
class DeleteCloudRecordingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 录制任务的唯一Id，在启动录制成功后会返回。
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
 * DescribePicture请求参数结构体
 * @class
 */
class DescribePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 图片ID，不填时返回该应用下所有图片
         * @type {number || null}
         */
        this.PictureId = null;

        /**
         * 每页数量，不填时默认为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码，不填时默认为1
         * @type {number || null}
         */
        this.PageNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;

    }
}

/**
 * SdkAppId级别录制时长数据。
 * @class
 */
class SdkAppIdRecordUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * SdkAppId的值。
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 统计的时间点数据。
         * @type {Array.<RecordUsage> || null}
         */
        this.Usages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;

        if (params.Usages) {
            this.Usages = new Array();
            for (let z in params.Usages) {
                let obj = new RecordUsage();
                obj.deserialize(params.Usages[z]);
                this.Usages.push(obj);
            }
        }

    }
}

/**
 * 画中画模板中有效，代表小画面的布局参数
 * @class
 */
class SmallVideoLayoutParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代表小画面对应的用户ID。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 代表小画面对应的流类型，0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * 小画面在输出时的宽度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 小画面在输出时的高度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 小画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 小画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
         * @type {number || null}
         */
        this.LocationY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;

    }
}

/**
 * RemoveUser返回参数结构体
 * @class
 */
class RemoveUserResponse extends  AbstractModel {
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
 * 自定义模板中有效，指定用户视频在混合画面中的位置。
 * @class
 */
class PresetLayoutConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定显示在该画面上的用户ID。如果不指定用户ID，会按照用户加入房间的顺序自动匹配PresetLayoutConfig中的画面设置。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 当该画面指定用户时，代表用户的流类型。0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
         * @type {number || null}
         */
        this.StreamType = null;

        /**
         * 该画面在输出时的宽度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageWidth = null;

        /**
         * 该画面在输出时的高度，单位为像素值，不填默认为0。
         * @type {number || null}
         */
        this.ImageHeight = null;

        /**
         * 该画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 该画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * 该画面在输出时的层级，不填默认为0。
         * @type {number || null}
         */
        this.ZOrder = null;

        /**
         * 该画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底。不填默认为0。
         * @type {number || null}
         */
        this.RenderMode = null;

        /**
         * 该当前位置用户混入的流类型：0为混入音视频，1为只混入视频，2为只混入音频。默认为0，建议配合指定用户ID使用。
         * @type {number || null}
         */
        this.MixInputType = null;

        /**
         * 占位图ID。启用占位图功能时，在当前位置的用户没有上行视频时显示占位图。占位图大小不能超过2M，在实时音视频控制台上传并生成，https://cloud.tencent.com/document/product/647/50769
         * @type {number || null}
         */
        this.PlaceImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.StreamType = 'StreamType' in params ? params.StreamType : null;
        this.ImageWidth = 'ImageWidth' in params ? params.ImageWidth : null;
        this.ImageHeight = 'ImageHeight' in params ? params.ImageHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.ZOrder = 'ZOrder' in params ? params.ZOrder : null;
        this.RenderMode = 'RenderMode' in params ? params.RenderMode : null;
        this.MixInputType = 'MixInputType' in params ? params.MixInputType : null;
        this.PlaceImageId = 'PlaceImageId' in params ? params.PlaceImageId : null;

    }
}

/**
 * 录制视频转码参数。
 * @class
 */
class VideoParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频的宽度值，单位为像素，默认值360。不能超过1920，与height的乘积不能超过1920*1080。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 视频的高度值，单位为像素，默认值640。不能超过1920，与width的乘积不能超过1920*1080。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 视频的帧率，范围[1, 60]，默认15。
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 视频的码率,单位是bps，范围[64000, 8192000]，默认550000bps。
         * @type {number || null}
         */
        this.BitRate = null;

        /**
         * 视频关键帧时间间隔，单位秒，默认值10秒。
         * @type {number || null}
         */
        this.Gop = null;

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
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;
        this.Gop = 'Gop' in params ? params.Gop : null;

    }
}

/**
 * 录制音频转码参数。
 * @class
 */
class AudioParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频采样率:
1：48000Hz（默认）;
2：44100Hz
3：16000Hz。
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * 声道数:
1：单身道;
2：双声道（默认）。
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 音频码率: 取值范围[32000, 128000] ，单位bps，默认64000bps。
         * @type {number || null}
         */
        this.BitRate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.BitRate = 'BitRate' in params ? params.BitRate : null;

    }
}

/**
 * DescribePicture返回参数结构体
 * @class
 */
class DescribePictureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的图片记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 图片信息列表
         * @type {Array.<PictureInfo> || null}
         */
        this.PictureInfo = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.PictureInfo) {
            this.PictureInfo = new Array();
            for (let z in params.PictureInfo) {
                let obj = new PictureInfo();
                obj.deserialize(params.PictureInfo[z]);
                this.PictureInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 水印类型为图片的参数列表
 * @class
 */
class WaterMarkImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载的url地址， 只支持jpg， png，大小限制不超过5M。
         * @type {string || null}
         */
        this.WaterMarkUrl = null;

        /**
         * 画布上该画面左上角的 y 轴坐标，取值范围 [0, 2560]，不能超过画布的高。
         * @type {number || null}
         */
        this.Top = null;

        /**
         * 画布上该画面左上角的 x 轴坐标，取值范围 [0, 2560]，不能超过画布的宽。
         * @type {number || null}
         */
        this.Left = null;

        /**
         * 画布上该画面宽度的相对值，取值范围 [0, 2560]，与Left相加不应超过画布的宽。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 画布上该画面高度的相对值，取值范围 [0, 2560]，与Top相加不应超过画布的高。
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
        this.WaterMarkUrl = 'WaterMarkUrl' in params ? params.WaterMarkUrl : null;
        this.Top = 'Top' in params ? params.Top : null;
        this.Left = 'Left' in params ? params.Left : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * DismissRoom请求参数结构体
 * @class
 */
class DismissRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

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

    }
}

/**
 * 第三方CDN转推参数
 * @class
 */
class PublishCdnParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云直播BizId。
         * @type {number || null}
         */
        this.BizId = null;

        /**
         * 第三方CDN转推的目的地址，同时只支持转推一个第三方CDN地址。
         * @type {Array.<string> || null}
         */
        this.PublishCdnUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizId = 'BizId' in params ? params.BizId : null;
        this.PublishCdnUrls = 'PublishCdnUrls' in params ? params.PublishCdnUrls : null;

    }
}

/**
 * DescribeRoomInformation请求参数结构体
 * @class
 */
class DescribeRoomInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户sdkappid
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1588031999）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588034999）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 字符串房间号
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回10条数据）
         * @type {string || null}
         */
        this.PageNumber = null;

        /**
         * 分页大小（PageNumber和PageSize 其中一个不填均默认返回10条数据,最大不超过100）
         * @type {string || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeDetailEvent请求参数结构体
 * @class
 */
class DescribeDetailEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位s）。通过 DescribeRoomInformation（查询房间列表）接口获取。（链接：https://cloud.tencent.com/document/product/647/44050）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 查询开始时间，14天内。本地unix时间戳（1588055615s）
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，本地unix时间戳（1588058615s）
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 用户id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 房间号
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * 用户的异常体验及可能的原因
 * @class
 */
class AbnormalExperience extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 异常体验ID
         * @type {number || null}
         */
        this.ExperienceId = null;

        /**
         * 字符串房间号
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 异常事件数组
         * @type {Array.<AbnormalEvent> || null}
         */
        this.AbnormalEventList = null;

        /**
         * 异常事件的上报时间
         * @type {number || null}
         */
        this.EventTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ExperienceId = 'ExperienceId' in params ? params.ExperienceId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

        if (params.AbnormalEventList) {
            this.AbnormalEventList = new Array();
            for (let z in params.AbnormalEventList) {
                let obj = new AbnormalEvent();
                obj.deserialize(params.AbnormalEventList[z]);
                this.AbnormalEventList.push(obj);
            }
        }
        this.EventTime = 'EventTime' in params ? params.EventTime : null;

    }
}

/**
 * StartMCUMixTranscode返回参数结构体
 * @class
 */
class StartMCUMixTranscodeResponse extends  AbstractModel {
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
 * 房间信息列表
 * @class
 */
class RoomState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通话ID（唯一标识一次通话）
         * @type {string || null}
         */
        this.CommId = null;

        /**
         * 房间号
         * @type {string || null}
         */
        this.RoomString = null;

        /**
         * 房间创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 房间销毁时间
         * @type {number || null}
         */
        this.DestroyTime = null;

        /**
         * 房间是否已经结束
         * @type {boolean || null}
         */
        this.IsFinished = null;

        /**
         * 房间创建者Id
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommId = 'CommId' in params ? params.CommId : null;
        this.RoomString = 'RoomString' in params ? params.RoomString : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DestroyTime = 'DestroyTime' in params ? params.DestroyTime : null;
        this.IsFinished = 'IsFinished' in params ? params.IsFinished : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreatePicture返回参数结构体
 * @class
 */
class CreatePictureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片id
         * @type {number || null}
         */
        this.PictureId = null;

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
        this.PictureId = 'PictureId' in params ? params.PictureId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MCU混流水印参数
 * @class
 */
class WaterMarkParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 混流-水印图片ID。取值为实时音视频控制台上传的图片ID。
         * @type {number || null}
         */
        this.WaterMarkId = null;

        /**
         * 混流-水印宽。单位为像素值。水印宽+X偏移不能超过整个画布宽。
         * @type {number || null}
         */
        this.WaterMarkWidth = null;

        /**
         * 混流-水印高。单位为像素值。水印高+Y偏移不能超过整个画布高。
         * @type {number || null}
         */
        this.WaterMarkHeight = null;

        /**
         * 水印在输出时的X偏移。单位为像素值。水印宽+X偏移不能超过整个画布宽。
         * @type {number || null}
         */
        this.LocationX = null;

        /**
         * 水印在输出时的Y偏移。单位为像素值。水印高+Y偏移不能超过整个画布高。
         * @type {number || null}
         */
        this.LocationY = null;

        /**
         * 混流-水印图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。WaterMarkUrl和WaterMarkId参数都填时，以WaterMarkUrl为准。图片大小限制不超过2MB。
         * @type {string || null}
         */
        this.WaterMarkUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WaterMarkId = 'WaterMarkId' in params ? params.WaterMarkId : null;
        this.WaterMarkWidth = 'WaterMarkWidth' in params ? params.WaterMarkWidth : null;
        this.WaterMarkHeight = 'WaterMarkHeight' in params ? params.WaterMarkHeight : null;
        this.LocationX = 'LocationX' in params ? params.LocationX : null;
        this.LocationY = 'LocationY' in params ? params.LocationY : null;
        this.WaterMarkUrl = 'WaterMarkUrl' in params ? params.WaterMarkUrl : null;

    }
}

/**
 * DescribeRecordStatistic返回参数结构体
 * @class
 */
class DescribeRecordStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用的用量信息数组。
         * @type {Array.<SdkAppIdRecordUsage> || null}
         */
        this.SdkAppIdUsages = null;

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

        if (params.SdkAppIdUsages) {
            this.SdkAppIdUsages = new Array();
            for (let z in params.SdkAppIdUsages) {
                let obj = new SdkAppIdRecordUsage();
                obj.deserialize(params.SdkAppIdUsages[z]);
                this.SdkAppIdUsages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DismissRoomByStrRoomId返回参数结构体
 * @class
 */
class DismissRoomByStrRoomIdResponse extends  AbstractModel {
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
 * DescribeHistoryScale返回参数结构体
 * @class
 */
class DescribeHistoryScaleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的数据条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScaleInfomation> || null}
         */
        this.ScaleList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ScaleList) {
            this.ScaleList = new Array();
            for (let z in params.ScaleList) {
                let obj = new ScaleInfomation();
                obj.deserialize(params.ScaleList[z]);
                this.ScaleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartMCUMixTranscodeByStrRoomId返回参数结构体
 * @class
 */
class StartMCUMixTranscodeByStrRoomIdResponse extends  AbstractModel {
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
 * ModifyCloudRecording返回参数结构体
 * @class
 */
class ModifyCloudRecordingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。
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

module.exports = {
    DismissRoomByStrRoomIdRequest: DismissRoomByStrRoomIdRequest,
    DescribeAbnormalEventResponse: DescribeAbnormalEventResponse,
    CloudStorage: CloudStorage,
    DescribeAbnormalEventRequest: DescribeAbnormalEventRequest,
    SdkAppIdTrtcMcuTranscodeTimeUsage: SdkAppIdTrtcMcuTranscodeTimeUsage,
    ModifyPictureResponse: ModifyPictureResponse,
    RemoveUserRequest: RemoveUserRequest,
    DescribeCloudRecordingResponse: DescribeCloudRecordingResponse,
    TimeValue: TimeValue,
    StartMCUMixTranscodeByStrRoomIdRequest: StartMCUMixTranscodeByStrRoomIdRequest,
    CreatePictureRequest: CreatePictureRequest,
    DescribeTrtcMcuTranscodeTimeRequest: DescribeTrtcMcuTranscodeTimeRequest,
    StopMCUMixTranscodeResponse: StopMCUMixTranscodeResponse,
    RemoveUserByStrRoomIdRequest: RemoveUserByStrRoomIdRequest,
    SubscribeStreamUserIds: SubscribeStreamUserIds,
    MixLayoutParams: MixLayoutParams,
    DismissRoomResponse: DismissRoomResponse,
    EventMessage: EventMessage,
    DescribeRecordStatisticRequest: DescribeRecordStatisticRequest,
    DescribeUserInformationRequest: DescribeUserInformationRequest,
    DescribeCallDetailRequest: DescribeCallDetailRequest,
    ScaleInfomation: ScaleInfomation,
    StorageParams: StorageParams,
    CloudVod: CloudVod,
    EncodeParams: EncodeParams,
    ModifyPictureRequest: ModifyPictureRequest,
    StartMCUMixTranscodeRequest: StartMCUMixTranscodeRequest,
    DescribeCloudRecordingRequest: DescribeCloudRecordingRequest,
    TencentVod: TencentVod,
    RecordParams: RecordParams,
    StopMCUMixTranscodeRequest: StopMCUMixTranscodeRequest,
    UserInformation: UserInformation,
    MixLayout: MixLayout,
    DescribeHistoryScaleRequest: DescribeHistoryScaleRequest,
    DeletePictureRequest: DeletePictureRequest,
    LayoutParams: LayoutParams,
    DescribeRoomInformationResponse: DescribeRoomInformationResponse,
    RecordUsage: RecordUsage,
    CreateCloudRecordingRequest: CreateCloudRecordingRequest,
    OutputParams: OutputParams,
    WaterMark: WaterMark,
    DeleteCloudRecordingResponse: DeleteCloudRecordingResponse,
    MixTranscodeParams: MixTranscodeParams,
    CreateTroubleInfoResponse: CreateTroubleInfoResponse,
    StopMCUMixTranscodeByStrRoomIdRequest: StopMCUMixTranscodeByStrRoomIdRequest,
    QualityData: QualityData,
    AbnormalEvent: AbnormalEvent,
    RemoveUserByStrRoomIdResponse: RemoveUserByStrRoomIdResponse,
    StopMCUMixTranscodeByStrRoomIdResponse: StopMCUMixTranscodeByStrRoomIdResponse,
    DeletePictureResponse: DeletePictureResponse,
    ModifyCloudRecordingRequest: ModifyCloudRecordingRequest,
    CreateTroubleInfoRequest: CreateTroubleInfoRequest,
    EventList: EventList,
    StorageFile: StorageFile,
    PictureInfo: PictureInfo,
    DescribeUserInformationResponse: DescribeUserInformationResponse,
    DescribeDetailEventResponse: DescribeDetailEventResponse,
    CreateCloudRecordingResponse: CreateCloudRecordingResponse,
    DescribeCallDetailResponse: DescribeCallDetailResponse,
    OneSdkAppIdTranscodeTimeUsagesInfo: OneSdkAppIdTranscodeTimeUsagesInfo,
    DescribeTrtcMcuTranscodeTimeResponse: DescribeTrtcMcuTranscodeTimeResponse,
    DeleteCloudRecordingRequest: DeleteCloudRecordingRequest,
    DescribePictureRequest: DescribePictureRequest,
    SdkAppIdRecordUsage: SdkAppIdRecordUsage,
    SmallVideoLayoutParams: SmallVideoLayoutParams,
    RemoveUserResponse: RemoveUserResponse,
    PresetLayoutConfig: PresetLayoutConfig,
    VideoParams: VideoParams,
    AudioParams: AudioParams,
    DescribePictureResponse: DescribePictureResponse,
    WaterMarkImage: WaterMarkImage,
    DismissRoomRequest: DismissRoomRequest,
    PublishCdnParams: PublishCdnParams,
    DescribeRoomInformationRequest: DescribeRoomInformationRequest,
    DescribeDetailEventRequest: DescribeDetailEventRequest,
    AbnormalExperience: AbnormalExperience,
    StartMCUMixTranscodeResponse: StartMCUMixTranscodeResponse,
    RoomState: RoomState,
    CreatePictureResponse: CreatePictureResponse,
    WaterMarkParams: WaterMarkParams,
    DescribeRecordStatisticResponse: DescribeRecordStatisticResponse,
    DismissRoomByStrRoomIdResponse: DismissRoomByStrRoomIdResponse,
    DescribeHistoryScaleResponse: DescribeHistoryScaleResponse,
    StartMCUMixTranscodeByStrRoomIdResponse: StartMCUMixTranscodeByStrRoomIdResponse,
    ModifyCloudRecordingResponse: ModifyCloudRecordingResponse,

}
