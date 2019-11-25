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
 * ModifySiteAttribute请求参数结构体
 * @class
 */
class ModifySiteAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {number || null}
         */
        this.SiteId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 网站是否需要登录扫描：0-未知；-1-不需要；1-需要
         * @type {number || null}
         */
        this.NeedLogin = null;

        /**
         * 登录后的cookie
         * @type {string || null}
         */
        this.LoginCookie = null;

        /**
         * 用于测试cookie是否有效的URL
         * @type {string || null}
         */
        this.LoginCheckUrl = null;

        /**
         * 用于测试cookie是否有效的关键字
         * @type {string || null}
         */
        this.LoginCheckKw = null;

        /**
         * 禁止扫描器扫描的目录关键字
         * @type {string || null}
         */
        this.ScanDisallow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedLogin = 'NeedLogin' in params ? params.NeedLogin : null;
        this.LoginCookie = 'LoginCookie' in params ? params.LoginCookie : null;
        this.LoginCheckUrl = 'LoginCheckUrl' in params ? params.LoginCheckUrl : null;
        this.LoginCheckKw = 'LoginCheckKw' in params ? params.LoginCheckKw : null;
        this.ScanDisallow = 'ScanDisallow' in params ? params.ScanDisallow : null;

    }
}

/**
 * 监控任务详细数据
 * @class
 */
class MonitorsDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控任务基础信息。
         * @type {Monitor || null}
         */
        this.Basic = null;

        /**
         * 监控任务包含的站点列表。
         * @type {Array.<MonitorMiniSite> || null}
         */
        this.Sites = null;

        /**
         * 监控任务包含的站点列表数量。
         * @type {number || null}
         */
        this.SiteNumber = null;

        /**
         * 监控任务包含的受漏洞威胁的站点列表。
         * @type {Array.<MonitorMiniSite> || null}
         */
        this.ImpactSites = null;

        /**
         * 监控任务包含的受漏洞威胁的站点列表数量。
         * @type {number || null}
         */
        this.ImpactSiteNumber = null;

        /**
         * 高风险漏洞数量。
         * @type {number || null}
         */
        this.VulsHighNumber = null;

        /**
         * 中风险漏洞数量。
         * @type {number || null}
         */
        this.VulsMiddleNumber = null;

        /**
         * 低风险漏洞数量。
         * @type {number || null}
         */
        this.VulsLowNumber = null;

        /**
         * 提示数量。
         * @type {number || null}
         */
        this.VulsNoticeNumber = null;

        /**
         * 监控任务包含的站点列表的平均扫描进度。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 扫描页面总数。
         * @type {number || null}
         */
        this.PageCount = null;

        /**
         * 内容检测数量。
         * @type {number || null}
         */
        this.ContentNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Basic) {
            let obj = new Monitor();
            obj.deserialize(params.Basic)
            this.Basic = obj;
        }

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }
        this.SiteNumber = 'SiteNumber' in params ? params.SiteNumber : null;

        if (params.ImpactSites) {
            this.ImpactSites = new Array();
            for (let z in params.ImpactSites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.ImpactSites[z]);
                this.ImpactSites.push(obj);
            }
        }
        this.ImpactSiteNumber = 'ImpactSiteNumber' in params ? params.ImpactSiteNumber : null;
        this.VulsHighNumber = 'VulsHighNumber' in params ? params.VulsHighNumber : null;
        this.VulsMiddleNumber = 'VulsMiddleNumber' in params ? params.VulsMiddleNumber : null;
        this.VulsLowNumber = 'VulsLowNumber' in params ? params.VulsLowNumber : null;
        this.VulsNoticeNumber = 'VulsNoticeNumber' in params ? params.VulsNoticeNumber : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.PageCount = 'PageCount' in params ? params.PageCount : null;
        this.ContentNumber = 'ContentNumber' in params ? params.ContentNumber : null;

    }
}

/**
 * DescribeSites返回参数结构体
 * @class
 */
class DescribeSitesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 站点信息列表。
         * @type {Array.<Site> || null}
         */
        this.Sites = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new Site();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonitors返回参数结构体
 * @class
 */
class DescribeMonitorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控任务列表。
         * @type {Array.<MonitorsDetail> || null}
         */
        this.Monitors = null;

        /**
         * 监控任务数量。
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

        if (params.Monitors) {
            this.Monitors = new Array();
            for (let z in params.Monitors) {
                let obj = new MonitorsDetail();
                obj.deserialize(params.Monitors[z]);
                this.Monitors.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSites请求参数结构体
 * @class
 */
class DeleteSitesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID列表
         * @type {Array.<number> || null}
         */
        this.SiteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
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
 * DescribeVuls请求参数结构体
 * @class
 */
class DescribeVulsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {number || null}
         */
        this.SiteId = null;

        /**
         * 监控任务ID
         * @type {number || null}
         */
        this.MonitorId = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyConfigAttribute返回参数结构体
 * @class
 */
class ModifyConfigAttributeResponse extends  AbstractModel {
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
 * CreateSites返回参数结构体
 * @class
 */
class CreateSitesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增站点数。
         * @type {number || null}
         */
        this.Number = null;

        /**
         * 站点数组
         * @type {Array.<MiniSite> || null}
         */
        this.Sites = null;

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
        this.Number = 'Number' in params ? params.Number : null;

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new MiniSite();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulsNumber请求参数结构体
 * @class
 */
class DescribeVulsNumberRequest extends  AbstractModel {
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
 * ModifyMonitorAttribute返回参数结构体
 * @class
 */
class ModifyMonitorAttributeResponse extends  AbstractModel {
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
 * ModifySiteAttribute返回参数结构体
 * @class
 */
class ModifySiteAttributeResponse extends  AbstractModel {
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
 * CreateVulsReport请求参数结构体
 * @class
 */
class CreateVulsReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {number || null}
         */
        this.SiteId = null;

        /**
         * 监控任务ID
         * @type {number || null}
         */
        this.MonitorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;

    }
}

/**
 * CreateSitesScans返回参数结构体
 * @class
 */
class CreateSitesScansResponse extends  AbstractModel {
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
 * 站点验证数据
 * @class
 */
class SitesVerification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * txt解析域名验证的name。
         * @type {string || null}
         */
        this.TxtName = null;

        /**
         * txt解析域名验证的text。
         * @type {string || null}
         */
        this.TxtText = null;

        /**
         * 验证有效期，在此之前有效。
         * @type {string || null}
         */
        this.ValidTo = null;

        /**
         * 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。
         * @type {number || null}
         */
        this.VerifyStatus = null;

        /**
         * CreatedAt。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * UpdatedAt。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云用户appid
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 用于验证站点的url，即访问该url获取验证数据。
         * @type {string || null}
         */
        this.VerifyUrl = null;

        /**
         * 获取验证验证文件的url。
         * @type {string || null}
         */
        this.VerifyFileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.TxtName = 'TxtName' in params ? params.TxtName : null;
        this.TxtText = 'TxtText' in params ? params.TxtText : null;
        this.ValidTo = 'ValidTo' in params ? params.ValidTo : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.VerifyUrl = 'VerifyUrl' in params ? params.VerifyUrl : null;
        this.VerifyFileUrl = 'VerifyFileUrl' in params ? params.VerifyFileUrl : null;

    }
}

/**
 * DescribeSiteQuota返回参数结构体
 * @class
 */
class DescribeSiteQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购买的扫描次数。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 已使用的扫描次数。
         * @type {number || null}
         */
        this.Used = null;

        /**
         * 剩余可用的扫描次数。
         * @type {number || null}
         */
        this.Available = null;

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
        this.Total = 'Total' in params ? params.Total : null;
        this.Used = 'Used' in params ? params.Used : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVulsNumber返回参数结构体
 * @class
 */
class DescribeVulsNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受影响的网站总数。
         * @type {number || null}
         */
        this.ImpactSiteNumber = null;

        /**
         * 已验证的网站总数。
         * @type {number || null}
         */
        this.SiteNumber = null;

        /**
         * 高风险漏洞总数。
         * @type {number || null}
         */
        this.VulsHighNumber = null;

        /**
         * 中风险漏洞总数。
         * @type {number || null}
         */
        this.VulsMiddleNumber = null;

        /**
         * 低高风险漏洞总数。
         * @type {number || null}
         */
        this.VulsLowNumber = null;

        /**
         * 风险提示总数。
         * @type {number || null}
         */
        this.VulsNoticeNumber = null;

        /**
         * 扫描页面总数。
         * @type {number || null}
         */
        this.PageCount = null;

        /**
         * 已验证的网站列表。
         * @type {Array.<MonitorMiniSite> || null}
         */
        this.Sites = null;

        /**
         * 受影响的网站列表。
         * @type {Array.<MonitorMiniSite> || null}
         */
        this.ImpactSites = null;

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
        this.ImpactSiteNumber = 'ImpactSiteNumber' in params ? params.ImpactSiteNumber : null;
        this.SiteNumber = 'SiteNumber' in params ? params.SiteNumber : null;
        this.VulsHighNumber = 'VulsHighNumber' in params ? params.VulsHighNumber : null;
        this.VulsMiddleNumber = 'VulsMiddleNumber' in params ? params.VulsMiddleNumber : null;
        this.VulsLowNumber = 'VulsLowNumber' in params ? params.VulsLowNumber : null;
        this.VulsNoticeNumber = 'VulsNoticeNumber' in params ? params.VulsNoticeNumber : null;
        this.PageCount = 'PageCount' in params ? params.PageCount : null;

        if (params.Sites) {
            this.Sites = new Array();
            for (let z in params.Sites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.Sites[z]);
                this.Sites.push(obj);
            }
        }

        if (params.ImpactSites) {
            this.ImpactSites = new Array();
            for (let z in params.ImpactSites) {
                let obj = new MonitorMiniSite();
                obj.deserialize(params.ImpactSites[z]);
                this.ImpactSites.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVulsMisinformation请求参数结构体
 * @class
 */
class CreateVulsMisinformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID列表
         * @type {Array.<number> || null}
         */
        this.VulIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulIds = 'VulIds' in params ? params.VulIds : null;

    }
}

/**
 * DescribeVulsNumberTimeline请求参数结构体
 * @class
 */
class DescribeVulsNumberTimelineRequest extends  AbstractModel {
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
 * 监控任务中的站点信息。
 * @class
 */
class MonitorMiniSite extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {number || null}
         */
        this.SiteId = null;

        /**
         * 站点Url。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * CreateSitesScans请求参数结构体
 * @class
 */
class CreateSitesScansRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点的ID列表
         * @type {Array.<number> || null}
         */
        this.SiteIds = null;

        /**
         * 扫描模式，normal-正常扫描；deep-深度扫描
         * @type {string || null}
         */
        this.ScannerType = null;

        /**
         * 扫描速率限制，每秒发送X个HTTP请求
         * @type {number || null}
         */
        this.RateLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;

    }
}

/**
 * CreateMonitors返回参数结构体
 * @class
 */
class CreateMonitorsResponse extends  AbstractModel {
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
 * DescribeVuls返回参数结构体
 * @class
 */
class DescribeVulsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 漏洞信息列表。
         * @type {Array.<Vul> || null}
         */
        this.Vuls = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Vuls) {
            this.Vuls = new Array();
            for (let z in params.Vuls) {
                let obj = new Vul();
                obj.deserialize(params.Vuls[z]);
                this.Vuls.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifySites返回参数结构体
 * @class
 */
class VerifySitesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证成功的根域名数量。
         * @type {number || null}
         */
        this.SuccessNumber = null;

        /**
         * 验证失败的根域名数量。
         * @type {number || null}
         */
        this.FailNumber = null;

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
        this.SuccessNumber = 'SuccessNumber' in params ? params.SuccessNumber : null;
        this.FailNumber = 'FailNumber' in params ? params.FailNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMonitors请求参数结构体
 * @class
 */
class CreateMonitorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点的url列表
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 扫描模式，normal-正常扫描；deep-深度扫描
         * @type {string || null}
         */
        this.ScannerType = null;

        /**
         * 扫描周期，单位小时，每X小时执行一次
         * @type {number || null}
         */
        this.Crontab = null;

        /**
         * 扫描速率限制，每秒发送X个HTTP请求
         * @type {number || null}
         */
        this.RateLimit = null;

        /**
         * 首次扫描开始时间
         * @type {string || null}
         */
        this.FirstScanStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.Crontab = 'Crontab' in params ? params.Crontab : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;
        this.FirstScanStartTime = 'FirstScanStartTime' in params ? params.FirstScanStartTime : null;

    }
}

/**
 * DeleteMonitors返回参数结构体
 * @class
 */
class DeleteMonitorsResponse extends  AbstractModel {
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
 * 监控任务基础数据
 * @class
 */
class Monitor extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控任务ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 监控名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 监测状态：1-监测中；2-暂停监测。
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * 监测模式，normal-正常扫描；deep-深度扫描。
         * @type {string || null}
         */
        this.ScannerType = null;

        /**
         * 扫描周期，单位小时，每X小时执行一次。
         * @type {number || null}
         */
        this.Crontab = null;

        /**
         * 指定扫描类型，3位数每位依次表示：扫描Web漏洞、扫描系统漏洞、扫描系统端口。
         * @type {string || null}
         */
        this.IncludedVulsTypes = null;

        /**
         * 速率限制，每秒发送X个HTTP请求。
         * @type {number || null}
         */
        this.RateLimit = null;

        /**
         * 首次扫描开始时间。
         * @type {string || null}
         */
        this.FirstScanStartTime = null;

        /**
         * 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。
         * @type {number || null}
         */
        this.ScanStatus = null;

        /**
         * 上一次扫描完成时间。
         * @type {string || null}
         */
        this.LastScanFinishTime = null;

        /**
         * 当前扫描开始时间，如扫描完成则为上一次扫描的开始时间。
         * @type {string || null}
         */
        this.CurrentScanStartTime = null;

        /**
         * CreatedAt。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * UpdatedAt。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 云用户appid。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 扫描状态：0-待检测；1-检测完成
         * @type {number || null}
         */
        this.ContentScanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.Crontab = 'Crontab' in params ? params.Crontab : null;
        this.IncludedVulsTypes = 'IncludedVulsTypes' in params ? params.IncludedVulsTypes : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;
        this.FirstScanStartTime = 'FirstScanStartTime' in params ? params.FirstScanStartTime : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.LastScanFinishTime = 'LastScanFinishTime' in params ? params.LastScanFinishTime : null;
        this.CurrentScanStartTime = 'CurrentScanStartTime' in params ? params.CurrentScanStartTime : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ContentScanStatus = 'ContentScanStatus' in params ? params.ContentScanStatus : null;

    }
}

/**
 * 漏洞数据
 * @class
 */
class Vul extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 站点ID。
         * @type {number || null}
         */
        this.SiteId = null;

        /**
         * 扫描引擎的扫描任务ID。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 漏洞级别：high、middle、low、notice。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 漏洞名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 出现漏洞的url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 网址/细节。
         * @type {string || null}
         */
        this.Html = null;

        /**
         * 漏洞类型。
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 危害说明。
         * @type {string || null}
         */
        this.Harm = null;

        /**
         * 漏洞描述。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 解决方案。
         * @type {string || null}
         */
        this.Solution = null;

        /**
         * 漏洞参考。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 漏洞通过该参数攻击。
         * @type {string || null}
         */
        this.Parameter = null;

        /**
         * CreatedAt。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * UpdatedAt。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 是否已经添加误报，0-否，1-是。
         * @type {number || null}
         */
        this.IsReported = null;

        /**
         * 云用户appid。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 云用户标识。
         * @type {string || null}
         */
        this.Uin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Html = 'Html' in params ? params.Html : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Harm = 'Harm' in params ? params.Harm : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.Solution = 'Solution' in params ? params.Solution : null;
        this.From = 'From' in params ? params.From : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.IsReported = 'IsReported' in params ? params.IsReported : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;

    }
}

/**
 * 用户漏洞数随时间变化统计数据
 * @class
 */
class VulsTimeline extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 云用户appid。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 日期。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 扫描页面总数量。
         * @type {number || null}
         */
        this.PageCount = null;

        /**
         * 已验证网站总数量。
         * @type {number || null}
         */
        this.SiteNum = null;

        /**
         * 受影响的网站总数量。
         * @type {number || null}
         */
        this.ImpactSiteNum = null;

        /**
         * 高危漏洞总数量。
         * @type {number || null}
         */
        this.VulsHighNum = null;

        /**
         * 中危漏洞总数量。
         * @type {number || null}
         */
        this.VulsMiddleNum = null;

        /**
         * 低危漏洞总数量。
         * @type {number || null}
         */
        this.VulsLowNum = null;

        /**
         * 风险提示总数量
         * @type {number || null}
         */
        this.VulsNoticeNum = null;

        /**
         * 记录添加时间。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 记录最近修改时间。
         * @type {string || null}
         */
        this.UpdatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.PageCount = 'PageCount' in params ? params.PageCount : null;
        this.SiteNum = 'SiteNum' in params ? params.SiteNum : null;
        this.ImpactSiteNum = 'ImpactSiteNum' in params ? params.ImpactSiteNum : null;
        this.VulsHighNum = 'VulsHighNum' in params ? params.VulsHighNum : null;
        this.VulsMiddleNum = 'VulsMiddleNum' in params ? params.VulsMiddleNum : null;
        this.VulsLowNum = 'VulsLowNum' in params ? params.VulsLowNum : null;
        this.VulsNoticeNum = 'VulsNoticeNum' in params ? params.VulsNoticeNum : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

    }
}

/**
 * CreateVulsMisinformation返回参数结构体
 * @class
 */
class CreateVulsMisinformationResponse extends  AbstractModel {
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
 * VerifySites请求参数结构体
 * @class
 */
class VerifySitesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点的url列表
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * 站点信息。
 * @class
 */
class MiniSite extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {number || null}
         */
        this.SiteId = null;

        /**
         * 站点Url。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteId = 'SiteId' in params ? params.SiteId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * ModifyMonitorAttribute请求参数结构体
 * @class
 */
class ModifyMonitorAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监测任务ID
         * @type {number || null}
         */
        this.MonitorId = null;

        /**
         * 站点的url列表
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 扫描模式，normal-正常扫描；deep-深度扫描
         * @type {string || null}
         */
        this.ScannerType = null;

        /**
         * 扫描周期，单位小时，每X小时执行一次
         * @type {number || null}
         */
        this.Crontab = null;

        /**
         * 扫描速率限制，每秒发送X个HTTP请求
         * @type {number || null}
         */
        this.RateLimit = null;

        /**
         * 首次扫描开始时间
         * @type {string || null}
         */
        this.FirstScanStartTime = null;

        /**
         * 监测状态：1-监测中；2-暂停监测
         * @type {number || null}
         */
        this.MonitorStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ScannerType = 'ScannerType' in params ? params.ScannerType : null;
        this.Crontab = 'Crontab' in params ? params.Crontab : null;
        this.RateLimit = 'RateLimit' in params ? params.RateLimit : null;
        this.FirstScanStartTime = 'FirstScanStartTime' in params ? params.FirstScanStartTime : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;

    }
}

/**
 * DescribeVulsNumberTimeline返回参数结构体
 * @class
 */
class DescribeVulsNumberTimelineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计数据记录数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户漏洞数随时间变化统计数据。
         * @type {Array.<VulsTimeline> || null}
         */
        this.VulsTimeline = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VulsTimeline) {
            this.VulsTimeline = new Array();
            for (let z in params.VulsTimeline) {
                let obj = new VulsTimeline();
                obj.deserialize(params.VulsTimeline[z]);
                this.VulsTimeline.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateVulsReport返回参数结构体
 * @class
 */
class CreateVulsReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告下载地址
         * @type {string || null}
         */
        this.ReportFileUrl = null;

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
        this.ReportFileUrl = 'ReportFileUrl' in params ? params.ReportFileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSites请求参数结构体
 * @class
 */
class CreateSitesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点的url列表
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 访问网站的客户端标识
         * @type {string || null}
         */
        this.UserAgent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;

    }
}

/**
 * ModifyConfigAttribute请求参数结构体
 * @class
 */
class ModifyConfigAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示
         * @type {string || null}
         */
        this.NoticeLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoticeLevel = 'NoticeLevel' in params ? params.NoticeLevel : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeMonitors请求参数结构体
 * @class
 */
class DescribeMonitorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控任务ID列表
         * @type {Array.<number> || null}
         */
        this.MonitorIds = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorIds = 'MonitorIds' in params ? params.MonitorIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteSites返回参数结构体
 * @class
 */
class DeleteSitesResponse extends  AbstractModel {
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
 * DeleteMonitors请求参数结构体
 * @class
 */
class DeleteMonitorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控任务ID列表
         * @type {Array.<number> || null}
         */
        this.MonitorIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorIds = 'MonitorIds' in params ? params.MonitorIds : null;

    }
}

/**
 * DescribeSitesVerification返回参数结构体
 * @class
 */
class DescribeSitesVerificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证信息数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 验证信息列表。
         * @type {Array.<SitesVerification> || null}
         */
        this.SitesVerification = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SitesVerification) {
            this.SitesVerification = new Array();
            for (let z in params.SitesVerification) {
                let obj = new SitesVerification();
                obj.deserialize(params.SitesVerification[z]);
                this.SitesVerification.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 站点数据
 * @class
 */
class Site extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 监控任务ID，为0时表示未加入监控任务。
         * @type {number || null}
         */
        this.MonitorId = null;

        /**
         * 站点url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。
         * @type {number || null}
         */
        this.VerifyStatus = null;

        /**
         * 监测状态：0-未监测；1-监测中；2-暂停监测。
         * @type {number || null}
         */
        this.MonitorStatus = null;

        /**
         * 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。
         * @type {number || null}
         */
        this.ScanStatus = null;

        /**
         * 最近一次的AIScanner的扫描任务id，注意取消的情况。
         * @type {number || null}
         */
        this.LastScanTaskId = null;

        /**
         * 最近一次扫描开始时间。
         * @type {string || null}
         */
        this.LastScanStartTime = null;

        /**
         * 最近一次扫描完成时间。
         * @type {string || null}
         */
        this.LastScanFinishTime = null;

        /**
         * 最近一次取消时间，取消即使用上一次扫描结果。
         * @type {string || null}
         */
        this.LastScanCancelTime = null;

        /**
         * 最近一次扫描扫描的页面数。
         * @type {number || null}
         */
        this.LastScanPageCount = null;

        /**
         * normal-正常扫描；deep-深度扫描。
         * @type {string || null}
         */
        this.LastScanScannerType = null;

        /**
         * 最近一次扫描高风险漏洞数量。
         * @type {number || null}
         */
        this.LastScanVulsHighNum = null;

        /**
         * 最近一次扫描中风险漏洞数量。
         * @type {number || null}
         */
        this.LastScanVulsMiddleNum = null;

        /**
         * 最近一次扫描低风险漏洞数量。
         * @type {number || null}
         */
        this.LastScanVulsLowNum = null;

        /**
         * 最近一次扫描提示信息数量。
         * @type {number || null}
         */
        this.LastScanVulsNoticeNum = null;

        /**
         * 记录添加时间。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 记录最近修改时间。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 速率限制，每秒发送X个HTTP请求。
         * @type {number || null}
         */
        this.LastScanRateLimit = null;

        /**
         * 最近一次扫描漏洞总数量。
         * @type {number || null}
         */
        this.LastScanVulsNum = null;

        /**
         * 最近一次扫描提示总数量
         * @type {number || null}
         */
        this.LastScanNoticeNum = null;

        /**
         * 扫描进度，百分比整数
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 云用户appid。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 云用户标识。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 网站是否需要登录扫描：0-未知；-1-不需要；1-需要。
         * @type {number || null}
         */
        this.NeedLogin = null;

        /**
         * 登录后的cookie。
         * @type {string || null}
         */
        this.LoginCookie = null;

        /**
         * 登录后的cookie是否有效：0-无效；1-有效。
         * @type {number || null}
         */
        this.LoginCookieValid = null;

        /**
         * 用于测试cookie是否有效的URL。
         * @type {string || null}
         */
        this.LoginCheckUrl = null;

        /**
         * 用于测试cookie是否有效的关键字。
         * @type {string || null}
         */
        this.LoginCheckKw = null;

        /**
         * 禁止扫描器扫描的目录关键字。
         * @type {string || null}
         */
        this.ScanDisallow = null;

        /**
         * 访问网站的客户端标识。
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 内容检测状态：0-未检测；1-已检测；
         * @type {number || null}
         */
        this.ContentStatus = null;

        /**
         * 最近一次扫描内容检测数量
         * @type {number || null}
         */
        this.LastScanContentNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.MonitorId = 'MonitorId' in params ? params.MonitorId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.VerifyStatus = 'VerifyStatus' in params ? params.VerifyStatus : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.ScanStatus = 'ScanStatus' in params ? params.ScanStatus : null;
        this.LastScanTaskId = 'LastScanTaskId' in params ? params.LastScanTaskId : null;
        this.LastScanStartTime = 'LastScanStartTime' in params ? params.LastScanStartTime : null;
        this.LastScanFinishTime = 'LastScanFinishTime' in params ? params.LastScanFinishTime : null;
        this.LastScanCancelTime = 'LastScanCancelTime' in params ? params.LastScanCancelTime : null;
        this.LastScanPageCount = 'LastScanPageCount' in params ? params.LastScanPageCount : null;
        this.LastScanScannerType = 'LastScanScannerType' in params ? params.LastScanScannerType : null;
        this.LastScanVulsHighNum = 'LastScanVulsHighNum' in params ? params.LastScanVulsHighNum : null;
        this.LastScanVulsMiddleNum = 'LastScanVulsMiddleNum' in params ? params.LastScanVulsMiddleNum : null;
        this.LastScanVulsLowNum = 'LastScanVulsLowNum' in params ? params.LastScanVulsLowNum : null;
        this.LastScanVulsNoticeNum = 'LastScanVulsNoticeNum' in params ? params.LastScanVulsNoticeNum : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.LastScanRateLimit = 'LastScanRateLimit' in params ? params.LastScanRateLimit : null;
        this.LastScanVulsNum = 'LastScanVulsNum' in params ? params.LastScanVulsNum : null;
        this.LastScanNoticeNum = 'LastScanNoticeNum' in params ? params.LastScanNoticeNum : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.NeedLogin = 'NeedLogin' in params ? params.NeedLogin : null;
        this.LoginCookie = 'LoginCookie' in params ? params.LoginCookie : null;
        this.LoginCookieValid = 'LoginCookieValid' in params ? params.LoginCookieValid : null;
        this.LoginCheckUrl = 'LoginCheckUrl' in params ? params.LoginCheckUrl : null;
        this.LoginCheckKw = 'LoginCheckKw' in params ? params.LoginCheckKw : null;
        this.ScanDisallow = 'ScanDisallow' in params ? params.ScanDisallow : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.ContentStatus = 'ContentStatus' in params ? params.ContentStatus : null;
        this.LastScanContentNum = 'LastScanContentNum' in params ? params.LastScanContentNum : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示。
         * @type {string || null}
         */
        this.NoticeLevel = null;

        /**
         * 配置ID。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 记录创建时间。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 记录更新新建。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 云用户appid。
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * 内容检测通知等级-1:通知,0-不通知
         * @type {number || null}
         */
        this.ContentLevel = null;

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
        this.NoticeLevel = 'NoticeLevel' in params ? params.NoticeLevel : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ContentLevel = 'ContentLevel' in params ? params.ContentLevel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSites请求参数结构体
 * @class
 */
class DescribeSitesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID列表
         * @type {Array.<number> || null}
         */
        this.SiteIds = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为10，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SiteIds = 'SiteIds' in params ? params.SiteIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSiteQuota请求参数结构体
 * @class
 */
class DescribeSiteQuotaRequest extends  AbstractModel {
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
 * DescribeSitesVerification请求参数结构体
 * @class
 */
class DescribeSitesVerificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点的url列表
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

module.exports = {
    ModifySiteAttributeRequest: ModifySiteAttributeRequest,
    MonitorsDetail: MonitorsDetail,
    DescribeSitesResponse: DescribeSitesResponse,
    DescribeMonitorsResponse: DescribeMonitorsResponse,
    DeleteSitesRequest: DeleteSitesRequest,
    DescribeConfigRequest: DescribeConfigRequest,
    DescribeVulsRequest: DescribeVulsRequest,
    ModifyConfigAttributeResponse: ModifyConfigAttributeResponse,
    CreateSitesResponse: CreateSitesResponse,
    DescribeVulsNumberRequest: DescribeVulsNumberRequest,
    ModifyMonitorAttributeResponse: ModifyMonitorAttributeResponse,
    ModifySiteAttributeResponse: ModifySiteAttributeResponse,
    CreateVulsReportRequest: CreateVulsReportRequest,
    CreateSitesScansResponse: CreateSitesScansResponse,
    SitesVerification: SitesVerification,
    DescribeSiteQuotaResponse: DescribeSiteQuotaResponse,
    DescribeVulsNumberResponse: DescribeVulsNumberResponse,
    CreateVulsMisinformationRequest: CreateVulsMisinformationRequest,
    DescribeVulsNumberTimelineRequest: DescribeVulsNumberTimelineRequest,
    MonitorMiniSite: MonitorMiniSite,
    CreateSitesScansRequest: CreateSitesScansRequest,
    CreateMonitorsResponse: CreateMonitorsResponse,
    DescribeVulsResponse: DescribeVulsResponse,
    VerifySitesResponse: VerifySitesResponse,
    CreateMonitorsRequest: CreateMonitorsRequest,
    DeleteMonitorsResponse: DeleteMonitorsResponse,
    Monitor: Monitor,
    Vul: Vul,
    VulsTimeline: VulsTimeline,
    CreateVulsMisinformationResponse: CreateVulsMisinformationResponse,
    VerifySitesRequest: VerifySitesRequest,
    MiniSite: MiniSite,
    ModifyMonitorAttributeRequest: ModifyMonitorAttributeRequest,
    DescribeVulsNumberTimelineResponse: DescribeVulsNumberTimelineResponse,
    CreateVulsReportResponse: CreateVulsReportResponse,
    CreateSitesRequest: CreateSitesRequest,
    ModifyConfigAttributeRequest: ModifyConfigAttributeRequest,
    Filter: Filter,
    DescribeMonitorsRequest: DescribeMonitorsRequest,
    DeleteSitesResponse: DeleteSitesResponse,
    DeleteMonitorsRequest: DeleteMonitorsRequest,
    DescribeSitesVerificationResponse: DescribeSitesVerificationResponse,
    Site: Site,
    DescribeConfigResponse: DescribeConfigResponse,
    DescribeSitesRequest: DescribeSitesRequest,
    DescribeSiteQuotaRequest: DescribeSiteQuotaRequest,
    DescribeSitesVerificationRequest: DescribeSitesVerificationRequest,

}
