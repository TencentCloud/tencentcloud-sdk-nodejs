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
 * Music
 * @class
 */
class Music extends  AbstractModel {
    constructor(){
        super();

        /**
         * 音乐播放链接相对路径，必须通过在音乐版权助手上登记的域名进行拼接。
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
 * DescribeLyric返回参数结构体
 * @class
 */
class DescribeLyricResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌词详情
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
         * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个
         * @type {string || null}
         */
        this.CategoryId = null;

        /**
         * （电台/歌单）代码，CategoryId和CategoryCode两个必传1个
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
         * offset (Default = 0)，(当前页-1) * Limit
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
 * Item
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
         * 歌词格式，可选项，可不填写，目前填写只能填LRC-LRC。该字段为预留的扩展字段。后续如果不填，会返回歌曲的所有格式的歌词。如果填写某个正确的格式，则只返回该格式的歌词。
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
         * User identity ID，用来唯一标识用户
         * @type {string || null}
         */
        this.IdentityId = null;

        /**
         * 填 MP3-64K-FTD-P 获取歌曲热门片段
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

module.exports = {
    Album: Album,
    DescribeMusicResponse: DescribeMusicResponse,
    ImagePath: ImagePath,
    DataInfo: DataInfo,
    DescribeItemsResponse: DescribeItemsResponse,
    Music: Music,
    Artist: Artist,
    DescribeLyricResponse: DescribeLyricResponse,
    DescribeItemsRequest: DescribeItemsRequest,
    DescribeStationsRequest: DescribeStationsRequest,
    Item: Item,
    Station: Station,
    Lyric: Lyric,
    DescribeLyricRequest: DescribeLyricRequest,
    DescribeStationsResponse: DescribeStationsResponse,
    DescribeMusicRequest: DescribeMusicRequest,

}
