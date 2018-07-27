const AbstractModel = require("../../common/abstract_model");

/**
 * DescribePersonVisitInfo请求参数结构体
 * @class
 */
class DescribePersonVisitInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 开始日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribeZoneTrafficInfo返回参数结构体
 * @class
 */
class DescribeZoneTrafficInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 查询结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 区域客流信息列表
         * @type {Array.<ZoneTrafficInfo> || null}
         */
        this.ZoneTrafficInfoSet = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.TotalCount = params.TotalCount || null;

        if (params.ZoneTrafficInfoSet) {
            this.ZoneTrafficInfoSet = new Array();
            for (let z in params.ZoneTrafficInfoSet) {
                let obj = new ZoneTrafficInfo();
                obj.deserialize(params.ZoneTrafficInfoSet[z]);
                this.ZoneTrafficInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 分时客流量详细信息
 * @class
 */
class HourTrafficInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小时 取值为：0，1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20，21，22，23
         * @type {number || null}
         */
        this.Hour = null;

        /**
         * 分时客流量
         * @type {number || null}
         */
        this.HourTrafficTotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hour = params.Hour || null;
        this.HourTrafficTotalCount = params.HourTrafficTotalCount || null;

    }
}

/**
 * 门店区域客流信息
 * @class
 */
class ZoneTrafficInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 门店区域客流详细信息
         * @type {Array.<ZoneTrafficInfoDetail> || null}
         */
        this.ZoneTrafficInfoDetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = params.Date || null;

        if (params.ZoneTrafficInfoDetailSet) {
            this.ZoneTrafficInfoDetailSet = new Array();
            for (let z in params.ZoneTrafficInfoDetailSet) {
                let obj = new ZoneTrafficInfoDetail();
                obj.deserialize(params.ZoneTrafficInfoDetailSet[z]);
                this.ZoneTrafficInfoDetailSet.push(obj);
            }
        }

    }
}

/**
 * DescribePersonInfo返回参数结构体
 * @class
 */
class DescribePersonInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户信息
         * @type {Array.<PersonInfo> || null}
         */
        this.PersonInfoSet = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.TotalCount = params.TotalCount || null;

        if (params.PersonInfoSet) {
            this.PersonInfoSet = new Array();
            for (let z in params.PersonInfoSet) {
                let obj = new PersonInfo();
                obj.deserialize(params.PersonInfoSet[z]);
                this.PersonInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeShopTrafficInfo请求参数结构体
 * @class
 */
class DescribeShopTrafficInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 开始日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 介绍日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribeShopInfo返回参数结构体
 * @class
 */
class DescribeShopInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 门店总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 门店列表信息
         * @type {Array.<ShopInfo> || null}
         */
        this.ShopInfoSet = null;

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

        if (params.ShopInfoSet) {
            this.ShopInfoSet = new Array();
            for (let z in params.ShopInfoSet) {
                let obj = new ShopInfo();
                obj.deserialize(params.ShopInfoSet[z]);
                this.ShopInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeZoneTrafficInfo请求参数结构体
 * @class
 */
class DescribeZoneTrafficInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 开始日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * RegisterCallback请求参数结构体
 * @class
 */
class RegisterCallbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 通知回调地址，完整url，示例（http://youmall.tencentcloudapi.com/）
         * @type {string || null}
         */
        this.BackUrl = null;

        /**
         * 请求时间戳
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 是否需要顾客图片，1-需要图片，其它-不需要图片
         * @type {number || null}
         */
        this.NeedFacePic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = params.CompanyId || null;
        this.BackUrl = params.BackUrl || null;
        this.Time = params.Time || null;
        this.NeedFacePic = params.NeedFacePic || null;

    }
}

/**
 * 用户到访明细
 * @class
 */
class PersonVisitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {number || null}
         */
        this.PersonId = null;

        /**
         * 用户到访ID
         * @type {number || null}
         */
        this.VisitId = null;

        /**
         * 到访时间：Unix时间戳
         * @type {number || null}
         */
        this.InTime = null;

        /**
         * 抓拍到的头像，这里返回的是图片内容的Base64编码
         * @type {string || null}
         */
        this.CapturedPicture = null;

        /**
         * 口罩类型：0不戴口罩，1戴口罩
         * @type {number || null}
         */
        this.MaskType = null;

        /**
         * 眼镜类型：0不戴眼镜，1普通眼镜 , 2墨镜
         * @type {number || null}
         */
        this.GlassType = null;

        /**
         * 发型：0 短发,  1长发
         * @type {number || null}
         */
        this.HairType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = params.PersonId || null;
        this.VisitId = params.VisitId || null;
        this.InTime = params.InTime || null;
        this.CapturedPicture = params.CapturedPicture || null;
        this.MaskType = params.MaskType || null;
        this.GlassType = params.GlassType || null;
        this.HairType = params.HairType || null;

    }
}

/**
 * DescribeShopInfo请求参数结构体
 * @class
 */
class DescribeShopInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribePersonInfo请求参数结构体
 * @class
 */
class DescribePersonInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 起始ID，第一次拉取时StartPersonId传0，后续送入的值为上一页最后一条数据项的PersonId
         * @type {number || null}
         */
        this.StartPersonId = null;

        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartPersonId = params.StartPersonId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * 门店区域客流详细信息
 * @class
 */
class ZoneTrafficInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 客流量
         * @type {number || null}
         */
        this.TrafficTotalCount = null;

        /**
         * 平均停留时间
         * @type {number || null}
         */
        this.AvgStayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;
        this.TrafficTotalCount = params.TrafficTotalCount || null;
        this.AvgStayTime = params.AvgStayTime || null;

    }
}

/**
 * 客户所属的门店信息
 * @class
 */
class ShopInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 门店名称
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 客户门店编码
         * @type {string || null}
         */
        this.ShopCode = null;

        /**
         * 省
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 公司名称
         * @type {string || null}
         */
        this.CompanyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.ShopName = params.ShopName || null;
        this.ShopCode = params.ShopCode || null;
        this.Province = params.Province || null;
        this.City = params.City || null;
        this.CompanyName = params.CompanyName || null;

    }
}

/**
 * 用户信息
 * @class
 */
class PersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {number || null}
         */
        this.PersonId = null;

        /**
         * 人脸图片，这里返回的是图片内容的Base64编码
         * @type {string || null}
         */
        this.PersonPicture = null;

        /**
         * 性别：0男1女
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 年龄
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 身份类型：0-普通顾客，1~10黑名单，11~20白名单，11店员
         * @type {number || null}
         */
        this.PersonType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = params.PersonId || null;
        this.PersonPicture = params.PersonPicture || null;
        this.Gender = params.Gender || null;
        this.Age = params.Age || null;
        this.PersonType = params.PersonType || null;

    }
}

/**
 * DescribeShopHourTrafficInfo请求参数结构体
 * @class
 */
class DescribeShopHourTrafficInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 开始日期，格式：yyyy-MM-dd
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期，格式：yyyy-MM-dd
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * 分时客流量信息
 * @class
 */
class ShopHourTrafficInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 分时客流详细信息
         * @type {Array.<HourTrafficInfoDetail> || null}
         */
        this.HourTrafficInfoDetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = params.Date || null;

        if (params.HourTrafficInfoDetailSet) {
            this.HourTrafficInfoDetailSet = new Array();
            for (let z in params.HourTrafficInfoDetailSet) {
                let obj = new HourTrafficInfoDetail();
                obj.deserialize(params.HourTrafficInfoDetailSet[z]);
                this.HourTrafficInfoDetailSet.push(obj);
            }
        }

    }
}

/**
 * DescribeShopHourTrafficInfo返回参数结构体
 * @class
 */
class DescribeShopHourTrafficInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 查询结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 分时客流信息
         * @type {Array.<ShopHourTrafficInfo> || null}
         */
        this.ShopHourTrafficInfoSet = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.TotalCount = params.TotalCount || null;

        if (params.ShopHourTrafficInfoSet) {
            this.ShopHourTrafficInfoSet = new Array();
            for (let z in params.ShopHourTrafficInfoSet) {
                let obj = new ShopHourTrafficInfo();
                obj.deserialize(params.ShopHourTrafficInfoSet[z]);
                this.ShopHourTrafficInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribePersonVisitInfo返回参数结构体
 * @class
 */
class DescribePersonVisitInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 用户到访明细
         * @type {Array.<PersonVisitInfo> || null}
         */
        this.PersonVisitInfoSet = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.TotalCount = params.TotalCount || null;

        if (params.PersonVisitInfoSet) {
            this.PersonVisitInfoSet = new Array();
            for (let z in params.PersonVisitInfoSet) {
                let obj = new PersonVisitInfo();
                obj.deserialize(params.PersonVisitInfoSet[z]);
                this.PersonVisitInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * RegisterCallback返回参数结构体
 * @class
 */
class RegisterCallbackResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 性别年龄分组下的客流信息
 * @class
 */
class GenderAgeTrafficDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 性别: 0男1女
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 年龄区间，枚举值：0-17、18-23、24-30、31-40、41-50、51-60、>60
         * @type {string || null}
         */
        this.AgeGap = null;

        /**
         * 客流量
         * @type {number || null}
         */
        this.TrafficCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = params.Gender || null;
        this.AgeGap = params.AgeGap || null;
        this.TrafficCount = params.TrafficCount || null;

    }
}

/**
 * DescribeShopTrafficInfo返回参数结构体
 * @class
 */
class DescribeShopTrafficInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 查询结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 客流信息列表
         * @type {Array.<ShopDayTrafficInfo> || null}
         */
        this.ShopDayTrafficInfoSet = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.TotalCount = params.TotalCount || null;

        if (params.ShopDayTrafficInfoSet) {
            this.ShopDayTrafficInfoSet = new Array();
            for (let z in params.ShopDayTrafficInfoSet) {
                let obj = new ShopDayTrafficInfo();
                obj.deserialize(params.ShopDayTrafficInfoSet[z]);
                this.ShopDayTrafficInfoSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 门店客流量列表信息
 * @class
 */
class ShopDayTrafficInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 客流量
         * @type {number || null}
         */
        this.DayTrafficTotalCount = null;

        /**
         * 性别年龄分组下的客流信息
         * @type {Array.<GenderAgeTrafficDetail> || null}
         */
        this.GenderAgeTrafficDetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = params.Date || null;
        this.DayTrafficTotalCount = params.DayTrafficTotalCount || null;

        if (params.GenderAgeTrafficDetailSet) {
            this.GenderAgeTrafficDetailSet = new Array();
            for (let z in params.GenderAgeTrafficDetailSet) {
                let obj = new GenderAgeTrafficDetail();
                obj.deserialize(params.GenderAgeTrafficDetailSet[z]);
                this.GenderAgeTrafficDetailSet.push(obj);
            }
        }

    }
}

module.exports = {
    DescribePersonVisitInfoRequest: DescribePersonVisitInfoRequest,
    DescribeZoneTrafficInfoResponse: DescribeZoneTrafficInfoResponse,
    HourTrafficInfoDetail: HourTrafficInfoDetail,
    ZoneTrafficInfo: ZoneTrafficInfo,
    DescribePersonInfoResponse: DescribePersonInfoResponse,
    DescribeShopTrafficInfoRequest: DescribeShopTrafficInfoRequest,
    DescribeShopInfoResponse: DescribeShopInfoResponse,
    DescribeZoneTrafficInfoRequest: DescribeZoneTrafficInfoRequest,
    RegisterCallbackRequest: RegisterCallbackRequest,
    PersonVisitInfo: PersonVisitInfo,
    DescribeShopInfoRequest: DescribeShopInfoRequest,
    DescribePersonInfoRequest: DescribePersonInfoRequest,
    ZoneTrafficInfoDetail: ZoneTrafficInfoDetail,
    ShopInfo: ShopInfo,
    PersonInfo: PersonInfo,
    DescribeShopHourTrafficInfoRequest: DescribeShopHourTrafficInfoRequest,
    ShopHourTrafficInfo: ShopHourTrafficInfo,
    DescribeShopHourTrafficInfoResponse: DescribeShopHourTrafficInfoResponse,
    DescribePersonVisitInfoResponse: DescribePersonVisitInfoResponse,
    RegisterCallbackResponse: RegisterCallbackResponse,
    GenderAgeTrafficDetail: GenderAgeTrafficDetail,
    DescribeShopTrafficInfoResponse: DescribeShopTrafficInfoResponse,
    ShopDayTrafficInfo: ShopDayTrafficInfo,

}
