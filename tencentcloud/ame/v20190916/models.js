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
 * DescribePackageItems返回参数结构体
 * @class
 */
class DescribePackageItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 歌曲信息数组
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
 * DescribePackageItems请求参数结构体
 * @class
 */
class DescribePackageItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单id
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 默认0
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
         * 基础版：入参 MP3-64K-FTD-P  获取64kbps歌曲热门片段。
高级/商用版：入参 MP3-320K-FTD 获取320kbps已核验歌曲完整资源。
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
 * DescribePackages请求参数结构体
 * @class
 */
class DescribePackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认0
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
 * DescribePackages返回参数结构体
 * @class
 */
class DescribePackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购曲库包数组
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
https://github.com/ame-demo/doc
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

module.exports = {
    Album: Album,
    DescribeMusicResponse: DescribeMusicResponse,
    DescribeLyricResponse: DescribeLyricResponse,
    Station: Station,
    Music: Music,
    DescribeStationsResponse: DescribeStationsResponse,
    DescribePackageItemsResponse: DescribePackageItemsResponse,
    PackageItem: PackageItem,
    DataInfo: DataInfo,
    Package: Package,
    ReportDataResponse: ReportDataResponse,
    DescribePackageItemsRequest: DescribePackageItemsRequest,
    DescribeItemByIdRequest: DescribeItemByIdRequest,
    DescribeMusicRequest: DescribeMusicRequest,
    UseRange: UseRange,
    Artist: Artist,
    DescribeStationsRequest: DescribeStationsRequest,
    DescribeItemsRequest: DescribeItemsRequest,
    Item: Item,
    DescribePackagesRequest: DescribePackagesRequest,
    ImagePath: ImagePath,
    DescribeItemsResponse: DescribeItemsResponse,
    DescribeItemByIdResponse: DescribeItemByIdResponse,
    DescribePackagesResponse: DescribePackagesResponse,
    Lyric: Lyric,
    DescribeLyricRequest: DescribeLyricRequest,
    ReportDataRequest: ReportDataRequest,

}
