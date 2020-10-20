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
  UnbindEipAclsRequest,
  EipAclMap,
  ModifyEipChargeResponse,
  ModifyEipAclResponse,
  DescribeEipsResponse,
  ModifyEipAclRequest,
  UnbindVpcIpRequest,
  BindRsResponse,
  BindEipAclsResponse,
  CreateEipRequest,
  EipAclRule,
  UnbindHostedResponse,
  DeleteEipAclRequest,
  EipInfo,
  UnbindEipAclsResponse,
  DescribeEipAclsResponse,
  ModifyEipNameResponse,
  DescribeEipQuotaResponse,
  UnbindRsResponse,
  BindRsRequest,
  UnbindHostedRequest,
  UnbindRsListResponse,
  BindVpcIpResponse,
  DescribeEipsRequest,
  ModifyEipNameRequest,
  DeleteEipResponse,
  BindHostedResponse,
  BindVpcIpRequest,
  CreateEipAclRequest,
  EipAcl,
  CreateEipResponse,
  BindHostedRequest,
  DescribeEipTaskResponse,
  ModifyEipChargeRequest,
  DescribeEipQuotaRequest,
  DeleteEipRequest,
  EipRsMap,
  UnbindRsListRequest,
  DeleteEipAclResponse,
  DescribeEipAclsRequest,
  BindEipAclsRequest,
  DescribeEipTaskRequest,
  UnbindRsRequest,
  UnbindVpcIpResponse,
  CreateEipAclResponse,
} from "./bmeip_models"

/**
 * bmeip client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bmeip.tencentcloudapi.com", "2018-06-25", clientConfig)
  }

  /**
   * 解绑黑石EIP
   */
  async UnbindRs(
    req: UnbindRsRequest,
    cb?: (error: string, rep: UnbindRsResponse) => void
  ): Promise<UnbindRsResponse> {
    return this.request("UnbindRs", req, cb)
  }

  /**
   * BindHosted接口用于绑定黑石弹性公网IP到黑石托管机器上
   */
  async BindHosted(
    req: BindHostedRequest,
    cb?: (error: string, rep: BindHostedResponse) => void
  ): Promise<BindHostedResponse> {
    return this.request("BindHosted", req, cb)
  }

  /**
   * 创建黑石弹性公网 EIPACL
   */
  async CreateEipAcl(
    req: CreateEipAclRequest,
    cb?: (error: string, rep: CreateEipAclResponse) => void
  ): Promise<CreateEipAclResponse> {
    return this.request("CreateEipAcl", req, cb)
  }

  /**
   * 创建黑石弹性公网IP
   */
  async CreateEip(
    req: CreateEipRequest,
    cb?: (error: string, rep: CreateEipResponse) => void
  ): Promise<CreateEipResponse> {
    return this.request("CreateEip", req, cb)
  }

  /**
   * 修改弹性公网IP ACL
   */
  async ModifyEipAcl(
    req: ModifyEipAclRequest,
    cb?: (error: string, rep: ModifyEipAclResponse) => void
  ): Promise<ModifyEipAclResponse> {
    return this.request("ModifyEipAcl", req, cb)
  }

  /**
   * 查询黑石EIP 限额
   */
  async DescribeEipQuota(
    req?: DescribeEipQuotaRequest,
    cb?: (error: string, rep: DescribeEipQuotaResponse) => void
  ): Promise<DescribeEipQuotaResponse> {
    return this.request("DescribeEipQuota", req, cb)
  }

  /**
   * 绑定黑石EIP
   */
  async BindRs(
    req: BindRsRequest,
    cb?: (error: string, rep: BindRsResponse) => void
  ): Promise<BindRsResponse> {
    return this.request("BindRs", req, cb)
  }

  /**
   * 黑石EIP查询任务状态
   */
  async DescribeEipTask(
    req: DescribeEipTaskRequest,
    cb?: (error: string, rep: DescribeEipTaskResponse) => void
  ): Promise<DescribeEipTaskResponse> {
    return this.request("DescribeEipTask", req, cb)
  }

  /**
   * UnbindHosted接口用于解绑托管机器上的EIP
   */
  async UnbindHosted(
    req: UnbindHostedRequest,
    cb?: (error: string, rep: UnbindHostedResponse) => void
  ): Promise<UnbindHostedResponse> {
    return this.request("UnbindHosted", req, cb)
  }

  /**
   * 黑石EIP解绑VPCIP
   */
  async UnbindVpcIp(
    req: UnbindVpcIpRequest,
    cb?: (error: string, rep: UnbindVpcIpResponse) => void
  ): Promise<UnbindVpcIpResponse> {
    return this.request("UnbindVpcIp", req, cb)
  }

  /**
   * 释放黑石弹性公网IP
   */
  async DeleteEip(
    req: DeleteEipRequest,
    cb?: (error: string, rep: DeleteEipResponse) => void
  ): Promise<DeleteEipResponse> {
    return this.request("DeleteEip", req, cb)
  }

  /**
   * 黑石EIP修改计费方式
   */
  async ModifyEipCharge(
    req: ModifyEipChargeRequest,
    cb?: (error: string, rep: ModifyEipChargeResponse) => void
  ): Promise<ModifyEipChargeResponse> {
    return this.request("ModifyEipCharge", req, cb)
  }

  /**
   * 更新黑石EIP名称
   */
  async ModifyEipName(
    req: ModifyEipNameRequest,
    cb?: (error: string, rep: ModifyEipNameResponse) => void
  ): Promise<ModifyEipNameResponse> {
    return this.request("ModifyEipName", req, cb)
  }

  /**
   * 此接口用于为某个 EIP 关联 ACL。
   */
  async BindEipAcls(
    req: BindEipAclsRequest,
    cb?: (error: string, rep: BindEipAclsResponse) => void
  ): Promise<BindEipAclsResponse> {
    return this.request("BindEipAcls", req, cb)
  }

  /**
   * 删除弹性公网IP ACL
   */
  async DeleteEipAcl(
    req: DeleteEipAclRequest,
    cb?: (error: string, rep: DeleteEipAclResponse) => void
  ): Promise<DeleteEipAclResponse> {
    return this.request("DeleteEipAcl", req, cb)
  }

  /**
   * 解绑弹性公网IP ACL
   */
  async UnbindEipAcls(
    req: UnbindEipAclsRequest,
    cb?: (error: string, rep: UnbindEipAclsResponse) => void
  ): Promise<UnbindEipAclsResponse> {
    return this.request("UnbindEipAcls", req, cb)
  }

  /**
   * 黑石EIP查询接口
   */
  async DescribeEips(
    req: DescribeEipsRequest,
    cb?: (error: string, rep: DescribeEipsResponse) => void
  ): Promise<DescribeEipsResponse> {
    return this.request("DescribeEips", req, cb)
  }

  /**
   * 黑石EIP绑定VPCIP
   */
  async BindVpcIp(
    req: BindVpcIpRequest,
    cb?: (error: string, rep: BindVpcIpResponse) => void
  ): Promise<BindVpcIpResponse> {
    return this.request("BindVpcIp", req, cb)
  }

  /**
   * 批量解绑物理机弹性公网IP接口
   */
  async UnbindRsList(
    req: UnbindRsListRequest,
    cb?: (error: string, rep: UnbindRsListResponse) => void
  ): Promise<UnbindRsListResponse> {
    return this.request("UnbindRsList", req, cb)
  }

  /**
   * 查询弹性公网IP ACL
   */
  async DescribeEipAcls(
    req: DescribeEipAclsRequest,
    cb?: (error: string, rep: DescribeEipAclsResponse) => void
  ): Promise<DescribeEipAclsResponse> {
    return this.request("DescribeEipAcls", req, cb)
  }
}
