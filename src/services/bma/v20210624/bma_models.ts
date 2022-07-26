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
 * DescribeCRWorkInfo请求参数结构体
 */
export interface DescribeCRWorkInfoRequest {
  /**
   * xxx
   */
  WorkId: number
}

/**
 * DescribeCRWorkInfo返回参数结构体
 */
export interface DescribeCRWorkInfoResponse {
  /**
   * x
   */
  WorkName: string

  /**
   * x
   */
  MonitorStatus: number

  /**
   * x
   */
  AuthStatus: number

  /**
   * x
   */
  CommStatus: number

  /**
   * x
   */
  IsProducer: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRRight请求参数结构体
 */
export interface CreateCRRightRequest {
  /**
   * 已存证的作品ID
   */
  WorkId: number

  /**
   * 侵权链接
   */
  TortUrl: string

  /**
   * 侵权标题
   */
  TortTitle?: string

  /**
   * 侵权平台
   */
  TortPlat?: string

  /**
   * 发函结果回调地址
   */
  RightUrl?: string

  /**
   * x
   */
  FileUrl?: string

  /**
   * x
   */
  ValidStartDate?: string

  /**
   * x
   */
  ValidEndDate?: string

  /**
   * x
   */
  CommFileUrl?: string

  /**
   * x
   */
  CommValidStartDate?: string

  /**
   * x
   */
  CommValidEndDate?: string

  /**
   * x
   */
  HomeFileUrl?: string

  /**
   * x
   */
  HomeValidStartDate?: string

  /**
   * x
   */
  HomeValidEndDate?: string

  /**
   * x
   */
  IsProducer?: string
}

/**
 * CreateCRRight返回参数结构体
 */
export interface CreateCRRightResponse {
  /**
   * 侵权ID
   */
  TortId: number

  /**
   * xxx
   */
  TortNum: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRBlock请求参数结构体
 */
export interface CreateCRBlockRequest {
  /**
   * 已存证的作品ID
   */
  WorkId: number

  /**
   * 侵权链接
   */
  TortUrl: string

  /**
   * 侵权标题
   */
  TortTitle?: string

  /**
   * 侵权平台
   */
  TortPlat?: string

  /**
   * 拦截结果回调地址
   */
  BlockUrl?: string

  /**
   * x
   */
  FileUrl?: string

  /**
   * x
   */
  ValidStartDate?: string

  /**
   * x
   */
  ValidEndDate?: string

  /**
   * xx
   */
  TortPic?: string

  /**
   * x
   */
  CommFileUrl?: string

  /**
   * x
   */
  CommValidStartDate?: string

  /**
   * x
   */
  CommValidEndDate?: string

  /**
   * x
   */
  IsProducer?: string
}

/**
 * CreateCRBlock返回参数结构体
 */
export interface CreateCRBlockResponse {
  /**
   * 侵权ID
   */
  TortId: number

  /**
   * xxx
   */
  TortNum: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRCompanyVerify返回参数结构体
 */
export interface CreateCRCompanyVerifyResponse {
  /**
   * 认证状态 0-认证成功 1-认证失败
   */
  Status: number

  /**
   * 认证结果返回
   */
  Note: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRCompanyVerify请求参数结构体
 */
export interface CreateCRCompanyVerifyRequest {
  /**
   * 企业名称
   */
  CompanyName: string

  /**
   * 企业证件号码
   */
  CompanyID: string

  /**
   * 企业法人姓名
   */
  CompanyLegalName: string

  /**
   * 管理员名称
   */
  ManagerName: string

  /**
   * 管理员手机号
   */
  ManagerPhone: string

  /**
   * 手机验证码
   */
  VerificationCode: string

  /**
   * 企业认证号码类型 1：社会信用代码 2：组织机构代码 3：企业工商注册码 4：其他 默认为1
   */
  CompanyIDType?: string

  /**
   * xxx
   */
  Type?: string
}
