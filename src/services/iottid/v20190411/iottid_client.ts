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
  DescribePermissionRequest,
  VerifyChipBurnInfoResponse,
  DeliverTidsResponse,
  BurnTidNotifyResponse,
  DescribeAvailableLibCountResponse,
  UploadDeviceUniqueCodeResponse,
  AuthTestTidResponse,
  DeliverTidNotifyResponse,
  AuthTestTidRequest,
  BurnTidNotifyRequest,
  VerifyChipBurnInfoRequest,
  UploadDeviceUniqueCodeRequest,
  DescribeAvailableLibCountRequest,
  DeliverTidsRequest,
  DeliverTidNotifyRequest,
  TidKeysInfo,
  DescribePermissionResponse,
  DownloadTidsRequest,
  DownloadTidsResponse,
} from "./iottid_models"

/**
 * iottid client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iottid.tencentcloudapi.com", "2019-04-11", clientConfig)
  }

  /**
   * 单向认证测试TID
   */
  async AuthTestTid(
    req: AuthTestTidRequest,
    cb?: (error: string, rep: AuthTestTidResponse) => void
  ): Promise<AuthTestTidResponse> {
    return this.request("AuthTestTid", req, cb)
  }

  /**
   * 上传硬件唯一标识码，是软加固设备身份参数。本接口如遇到错误数据，则所有当次上传数据失效。
   */
  async UploadDeviceUniqueCode(
    req: UploadDeviceUniqueCodeRequest,
    cb?: (error: string, rep: UploadDeviceUniqueCodeResponse) => void
  ): Promise<UploadDeviceUniqueCodeResponse> {
    return this.request("UploadDeviceUniqueCode", req, cb)
  }

  /**
   * 下载控制台验证芯片烧录信息，保证TID与中心信息一致
   */
  async VerifyChipBurnInfo(
    req: VerifyChipBurnInfoRequest,
    cb?: (error: string, rep: VerifyChipBurnInfoResponse) => void
  ): Promise<VerifyChipBurnInfoResponse> {
    return this.request("VerifyChipBurnInfo", req, cb)
  }

  /**
   * 设备服务商请求空发产品订单的TID信息
   */
  async DeliverTids(
    req: DeliverTidsRequest,
    cb?: (error: string, rep: DeliverTidsResponse) => void
  ): Promise<DeliverTidsResponse> {
    return this.request("DeliverTids", req, cb)
  }

  /**
   * 安全芯片TID烧录回执
   */
  async BurnTidNotify(
    req: BurnTidNotifyRequest,
    cb?: (error: string, rep: BurnTidNotifyResponse) => void
  ): Promise<BurnTidNotifyResponse> {
    return this.request("BurnTidNotify", req, cb)
  }

  /**
   * 查询企业用户TID平台控制台权限
   */
  async DescribePermission(
    req?: DescribePermissionRequest,
    cb?: (error: string, rep: DescribePermissionResponse) => void
  ): Promise<DescribePermissionResponse> {
    return this.request("DescribePermission", req, cb)
  }

  /**
   * 安全芯片为载体的TID空发回执，绑定TID与订单号。
   */
  async DeliverTidNotify(
    req: DeliverTidNotifyRequest,
    cb?: (error: string, rep: DeliverTidNotifyResponse) => void
  ): Promise<DeliverTidNotifyResponse> {
    return this.request("DeliverTidNotify", req, cb)
  }

  /**
   * 下载芯片订单的TID
   */
  async DownloadTids(
    req: DownloadTidsRequest,
    cb?: (error: string, rep: DownloadTidsResponse) => void
  ): Promise<DownloadTidsResponse> {
    return this.request("DownloadTids", req, cb)
  }

  /**
   * 查询指定订单的可空发的白盒密钥数量
   */
  async DescribeAvailableLibCount(
    req: DescribeAvailableLibCountRequest,
    cb?: (error: string, rep: DescribeAvailableLibCountResponse) => void
  ): Promise<DescribeAvailableLibCountResponse> {
    return this.request("DescribeAvailableLibCount", req, cb)
  }
}
