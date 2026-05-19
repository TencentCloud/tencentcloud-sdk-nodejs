/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * IP画像出参
 */
export interface ManageIPPortraitRiskOutput {
  /**
   * <p>错误码，0 表示成功，非0表示失败错误码。<br>0：成功<br>1002：参数错误<br>6000：系统内部错误</p>
   */
  Code?: number
  /**
   * <p>返回消息</p>
   */
  Message?: string
  /**
   * <p>结果</p>
   */
  Value?: ManageIPPortraitRiskValueOutput
}

/**
 * 业务入参
 */
export interface ManageIPPortraitRiskInput {
  /**
   * <p>用户公网ip（仅支持IPv4）</p>
   */
  UserIp: string
  /**
   * <p>渠道号<br>1：pc<br>2：H5<br>3：app<br>4：ott</p>
   */
  Channel: number
}

/**
 * ManageIPPortraitRisk返回参数结构体
 */
export interface ManageIPPortraitRiskResponse {
  /**
   * 出参
   */
  Data?: ManageIPPortraitRiskOutput
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ManageIPPortraitRisk请求参数结构体
 */
export interface ManageIPPortraitRiskRequest {
  /**
   * 请求秒级时间戳
   */
  PostTime: number
  /**
   * 业务入参
   */
  BusinessSecurityData?: ManageIPPortraitRiskInput
}

/**
 * 业务出参
 */
export interface ManageIPPortraitRiskValueOutput {
  /**
   * <p>对应的IP</p>
   */
  UserIp?: string
  /**
   * <p>返回风险等级, 0 - 4，0代表无风险，数值越大，风险越高</p>
   */
  RiskScore?: number
  /**
   * <p>风险类型<br>730001：垃圾邮件，当前IP存在未经用户请求或同意，大量发送的广告、欺诈或推广信息，通常通过邮件、短信或社交消息传播。<br>730002：恶意行为，当前IP存在破坏、窃取、干扰或未授权访问为目的的故意行为。<br>730003：恶意工具，当前IP关联用于实施恶意行为的软件或脚本，如病毒、木马、勒索软件、漏洞利用工具等。<br>730004：匿名IP，通过代理、Tor网络等技术手段隐藏真实来源的IP地址，存在逃避定位或实施攻击风险。<br>730005：开放端口，网络上处于开放状态的服务入口，若配置不当或存在漏洞。<br>730006：养号，当前IP存在通过模拟正常操作（如登录、浏览）维护和提升账号的活跃度与可信度行为。<br>730007：IDC，互联网数据中心，可能被黑客利用来托管恶意服务或发动攻击。<br>730008：晒号，当前IP在公开或地下论坛展示、交易非法获取的各类账号（如游戏、社交、金融账号）的行为。<br>730009：盗号，当前IP存在通过钓鱼、撞库、木马等手段，非法获取他人账号的登录凭证（用户名、密码等）行为。<br>730010：代理，作为中间节点转发网络流量，可用于隐藏真实IP、绕过地域限制。<br>730011：扫描，使用工具自动探测目标网络或系统的开放端口、服务、漏洞等。<br>730012：秒拨，当前IP通过不断重新拨号以快速切换IP地址，常被用于绕过基于IP的频率限制或封禁。<br>730013：爬虫，自动抓取网络信息的脚本或程序。<br>730014：VPN 虚拟专用网络。<br>730015：僵尸网络，当前IP由攻击者通过恶意软件控制的、大规模联网设备（如电脑、IoT设备）集群，可能被用于发动DDoS攻击、发送垃圾邮件等。<br>730016：网络攻击，当前IP存在对计算机系统、网络或数据的任何进攻行为。</p>
   */
  RiskType?: Array<number | bigint>
}
