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
 * ApplyChorus返回参数结构体
 * @class
 */
class ApplyChorusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合唱 Token。
         * @type {string || null}
         */
        this.ChorusToken = null;

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
        this.ChorusToken = 'ChorusToken' in params ? params.ChorusToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节拍信息。
 * @class
 */
class KTVBPMInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节拍类型，取值有：
<li>Slow：慢；</li>
<li>Middle：中等；</li>
<li>Fast：快；</li>
<li>Unknown：未知。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * BPM 值。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeKTVSuggestions返回参数结构体
 * @class
 */
class DescribeKTVSuggestionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联想词信息列表。
         * @type {Array.<KTVSuggestionInfo> || null}
         */
        this.KTVSuggestionInfoSet = null;

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

        if (params.KTVSuggestionInfoSet) {
            this.KTVSuggestionInfoSet = new Array();
            for (let z in params.KTVSuggestionInfoSet) {
                let obj = new KTVSuggestionInfo();
                obj.deserialize(params.KTVSuggestionInfoSet[z]);
                this.KTVSuggestionInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 歌曲信息匹配。
 * @class
 */
class KTVMatchRuleMusicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲名称。
         * @type {string || null}
         */
        this.MusicName = null;

        /**
         * 歌手列表。
         * @type {Array.<string> || null}
         */
        this.SingerSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicName = 'MusicName' in params ? params.MusicName : null;
        this.SingerSet = 'SingerSet' in params ? params.SingerSet : null;

    }
}

/**
 * 直播进房输入参数
 * @class
 */
class JoinRoomInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC进房参数
         * @type {TRTCJoinRoomInput || null}
         */
        this.TRTCJoinRoomInput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TRTCJoinRoomInput) {
            let obj = new TRTCJoinRoomInput();
            obj.deserialize(params.TRTCJoinRoomInput)
            this.TRTCJoinRoomInput = obj;
        }

    }
}

/**
 * DestroyKTVRobot返回参数结构体
 * @class
 */
class DestroyKTVRobotResponse extends  AbstractModel {
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
 * 歌曲专辑封面信息。
 * @class
 */
class MusicAlbumCoverInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 尺寸规格，取值有：
<li>Mini：150 x 150 尺寸；</li>
<li>Small：240 x 240 尺寸；</li>
<li>Medium：480 x 480 尺寸。</li>
         * @type {string || null}
         */
        this.Dimension = null;

        /**
         * 下载链接。
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
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreateKTVRobot请求参数结构体
 * @class
 */
class CreateKTVRobotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * RTC厂商类型，取值有：
<li>TRTC</li>
         * @type {string || null}
         */
        this.RTCSystem = null;

        /**
         * 进房参数。
         * @type {JoinRoomInput || null}
         */
        this.JoinRoomInput = null;

        /**
         * 创建机器人时初始化参数。
         * @type {Array.<SyncRobotCommand> || null}
         */
        this.SyncRobotCommands = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RTCSystem = 'RTCSystem' in params ? params.RTCSystem : null;

        if (params.JoinRoomInput) {
            let obj = new JoinRoomInput();
            obj.deserialize(params.JoinRoomInput)
            this.JoinRoomInput = obj;
        }

        if (params.SyncRobotCommands) {
            this.SyncRobotCommands = new Array();
            for (let z in params.SyncRobotCommands) {
                let obj = new SyncRobotCommand();
                obj.deserialize(params.SyncRobotCommands[z]);
                this.SyncRobotCommands.push(obj);
            }
        }

    }
}

/**
 * 联想词信息。
 * @class
 */
class KTVSuggestionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联想词。
         * @type {string || null}
         */
        this.Suggestion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

    }
}

/**
 * SyncKTVRobotCommand请求参数结构体
 * @class
 */
class SyncKTVRobotCommandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人Id。
         * @type {string || null}
         */
        this.RobotId = null;

        /**
         * 指令及指令参数数组。
         * @type {Array.<SyncRobotCommand> || null}
         */
        this.SyncRobotCommands = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RobotId = 'RobotId' in params ? params.RobotId : null;

        if (params.SyncRobotCommands) {
            this.SyncRobotCommands = new Array();
            for (let z in params.SyncRobotCommands) {
                let obj = new SyncRobotCommand();
                obj.deserialize(params.SyncRobotCommands[z]);
                this.SyncRobotCommands.push(obj);
            }
        }

    }
}

/**
 * DescribeKTVPlaylistDetail请求参数结构体
 * @class
 */
class DescribeKTVPlaylistDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 歌单 Id。
         * @type {string || null}
         */
        this.PlaylistId = null;

        /**
         * 滚动标记。
         * @type {string || null}
         */
        this.ScrollToken = null;

        /**
         * 返回条数，默认：20，最大：50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
         * @type {Array.<string> || null}
         */
        this.RightFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PlaylistId = 'PlaylistId' in params ? params.PlaylistId : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RightFilters = 'RightFilters' in params ? params.RightFilters : null;

    }
}

/**
 * 歌曲详细信息。
 * @class
 */
class KTVMusicDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲基础信息。
         * @type {KTVMusicBaseInfo || null}
         */
        this.KTVMusicBaseInfo = null;

        /**
         * 播放凭证。
         * @type {string || null}
         */
        this.PlayToken = null;

        /**
         * 歌词下载链接。
         * @type {string || null}
         */
        this.LyricsUrl = null;

        /**
         * 音高数据下载链接。
         * @type {string || null}
         */
        this.MidiUrl = null;

        /**
         * 副歌片段信息。
         * @type {Array.<ChorusClip> || null}
         */
        this.ChorusClipSet = null;

        /**
         * 前奏间隔。
         * @type {number || null}
         */
        this.PreludeInterval = null;

        /**
         * 歌曲流派列表。
         * @type {Array.<string> || null}
         */
        this.GenreSet = null;

        /**
         * 节拍信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KTVBPMInfo || null}
         */
        this.BPMInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KTVMusicBaseInfo) {
            let obj = new KTVMusicBaseInfo();
            obj.deserialize(params.KTVMusicBaseInfo)
            this.KTVMusicBaseInfo = obj;
        }
        this.PlayToken = 'PlayToken' in params ? params.PlayToken : null;
        this.LyricsUrl = 'LyricsUrl' in params ? params.LyricsUrl : null;
        this.MidiUrl = 'MidiUrl' in params ? params.MidiUrl : null;

        if (params.ChorusClipSet) {
            this.ChorusClipSet = new Array();
            for (let z in params.ChorusClipSet) {
                let obj = new ChorusClip();
                obj.deserialize(params.ChorusClipSet[z]);
                this.ChorusClipSet.push(obj);
            }
        }
        this.PreludeInterval = 'PreludeInterval' in params ? params.PreludeInterval : null;
        this.GenreSet = 'GenreSet' in params ? params.GenreSet : null;

        if (params.BPMInfo) {
            let obj = new KTVBPMInfo();
            obj.deserialize(params.BPMInfo)
            this.BPMInfo = obj;
        }

    }
}

/**
 * CreateKTVRobot返回参数结构体
 * @class
 */
class CreateKTVRobotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人Id。
         * @type {string || null}
         */
        this.RobotId = null;

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
        this.RobotId = 'RobotId' in params ? params.RobotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKTVSuggestions请求参数结构体
 * @class
 */
class DescribeKTVSuggestionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 搜索词。
         * @type {string || null}
         */
        this.KeyWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;

    }
}

/**
 * DescribeKTVMatchMusics请求参数结构体
 * @class
 */
class DescribeKTVMatchMusicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 匹配规则列表。
         * @type {Array.<KTVMatchRule> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new KTVMatchRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * DescribeKTVPlaylists返回参数结构体
 * @class
 */
class DescribeKTVPlaylistsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌单基础信息。
         * @type {Array.<KTVPlaylistBaseInfo> || null}
         */
        this.PlaylistBaseInfoSet = null;

        /**
         * 歌单总数。
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

        if (params.PlaylistBaseInfoSet) {
            this.PlaylistBaseInfoSet = new Array();
            for (let z in params.PlaylistBaseInfoSet) {
                let obj = new KTVPlaylistBaseInfo();
                obj.deserialize(params.PlaylistBaseInfoSet[z]);
                this.PlaylistBaseInfoSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKTVPlaylists请求参数结构体
 * @class
 */
class DescribeKTVPlaylistsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 类型列表，取值有：
<li>OfficialRec：官方推荐；</li>
<li>Customize：自定义。</li>
默认值为 OfficialRec。
         * @type {Array.<string> || null}
         */
        this.Types = null;

        /**
         * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：20，最大值：50。
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Types = 'Types' in params ? params.Types : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeKTVPlaylistDetail返回参数结构体
 * @class
 */
class DescribeKTVPlaylistDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲信息列表。
         * @type {Array.<KTVMusicBaseInfo> || null}
         */
        this.KTVMusicInfoSet = null;

        /**
         * 滚动标记，用于设置下次请求的 ScrollToken 参数。
         * @type {string || null}
         */
        this.ScrollToken = null;

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

        if (params.KTVMusicInfoSet) {
            this.KTVMusicInfoSet = new Array();
            for (let z in params.KTVMusicInfoSet) {
                let obj = new KTVMusicBaseInfo();
                obj.deserialize(params.KTVMusicInfoSet[z]);
                this.KTVMusicInfoSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncKTVRobotCommand返回参数结构体
 * @class
 */
class SyncKTVRobotCommandResponse extends  AbstractModel {
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
 * 设置销毁模式
 * @class
 */
class SetDestroyModeCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 销毁模式，取值有：
<li>Auto：房间没人时自动销毁</li>
<li>Expire：房间没人时过期自动销毁</li>
<li>Never：不自动销毁，需手动销毁</li>默认为：Auto。
         * @type {string || null}
         */
        this.DestroyMode = null;

        /**
         * 过期销毁时间，单位：秒，当DestroyMode取Expire时必填。
         * @type {number || null}
         */
        this.DestroyExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestroyMode = 'DestroyMode' in params ? params.DestroyMode : null;
        this.DestroyExpireTime = 'DestroyExpireTime' in params ? params.DestroyExpireTime : null;

    }
}

/**
 * 音频参数信息
 * @class
 */
class SetAudioParamCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音频类型，取值有：
<li>Original：原唱</li>
<li>Accompaniment：伴奏</li>
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
 * 匹配歌曲信息。
 * @class
 */
class KTVMatchMusic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配到的歌曲基础信息。
         * @type {KTVMusicBaseInfo || null}
         */
        this.KTVMusicBaseInfo = null;

        /**
         * 命中规则。
         * @type {KTVMatchRule || null}
         */
        this.MatchRule = null;

        /**
         * AME 歌曲基础信息，仅在使用音速达歌曲 Id 匹配 AME 曲库时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AMEMusicBaseInfo || null}
         */
        this.AMEMusicBaseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KTVMusicBaseInfo) {
            let obj = new KTVMusicBaseInfo();
            obj.deserialize(params.KTVMusicBaseInfo)
            this.KTVMusicBaseInfo = obj;
        }

        if (params.MatchRule) {
            let obj = new KTVMatchRule();
            obj.deserialize(params.MatchRule)
            this.MatchRule = obj;
        }

        if (params.AMEMusicBaseInfo) {
            let obj = new AMEMusicBaseInfo();
            obj.deserialize(params.AMEMusicBaseInfo)
            this.AMEMusicBaseInfo = obj;
        }

    }
}

/**
 * TRTC推流进房信息
 * @class
 */
class TRTCJoinRoomInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名。
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 房间号。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 推流应用ID。
         * @type {string || null}
         */
        this.SdkAppId = null;

        /**
         * 用户唯一标识。
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
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * DescribeKTVRobots返回参数结构体
 * @class
 */
class DescribeKTVRobotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 机器人信息集合。
         * @type {Array.<KTVRobotInfo> || null}
         */
        this.KTVRobotInfoSet = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.KTVRobotInfoSet) {
            this.KTVRobotInfoSet = new Array();
            for (let z in params.KTVRobotInfoSet) {
                let obj = new KTVRobotInfo();
                obj.deserialize(params.KTVRobotInfoSet[z]);
                this.KTVRobotInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签分组信息。
 * @class
 */
class KTVTagGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组 Id。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 分组名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签列表。
         * @type {Array.<KTVTagInfo> || null}
         */
        this.TagInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.TagInfoSet) {
            this.TagInfoSet = new Array();
            for (let z in params.TagInfoSet) {
                let obj = new KTVTagInfo();
                obj.deserialize(params.TagInfoSet[z]);
                this.TagInfoSet.push(obj);
            }
        }

    }
}

/**
 * BatchDescribeKTVMusicDetails请求参数结构体
 * @class
 */
class BatchDescribeKTVMusicDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 歌曲 Id 列表。
         * @type {Array.<string> || null}
         */
        this.MusicIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.MusicIds = 'MusicIds' in params ? params.MusicIds : null;

    }
}

/**
 * AME 曲库歌曲基础信息。
 * @class
 */
class AMEMusicBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲 Id。
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 歌曲名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 歌手列表。
         * @type {Array.<string> || null}
         */
        this.SingerSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SingerSet = 'SingerSet' in params ? params.SingerSet : null;

    }
}

/**
 * DescribeKTVMusicsByTag返回参数结构体
 * @class
 */
class DescribeKTVMusicsByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲信息列表。
         * @type {Array.<KTVMusicBaseInfo> || null}
         */
        this.KTVMusicInfoSet = null;

        /**
         * 滚动标记，用于设置下次请求的 ScrollToken 参数。
         * @type {string || null}
         */
        this.ScrollToken = null;

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

        if (params.KTVMusicInfoSet) {
            this.KTVMusicInfoSet = new Array();
            for (let z in params.KTVMusicInfoSet) {
                let obj = new KTVMusicBaseInfo();
                obj.deserialize(params.KTVMusicInfoSet[z]);
                this.KTVMusicInfoSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签信息。
 * @class
 */
class KTVTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签 Id。
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 标签名称。
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
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 歌曲专辑信息。
 * @class
 */
class MusicAlbumInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专辑名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 封面列表。
         * @type {Array.<MusicAlbumCoverInfo> || null}
         */
        this.CoverInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.CoverInfoSet) {
            this.CoverInfoSet = new Array();
            for (let z in params.CoverInfoSet) {
                let obj = new MusicAlbumCoverInfo();
                obj.deserialize(params.CoverInfoSet[z]);
                this.CoverInfoSet.push(obj);
            }
        }

    }
}

/**
 * 设置播放模式
 * @class
 */
class SetPlayModeCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放模式，取值有：
<li>RepeatPlaylist：列表循环</li>
<li>Order：顺序播放</li>
<li>RepeatSingle：单曲循环</li>
<li>Shuffle：随机播放</li>
         * @type {string || null}
         */
        this.PlayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlayMode = 'PlayMode' in params ? params.PlayMode : null;

    }
}

/**
 * KTV 机器人初始化参数，在创建后自动完成相关初始化工作。
 * @class
 */
class SyncRobotCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可同时传入多个指令，顺序执行。取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>SwitchPrevious：上一首</li>
<li>SwitchNext：下一首</li>
<li>SetPlayMode：设置播放模式</li>
<li>Seek：调整播放进度</li>
<li>SetPlaylist：歌单变更</li>
<li>SetAudioParam：音频参数变更</li>
<li>SendMessage：发送自定义消息</li>
<li>SetDestroyMode：设置销毁模式</li>
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 播放参数。
         * @type {PlayCommandInput || null}
         */
        this.PlayCommandInput = null;

        /**
         * 播放列表变更信息，当Command取SetPlaylist时，必填。
         * @type {SetPlaylistCommandInput || null}
         */
        this.SetPlaylistCommandInput = null;

        /**
         * 播放进度，当Command取Seek时，必填。
         * @type {SeekCommandInput || null}
         */
        this.SeekCommandInput = null;

        /**
         * 音频参数，当Command取SetAudioParam时，必填。
         * @type {SetAudioParamCommandInput || null}
         */
        this.SetAudioParamCommandInput = null;

        /**
         * 自定义消息，当Command取SendMessage时，必填。
         * @type {SendMessageCommandInput || null}
         */
        this.SendMessageCommandInput = null;

        /**
         * 播放模式，当Command取SetPlayMode时，必填。
         * @type {SetPlayModeCommandInput || null}
         */
        this.SetPlayModeCommandInput = null;

        /**
         * 销毁模式，当Command取SetDestroyMode时，必填。
         * @type {SetDestroyModeCommandInput || null}
         */
        this.SetDestroyModeCommandInput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Command = 'Command' in params ? params.Command : null;

        if (params.PlayCommandInput) {
            let obj = new PlayCommandInput();
            obj.deserialize(params.PlayCommandInput)
            this.PlayCommandInput = obj;
        }

        if (params.SetPlaylistCommandInput) {
            let obj = new SetPlaylistCommandInput();
            obj.deserialize(params.SetPlaylistCommandInput)
            this.SetPlaylistCommandInput = obj;
        }

        if (params.SeekCommandInput) {
            let obj = new SeekCommandInput();
            obj.deserialize(params.SeekCommandInput)
            this.SeekCommandInput = obj;
        }

        if (params.SetAudioParamCommandInput) {
            let obj = new SetAudioParamCommandInput();
            obj.deserialize(params.SetAudioParamCommandInput)
            this.SetAudioParamCommandInput = obj;
        }

        if (params.SendMessageCommandInput) {
            let obj = new SendMessageCommandInput();
            obj.deserialize(params.SendMessageCommandInput)
            this.SendMessageCommandInput = obj;
        }

        if (params.SetPlayModeCommandInput) {
            let obj = new SetPlayModeCommandInput();
            obj.deserialize(params.SetPlayModeCommandInput)
            this.SetPlayModeCommandInput = obj;
        }

        if (params.SetDestroyModeCommandInput) {
            let obj = new SetDestroyModeCommandInput();
            obj.deserialize(params.SetDestroyModeCommandInput)
            this.SetDestroyModeCommandInput = obj;
        }

    }
}

/**
 * SearchKTVMusics返回参数结构体
 * @class
 */
class SearchKTVMusicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲信息列表。
         * @type {Array.<KTVMusicBaseInfo> || null}
         */
        this.KTVMusicInfoSet = null;

        /**
         * 滚动标记，用于设置下次请求的 ScrollToken 参数。
         * @type {string || null}
         */
        this.ScrollToken = null;

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

        if (params.KTVMusicInfoSet) {
            this.KTVMusicInfoSet = new Array();
            for (let z in params.KTVMusicInfoSet) {
                let obj = new KTVMusicBaseInfo();
                obj.deserialize(params.KTVMusicInfoSet[z]);
                this.KTVMusicInfoSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器人信息
 * @class
 */
class KTVRobotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器人Id。
         * @type {string || null}
         */
        this.RobotId = null;

        /**
         * 状态，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>Destroy：销毁</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 播放列表。
         * @type {Array.<string> || null}
         */
        this.Playlists = null;

        /**
         * 当前歌单索引位置。
         * @type {number || null}
         */
        this.CurIndex = null;

        /**
         * 播放进度，单位：毫秒。
         * @type {number || null}
         */
        this.Position = null;

        /**
         * 音频参数。
         * @type {SetAudioParamCommandInput || null}
         */
        this.SetAudioParamInput = null;

        /**
         * 进房信息。
         * @type {JoinRoomInput || null}
         */
        this.JoinRoomInput = null;

        /**
         * RTC厂商类型，取值有：
<li>TRTC</li>
         * @type {string || null}
         */
        this.RTCSystem = null;

        /**
         * 播放模式，PlayMode取值有：
<li>RepeatPlaylist：列表循环</li>
<li>Order：顺序播放</li>
<li>RepeatSingle：单曲循环</li>
<li>Shuffle：随机播放</li>
         * @type {SetPlayModeCommandInput || null}
         */
        this.SetPlayModeInput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RobotId = 'RobotId' in params ? params.RobotId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Playlists = 'Playlists' in params ? params.Playlists : null;
        this.CurIndex = 'CurIndex' in params ? params.CurIndex : null;
        this.Position = 'Position' in params ? params.Position : null;

        if (params.SetAudioParamInput) {
            let obj = new SetAudioParamCommandInput();
            obj.deserialize(params.SetAudioParamInput)
            this.SetAudioParamInput = obj;
        }

        if (params.JoinRoomInput) {
            let obj = new JoinRoomInput();
            obj.deserialize(params.JoinRoomInput)
            this.JoinRoomInput = obj;
        }
        this.RTCSystem = 'RTCSystem' in params ? params.RTCSystem : null;

        if (params.SetPlayModeInput) {
            let obj = new SetPlayModeCommandInput();
            obj.deserialize(params.SetPlayModeInput)
            this.SetPlayModeInput = obj;
        }

    }
}

/**
 * DescribeKTVMatchMusics返回参数结构体
 * @class
 */
class DescribeKTVMatchMusicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配到的歌曲列表。
         * @type {Array.<KTVMatchMusic> || null}
         */
        this.MatchMusicSet = null;

        /**
         * 未匹配的规则列表。
         * @type {Array.<KTVMatchRule> || null}
         */
        this.NotMatchRuleSet = null;

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

        if (params.MatchMusicSet) {
            this.MatchMusicSet = new Array();
            for (let z in params.MatchMusicSet) {
                let obj = new KTVMatchMusic();
                obj.deserialize(params.MatchMusicSet[z]);
                this.MatchMusicSet.push(obj);
            }
        }

        if (params.NotMatchRuleSet) {
            this.NotMatchRuleSet = new Array();
            for (let z in params.NotMatchRuleSet) {
                let obj = new KTVMatchRule();
                obj.deserialize(params.NotMatchRuleSet[z]);
                this.NotMatchRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKTVTags返回参数结构体
 * @class
 */
class DescribeKTVTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签分组列表。
         * @type {Array.<KTVTagGroupInfo> || null}
         */
        this.TagGroupInfoSet = null;

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

        if (params.TagGroupInfoSet) {
            this.TagGroupInfoSet = new Array();
            for (let z in params.TagGroupInfoSet) {
                let obj = new KTVTagGroupInfo();
                obj.deserialize(params.TagGroupInfoSet[z]);
                this.TagGroupInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 副歌片段信息。
 * @class
 */
class ChorusClip extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，单位：毫秒。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，单位：毫秒。
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
 * 设置播放列表指令参数
 * @class
 */
class SetPlaylistCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变更类型，取值有：
<li>Add：添加</li>
<li>Delete：删除</li>
<li>ClearList：清空歌曲列表</li>
<li>Move：移动歌曲</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 歌单索引位置，
当 Type 取 Add 时，-1表示添加在列表最后位置，大于-1表示要添加的位置；
当 Type 取 Delete 时，表示待删除歌曲的位置；
当 Type 取 Move 时，表示待调整歌曲的位置。
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 当 Type 取 Move 时，必填，表示移动歌曲的目标位置。
         * @type {number || null}
         */
        this.ChangedIndex = null;

        /**
         * 歌曲 ID 列表，当 Type 取 Add 时，必填。
         * @type {Array.<string> || null}
         */
        this.MusicIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Index = 'Index' in params ? params.Index : null;
        this.ChangedIndex = 'ChangedIndex' in params ? params.ChangedIndex : null;
        this.MusicIds = 'MusicIds' in params ? params.MusicIds : null;

    }
}

/**
 * ApplyChorus请求参数结构体
 * @class
 */
class ApplyChorusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 房间号。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 歌曲 Id。
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 最大合唱人数，默认值为 8，最大值为 20。
         * @type {number || null}
         */
        this.MaxChorusNum = null;

        /**
         * 合唱用户标识列表。
         * @type {Array.<string> || null}
         */
        this.ChorusUserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.MaxChorusNum = 'MaxChorusNum' in params ? params.MaxChorusNum : null;
        this.ChorusUserIds = 'ChorusUserIds' in params ? params.ChorusUserIds : null;

    }
}

/**
 * BatchDescribeKTVMusicDetails返回参数结构体
 * @class
 */
class BatchDescribeKTVMusicDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲详细信息列表。
         * @type {Array.<KTVMusicDetailInfo> || null}
         */
        this.KTVMusicDetailInfoSet = null;

        /**
         * 不存在歌曲Id列表。
         * @type {Array.<string> || null}
         */
        this.NotExistMusicIdSet = null;

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

        if (params.KTVMusicDetailInfoSet) {
            this.KTVMusicDetailInfoSet = new Array();
            for (let z in params.KTVMusicDetailInfoSet) {
                let obj = new KTVMusicDetailInfo();
                obj.deserialize(params.KTVMusicDetailInfoSet[z]);
                this.KTVMusicDetailInfoSet.push(obj);
            }
        }
        this.NotExistMusicIdSet = 'NotExistMusicIdSet' in params ? params.NotExistMusicIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 歌曲匹配规则。
 * @class
 */
class KTVMatchRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * AME 曲库 Id。
         * @type {string || null}
         */
        this.AMEMusicId = null;

        /**
         * 歌曲匹配信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KTVMatchRuleMusicInfo || null}
         */
        this.MusicInfo = null;

        /**
         * 音速达歌曲 Id，用于匹配 AME 曲库歌曲。
         * @type {string || null}
         */
        this.MusicIdToMatchAME = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AMEMusicId = 'AMEMusicId' in params ? params.AMEMusicId : null;

        if (params.MusicInfo) {
            let obj = new KTVMatchRuleMusicInfo();
            obj.deserialize(params.MusicInfo)
            this.MusicInfo = obj;
        }
        this.MusicIdToMatchAME = 'MusicIdToMatchAME' in params ? params.MusicIdToMatchAME : null;

    }
}

/**
 * 歌曲基础信息。
 * @class
 */
class KTVMusicBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id。
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 歌曲名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 歌手名称。
         * @type {Array.<string> || null}
         */
        this.SingerSet = null;

        /**
         * 播放时长。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 歌手图片链接。
         * @type {string || null}
         */
        this.SingerImageUrl = null;

        /**
         * 专辑信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MusicAlbumInfo || null}
         */
        this.AlbumInfo = null;

        /**
         * 权益列表，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
         * @type {Array.<string> || null}
         */
        this.RightSet = null;

        /**
         * 推荐类型，取值有：
<li>Featured：精选；</li>
<li>Other：其他。</li>
         * @type {string || null}
         */
        this.RecommendType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SingerSet = 'SingerSet' in params ? params.SingerSet : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.SingerImageUrl = 'SingerImageUrl' in params ? params.SingerImageUrl : null;

        if (params.AlbumInfo) {
            let obj = new MusicAlbumInfo();
            obj.deserialize(params.AlbumInfo)
            this.AlbumInfo = obj;
        }
        this.RightSet = 'RightSet' in params ? params.RightSet : null;
        this.RecommendType = 'RecommendType' in params ? params.RecommendType : null;

    }
}

/**
 * DescribeKTVMusicsByTag请求参数结构体
 * @class
 */
class DescribeKTVMusicsByTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 标签 Id。
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 滚动标记。
         * @type {string || null}
         */
        this.ScrollToken = null;

        /**
         * 返回条数限制，默认 20，最大 50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
         * @type {Array.<string> || null}
         */
        this.RightFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RightFilters = 'RightFilters' in params ? params.RightFilters : null;

    }
}

/**
 * SearchKTVMusics请求参数结构体
 * @class
 */
class SearchKTVMusicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 关键词。
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * 滚动标记。
         * @type {string || null}
         */
        this.ScrollToken = null;

        /**
         * 返回条数限制，默认 20，最大 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 权益过滤，取值有：
<li>Play：可播；</li>
<li>Sing：可唱。</li>
         * @type {Array.<string> || null}
         */
        this.RightFilters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RightFilters = 'RightFilters' in params ? params.RightFilters : null;

    }
}

/**
 * 播放指令输入参数
 * @class
 */
class PlayCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲位置索引。
         * @type {number || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * 时间范围
 * @class
 */
class TimeRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * <li>大于等于此时间（起始时间）。</li>
<li>格式按照 ISO 8601标准表示，详见 <a href="https://cloud.tencent.com/document/product/266/11732#I" target="_blank">ISO 日期格式说明</a>。</li>
         * @type {string || null}
         */
        this.Before = null;

        /**
         * <li>小于此时间（结束时间）。</li>
<li>格式按照 ISO 8601标准表示，详见 <a href="https://cloud.tencent.com/document/product/266/11732#I" target="_blank">ISO 日期格式说明</a>。</li>
         * @type {string || null}
         */
        this.After = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Before = 'Before' in params ? params.Before : null;
        this.After = 'After' in params ? params.After : null;

    }
}

/**
 * 歌单基础信息。
 * @class
 */
class KTVPlaylistBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌单Id。
         * @type {string || null}
         */
        this.PlaylistId = null;

        /**
         * 歌单标题。
         * @type {string || null}
         */
        this.Title = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlaylistId = 'PlaylistId' in params ? params.PlaylistId : null;
        this.Title = 'Title' in params ? params.Title : null;

    }
}

/**
 * 发送自定义信息指令参数
 * @class
 */
class SendMessageCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义消息，json格式字符串。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 消息重复次数，默认为 1。
         * @type {number || null}
         */
        this.Repeat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Repeat = 'Repeat' in params ? params.Repeat : null;

    }
}

/**
 * DestroyKTVRobot请求参数结构体
 * @class
 */
class DestroyKTVRobotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人Id。
         * @type {string || null}
         */
        this.RobotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RobotId = 'RobotId' in params ? params.RobotId : null;

    }
}

/**
 * DescribeKTVRobots请求参数结构体
 * @class
 */
class DescribeKTVRobotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 机器人Id列表。
         * @type {Array.<string> || null}
         */
        this.RobotIds = null;

        /**
         * 机器人状态，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>Destroy：销毁</li>
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * 匹配创建时间在此时间段内的机器人。
<li>包含所指定的头尾时间点。</li>
         * @type {TimeRange || null}
         */
        this.CreateTime = null;

        /**
         * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的起始偏移量，默认值：10。
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RobotIds = 'RobotIds' in params ? params.RobotIds : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;

        if (params.CreateTime) {
            let obj = new TimeRange();
            obj.deserialize(params.CreateTime)
            this.CreateTime = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeKTVTags请求参数结构体
 * @class
 */
class DescribeKTVTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 用户标识。
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
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * 调整播放进度指令参数
 * @class
 */
class SeekCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放位置，单位：毫秒。
         * @type {number || null}
         */
        this.Position = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Position = 'Position' in params ? params.Position : null;

    }
}

module.exports = {
    ApplyChorusResponse: ApplyChorusResponse,
    KTVBPMInfo: KTVBPMInfo,
    DescribeKTVSuggestionsResponse: DescribeKTVSuggestionsResponse,
    KTVMatchRuleMusicInfo: KTVMatchRuleMusicInfo,
    JoinRoomInput: JoinRoomInput,
    DestroyKTVRobotResponse: DestroyKTVRobotResponse,
    MusicAlbumCoverInfo: MusicAlbumCoverInfo,
    CreateKTVRobotRequest: CreateKTVRobotRequest,
    KTVSuggestionInfo: KTVSuggestionInfo,
    SyncKTVRobotCommandRequest: SyncKTVRobotCommandRequest,
    DescribeKTVPlaylistDetailRequest: DescribeKTVPlaylistDetailRequest,
    KTVMusicDetailInfo: KTVMusicDetailInfo,
    CreateKTVRobotResponse: CreateKTVRobotResponse,
    DescribeKTVSuggestionsRequest: DescribeKTVSuggestionsRequest,
    DescribeKTVMatchMusicsRequest: DescribeKTVMatchMusicsRequest,
    DescribeKTVPlaylistsResponse: DescribeKTVPlaylistsResponse,
    DescribeKTVPlaylistsRequest: DescribeKTVPlaylistsRequest,
    DescribeKTVPlaylistDetailResponse: DescribeKTVPlaylistDetailResponse,
    SyncKTVRobotCommandResponse: SyncKTVRobotCommandResponse,
    SetDestroyModeCommandInput: SetDestroyModeCommandInput,
    SetAudioParamCommandInput: SetAudioParamCommandInput,
    KTVMatchMusic: KTVMatchMusic,
    TRTCJoinRoomInput: TRTCJoinRoomInput,
    DescribeKTVRobotsResponse: DescribeKTVRobotsResponse,
    KTVTagGroupInfo: KTVTagGroupInfo,
    BatchDescribeKTVMusicDetailsRequest: BatchDescribeKTVMusicDetailsRequest,
    AMEMusicBaseInfo: AMEMusicBaseInfo,
    DescribeKTVMusicsByTagResponse: DescribeKTVMusicsByTagResponse,
    KTVTagInfo: KTVTagInfo,
    MusicAlbumInfo: MusicAlbumInfo,
    SetPlayModeCommandInput: SetPlayModeCommandInput,
    SyncRobotCommand: SyncRobotCommand,
    SearchKTVMusicsResponse: SearchKTVMusicsResponse,
    KTVRobotInfo: KTVRobotInfo,
    DescribeKTVMatchMusicsResponse: DescribeKTVMatchMusicsResponse,
    DescribeKTVTagsResponse: DescribeKTVTagsResponse,
    ChorusClip: ChorusClip,
    SetPlaylistCommandInput: SetPlaylistCommandInput,
    ApplyChorusRequest: ApplyChorusRequest,
    BatchDescribeKTVMusicDetailsResponse: BatchDescribeKTVMusicDetailsResponse,
    KTVMatchRule: KTVMatchRule,
    KTVMusicBaseInfo: KTVMusicBaseInfo,
    DescribeKTVMusicsByTagRequest: DescribeKTVMusicsByTagRequest,
    SearchKTVMusicsRequest: SearchKTVMusicsRequest,
    PlayCommandInput: PlayCommandInput,
    TimeRange: TimeRange,
    KTVPlaylistBaseInfo: KTVPlaylistBaseInfo,
    SendMessageCommandInput: SendMessageCommandInput,
    DestroyKTVRobotRequest: DestroyKTVRobotRequest,
    DescribeKTVRobotsRequest: DescribeKTVRobotsRequest,
    DescribeKTVTagsRequest: DescribeKTVTagsRequest,
    SeekCommandInput: SeekCommandInput,

}
