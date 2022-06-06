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
 * DescribeMusic返回参数结构体
 * @class
 */
class DescribeMusicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音乐相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Music || null}
         */
        this.Music = null;

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

        if (params.Music) {
            let obj = new Music();
            obj.deserialize(params.Music)
            this.Music = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 联想词信息列表。返回总数最大为10。
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
 * 副歌片段信息
 * @class
 */
class ChorusClip extends  AbstractModel {
    constructor(){
        super();

        /**
         * 副歌时间，单位：毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 副歌结束时间，单位：毫秒
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
 * ModifyMusicOnShelves返回参数结构体
 * @class
 */
class ModifyMusicOnShelvesResponse extends  AbstractModel {
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
 * 分类内容
 * @class
 */
class Station extends  AbstractModel {
    constructor(){
        super();

        /**
         * StationID
         * @type {string || null}
         */
        this.CategoryID = null;

        /**
         * Station MCCode
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CategoryCode = null;

        /**
         * Category Name
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Station的排序值，供参考（返回结果已按其升序）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rank = null;

        /**
         * station图片集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImagePath> || null}
         */
        this.ImagePathMap = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CategoryID = 'CategoryID' in params ? params.CategoryID : null;
        this.CategoryCode = 'CategoryCode' in params ? params.CategoryCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Rank = 'Rank' in params ? params.Rank : null;

        if (params.ImagePathMap) {
            this.ImagePathMap = new Array();
            for (let z in params.ImagePathMap) {
                let obj = new ImagePath();
                obj.deserialize(params.ImagePathMap[z]);
                this.ImagePathMap.push(obj);
            }
        }

    }
}

/**
 * DescribeKTVMusicDetail请求参数结构体
 * @class
 */
class DescribeKTVMusicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 曲目 Id
         * @type {string || null}
         */
        this.MusicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;

    }
}

/**
 * 排行榜结构
 * @class
 */
class KTVMusicTopInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 歌曲名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 歌手名称列表
         * @type {Array.<KTVSingerBaseInfo> || null}
         */
        this.SingerInfoSet = null;

        /**
         * 歌词名称列表
         * @type {Array.<string> || null}
         */
        this.LyricistSet = null;

        /**
         * 作曲列表
         * @type {Array.<string> || null}
         */
        this.ComposerSet = null;

        /**
         * 标签列表
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 播放时长
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
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SingerInfoSet) {
            this.SingerInfoSet = new Array();
            for (let z in params.SingerInfoSet) {
                let obj = new KTVSingerBaseInfo();
                obj.deserialize(params.SingerInfoSet[z]);
                this.SingerInfoSet.push(obj);
            }
        }
        this.LyricistSet = 'LyricistSet' in params ? params.LyricistSet : null;
        this.ComposerSet = 'ComposerSet' in params ? params.ComposerSet : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * DescribeKTVSingerCategories请求参数结构体
 * @class
 */
class DescribeKTVSingerCategoriesRequest extends  AbstractModel {
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
 * KTV 歌手基础信息
 * @class
 */
class KTVSingerBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌手id
         * @type {string || null}
         */
        this.SingerId = null;

        /**
         * 歌手名
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
        this.SingerId = 'SingerId' in params ? params.SingerId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyMusicOnShelves请求参数结构体
 * @class
 */
class ModifyMusicOnShelvesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲变更信息
         * @type {MusicDetailInfo || null}
         */
        this.MusicDetailInfos = null;

        /**
         * ame对接资源方密钥
         * @type {string || null}
         */
        this.AmeKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MusicDetailInfos) {
            let obj = new MusicDetailInfo();
            obj.deserialize(params.MusicDetailInfos)
            this.MusicDetailInfos = obj;
        }
        this.AmeKey = 'AmeKey' in params ? params.AmeKey : null;

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
 * DescribeMusic请求参数结构体
 * @class
 */
class DescribeMusicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲ID
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 在应用前端播放音乐C端用户的唯一标识。无需是账户信息，用户唯一标识即可。
         * @type {string || null}
         */
        this.IdentityId = null;

        /**
         * MP3-320K-FTD-P  为获取320kbps歌曲热门片段。
MP3-320K-FTD 为获取320kbps已核验歌曲完整资源。
         * @type {string || null}
         */
        this.SubItemType = null;

        /**
         * CDN URL Protocol:HTTP or HTTPS/SSL
Values:Y , N(default)
         * @type {string || null}
         */
        this.Ssl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.IdentityId = 'IdentityId' in params ? params.IdentityId : null;
        this.SubItemType = 'SubItemType' in params ? params.SubItemType : null;
        this.Ssl = 'Ssl' in params ? params.Ssl : null;

    }
}

/**
 * 即使广播曲库歌曲信息详情列表
 * @class
 */
class KTVMusicDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 即使广播曲库歌曲基础信息
         * @type {KTVMusicBaseInfo || null}
         */
        this.KTVMusicBaseInfo = null;

        /**
         * 播放凭证
         * @type {string || null}
         */
        this.PlayToken = null;

        /**
         * 歌词下载地址
         * @type {string || null}
         */
        this.LyricsUrl = null;

        /**
         * 歌曲规格信息列表
         * @type {Array.<KTVMusicDefinitionInfo> || null}
         */
        this.DefinitionInfoSet = null;

        /**
         * 音高数据文件下载地址
         * @type {string || null}
         */
        this.MidiJsonUrl = null;

        /**
         * 副歌片段数据列表
         * @type {Array.<ChorusClip> || null}
         */
        this.ChorusClipSet = null;

        /**
         * 前奏间隔，单位：毫秒；注：若参数返回为0则无人声部分
         * @type {number || null}
         */
        this.PreludeInterval = null;

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

        if (params.DefinitionInfoSet) {
            this.DefinitionInfoSet = new Array();
            for (let z in params.DefinitionInfoSet) {
                let obj = new KTVMusicDefinitionInfo();
                obj.deserialize(params.DefinitionInfoSet[z]);
                this.DefinitionInfoSet.push(obj);
            }
        }
        this.MidiJsonUrl = 'MidiJsonUrl' in params ? params.MidiJsonUrl : null;

        if (params.ChorusClipSet) {
            this.ChorusClipSet = new Array();
            for (let z in params.ChorusClipSet) {
                let obj = new ChorusClip();
                obj.deserialize(params.ChorusClipSet[z]);
                this.ChorusClipSet.push(obj);
            }
        }
        this.PreludeInterval = 'PreludeInterval' in params ? params.PreludeInterval : null;

    }
}

/**
 * DescribeMusicSaleStatus请求参数结构体
 * @class
 */
class DescribeMusicSaleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id集合，可传单个，也可传多个，上线查询单次50个
         * @type {Array.<string> || null}
         */
        this.MusicIds = null;

        /**
         * 查询哪个渠道的数据，1为曲库包，2为单曲
         * @type {number || null}
         */
        this.PurchaseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicIds = 'MusicIds' in params ? params.MusicIds : null;
        this.PurchaseType = 'PurchaseType' in params ? params.PurchaseType : null;

    }
}

/**
 * TakeMusicOffShelves请求参数结构体
 * @class
 */
class TakeMusicOffShelvesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源方下架必传结构
         * @type {Array.<TakeMusicOffShelves> || null}
         */
        this.TakeMusicOffShelves = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TakeMusicOffShelves) {
            this.TakeMusicOffShelves = new Array();
            for (let z in params.TakeMusicOffShelves) {
                let obj = new TakeMusicOffShelves();
                obj.deserialize(params.TakeMusicOffShelves[z]);
                this.TakeMusicOffShelves.push(obj);
            }
        }

    }
}

/**
 * DescribeCloudMusic返回参数结构体
 * @class
 */
class DescribeCloudMusicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 歌曲名称
         * @type {string || null}
         */
        this.MusicName = null;

        /**
         * 歌曲时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 歌曲链接
         * @type {string || null}
         */
        this.MusicUrl = null;

        /**
         * 歌曲图片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MusicImageUrl = null;

        /**
         * 歌手列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Singers = null;

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
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.MusicName = 'MusicName' in params ? params.MusicName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.MusicUrl = 'MusicUrl' in params ? params.MusicUrl : null;
        this.MusicImageUrl = 'MusicImageUrl' in params ? params.MusicImageUrl : null;
        this.Singers = 'Singers' in params ? params.Singers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 歌曲变更细节
 * @class
 */
class MusicDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源方音乐Id
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 资源方识别信息
         * @type {string || null}
         */
        this.AmeId = null;

        /**
         * 分类标签
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 关键词
         * @type {Array.<string> || null}
         */
        this.HitWords = null;

        /**
         * 节奏信息
         * @type {number || null}
         */
        this.Bpm = null;

        /**
         * 商业化权益
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 应用歌曲信息,1.图文/短视频,2.网络直播,3.网络电台FM,4.免费游戏,5.商业游戏,6.网店网站设计,7.广告营销,8.网络长视频
         * @type {Array.<string> || null}
         */
        this.Scene = null;

        /**
         * 应用地域,1. 中国大陆,2. 中国含港澳台,3. 全球
         * @type {Array.<string> || null}
         */
        this.Region = null;

        /**
         * 授权时间,1. 1年, 5. 随片永久
         * @type {string || null}
         */
        this.AuthPeriod = null;

        /**
         * 商业化授权，1. 支持商业化 ,2. 不支持商业化
         * @type {string || null}
         */
        this.Commercialization = null;

        /**
         * 跨平台传播，1. 支持跨平台传播 ,2. 不支持跨平台传播
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 传播渠道
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.AmeId = 'AmeId' in params ? params.AmeId : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.HitWords = 'HitWords' in params ? params.HitWords : null;
        this.Bpm = 'Bpm' in params ? params.Bpm : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.AuthPeriod = 'AuthPeriod' in params ? params.AuthPeriod : null;
        this.Commercialization = 'Commercialization' in params ? params.Commercialization : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * 图片路径
 * @class
 */
class ImagePath extends  AbstractModel {
    constructor(){
        super();

        /**
         * station图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * station图片地址
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 即使广播曲库歌曲标签信息
 * @class
 */
class KTVMusicTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签Id
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * 标签
         * @type {string || null}
         */
        this.TagName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.TagName = 'TagName' in params ? params.TagName : null;

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
        this.RobotId = 'RobotId' in params ? params.RobotId : null;

    }
}

/**
 * DescribeAuthInfo返回参数结构体
 * @class
 */
class DescribeAuthInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权项目列表
         * @type {Array.<AuthInfo> || null}
         */
        this.AuthInfo = null;

        /**
         * 总数
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

        if (params.AuthInfo) {
            this.AuthInfo = new Array();
            for (let z in params.AuthInfo) {
                let obj = new AuthInfo();
                obj.deserialize(params.AuthInfo[z]);
                this.AuthInfo.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLyric请求参数结构体
 * @class
 */
class DescribeLyricRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲ID
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 格式，可选项，可不填写，默认值为：LRC-LRC。
<li>LRC-LRC：歌词；</li>
<li>JSON-ST：波形图。</li>
         * @type {string || null}
         */
        this.SubItemType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.SubItemType = 'SubItemType' in params ? params.SubItemType : null;

    }
}

/**
 * ReportData请求参数结构体
 * @class
 */
class ReportDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上报数据
注:reportData为客户端压缩后的上报数据进行16进制转换的字符串数据
压缩说明：
a) 上报的json格式字符串通过流的转换（ByteArrayInputStream, java.util.zip.GZIPOutputStream），获取到压缩后的字节数组。
b) 将压缩后的字节数组转成16进制字符串。

reportData由两部分数据组成：
1）report_type（上报类型）
2）data（歌曲上报数据）
不同的report_type对应的data数据结构不一样。

详细说明请参考文档reportdata.docx：
https://github.com/tencentyun/ame-documents
         * @type {string || null}
         */
        this.ReportData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportData = 'ReportData' in params ? params.ReportData : null;

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

/**
 * DescribePkgOfflineMusic请求参数结构体
 * @class
 */
class DescribePkgOfflineMusicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单id
         * @type {string || null}
         */
        this.PackageOrderId = null;

        /**
         * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条(注：单次上限为100)。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
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
        this.PackageOrderId = 'PackageOrderId' in params ? params.PackageOrderId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeMusicSaleStatus返回参数结构体
 * @class
 */
class DescribeMusicSaleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * musicId对应歌曲状态
         * @type {Array.<MusicStatus> || null}
         */
        this.MusicStatusSet = null;

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

        if (params.MusicStatusSet) {
            this.MusicStatusSet = new Array();
            for (let z in params.MusicStatusSet) {
                let obj = new MusicStatus();
                obj.deserialize(params.MusicStatusSet[z]);
                this.MusicStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribePackageItems返回参数结构体
 * @class
 */
class DescribePackageItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已核销歌曲信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PackageItem> || null}
         */
        this.PackageItems = null;

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

        if (params.PackageItems) {
            this.PackageItems = new Array();
            for (let z in params.PackageItems) {
                let obj = new PackageItem();
                obj.deserialize(params.PackageItems[z]);
                this.PackageItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudMusicPurchased返回参数结构体
 * @class
 */
class DescribeCloudMusicPurchasedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云音乐列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MusicOpenDetail> || null}
         */
        this.MusicOpenDetail = null;

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

        if (params.MusicOpenDetail) {
            this.MusicOpenDetail = new Array();
            for (let z in params.MusicOpenDetail) {
                let obj = new MusicOpenDetail();
                obj.deserialize(params.MusicOpenDetail[z]);
                this.MusicOpenDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 即使广播曲库歌曲标签分组信息
 * @class
 */
class KTVMusicTagGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签分组英文名
         * @type {string || null}
         */
        this.EnglishGroupName = null;

        /**
         * 标签分组中文名
         * @type {string || null}
         */
        this.ChineseGroupName = null;

        /**
         * 标签分类下标签列表
         * @type {Array.<KTVMusicTagInfo> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnglishGroupName = 'EnglishGroupName' in params ? params.EnglishGroupName : null;
        this.ChineseGroupName = 'ChineseGroupName' in params ? params.ChineseGroupName : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new KTVMusicTagInfo();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * 数据信息
 * @class
 */
class DataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Song Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 歌曲版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 歌曲总时长（非试听时长）
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 试听开始时间
         * @type {number || null}
         */
        this.AuditionBegin = null;

        /**
         * 试听结束时间
         * @type {number || null}
         */
        this.AuditionEnd = null;

        /**
         * 标签名称
         * @type {Array.<string> || null}
         */
        this.TagNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.AuditionBegin = 'AuditionBegin' in params ? params.AuditionBegin : null;
        this.AuditionEnd = 'AuditionEnd' in params ? params.AuditionEnd : null;
        this.TagNames = 'TagNames' in params ? params.TagNames : null;

    }
}

/**
 * 用户license基础信息
 * @class
 */
class ApplicationLicenseInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称，注：后面三个字段AndroidPackageName、IOSBundleId、PcIdentifier，三者选填一个
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * app的安卓包名
         * @type {string || null}
         */
        this.AndroidPackageName = null;

        /**
         * app的IOS的BundleId名
         * @type {string || null}
         */
        this.IOSBundleId = null;

        /**
         * PC标识名
         * @type {string || null}
         */
        this.PcIdentifier = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AndroidPackageName = 'AndroidPackageName' in params ? params.AndroidPackageName : null;
        this.IOSBundleId = 'IOSBundleId' in params ? params.IOSBundleId : null;
        this.PcIdentifier = 'PcIdentifier' in params ? params.PcIdentifier : null;

    }
}

/**
 * Artist
 * @class
 */
class Artist extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌手名
         * @type {string || null}
         */
        this.ArtistName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArtistName = 'ArtistName' in params ? params.ArtistName : null;

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
 * ReportData返回参数结构体
 * @class
 */
class ReportDataResponse extends  AbstractModel {
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
 * SearchKTVMusics返回参数结构体
 * @class
 */
class SearchKTVMusicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * KTV 曲目列表
         * @type {Array.<KTVMusicBaseInfo> || null}
         */
        this.KTVMusicInfoSet = null;

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

        if (params.KTVMusicInfoSet) {
            this.KTVMusicInfoSet = new Array();
            for (let z in params.KTVMusicInfoSet) {
                let obj = new KTVMusicBaseInfo();
                obj.deserialize(params.KTVMusicInfoSet[z]);
                this.KTVMusicInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeItemById请求参数结构体
 * @class
 */
class DescribeItemByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲ID，目前暂不支持批量查询
         * @type {string || null}
         */
        this.ItemIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemIDs = 'ItemIDs' in params ? params.ItemIDs : null;

    }
}

/**
 * PutMusicOnTheShelves返回参数结构体
 * @class
 */
class PutMusicOnTheShelvesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作成功数量
         * @type {number || null}
         */
        this.SuccessNum = null;

        /**
         * 操作失败数量
         * @type {number || null}
         */
        this.FailedNum = null;

        /**
         * 失败歌曲Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedMusicIds = null;

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
        this.SuccessNum = 'SuccessNum' in params ? params.SuccessNum : null;
        this.FailedNum = 'FailedNum' in params ? params.FailedNum : null;
        this.FailedMusicIds = 'FailedMusicIds' in params ? params.FailedMusicIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<li>SetVolume：设置音量</li>
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

        /**
         * 音量，当Command取SetVolume时，必填。
         * @type {SetVolumeCommandInput || null}
         */
        this.SetVolumeCommandInput = null;

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

        if (params.SetVolumeCommandInput) {
            let obj = new SetVolumeCommandInput();
            obj.deserialize(params.SetVolumeCommandInput)
            this.SetVolumeCommandInput = obj;
        }

    }
}

/**
 * DescribeKTVSingerMusics返回参数结构体
 * @class
 */
class DescribeKTVSingerMusicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总曲目数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * KTV 曲目列表
         * @type {Array.<KTVMusicBaseInfo> || null}
         */
        this.KTVMusicInfoSet = null;

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

        if (params.KTVMusicInfoSet) {
            this.KTVMusicInfoSet = new Array();
            for (let z in params.KTVMusicInfoSet) {
                let obj = new KTVMusicBaseInfo();
                obj.deserialize(params.KTVMusicInfoSet[z]);
                this.KTVMusicInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeItems返回参数结构体
 * @class
 */
class DescribeItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 当前页歌曲数量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 总数据条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 剩余数量（total-offset-size），通过这个值判断是否
还有下一页
         * @type {number || null}
         */
        this.HaveMore = null;

        /**
         * Items 歌曲列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Item> || null}
         */
        this.Items = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.HaveMore = 'HaveMore' in params ? params.HaveMore : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePkgOfflineMusic返回参数结构体
 * @class
 */
class DescribePkgOfflineMusicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 曲库包中不可用歌曲信息
         * @type {Array.<OfflineMusicDetail> || null}
         */
        this.OfflineMusicSet = null;

        /**
         * 返回总量
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

        if (params.OfflineMusicSet) {
            this.OfflineMusicSet = new Array();
            for (let z in params.OfflineMusicSet) {
                let obj = new OfflineMusicDetail();
                obj.deserialize(params.OfflineMusicSet[z]);
                this.OfflineMusicSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直播互动歌曲的歌手信息。
 * @class
 */
class KTVSingerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌手id
         * @type {string || null}
         */
        this.SingerId = null;

        /**
         * 歌手名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 歌手性别: 男，女，组合
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 地区: 大陆，港台，欧美，日本
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 歌曲数
         * @type {number || null}
         */
        this.MusicCount = null;

        /**
         * 歌曲总播放次数
         * @type {number || null}
         */
        this.PlayCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SingerId = 'SingerId' in params ? params.SingerId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.MusicCount = 'MusicCount' in params ? params.MusicCount : null;
        this.PlayCount = 'PlayCount' in params ? params.PlayCount : null;

    }
}

/**
 * 设置音量。
 * @class
 */
class SetVolumeCommandInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音量大小，取值范围为 0~100，默认值为 50。
         * @type {number || null}
         */
        this.Volume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * PutMusicOnTheShelves请求参数结构体
 * @class
 */
class PutMusicOnTheShelvesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源方歌曲Id
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
        this.MusicIds = 'MusicIds' in params ? params.MusicIds : null;

    }
}

/**
 * DescribeCloudMusic请求参数结构体
 * @class
 */
class DescribeCloudMusicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 歌曲类型，可选值有：
<li>MP3-128K-FTW：含有水印的试听资源；</li>
<li>MP3-320K-FTD-P：320kbps歌曲热门片段；</li>
<li>MP3-320K-FTD：320kbps已核验歌曲完整资源。</li>
默认为：MP3-128K-FTW
         * @type {string || null}
         */
        this.MusicType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.MusicType = 'MusicType' in params ? params.MusicType : null;

    }
}

/**
 * 排序依据
 * @class
 */
class SortBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 排序方式，可选值：Asc（升序）、Desc（降序）
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeKTVMusicDetail返回参数结构体
 * @class
 */
class DescribeKTVMusicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲基础信息
         * @type {KTVMusicBaseInfo || null}
         */
        this.KTVMusicBaseInfo = null;

        /**
         * 播放凭证
         * @type {string || null}
         */
        this.PlayToken = null;

        /**
         * 歌词下载地址
         * @type {string || null}
         */
        this.LyricsUrl = null;

        /**
         * 歌曲规格信息列表
         * @type {Array.<KTVMusicDefinitionInfo> || null}
         */
        this.DefinitionInfoSet = null;

        /**
         * 音高数据文件下载地址
         * @type {string || null}
         */
        this.MidiJsonUrl = null;

        /**
         * 副歌片段数据列表
         * @type {Array.<ChorusClip> || null}
         */
        this.ChorusClipSet = null;

        /**
         * 前奏间隔，单位：毫秒；注：若参数返回为0则无人声部分
         * @type {number || null}
         */
        this.PreludeInterval = null;

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

        if (params.KTVMusicBaseInfo) {
            let obj = new KTVMusicBaseInfo();
            obj.deserialize(params.KTVMusicBaseInfo)
            this.KTVMusicBaseInfo = obj;
        }
        this.PlayToken = 'PlayToken' in params ? params.PlayToken : null;
        this.LyricsUrl = 'LyricsUrl' in params ? params.LyricsUrl : null;

        if (params.DefinitionInfoSet) {
            this.DefinitionInfoSet = new Array();
            for (let z in params.DefinitionInfoSet) {
                let obj = new KTVMusicDefinitionInfo();
                obj.deserialize(params.DefinitionInfoSet[z]);
                this.DefinitionInfoSet.push(obj);
            }
        }
        this.MidiJsonUrl = 'MidiJsonUrl' in params ? params.MidiJsonUrl : null;

        if (params.ChorusClipSet) {
            this.ChorusClipSet = new Array();
            for (let z in params.ChorusClipSet) {
                let obj = new ChorusClip();
                obj.deserialize(params.ChorusClipSet[z]);
                this.ChorusClipSet.push(obj);
            }
        }
        this.PreludeInterval = 'PreludeInterval' in params ? params.PreludeInterval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeKTVMusicTags返回参数结构体
 * @class
 */
class DescribeKTVMusicTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签分组列表
         * @type {Array.<KTVMusicTagGroup> || null}
         */
        this.TagGroupSet = null;

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

        if (params.TagGroupSet) {
            this.TagGroupSet = new Array();
            for (let z in params.TagGroupSet) {
                let obj = new KTVMusicTagGroup();
                obj.deserialize(params.TagGroupSet[z]);
                this.TagGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKTVMusicTags请求参数结构体
 * @class
 */
class DescribeKTVMusicTagsRequest extends  AbstractModel {
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
 * CreateKTVRobot请求参数结构体
 * @class
 */
class CreateKTVRobotRequest extends  AbstractModel {
    constructor(){
        super();

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
         * license基础信息
         * @type {ApplicationLicenseInput || null}
         */
        this.ApplicationLicenseInput = null;

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
        this.RTCSystem = 'RTCSystem' in params ? params.RTCSystem : null;

        if (params.JoinRoomInput) {
            let obj = new JoinRoomInput();
            obj.deserialize(params.JoinRoomInput)
            this.JoinRoomInput = obj;
        }

        if (params.ApplicationLicenseInput) {
            let obj = new ApplicationLicenseInput();
            obj.deserialize(params.ApplicationLicenseInput)
            this.ApplicationLicenseInput = obj;
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
 * 即使广播曲库联想词信息
 * @class
 */
class KTVSuggestionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联想词
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
 * DescribeKTVTopList请求参数结构体
 * @class
 */
class DescribeKTVTopListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 榜单类型。默认Hot
<li> Hot, 热歌榜。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 榜单周期 默认为Week
<li> Week, 周榜。</li>
<li> Month, 月榜。</li>
         * @type {string || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Period = 'Period' in params ? params.Period : null;

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
         * 歌单Id
         * @type {string || null}
         */
        this.PlaylistId = null;

        /**
         * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
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
        this.PlaylistId = 'PlaylistId' in params ? params.PlaylistId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 音乐详情
 * @class
 */
class Music extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音乐播放链接相对路径，必须通过在正版曲库直通车控制台上登记的域名进行拼接。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 音频文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 音频文件类型
         * @type {string || null}
         */
        this.FileExtension = null;

        /**
         * Song fragment start.试听片段开始时间，试听时长为auditionEnd-auditionBegin
Unit :ms
         * @type {number || null}
         */
        this.AuditionBegin = null;

        /**
         * Song fragment end.试听片段结束时间, 试听时长为auditionEnd-auditionBegin
Unit :ms
         * @type {number || null}
         */
        this.AuditionEnd = null;

        /**
         * 音乐播放链接全路径，前提是在正版曲库直通车控制台添加过域名，否则返回空字符。
如果添加过多个域名只返回第一个添加域名的播放全路径。
         * @type {string || null}
         */
        this.FullUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileExtension = 'FileExtension' in params ? params.FileExtension : null;
        this.AuditionBegin = 'AuditionBegin' in params ? params.AuditionBegin : null;
        this.AuditionEnd = 'AuditionEnd' in params ? params.AuditionEnd : null;
        this.FullUrl = 'FullUrl' in params ? params.FullUrl : null;

    }
}

/**
 * DescribeStations返回参数结构体
 * @class
 */
class DescribeStationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 当前页station数量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 剩余数量（total-offset-size），通过这个值判断是否还有下一页
         * @type {number || null}
         */
        this.HaveMore = null;

        /**
         * Stations 素材库列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Station> || null}
         */
        this.Stations = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.HaveMore = 'HaveMore' in params ? params.HaveMore : null;

        if (params.Stations) {
            this.Stations = new Array();
            for (let z in params.Stations) {
                let obj = new Station();
                obj.deserialize(params.Stations[z]);
                this.Stations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudMusicPurchased请求参数结构体
 * @class
 */
class DescribeCloudMusicPurchasedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权项目Id
         * @type {string || null}
         */
        this.AuthInfoId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthInfoId = 'AuthInfoId' in params ? params.AuthInfoId : null;

    }
}

/**
 * 曲库包歌曲信息
 * @class
 */
class PackageItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单id
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 歌曲名
         * @type {string || null}
         */
        this.TrackName = null;

        /**
         * 歌曲ID
         * @type {string || null}
         */
        this.ItemID = null;

        /**
         * 专辑图片
         * @type {string || null}
         */
        this.Img = null;

        /**
         * 歌手名
         * @type {string || null}
         */
        this.ArtistName = null;

        /**
         * 歌曲时长
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * 授权区域，global: 全球 CN: 中国
         * @type {string || null}
         */
        this.AuthorizedArea = null;

        /**
         * 标签数组
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.TrackName = 'TrackName' in params ? params.TrackName : null;
        this.ItemID = 'ItemID' in params ? params.ItemID : null;
        this.Img = 'Img' in params ? params.Img : null;
        this.ArtistName = 'ArtistName' in params ? params.ArtistName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.AuthorizedArea = 'AuthorizedArea' in params ? params.AuthorizedArea : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

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
         * 歌单类型，取值有：
·OfficialRec：官方推荐
·Normal：自定义
当该字段未填时，默认为取OfficialRec
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
取值范围：Offset + Limit 不超过5000
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
取值范围：Offset + Limit 不超过5000
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * DescribePackageItems请求参数结构体
 * @class
 */
class DescribePackageItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单id，从获取已购曲库包列表中获取
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 默认0，Offset=Offset+Length
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 默认20
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Length = 'Length' in params ? params.Length : null;

    }
}

/**
 * AuthInfo集合
 * @class
 */
class AuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主体名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubjectName = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 应用场景
         * @type {number || null}
         */
        this.AppScene = null;

        /**
         * 应用地域
         * @type {number || null}
         */
        this.AppRegion = null;

        /**
         * 授权时间
         * @type {number || null}
         */
        this.AuthPeriod = null;

        /**
         * 是否可商业化
         * @type {number || null}
         */
        this.Commercialization = null;

        /**
         * 是否可跨平台
         * @type {number || null}
         */
        this.Platform = null;

        /**
         * 加密后Id
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubjectName = 'SubjectName' in params ? params.SubjectName : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.AppScene = 'AppScene' in params ? params.AppScene : null;
        this.AppRegion = 'AppRegion' in params ? params.AppRegion : null;
        this.AuthPeriod = 'AuthPeriod' in params ? params.AuthPeriod : null;
        this.Commercialization = 'Commercialization' in params ? params.Commercialization : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * 曲库包用途信息
 * @class
 */
class UseRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用途id
         * @type {number || null}
         */
        this.UseRangeId = null;

        /**
         * 用途范围名称
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
        this.UseRangeId = 'UseRangeId' in params ? params.UseRangeId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeStations请求参数结构体
 * @class
 */
class DescribeStationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条数，必须大于0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * offset (Default = 0)，Offset=Offset+Limit
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeKTVSingerMusics请求参数结构体
 * @class
 */
class DescribeKTVSingerMusicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌手id
         * @type {string || null}
         */
        this.SingerId = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
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
        this.SingerId = 'SingerId' in params ? params.SingerId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeKTVSingerCategories返回参数结构体
 * @class
 */
class DescribeKTVSingerCategoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌手性别分类列表
         * @type {Array.<KTVSingerCategoryInfo> || null}
         */
        this.GenderSet = null;

        /**
         * 歌手区域分类列表
         * @type {Array.<KTVSingerCategoryInfo> || null}
         */
        this.AreaSet = null;

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

        if (params.GenderSet) {
            this.GenderSet = new Array();
            for (let z in params.GenderSet) {
                let obj = new KTVSingerCategoryInfo();
                obj.deserialize(params.GenderSet[z]);
                this.GenderSet.push(obj);
            }
        }

        if (params.AreaSet) {
            this.AreaSet = new Array();
            for (let z in params.AreaSet) {
                let obj = new KTVSingerCategoryInfo();
                obj.deserialize(params.AreaSet[z]);
                this.AreaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKTVSingers请求参数结构体
 * @class
 */
class DescribeKTVSingersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌手id集合，精确匹配歌手id
<li> 数组长度限制10</li>
         * @type {Array.<string> || null}
         */
        this.SingerIds = null;

        /**
         * 歌手性别集合，不传为全部，精确匹配歌手性别类型，
<li>数组长度限制1</li>
<li>取值范围：直播互动曲库歌手分类信息接口，返回性别分类信息列表中，分类英文名</li>
         * @type {Array.<string> || null}
         */
        this.Genders = null;

        /**
         * 歌手区域集合，不传为全部，精确匹配歌手区域
<li>数组长度限制10</li>
<li>取值范围：直播互动曲库歌手分类信息接口，返回的区域分类信息列表中，分类英文名</li>
         * @type {Array.<string> || null}
         */
        this.Areas = null;

        /**
         * 排序方式。默认按照播放数倒序
<li> Sort.Field 可选 PlayCount。</li>
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * 分页偏移量，默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
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
        this.SingerIds = 'SingerIds' in params ? params.SingerIds : null;
        this.Genders = 'Genders' in params ? params.Genders : null;
        this.Areas = 'Areas' in params ? params.Areas : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * BatchDescribeKTVMusicDetails返回参数结构体
 * @class
 */
class BatchDescribeKTVMusicDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲详情列表信息
         * @type {Array.<KTVMusicDetailInfo> || null}
         */
        this.KTVMusicDetailInfoSet = null;

        /**
         * 不存在的歌曲 ID 列表。
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
 * SearchKTVMusics请求参数结构体
 * @class
 */
class SearchKTVMusicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索关键词
         * @type {string || null}
         */
        this.KeyWord = null;

        /**
         * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
取值范围：Offset + Limit 不超过5000。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回的起始偏移量，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序方式。默认按照匹配度排序
<li> Sort.Field 可选 CreateTime</li>
<li> Sort.Order 可选 Desc </li>
<li> 当 KeyWord 不为空时，Sort.Field 字段无效， 搜索结果将以匹配度排序。</li>
         * @type {SortBy || null}
         */
        this.Sort = null;

        /**
         * 标签 ID 集合，匹配集合指定所有 ID 。
<li>数组长度限制：10。</li>
         * @type {Array.<string> || null}
         */
        this.TagIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Sort) {
            let obj = new SortBy();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.TagIds = 'TagIds' in params ? params.TagIds : null;

    }
}

/**
 * 推荐歌单基础信息
 * @class
 */
class KTVPlaylistBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌单Id
         * @type {string || null}
         */
        this.PlaylistId = null;

        /**
         * 歌单标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 歌单介绍
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 歌曲数量
         * @type {number || null}
         */
        this.MusicNum = null;

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
        this.Description = 'Description' in params ? params.Description : null;
        this.MusicNum = 'MusicNum' in params ? params.MusicNum : null;

    }
}

/**
 * DescribeKTVSingers返回参数结构体
 * @class
 */
class DescribeKTVSingersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总歌手数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * KTV歌手列表
         * @type {Array.<KTVSingerInfo> || null}
         */
        this.KTVSingerInfoSet = null;

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

        if (params.KTVSingerInfoSet) {
            this.KTVSingerInfoSet = new Array();
            for (let z in params.KTVSingerInfoSet) {
                let obj = new KTVSingerInfo();
                obj.deserialize(params.KTVSingerInfoSet[z]);
                this.KTVSingerInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeItemById返回参数结构体
 * @class
 */
class DescribeItemByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Item> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new Item();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 返回单曲页面歌曲是否在售状态
 * @class
 */
class MusicStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 在售状态,0为在售，1为临时下架，2为永久下架
         * @type {number || null}
         */
        this.SaleStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.SaleStatus = 'SaleStatus' in params ? params.SaleStatus : null;

    }
}

/**
 * KTV歌手分类信息
 * @class
 */
class KTVSingerCategoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类中文名
         * @type {string || null}
         */
        this.ChineseName = null;

        /**
         * 分类英文名
         * @type {string || null}
         */
        this.EnglishName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChineseName = 'ChineseName' in params ? params.ChineseName : null;
        this.EnglishName = 'EnglishName' in params ? params.EnglishName : null;

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
         * 歌曲Id列表，注：列表最大长度为50
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
        this.MusicIds = 'MusicIds' in params ? params.MusicIds : null;

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
 * 直播互动歌曲规格信息。
 * @class
 */
class KTVMusicDefinitionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格，取值有：
<li>audio/mi：低规格；</li>
<li>audio/lo：中规格；</li>
<li>audio/hi：高规格。</li>
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * 码率，单位为 bps。
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 文件大小，单位为字节。
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * Album
 * @class
 */
class Album extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专辑名
         * @type {string || null}
         */
        this.AlbumName = null;

        /**
         * 专辑图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImagePath> || null}
         */
        this.ImagePathMap = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlbumName = 'AlbumName' in params ? params.AlbumName : null;

        if (params.ImagePathMap) {
            this.ImagePathMap = new Array();
            for (let z in params.ImagePathMap) {
                let obj = new ImagePath();
                obj.deserialize(params.ImagePathMap[z]);
                this.ImagePathMap.push(obj);
            }
        }

    }
}

/**
 * DescribeLyric返回参数结构体
 * @class
 */
class DescribeLyricResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌词或者波形图详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Lyric || null}
         */
        this.Lyric = null;

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

        if (params.Lyric) {
            let obj = new Lyric();
            obj.deserialize(params.Lyric)
            this.Lyric = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KTV 曲目基础信息
 * @class
 */
class KTVMusicBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲 Id
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 歌曲名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 演唱者基础信息列表
         * @type {Array.<KTVSingerBaseInfo> || null}
         */
        this.SingerInfoSet = null;

        /**
         * 已弃用，请使用SingerInfoSet
         * @type {Array.<string> || null}
         */
        this.SingerSet = null;

        /**
         * 作词者列表
         * @type {Array.<string> || null}
         */
        this.LyricistSet = null;

        /**
         * 作曲者列表
         * @type {Array.<string> || null}
         */
        this.ComposerSet = null;

        /**
         * 标签列表
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * 歌曲时长
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
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SingerInfoSet) {
            this.SingerInfoSet = new Array();
            for (let z in params.SingerInfoSet) {
                let obj = new KTVSingerBaseInfo();
                obj.deserialize(params.SingerInfoSet[z]);
                this.SingerInfoSet.push(obj);
            }
        }
        this.SingerSet = 'SingerSet' in params ? params.SingerSet : null;
        this.LyricistSet = 'LyricistSet' in params ? params.LyricistSet : null;
        this.ComposerSet = 'ComposerSet' in params ? params.ComposerSet : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

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
         * 机器人Id。
         * @type {string || null}
         */
        this.RobotId = null;

        /**
         * 指令，取值有：
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
<li>SetVolume：设置音量</li>
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

        /**
         * 音量，当Command取SetVolume时，必填。
         * @type {SetVolumeCommandInput || null}
         */
        this.SetVolumeCommandInput = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RobotId = 'RobotId' in params ? params.RobotId : null;
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

        if (params.SetVolumeCommandInput) {
            let obj = new SetVolumeCommandInput();
            obj.deserialize(params.SetVolumeCommandInput)
            this.SetVolumeCommandInput = obj;
        }

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
         * 联想关键词
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
        this.KeyWord = 'KeyWord' in params ? params.KeyWord : null;

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
         * 推荐歌单列表
         * @type {Array.<KTVPlaylistBaseInfo> || null}
         */
        this.PlaylistBaseInfoSet = null;

        /**
         * 推荐歌单列表总数
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
 * DescribeKTVPlaylistDetail返回参数结构体
 * @class
 */
class DescribeKTVPlaylistDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲基础信息列表
         * @type {Array.<KTVMusicBaseInfo> || null}
         */
        this.KTVMusicInfoSet = null;

        /**
         * 歌单基础信息
         * @type {KTVPlaylistBaseInfo || null}
         */
        this.PlaylistBaseInfo = null;

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

        if (params.PlaylistBaseInfo) {
            let obj = new KTVPlaylistBaseInfo();
            obj.deserialize(params.PlaylistBaseInfo)
            this.PlaylistBaseInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 规格，取值有：
<li>audio/mi：低规格</li>
<li>audio/lo：中规格</li>
<li>audio/hi：高规格</li>
         * @type {string || null}
         */
        this.Definition = null;

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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 下架歌曲复合结构
 * @class
 */
class TakeMusicOffShelves extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源方对应音乐Id
         * @type {string || null}
         */
        this.MusicIds = null;

        /**
         * 当曲目临时下架时：已订购客户无影响，无需消息通知。当曲目封杀下架后，推送消息至已订购老客户，枚举值，判断是否上/下架
在售状态，0在售，1临时下架，2永久下架
         * @type {string || null}
         */
        this.SaleStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicIds = 'MusicIds' in params ? params.MusicIds : null;
        this.SaleStatus = 'SaleStatus' in params ? params.SaleStatus : null;

    }
}

/**
 * 曲库包已下架歌曲详细信息
 * @class
 */
class OfflineMusicDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲Id
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 歌曲名称
         * @type {string || null}
         */
        this.MusicName = null;

        /**
         * 不可用原因
         * @type {string || null}
         */
        this.OffRemark = null;

        /**
         * 不可用时间
         * @type {string || null}
         */
        this.OffTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.MusicName = 'MusicName' in params ? params.MusicName : null;
        this.OffRemark = 'OffRemark' in params ? params.OffRemark : null;
        this.OffTime = 'OffTime' in params ? params.OffTime : null;

    }
}

/**
 * DescribeAuthInfo请求参数结构体
 * @class
 */
class DescribeAuthInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量：Offset=Offset+Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.Key = null;

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
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * 曲库包信息
 * @class
 */
class Package extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单id
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 曲库包名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 授权地区-global: 全球  CN: 中国
         * @type {string || null}
         */
        this.AuthorizedArea = null;

        /**
         * 授权次数
         * @type {number || null}
         */
        this.AuthorizedLimit = null;

        /**
         * 套餐有效期，单位:天
         * @type {number || null}
         */
        this.TermOfValidity = null;

        /**
         * 0:不可商业化；1:可商业化
         * @type {number || null}
         */
        this.Commercial = null;

        /**
         * 套餐价格，单位：元
         * @type {number || null}
         */
        this.PackagePrice = null;

        /**
         * 生效开始时间,格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EffectTime = null;

        /**
         * 生效结束时间,格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 剩余授权次数
         * @type {number || null}
         */
        this.UsedCount = null;

        /**
         * 曲库包用途信息
         * @type {Array.<UseRange> || null}
         */
        this.UseRanges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AuthorizedArea = 'AuthorizedArea' in params ? params.AuthorizedArea : null;
        this.AuthorizedLimit = 'AuthorizedLimit' in params ? params.AuthorizedLimit : null;
        this.TermOfValidity = 'TermOfValidity' in params ? params.TermOfValidity : null;
        this.Commercial = 'Commercial' in params ? params.Commercial : null;
        this.PackagePrice = 'PackagePrice' in params ? params.PackagePrice : null;
        this.EffectTime = 'EffectTime' in params ? params.EffectTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.UsedCount = 'UsedCount' in params ? params.UsedCount : null;

        if (params.UseRanges) {
            this.UseRanges = new Array();
            for (let z in params.UseRanges) {
                let obj = new UseRange();
                obj.deserialize(params.UseRanges[z]);
                this.UseRanges.push(obj);
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

        /**
         * 音量，范围 0~100，默认为 50。
         * @type {SetVolumeCommandInput || null}
         */
        this.SetVolumeInput = null;

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

        if (params.SetVolumeInput) {
            let obj = new SetVolumeCommandInput();
            obj.deserialize(params.SetVolumeInput)
            this.SetVolumeInput = obj;
        }

    }
}

/**
 * DescribeItems请求参数结构体
 * @class
 */
class DescribeItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * offset (Default = 0)，(当前页-1) * Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 条数，必须大于0，最大值为30
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
         * @type {string || null}
         */
        this.CategoryId = null;

        /**
         * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
         * @type {string || null}
         */
        this.CategoryCode = null;

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
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.CategoryCode = 'CategoryCode' in params ? params.CategoryCode : null;

    }
}

/**
 * 歌曲信息
 * @class
 */
class Item extends  AbstractModel {
    constructor(){
        super();

        /**
         * Song ID
         * @type {string || null}
         */
        this.ItemID = null;

        /**
         * Song info
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DataInfo || null}
         */
        this.DataInfo = null;

        /**
         * 专辑信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Album || null}
         */
        this.Album = null;

        /**
         * 多个歌手集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Artist> || null}
         */
        this.Artists = null;

        /**
         * 歌曲状态，1:添加进购物车；2:核销进曲库包
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ItemID = 'ItemID' in params ? params.ItemID : null;

        if (params.DataInfo) {
            let obj = new DataInfo();
            obj.deserialize(params.DataInfo)
            this.DataInfo = obj;
        }

        if (params.Album) {
            let obj = new Album();
            obj.deserialize(params.Album)
            this.Album = obj;
        }

        if (params.Artists) {
            this.Artists = new Array();
            for (let z in params.Artists) {
                let obj = new Artist();
                obj.deserialize(params.Artists[z]);
                this.Artists.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeKTVTopList返回参数结构体
 * @class
 */
class DescribeKTVTopListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲基础信息列表
         * @type {Array.<KTVMusicTopInfo> || null}
         */
        this.KTVMusicTopInfoSet = null;

        /**
         * 返回总条数
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

        if (params.KTVMusicTopInfoSet) {
            this.KTVMusicTopInfoSet = new Array();
            for (let z in params.KTVMusicTopInfoSet) {
                let obj = new KTVMusicTopInfo();
                obj.deserialize(params.KTVMusicTopInfoSet[z]);
                this.KTVMusicTopInfoSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对外开放信息
 * @class
 */
class MusicOpenDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音乐Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MusicId = null;

        /**
         * 专辑名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlbumName = null;

        /**
         * 专辑图片路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlbumImageUrl = null;

        /**
         * 音乐名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MusicName = null;

        /**
         * 音乐图片路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MusicImageUrl = null;

        /**
         * 歌手
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Singers = null;

        /**
         * 播放时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 歌词url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LyricUrl = null;

        /**
         * 波形图url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WaveformUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MusicId = 'MusicId' in params ? params.MusicId : null;
        this.AlbumName = 'AlbumName' in params ? params.AlbumName : null;
        this.AlbumImageUrl = 'AlbumImageUrl' in params ? params.AlbumImageUrl : null;
        this.MusicName = 'MusicName' in params ? params.MusicName : null;
        this.MusicImageUrl = 'MusicImageUrl' in params ? params.MusicImageUrl : null;
        this.Singers = 'Singers' in params ? params.Singers : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.LyricUrl = 'LyricUrl' in params ? params.LyricUrl : null;
        this.WaveformUrl = 'WaveformUrl' in params ? params.WaveformUrl : null;

    }
}

/**
 * DescribePackages请求参数结构体
 * @class
 */
class DescribePackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认0，Offset=Offset+Length
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 默认20
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Length = 'Length' in params ? params.Length : null;

    }
}

/**
 * DescribePackages返回参数结构体
 * @class
 */
class DescribePackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购曲库包列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Package> || null}
         */
        this.Packages = null;

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

        if (params.Packages) {
            this.Packages = new Array();
            for (let z in params.Packages) {
                let obj = new Package();
                obj.deserialize(params.Packages[z]);
                this.Packages.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 歌词信息
 * @class
 */
class Lyric extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌词cdn地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 歌词后缀名
         * @type {string || null}
         */
        this.FileNameExt = null;

        /**
         * 歌词类型
         * @type {string || null}
         */
        this.SubItemType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.FileNameExt = 'FileNameExt' in params ? params.FileNameExt : null;
        this.SubItemType = 'SubItemType' in params ? params.SubItemType : null;

    }
}

/**
 * TakeMusicOffShelves返回参数结构体
 * @class
 */
class TakeMusicOffShelvesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回成功数量
         * @type {number || null}
         */
        this.SuccessNum = null;

        /**
         * 返回失败数量
         * @type {number || null}
         */
        this.FailedNum = null;

        /**
         * 返回失败歌曲musicId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedMusicIds = null;

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
        this.SuccessNum = 'SuccessNum' in params ? params.SuccessNum : null;
        this.FailedNum = 'FailedNum' in params ? params.FailedNum : null;
        this.FailedMusicIds = 'FailedMusicIds' in params ? params.FailedMusicIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeMusicResponse: DescribeMusicResponse,
    DescribeKTVSuggestionsResponse: DescribeKTVSuggestionsResponse,
    ChorusClip: ChorusClip,
    ModifyMusicOnShelvesResponse: ModifyMusicOnShelvesResponse,
    Station: Station,
    DescribeKTVMusicDetailRequest: DescribeKTVMusicDetailRequest,
    KTVMusicTopInfo: KTVMusicTopInfo,
    DescribeKTVSingerCategoriesRequest: DescribeKTVSingerCategoriesRequest,
    KTVSingerBaseInfo: KTVSingerBaseInfo,
    ModifyMusicOnShelvesRequest: ModifyMusicOnShelvesRequest,
    PlayCommandInput: PlayCommandInput,
    DescribeMusicRequest: DescribeMusicRequest,
    KTVMusicDetailInfo: KTVMusicDetailInfo,
    DescribeMusicSaleStatusRequest: DescribeMusicSaleStatusRequest,
    TakeMusicOffShelvesRequest: TakeMusicOffShelvesRequest,
    DescribeCloudMusicResponse: DescribeCloudMusicResponse,
    MusicDetailInfo: MusicDetailInfo,
    ImagePath: ImagePath,
    KTVMusicTagInfo: KTVMusicTagInfo,
    DestroyKTVRobotRequest: DestroyKTVRobotRequest,
    DescribeAuthInfoResponse: DescribeAuthInfoResponse,
    DescribeLyricRequest: DescribeLyricRequest,
    ReportDataRequest: ReportDataRequest,
    SeekCommandInput: SeekCommandInput,
    DescribePkgOfflineMusicRequest: DescribePkgOfflineMusicRequest,
    TimeRange: TimeRange,
    DescribeMusicSaleStatusResponse: DescribeMusicSaleStatusResponse,
    CreateKTVRobotResponse: CreateKTVRobotResponse,
    DescribePackageItemsResponse: DescribePackageItemsResponse,
    DescribeCloudMusicPurchasedResponse: DescribeCloudMusicPurchasedResponse,
    KTVMusicTagGroup: KTVMusicTagGroup,
    DataInfo: DataInfo,
    ApplicationLicenseInput: ApplicationLicenseInput,
    Artist: Artist,
    SetDestroyModeCommandInput: SetDestroyModeCommandInput,
    ReportDataResponse: ReportDataResponse,
    SearchKTVMusicsResponse: SearchKTVMusicsResponse,
    DescribeItemByIdRequest: DescribeItemByIdRequest,
    PutMusicOnTheShelvesResponse: PutMusicOnTheShelvesResponse,
    SyncRobotCommand: SyncRobotCommand,
    DescribeKTVSingerMusicsResponse: DescribeKTVSingerMusicsResponse,
    DescribeItemsResponse: DescribeItemsResponse,
    DescribePkgOfflineMusicResponse: DescribePkgOfflineMusicResponse,
    KTVSingerInfo: KTVSingerInfo,
    SetVolumeCommandInput: SetVolumeCommandInput,
    PutMusicOnTheShelvesRequest: PutMusicOnTheShelvesRequest,
    DescribeCloudMusicRequest: DescribeCloudMusicRequest,
    SortBy: SortBy,
    DescribeKTVMusicDetailResponse: DescribeKTVMusicDetailResponse,
    DescribeKTVRobotsRequest: DescribeKTVRobotsRequest,
    DescribeKTVMusicTagsResponse: DescribeKTVMusicTagsResponse,
    DescribeKTVMusicTagsRequest: DescribeKTVMusicTagsRequest,
    JoinRoomInput: JoinRoomInput,
    DestroyKTVRobotResponse: DestroyKTVRobotResponse,
    CreateKTVRobotRequest: CreateKTVRobotRequest,
    KTVSuggestionInfo: KTVSuggestionInfo,
    DescribeKTVTopListRequest: DescribeKTVTopListRequest,
    DescribeKTVPlaylistDetailRequest: DescribeKTVPlaylistDetailRequest,
    Music: Music,
    DescribeStationsResponse: DescribeStationsResponse,
    DescribeCloudMusicPurchasedRequest: DescribeCloudMusicPurchasedRequest,
    PackageItem: PackageItem,
    DescribeKTVPlaylistsRequest: DescribeKTVPlaylistsRequest,
    TRTCJoinRoomInput: TRTCJoinRoomInput,
    DescribePackageItemsRequest: DescribePackageItemsRequest,
    AuthInfo: AuthInfo,
    DescribeKTVRobotsResponse: DescribeKTVRobotsResponse,
    UseRange: UseRange,
    DescribeStationsRequest: DescribeStationsRequest,
    DescribeKTVSingerMusicsRequest: DescribeKTVSingerMusicsRequest,
    DescribeKTVSingerCategoriesResponse: DescribeKTVSingerCategoriesResponse,
    DescribeKTVSingersRequest: DescribeKTVSingersRequest,
    SetPlaylistCommandInput: SetPlaylistCommandInput,
    SyncKTVRobotCommandResponse: SyncKTVRobotCommandResponse,
    BatchDescribeKTVMusicDetailsResponse: BatchDescribeKTVMusicDetailsResponse,
    SearchKTVMusicsRequest: SearchKTVMusicsRequest,
    KTVPlaylistBaseInfo: KTVPlaylistBaseInfo,
    DescribeKTVSingersResponse: DescribeKTVSingersResponse,
    DescribeItemByIdResponse: DescribeItemByIdResponse,
    MusicStatus: MusicStatus,
    KTVSingerCategoryInfo: KTVSingerCategoryInfo,
    BatchDescribeKTVMusicDetailsRequest: BatchDescribeKTVMusicDetailsRequest,
    SendMessageCommandInput: SendMessageCommandInput,
    KTVMusicDefinitionInfo: KTVMusicDefinitionInfo,
    Album: Album,
    DescribeLyricResponse: DescribeLyricResponse,
    KTVMusicBaseInfo: KTVMusicBaseInfo,
    SyncKTVRobotCommandRequest: SyncKTVRobotCommandRequest,
    DescribeKTVSuggestionsRequest: DescribeKTVSuggestionsRequest,
    DescribeKTVPlaylistsResponse: DescribeKTVPlaylistsResponse,
    DescribeKTVPlaylistDetailResponse: DescribeKTVPlaylistDetailResponse,
    SetAudioParamCommandInput: SetAudioParamCommandInput,
    TakeMusicOffShelves: TakeMusicOffShelves,
    OfflineMusicDetail: OfflineMusicDetail,
    DescribeAuthInfoRequest: DescribeAuthInfoRequest,
    Package: Package,
    SetPlayModeCommandInput: SetPlayModeCommandInput,
    KTVRobotInfo: KTVRobotInfo,
    DescribeItemsRequest: DescribeItemsRequest,
    Item: Item,
    DescribeKTVTopListResponse: DescribeKTVTopListResponse,
    MusicOpenDetail: MusicOpenDetail,
    DescribePackagesRequest: DescribePackagesRequest,
    DescribePackagesResponse: DescribePackagesResponse,
    Lyric: Lyric,
    TakeMusicOffShelvesResponse: TakeMusicOffShelvesResponse,

}
