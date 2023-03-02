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
 * 保护网站信息
 * @class
 */
class ProtectURLInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保护网站ID
         * @type {number || null}
         */
        this.ProtectURLId = null;

        /**
         * 保护网站
         * @type {string || null}
         */
        this.ProtectURL = null;

        /**
         * 保护网站名称
         * @type {string || null}
         */
        this.ProtectWeb = null;

        /**
         * 保护网站审核状态 1-审核中 2-审核不通过 3-审核通过
         * @type {number || null}
         */
        this.ProtectURLStatus = null;

        /**
         * 网站审核不通过原因
         * @type {string || null}
         */
        this.ProtectURLNote = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectURLId = 'ProtectURLId' in params ? params.ProtectURLId : null;
        this.ProtectURL = 'ProtectURL' in params ? params.ProtectURL : null;
        this.ProtectWeb = 'ProtectWeb' in params ? params.ProtectWeb : null;
        this.ProtectURLStatus = 'ProtectURLStatus' in params ? params.ProtectURLStatus : null;
        this.ProtectURLNote = 'ProtectURLNote' in params ? params.ProtectURLNote : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateCRObtain返回参数结构体
 * @class
 */
class CreateCRObtainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * xxx
         * @type {string || null}
         */
        this.TortNum = null;

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
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.TortNum = 'TortNum' in params ? params.TortNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRUserVerify请求参数结构体
 * @class
 */
class CreateCRUserVerifyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户真实姓名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户身份证号
         * @type {string || null}
         */
        this.UserID = null;

        /**
         * 用户手机号码
         * @type {string || null}
         */
        this.UserPhone = null;

        /**
         * 短信验证码，接口接入可以置空
         * @type {string || null}
         */
        this.VerificationCode = null;

        /**
         * 字段已废弃，认证类型
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.UserID = 'UserID' in params ? params.UserID : null;
        this.UserPhone = 'UserPhone' in params ? params.UserPhone : null;
        this.VerificationCode = 'VerificationCode' in params ? params.VerificationCode : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateBPFalseTicket返回参数结构体
 * @class
 */
class CreateBPFalseTicketResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRRightFile请求参数结构体
 * @class
 */
class CreateCRRightFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 权属文件列表
         * @type {Array.<File> || null}
         */
        this.FileList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;

        if (params.FileList) {
            this.FileList = new Array();
            for (let z in params.FileList) {
                let obj = new File();
                obj.deserialize(params.FileList[z]);
                this.FileList.push(obj);
            }
        }

    }
}

/**
 * CreateCRRight返回参数结构体
 * @class
 */
class CreateCRRightResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 该字段已废弃
         * @type {string || null}
         */
        this.TortNum = null;

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
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.TortNum = 'TortNum' in params ? params.TortNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRWork返回参数结构体
 * @class
 */
class CreateCRWorkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID，一个作品对应唯一的workid
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 存证ID，忽略该字段
         * @type {number || null}
         */
        this.EvidenceId = null;

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
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRRight请求参数结构体
 * @class
 */
class CreateCRRightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 侵权链接
         * @type {string || null}
         */
        this.TortUrl = null;

        /**
         * 侵权标题
         * @type {string || null}
         */
        this.TortTitle = null;

        /**
         * 侵权平台
         * @type {string || null}
         */
        this.TortPlat = null;

        /**
         * 发函结果回调地址
         * @type {string || null}
         */
        this.RightUrl = null;

        /**
         * 授权书下载地址
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 授权书生效日期
         * @type {string || null}
         */
        this.ValidStartDate = null;

        /**
         * 授权书截止日期
         * @type {string || null}
         */
        this.ValidEndDate = null;

        /**
         * 委托书下载地址
         * @type {string || null}
         */
        this.CommFileUrl = null;

        /**
         * 委托书生效日期
         * @type {string || null}
         */
        this.CommValidStartDate = null;

        /**
         * 委托书截止日期
         * @type {string || null}
         */
        this.CommValidEndDate = null;

        /**
         * 主页下载地址
         * @type {string || null}
         */
        this.HomeFileUrl = null;

        /**
         * 主页生效日期
         * @type {string || null}
         */
        this.HomeValidStartDate = null;

        /**
         * 主页截止日期
         * @type {string || null}
         */
        this.HomeValidEndDate = null;

        /**
         * 是否著作权人：0-否 1-是
         * @type {string || null}
         */
        this.IsProducer = null;

        /**
         * 存证证书下载地址
         * @type {string || null}
         */
        this.EvidenceFileUrl = null;

        /**
         * 存证证书生效日期
         * @type {string || null}
         */
        this.EvidenceValidStartDate = null;

        /**
         * 存证证书截止日期
         * @type {string || null}
         */
        this.EvidenceValidEndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.TortUrl = 'TortUrl' in params ? params.TortUrl : null;
        this.TortTitle = 'TortTitle' in params ? params.TortTitle : null;
        this.TortPlat = 'TortPlat' in params ? params.TortPlat : null;
        this.RightUrl = 'RightUrl' in params ? params.RightUrl : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.ValidStartDate = 'ValidStartDate' in params ? params.ValidStartDate : null;
        this.ValidEndDate = 'ValidEndDate' in params ? params.ValidEndDate : null;
        this.CommFileUrl = 'CommFileUrl' in params ? params.CommFileUrl : null;
        this.CommValidStartDate = 'CommValidStartDate' in params ? params.CommValidStartDate : null;
        this.CommValidEndDate = 'CommValidEndDate' in params ? params.CommValidEndDate : null;
        this.HomeFileUrl = 'HomeFileUrl' in params ? params.HomeFileUrl : null;
        this.HomeValidStartDate = 'HomeValidStartDate' in params ? params.HomeValidStartDate : null;
        this.HomeValidEndDate = 'HomeValidEndDate' in params ? params.HomeValidEndDate : null;
        this.IsProducer = 'IsProducer' in params ? params.IsProducer : null;
        this.EvidenceFileUrl = 'EvidenceFileUrl' in params ? params.EvidenceFileUrl : null;
        this.EvidenceValidStartDate = 'EvidenceValidStartDate' in params ? params.EvidenceValidStartDate : null;
        this.EvidenceValidEndDate = 'EvidenceValidEndDate' in params ? params.EvidenceValidEndDate : null;

    }
}

/**
 * CreateBPOfflineTicket返回参数结构体
 * @class
 */
class CreateBPOfflineTicketResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRTort请求参数结构体
 * @class
 */
class CreateCRTortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 侵权网址
         * @type {string || null}
         */
        this.TortURL = null;

        /**
         * 侵权平台
         * @type {string || null}
         */
        this.TortPlat = null;

        /**
         * 侵权标题
         * @type {string || null}
         */
        this.TortTitle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.TortURL = 'TortURL' in params ? params.TortURL : null;
        this.TortPlat = 'TortPlat' in params ? params.TortPlat : null;
        this.TortTitle = 'TortTitle' in params ? params.TortTitle : null;

    }
}

/**
 * UpdateCRWork请求参数结构体
 * @class
 */
class UpdateCRWorkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 文件的扩展名，例如txt，docx
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 内容的base64编码
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 本次存证类型：0-不存证 1-存当前文件 2-存历史全量文件
         * @type {string || null}
         */
        this.CertType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.CertType = 'CertType' in params ? params.CertType : null;

    }
}

/**
 * DescribeBPFakeURLs请求参数结构体
 * @class
 */
class DescribeBPFakeURLsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * ModifyCRBlockStatus返回参数结构体
 * @class
 */
class ModifyCRBlockStatusResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 版权保护-监测结果
 * @class
 */
class Monitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 作品名称
         * @type {string || null}
         */
        this.WorkName = null;

        /**
         * 作品内容类型 01-视频 02-音频 03-文本 04-图片
         * @type {string || null}
         */
        this.WorkType = null;

        /**
         * 侵权平台数量
         * @type {number || null}
         */
        this.TortPlatNum = null;

        /**
         * 侵权链接数量
         * @type {number || null}
         */
        this.TortURLNum = null;

        /**
         * 监测时间
         * @type {string || null}
         */
        this.MonitorTime = null;

        /**
         * 0-待监测 1-监测中 2-不监测 3-暂停监测
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * 作品类型
         * @type {string || null}
         */
        this.WorkCategory = null;

        /**
         * 新增时间
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 监测状态说明
         * @type {string || null}
         */
        this.MonitorNote = null;

        /**
         * 作品类型全部展示
         * @type {string || null}
         */
        this.WorkCategoryAll = null;

        /**
         * 存证状态
         * @type {number || null}
         */
        this.EvidenceStatus = null;

        /**
         * 存证状态说明
         * @type {string || null}
         */
        this.EvidenceNote = null;

        /**
         * 侵权站点数量
         * @type {number || null}
         */
        this.TortSiteNum = null;

        /**
         * 监测截止时间
         * @type {string || null}
         */
        this.MonitorEndTime = null;

        /**
         * 是否自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.WorkName = 'WorkName' in params ? params.WorkName : null;
        this.WorkType = 'WorkType' in params ? params.WorkType : null;
        this.TortPlatNum = 'TortPlatNum' in params ? params.TortPlatNum : null;
        this.TortURLNum = 'TortURLNum' in params ? params.TortURLNum : null;
        this.MonitorTime = 'MonitorTime' in params ? params.MonitorTime : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.WorkCategory = 'WorkCategory' in params ? params.WorkCategory : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.MonitorNote = 'MonitorNote' in params ? params.MonitorNote : null;
        this.WorkCategoryAll = 'WorkCategoryAll' in params ? params.WorkCategoryAll : null;
        this.EvidenceStatus = 'EvidenceStatus' in params ? params.EvidenceStatus : null;
        this.EvidenceNote = 'EvidenceNote' in params ? params.EvidenceNote : null;
        this.TortSiteNum = 'TortSiteNum' in params ? params.TortSiteNum : null;
        this.MonitorEndTime = 'MonitorEndTime' in params ? params.MonitorEndTime : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * ModifyCRObtainStatus请求参数结构体
 * @class
 */
class ModifyCRObtainStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 取证类型：1-网页取证 2-过程取证(暂不提供)
         * @type {number || null}
         */
        this.ObtainType = null;

        /**
         * 过程取证的取证时长，单位分钟，范围0-120
         * @type {number || null}
         */
        this.ObtainDuration = null;

        /**
         * 取证结果回调地址
         * @type {string || null}
         */
        this.ObtainUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.ObtainType = 'ObtainType' in params ? params.ObtainType : null;
        this.ObtainDuration = 'ObtainDuration' in params ? params.ObtainDuration : null;
        this.ObtainUrl = 'ObtainUrl' in params ? params.ObtainUrl : null;

    }
}

/**
 * 举报网址信息
 * @class
 */
class ReportFakeURLInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒网址ID
         * @type {number || null}
         */
        this.FakeURLId = null;

        /**
         * 检测时间
         * @type {string || null}
         */
        this.DetectTime = null;

        /**
         * 保护网站
         * @type {string || null}
         */
        this.ProtectURL = null;

        /**
         * 保护网站名称
         * @type {string || null}
         */
        this.ProtectWeb = null;

        /**
         * 仿冒网址
         * @type {string || null}
         */
        this.FakeURL = null;

        /**
         * 截图
         * @type {string || null}
         */
        this.Snapshot = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.IP = null;

        /**
         * IP地理位置
         * @type {string || null}
         */
        this.IPLoc = null;

        /**
         * 热度
         * @type {number || null}
         */
        this.Heat = null;

        /**
         * 网站状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 网站不处理原因
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 仿冒网站的企业名称
         * @type {string || null}
         */
        this.FakeURLCompany = null;

        /**
         * 仿冒网站的网站性质
         * @type {string || null}
         */
        this.FakeURLAttr = null;

        /**
         * 仿冒网站的网站名称
         * @type {string || null}
         */
        this.FakeURLName = null;

        /**
         * 仿冒网站的备案
         * @type {string || null}
         */
        this.FakeURLICP = null;

        /**
         * 仿冒网站创建时间
         * @type {string || null}
         */
        this.FakeURLCreateTime = null;

        /**
         * 仿冒网站过期时间
         * @type {string || null}
         */
        this.FakeURLExpireTime = null;

        /**
         * 协查处置时间
         * @type {string || null}
         */
        this.BlockTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeURLId = 'FakeURLId' in params ? params.FakeURLId : null;
        this.DetectTime = 'DetectTime' in params ? params.DetectTime : null;
        this.ProtectURL = 'ProtectURL' in params ? params.ProtectURL : null;
        this.ProtectWeb = 'ProtectWeb' in params ? params.ProtectWeb : null;
        this.FakeURL = 'FakeURL' in params ? params.FakeURL : null;
        this.Snapshot = 'Snapshot' in params ? params.Snapshot : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.IPLoc = 'IPLoc' in params ? params.IPLoc : null;
        this.Heat = 'Heat' in params ? params.Heat : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.FakeURLCompany = 'FakeURLCompany' in params ? params.FakeURLCompany : null;
        this.FakeURLAttr = 'FakeURLAttr' in params ? params.FakeURLAttr : null;
        this.FakeURLName = 'FakeURLName' in params ? params.FakeURLName : null;
        this.FakeURLICP = 'FakeURLICP' in params ? params.FakeURLICP : null;
        this.FakeURLCreateTime = 'FakeURLCreateTime' in params ? params.FakeURLCreateTime : null;
        this.FakeURLExpireTime = 'FakeURLExpireTime' in params ? params.FakeURLExpireTime : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;

    }
}

/**
 * DescribeCRWorkInfo请求参数结构体
 * @class
 */
class DescribeCRWorkInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;

    }
}

/**
 * ModifyBPOfflineAttachment请求参数结构体
 * @class
 */
class ModifyBPOfflineAttachmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 营业执照
         * @type {string || null}
         */
        this.LicenseName = null;

        /**
         * 授权书
         * @type {string || null}
         */
        this.AuthorizationName = null;

        /**
         * 商标名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 商标证明
         * @type {string || null}
         */
        this.BrandCertificateName = null;

        /**
         * 商标转让证明
         * @type {string || null}
         */
        this.TransferName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseName = 'LicenseName' in params ? params.LicenseName : null;
        this.AuthorizationName = 'AuthorizationName' in params ? params.AuthorizationName : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.BrandCertificateName = 'BrandCertificateName' in params ? params.BrandCertificateName : null;
        this.TransferName = 'TransferName' in params ? params.TransferName : null;

    }
}

/**
 * DescribeBPFakeURLs返回参数结构体
 * @class
 */
class DescribeBPFakeURLsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒网址列表
         * @type {Array.<FakeURLInfo> || null}
         */
        this.FakeURLInfos = null;

        /**
         * 总量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 导出量
         * @type {string || null}
         */
        this.ExportURL = null;

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

        if (params.FakeURLInfos) {
            this.FakeURLInfos = new Array();
            for (let z in params.FakeURLInfos) {
                let obj = new FakeURLInfo();
                obj.deserialize(params.FakeURLInfos[z]);
                this.FakeURLInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ExportURL = 'ExportURL' in params ? params.ExportURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBPOfflineAttachment返回参数结构体
 * @class
 */
class CreateBPOfflineAttachmentResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBPReportFakeURLs请求参数结构体
 * @class
 */
class DescribeBPReportFakeURLsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * DescribeCRMonitorDetail返回参数结构体
 * @class
 */
class DescribeCRMonitorDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权数组
         * @type {Array.<MonitorTort> || null}
         */
        this.Torts = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 监测状态
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * 导出地址
         * @type {string || null}
         */
        this.ExportURL = null;

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

        if (params.Torts) {
            this.Torts = new Array();
            for (let z in params.Torts) {
                let obj = new MonitorTort();
                obj.deserialize(params.Torts[z]);
                this.Torts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.ExportURL = 'ExportURL' in params ? params.ExportURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监测侵权信息详情
 * @class
 */
class MonitorTort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权信息ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 侵权标题
         * @type {string || null}
         */
        this.TortTitle = null;

        /**
         * 侵权平台
         * @type {string || null}
         */
        this.TortPlat = null;

        /**
         * 侵权链接
         * @type {string || null}
         */
        this.TortURL = null;

        /**
         * 侵权链接发布时间
         * @type {string || null}
         */
        this.PubTime = null;

        /**
         * 作者
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 发现时间
         * @type {string || null}
         */
        this.DetectTime = null;

        /**
         * 取证状态
         * @type {number || null}
         */
        this.ObtainStatus = null;

        /**
         * 维权状态
         * @type {number || null}
         */
        this.RightStatus = null;

        /**
         * 拦截状态
         * @type {number || null}
         */
        this.BlockStatus = null;

        /**
         * 侵权编号
         * @type {string || null}
         */
        this.TortNum = null;

        /**
         * 取证状态说明
         * @type {string || null}
         */
        this.ObtainNote = null;

        /**
         * 作品标题
         * @type {string || null}
         */
        this.WorkTitle = null;

        /**
         * 侵权站点
         * @type {string || null}
         */
        this.TortSite = null;

        /**
         * ICP备案信息
         * @type {string || null}
         */
        this.ICP = null;

        /**
         * 维权状态说明
         * @type {string || null}
         */
        this.RightNote = null;

        /**
         * 取证类型
         * @type {number || null}
         */
        this.ObtainType = null;

        /**
         * 拦截状态说明
         * @type {string || null}
         */
        this.BlockNote = null;

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 作品名称
         * @type {string || null}
         */
        this.WorkName = null;

        /**
         * 授权书状态
         * @type {number || null}
         */
        this.AuthStatus = null;

        /**
         * 委托书状态
         * @type {number || null}
         */
        this.CommStatus = null;

        /**
         * 存证证书状态
         * @type {number || null}
         */
        this.EvidenceStatus = null;

        /**
         * 是否著作权人
         * @type {number || null}
         */
        this.IsProducer = null;

        /**
         * 是否境外网址
         * @type {number || null}
         */
        this.IsOverseas = null;

        /**
         * ip地理位置
         * @type {string || null}
         */
        this.IPLoc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.TortTitle = 'TortTitle' in params ? params.TortTitle : null;
        this.TortPlat = 'TortPlat' in params ? params.TortPlat : null;
        this.TortURL = 'TortURL' in params ? params.TortURL : null;
        this.PubTime = 'PubTime' in params ? params.PubTime : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.DetectTime = 'DetectTime' in params ? params.DetectTime : null;
        this.ObtainStatus = 'ObtainStatus' in params ? params.ObtainStatus : null;
        this.RightStatus = 'RightStatus' in params ? params.RightStatus : null;
        this.BlockStatus = 'BlockStatus' in params ? params.BlockStatus : null;
        this.TortNum = 'TortNum' in params ? params.TortNum : null;
        this.ObtainNote = 'ObtainNote' in params ? params.ObtainNote : null;
        this.WorkTitle = 'WorkTitle' in params ? params.WorkTitle : null;
        this.TortSite = 'TortSite' in params ? params.TortSite : null;
        this.ICP = 'ICP' in params ? params.ICP : null;
        this.RightNote = 'RightNote' in params ? params.RightNote : null;
        this.ObtainType = 'ObtainType' in params ? params.ObtainType : null;
        this.BlockNote = 'BlockNote' in params ? params.BlockNote : null;
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.WorkName = 'WorkName' in params ? params.WorkName : null;
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;
        this.CommStatus = 'CommStatus' in params ? params.CommStatus : null;
        this.EvidenceStatus = 'EvidenceStatus' in params ? params.EvidenceStatus : null;
        this.IsProducer = 'IsProducer' in params ? params.IsProducer : null;
        this.IsOverseas = 'IsOverseas' in params ? params.IsOverseas : null;
        this.IPLoc = 'IPLoc' in params ? params.IPLoc : null;

    }
}

/**
 * CreateBPFakeURL请求参数结构体
 * @class
 */
class CreateBPFakeURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保护网址ID
         * @type {number || null}
         */
        this.ProtectURLId = null;

        /**
         * 仿冒网址
         * @type {string || null}
         */
        this.FakeURL = null;

        /**
         * 截图
         * @type {Array.<string> || null}
         */
        this.SnapshotNames = null;

        /**
         * 举报说明
         * @type {string || null}
         */
        this.Note = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectURLId = 'ProtectURLId' in params ? params.ProtectURLId : null;
        this.FakeURL = 'FakeURL' in params ? params.FakeURL : null;
        this.SnapshotNames = 'SnapshotNames' in params ? params.SnapshotNames : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * UpdateCRWork返回参数结构体
 * @class
 */
class UpdateCRWorkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 存证ID
         * @type {number || null}
         */
        this.EvidenceId = null;

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
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.EvidenceId = 'EvidenceId' in params ? params.EvidenceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBPProtectURLs返回参数结构体
 * @class
 */
class CreateBPProtectURLsResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBPProtectURLs返回参数结构体
 * @class
 */
class DescribeBPProtectURLsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保护网址列表
         * @type {Array.<ProtectURLInfo> || null}
         */
        this.ProtectURLInfos = null;

        /**
         * 总量
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ProtectURLInfos) {
            this.ProtectURLInfos = new Array();
            for (let z in params.ProtectURLInfos) {
                let obj = new ProtectURLInfo();
                obj.deserialize(params.ProtectURLInfos[z]);
                this.ProtectURLInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCRMonitors返回参数结构体
 * @class
 */
class DescribeCRMonitorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监测结果
         * @type {Array.<Monitor> || null}
         */
        this.Monitors = null;

        /**
         * 记录总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 导出地址
         * @type {string || null}
         */
        this.ExportURL = null;

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

        if (params.Monitors) {
            this.Monitors = new Array();
            for (let z in params.Monitors) {
                let obj = new Monitor();
                obj.deserialize(params.Monitors[z]);
                this.Monitors.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ExportURL = 'ExportURL' in params ? params.ExportURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRCompanyVerify返回参数结构体
 * @class
 */
class CreateCRCompanyVerifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证状态：0-认证成功 1-认证失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 认证状态说明，包括认证失败的原因
         * @type {string || null}
         */
        this.Note = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBPOfflineAttachment请求参数结构体
 * @class
 */
class CreateBPOfflineAttachmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌名字
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 商标证明
         * @type {string || null}
         */
        this.BrandCertificateName = null;

        /**
         * 商标转让证明
         * @type {string || null}
         */
        this.TransferName = null;

        /**
         * 授权书
         * @type {string || null}
         */
        this.AuthorizationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.BrandCertificateName = 'BrandCertificateName' in params ? params.BrandCertificateName : null;
        this.TransferName = 'TransferName' in params ? params.TransferName : null;
        this.AuthorizationName = 'AuthorizationName' in params ? params.AuthorizationName : null;

    }
}

/**
 * CreateCRDesktopCode返回参数结构体
 * @class
 */
class CreateCRDesktopCodeResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBPProtectURLs请求参数结构体
 * @class
 */
class CreateBPProtectURLsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 营业执照
         * @type {string || null}
         */
        this.LicenseName = null;

        /**
         * 保护网站
         * @type {Array.<string> || null}
         */
        this.ProtectURLs = null;

        /**
         * 网站名称
         * @type {Array.<string> || null}
         */
        this.ProtectWebs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.LicenseName = 'LicenseName' in params ? params.LicenseName : null;
        this.ProtectURLs = 'ProtectURLs' in params ? params.ProtectURLs : null;
        this.ProtectWebs = 'ProtectWebs' in params ? params.ProtectWebs : null;

    }
}

/**
 * CreateCRObtain请求参数结构体
 * @class
 */
class CreateCRObtainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已存证的作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 侵权链接
         * @type {string || null}
         */
        this.TortUrl = null;

        /**
         * 取证类型 1-网页取证 2-过程取证
         * @type {number || null}
         */
        this.ObtainType = null;

        /**
         * 侵权标题
         * @type {string || null}
         */
        this.WorkTitle = null;

        /**
         * 侵权平台
         * @type {string || null}
         */
        this.TortPlat = null;

        /**
         * 过程取证的取证时长 6-300分钟
         * @type {number || null}
         */
        this.ObtainDuration = null;

        /**
         * 取证回调地址
         * @type {string || null}
         */
        this.ObtainUrl = null;

        /**
         * xxx
         * @type {string || null}
         */
        this.WorkCategory = null;

        /**
         * xxx
         * @type {string || null}
         */
        this.WorkType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.TortUrl = 'TortUrl' in params ? params.TortUrl : null;
        this.ObtainType = 'ObtainType' in params ? params.ObtainType : null;
        this.WorkTitle = 'WorkTitle' in params ? params.WorkTitle : null;
        this.TortPlat = 'TortPlat' in params ? params.TortPlat : null;
        this.ObtainDuration = 'ObtainDuration' in params ? params.ObtainDuration : null;
        this.ObtainUrl = 'ObtainUrl' in params ? params.ObtainUrl : null;
        this.WorkCategory = 'WorkCategory' in params ? params.WorkCategory : null;
        this.WorkType = 'WorkType' in params ? params.WorkType : null;

    }
}

/**
 * ModifyCRBlockStatus请求参数结构体
 * @class
 */
class ModifyCRBlockStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 拦截结果回调地址
         * @type {string || null}
         */
        this.BlockUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.BlockUrl = 'BlockUrl' in params ? params.BlockUrl : null;

    }
}

/**
 * ModifyCRMonitor请求参数结构体
 * @class
 */
class ModifyCRMonitorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 监测状态：1-开启监测 2-关闭监测
         * @type {string || null}
         */
        this.MonitorStatus = null;

        /**
         * 监测截止时间
         * @type {string || null}
         */
        this.MonitorEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.MonitorEnd = 'MonitorEnd' in params ? params.MonitorEnd : null;

    }
}

/**
 * CreateCRDesktopCode请求参数结构体
 * @class
 */
class CreateCRDesktopCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * xxx
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * xxx
         * @type {string || null}
         */
        this.DesktopCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.DesktopCode = 'DesktopCode' in params ? params.DesktopCode : null;

    }
}

/**
 * CreateCRWork请求参数结构体
 * @class
 */
class CreateCRWorkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品名称
         * @type {string || null}
         */
        this.WorkName = null;

        /**
         * 作品分类
         * @type {string || null}
         */
        this.WorkCategory = null;

        /**
         * 作品内容类型
         * @type {string || null}
         */
        this.WorkType = null;

        /**
         * 作品标签
         * @type {string || null}
         */
        this.WorkSign = null;

        /**
         * 字段已废弃，作品图片
         * @type {string || null}
         */
        this.WorkPic = null;

        /**
         * 作品描述
         * @type {string || null}
         */
        this.WorkDesc = null;

        /**
         * 是否原创：0-否 1-是
         * @type {string || null}
         */
        this.IsOriginal = null;

        /**
         * 是否发布：0-未发布 1-已发布
         * @type {string || null}
         */
        this.IsRelease = null;

        /**
         * 字段已废弃，著作权人ID
         * @type {number || null}
         */
        this.ProducerID = null;

        /**
         * 创作时间
         * @type {string || null}
         */
        this.ProduceTime = null;

        /**
         * 字段已废弃
         * @type {string || null}
         */
        this.SampleContentURL = null;

        /**
         * 作品下载地址
         * @type {string || null}
         */
        this.SampleDownloadURL = null;

        /**
         * 作品在线地址
         * @type {string || null}
         */
        this.SamplePublicURL = null;

        /**
         * 字段已废弃，授予类型
         * @type {string || null}
         */
        this.GrantType = null;

        /**
         * 是否监测：0-不监测 1-监测
         * @type {string || null}
         */
        this.IsMonitor = null;

        /**
         * 是否存证：0-不存证  2-存证 注意是2
         * @type {string || null}
         */
        this.IsCert = null;

        /**
         * 存证回调地址
         * @type {string || null}
         */
        this.CertUrl = null;

        /**
         * 监测回调地址
         * @type {string || null}
         */
        this.MonitorUrl = null;

        /**
         * 字段已废弃，创作性质
         * @type {string || null}
         */
        this.ProduceType = null;

        /**
         * 白名单列表
         * @type {Array.<string> || null}
         */
        this.WhiteLists = null;

        /**
         * 作品ID，忽略该字段
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 著作权人姓名
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * 作者，小说类型必填
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 授权书下载地址
         * @type {string || null}
         */
        this.Authorization = null;

        /**
         * 授权书开始时间
         * @type {string || null}
         */
        this.AuthorizationStartTime = null;

        /**
         * 授权书结束时间
         * @type {string || null}
         */
        this.AuthorizationEndTime = null;

        /**
         * 内容格式，支持txt、doc等，表示Content的具体格式
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 文件内容base64编码，该字段仅在无法提供下载链接时使用
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 监测结束时间
         * @type {string || null}
         */
        this.MonitorEndTime = null;

        /**
         * 申请人ID，用于存证和取证
         * @type {string || null}
         */
        this.ApplierId = null;

        /**
         * 申请人姓名，用于存证和取证
         * @type {string || null}
         */
        this.ApplierName = null;

        /**
         * 是否自动续期
         * @type {string || null}
         */
        this.IsAutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkName = 'WorkName' in params ? params.WorkName : null;
        this.WorkCategory = 'WorkCategory' in params ? params.WorkCategory : null;
        this.WorkType = 'WorkType' in params ? params.WorkType : null;
        this.WorkSign = 'WorkSign' in params ? params.WorkSign : null;
        this.WorkPic = 'WorkPic' in params ? params.WorkPic : null;
        this.WorkDesc = 'WorkDesc' in params ? params.WorkDesc : null;
        this.IsOriginal = 'IsOriginal' in params ? params.IsOriginal : null;
        this.IsRelease = 'IsRelease' in params ? params.IsRelease : null;
        this.ProducerID = 'ProducerID' in params ? params.ProducerID : null;
        this.ProduceTime = 'ProduceTime' in params ? params.ProduceTime : null;
        this.SampleContentURL = 'SampleContentURL' in params ? params.SampleContentURL : null;
        this.SampleDownloadURL = 'SampleDownloadURL' in params ? params.SampleDownloadURL : null;
        this.SamplePublicURL = 'SamplePublicURL' in params ? params.SamplePublicURL : null;
        this.GrantType = 'GrantType' in params ? params.GrantType : null;
        this.IsMonitor = 'IsMonitor' in params ? params.IsMonitor : null;
        this.IsCert = 'IsCert' in params ? params.IsCert : null;
        this.CertUrl = 'CertUrl' in params ? params.CertUrl : null;
        this.MonitorUrl = 'MonitorUrl' in params ? params.MonitorUrl : null;
        this.ProduceType = 'ProduceType' in params ? params.ProduceType : null;
        this.WhiteLists = 'WhiteLists' in params ? params.WhiteLists : null;
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Authorization = 'Authorization' in params ? params.Authorization : null;
        this.AuthorizationStartTime = 'AuthorizationStartTime' in params ? params.AuthorizationStartTime : null;
        this.AuthorizationEndTime = 'AuthorizationEndTime' in params ? params.AuthorizationEndTime : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.MonitorEndTime = 'MonitorEndTime' in params ? params.MonitorEndTime : null;
        this.ApplierId = 'ApplierId' in params ? params.ApplierId : null;
        this.ApplierName = 'ApplierName' in params ? params.ApplierName : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;

    }
}

/**
 * DescribeBPCompanyInfo请求参数结构体
 * @class
 */
class DescribeBPCompanyInfoRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeCRObtainDetail请求参数结构体
 * @class
 */
class DescribeCRObtainDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TortId = 'TortId' in params ? params.TortId : null;

    }
}

/**
 * DescribeBPReportFakeURLs返回参数结构体
 * @class
 */
class DescribeBPReportFakeURLsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 举报网站列表
         * @type {Array.<ReportFakeURLInfo> || null}
         */
        this.ReportFakeURLInfos = null;

        /**
         * 总量
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ReportFakeURLInfos) {
            this.ReportFakeURLInfos = new Array();
            for (let z in params.ReportFakeURLInfos) {
                let obj = new ReportFakeURLInfo();
                obj.deserialize(params.ReportFakeURLInfos[z]);
                this.ReportFakeURLInfos.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCRMonitorDetail请求参数结构体
 * @class
 */
class DescribeCRMonitorDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 过滤参数
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * CreateCRBlock返回参数结构体
 * @class
 */
class CreateCRBlockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 该字段已废弃
         * @type {string || null}
         */
        this.TortNum = null;

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
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.TortNum = 'TortNum' in params ? params.TortNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCRRightStatus请求参数结构体
 * @class
 */
class ModifyCRRightStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 发函结果回调地址
         * @type {string || null}
         */
        this.RightUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.RightUrl = 'RightUrl' in params ? params.RightUrl : null;

    }
}

/**
 * DescribeCRMonitors请求参数结构体
 * @class
 */
class DescribeCRMonitorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * DescribeCRWorkInfo返回参数结构体
 * @class
 */
class DescribeCRWorkInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品名称
         * @type {string || null}
         */
        this.WorkName = null;

        /**
         * 监测状态
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * 授权文件状态
         * @type {number || null}
         */
        this.AuthStatus = null;

        /**
         * 委托书状态
         * @type {number || null}
         */
        this.CommStatus = null;

        /**
         * 是否著作权人
         * @type {number || null}
         */
        this.IsProducer = null;

        /**
         * 存证证书状态
         * @type {number || null}
         */
        this.EvidenceStatus = null;

        /**
         * 作品类型
         * @type {string || null}
         */
        this.WorkCategory = null;

        /**
         * 是否原创
         * @type {string || null}
         */
        this.IsOriginal = null;

        /**
         * 是否已发表
         * @type {string || null}
         */
        this.IsRelease = null;

        /**
         * 著作权人姓名
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * 发表时间
         * @type {string || null}
         */
        this.ProduceTime = null;

        /**
         * 白名单
         * @type {Array.<string> || null}
         */
        this.WhiteLists = null;

        /**
         * 作品描述
         * @type {string || null}
         */
        this.WorkDesc = null;

        /**
         * 授权书
         * @type {string || null}
         */
        this.Authorization = null;

        /**
         * 授权书生效日期
         * @type {string || null}
         */
        this.AuthorizationStartTime = null;

        /**
         * 授权书截止日期
         * @type {string || null}
         */
        this.AuthorizationEndTime = null;

        /**
         * 委托书
         * @type {string || null}
         */
        this.Commission = null;

        /**
         * 委托书生效日期
         * @type {string || null}
         */
        this.CommissionStartTime = null;

        /**
         * 委托书截止日期
         * @type {string || null}
         */
        this.CommissionEndTime = null;

        /**
         * 存证证书
         * @type {string || null}
         */
        this.EvidenceUrl = null;

        /**
         * 存证证书生效日期
         * @type {string || null}
         */
        this.EvidenceStartTime = null;

        /**
         * 存证证书截止日期
         * @type {string || null}
         */
        this.EvidenceEndTime = null;

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
        this.WorkName = 'WorkName' in params ? params.WorkName : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;
        this.CommStatus = 'CommStatus' in params ? params.CommStatus : null;
        this.IsProducer = 'IsProducer' in params ? params.IsProducer : null;
        this.EvidenceStatus = 'EvidenceStatus' in params ? params.EvidenceStatus : null;
        this.WorkCategory = 'WorkCategory' in params ? params.WorkCategory : null;
        this.IsOriginal = 'IsOriginal' in params ? params.IsOriginal : null;
        this.IsRelease = 'IsRelease' in params ? params.IsRelease : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.ProduceTime = 'ProduceTime' in params ? params.ProduceTime : null;
        this.WhiteLists = 'WhiteLists' in params ? params.WhiteLists : null;
        this.WorkDesc = 'WorkDesc' in params ? params.WorkDesc : null;
        this.Authorization = 'Authorization' in params ? params.Authorization : null;
        this.AuthorizationStartTime = 'AuthorizationStartTime' in params ? params.AuthorizationStartTime : null;
        this.AuthorizationEndTime = 'AuthorizationEndTime' in params ? params.AuthorizationEndTime : null;
        this.Commission = 'Commission' in params ? params.Commission : null;
        this.CommissionStartTime = 'CommissionStartTime' in params ? params.CommissionStartTime : null;
        this.CommissionEndTime = 'CommissionEndTime' in params ? params.CommissionEndTime : null;
        this.EvidenceUrl = 'EvidenceUrl' in params ? params.EvidenceUrl : null;
        this.EvidenceStartTime = 'EvidenceStartTime' in params ? params.EvidenceStartTime : null;
        this.EvidenceEndTime = 'EvidenceEndTime' in params ? params.EvidenceEndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCRObtainDetail返回参数结构体
 * @class
 */
class DescribeCRObtainDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品名称
         * @type {string || null}
         */
        this.WorkName = null;

        /**
         * 侵权链接
         * @type {string || null}
         */
        this.TortURL = null;

        /**
         * 取证时间
         * @type {string || null}
         */
        this.ObtainTime = null;

        /**
         * 取证类型
         * @type {string || null}
         */
        this.ObtainType = null;

        /**
         * 取证号
         * @type {string || null}
         */
        this.ObtainNum = null;

        /**
         * 证据地址
         * @type {string || null}
         */
        this.DepositFile = null;

        /**
         * 公证信息地址
         * @type {string || null}
         */
        this.DepositCert = null;

        /**
         * 内容类型
         * @type {string || null}
         */
        this.WorkType = null;

        /**
         * 作品类型
         * @type {string || null}
         */
        this.WorkCategory = null;

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 侵权编号
         * @type {string || null}
         */
        this.TortNum = null;

        /**
         * 取证状态
         * @type {number || null}
         */
        this.ObtainStatus = null;

        /**
         * 取证状态说明
         * @type {string || null}
         */
        this.ObtainNote = null;

        /**
         * 取证时长
         * @type {string || null}
         */
        this.ObtainDuration = null;

        /**
         * 取证名称
         * @type {string || null}
         */
        this.ObtainName = null;

        /**
         * 取证公证信息
         * @type {string || null}
         */
        this.DepositPdfCert = null;

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
        this.WorkName = 'WorkName' in params ? params.WorkName : null;
        this.TortURL = 'TortURL' in params ? params.TortURL : null;
        this.ObtainTime = 'ObtainTime' in params ? params.ObtainTime : null;
        this.ObtainType = 'ObtainType' in params ? params.ObtainType : null;
        this.ObtainNum = 'ObtainNum' in params ? params.ObtainNum : null;
        this.DepositFile = 'DepositFile' in params ? params.DepositFile : null;
        this.DepositCert = 'DepositCert' in params ? params.DepositCert : null;
        this.WorkType = 'WorkType' in params ? params.WorkType : null;
        this.WorkCategory = 'WorkCategory' in params ? params.WorkCategory : null;
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.TortNum = 'TortNum' in params ? params.TortNum : null;
        this.ObtainStatus = 'ObtainStatus' in params ? params.ObtainStatus : null;
        this.ObtainNote = 'ObtainNote' in params ? params.ObtainNote : null;
        this.ObtainDuration = 'ObtainDuration' in params ? params.ObtainDuration : null;
        this.ObtainName = 'ObtainName' in params ? params.ObtainName : null;
        this.DepositPdfCert = 'DepositPdfCert' in params ? params.DepositPdfCert : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRRightFile返回参数结构体
 * @class
 */
class CreateCRRightFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权属文件Id，按提交顺序排序
         * @type {Array.<number> || null}
         */
        this.FileIds = null;

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
        this.FileIds = 'FileIds' in params ? params.FileIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCRWhiteList返回参数结构体
 * @class
 */
class ModifyCRWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 仿冒网站信息
 * @class
 */
class FakeURLInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒网址ID
         * @type {number || null}
         */
        this.FakeURLId = null;

        /**
         * 保护网站
         * @type {string || null}
         */
        this.ProtectWeb = null;

        /**
         * 检测时间
         * @type {string || null}
         */
        this.DetectTime = null;

        /**
         * 仿冒网址
         * @type {string || null}
         */
        this.FakeURL = null;

        /**
         * 截图
         * @type {string || null}
         */
        this.Snapshot = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.IP = null;

        /**
         * IP地理位置
         * @type {string || null}
         */
        this.IPLoc = null;

        /**
         * 热度
         * @type {number || null}
         */
        this.Heat = null;

        /**
         * 网址状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 仿冒网站所属单位
         * @type {string || null}
         */
        this.FakeURLCompany = null;

        /**
         * 仿冒网站性质
         * @type {string || null}
         */
        this.FakeURLAttr = null;

        /**
         * 仿冒网站名称
         * @type {string || null}
         */
        this.FakeURLName = null;

        /**
         * 仿冒网站备案号
         * @type {string || null}
         */
        this.FakeURLICP = null;

        /**
         * 仿冒网站创建时间
         * @type {string || null}
         */
        this.FakeURLCreateTime = null;

        /**
         * 仿冒网站过期时间
         * @type {string || null}
         */
        this.FakeURLExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeURLId = 'FakeURLId' in params ? params.FakeURLId : null;
        this.ProtectWeb = 'ProtectWeb' in params ? params.ProtectWeb : null;
        this.DetectTime = 'DetectTime' in params ? params.DetectTime : null;
        this.FakeURL = 'FakeURL' in params ? params.FakeURL : null;
        this.Snapshot = 'Snapshot' in params ? params.Snapshot : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.IPLoc = 'IPLoc' in params ? params.IPLoc : null;
        this.Heat = 'Heat' in params ? params.Heat : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.FakeURLCompany = 'FakeURLCompany' in params ? params.FakeURLCompany : null;
        this.FakeURLAttr = 'FakeURLAttr' in params ? params.FakeURLAttr : null;
        this.FakeURLName = 'FakeURLName' in params ? params.FakeURLName : null;
        this.FakeURLICP = 'FakeURLICP' in params ? params.FakeURLICP : null;
        this.FakeURLCreateTime = 'FakeURLCreateTime' in params ? params.FakeURLCreateTime : null;
        this.FakeURLExpireTime = 'FakeURLExpireTime' in params ? params.FakeURLExpireTime : null;

    }
}

/**
 * CreateBPOfflineTicket请求参数结构体
 * @class
 */
class CreateBPOfflineTicketRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒网址ID
         * @type {number || null}
         */
        this.FakeURLId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeURLId = 'FakeURLId' in params ? params.FakeURLId : null;

    }
}

/**
 * CreateCRUserVerify返回参数结构体
 * @class
 */
class CreateCRUserVerifyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证状态：0-认证成功 1-认证失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 认证状态说明，包括认证失败原因等
         * @type {string || null}
         */
        this.Note = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 商标信息
 * @class
 */
class BrandData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商标名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 商标证明
         * @type {string || null}
         */
        this.BrandCertificateName = null;

        /**
         * 商标审核状态 1-审核中 2-审核未通过 3-审核通过
         * @type {number || null}
         */
        this.BrandStatus = null;

        /**
         * 审核说明
         * @type {string || null}
         */
        this.BrandNote = null;

        /**
         * 商标转让证明
         * @type {string || null}
         */
        this.TransferName = null;

        /**
         * 商标转让证明审核状态
         * @type {number || null}
         */
        this.TransferStatus = null;

        /**
         * 审核说明 1-审核中 2-审核未通过 3-审核通过
         * @type {string || null}
         */
        this.TransferNote = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.BrandCertificateName = 'BrandCertificateName' in params ? params.BrandCertificateName : null;
        this.BrandStatus = 'BrandStatus' in params ? params.BrandStatus : null;
        this.BrandNote = 'BrandNote' in params ? params.BrandNote : null;
        this.TransferName = 'TransferName' in params ? params.TransferName : null;
        this.TransferStatus = 'TransferStatus' in params ? params.TransferStatus : null;
        this.TransferNote = 'TransferNote' in params ? params.TransferNote : null;

    }
}

/**
 * ModifyCRRightStatus返回参数结构体
 * @class
 */
class ModifyCRRightStatusResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBPCompanyInfo返回参数结构体
 * @class
 */
class DescribeBPCompanyInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 营业执照
         * @type {string || null}
         */
        this.LicenseName = null;

        /**
         * 营业执照审核状态 1-审核中 2-审核未通过，3、审核通过
         * @type {number || null}
         */
        this.LicenseStatus = null;

        /**
         * 营业执照备注
         * @type {string || null}
         */
        this.LicenseNote = null;

        /**
         * 授权书
         * @type {string || null}
         */
        this.AuthorizationName = null;

        /**
         * 授权书审核状态
         * @type {number || null}
         */
        this.AuthorizationStatus = null;

        /**
         * 授权书备注
         * @type {string || null}
         */
        this.AuthorizationNote = null;

        /**
         * 品牌信息
         * @type {Array.<BrandData> || null}
         */
        this.BrandDatas = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CompanyId = null;

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
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.LicenseName = 'LicenseName' in params ? params.LicenseName : null;
        this.LicenseStatus = 'LicenseStatus' in params ? params.LicenseStatus : null;
        this.LicenseNote = 'LicenseNote' in params ? params.LicenseNote : null;
        this.AuthorizationName = 'AuthorizationName' in params ? params.AuthorizationName : null;
        this.AuthorizationStatus = 'AuthorizationStatus' in params ? params.AuthorizationStatus : null;
        this.AuthorizationNote = 'AuthorizationNote' in params ? params.AuthorizationNote : null;

        if (params.BrandDatas) {
            this.BrandDatas = new Array();
            for (let z in params.BrandDatas) {
                let obj = new BrandData();
                obj.deserialize(params.BrandDatas[z]);
                this.BrandDatas.push(obj);
            }
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBPOfflineAttachment返回参数结构体
 * @class
 */
class ModifyBPOfflineAttachmentResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRBlock请求参数结构体
 * @class
 */
class CreateCRBlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 侵权链接
         * @type {string || null}
         */
        this.TortUrl = null;

        /**
         * 侵权标题
         * @type {string || null}
         */
        this.TortTitle = null;

        /**
         * 侵权平台
         * @type {string || null}
         */
        this.TortPlat = null;

        /**
         * 拦截结果回调地址
         * @type {string || null}
         */
        this.BlockUrl = null;

        /**
         * 授权书下载地址
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 授权书生效日期
         * @type {string || null}
         */
        this.ValidStartDate = null;

        /**
         * 授权书截止日期
         * @type {string || null}
         */
        this.ValidEndDate = null;

        /**
         * 侵权截图
         * @type {string || null}
         */
        this.TortPic = null;

        /**
         * 委托书下载地址
         * @type {string || null}
         */
        this.CommFileUrl = null;

        /**
         * 委托书生效日期
         * @type {string || null}
         */
        this.CommValidStartDate = null;

        /**
         * 委托书截止日期
         * @type {string || null}
         */
        this.CommValidEndDate = null;

        /**
         * 是否著作权人：0-否 1-是
         * @type {string || null}
         */
        this.IsProducer = null;

        /**
         * 存证证书下载地址
         * @type {string || null}
         */
        this.EvidenceFileUrl = null;

        /**
         * 存证证书生效日期
         * @type {string || null}
         */
        this.EvidenceValidStartDate = null;

        /**
         * 存证证书截止日期
         * @type {string || null}
         */
        this.EvidenceValidEndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.TortUrl = 'TortUrl' in params ? params.TortUrl : null;
        this.TortTitle = 'TortTitle' in params ? params.TortTitle : null;
        this.TortPlat = 'TortPlat' in params ? params.TortPlat : null;
        this.BlockUrl = 'BlockUrl' in params ? params.BlockUrl : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.ValidStartDate = 'ValidStartDate' in params ? params.ValidStartDate : null;
        this.ValidEndDate = 'ValidEndDate' in params ? params.ValidEndDate : null;
        this.TortPic = 'TortPic' in params ? params.TortPic : null;
        this.CommFileUrl = 'CommFileUrl' in params ? params.CommFileUrl : null;
        this.CommValidStartDate = 'CommValidStartDate' in params ? params.CommValidStartDate : null;
        this.CommValidEndDate = 'CommValidEndDate' in params ? params.CommValidEndDate : null;
        this.IsProducer = 'IsProducer' in params ? params.IsProducer : null;
        this.EvidenceFileUrl = 'EvidenceFileUrl' in params ? params.EvidenceFileUrl : null;
        this.EvidenceValidStartDate = 'EvidenceValidStartDate' in params ? params.EvidenceValidStartDate : null;
        this.EvidenceValidEndDate = 'EvidenceValidEndDate' in params ? params.EvidenceValidEndDate : null;

    }
}

/**
 * CreateBPFakeURL返回参数结构体
 * @class
 */
class CreateBPFakeURLResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCRTort返回参数结构体
 * @class
 */
class CreateCRTortResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 侵权ID
         * @type {number || null}
         */
        this.TortId = null;

        /**
         * 侵权标题
         * @type {string || null}
         */
        this.TortTitle = null;

        /**
         * 侵权平台
         * @type {string || null}
         */
        this.TortPlat = null;

        /**
         * 侵权网址
         * @type {string || null}
         */
        this.TortURL = null;

        /**
         * 侵权域名
         * @type {string || null}
         */
        this.TortDomain = null;

        /**
         * 侵权主体
         * @type {string || null}
         */
        this.TortBodyName = null;

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
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.TortId = 'TortId' in params ? params.TortId : null;
        this.TortTitle = 'TortTitle' in params ? params.TortTitle : null;
        this.TortPlat = 'TortPlat' in params ? params.TortPlat : null;
        this.TortURL = 'TortURL' in params ? params.TortURL : null;
        this.TortDomain = 'TortDomain' in params ? params.TortDomain : null;
        this.TortBodyName = 'TortBodyName' in params ? params.TortBodyName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBPFalseTicket请求参数结构体
 * @class
 */
class CreateBPFalseTicketRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒网址
         * @type {string || null}
         */
        this.FakeURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeURL = 'FakeURL' in params ? params.FakeURL : null;

    }
}

/**
 * ModifyCRMonitor返回参数结构体
 * @class
 */
class ModifyCRMonitorResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 权属文件列表
 * @class
 */
class File extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件下载地址
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件类型 1-委托书 2-授权书 5-存证证书 11-营业执照
         * @type {number || null}
         */
        this.FileType = null;

        /**
         * 文件有效开始日期
         * @type {string || null}
         */
        this.ValidStartDate = null;

        /**
         * 文件有效截止日期
         * @type {string || null}
         */
        this.ValidEndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.ValidStartDate = 'ValidStartDate' in params ? params.ValidStartDate : null;
        this.ValidEndDate = 'ValidEndDate' in params ? params.ValidEndDate : null;

    }
}

/**
 * DescribeBPProtectURLs请求参数结构体
 * @class
 */
class DescribeBPProtectURLsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * ModifyCRObtainStatus返回参数结构体
 * @class
 */
class ModifyCRObtainStatusResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCRWhiteList请求参数结构体
 * @class
 */
class ModifyCRWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段已废弃，白名单ID
         * @type {number || null}
         */
        this.WhiteListId = null;

        /**
         * 该字段已废弃，平台名称
         * @type {string || null}
         */
        this.PlatForm = null;

        /**
         * 该字段已废弃，平台站点链接
         * @type {string || null}
         */
        this.PlatUrl = null;

        /**
         * 该字段已废弃，作者ID
         * @type {string || null}
         */
        this.AuthorId = null;

        /**
         * 该字段已废弃，作品ID
         * @type {number || null}
         */
        this.WorksId = null;

        /**
         * 作品ID
         * @type {number || null}
         */
        this.WorkId = null;

        /**
         * 白名单列表，以\n分割
         * @type {string || null}
         */
        this.WhiteSites = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListId = 'WhiteListId' in params ? params.WhiteListId : null;
        this.PlatForm = 'PlatForm' in params ? params.PlatForm : null;
        this.PlatUrl = 'PlatUrl' in params ? params.PlatUrl : null;
        this.AuthorId = 'AuthorId' in params ? params.AuthorId : null;
        this.WorksId = 'WorksId' in params ? params.WorksId : null;
        this.WorkId = 'WorkId' in params ? params.WorkId : null;
        this.WhiteSites = 'WhiteSites' in params ? params.WhiteSites : null;

    }
}

/**
 * CreateCRCompanyVerify请求参数结构体
 * @class
 */
class CreateCRCompanyVerifyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 企业证件号码
         * @type {string || null}
         */
        this.CompanyID = null;

        /**
         * 企业法人姓名
         * @type {string || null}
         */
        this.CompanyLegalName = null;

        /**
         * 联系人姓名
         * @type {string || null}
         */
        this.ManagerName = null;

        /**
         * 联系人手机号
         * @type {string || null}
         */
        this.ManagerPhone = null;

        /**
         * 手机验证码，接口接入可以置空
         * @type {string || null}
         */
        this.VerificationCode = null;

        /**
         * 字段已废弃，企业认证号码类型 1：社会信用代码 2：组织机构代码 3：企业工商注册码 4：其他 默认为1
         * @type {string || null}
         */
        this.CompanyIDType = null;

        /**
         * 字段已废弃，认证类型
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.CompanyID = 'CompanyID' in params ? params.CompanyID : null;
        this.CompanyLegalName = 'CompanyLegalName' in params ? params.CompanyLegalName : null;
        this.ManagerName = 'ManagerName' in params ? params.ManagerName : null;
        this.ManagerPhone = 'ManagerPhone' in params ? params.ManagerPhone : null;
        this.VerificationCode = 'VerificationCode' in params ? params.VerificationCode : null;
        this.CompanyIDType = 'CompanyIDType' in params ? params.CompanyIDType : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

module.exports = {
    ProtectURLInfo: ProtectURLInfo,
    CreateCRObtainResponse: CreateCRObtainResponse,
    CreateCRUserVerifyRequest: CreateCRUserVerifyRequest,
    CreateBPFalseTicketResponse: CreateBPFalseTicketResponse,
    CreateCRRightFileRequest: CreateCRRightFileRequest,
    CreateCRRightResponse: CreateCRRightResponse,
    CreateCRWorkResponse: CreateCRWorkResponse,
    CreateCRRightRequest: CreateCRRightRequest,
    CreateBPOfflineTicketResponse: CreateBPOfflineTicketResponse,
    CreateCRTortRequest: CreateCRTortRequest,
    UpdateCRWorkRequest: UpdateCRWorkRequest,
    DescribeBPFakeURLsRequest: DescribeBPFakeURLsRequest,
    ModifyCRBlockStatusResponse: ModifyCRBlockStatusResponse,
    Monitor: Monitor,
    ModifyCRObtainStatusRequest: ModifyCRObtainStatusRequest,
    ReportFakeURLInfo: ReportFakeURLInfo,
    DescribeCRWorkInfoRequest: DescribeCRWorkInfoRequest,
    ModifyBPOfflineAttachmentRequest: ModifyBPOfflineAttachmentRequest,
    DescribeBPFakeURLsResponse: DescribeBPFakeURLsResponse,
    CreateBPOfflineAttachmentResponse: CreateBPOfflineAttachmentResponse,
    DescribeBPReportFakeURLsRequest: DescribeBPReportFakeURLsRequest,
    DescribeCRMonitorDetailResponse: DescribeCRMonitorDetailResponse,
    MonitorTort: MonitorTort,
    CreateBPFakeURLRequest: CreateBPFakeURLRequest,
    UpdateCRWorkResponse: UpdateCRWorkResponse,
    CreateBPProtectURLsResponse: CreateBPProtectURLsResponse,
    DescribeBPProtectURLsResponse: DescribeBPProtectURLsResponse,
    DescribeCRMonitorsResponse: DescribeCRMonitorsResponse,
    CreateCRCompanyVerifyResponse: CreateCRCompanyVerifyResponse,
    CreateBPOfflineAttachmentRequest: CreateBPOfflineAttachmentRequest,
    CreateCRDesktopCodeResponse: CreateCRDesktopCodeResponse,
    CreateBPProtectURLsRequest: CreateBPProtectURLsRequest,
    CreateCRObtainRequest: CreateCRObtainRequest,
    ModifyCRBlockStatusRequest: ModifyCRBlockStatusRequest,
    ModifyCRMonitorRequest: ModifyCRMonitorRequest,
    CreateCRDesktopCodeRequest: CreateCRDesktopCodeRequest,
    CreateCRWorkRequest: CreateCRWorkRequest,
    DescribeBPCompanyInfoRequest: DescribeBPCompanyInfoRequest,
    DescribeCRObtainDetailRequest: DescribeCRObtainDetailRequest,
    DescribeBPReportFakeURLsResponse: DescribeBPReportFakeURLsResponse,
    DescribeCRMonitorDetailRequest: DescribeCRMonitorDetailRequest,
    Filter: Filter,
    CreateCRBlockResponse: CreateCRBlockResponse,
    ModifyCRRightStatusRequest: ModifyCRRightStatusRequest,
    DescribeCRMonitorsRequest: DescribeCRMonitorsRequest,
    DescribeCRWorkInfoResponse: DescribeCRWorkInfoResponse,
    DescribeCRObtainDetailResponse: DescribeCRObtainDetailResponse,
    CreateCRRightFileResponse: CreateCRRightFileResponse,
    ModifyCRWhiteListResponse: ModifyCRWhiteListResponse,
    FakeURLInfo: FakeURLInfo,
    CreateBPOfflineTicketRequest: CreateBPOfflineTicketRequest,
    CreateCRUserVerifyResponse: CreateCRUserVerifyResponse,
    BrandData: BrandData,
    ModifyCRRightStatusResponse: ModifyCRRightStatusResponse,
    DescribeBPCompanyInfoResponse: DescribeBPCompanyInfoResponse,
    ModifyBPOfflineAttachmentResponse: ModifyBPOfflineAttachmentResponse,
    CreateCRBlockRequest: CreateCRBlockRequest,
    CreateBPFakeURLResponse: CreateBPFakeURLResponse,
    CreateCRTortResponse: CreateCRTortResponse,
    CreateBPFalseTicketRequest: CreateBPFalseTicketRequest,
    ModifyCRMonitorResponse: ModifyCRMonitorResponse,
    File: File,
    DescribeBPProtectURLsRequest: DescribeBPProtectURLsRequest,
    ModifyCRObtainStatusResponse: ModifyCRObtainStatusResponse,
    ModifyCRWhiteListRequest: ModifyCRWhiteListRequest,
    CreateCRCompanyVerifyRequest: CreateCRCompanyVerifyRequest,

}
