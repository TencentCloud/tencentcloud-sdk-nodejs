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
 * DescribeDomainInfo返回参数结构体
 */
export interface DescribeDomainInfoResponse {
  /**
   * 是否有数据，0代表有数据，1代表没有数据
   */
  ReturnCode?: number

  /**
   * 判定结果，如：black、white、grey
   */
  Result?: string

  /**
   * 置信度，取值0-100
   */
  Confidence?: number

  /**
      * 威胁类型。
botnet = 僵尸网络
trojan = 木马
ransomware = 勒索软件
worm = 蠕虫
dga = 域名生成算法
c2 = c&c
compromised = 失陷主机
dynamicIP = 动态IP
proxy = 代理
idc = idc 机房
whitelist = 白名单
tor = 暗网
miner = 挖矿
maleware site = 恶意站点
malware IP = 恶意IP
等等
      */
  ThreatTypes?: Array<string>

  /**
   * 恶意标签，对应的团伙，家族等信息。
   */
  Tags?: Array<TagType>

  /**
   * 对应的历史上的威胁情报事件
   */
  Intelligences?: Array<IntelligenceType>

  /**
   * 情报相关的上下文
   */
  Context?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpInfo请求参数结构体
 */
export interface DescribeIpInfoRequest {
  /**
   * 要查询的IP
   */
  Key: string

  /**
   * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
   */
  Option?: number
}

/**
 * DescribeThreatInfo返回参数结构体
 */
export interface DescribeThreatInfoResponse {
  /**
   * 是否有数据，0代表有数据，1代表没有数据
   */
  ReturnCode?: number

  /**
   * 判定结果，如：black、white、grey
   */
  Result?: string

  /**
   * 置信度，取值0-100
   */
  Confidence?: number

  /**
      * 威胁类型。
botnet = 僵尸网络
trojan = 木马
ransomware = 勒索软件
worm = 蠕虫
dga = 域名生成算法
c2 = c&c
compromised = 失陷主机
dynamicIP = 动态IP
proxy = 代理
idc = idc 机房
whitelist = 白名单
tor = 暗网
miner = 挖矿
maleware site = 恶意站点
malware IP = 恶意IP
等等
      */
  ThreatTypes?: Array<string>

  /**
   * 恶意标签，对应的团伙，家族等信息。
   */
  Tags?: Array<string>

  /**
      * 当前状态
active = 活跃
sinkholed = sinkholed
inactive = 不活跃
unknown = 未知
expired = 过期
      */
  Status?: string

  /**
      * 情报相关的上下文，参数option=1 的时候提供
每个数据默认为3 条
      */
  Context?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomainInfo请求参数结构体
 */
export interface DescribeDomainInfoRequest {
  /**
   * 要查询的域名
   */
  Key: string

  /**
   * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
   */
  Option?: number
}

/**
 * { "source": "inergj_ai_predict", "stamp": "msraminer", "time": 1531994023 }
 */
export interface IntelligenceType {
  /**
   * 来源
   */
  Source: string

  /**
   * 标记
   */
  Stamp: string

  /**
   * 时间
   */
  Time: number
}

/**
 * 文件信息类型
 */
export interface FileInfoType {
  /**
   * 判定渠道
   */
  DetectId: string

  /**
   * 检测优先级
   */
  DetectPriority: string

  /**
   * 引擎优先级
   */
  EnginePriority: string

  /**
   * 样本是否存在
   */
  FileExist: string

  /**
   * 文件上传
   */
  FileForceUpload: string

  /**
   * 文件大小
   */
  FileSize: string

  /**
   * 文件上传时间
   */
  FileupTime: string

  /**
   * 病毒文件全名
   */
  FullVirusName: string

  /**
   * IDC位置
   */
  IdcPosition: string

  /**
   * 文件md5值
   */
  Md5Type: string

  /**
   * PE结构是否存在
   */
  PeExist: string

  /**
   * PE结构上传
   */
  PeForceUpload: string

  /**
   * 安全性等级
   */
  SafeLevel: string

  /**
   * 扫描时间
   */
  ScanModiTime: string

  /**
   * 子判定渠道
   */
  SubdetectId: string

  /**
   * 病毒名
   */
  UserDefName: string

  /**
   * 病毒类型
   */
  VirusType: string

  /**
   * 白名单分数
   */
  WhiteScore: string
}

/**
 * 标签及对应的解释
 */
export interface TagType {
  /**
   * 标签
   */
  Tag: string

  /**
   * 标签对应的中文解释
   */
  Desc: string
}

/**
 * DescribeFileInfo返回参数结构体
 */
export interface DescribeFileInfoResponse {
  /**
   * 是否有数据，0代表有数据，1代表没有数据
   */
  ReturnCode?: number

  /**
   * 判定结果，如：black、white、grey
   */
  Result?: string

  /**
   * 置信度，取值0-100
   */
  Confidence?: number

  /**
      * 文件类型，文件hash
（md5,sha1,sha256）,文件大小等等文件
基础信息
      */
  FileInfo?: Array<FileInfoType>

  /**
   * 恶意标签，对应的团伙，家族等信息。
   */
  Tags?: Array<TagType>

  /**
   * 对应的历史上的威胁情报事件
   */
  Intelligences?: Array<IntelligenceType>

  /**
   * 情报相关的上下文
   */
  Context?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeThreatInfo请求参数结构体
 */
export interface DescribeThreatInfoRequest {
  /**
   * 查询对象，域名或IP
   */
  Key: string

  /**
   * 查询类型，当前取值为domain或ip
   */
  Type: string

  /**
   * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
   */
  Option?: number
}

/**
 * DescribeFileInfo请求参数结构体
 */
export interface DescribeFileInfoRequest {
  /**
   * 要查询文件的MD5
   */
  Key: string

  /**
   * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
   */
  Option?: number
}

/**
 * DescribeIpInfo返回参数结构体
 */
export interface DescribeIpInfoResponse {
  /**
   * 是否有数据，0代表有数据，1代表没有数据
   */
  ReturnCode?: number

  /**
   * 判定结果，如：black、white、grey
   */
  Result?: string

  /**
   * 置信度，取值0-100
   */
  Confidence?: number

  /**
      * 威胁类型。
botnet = 僵尸网络
trojan = 木马
ransomware = 勒索软件
worm = 蠕虫
dga = 域名生成算法
c2 = c&c
compromised = 失陷主机
dynamicIP = 动态IP
proxy = 代理
idc = idc 机房
whitelist = 白名单
tor = 暗网
miner = 挖矿
maleware site = 恶意站点
malware IP = 恶意IP
等等
      */
  ThreatTypes?: Array<string>

  /**
   * 恶意标签，对应的团伙，家族等信息。
   */
  Tags?: Array<TagType>

  /**
   * 对应的历史上的威胁情报事件
   */
  Intelligences?: Array<IntelligenceType>

  /**
   * 情报相关的上下文
   */
  Context?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
