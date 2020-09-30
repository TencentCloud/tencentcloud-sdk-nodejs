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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeCallBackStatusRequest,
  DescribeCallBackCdrRequest,
  CreateCallBackRequest,
  DeleteCallBackRequest,
  GetVirtualNumResponse,
  DelVirtualNumResponse,
  CallBackCdr,
  RreCallerHandle,
  DescribeCallerDisplayListRequest,
  DescribeCallerDisplayListResponse,
  CallBackPhoneCode,
  CreateCallBackResponse,
  DelVirtualNumRequest,
  GetVirtualNumRequest,
  DeleteCallBackResponse,
  Get400CdrRequest,
  DescribeCallBackCdrResponse,
  KeyList,
  VirturalNumCdr,
  Get400CdrResponse,
  DescribeCallBackStatusResponse,
} from "./npp_models"

/**
 * npp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("npp.tencentcloudapi.com", "2019-08-23", clientConfig)
  }

  /**
   * 回拨呼叫取消
   */
  async DeleteCallBack(
    req: DeleteCallBackRequest,
    cb?: (error: string, rep: DeleteCallBackResponse) => void
  ): Promise<DeleteCallBackResponse> {
    return this.request("DeleteCallBack", req, cb)
  }

  /**
   * 回拨拉取主叫显号号码集合
   */
  async DescribeCallerDisplayList(
    req: DescribeCallerDisplayListRequest,
    cb?: (error: string, rep: DescribeCallerDisplayListResponse) => void
  ): Promise<DescribeCallerDisplayListResponse> {
    return this.request("DescribeCallerDisplayList", req, cb)
  }

  /**
   * 直拨解绑中间号
   */
  async DelVirtualNum(
    req: DelVirtualNumRequest,
    cb?: (error: string, rep: DelVirtualNumResponse) => void
  ): Promise<DelVirtualNumResponse> {
    return this.request("DelVirtualNum", req, cb)
  }

  /**
   * 直拨获取中间号（App 使用方发起）
   */
  async GetVirtualNum(
    req: GetVirtualNumRequest,
    cb?: (error: string, rep: GetVirtualNumResponse) => void
  ): Promise<GetVirtualNumResponse> {
    return this.request("GetVirtualNum", req, cb)
  }

  /**
   * 直拨话单获取接口
   */
  async Get400Cdr(
    req: Get400CdrRequest,
    cb?: (error: string, rep: Get400CdrResponse) => void
  ): Promise<Get400CdrResponse> {
    return this.request("Get400Cdr", req, cb)
  }

  /**
   * 回拨通话状态获取
   */
  async DescribeCallBackStatus(
    req: DescribeCallBackStatusRequest,
    cb?: (error: string, rep: DescribeCallBackStatusResponse) => void
  ): Promise<DescribeCallBackStatusResponse> {
    return this.request("DescribeCallBackStatus", req, cb)
  }

  /**
   * 回拨呼叫请求
   */
  async CreateCallBack(
    req: CreateCallBackRequest,
    cb?: (error: string, rep: CreateCallBackResponse) => void
  ): Promise<CreateCallBackResponse> {
    return this.request("CreateCallBack", req, cb)
  }

  /**
   * 回拨话单获取接口
   */
  async DescribeCallBackCdr(
    req: DescribeCallBackCdrRequest,
    cb?: (error: string, rep: DescribeCallBackCdrResponse) => void
  ): Promise<DescribeCallBackCdrResponse> {
    return this.request("DescribeCallBackCdr", req, cb)
  }
}
