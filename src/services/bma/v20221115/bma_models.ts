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

/**
 * CreateBPFakeAPP返回参数结构体
 */
export interface CreateBPFakeAPPResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBPFakeAPP请求参数结构体
 */
export interface CreateBPFakeAPPRequest {
  /**
   * 企业id
   */
  CompanyId: number

  /**
   * 仿冒应用名称
   */
  FakeAPPName: string

  /**
   * 仿冒来源
   */
  APPChan?: string

  /**
   * 仿冒应用包名
   */
  FakeAPPPackageName?: string

  /**
   * 仿冒应用证书
   */
  FakeAPPCert?: string

  /**
   * 仿冒应用大小
   */
  FakeAPPSize?: string

  /**
   * 仿冒截图
   */
  FakeAPPSnapshots?: Array<string>

  /**
   * 备注
   */
  Note?: string
}

/**
 * CreateBPFakeAPPList请求参数结构体
 */
export interface CreateBPFakeAPPListRequest {
  /**
   * 仿冒应用下载链接。请严格按照模版进行填写：https://bma-privacy-detection-1251316161.cosgz.myqcloud.com/20221206/f8c7521fbd84f4c4e7c2a25ac233857e/批量仿冒应用举报模板.xlsx
   */
  FakeAPPs: string
}

/**
 * CreateBPFakeURL请求参数结构体
 */
export interface CreateBPFakeURLRequest {
  /**
   * 企业id
   */
  CompanyId: number

  /**
   * 仿冒网址
   */
  FakeURL: string

  /**
   * 仿冒网址截图
   */
  FakeURLSnapshots?: Array<string>

  /**
   * 备注
   */
  Note?: string
}

/**
 * CreateBPFakeAPPList返回参数结构体
 */
export interface CreateBPFakeAPPListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBPFakeURL返回参数结构体
 */
export interface CreateBPFakeURLResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBPFakeURLs请求参数结构体
 */
export interface CreateBPFakeURLsRequest {
  /**
   * 仿冒网址下载链接：请严格按照模版要求填写，https://bma-privacy-detection-1251316161.cosgz.myqcloud.com/20221124/ff3273b24104d03fa3a8d0629a7f71a9/批量仿冒网址举报模板.xlsx
   */
  FakeURLs: string
}

/**
 * CreateBPFakeURLs返回参数结构体
 */
export interface CreateBPFakeURLsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
