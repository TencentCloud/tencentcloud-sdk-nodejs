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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeBrandPosCommentsRequest = models.DescribeBrandPosCommentsRequest;
const BrandReportArticle = models.BrandReportArticle;
const DescribeBrandSocialOpinionResponse = models.DescribeBrandSocialOpinionResponse;
const DescribeBrandExposureResponse = models.DescribeBrandExposureResponse;
const DescribeBrandPosCommentsResponse = models.DescribeBrandPosCommentsResponse;
const DescribeIndustryNewsRequest = models.DescribeIndustryNewsRequest;
const DescribeBrandSocialOpinionRequest = models.DescribeBrandSocialOpinionRequest;
const DescribeBrandSocialReportRequest = models.DescribeBrandSocialReportRequest;
const DescribeBrandSocialReportResponse = models.DescribeBrandSocialReportResponse;
const DescribeBrandExposureRequest = models.DescribeBrandExposureRequest;
const CommentInfo = models.CommentInfo;
const StarPortrait = models.StarPortrait;
const DateCount = models.DateCount;
const GenderPortraitInfo = models.GenderPortraitInfo;
const IndustryNews = models.IndustryNews;
const ProvincePortrait = models.ProvincePortrait;
const StarPortraitInfo = models.StarPortraitInfo;
const AgePortraitInfo = models.AgePortraitInfo;
const DescribeUserPortraitResponse = models.DescribeUserPortraitResponse;
const DescribeBrandCommentCountRequest = models.DescribeBrandCommentCountRequest;
const DescribeBrandMediaReportRequest = models.DescribeBrandMediaReportRequest;
const DescribeBrandMediaReportResponse = models.DescribeBrandMediaReportResponse;
const Comment = models.Comment;
const ProvincePortraitInfo = models.ProvincePortraitInfo;
const DescribeBrandCommentCountResponse = models.DescribeBrandCommentCountResponse;
const MoviePortrait = models.MoviePortrait;
const DescribeIndustryNewsResponse = models.DescribeIndustryNewsResponse;
const DescribeBrandNegCommentsResponse = models.DescribeBrandNegCommentsResponse;
const DescribeUserPortraitRequest = models.DescribeUserPortraitRequest;
const DescribeBrandNegCommentsRequest = models.DescribeBrandNegCommentsRequest;
const AgePortrait = models.AgePortrait;
const MoviePortraitInfo = models.MoviePortraitInfo;
const GenderPortrait = models.GenderPortrait;


/**
 * tbm client
 * @class
 */
class TbmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbm.tencentcloudapi.com", "2018-01-29", credential, region, profile);
    }
    
    /**
     * 通过分析洞察参与过品牌媒体互动的用户，比如公开发表品牌的新闻评论、在公开社交渠道发表过对品牌的评价观点等用户，返回用户的画像属性分布，例如性别、年龄、地域、喜爱的明星、喜爱的影视。
     * @param {DescribeUserPortraitRequest} req
     * @param {function(string, DescribeUserPortraitResponse):void} cb
     * @public
     */
    DescribeUserPortrait(req, cb) {
        let resp = new DescribeUserPortraitResponse();
        this.request("DescribeUserPortrait", req, resp, cb);
    }

    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌热门好评观点列表。
     * @param {DescribeBrandPosCommentsRequest} req
     * @param {function(string, DescribeBrandPosCommentsResponse):void} cb
     * @public
     */
    DescribeBrandPosComments(req, cb) {
        let resp = new DescribeBrandPosCommentsResponse();
        this.request("DescribeBrandPosComments", req, resp, cb);
    }

    /**
     * 根据客户定制的行业关键词，监测关键词出现在媒体网站（新闻媒体、网络门户、政府网站、微信公众号、天天快报等）发布资讯标题和正文中的报道数，以及文章列表、来源渠道、作者、发布时间等。
     * @param {DescribeIndustryNewsRequest} req
     * @param {function(string, DescribeIndustryNewsResponse):void} cb
     * @public
     */
    DescribeIndustryNews(req, cb) {
        let resp = new DescribeIndustryNewsResponse();
        this.request("DescribeIndustryNews", req, resp, cb);
    }

    /**
     * 监测品牌关键词出现在媒体网站（新闻媒体、网络门户、政府网站、微信公众号、天天快报等）发布资讯标题和正文中的报道数。按天输出结果。
     * @param {DescribeBrandMediaReportRequest} req
     * @param {function(string, DescribeBrandMediaReportResponse):void} cb
     * @public
     */
    DescribeBrandMediaReport(req, cb) {
        let resp = new DescribeBrandMediaReportResponse();
        this.request("DescribeBrandMediaReport", req, resp, cb);
    }

    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌热门差评观点列表。
     * @param {DescribeBrandNegCommentsRequest} req
     * @param {function(string, DescribeBrandNegCommentsResponse):void} cb
     * @public
     */
    DescribeBrandNegComments(req, cb) {
        let resp = new DescribeBrandNegCommentsResponse();
        this.request("DescribeBrandNegComments", req, resp, cb);
    }

    /**
     * 监测品牌关键词出现在微博、QQ兴趣部落、论坛、博客等个人公开贡献资讯中的条数。按天输出数据结果。
     * @param {DescribeBrandSocialReportRequest} req
     * @param {function(string, DescribeBrandSocialReportResponse):void} cb
     * @public
     */
    DescribeBrandSocialReport(req, cb) {
        let resp = new DescribeBrandSocialReportResponse();
        this.request("DescribeBrandSocialReport", req, resp, cb);
    }

    /**
     * 检测品牌关键词出现在微博、QQ兴趣部落、论坛、博客等个人公开贡献资讯中的内容，每天聚合近30天热度最高的观点列表。
     * @param {DescribeBrandSocialOpinionRequest} req
     * @param {function(string, DescribeBrandSocialOpinionResponse):void} cb
     * @public
     */
    DescribeBrandSocialOpinion(req, cb) {
        let resp = new DescribeBrandSocialOpinionResponse();
        this.request("DescribeBrandSocialOpinion", req, resp, cb);
    }

    /**
     * 通过分析用户在评价品牌时用词的正负面情绪评分，返回品牌好评与差评评价条数，按天输出结果。
     * @param {DescribeBrandCommentCountRequest} req
     * @param {function(string, DescribeBrandCommentCountResponse):void} cb
     * @public
     */
    DescribeBrandCommentCount(req, cb) {
        let resp = new DescribeBrandCommentCountResponse();
        this.request("DescribeBrandCommentCount", req, resp, cb);
    }

    /**
     * 监测品牌关键词命中文章标题或全文的文章篇数，按天输出数据。
     * @param {DescribeBrandExposureRequest} req
     * @param {function(string, DescribeBrandExposureResponse):void} cb
     * @public
     */
    DescribeBrandExposure(req, cb) {
        let resp = new DescribeBrandExposureResponse();
        this.request("DescribeBrandExposure", req, resp, cb);
    }


}
module.exports = TbmClient;
