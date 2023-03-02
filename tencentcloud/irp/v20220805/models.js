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
 * ReportFeedItem返回参数结构体
 * @class
 */
class ReportFeedItemResponse extends  AbstractModel {
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
 * ReportFeedUser请求参数结构体
 * @class
 */
class ReportFeedUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，在控制台获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 上报的用户信息数组，数量不超过50
         * @type {Array.<FeedUserInfo> || null}
         */
        this.FeedUserList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FeedUserList) {
            this.FeedUserList = new Array();
            for (let z in params.FeedUserList) {
                let obj = new FeedUserInfo();
                obj.deserialize(params.FeedUserList[z]);
                this.FeedUserList.push(obj);
            }
        }

    }
}

/**
 * 信息流用户信息
 * @class
 */
class FeedUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，<b>用于构建用户画像信息</b>
         * @type {Array.<UserIdInfo> || null}
         */
        this.UserIdList = null;

        /**
         * 用户标签，多个标签用英文冒号联接，<b>用作特征，强烈建议</b>
         * @type {string || null}
         */
        this.Tags = null;

        /**
         * 过滤列表，<b>会在推荐结果里过滤掉这类内容</b>
         * @type {Array.<DislikeInfo> || null}
         */
        this.DislikeInfoList = null;

        /**
         * 用户年龄
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 用户性别： 0 - 未知 1 - 男 2 - 女
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
         * 用户职业
         * @type {string || null}
         */
        this.Occupation = null;

        /**
         * 用户所属行业
         * @type {string || null}
         */
        this.Industry = null;

        /**
         * 用户常驻国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”
         * @type {string || null}
         */
        this.ResidentCountry = null;

        /**
         * 用户常驻省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”
         * @type {string || null}
         */
        this.ResidentProvince = null;

        /**
         * 用户常驻城市，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，
         * @type {string || null}
         */
        this.ResidentCity = null;

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
         * json字符串，用于画像数据的扩展，需要base64加密
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
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.UserIdList) {
            this.UserIdList = new Array();
            for (let z in params.UserIdList) {
                let obj = new UserIdInfo();
                obj.deserialize(params.UserIdList[z]);
                this.UserIdList.push(obj);
            }
        }
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.DislikeInfoList) {
            this.DislikeInfoList = new Array();
            for (let z in params.DislikeInfoList) {
                let obj = new DislikeInfo();
                obj.deserialize(params.DislikeInfoList[z]);
                this.DislikeInfoList.push(obj);
            }
        }
        this.Age = 'Age' in params ? params.Age : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Degree = 'Degree' in params ? params.Degree : null;
        this.School = 'School' in params ? params.School : null;
        this.Occupation = 'Occupation' in params ? params.Occupation : null;
        this.Industry = 'Industry' in params ? params.Industry : null;
        this.ResidentCountry = 'ResidentCountry' in params ? params.ResidentCountry : null;
        this.ResidentProvince = 'ResidentProvince' in params ? params.ResidentProvince : null;
        this.ResidentCity = 'ResidentCity' in params ? params.ResidentCity : null;
        this.RegisterTimestamp = 'RegisterTimestamp' in params ? params.RegisterTimestamp : null;
        this.MembershipLevel = 'MembershipLevel' in params ? params.MembershipLevel : null;
        this.LastLoginTimestamp = 'LastLoginTimestamp' in params ? params.LastLoginTimestamp : null;
        this.LastLoginIp = 'LastLoginIp' in params ? params.LastLoginIp : null;
        this.LastModifyTimestamp = 'LastModifyTimestamp' in params ? params.LastModifyTimestamp : null;
        this.Extension = 'Extension' in params ? params.Extension : null;

    }
}

/**
 * FeedRecommend返回参数结构体
 * @class
 */
class FeedRecommendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推荐返回的内容信息列表
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
 * 信息流内容
 * @class
 */
class DocItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容唯一id，建议限制在128字符以内
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 内容类型：<br/>● article -图文<br>● text -纯文本<br/>● video -视频<br/>● short_video -时长15秒以内的视频<br/>● mini_video -竖屏视频<br/>● image -纯图片<br/>（如当前类型不满足，请登录控制台进入对应项目，在<b>物料管理->物料类型管理</b>中添加）
         * @type {string || null}
         */
        this.ItemType = null;

        /**
         * 内容状态：
● 1 - 上架 
● 2 - 下架 
Status=2的内容不会在推荐结果中出现 
需要下架内容时，把Status的值修改为2即可
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 内容生成时间，秒级时间戳（1639624786），需大于0，<b>用作特征和物料管理</b>
         * @type {number || null}
         */
        this.PublishTimestamp = null;

        /**
         * 内容过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年，用作特征，过期则不会被推荐，<b>强烈建议</b>
         * @type {number || null}
         */
        this.ExpireTimestamp = null;

        /**
         * 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配，<b>强烈建议</b>
         * @type {number || null}
         */
        this.CategoryLevel = null;

        /**
         * 类目路径，一级二级三级等依次用英文冒号联接，和CategoryLevel字段值匹配，如体育：“足球:巴塞罗那”。<b>用于物料池管理，强烈建议</b>
         * @type {string || null}
         */
        this.CategoryPath = null;

        /**
         * 内容标签，多个标签用英文冒号联接，<b>用作特征，强烈建议</b>
         * @type {string || null}
         */
        this.Tags = null;

        /**
         * 作者名，需保证作者名唯一，若有重名需要加编号区分。<b>用于召回过滤、规则打散，强烈建议</b>
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 内容来源类型，客户自定义，<b>用于物料池管理</b>
         * @type {string || null}
         */
        this.SourceId = null;

        /**
         * 内容标题，<b>主要用于语义分析</b>
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 正文关键片段，建议控制在500字符以内，<b>主要用于语义分析</b>
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 正文详情，主要用于语义分析，当内容过大时建议用ContentUrl传递，<b>与Content可二选一</b>
         * @type {string || null}
         */
        this.ContentUrl = null;

        /**
         * 视频时长，时间秒，大于等于0，小于 3600 * 10。<b>视频内容必填，其它内容非必填，用作特征</b>
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * 国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”，<b>用作特征</b>
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”，<b>用作特征</b>
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市地区，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，其他国家统一用国际公认城市简称或者城市编码，<b>用作特征</b>
         * @type {string || null}
         */
        this.City = null;

        /**
         * 作者粉丝数，<b>用作特征</b>
         * @type {number || null}
         */
        this.AuthorFans = null;

        /**
         * 作者评级，<b>用作特征</b>
         * @type {string || null}
         */
        this.AuthorLevel = null;

        /**
         * 内容累计收藏次数，<b>用作特征</b>
         * @type {number || null}
         */
        this.CollectCnt = null;

        /**
         * 内容累积点赞次数，<b>用作特征</b>
         * @type {number || null}
         */
        this.PraiseCnt = null;

        /**
         * 内容累计评论次数，<b>用作特征</b>
         * @type {number || null}
         */
        this.CommentCnt = null;

        /**
         * 内容累计分享次数，<b>用作特征</b>
         * @type {number || null}
         */
        this.ShareCnt = null;

        /**
         * 内容累积打赏数，<b>用作特征</b>
         * @type {number || null}
         */
        this.RewardCnt = null;

        /**
         * 内容质量评分，<b>用作特征</b>
         * @type {number || null}
         */
        this.Score = null;

        /**
         * json字符串，<b>用于物料池管理的自定义扩展</b>，需要base64加密
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
        this.ExpireTimestamp = 'ExpireTimestamp' in params ? params.ExpireTimestamp : null;
        this.CategoryLevel = 'CategoryLevel' in params ? params.CategoryLevel : null;
        this.CategoryPath = 'CategoryPath' in params ? params.CategoryPath : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.SourceId = 'SourceId' in params ? params.SourceId : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ContentUrl = 'ContentUrl' in params ? params.ContentUrl : null;
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.AuthorFans = 'AuthorFans' in params ? params.AuthorFans : null;
        this.AuthorLevel = 'AuthorLevel' in params ? params.AuthorLevel : null;
        this.CollectCnt = 'CollectCnt' in params ? params.CollectCnt : null;
        this.PraiseCnt = 'PraiseCnt' in params ? params.PraiseCnt : null;
        this.CommentCnt = 'CommentCnt' in params ? params.CommentCnt : null;
        this.ShareCnt = 'ShareCnt' in params ? params.ShareCnt : null;
        this.RewardCnt = 'RewardCnt' in params ? params.RewardCnt : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Extension = 'Extension' in params ? params.Extension : null;

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
         * 过滤的类别：<br>● author 作者名<br/>（如当前类型不满足，请<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决方案）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Type对应字段名的值，如：需要过滤的作者名
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
 * ReportFeedBehavior返回参数结构体
 * @class
 */
class ReportFeedBehaviorResponse extends  AbstractModel {
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
 * ReportFeedItem请求参数结构体
 * @class
 */
class ReportFeedItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，在控制台获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 上报的信息流内容数组，一次数量不超过50
         * @type {Array.<DocItem> || null}
         */
        this.FeedItemList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FeedItemList) {
            this.FeedItemList = new Array();
            for (let z in params.FeedItemList) {
                let obj = new DocItem();
                obj.deserialize(params.FeedItemList[z]);
                this.FeedItemList.push(obj);
            }
        }

    }
}

/**
 * 用户ID信息
 * @class
 */
class UserIdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID类型： <br/>● qq: qq号码 <br/>● qq_md5：qq的md5值 <br/>● imei：设备imei <br/>● imei_md5：imei的md5值 <br/>● idfa: Apple 向用户设备随机分配的设备标识符 <br/>● idfa_md5：idfa的md5值 <br/>● oaid：安卓10之后一种非永久性设备标识符 <br/>● oaid_md5：md5后的oaid <br/>● wx_openid：微信openid <br/>● qq_openid：QQ的openid <br/>● phone：电话号码 <br/>● phone_md5：md5后的电话号码 <br/>● phone_sha256：SHA256加密的手机号 <br/>● phone_sm3：国密SM3加密的手机号 <br/>（如当前类型不满足，请<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决方案）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 用户ID值
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
 * 推荐返回的内容信息
 * @class
 */
class RecItemData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推荐的内容ID
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 内容类型，同内容上报类型一致
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ItemType = null;

        /**
         * 推荐追踪id，本次推荐内容产生的后续行为上报均要用该ItemTraceId上报。每次接口调用返回的ItemTraceId不同
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ItemTraceId = null;

        /**
         * 推荐预测分，分值越高被推荐的理由越充分，取值范围[0,1000000]，用于做二次排序的参考
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.ItemType = 'ItemType' in params ? params.ItemType : null;
        this.ItemTraceId = 'ItemTraceId' in params ? params.ItemTraceId : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * ReportFeedBehavior请求参数结构体
 * @class
 */
class ReportFeedBehaviorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，在控制台获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 上报的行为数据数组，数量不超过50
         * @type {Array.<FeedBehaviorInfo> || null}
         */
        this.FeedBehaviorList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FeedBehaviorList) {
            this.FeedBehaviorList = new Array();
            for (let z in params.FeedBehaviorList) {
                let obj = new FeedBehaviorInfo();
                obj.deserialize(params.FeedBehaviorList[z]);
                this.FeedBehaviorList.push(obj);
            }
        }

    }
}

/**
 * 信息流行为
 * @class
 */
class FeedBehaviorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 内容唯一id
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 行为类型：<br> ● expose - 曝光，<b>必须</b><br> ● click - 点击，<b>必须</b><br/>  ● stay - 详情页停留时长，<b>强烈建议</b><br/>  ● videoover - 视频播放时长，<b>强烈建议</b><br/> ●  like - 点赞&喜欢，<b>正效果</b><br/> ● collect - 收藏，<b>正效果</b><br/> ●  share - 转发&分享，<b>正效果</b><br/> ● reward - 打赏，<b>正效果</b><br/> ● unlike - 踩&不喜欢，<b>负效果</b><br/> ●  comment - 评论<br/> 不支持的行为类型，可以映射到未被使用的其他行为类型。如实际业务数据中有私信行为，没有收藏行为，可以将私信行为映射到收藏行为
         * @type {string || null}
         */
        this.BehaviorType = null;

        /**
         * 行为类型对应的行为值：<br/> ● expose - 曝光，固定填1<br/> ● click - 点击，固定填1<br/>  ● stay - 详情页停留时长，填停留秒数，取值[1-86400]<br/>  ● videoover - 视频播放时长，填播放结束的秒数，取值[1-86400]<br/> ●  like - 点赞&喜欢，固定填1<br/> ● collect - 收藏，固定填1<br/> ●  share - 转发&分享，固定填1<br/> ● reward - 打赏，填打赏金额，没有则填1<br/> ● unlike - 踩&不喜欢，填不喜欢的原因，没有则填1<br/> ●  comment - 评论，填评论内容，如“上海加油”
         * @type {string || null}
         */
        this.BehaviorValue = null;

        /**
         * 行为发生的时间戳： 秒级时间戳，尽量实时上报，最长不超过半小时否则会影响推荐结果的准确性
         * @type {number || null}
         */
        this.BehaviorTimestamp = null;

        /**
         * 行为发生的场景ID，在控制台创建场景后获取
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * 推荐追踪ID，使用推荐结果中返回的ItemTraceId填入。 
注意：如果和推荐结果中的ItemTraceId不同，会影响行为特征归因，影响推荐算法效果
         * @type {string || null}
         */
        this.ItemTraceId = null;

        /**
         * 内容类型，跟内容上报类型一致，用于效果分析，不做内容校验，<b>强烈建议</b>
         * @type {string || null}
         */
        this.ItemType = null;

        /**
         * 相关推荐场景点击进入详情页的内容id，该字段用来注明行为发生于哪个内容的详情页推荐中，<b>相关推荐场景强烈建议</b>
         * @type {string || null}
         */
        this.ReferrerItemId = null;

        /**
         * 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，<b>用于构建用户画像信息</b>
         * @type {Array.<UserIdInfo> || null}
         */
        this.UserIdList = null;

        /**
         * 算法来源： <br>● business 业务自己的算法对照组<br/> ● tencent 腾讯算法<br/> ● other 其他算法<br/>默认为tencent，区分行为来源于哪个算法，<b>用于Poc阶段的效果对比验证</b>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 行为发生时的国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”，<b>用作特征</b>
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 行为发生时的省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”，<b>用作特征</b>
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 行为发生时的城市地区，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，其他国家统一用国际公认城市简称或者城市编码，<b>用作特征</b>
         * @type {string || null}
         */
        this.City = null;

        /**
         * 行为发生时的客户端ip，<b>用作特征</b>
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 行为发生时的客户端网络类型，<b>用作特征</b>
         * @type {string || null}
         */
        this.Network = null;

        /**
         * 行为发生时的客户端平台，ios/android/h5，<b>用作特征</b>
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 行为发生时的客户端app版本，<b>用作特征</b>
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 行为发生时的操作系统版本，<b>用作特征</b>
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * 行为发生时的机型，<b>用作特征</b>
         * @type {string || null}
         */
        this.DeviceModel = null;

        /**
         * json字符串，<b>用于行为数据的扩展</b>，需要base64加密
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ItemId = 'ItemId' in params ? params.ItemId : null;
        this.BehaviorType = 'BehaviorType' in params ? params.BehaviorType : null;
        this.BehaviorValue = 'BehaviorValue' in params ? params.BehaviorValue : null;
        this.BehaviorTimestamp = 'BehaviorTimestamp' in params ? params.BehaviorTimestamp : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.ItemTraceId = 'ItemTraceId' in params ? params.ItemTraceId : null;
        this.ItemType = 'ItemType' in params ? params.ItemType : null;
        this.ReferrerItemId = 'ReferrerItemId' in params ? params.ReferrerItemId : null;

        if (params.UserIdList) {
            this.UserIdList = new Array();
            for (let z in params.UserIdList) {
                let obj = new UserIdInfo();
                obj.deserialize(params.UserIdList[z]);
                this.UserIdList.push(obj);
            }
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
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
 * ReportFeedUser返回参数结构体
 * @class
 */
class ReportFeedUserResponse extends  AbstractModel {
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
 * FeedRecommend请求参数结构体
 * @class
 */
class FeedRecommendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，在控制台获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 场景ID，在控制台创建场景后获取
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户设备ID数组，可传入用户的多个类型ID，用于关联画像信息
         * @type {Array.<UserIdInfo> || null}
         */
        this.UserIdList = null;

        /**
         * 推荐返回数量，默认10个，最多支持50个的内容返回。如果有更多数量要求，<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决
         * @type {number || null}
         */
        this.ItemCnt = null;

        /**
         * 当场景是相关推荐时该值必填，场景是非相关推荐时该值无效
         * @type {string || null}
         */
        this.CurrentItemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

        if (params.UserIdList) {
            this.UserIdList = new Array();
            for (let z in params.UserIdList) {
                let obj = new UserIdInfo();
                obj.deserialize(params.UserIdList[z]);
                this.UserIdList.push(obj);
            }
        }
        this.ItemCnt = 'ItemCnt' in params ? params.ItemCnt : null;
        this.CurrentItemId = 'CurrentItemId' in params ? params.CurrentItemId : null;

    }
}

module.exports = {
    ReportFeedItemResponse: ReportFeedItemResponse,
    ReportFeedUserRequest: ReportFeedUserRequest,
    FeedUserInfo: FeedUserInfo,
    FeedRecommendResponse: FeedRecommendResponse,
    DocItem: DocItem,
    DislikeInfo: DislikeInfo,
    ReportFeedBehaviorResponse: ReportFeedBehaviorResponse,
    ReportFeedItemRequest: ReportFeedItemRequest,
    UserIdInfo: UserIdInfo,
    RecItemData: RecItemData,
    ReportFeedBehaviorRequest: ReportFeedBehaviorRequest,
    FeedBehaviorInfo: FeedBehaviorInfo,
    ReportFeedUserResponse: ReportFeedUserResponse,
    FeedRecommendRequest: FeedRecommendRequest,

}
