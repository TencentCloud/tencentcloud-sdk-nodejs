const AbstractModel = require("../../common/abstract_model");

/**
 * 加固后app的信息，包含基本信息和加固信息
 * @class
 */
class AppSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * app的名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * app的包名
         * @type {string || null}
         */
        this.AppPkgName = null;

        /**
         * app的版本号
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * app的md5
         * @type {string || null}
         */
        this.AppMd5 = null;

        /**
         * app的大小
         * @type {number || null}
         */
        this.AppSize = null;

        /**
         * 加固服务版本
         * @type {string || null}
         */
        this.ServiceEdition = null;

        /**
         * 加固结果返回码
         * @type {number || null}
         */
        this.ShieldCode = null;

        /**
         * 加固后的APP下载地址
         * @type {string || null}
         */
        this.AppUrl = null;

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 请求的客户端ip
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 提交加固时间
         * @type {number || null}
         */
        this.TaskTime = null;

        /**
         * app的图标url
         * @type {string || null}
         */
        this.AppIconUrl = null;

        /**
         * 加固后app的md5
         * @type {string || null}
         */
        this.ShieldMd5 = null;

        /**
         * 加固后app的大小
         * @type {number || null}
         */
        this.ShieldSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = params.ItemId || null;
        this.AppName = params.AppName || null;
        this.AppPkgName = params.AppPkgName || null;
        this.AppVersion = params.AppVersion || null;
        this.AppMd5 = params.AppMd5 || null;
        this.AppSize = params.AppSize || null;
        this.ServiceEdition = params.ServiceEdition || null;
        this.ShieldCode = params.ShieldCode || null;
        this.AppUrl = params.AppUrl || null;
        this.TaskStatus = params.TaskStatus || null;
        this.ClientIp = params.ClientIp || null;
        this.TaskTime = params.TaskTime || null;
        this.AppIconUrl = params.AppIconUrl || null;
        this.ShieldMd5 = params.ShieldMd5 || null;
        this.ShieldSize = params.ShieldSize || null;

    }
}

/**
 * 需要扫描的应用的服务信息
 * @class
 */
class ScanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务处理完成后的反向通知回调地址,批量提交app每扫描完成一个会通知一次,通知为POST请求，post信息{ItemId:
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * VULSCAN-漏洞扫描信息，VIRUSSCAN-返回病毒扫描信息， ADSCAN-广告扫描信息，PLUGINSCAN-插件扫描信息，可以自由组合
         * @type {Array.<string> || null}
         */
        this.ScanTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackUrl = params.CallbackUrl || null;
        this.ScanTypes = params.ScanTypes || null;

    }
}

/**
 * DescribeShieldInstances返回参数结构体
 * @class
 */
class DescribeShieldInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的app数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 一个关于app详细信息的结构体，主要包括app的基本信息和加固信息。
         * @type {Array.<AppSetInfo> || null}
         */
        this.AppSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TotalCount = params.TotalCount || null;

        if (params.AppSet) {
            this.AppSet = new Array();
            for (let z in params.AppSet) {
                let obj = new AppSetInfo();
                obj.deserialize(params.AppSet[z]);
                this.AppSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 插件信息
 * @class
 */
class PluginInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插件类型，分别为 1-通知栏广告，2-积分墙广告，3-banner广告，4- 悬浮窗图标广告，5-精品推荐列表广告, 6-插播广告
         * @type {number || null}
         */
        this.PluginType = null;

        /**
         * 插件名称
         * @type {string || null}
         */
        this.PluginName = null;

        /**
         * 插件描述
         * @type {string || null}
         */
        this.PluginDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PluginType = params.PluginType || null;
        this.PluginName = params.PluginName || null;
        this.PluginDesc = params.PluginDesc || null;

    }
}

/**
 * DescribeShieldResult请求参数结构体
 * @class
 */
class DescribeShieldResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = params.ItemId || null;

    }
}

/**
 * CreateShieldInstance请求参数结构体
 * @class
 */
class CreateShieldInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待加固的应用信息
         * @type {AppInfo || null}
         */
        this.AppInfo = null;

        /**
         * 加固服务信息
         * @type {ServiceInfo || null}
         */
        this.ServiceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppInfo) {
            let obj = new AppInfo();
            obj.deserialize(params.AppInfo)
            this.AppInfo = obj;
        }

        if (params.ServiceInfo) {
            let obj = new ServiceInfo();
            obj.deserialize(params.ServiceInfo)
            this.ServiceInfo = obj;
        }

    }
}

/**
 * DescribeScanResults返回参数结构体
 * @class
 */
class DescribeScanResultsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量扫描的app结果集
         * @type {Array.<ScanSetInfo> || null}
         */
        this.ScanSet = null;

        /**
         * 批量扫描结果的个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.ScanSet) {
            this.ScanSet = new Array();
            for (let z in params.ScanSet) {
                let obj = new ScanSetInfo();
                obj.deserialize(params.ScanSet[z]);
                this.ScanSet.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 病毒信息
 * @class
 */
class VirusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 软件安全类型，分别为0-未知、 1-安全软件、2-风险软件、3-病毒软件
         * @type {number || null}
         */
        this.SafeType = null;

        /**
         * 病毒名称， utf8编码，非病毒时值为空
         * @type {string || null}
         */
        this.VirusName = null;

        /**
         * 病毒描述，utf8编码，非病毒时值为空
         * @type {string || null}
         */
        this.VirusDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SafeType = params.SafeType || null;
        this.VirusName = params.VirusName || null;
        this.VirusDesc = params.VirusDesc || null;

    }
}

/**
 * app扫描结果集
 * @class
 */
class ScanSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * app信息
         * @type {AppDetailInfo || null}
         */
        this.AppDetailInfo = null;

        /**
         * 病毒信息
         * @type {VirusInfo || null}
         */
        this.VirusInfo = null;

        /**
         * 漏洞信息
         * @type {VulInfo || null}
         */
        this.VulInfo = null;

        /**
         * 广告插件信息
         * @type {AdInfo || null}
         */
        this.AdInfo = null;

        /**
         * 提交扫描的时间
         * @type {number || null}
         */
        this.TaskTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskStatus = params.TaskStatus || null;

        if (params.AppDetailInfo) {
            let obj = new AppDetailInfo();
            obj.deserialize(params.AppDetailInfo)
            this.AppDetailInfo = obj;
        }

        if (params.VirusInfo) {
            let obj = new VirusInfo();
            obj.deserialize(params.VirusInfo)
            this.VirusInfo = obj;
        }

        if (params.VulInfo) {
            let obj = new VulInfo();
            obj.deserialize(params.VulInfo)
            this.VulInfo = obj;
        }

        if (params.AdInfo) {
            let obj = new AdInfo();
            obj.deserialize(params.AdInfo)
            this.AdInfo = obj;
        }
        this.TaskTime = params.TaskTime || null;

    }
}

/**
 * 扫描后app的信息，包含基本信息和扫描状态信息
 * @class
 */
class AppScanSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * app的名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * app的包名
         * @type {string || null}
         */
        this.AppPkgName = null;

        /**
         * app的版本号
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * app的md5
         * @type {string || null}
         */
        this.AppMd5 = null;

        /**
         * app的大小
         * @type {number || null}
         */
        this.AppSize = null;

        /**
         * 扫描结果返回码
         * @type {number || null}
         */
        this.ScanCode = null;

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 提交扫描时间
         * @type {number || null}
         */
        this.TaskTime = null;

        /**
         * app的图标url
         * @type {string || null}
         */
        this.AppIconUrl = null;

        /**
         * 标识唯一该app，主要用于删除
         * @type {string || null}
         */
        this.AppSid = null;

        /**
         * 安全类型:1-安全软件，2-风险软件，3病毒软件
         * @type {number || null}
         */
        this.SafeType = null;

        /**
         * 漏洞个数
         * @type {number || null}
         */
        this.VulCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = params.ItemId || null;
        this.AppName = params.AppName || null;
        this.AppPkgName = params.AppPkgName || null;
        this.AppVersion = params.AppVersion || null;
        this.AppMd5 = params.AppMd5 || null;
        this.AppSize = params.AppSize || null;
        this.ScanCode = params.ScanCode || null;
        this.TaskStatus = params.TaskStatus || null;
        this.TaskTime = params.TaskTime || null;
        this.AppIconUrl = params.AppIconUrl || null;
        this.AppSid = params.AppSid || null;
        this.SafeType = params.SafeType || null;
        this.VulCount = params.VulCount || null;

    }
}

/**
 * CreateShieldInstance返回参数结构体
 * @class
 */
class CreateShieldInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.Progress = params.Progress || null;
        this.ItemId = params.ItemId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteShieldInstances请求参数结构体
 * @class
 */
class DeleteShieldInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识ItemId的列表
         * @type {Array.<string> || null}
         */
        this.ItemIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemIds = params.ItemIds || null;

    }
}

/**
 * DescribeShieldInstances请求参数结构体
 * @class
 */
class DescribeShieldInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持通过app名称，app包名，加固的服务版本，提交的渠道进行筛选。
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
         * @type {Array.<string> || null}
         */
        this.ItemIds = null;

        /**
         * 按某个字段排序，目前仅支持TaskTime排序。
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 升序（asc）还是降序（desc），默认：desc。
         * @type {string || null}
         */
        this.OrderDirection = null;

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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.ItemIds = params.ItemIds || null;
        this.OrderField = params.OrderField || null;
        this.OrderDirection = params.OrderDirection || null;

    }
}

/**
 * CreateScanInstances返回参数结构体
 * @class
 */
class CreateScanInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 提交成功的app的md5集合
         * @type {Array.<string> || null}
         */
        this.AppMd5s = null;

        /**
         * 剩余可用次数
         * @type {number || null}
         */
        this.LimitCount = null;

        /**
         * 到期时间
         * @type {number || null}
         */
        this.LimitTime = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.ItemId = params.ItemId || null;
        this.Progress = params.Progress || null;
        this.AppMd5s = params.AppMd5s || null;
        this.LimitCount = params.LimitCount || null;
        this.LimitTime = params.LimitTime || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeScanInstances返回参数结构体
 * @class
 */
class DescribeScanInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的app数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 一个关于app详细信息的结构体，主要包括app的基本信息和扫描状态信息。
         * @type {Array.<AppScanSet> || null}
         */
        this.ScanSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TotalCount = params.TotalCount || null;

        if (params.ScanSet) {
            this.ScanSet = new Array();
            for (let z in params.ScanSet) {
                let obj = new AppScanSet();
                obj.deserialize(params.ScanSet[z]);
                this.ScanSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 提交的app基本信息
 * @class
 */
class AppInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * app的url，必须保证不用权限校验就可以下载
         * @type {string || null}
         */
        this.AppUrl = null;

        /**
         * app的md5
         * @type {string || null}
         */
        this.AppMd5 = null;

        /**
         * app的大小
         * @type {number || null}
         */
        this.AppSize = null;

        /**
         * app的文件名，指定后加固后的文件名是{FileName}_legu.apk
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * app的包名
         * @type {string || null}
         */
        this.AppPkgName = null;

        /**
         * app的版本号
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * app的图标url
         * @type {string || null}
         */
        this.AppIconUrl = null;

        /**
         * app的名称
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppUrl = params.AppUrl || null;
        this.AppMd5 = params.AppMd5 || null;
        this.AppSize = params.AppSize || null;
        this.FileName = params.FileName || null;
        this.AppPkgName = params.AppPkgName || null;
        this.AppVersion = params.AppVersion || null;
        this.AppIconUrl = params.AppIconUrl || null;
        this.AppName = params.AppName || null;

    }
}

/**
 * DescribeShieldResult返回参数结构体
 * @class
 */
class DescribeShieldResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * app加固前的详细信息
         * @type {AppDetailInfo || null}
         */
        this.AppDetailInfo = null;

        /**
         * app加固后的详细信息
         * @type {ShieldInfo || null}
         */
        this.ShieldInfo = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TaskStatus = params.TaskStatus || null;

        if (params.AppDetailInfo) {
            let obj = new AppDetailInfo();
            obj.deserialize(params.AppDetailInfo)
            this.AppDetailInfo = obj;
        }

        if (params.ShieldInfo) {
            let obj = new ShieldInfo();
            obj.deserialize(params.ShieldInfo)
            this.ShieldInfo = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 提交app加固的服务信息
 * @class
 */
class ServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务版本，基础版basic,专业版Professional
         * @type {string || null}
         */
        this.ServiceEdition = null;

        /**
         * 任务处理完成后的反向通知回调地址,通知为POST请求，post信息{ItemId:"xxxduuyt-ugusg"}
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 提交来源 YYB-应用宝 RDM-rdm MC-控制台 MAC_TOOL-mac工具 WIN_TOOL-window工具
         * @type {string || null}
         */
        this.SubmitSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceEdition = params.ServiceEdition || null;
        this.CallbackUrl = params.CallbackUrl || null;
        this.SubmitSource = params.SubmitSource || null;

    }
}

/**
 * 漏洞信息
 * @class
 */
class VulInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞列表
         * @type {Array.<VulList> || null}
         */
        this.VulList = null;

        /**
         * 漏洞文件评分
         * @type {number || null}
         */
        this.VulFileScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VulList) {
            this.VulList = new Array();
            for (let z in params.VulList) {
                let obj = new VulList();
                obj.deserialize(params.VulList[z]);
                this.VulList.push(obj);
            }
        }
        this.VulFileScore = params.VulFileScore || null;

    }
}

/**
 * 广告信息
 * @class
 */
class AdInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 插播广告列表
         * @type {Array.<PluginInfo> || null}
         */
        this.Spots = null;

        /**
         * 精品推荐广告列表
         * @type {Array.<PluginInfo> || null}
         */
        this.BoutiqueRecommands = null;

        /**
         * 悬浮窗广告列表
         * @type {Array.<PluginInfo> || null}
         */
        this.FloatWindowses = null;

        /**
         * banner广告列表
         * @type {Array.<PluginInfo> || null}
         */
        this.Banners = null;

        /**
         * 积分墙广告列表
         * @type {Array.<PluginInfo> || null}
         */
        this.IntegralWalls = null;

        /**
         * 通知栏广告列表
         * @type {Array.<PluginInfo> || null}
         */
        this.NotifyBars = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Spots) {
            this.Spots = new Array();
            for (let z in params.Spots) {
                let obj = new PluginInfo();
                obj.deserialize(params.Spots[z]);
                this.Spots.push(obj);
            }
        }

        if (params.BoutiqueRecommands) {
            this.BoutiqueRecommands = new Array();
            for (let z in params.BoutiqueRecommands) {
                let obj = new PluginInfo();
                obj.deserialize(params.BoutiqueRecommands[z]);
                this.BoutiqueRecommands.push(obj);
            }
        }

        if (params.FloatWindowses) {
            this.FloatWindowses = new Array();
            for (let z in params.FloatWindowses) {
                let obj = new PluginInfo();
                obj.deserialize(params.FloatWindowses[z]);
                this.FloatWindowses.push(obj);
            }
        }

        if (params.Banners) {
            this.Banners = new Array();
            for (let z in params.Banners) {
                let obj = new PluginInfo();
                obj.deserialize(params.Banners[z]);
                this.Banners.push(obj);
            }
        }

        if (params.IntegralWalls) {
            this.IntegralWalls = new Array();
            for (let z in params.IntegralWalls) {
                let obj = new PluginInfo();
                obj.deserialize(params.IntegralWalls[z]);
                this.IntegralWalls.push(obj);
            }
        }

        if (params.NotifyBars) {
            this.NotifyBars = new Array();
            for (let z in params.NotifyBars) {
                let obj = new PluginInfo();
                obj.deserialize(params.NotifyBars[z]);
                this.NotifyBars.push(obj);
            }
        }

    }
}

/**
 * 漏洞信息
 * @class
 */
class VulList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞id
         * @type {string || null}
         */
        this.VulId = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.VulName = null;

        /**
         * 漏洞代码
         * @type {string || null}
         */
        this.VulCode = null;

        /**
         * 漏洞描述
         * @type {string || null}
         */
        this.VulDesc = null;

        /**
         * 漏洞解决方案
         * @type {string || null}
         */
        this.VulSolution = null;

        /**
         * 漏洞来源类别，0默认自身，1第三方插件
         * @type {number || null}
         */
        this.VulSrcType = null;

        /**
         * 漏洞位置
         * @type {string || null}
         */
        this.VulFilepath = null;

        /**
         * 风险级别：1 低风险 ；2中等风险；3 高风险
         * @type {number || null}
         */
        this.RiskLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulId = params.VulId || null;
        this.VulName = params.VulName || null;
        this.VulCode = params.VulCode || null;
        this.VulDesc = params.VulDesc || null;
        this.VulSolution = params.VulSolution || null;
        this.VulSrcType = params.VulSrcType || null;
        this.VulFilepath = params.VulFilepath || null;
        this.RiskLevel = params.RiskLevel || null;

    }
}

/**
 * 加固后app的信息
 * @class
 */
class ShieldInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加固结果的返回码
         * @type {number || null}
         */
        this.ShieldCode = null;

        /**
         * 加固后app的大小
         * @type {number || null}
         */
        this.ShieldSize = null;

        /**
         * 加固后app的md5
         * @type {string || null}
         */
        this.ShieldMd5 = null;

        /**
         * 加固后的APP下载地址
         * @type {string || null}
         */
        this.AppUrl = null;

        /**
         * 加固的提交时间
         * @type {number || null}
         */
        this.TaskTime = null;

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShieldCode = params.ShieldCode || null;
        this.ShieldSize = params.ShieldSize || null;
        this.ShieldMd5 = params.ShieldMd5 || null;
        this.AppUrl = params.AppUrl || null;
        this.TaskTime = params.TaskTime || null;
        this.ItemId = params.ItemId || null;

    }
}

/**
 * app的详细基础信息
 * @class
 */
class AppDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * app的名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * app的包名
         * @type {string || null}
         */
        this.AppPkgName = null;

        /**
         * app的版本号
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * app的大小
         * @type {number || null}
         */
        this.AppSize = null;

        /**
         * app的md5
         * @type {string || null}
         */
        this.AppMd5 = null;

        /**
         * app的图标url
         * @type {string || null}
         */
        this.AppIconUrl = null;

        /**
         * app的文件名称
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.AppPkgName = params.AppPkgName || null;
        this.AppVersion = params.AppVersion || null;
        this.AppSize = params.AppSize || null;
        this.AppMd5 = params.AppMd5 || null;
        this.AppIconUrl = params.AppIconUrl || null;
        this.FileName = params.FileName || null;

    }
}

/**
 * DeleteScanInstances返回参数结构体
 * @class
 */
class DeleteScanInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.Progress = params.Progress || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteShieldInstances返回参数结构体
 * @class
 */
class DeleteShieldInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态: 1-已完成,2-处理中,3-处理出错,4-处理超时
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.Progress = params.Progress || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeScanInstances请求参数结构体
 * @class
 */
class DescribeScanInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持通过app名称，app包名进行筛选
         * @type {Array.<Filters> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 可以提供ItemId数组来查询一个或者多个结果。注意不可以同时指定ItemIds和Filters。
         * @type {Array.<string> || null}
         */
        this.ItemIds = null;

        /**
         * 按某个字段排序，目前仅支持TaskTime排序。
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 升序（asc）还是降序（desc），默认：desc。
         * @type {string || null}
         */
        this.OrderDirection = null;

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
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.ItemIds = params.ItemIds || null;
        this.OrderField = params.OrderField || null;
        this.OrderDirection = params.OrderDirection || null;

    }
}

/**
 * DescribeScanResults请求参数结构体
 * @class
 */
class DescribeScanResultsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务唯一标识
         * @type {string || null}
         */
        this.ItemId = null;

        /**
         * 批量查询一个或者多个app的扫描结果，如果不传表示查询该任务下所提交的所有app
         * @type {Array.<string> || null}
         */
        this.AppMd5s = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ItemId = params.ItemId || null;
        this.AppMd5s = params.AppMd5s || null;

    }
}

/**
 * CreateScanInstances请求参数结构体
 * @class
 */
class CreateScanInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待扫描的app信息列表，一次最多提交20个
         * @type {Array.<AppInfo> || null}
         */
        this.AppInfos = null;

        /**
         * 扫描信息
         * @type {ScanInfo || null}
         */
        this.ScanInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppInfos) {
            this.AppInfos = new Array();
            for (let z in params.AppInfos) {
                let obj = new AppInfo();
                obj.deserialize(params.AppInfos[z]);
                this.AppInfos.push(obj);
            }
        }

        if (params.ScanInfo) {
            let obj = new ScanInfo();
            obj.deserialize(params.ScanInfo)
            this.ScanInfo = obj;
        }

    }
}

/**
 * 筛选数据结构
 * @class
 */
class Filters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 需要过滤字段的值
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = params.Name || null;
        this.Value = params.Value || null;

    }
}

/**
 * DeleteScanInstances请求参数结构体
 * @class
 */
class DeleteScanInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除一个或多个扫描的app，最大支持20个
         * @type {Array.<string> || null}
         */
        this.AppSids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppSids = params.AppSids || null;

    }
}

module.exports = {
    AppSetInfo: AppSetInfo,
    ScanInfo: ScanInfo,
    DescribeShieldInstancesResponse: DescribeShieldInstancesResponse,
    PluginInfo: PluginInfo,
    DescribeShieldResultRequest: DescribeShieldResultRequest,
    CreateShieldInstanceRequest: CreateShieldInstanceRequest,
    DescribeScanResultsResponse: DescribeScanResultsResponse,
    VirusInfo: VirusInfo,
    ScanSetInfo: ScanSetInfo,
    AppScanSet: AppScanSet,
    CreateShieldInstanceResponse: CreateShieldInstanceResponse,
    DeleteShieldInstancesRequest: DeleteShieldInstancesRequest,
    DescribeShieldInstancesRequest: DescribeShieldInstancesRequest,
    CreateScanInstancesResponse: CreateScanInstancesResponse,
    DescribeScanInstancesResponse: DescribeScanInstancesResponse,
    AppInfo: AppInfo,
    DescribeShieldResultResponse: DescribeShieldResultResponse,
    ServiceInfo: ServiceInfo,
    VulInfo: VulInfo,
    AdInfo: AdInfo,
    VulList: VulList,
    ShieldInfo: ShieldInfo,
    AppDetailInfo: AppDetailInfo,
    DeleteScanInstancesResponse: DeleteScanInstancesResponse,
    DeleteShieldInstancesResponse: DeleteShieldInstancesResponse,
    DescribeScanInstancesRequest: DescribeScanInstancesRequest,
    DescribeScanResultsRequest: DescribeScanResultsRequest,
    CreateScanInstancesRequest: CreateScanInstancesRequest,
    Filters: Filters,
    DeleteScanInstancesRequest: DeleteScanInstancesRequest,

}
