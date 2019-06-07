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
const AbstractModel = require("../../common/abstract_model");

/**
 * DescribeDomainInfo返回参数结构体
 * @class
 */
class DescribeDomainInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否有数据，0代表有数据，1代表没有数据
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 判定结果，如：black、white、grey
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 置信度，取值0-100
         * @type {number || null}
         */
        this.Confidence = null;

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
         * @type {Array.<string> || null}
         */
        this.ThreatTypes = null;

        /**
         * 恶意标签，对应的团伙，家族等信息。
         * @type {Array.<TagType> || null}
         */
        this.Tags = null;

        /**
         * 对应的历史上的威胁情报事件
         * @type {Array.<IntelligenceType> || null}
         */
        this.Intelligences = null;

        /**
         * 情报相关的上下文
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.ThreatTypes = 'ThreatTypes' in params ? params.ThreatTypes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagType();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Intelligences) {
            this.Intelligences = new Array();
            for (let z in params.Intelligences) {
                let obj = new IntelligenceType();
                obj.deserialize(params.Intelligences[z]);
                this.Intelligences.push(obj);
            }
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIpInfo请求参数结构体
 * @class
 */
class DescribeIpInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的IP
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
         * @type {number || null}
         */
        this.Option = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Option = 'Option' in params ? params.Option : null;

    }
}

/**
 * DescribeThreatInfo返回参数结构体
 * @class
 */
class DescribeThreatInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否有数据，0代表有数据，1代表没有数据
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 判定结果，如：black、white、grey
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 置信度，取值0-100
         * @type {number || null}
         */
        this.Confidence = null;

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
         * @type {Array.<string> || null}
         */
        this.ThreatTypes = null;

        /**
         * 恶意标签，对应的团伙，家族等信息。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 当前状态
active = 活跃
sinkholed = sinkholed
inactive = 不活跃
unknown = 未知
expired = 过期
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 情报相关的上下文，参数option=1 的时候提供
每个数据默认为3 条
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.ThreatTypes = 'ThreatTypes' in params ? params.ThreatTypes : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainInfo请求参数结构体
 * @class
 */
class DescribeDomainInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的域名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
         * @type {number || null}
         */
        this.Option = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Option = 'Option' in params ? params.Option : null;

    }
}

/**
 * { "source": "inergj_ai_predict", "stamp": "msraminer", "time": 1531994023 }
 * @class
 */
class IntelligenceType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 标记
         * @type {string || null}
         */
        this.Stamp = null;

        /**
         * 时间
         * @type {number || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Stamp = 'Stamp' in params ? params.Stamp : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * 文件信息类型
 * @class
 */
class FileInfoType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 判定渠道
         * @type {string || null}
         */
        this.DetectId = null;

        /**
         * 检测优先级
         * @type {string || null}
         */
        this.DetectPriority = null;

        /**
         * 引擎优先级
         * @type {string || null}
         */
        this.EnginePriority = null;

        /**
         * 样本是否存在
         * @type {string || null}
         */
        this.FileExist = null;

        /**
         * 文件上传
         * @type {string || null}
         */
        this.FileForceUpload = null;

        /**
         * 文件大小
         * @type {string || null}
         */
        this.FileSize = null;

        /**
         * 文件上传时间
         * @type {string || null}
         */
        this.FileupTime = null;

        /**
         * 病毒文件全名
         * @type {string || null}
         */
        this.FullVirusName = null;

        /**
         * IDC位置
         * @type {string || null}
         */
        this.IdcPosition = null;

        /**
         * 文件md5值
         * @type {string || null}
         */
        this.Md5Type = null;

        /**
         * PE结构是否存在
         * @type {string || null}
         */
        this.PeExist = null;

        /**
         * PE结构上传
         * @type {string || null}
         */
        this.PeForceUpload = null;

        /**
         * 安全性等级
         * @type {string || null}
         */
        this.SafeLevel = null;

        /**
         * 扫描时间
         * @type {string || null}
         */
        this.ScanModiTime = null;

        /**
         * 子判定渠道
         * @type {string || null}
         */
        this.SubdetectId = null;

        /**
         * 病毒名
         * @type {string || null}
         */
        this.UserDefName = null;

        /**
         * 病毒类型
         * @type {string || null}
         */
        this.VirusType = null;

        /**
         * 白名单分数
         * @type {string || null}
         */
        this.WhiteScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DetectId = 'DetectId' in params ? params.DetectId : null;
        this.DetectPriority = 'DetectPriority' in params ? params.DetectPriority : null;
        this.EnginePriority = 'EnginePriority' in params ? params.EnginePriority : null;
        this.FileExist = 'FileExist' in params ? params.FileExist : null;
        this.FileForceUpload = 'FileForceUpload' in params ? params.FileForceUpload : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileupTime = 'FileupTime' in params ? params.FileupTime : null;
        this.FullVirusName = 'FullVirusName' in params ? params.FullVirusName : null;
        this.IdcPosition = 'IdcPosition' in params ? params.IdcPosition : null;
        this.Md5Type = 'Md5Type' in params ? params.Md5Type : null;
        this.PeExist = 'PeExist' in params ? params.PeExist : null;
        this.PeForceUpload = 'PeForceUpload' in params ? params.PeForceUpload : null;
        this.SafeLevel = 'SafeLevel' in params ? params.SafeLevel : null;
        this.ScanModiTime = 'ScanModiTime' in params ? params.ScanModiTime : null;
        this.SubdetectId = 'SubdetectId' in params ? params.SubdetectId : null;
        this.UserDefName = 'UserDefName' in params ? params.UserDefName : null;
        this.VirusType = 'VirusType' in params ? params.VirusType : null;
        this.WhiteScore = 'WhiteScore' in params ? params.WhiteScore : null;

    }
}

/**
 * 标签及对应的解释
 * @class
 */
class TagType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 标签对应的中文解释
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeFileInfo返回参数结构体
 * @class
 */
class DescribeFileInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否有数据，0代表有数据，1代表没有数据
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 判定结果，如：black、white、grey
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 置信度，取值0-100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 文件类型，文件hash
（md5,sha1,sha256）,文件大小等等文件
基础信息
         * @type {Array.<FileInfoType> || null}
         */
        this.FileInfo = null;

        /**
         * 恶意标签，对应的团伙，家族等信息。
         * @type {Array.<TagType> || null}
         */
        this.Tags = null;

        /**
         * 对应的历史上的威胁情报事件
         * @type {Array.<IntelligenceType> || null}
         */
        this.Intelligences = null;

        /**
         * 情报相关的上下文
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

        if (params.FileInfo) {
            this.FileInfo = new Array();
            for (let z in params.FileInfo) {
                let obj = new FileInfoType();
                obj.deserialize(params.FileInfo[z]);
                this.FileInfo.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagType();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Intelligences) {
            this.Intelligences = new Array();
            for (let z in params.Intelligences) {
                let obj = new IntelligenceType();
                obj.deserialize(params.Intelligences[z]);
                this.Intelligences.push(obj);
            }
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeThreatInfo请求参数结构体
 * @class
 */
class DescribeThreatInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询对象，域名或IP
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询类型，当前取值为domain或ip
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
         * @type {number || null}
         */
        this.Option = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Option = 'Option' in params ? params.Option : null;

    }
}

/**
 * DescribeFileInfo请求参数结构体
 * @class
 */
class DescribeFileInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询文件的MD5
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。
         * @type {number || null}
         */
        this.Option = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Option = 'Option' in params ? params.Option : null;

    }
}

/**
 * DescribeIpInfo返回参数结构体
 * @class
 */
class DescribeIpInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否有数据，0代表有数据，1代表没有数据
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 判定结果，如：black、white、grey
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 置信度，取值0-100
         * @type {number || null}
         */
        this.Confidence = null;

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
         * @type {Array.<string> || null}
         */
        this.ThreatTypes = null;

        /**
         * 恶意标签，对应的团伙，家族等信息。
         * @type {Array.<TagType> || null}
         */
        this.Tags = null;

        /**
         * 对应的历史上的威胁情报事件
         * @type {Array.<IntelligenceType> || null}
         */
        this.Intelligences = null;

        /**
         * 情报相关的上下文
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.ThreatTypes = 'ThreatTypes' in params ? params.ThreatTypes : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagType();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Intelligences) {
            this.Intelligences = new Array();
            for (let z in params.Intelligences) {
                let obj = new IntelligenceType();
                obj.deserialize(params.Intelligences[z]);
                this.Intelligences.push(obj);
            }
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeDomainInfoResponse: DescribeDomainInfoResponse,
    DescribeIpInfoRequest: DescribeIpInfoRequest,
    DescribeThreatInfoResponse: DescribeThreatInfoResponse,
    DescribeDomainInfoRequest: DescribeDomainInfoRequest,
    IntelligenceType: IntelligenceType,
    FileInfoType: FileInfoType,
    TagType: TagType,
    DescribeFileInfoResponse: DescribeFileInfoResponse,
    DescribeThreatInfoRequest: DescribeThreatInfoRequest,
    DescribeFileInfoRequest: DescribeFileInfoRequest,
    DescribeIpInfoResponse: DescribeIpInfoResponse,

}
