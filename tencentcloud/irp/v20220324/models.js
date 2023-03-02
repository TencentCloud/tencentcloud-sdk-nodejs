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
 * 用户信息
 * @class
 */
class UserIdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID类型：
1 - qq
2 - qq_md5：md5后的qq
3 - imei：设备imei（安卓10之后不会再授权imei，安卓10之后的imei映射关系可能拿不到，故安卓10之后的设备建议用oaid）
4 - imei_md5：md5后的imei
5 - idfa: Apple 向用户设备随机分配的设备标识符
6 - idfa_md5：md5之后的idfa
7 - gdt_openid：广点通生成的openid
8 - oaid：安卓10之后一种非永久性设备标识符
9 - oaid_md5：md5后的oaid
10 - wx_openid：微信openid
11 - qq_openid：QQ的openid
12 - phone：电话号码
13 - phone_md5：md5后的电话号码
14 - phone_sha256：SHA256加密的手机号
15 - phone_sm3：国密SM3加密的手机号
1000 - 客户自定义id
         * @type {number || null}
         */
        this.UserIdType = null;

        /**
         * 用户id
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
        this.UserIdType = 'UserIdType' in params ? params.UserIdType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * ReportMaterial返回参数结构体
 * @class
 */
class ReportMaterialResponse extends  AbstractModel {
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
 * 行为数据
 * @class
 */
class DocBehavior extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容唯一ID，如 2824324234
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 行为类型
         * @type {number || null}
         */
        this.BehaviorType = null;

        /**
         * 行为值
         * @type {string || null}
         */
        this.BehaviorValue = null;

        /**
         * 行为时间戳： 秒级时间戳（默认为当前时间）,不能延迟太久，尽量实时上报，否则会影响推荐结果的准确性。
         * @type {number || null}
         */
        this.BehaviorTimestamp = null;

        /**
         * 场景id，在控制台创建场景后获取。
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * 用户id列表
         * @type {Array.<UserIdInfo> || null}
         */
        this.UserIdList = null;

        /**
         * 会话id，使用获取推荐结果中返回的RecTraceId填入。<br>注意：如果和在线推荐请求中的traceId不同，会影响行为特征归因，影响推荐算法效果
         * @type {string || null}
         */
        this.RecTraceId = null;

        /**
         * 算法来源：用来区分行为来源于哪个算法。值为**business，tencent，other** 三者之一<br>● business 表示业务自己的算法对照组<br>● tencent 为腾讯算法<br>● other 为其他算法
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 物料类型
         * @type {number || null}
         */
        this.ItemType = null;

        /**
         * 微信开放平台上查看appId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 回传video_over事件的时候，回传的用户播放视频的总时长（真正播放的，拖动不算，单位为秒）
         * @type {number || null}
         */
        this.VideoPlayDuration = null;

        /**
         * 来源物料内容：用来标识在指定内容页面产生的行为，如需要统计用户在A内容详情页里，对推荐内容B点击等行为，则ReferrerItemId代表内容A，ItemId代表内容B
         * @type {string || null}
         */
        this.ReferrerItemId = null;

        /**
         * 国家，统一用简写，比如中国则填写CN
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 省
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 区县
         * @type {string || null}
         */
        this.District = null;

        /**
         * 客户端ip
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 客户端网络类型
         * @type {string || null}
         */
        this.Network = null;

        /**
         * 客户端平台，ios/android/h5
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 客户端app版本
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 操作系统版本
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.DeviceModel = null;

        /**
         * json字符串，用于行为数据的扩展
         * @type {string || null}
         */
        this.Extension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.BehaviorType = 'BehaviorType' in params ? params.BehaviorType : null;
        this.BehaviorValue = 'BehaviorValue' in params ? params.BehaviorValue : null;
        this.BehaviorTimestamp = 'BehaviorTimestamp' in params ? params.BehaviorTimestamp : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

        if (params.UserIdList) {
            this.UserIdList = new Array();
            for (let z in params.UserIdList) {
                let obj = new UserIdInfo();
                obj.deserialize(params.UserIdList[z]);
                this.UserIdList.push(obj);
            }
        }
        this.RecTraceId = 'RecTraceId' in params ? params.RecTraceId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.ItemType = 'ItemType' in params ? params.ItemType : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.VideoPlayDuration = 'VideoPlayDuration' in params ? params.VideoPlayDuration : null;
        this.ReferrerItemId = 'ReferrerItemId' in params ? params.ReferrerItemId : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.District = 'District' in params ? params.District : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.Network = 'Network' in params ? params.Network : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.DeviceModel = 'DeviceModel' in params ? params.DeviceModel : null;
        this.Extension = 'Extension' in params ? params.Extension : null;

    }
}

/**
 * 作者信息
 * @class
 */
class AuthorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作者id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 作者名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 作者来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceId = null;

        /**
         * 关注类型：1-关注，2-取关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FollowType = null;

        /**
         * 作者头像icon地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IconUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.FollowType = 'FollowType' in params ? params.FollowType : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;

    }
}

/**
 * 推荐物料信息
 * @class
 */
class DocItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容唯一id
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 内容类型
         * @type {number || null}
         */
        this.ItemType = null;

        /**
         * 内容状态：1 - 上架， 2 - 下架
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 内容生成时间，秒级时间戳（1639624786），需大于0
         * @type {number || null}
         */
        this.PublishTimestamp = null;

        /**
         * 物料来源ID
         * @type {number || null}
         */
        this.SourceId = null;

        /**
         * 标题名称
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 内容正文
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 作者
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 作者id
         * @type {string || null}
         */
        this.AuthorId = null;

        /**
         * 标签关键词，多个用英文分号分割
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 内容物料描述：物料的描述信息，推荐系统会对内容的描述信息，使用否LP技术，进行分词、提取关键词，作为news的特征使用。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 图片url
         * @type {Array.<string> || null}
         */
        this.PicUrlList = null;

        /**
         * 视频url
         * @type {Array.<string> || null}
         */
        this.VideoUrlList = null;

        /**
         * 视频时长，时间秒
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配
         * @type {number || null}
         */
        this.CategoryLevel = null;

        /**
         * 类目路径，一级二级三级等依次用英文冒号联接，如体育：“足球:巴塞罗那”
         * @type {string || null}
         */
        this.CategoryPath = null;

        /**
         * 国家，统一用简写，比如中国则填写CN
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 省
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 区县
         * @type {string || null}
         */
        this.District = null;

        /**
         * 内容过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年
         * @type {number || null}
         */
        this.ExpireTimestamp = null;

        /**
         * 所属话题
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 作者粉丝数
         * @type {number || null}
         */
        this.AuthorFans = null;

        /**
         * 作者评级
         * @type {string || null}
         */
        this.AuthorLevel = null;

        /**
         * 内容累计收藏次数
         * @type {number || null}
         */
        this.CollectCnt = null;

        /**
         * 内容累积点赞次数
         * @type {number || null}
         */
        this.PraiseCnt = null;

        /**
         * 内容累计评论次数
         * @type {number || null}
         */
        this.CommentCnt = null;

        /**
         * 内容累计分享次数
         * @type {number || null}
         */
        this.ShareCnt = null;

        /**
         * 内容累积打赏数
         * @type {number || null}
         */
        this.RewardCnt = null;

        /**
         * 内容质量评分，类似豆瓣电影的评分，这里为100分制，比如97分，满分100分，最低0分，范围外的将会被拦截
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 内容池id，用于分内容池召回，一个内容支持指定一个或多个内容池， 内容池id不建议使用0（0表示不区分内容池）
         * @type {Array.<string> || null}
         */
        this.PoolIdList = null;

        /**
         * 描述用户标签
         * @type {Array.<TagInfo> || null}
         */
        this.TagInfoList = null;

        /**
         * json字符串，用于物料数据的扩展
         * @type {string || null}
         */
        this.Extension = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.ItemType = 'ItemType' in params ? params.ItemType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PublishTimestamp = 'PublishTimestamp' in params ? params.PublishTimestamp : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.AuthorId = 'AuthorId' in params ? params.AuthorId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.PicUrlList = 'PicUrlList' in params ? params.PicUrlList : null;
        this.VideoUrlList = 'VideoUrlList' in params ? params.VideoUrlList : null;
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.CategoryLevel = 'CategoryLevel' in params ? params.CategoryLevel : null;
        this.CategoryPath = 'CategoryPath' in params ? params.CategoryPath : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.District = 'District' in params ? params.District : null;
        this.ExpireTimestamp = 'ExpireTimestamp' in params ? params.ExpireTimestamp : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.AuthorFans = 'AuthorFans' in params ? params.AuthorFans : null;
        this.AuthorLevel = 'AuthorLevel' in params ? params.AuthorLevel : null;
        this.CollectCnt = 'CollectCnt' in params ? params.CollectCnt : null;
        this.PraiseCnt = 'PraiseCnt' in params ? params.PraiseCnt : null;
        this.CommentCnt = 'CommentCnt' in params ? params.CommentCnt : null;
        this.ShareCnt = 'ShareCnt' in params ? params.ShareCnt : null;
        this.RewardCnt = 'RewardCnt' in params ? params.RewardCnt : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.PoolIdList = 'PoolIdList' in params ? params.PoolIdList : null;

        if (params.TagInfoList) {
            this.TagInfoList = new Array();
            for (let z in params.TagInfoList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagInfoList[z]);
                this.TagInfoList.push(obj);
            }
        }
        this.Extension = 'Extension' in params ? params.Extension : null;

    }
}

/**
 * ReportAction返回参数结构体
 * @class
 */
class ReportActionResponse extends  AbstractModel {
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
 * 不喜欢信息
 * @class
 */
class DislikeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不喜欢的物料类别，对应物料上传协议中的字段名，如authorId，keyword，topic等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * type对应字段名的值，如具体的topic名，作者id等
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ReportPortrait请求参数结构体
 * @class
 */
class ReportPortraitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推荐平台上的业务id
         * @type {string || null}
         */
        this.Bid = null;

        /**
         * 上报的用户画像数组，数量不超过50
         * @type {Array.<PortraitInfo> || null}
         */
        this.PortraitList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bid = 'Bid' in params ? params.Bid : null;

        if (params.PortraitList) {
            this.PortraitList = new Array();
            for (let z in params.PortraitList) {
                let obj = new PortraitInfo();
                obj.deserialize(params.PortraitList[z]);
                this.PortraitList.push(obj);
            }
        }

    }
}

/**
 * ReportPortrait返回参数结构体
 * @class
 */
class ReportPortraitResponse extends  AbstractModel {
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
 * ReportAction请求参数结构体
 * @class
 */
class ReportActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务id
         * @type {string || null}
         */
        this.Bid = null;

        /**
         * 上报的行为对象数组，数量不超过50
         * @type {Array.<DocBehavior> || null}
         */
        this.DocBehaviorList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bid = 'Bid' in params ? params.Bid : null;

        if (params.DocBehaviorList) {
            this.DocBehaviorList = new Array();
            for (let z in params.DocBehaviorList) {
                let obj = new DocBehavior();
                obj.deserialize(params.DocBehaviorList[z]);
                this.DocBehaviorList.push(obj);
            }
        }

    }
}

/**
 * 画像信息
 * @class
 */
class PortraitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户id列表
         * @type {Array.<UserIdInfo> || null}
         */
        this.UserIdList = null;

        /**
         * 如果"userIdType"是10则必传，在微信开放平台上查看appId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 用户年龄，值域在 0-200
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 用户性别：0-未知，1-男， 2-女
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 用户学历 ：小学，初中，高中，大专，本科，硕士，博士
         * @type {string || null}
         */
        this.Degree = null;

        /**
         * 用户毕业学校全称
         * @type {string || null}
         */
        this.School = null;

        /**
         * 用户职业，保证业务的唯一性
         * @type {string || null}
         */
        this.Occupation = null;

        /**
         * 用户所属行业，保证业务的唯一性
         * @type {string || null}
         */
        this.Industry = null;

        /**
         * 用户常驻国家，统一用简写，比如中国则填写CN
         * @type {string || null}
         */
        this.ResidentCountry = null;

        /**
         * 用户常驻省份
         * @type {string || null}
         */
        this.ResidentProvince = null;

        /**
         * 用户常驻城市
         * @type {string || null}
         */
        this.ResidentCity = null;

        /**
         * 用户常驻区县
         * @type {string || null}
         */
        this.ResidentDistrict = null;

        /**
         * 用户手机的MD5值
         * @type {string || null}
         */
        this.PhoneMd5 = null;

        /**
         * 用户手机的IMEI号
         * @type {string || null}
         */
        this.PhoneImei = null;

        /**
         * 设备idfa信息
         * @type {string || null}
         */
        this.Idfa = null;

        /**
         * 用户注册时间，秒级时间戳（1639624786）
         * @type {number || null}
         */
        this.RegisterTimestamp = null;

        /**
         * 用户会员等级
         * @type {string || null}
         */
        this.MembershipLevel = null;

        /**
         * 用户上一次登录时间，秒级时间戳（1639624786）
         * @type {number || null}
         */
        this.LastLoginTimestamp = null;

        /**
         * 用户上一次登录的ip
         * @type {string || null}
         */
        this.LastLoginIp = null;

        /**
         * 用户信息的最后修改时间戳，秒级时间戳（1639624786）
         * @type {number || null}
         */
        this.LastModifyTimestamp = null;

        /**
         * 用户标签
         * @type {Array.<TagInfo> || null}
         */
        this.TagInfoList = null;

        /**
         * 用户关注作者列表
         * @type {Array.<AuthorInfo> || null}
         */
        this.AuthorInfoList = null;

        /**
         * 用户不喜欢列表
         * @type {Array.<DislikeInfo> || null}
         */
        this.DislikeInfoList = null;

        /**
         * json字符串，用于画像数据的扩展
         * @type {string || null}
         */
        this.Extension = null;

        /**
         * 设备oaid信息
         * @type {string || null}
         */
        this.Oaid = null;

        /**
         * 设备AndroidId信息
         * @type {string || null}
         */
        this.AndroidId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserIdList) {
            this.UserIdList = new Array();
            for (let z in params.UserIdList) {
                let obj = new UserIdInfo();
                obj.deserialize(params.UserIdList[z]);
                this.UserIdList.push(obj);
            }
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Degree = 'Degree' in params ? params.Degree : null;
        this.School = 'School' in params ? params.School : null;
        this.Occupation = 'Occupation' in params ? params.Occupation : null;
        this.Industry = 'Industry' in params ? params.Industry : null;
        this.ResidentCountry = 'ResidentCountry' in params ? params.ResidentCountry : null;
        this.ResidentProvince = 'ResidentProvince' in params ? params.ResidentProvince : null;
        this.ResidentCity = 'ResidentCity' in params ? params.ResidentCity : null;
        this.ResidentDistrict = 'ResidentDistrict' in params ? params.ResidentDistrict : null;
        this.PhoneMd5 = 'PhoneMd5' in params ? params.PhoneMd5 : null;
        this.PhoneImei = 'PhoneImei' in params ? params.PhoneImei : null;
        this.Idfa = 'Idfa' in params ? params.Idfa : null;
        this.RegisterTimestamp = 'RegisterTimestamp' in params ? params.RegisterTimestamp : null;
        this.MembershipLevel = 'MembershipLevel' in params ? params.MembershipLevel : null;
        this.LastLoginTimestamp = 'LastLoginTimestamp' in params ? params.LastLoginTimestamp : null;
        this.LastLoginIp = 'LastLoginIp' in params ? params.LastLoginIp : null;
        this.LastModifyTimestamp = 'LastModifyTimestamp' in params ? params.LastModifyTimestamp : null;

        if (params.TagInfoList) {
            this.TagInfoList = new Array();
            for (let z in params.TagInfoList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagInfoList[z]);
                this.TagInfoList.push(obj);
            }
        }

        if (params.AuthorInfoList) {
            this.AuthorInfoList = new Array();
            for (let z in params.AuthorInfoList) {
                let obj = new AuthorInfo();
                obj.deserialize(params.AuthorInfoList[z]);
                this.AuthorInfoList.push(obj);
            }
        }

        if (params.DislikeInfoList) {
            this.DislikeInfoList = new Array();
            for (let z in params.DislikeInfoList) {
                let obj = new DislikeInfo();
                obj.deserialize(params.DislikeInfoList[z]);
                this.DislikeInfoList.push(obj);
            }
        }
        this.Extension = 'Extension' in params ? params.Extension : null;
        this.Oaid = 'Oaid' in params ? params.Oaid : null;
        this.AndroidId = 'AndroidId' in params ? params.AndroidId : null;

    }
}

/**
 * RecommendContent请求参数结构体
 * @class
 */
class RecommendContentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务id
         * @type {string || null}
         */
        this.Bid = null;

        /**
         * 场景id：比如有“猜你喜欢”，“热门内容”等推荐模块，每一个模块都有一个scene_id来表示。 在控制台创建场景后获取。需要跟行为上报时的id一致
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * 用户唯一ID数组，每个数组元素详见userId结构体，若不填，则接口返回热门结果
         * @type {Array.<UserIdInfo> || null}
         */
        this.UserIdList = null;

        /**
         * 会话id：必须和行为数据上报时所填写的traceId相同，用于行为数据来自于那次在线推荐请求的归因。**注意：此处如果没传，则响应会返回一个全局唯一ID返回给客户，并需客户透传给行为日志上报接口**
         * @type {string || null}
         */
        this.RecTraceId = null;

        /**
         * 推荐数量：物料优选的结果， 默认50个，目前最多支持200个的内容返回，如果返回个数更多，会影响性能，容易超时。
         * @type {number || null}
         */
        this.ItemCnt = null;

        /**
         * 物料池id，用于召回该pool_id下的商品，如果有多个，用英文;分割。**注意：此处poolId需和物料上报时的poolIdList对应上**
         * @type {string || null}
         */
        this.PoolId = null;

        /**
         * 来源物料id，即用户当前浏览的物料id，用于在内容详情页获取关联推荐内容
         * @type {string || null}
         */
        this.CurrentItemId = null;

        /**
         * 请求响应超时时间，单位ms，默认300ms，数值设置的过小，会影响推荐效果，最小支持250ms
         * @type {number || null}
         */
        this.ResponseTimeout = null;

        /**
         * 返回结果中不同物料类型的比例，比例顺序需严格按照（图文，长视频，短视频，小视频）进行。只允许传[0,100]数字，多个请用**英文冒号**分割，且加起来不能超过100，以及比例数量不能超过**场景绑定的物料类型**（图文，长视频，短视频，小视频）数。**示例：**图文和短视频比例为40%:60%时，则填40:60图文和短视频比例为0%:100%时，则填0:100图文，长视频和短视频的比例为，图文占20%，剩余80%由长视频和短视频随机返回，则填20:80或仅填20均可
         * @type {string || null}
         */
        this.ItemTypeRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bid = 'Bid' in params ? params.Bid : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

        if (params.UserIdList) {
            this.UserIdList = new Array();
            for (let z in params.UserIdList) {
                let obj = new UserIdInfo();
                obj.deserialize(params.UserIdList[z]);
                this.UserIdList.push(obj);
            }
        }
        this.RecTraceId = 'RecTraceId' in params ? params.RecTraceId : null;
        this.ItemCnt = 'ItemCnt' in params ? params.ItemCnt : null;
        this.PoolId = 'PoolId' in params ? params.PoolId : null;
        this.CurrentItemId = 'CurrentItemId' in params ? params.CurrentItemId : null;
        this.ResponseTimeout = 'ResponseTimeout' in params ? params.ResponseTimeout : null;
        this.ItemTypeRatio = 'ItemTypeRatio' in params ? params.ItemTypeRatio : null;

    }
}

/**
 * 推荐内容信息
 * @class
 */
class RecItemData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推荐的内容id，即用户行为上报中的itemId
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 物料子类型，包括如下： 1-图文、2-长视频（横视频）、3-短视频（横视频）、4-小说、5-小视频（竖视频）、6-纯文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ItemType = null;

        /**
         * 推荐内容的权重，取值范围[0,1000000]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 推荐预测分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 关键词，多个用英文分号分割，和物料上传的keyword一致
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.ItemType = 'ItemType' in params ? params.ItemType : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * ReportMaterial请求参数结构体
 * @class
 */
class ReportMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务id
         * @type {string || null}
         */
        this.Bid = null;

        /**
         * 上报的信息流数组，一次数量不超过50
         * @type {Array.<DocItem> || null}
         */
        this.DocItemList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bid = 'Bid' in params ? params.Bid : null;

        if (params.DocItemList) {
            this.DocItemList = new Array();
            for (let z in params.DocItemList) {
                let obj = new DocItem();
                obj.deserialize(params.DocItemList[z]);
                this.DocItemList.push(obj);
            }
        }

    }
}

/**
 * RecommendContent返回参数结构体
 * @class
 */
class RecommendContentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推荐追踪id，用于行为上报。每次接口调用返回的traceId不同
         * @type {string || null}
         */
        this.RecTraceId = null;

        /**
         * 标识具体的物料信息
         * @type {Array.<RecItemData> || null}
         */
        this.DataList = null;

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
        this.RecTraceId = 'RecTraceId' in params ? params.RecTraceId : null;

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new RecItemData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标题信息
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 标签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 推荐权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

module.exports = {
    UserIdInfo: UserIdInfo,
    ReportMaterialResponse: ReportMaterialResponse,
    DocBehavior: DocBehavior,
    AuthorInfo: AuthorInfo,
    DocItem: DocItem,
    ReportActionResponse: ReportActionResponse,
    DislikeInfo: DislikeInfo,
    ReportPortraitRequest: ReportPortraitRequest,
    ReportPortraitResponse: ReportPortraitResponse,
    ReportActionRequest: ReportActionRequest,
    PortraitInfo: PortraitInfo,
    RecommendContentRequest: RecommendContentRequest,
    RecItemData: RecItemData,
    ReportMaterialRequest: ReportMaterialRequest,
    RecommendContentResponse: RecommendContentResponse,
    TagInfo: TagInfo,

}
