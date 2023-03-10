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
  Subnet,
  DescribeSubnetRequest,
  DescribeVsmsResponse,
  DescribeSupportedHsmResponse,
  InquiryPriceBuyVsmRequest,
  DescribeVpcResponse,
  ModifyVsmAttributesRequest,
  GetAlarmEventResponse,
  ModifyAlarmEventRequest,
  DescribeSubnetResponse,
  GetVsmMonitorInfoResponse,
  VsmInfo,
  DescribeSupportedHsmRequest,
  GetAlarmEventRequest,
  DescribeHSMByVpcIdResponse,
  DescribeUsgRuleResponse,
  Tag,
  ResourceInfo,
  DescribeVpcRequest,
  AlarmPolicy,
  DescribeUsgRequest,
  HsmInfo,
  Vpc,
  DescribeVsmAttributesResponse,
  TagFilter,
  DescribeHSMByVpcIdRequest,
  ModifyAlarmEventResponse,
  UsgRuleDetail,
  InquiryPriceBuyVsmResponse,
  SgUnit,
  DescribeHSMBySubnetIdResponse,
  GetVsmMonitorInfoRequest,
  DescribeUsgResponse,
  DescribeHSMBySubnetIdRequest,
  DescribeVsmsRequest,
  DeviceInfo,
  DescribeUsgRuleRequest,
  ModifyVsmAttributesResponse,
  DescribeVsmAttributesRequest,
  UsgPolicy,
} from "./cloudhsm_models"

/**
 * cloudhsm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudhsm.tencentcloudapi.com", "2019-11-12", clientConfig)
  }

  /**
   * 获取告警事件
   */
  async GetAlarmEvent(
    req?: GetAlarmEventRequest,
    cb?: (error: string, rep: GetAlarmEventResponse) => void
  ): Promise<GetAlarmEventResponse> {
    return this.request("GetAlarmEvent", req, cb)
  }

  /**
   * 修改VSM属性
   */
  async ModifyVsmAttributes(
    req: ModifyVsmAttributesRequest,
    cb?: (error: string, rep: ModifyVsmAttributesResponse) => void
  ): Promise<ModifyVsmAttributesResponse> {
    return this.request("ModifyVsmAttributes", req, cb)
  }

  /**
   * 获取VSM属性
   */
  async DescribeVsmAttributes(
    req: DescribeVsmAttributesRequest,
    cb?: (error: string, rep: DescribeVsmAttributesResponse) => void
  ): Promise<DescribeVsmAttributesResponse> {
    return this.request("DescribeVsmAttributes", req, cb)
  }

  /**
   * 获取用户VSM列表
   */
  async DescribeVsms(
    req: DescribeVsmsRequest,
    cb?: (error: string, rep: DescribeVsmsResponse) => void
  ): Promise<DescribeVsmsResponse> {
    return this.request("DescribeVsms", req, cb)
  }

  /**
   * 查询用户的私有网络列表
   */
  async DescribeVpc(
    req: DescribeVpcRequest,
    cb?: (error: string, rep: DescribeVpcResponse) => void
  ): Promise<DescribeVpcResponse> {
    return this.request("DescribeVpc", req, cb)
  }

  /**
   * 通过VpcId获取Hsm资源数
   */
  async DescribeHSMByVpcId(
    req: DescribeHSMByVpcIdRequest,
    cb?: (error: string, rep: DescribeHSMByVpcIdResponse) => void
  ): Promise<DescribeHSMByVpcIdResponse> {
    return this.request("DescribeHSMByVpcId", req, cb)
  }

  /**
   * 获取VSM监控信息
   */
  async GetVsmMonitorInfo(
    req: GetVsmMonitorInfoRequest,
    cb?: (error: string, rep: GetVsmMonitorInfoResponse) => void
  ): Promise<GetVsmMonitorInfoResponse> {
    return this.request("GetVsmMonitorInfo", req, cb)
  }

  /**
   * 通过SubnetId获取Hsm资源数
   */
  async DescribeHSMBySubnetId(
    req: DescribeHSMBySubnetIdRequest,
    cb?: (error: string, rep: DescribeHSMBySubnetIdResponse) => void
  ): Promise<DescribeHSMBySubnetIdResponse> {
    return this.request("DescribeHSMBySubnetId", req, cb)
  }

  /**
   * 根据用户的AppId获取用户安全组列表
   */
  async DescribeUsg(
    req: DescribeUsgRequest,
    cb?: (error: string, rep: DescribeUsgResponse) => void
  ): Promise<DescribeUsgResponse> {
    return this.request("DescribeUsg", req, cb)
  }

  /**
   * 查询子网列表
   */
  async DescribeSubnet(
    req: DescribeSubnetRequest,
    cb?: (error: string, rep: DescribeSubnetResponse) => void
  ): Promise<DescribeSubnetResponse> {
    return this.request("DescribeSubnet", req, cb)
  }

  /**
   * 修改告警事件
   */
  async ModifyAlarmEvent(
    req: ModifyAlarmEventRequest,
    cb?: (error: string, rep: ModifyAlarmEventResponse) => void
  ): Promise<ModifyAlarmEventResponse> {
    return this.request("ModifyAlarmEvent", req, cb)
  }

  /**
   * 获取当前地域所支持的设备列表
   */
  async DescribeSupportedHsm(
    req: DescribeSupportedHsmRequest,
    cb?: (error: string, rep: DescribeSupportedHsmResponse) => void
  ): Promise<DescribeSupportedHsmResponse> {
    return this.request("DescribeSupportedHsm", req, cb)
  }

  /**
   * 购买询价接口
   */
  async InquiryPriceBuyVsm(
    req: InquiryPriceBuyVsmRequest,
    cb?: (error: string, rep: InquiryPriceBuyVsmResponse) => void
  ): Promise<InquiryPriceBuyVsmResponse> {
    return this.request("InquiryPriceBuyVsm", req, cb)
  }

  /**
   * 获取安全组详情
   */
  async DescribeUsgRule(
    req: DescribeUsgRuleRequest,
    cb?: (error: string, rep: DescribeUsgRuleResponse) => void
  ): Promise<DescribeUsgRuleResponse> {
    return this.request("DescribeUsgRule", req, cb)
  }
}
