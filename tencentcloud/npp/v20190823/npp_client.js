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
const DescribeCallBackStatusRequest = models.DescribeCallBackStatusRequest;
const DescribeCallBackCdrRequest = models.DescribeCallBackCdrRequest;
const CreateCallBackRequest = models.CreateCallBackRequest;
const DeleteCallBackRequest = models.DeleteCallBackRequest;
const GetVirtualNumResponse = models.GetVirtualNumResponse;
const DelVirtualNumResponse = models.DelVirtualNumResponse;
const CallBackCdr = models.CallBackCdr;
const RreCallerHandle = models.RreCallerHandle;
const DescribeCallerDisplayListRequest = models.DescribeCallerDisplayListRequest;
const DescribeCallerDisplayListResponse = models.DescribeCallerDisplayListResponse;
const CallBackPhoneCode = models.CallBackPhoneCode;
const CreateCallBackResponse = models.CreateCallBackResponse;
const DelVirtualNumRequest = models.DelVirtualNumRequest;
const GetVirtualNumRequest = models.GetVirtualNumRequest;
const DeleteCallBackResponse = models.DeleteCallBackResponse;
const Get400CdrRequest = models.Get400CdrRequest;
const DescribeCallBackCdrResponse = models.DescribeCallBackCdrResponse;
const KeyList = models.KeyList;
const VirturalNumCdr = models.VirturalNumCdr;
const Get400CdrResponse = models.Get400CdrResponse;
const DescribeCallBackStatusResponse = models.DescribeCallBackStatusResponse;


/**
 * npp client
 * @class
 */
class NppClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("npp.tencentcloudapi.com", "2019-08-23", credential, region, profile);
    }
    
    /**
     * 回拨呼叫取消
     * @param {DeleteCallBackRequest} req
     * @param {function(string, DeleteCallBackResponse):void} cb
     * @public
     */
    DeleteCallBack(req, cb) {
        let resp = new DeleteCallBackResponse();
        this.request("DeleteCallBack", req, resp, cb);
    }

    /**
     * 回拨拉取主叫显号号码集合
     * @param {DescribeCallerDisplayListRequest} req
     * @param {function(string, DescribeCallerDisplayListResponse):void} cb
     * @public
     */
    DescribeCallerDisplayList(req, cb) {
        let resp = new DescribeCallerDisplayListResponse();
        this.request("DescribeCallerDisplayList", req, resp, cb);
    }

    /**
     * 直拨解绑中间号
     * @param {DelVirtualNumRequest} req
     * @param {function(string, DelVirtualNumResponse):void} cb
     * @public
     */
    DelVirtualNum(req, cb) {
        let resp = new DelVirtualNumResponse();
        this.request("DelVirtualNum", req, resp, cb);
    }

    /**
     * 直拨获取中间号（App 使用方发起）
     * @param {GetVirtualNumRequest} req
     * @param {function(string, GetVirtualNumResponse):void} cb
     * @public
     */
    GetVirtualNum(req, cb) {
        let resp = new GetVirtualNumResponse();
        this.request("GetVirtualNum", req, resp, cb);
    }

    /**
     * 直拨话单获取接口
     * @param {Get400CdrRequest} req
     * @param {function(string, Get400CdrResponse):void} cb
     * @public
     */
    Get400Cdr(req, cb) {
        let resp = new Get400CdrResponse();
        this.request("Get400Cdr", req, resp, cb);
    }

    /**
     * 回拨通话状态获取
     * @param {DescribeCallBackStatusRequest} req
     * @param {function(string, DescribeCallBackStatusResponse):void} cb
     * @public
     */
    DescribeCallBackStatus(req, cb) {
        let resp = new DescribeCallBackStatusResponse();
        this.request("DescribeCallBackStatus", req, resp, cb);
    }

    /**
     * 回拨呼叫请求
     * @param {CreateCallBackRequest} req
     * @param {function(string, CreateCallBackResponse):void} cb
     * @public
     */
    CreateCallBack(req, cb) {
        let resp = new CreateCallBackResponse();
        this.request("CreateCallBack", req, resp, cb);
    }

    /**
     * 回拨话单获取接口
     * @param {DescribeCallBackCdrRequest} req
     * @param {function(string, DescribeCallBackCdrResponse):void} cb
     * @public
     */
    DescribeCallBackCdr(req, cb) {
        let resp = new DescribeCallBackCdrResponse();
        this.request("DescribeCallBackCdr", req, resp, cb);
    }


}
module.exports = NppClient;
