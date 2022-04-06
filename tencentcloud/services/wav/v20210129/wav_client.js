"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * wav client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("wav.tencentcloudapi.com", "2021-01-29", clientConfig);
    }
    /**
     * 根据游标拉取活动活码列表信息
     */
    async QueryActivityLiveCodeList(req, cb) {
        return this.request("QueryActivityLiveCodeList", req, cb);
    }
    /**
     * 根据游标拉取活动列表信息
     */
    async QueryActivityList(req, cb) {
        return this.request("QueryActivityList", req, cb);
    }
    /**
     * 通过接口拉取SaaS内C端外部联系人在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
     */
    async QueryCustomerEventDetailStatistics(req, cb) {
        return this.request("QueryCustomerEventDetailStatistics", req, cb);
    }
    /**
     * 根据游标拉取活动参与列表信息
     */
    async QueryActivityJoinList(req, cb) {
        return this.request("QueryActivityJoinList", req, cb);
    }
    /**
     * 根据游标拉取渠道活码列表信息
     */
    async QueryChannelCodeList(req, cb) {
        return this.request("QueryChannelCodeList", req, cb);
    }
    /**
     * 企业可通过此接口基于外部联系人获取指定成员添加的客户列表。客户是指配置了客户联系功能的成员所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。
     */
    async QueryExternalContactList(req, cb) {
        return this.request("QueryExternalContactList", req, cb);
    }
    /**
     * 查询企业成员信息列表接口
     */
    async QueryUserInfoList(req, cb) {
        return this.request("QueryUserInfoList", req, cb);
    }
    /**
     * 通过接口拉取租户在指定时间范围内的外部联系人添加/删除明细，此接口提供的数据以天为维度，查询的时间范围为[StarTime, EndTime]，即前后均为闭区间，支持的最大查询跨度为365天；
     */
    async QueryExternalUserEventList(req, cb) {
        return this.request("QueryExternalUserEventList", req, cb);
    }
    /**
     * 该接口获取license对应的详细信息
     */
    async QueryLicenseInfo(req, cb) {
        return this.request("QueryLicenseInfo", req, cb);
    }
    /**
     * 企业可通过此接口获取线索列表。
     */
    async QueryClueInfoList(req, cb) {
        return this.request("QueryClueInfoList", req, cb);
    }
    /**
     * 企业可通过此接口，根据外部联系人的userid，拉取外部联系人详情
     */
    async QueryExternalContactDetail(req, cb) {
        return this.request("QueryExternalContactDetail", req, cb);
    }
    /**
     * 线索回收接口
     */
    async CreateLead(req, cb) {
        return this.request("CreateLead", req, cb);
    }
    /**
     * 通过接口拉取SaaS内企业成员在指定时间范围内的行为事件明细。此接口提供的数据以天为维度，查询的时间范围为[start_time,end_time]，即前后均为闭区间，支持的最大查询跨度为365天。
     */
    async QueryStaffEventDetailStatistics(req, cb) {
        return this.request("QueryStaffEventDetailStatistics", req, cb);
    }
    /**
     * 企业可通过此接口获取企微SaaS平台上的车系车型信息。
     */
    async QueryVehicleInfoList(req, cb) {
        return this.request("QueryVehicleInfoList", req, cb);
    }
    /**
     * 根据游标拉取会话存档列表信息
     */
    async QueryChatArchivingList(req, cb) {
        return this.request("QueryChatArchivingList", req, cb);
    }
    /**
     * 该接口用户设置标签库, 每个企业最多可配置3000个企业标签。
     */
    async CreateCorpTag(req, cb) {
        return this.request("CreateCorpTag", req, cb);
    }
    /**
     * 通过接口拉取租户/指定成员/部门在指定日期范围内的CRM跟进统计数据
     */
    async QueryCrmStatistics(req, cb) {
        return this.request("QueryCrmStatistics", req, cb);
    }
    /**
     * 通过接口按类型拉取租户当前的素材列表及关键信息
     */
    async QueryMaterialList(req, cb) {
        return this.request("QueryMaterialList", req, cb);
    }
    /**
     * 新增渠道活码接口
     */
    async CreateChannelCode(req, cb) {
        return this.request("CreateChannelCode", req, cb);
    }
    /**
     * 查询小程序码列表接口
     */
    async QueryMiniAppCodeList(req, cb) {
        return this.request("QueryMiniAppCodeList", req, cb);
    }
    /**
     * 企业可通过此接口获取录入在企微SaaS平台上的经销商信息。
     */
    async QueryDealerInfoList(req, cb) {
        return this.request("QueryDealerInfoList", req, cb);
    }
    /**
     * 企业可通过此接口将企业主体对应的外部联系人id转换为乐销车应用主体对应的外部联系人。
     */
    async QueryExternalUserMappingInfo(req, cb) {
        return this.request("QueryExternalUserMappingInfo", req, cb);
    }
}
exports.Client = Client;
