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
 * CreateVerifyReport请求参数结构体
 */
export interface CreateVerifyReportRequest {
  /**
   * 申请者类型 1:个人，2:企业
   */
  ApplyCustomerType: string
  /**
   * 申请企业 or 自然人名称
   */
  ApplyCustomerName: string
  /**
   * 验签申请经办人姓名
   */
  ApplyName: string
  /**
   * 验签申请经办人电话
   */
  ApplyMobile: string
  /**
   * 验签文件id
   */
  FileId: string
  /**
   * 验签申请经办人邮箱
   */
  ApplyEmail?: string
  /**
   * 证书用户身份及身份鉴别信息
   */
  CertificateIdentityUsers?: Array<CertificateIdentityUser>
}

/**
 * 证书用户信息和身份鉴别信息。则该字段无需传入，默认为空。对电子签名者身份鉴别类型及措施有特殊展示要求的可使用该字段。
 */
export interface CertificateIdentityUser {
  /**
   * 姓名
   */
  Name?: string
  /**
   * 唯一身份id
   */
  IdentityUniqueId?: string
  /**
   * 身份证号
   */
  IdCardNumber?: string
  /**
   * 身份鉴别类型
1：授权金融机构身份鉴别
   */
  IdentificationType?: string
  /**
   * 身份鉴别措施
1、身份证鉴别
2、银行卡鉴别
3、支付账户密码验证
4、人脸识别验证
   */
  IdentificationMeasures?: Array<string>
}

/**
 * DescribeVerifyReport请求参数结构体
 */
export interface DescribeVerifyReportRequest {
  /**
   * 签名id
   */
  SignatureId: string
}

/**
 * UploadFile请求参数结构体
 */
export interface UploadFileRequest {
  /**
   * 验签源文件信息列表
   */
  FileInfos: Array<FileInfo>
}

/**
 * CreateVerifyReport返回参数结构体
 */
export interface CreateVerifyReportResponse {
  /**
   * 签名id
   */
  SignatureId?: string
  /**
   * code
   */
  Code?: string
  /**
   * message
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadFile返回参数结构体
 */
export interface UploadFileResponse {
  /**
   * 文件id列表
   */
  FileIds?: Array<string>
  /**
   * 文件id总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVerifyReport返回参数结构体
 */
export interface DescribeVerifyReportResponse {
  /**
   * 下载url
   */
  ReportUrl?: string
  /**
   * code
   */
  Code?: string
  /**
   * message
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件列表信息
 */
export interface FileInfo {
  /**
   * BASE64编码后的文件内容
   */
  FileBody?: string
  /**
   * 文件名及类型，最大长度不超过200字符
   */
  FileName?: string
}
