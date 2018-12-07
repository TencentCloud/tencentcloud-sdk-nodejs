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
 * DescribeClusterPersonArrivedMall返回参数结构体
 * @class
 */
class DescribeClusterPersonArrivedMallResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场系统编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 卖场客户编码
         * @type {string || null}
         */
        this.MallCode = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 到场信息
         * @type {Array.<ArrivedMallInfo> || null}
         */
        this.ArrivedMallSet = null;

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
        this.MallId = params.MallId || null;
        this.MallCode = params.MallCode || null;
        this.PersonId = params.PersonId || null;

        if (params.ArrivedMallSet) {
            this.ArrivedMallSet = new Array();
            for (let z in params.ArrivedMallSet) {
                let obj = new ArrivedMallInfo();
                obj.deserialize(params.ArrivedMallSet[z]);
                this.ArrivedMallSet.push(obj);
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
 * DescribeZoneFlowAndStayTime返回参数结构体
 * @class
 */
class DescribeZoneFlowAndStayTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 各区域人流数目和停留时长
         * @type {Array.<ZoneFlowAndAvrStayTime> || null}
         */
        this.Data = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneFlowAndAvrStayTime();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribePersonArrivedMall返回参数结构体
 * @class
 */
class DescribePersonArrivedMallResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场系统编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 卖场用户编码
         * @type {string || null}
         */
        this.MallCode = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 到场轨迹
         * @type {Array.<ArrivedMallInfo> || null}
         */
        this.ArrivedMallSet = null;

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
        this.MallId = params.MallId || null;
        this.MallCode = params.MallCode || null;
        this.PersonId = params.PersonId || null;

        if (params.ArrivedMallSet) {
            this.ArrivedMallSet = new Array();
            for (let z in params.ArrivedMallSet) {
                let obj = new ArrivedMallInfo();
                obj.deserialize(params.ArrivedMallSet[z]);
                this.ArrivedMallSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyPersonType返回参数结构体
 * @class
 */
class ModifyPersonTypeResponse extends  AbstractModel {
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
 * DescribeZoneFlowDailyByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowDailyByZoneIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

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
         * 每日人流量
         * @type {Array.<ZoneDayFlow> || null}
         */
        this.Data = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneDayFlow();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeZoneFlowAgeInfoByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowAgeInfoByZoneIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

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
         * 当前年龄段占比
         * @type {Array.<number> || null}
         */
        this.Data = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;
        this.Data = params.Data || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeClusterPersonTrace返回参数结构体
 * @class
 */
class DescribeClusterPersonTraceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场系统编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 卖场用户编码
         * @type {string || null}
         */
        this.MallCode = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 轨迹序列
         * @type {Array.<DailyTracePoint> || null}
         */
        this.TracePointSet = null;

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
        this.MallId = params.MallId || null;
        this.MallCode = params.MallCode || null;
        this.PersonId = params.PersonId || null;

        if (params.TracePointSet) {
            this.TracePointSet = new Array();
            for (let z in params.TracePointSet) {
                let obj = new DailyTracePoint();
                obj.deserialize(params.TracePointSet[z]);
                this.TracePointSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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

        /**
         * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
         * @type {number || null}
         */
        this.PictureExpires = null;

        /**
         * 身份类型(0表示普通顾客，1 白名单，2 表示黑名单）
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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartPersonId = params.StartPersonId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.PictureExpires = params.PictureExpires || null;
        this.PersonType = params.PersonType || null;

    }
}

/**
 * DescribePersonInfoByFacePicture返回参数结构体
 * @class
 */
class DescribePersonInfoByFacePictureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 顾客face id
         * @type {number || null}
         */
        this.PersonId = null;

        /**
         * 顾客底图url
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 顾客类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
         * @type {number || null}
         */
        this.PersonType = null;

        /**
         * 顾客首次进店时间
         * @type {string || null}
         */
        this.FirstVisitTime = null;

        /**
         * 顾客历史到访次数
         * @type {number || null}
         */
        this.VisitTimes = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.PersonId = params.PersonId || null;
        this.PictureUrl = params.PictureUrl || null;
        this.PersonType = params.PersonType || null;
        this.FirstVisitTime = params.FirstVisitTime || null;
        this.VisitTimes = params.VisitTimes || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribePersonTraceDetail请求参数结构体
 * @class
 */
class DescribePersonTraceDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 轨迹编码
         * @type {string || null}
         */
        this.TraceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = params.MallId || null;
        this.PersonId = params.PersonId || null;
        this.TraceId = params.TraceId || null;

    }
}

/**
 * CreateAccount请求参数结构体
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 账号名；需要是手机号
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 密码；需要是(`~!@#$%^&*()_+=-）中的至少两种且八位以上
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 客户门店编码
         * @type {string || null}
         */
        this.ShopCode = null;

        /**
         * 备注说明; 30个字符以内
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = params.CompanyId || null;
        this.Name = params.Name || null;
        this.Password = params.Password || null;
        this.ShopCode = params.ShopCode || null;
        this.Remark = params.Remark || null;

    }
}

/**
 * 获取当前门店最新网络状态数据返回结构
 * @class
 */
class NetworkLastInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 网络状态
         * @type {Array.<NetworkAndShopInfo> || null}
         */
        this.Infos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = params.Count || null;

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new NetworkAndShopInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }

    }
}

/**
 * DescribeZoneFlowGenderAvrStayTimeByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

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
         * 不同年龄段男女停留时间（返回格式为数组，从第 1 个到最后一个数据，年龄段分别为 0-17，18 - 23,  24 - 30, 31 - 40, 41 - 50, 51 - 60, 61 - 100）
         * @type {Array.<ZoneAgeGroupAvrStayTime> || null}
         */
        this.Data = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneAgeGroupAvrStayTime();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeletePersonFeature返回参数结构体
 * @class
 */
class DeletePersonFeatureResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeCameraPerson返回参数结构体
 * @class
 */
class DescribeCameraPersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 摄像机id
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * pos机id
         * @type {string || null}
         */
        this.PosId = null;

        /**
         * 抓取的顾客信息
         * @type {Array.<CameraPersonInfo> || null}
         */
        this.Infos = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.CameraId = params.CameraId || null;
        this.PosId = params.PosId || null;

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new CameraPersonInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyPersonTagInfo返回参数结构体
 * @class
 */
class ModifyPersonTagInfoResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

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
 * RegisterCallback返回参数结构体
 * @class
 */
class RegisterCallbackResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 没有店铺信息的网络状态
 * @class
 */
class NetworkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 上传带宽，单位Mb/s，-1：未知
         * @type {number || null}
         */
        this.Upload = null;

        /**
         * 下载带宽，单位Mb/s，-1：未知
         * @type {number || null}
         */
        this.Download = null;

        /**
         * 最小延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.MinRtt = null;

        /**
         * 平均延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.AvgRtt = null;

        /**
         * 最大延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.MaxRtt = null;

        /**
         * 平均偏差延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.MdevRtt = null;

        /**
         * 丢包率百分比，-1：未知
         * @type {number || null}
         */
        this.Loss = null;

        /**
         * 更新时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 上报网络状态设备
         * @type {string || null}
         */
        this.Mac = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Upload = params.Upload || null;
        this.Download = params.Download || null;
        this.MinRtt = params.MinRtt || null;
        this.AvgRtt = params.AvgRtt || null;
        this.MaxRtt = params.MaxRtt || null;
        this.MdevRtt = params.MdevRtt || null;
        this.Loss = params.Loss || null;
        this.UpdateTime = params.UpdateTime || null;
        this.Mac = params.Mac || null;

    }
}

/**
 * DescribeClusterPersonArrivedMall请求参数结构体
 * @class
 */
class DescribeClusterPersonArrivedMallRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = params.MallId || null;
        this.PersonId = params.PersonId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * DescribeZoneFlowGenderInfoByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowGenderInfoByZoneIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

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
         * 男性占比
         * @type {number || null}
         */
        this.MalePercent = null;

        /**
         * 女性占比
         * @type {number || null}
         */
        this.FemalePercent = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;
        this.MalePercent = params.MalePercent || null;
        this.FemalePercent = params.FemalePercent || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeHistoryNetworkInfo请求参数结构体
 * @class
 */
class DescribeHistoryNetworkInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求时间戳
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 拉取开始日期，格式：2018-09-05
         * @type {string || null}
         */
        this.StartDay = null;

        /**
         * 拉取结束日期，格式L:2018-09-05，超过StartDay 90天，按StartDay+90天算
         * @type {string || null}
         */
        this.EndDay = null;

        /**
         * 拉取条数，默认10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 拉取偏移，返回offset之后的数据
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = params.Time || null;
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.StartDay = params.StartDay || null;
        this.EndDay = params.EndDay || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

    }
}

/**
 * DescribePersonTraceDetail返回参数结构体
 * @class
 */
class DescribePersonTraceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 轨迹编码
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 轨迹点坐标序列
         * @type {Array.<PersonCoordinate> || null}
         */
        this.CoordinateSet = null;

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
        this.MallId = params.MallId || null;
        this.PersonId = params.PersonId || null;
        this.TraceId = params.TraceId || null;

        if (params.CoordinateSet) {
            this.CoordinateSet = new Array();
            for (let z in params.CoordinateSet) {
                let obj = new PersonCoordinate();
                obj.deserialize(params.CoordinateSet[z]);
                this.CoordinateSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
         * 抓拍到的头像Base64内容，已弃用，返回默认空值
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

        /**
         * 抓拍到的头像Url，在有效期内可以访问下载
         * @type {string || null}
         */
        this.CapturedPictureUrl = null;

        /**
         * 抓拍头像的场景图信息
         * @type {SceneInfo || null}
         */
        this.SceneInfo = null;

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
        this.CapturedPictureUrl = params.CapturedPictureUrl || null;

        if (params.SceneInfo) {
            let obj = new SceneInfo();
            obj.deserialize(params.SceneInfo)
            this.SceneInfo = obj;
        }

    }
}

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
         * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit:每页的数据项，最大100，超过100会被强制指定为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 开始日期，格式yyyy-MM-dd，已废弃，请使用StartDateTime
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期，格式yyyy-MM-dd，已废弃，请使用EndDateTime
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
         * @type {number || null}
         */
        this.PictureExpires = null;

        /**
         * 开始时间，格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.StartDateTime = null;

        /**
         * 结束时间，格式yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.EndDateTime = null;

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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.PictureExpires = params.PictureExpires || null;
        this.StartDateTime = params.StartDateTime || null;
        this.EndDateTime = params.EndDateTime || null;

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
 * DeletePersonFeature请求参数结构体
 * @class
 */
class DeletePersonFeatureRequest extends  AbstractModel {
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
         * 顾客ID
         * @type {number || null}
         */
        this.PersonId = null;

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
        this.PersonId = params.PersonId || null;

    }
}

/**
 * DescribeFaceIdByTempId请求参数结构体
 * @class
 */
class DescribeFaceIdByTempIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 临时id
         * @type {string || null}
         */
        this.TempId = null;

        /**
         * 摄像头id
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * pos机id
         * @type {string || null}
         */
        this.PosId = null;

        /**
         * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
         * @type {number || null}
         */
        this.PictureExpires = null;

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
        this.TempId = params.TempId || null;
        this.CameraId = params.CameraId || null;
        this.PosId = params.PosId || null;
        this.PictureExpires = params.PictureExpires || null;

    }
}

/**
 * 来访客人基本资料
 * @class
 */
class PersonProfile extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客人编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 性别
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 年龄
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 首次到场时间
         * @type {string || null}
         */
        this.FirstArrivedTime = null;

        /**
         * 来访次数
         * @type {number || null}
         */
        this.ArrivedCount = null;

        /**
         * 客户图片
         * @type {string || null}
         */
        this.PicUrl = null;

        /**
         * 置信度
         * @type {number || null}
         */
        this.Similarity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = params.PersonId || null;
        this.Gender = params.Gender || null;
        this.Age = params.Age || null;
        this.FirstArrivedTime = params.FirstArrivedTime || null;
        this.ArrivedCount = params.ArrivedCount || null;
        this.PicUrl = params.PicUrl || null;
        this.Similarity = params.Similarity || null;

    }
}

/**
 * DescribePerson返回参数结构体
 * @class
 */
class DescribePersonResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总计客户数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 客户信息
         * @type {Array.<PersonProfile> || null}
         */
        this.PersonSet = null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new PersonProfile();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeTrajectoryData请求参数结构体
 * @class
 */
class DescribeTrajectoryDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
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
         * 限制返回数据的最大条数，最大 400（负数代为 400）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 顾客性别顾虑，0是男，1是女，其它代表不分性别
         * @type {number || null}
         */
        this.Gender = null;

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
        this.Limit = params.Limit || null;
        this.Gender = params.Gender || null;

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
 * DescribeZoneFlowGenderAvrStayTimeByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = params.ZoneId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

    }
}

/**
 * 客流停留统计子结构
 * @class
 */
class ZoneFlowAndAvrStayTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域id
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 人流量
         * @type {number || null}
         */
        this.FlowCount = null;

        /**
         * 平均停留时长
         * @type {number || null}
         */
        this.AvrStayTime = null;

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
        this.FlowCount = params.FlowCount || null;
        this.AvrStayTime = params.AvrStayTime || null;

    }
}

/**
 * 场景图信息
 * @class
 */
class SceneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景图
         * @type {string || null}
         */
        this.ScenePictureURL = null;

        /**
         * 抓拍头像左上角X坐标在场景图中的像素点位置
         * @type {number || null}
         */
        this.HeadX = null;

        /**
         * 抓拍头像左上角Y坐标在场景图中的像素点位置
         * @type {number || null}
         */
        this.HeadY = null;

        /**
         * 抓拍头像在场景图中占有的像素宽度
         * @type {number || null}
         */
        this.HeadWidth = null;

        /**
         * 抓拍头像在场景图中占有的像素高度
         * @type {number || null}
         */
        this.HeadHeight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScenePictureURL = params.ScenePictureURL || null;
        this.HeadX = params.HeadX || null;
        this.HeadY = params.HeadY || null;
        this.HeadWidth = params.HeadWidth || null;
        this.HeadHeight = params.HeadHeight || null;

    }
}

/**
 * 摄像头抓图人物属性
 * @class
 */
class CameraPersonInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时id，还未生成face id时返回
         * @type {string || null}
         */
        this.TempId = null;

        /**
         * 人脸face id
         * @type {number || null}
         */
        this.FaceId = null;

        /**
         * 确定当次返回的哪个id有效，1-FaceId，2-TempId
         * @type {number || null}
         */
        this.IdType = null;

        /**
         * 当次抓拍到的人脸图片base编码
         * @type {string || null}
         */
        this.FacePic = null;

        /**
         * 当次抓拍时间戳
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
        this.TempId = params.TempId || null;
        this.FaceId = params.FaceId || null;
        this.IdType = params.IdType || null;
        this.FacePic = params.FacePic || null;
        this.Time = params.Time || null;

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
 * DescribeNetworkInfo请求参数结构体
 * @class
 */
class DescribeNetworkInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求时间戳
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，不填则拉取集团全部店铺当前
         * @type {number || null}
         */
        this.ShopId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = params.Time || null;
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;

    }
}

/**
 * DescribeZoneFlowAndStayTime请求参数结构体
 * @class
 */
class DescribeZoneFlowAndStayTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
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

    }
}

/**
 * DescribeZoneFlowHourlyByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowHourlyByZoneIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = params.ZoneId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

    }
}

/**
 * DescribeFaceIdByTempId返回参数结构体
 * @class
 */
class DescribeFaceIdByTempIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 摄像机id
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * pos机id
         * @type {string || null}
         */
        this.PosId = null;

        /**
         * 请求的临时id
         * @type {string || null}
         */
        this.TempId = null;

        /**
         * 临时id对应的face id
         * @type {number || null}
         */
        this.FaceId = null;

        /**
         * 顾客属性信息
         * @type {PersonInfo || null}
         */
        this.PersonInfo = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.CameraId = params.CameraId || null;
        this.PosId = params.PosId || null;
        this.TempId = params.TempId || null;
        this.FaceId = params.FaceId || null;

        if (params.PersonInfo) {
            let obj = new PersonInfo();
            obj.deserialize(params.PersonInfo)
            this.PersonInfo = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 轨迹动线信息子结构
 * @class
 */
class TrajectorySunData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域动线，形如 x-x-x-x-x，其中 x 为区域 ID
         * @type {string || null}
         */
        this.Zones = null;

        /**
         * 该动线出现次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 该动线平均停留时间（秒）
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
        this.Zones = params.Zones || null;
        this.Count = params.Count || null;
        this.AvgStayTime = params.AvgStayTime || null;

    }
}

/**
 * ModifyPersonTagInfo请求参数结构体
 * @class
 */
class ModifyPersonTagInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 需要设置的顾客信息，批量设置最大为10个
         * @type {Array.<PersonTagInfo> || null}
         */
        this.Tags = null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new PersonTagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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

/**
 * DescribePerson请求参数结构体
 * @class
 */
class DescribePersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 查询偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询数量，默认20，最大查询数量100
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
        this.MallId = params.MallId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribePersonTrace返回参数结构体
 * @class
 */
class DescribePersonTraceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场系统编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 卖场用户编码
         * @type {string || null}
         */
        this.MallCode = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 轨迹列表
         * @type {Array.<PersonTraceRoute> || null}
         */
        this.TraceRouteSet = null;

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
        this.MallId = params.MallId || null;
        this.MallCode = params.MallCode || null;
        this.PersonId = params.PersonId || null;

        if (params.TraceRouteSet) {
            this.TraceRouteSet = new Array();
            for (let z in params.TraceRouteSet) {
                let obj = new PersonTraceRoute();
                obj.deserialize(params.TraceRouteSet[z]);
                this.TraceRouteSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 客户轨迹序列
 * @class
 */
class PersonTraceRoute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 轨迹编码
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 轨迹点序列
         * @type {Array.<PersonTracePoint> || null}
         */
        this.TracePointSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceId = params.TraceId || null;

        if (params.TracePointSet) {
            this.TracePointSet = new Array();
            for (let z in params.TracePointSet) {
                let obj = new PersonTracePoint();
                obj.deserialize(params.TracePointSet[z]);
                this.TracePointSet.push(obj);
            }
        }

    }
}

/**
 * 客户轨迹点
 * @class
 */
class PersonTracePoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场区域编码
         * @type {number || null}
         */
        this.MallAreaId = null;

        /**
         * 门店编码
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 卖场区域类型
         * @type {number || null}
         */
        this.MallAreaType = null;

        /**
         * 轨迹事件
         * @type {number || null}
         */
        this.TraceEventType = null;

        /**
         * 轨迹事件发生时间点
         * @type {string || null}
         */
        this.TraceEventTime = null;

        /**
         * 抓拍图片
         * @type {string || null}
         */
        this.CapPic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallAreaId = params.MallAreaId || null;
        this.ShopId = params.ShopId || null;
        this.MallAreaType = params.MallAreaType || null;
        this.TraceEventType = params.TraceEventType || null;
        this.TraceEventTime = params.TraceEventTime || null;
        this.CapPic = params.CapPic || null;

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
 * DescribeNetworkInfo返回参数结构体
 * @class
 */
class DescribeNetworkInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络状态详情
         * @type {NetworkLastInfo || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            let obj = new NetworkLastInfo();
            obj.deserialize(params.InstanceSet)
            this.InstanceSet = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 网络状态
 * @class
 */
class NetworkAndShopInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 店铺省份
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 店铺城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 店铺名
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 上传带宽，单位Mb/s，-1：未知
         * @type {number || null}
         */
        this.Upload = null;

        /**
         * 下载带宽，单位Mb/s，-1：未知
         * @type {number || null}
         */
        this.Download = null;

        /**
         * 最小延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.MinRtt = null;

        /**
         * 平均延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.AvgRtt = null;

        /**
         * 最大延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.MaxRtt = null;

        /**
         * 平均偏差延迟，单位ms，-1：未知
         * @type {number || null}
         */
        this.MdevRtt = null;

        /**
         * 丢包率百分比，-1：未知
         * @type {number || null}
         */
        this.Loss = null;

        /**
         * 更新时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 上报网络状态设备
         * @type {string || null}
         */
        this.Mac = null;

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
        this.Province = params.Province || null;
        this.City = params.City || null;
        this.ShopName = params.ShopName || null;
        this.Upload = params.Upload || null;
        this.Download = params.Download || null;
        this.MinRtt = params.MinRtt || null;
        this.AvgRtt = params.AvgRtt || null;
        this.MaxRtt = params.MaxRtt || null;
        this.MdevRtt = params.MdevRtt || null;
        this.Loss = params.Loss || null;
        this.UpdateTime = params.UpdateTime || null;
        this.Mac = params.Mac || null;

    }
}

/**
 * DescribeZoneFlowGenderInfoByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowGenderInfoByZoneIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = params.ZoneId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

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
 * 查询网络状态历史数据输出
 * @class
 */
class NetworkHistoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 集团id
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺id
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 店铺省份
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 店铺城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 店铺名称
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 网络信息
         * @type {Array.<NetworkInfo> || null}
         */
        this.Infos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = params.Count || null;
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.Province = params.Province || null;
        this.City = params.City || null;
        this.ShopName = params.ShopName || null;

        if (params.Infos) {
            this.Infos = new Array();
            for (let z in params.Infos) {
                let obj = new NetworkInfo();
                obj.deserialize(params.Infos[z]);
                this.Infos.push(obj);
            }
        }

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
         * 人脸图片Base64内容，已弃用，返回默认空值
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
         * 身份类型（0表示普通顾客，1 白名单，2 表示黑名单）
         * @type {number || null}
         */
        this.PersonType = null;

        /**
         * 人脸图片Url，在有效期内可以访问下载
         * @type {string || null}
         */
        this.PersonPictureUrl = null;

        /**
         * 身份子类型:
PersonType=0时(普通顾客)，0普通顾客
PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册用户，5VIP用户
PersonType=2时(黑名单)，0普通黑名单，1小偷)
         * @type {number || null}
         */
        this.PersonSubType = null;

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
        this.PersonPictureUrl = params.PersonPictureUrl || null;
        this.PersonSubType = params.PersonSubType || null;

    }
}

/**
 * 修改顾客属性参数
 * @class
 */
class PersonTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 顾客原类型
         * @type {number || null}
         */
        this.OldType = null;

        /**
         * 顾客新类型
         * @type {number || null}
         */
        this.NewType = null;

        /**
         * 顾客face id
         * @type {number || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldType = params.OldType || null;
        this.NewType = params.NewType || null;
        this.PersonId = params.PersonId || null;

    }
}

/**
 * 客流统计分时数据子结构
 * @class
 */
class ZoneHourFlow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分时 0~23
         * @type {number || null}
         */
        this.Hour = null;

        /**
         * 客流量
         * @type {number || null}
         */
        this.FlowCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hour = params.Hour || null;
        this.FlowCount = params.FlowCount || null;

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
 * DescribeClusterPersonTrace请求参数结构体
 * @class
 */
class DescribeClusterPersonTraceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = params.MallId || null;
        this.PersonId = params.PersonId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * 轨迹点坐标
 * @class
 */
class PersonCoordinate extends  AbstractModel {
    constructor(){
        super();

        /**
         * CAD图X坐标
         * @type {number || null}
         */
        this.CADX = null;

        /**
         * CAD图Y坐标
         * @type {number || null}
         */
        this.CADY = null;

        /**
         * 抓拍时间点
         * @type {string || null}
         */
        this.CapTime = null;

        /**
         * 抓拍图片
         * @type {string || null}
         */
        this.CapPic = null;

        /**
         * 卖场区域类型
         * @type {number || null}
         */
        this.MallAreaType = null;

        /**
         * 坐标编号
         * @type {number || null}
         */
        this.PosId = null;

        /**
         * 门店编号
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 事件
         * @type {string || null}
         */
        this.Event = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CADX = params.CADX || null;
        this.CADY = params.CADY || null;
        this.CapTime = params.CapTime || null;
        this.CapPic = params.CapPic || null;
        this.MallAreaType = params.MallAreaType || null;
        this.PosId = params.PosId || null;
        this.ShopId = params.ShopId || null;
        this.Event = params.Event || null;

    }
}

/**
 * 每日客流统计子结构
 * @class
 */
class ZoneDayFlow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日期，如 2018-08-6
         * @type {string || null}
         */
        this.Day = null;

        /**
         * 客流量
         * @type {number || null}
         */
        this.FlowCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Day = params.Day || null;
        this.FlowCount = params.FlowCount || null;

    }
}

/**
 * DescribePersonTrace请求参数结构体
 * @class
 */
class DescribePersonTraceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = params.MallId || null;
        this.PersonId = params.PersonId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * DescribeZoneFlowHourlyByZoneId返回参数结构体
 * @class
 */
class DescribeZoneFlowHourlyByZoneIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

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
         * 各个分时人流量
         * @type {Array.<ZoneHourFlow> || null}
         */
        this.Data = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ZoneHourFlow();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeZoneFlowDailyByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowDailyByZoneIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = params.ZoneId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

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
 * 客户天轨迹
 * @class
 */
class DailyTracePoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 轨迹日期
         * @type {string || null}
         */
        this.TraceDate = null;

        /**
         * 轨迹点序列
         * @type {Array.<PersonTracePoint> || null}
         */
        this.TracePointSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceDate = params.TraceDate || null;

        if (params.TracePointSet) {
            this.TracePointSet = new Array();
            for (let z in params.TracePointSet) {
                let obj = new PersonTracePoint();
                obj.deserialize(params.TracePointSet[z]);
                this.TracePointSet.push(obj);
            }
        }

    }
}

/**
 * CreateAccount返回参数结构体
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeHistoryNetworkInfo返回参数结构体
 * @class
 */
class DescribeHistoryNetworkInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络状态数据
         * @type {NetworkHistoryInfo || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            let obj = new NetworkHistoryInfo();
            obj.deserialize(params.InstanceSet)
            this.InstanceSet = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreateFacePicture返回参数结构体
 * @class
 */
class CreateFacePictureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 人物ID
         * @type {number || null}
         */
        this.PersonId = null;

        /**
         * 0.正常建档 1.重复身份 2.未检测到人脸 3.检测到多个人脸 4.人脸大小过小 5.人脸质量不达标 6.其他错误
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 图片url
         * @type {string || null}
         */
        this.PictureUrl = null;

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
        this.PersonId = params.PersonId || null;
        this.Status = params.Status || null;
        this.PictureUrl = params.PictureUrl || null;
        this.RequestId = params.RequestId || null;

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
 * DescribePersonInfoByFacePicture请求参数结构体
 * @class
 */
class DescribePersonInfoByFacePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 人脸图片BASE编码
         * @type {string || null}
         */
        this.Picture = null;

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
        this.Picture = params.Picture || null;

    }
}

/**
 * CreateFacePicture请求参数结构体
 * @class
 */
class CreateFacePictureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 人物类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
         * @type {number || null}
         */
        this.PersonType = null;

        /**
         * 图片BASE编码
         * @type {string || null}
         */
        this.Picture = null;

        /**
         * 图片名称
         * @type {string || null}
         */
        this.PictureName = null;

        /**
         * 店铺ID，如果不填表示操作集团身份库
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 是否强制更新：为ture时会为用户创建一个新的指定PersonType的身份;目前这个参数已废弃，可不传
         * @type {boolean || null}
         */
        this.IsForceUpload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = params.CompanyId || null;
        this.PersonType = params.PersonType || null;
        this.Picture = params.Picture || null;
        this.PictureName = params.PictureName || null;
        this.ShopId = params.ShopId || null;
        this.IsForceUpload = params.IsForceUpload || null;

    }
}

/**
 * DescribeZoneFlowAgeInfoByZoneId请求参数结构体
 * @class
 */
class DescribeZoneFlowAgeInfoByZoneIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = params.ZoneId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

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
 * ModifyPersonType请求参数结构体
 * @class
 */
class ModifyPersonTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 门店ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 顾客ID
         * @type {number || null}
         */
        this.PersonId = null;

        /**
         * 身份类型(0表示普通顾客，1 白名单，2 表示黑名单）
         * @type {number || null}
         */
        this.PersonType = null;

        /**
         * 身份子类型:
PersonType=0时(普通顾客)，0普通顾客
PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册用户，5VIP用户
PersonType=2时(黑名单)，0普通黑名单，1小偷)
         * @type {number || null}
         */
        this.PersonSubType = null;

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
        this.PersonId = params.PersonId || null;
        this.PersonType = params.PersonType || null;
        this.PersonSubType = params.PersonSubType || null;

    }
}

/**
 * 客户到场信息
 * @class
 */
class ArrivedMallInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 到场时间
         * @type {string || null}
         */
        this.ArrivedTime = null;

        /**
         * 出场时间
         * @type {string || null}
         */
        this.LeaveTime = null;

        /**
         * 停留时间，秒
         * @type {number || null}
         */
        this.StaySecond = null;

        /**
         * 到场抓拍图片
         * @type {string || null}
         */
        this.InCapPic = null;

        /**
         * 出场抓拍图片
         * @type {string || null}
         */
        this.OutCapPic = null;

        /**
         * 轨迹编码
         * @type {string || null}
         */
        this.TraceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArrivedTime = params.ArrivedTime || null;
        this.LeaveTime = params.LeaveTime || null;
        this.StaySecond = params.StaySecond || null;
        this.InCapPic = params.InCapPic || null;
        this.OutCapPic = params.OutCapPic || null;
        this.TraceId = params.TraceId || null;

    }
}

/**
 * 区域性别平均停留时间子结构
 * @class
 */
class ZoneAgeGroupAvrStayTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 男性平均停留时间
         * @type {number || null}
         */
        this.MaleAvrStayTime = null;

        /**
         * 女性平均停留时间
         * @type {number || null}
         */
        this.FemaleAvrStayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaleAvrStayTime = params.MaleAvrStayTime || null;
        this.FemaleAvrStayTime = params.FemaleAvrStayTime || null;

    }
}

/**
 * DescribePersonArrivedMall请求参数结构体
 * @class
 */
class DescribePersonArrivedMallRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 卖场编码
         * @type {string || null}
         */
        this.MallId = null;

        /**
         * 客户编码
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MallId = params.MallId || null;
        this.PersonId = params.PersonId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * DescribeCameraPerson请求参数结构体
 * @class
 */
class DescribeCameraPersonRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 摄像头id
         * @type {number || null}
         */
        this.CameraId = null;

        /**
         * 拉取开始时间戳，单位秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 拉取结束时间戳，单位秒，不超过StartTime+10秒，超过默认为StartTime+10
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * pos机id
         * @type {string || null}
         */
        this.PosId = null;

        /**
         * 拉取图片数，默认为1，最大为3
         * @type {number || null}
         */
        this.Num = null;

        /**
         * 是否需要base64的图片，0-不需要，1-需要，默认0
         * @type {number || null}
         */
        this.IsNeedPic = null;

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
        this.CameraId = params.CameraId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.PosId = params.PosId || null;
        this.Num = params.Num || null;
        this.IsNeedPic = params.IsNeedPic || null;

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
 * DescribeTrajectoryData返回参数结构体
 * @class
 */
class DescribeTrajectoryDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集团ID
         * @type {string || null}
         */
        this.CompanyId = null;

        /**
         * 店铺ID
         * @type {number || null}
         */
        this.ShopId = null;

        /**
         * 总人数
         * @type {number || null}
         */
        this.TotalPerson = null;

        /**
         * 总动迹数目
         * @type {number || null}
         */
        this.TotalTrajectory = null;

        /**
         * 返回动迹中的总人数
         * @type {number || null}
         */
        this.Person = null;

        /**
         * 返回动迹的数目
         * @type {number || null}
         */
        this.Trajectory = null;

        /**
         * 返回动迹的具体信息
         * @type {Array.<TrajectorySunData> || null}
         */
        this.Data = null;

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
        this.CompanyId = params.CompanyId || null;
        this.ShopId = params.ShopId || null;
        this.TotalPerson = params.TotalPerson || null;
        this.TotalTrajectory = params.TotalTrajectory || null;
        this.Person = params.Person || null;
        this.Trajectory = params.Trajectory || null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TrajectorySunData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    DescribeClusterPersonArrivedMallResponse: DescribeClusterPersonArrivedMallResponse,
    DescribeShopTrafficInfoRequest: DescribeShopTrafficInfoRequest,
    GenderAgeTrafficDetail: GenderAgeTrafficDetail,
    DescribeZoneFlowAndStayTimeResponse: DescribeZoneFlowAndStayTimeResponse,
    DescribePersonArrivedMallResponse: DescribePersonArrivedMallResponse,
    ModifyPersonTypeResponse: ModifyPersonTypeResponse,
    HourTrafficInfoDetail: HourTrafficInfoDetail,
    DescribeZoneFlowDailyByZoneIdResponse: DescribeZoneFlowDailyByZoneIdResponse,
    DescribeZoneFlowAgeInfoByZoneIdResponse: DescribeZoneFlowAgeInfoByZoneIdResponse,
    DescribeClusterPersonTraceResponse: DescribeClusterPersonTraceResponse,
    DescribePersonInfoRequest: DescribePersonInfoRequest,
    DescribePersonInfoByFacePictureResponse: DescribePersonInfoByFacePictureResponse,
    DescribePersonTraceDetailRequest: DescribePersonTraceDetailRequest,
    CreateAccountRequest: CreateAccountRequest,
    NetworkLastInfo: NetworkLastInfo,
    DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse: DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse,
    DeletePersonFeatureResponse: DeletePersonFeatureResponse,
    DescribeCameraPersonResponse: DescribeCameraPersonResponse,
    ModifyPersonTagInfoResponse: ModifyPersonTagInfoResponse,
    DescribeShopHourTrafficInfoResponse: DescribeShopHourTrafficInfoResponse,
    RegisterCallbackResponse: RegisterCallbackResponse,
    NetworkInfo: NetworkInfo,
    DescribeClusterPersonArrivedMallRequest: DescribeClusterPersonArrivedMallRequest,
    DescribeZoneFlowGenderInfoByZoneIdResponse: DescribeZoneFlowGenderInfoByZoneIdResponse,
    DescribeHistoryNetworkInfoRequest: DescribeHistoryNetworkInfoRequest,
    DescribePersonTraceDetailResponse: DescribePersonTraceDetailResponse,
    PersonVisitInfo: PersonVisitInfo,
    DescribePersonVisitInfoRequest: DescribePersonVisitInfoRequest,
    DescribeZoneTrafficInfoResponse: DescribeZoneTrafficInfoResponse,
    DeletePersonFeatureRequest: DeletePersonFeatureRequest,
    DescribeFaceIdByTempIdRequest: DescribeFaceIdByTempIdRequest,
    PersonProfile: PersonProfile,
    DescribePersonResponse: DescribePersonResponse,
    DescribeTrajectoryDataRequest: DescribeTrajectoryDataRequest,
    DescribeZoneTrafficInfoRequest: DescribeZoneTrafficInfoRequest,
    ZoneTrafficInfoDetail: ZoneTrafficInfoDetail,
    DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest: DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest,
    ZoneFlowAndAvrStayTime: ZoneFlowAndAvrStayTime,
    SceneInfo: SceneInfo,
    CameraPersonInfo: CameraPersonInfo,
    DescribePersonVisitInfoResponse: DescribePersonVisitInfoResponse,
    DescribeNetworkInfoRequest: DescribeNetworkInfoRequest,
    DescribeZoneFlowAndStayTimeRequest: DescribeZoneFlowAndStayTimeRequest,
    DescribeZoneFlowHourlyByZoneIdRequest: DescribeZoneFlowHourlyByZoneIdRequest,
    DescribeFaceIdByTempIdResponse: DescribeFaceIdByTempIdResponse,
    TrajectorySunData: TrajectorySunData,
    ModifyPersonTagInfoRequest: ModifyPersonTagInfoRequest,
    ShopDayTrafficInfo: ShopDayTrafficInfo,
    DescribePersonRequest: DescribePersonRequest,
    DescribePersonTraceResponse: DescribePersonTraceResponse,
    PersonTraceRoute: PersonTraceRoute,
    PersonTracePoint: PersonTracePoint,
    ZoneTrafficInfo: ZoneTrafficInfo,
    DescribeNetworkInfoResponse: DescribeNetworkInfoResponse,
    NetworkAndShopInfo: NetworkAndShopInfo,
    DescribeZoneFlowGenderInfoByZoneIdRequest: DescribeZoneFlowGenderInfoByZoneIdRequest,
    DescribeShopHourTrafficInfoRequest: DescribeShopHourTrafficInfoRequest,
    RegisterCallbackRequest: RegisterCallbackRequest,
    DescribeShopInfoRequest: DescribeShopInfoRequest,
    NetworkHistoryInfo: NetworkHistoryInfo,
    PersonInfo: PersonInfo,
    PersonTagInfo: PersonTagInfo,
    ZoneHourFlow: ZoneHourFlow,
    ShopHourTrafficInfo: ShopHourTrafficInfo,
    DescribeClusterPersonTraceRequest: DescribeClusterPersonTraceRequest,
    PersonCoordinate: PersonCoordinate,
    ZoneDayFlow: ZoneDayFlow,
    DescribePersonTraceRequest: DescribePersonTraceRequest,
    DescribeZoneFlowHourlyByZoneIdResponse: DescribeZoneFlowHourlyByZoneIdResponse,
    DescribeZoneFlowDailyByZoneIdRequest: DescribeZoneFlowDailyByZoneIdRequest,
    DescribePersonInfoResponse: DescribePersonInfoResponse,
    DailyTracePoint: DailyTracePoint,
    CreateAccountResponse: CreateAccountResponse,
    DescribeHistoryNetworkInfoResponse: DescribeHistoryNetworkInfoResponse,
    CreateFacePictureResponse: CreateFacePictureResponse,
    DescribeShopInfoResponse: DescribeShopInfoResponse,
    DescribePersonInfoByFacePictureRequest: DescribePersonInfoByFacePictureRequest,
    CreateFacePictureRequest: CreateFacePictureRequest,
    DescribeZoneFlowAgeInfoByZoneIdRequest: DescribeZoneFlowAgeInfoByZoneIdRequest,
    ShopInfo: ShopInfo,
    ModifyPersonTypeRequest: ModifyPersonTypeRequest,
    ArrivedMallInfo: ArrivedMallInfo,
    ZoneAgeGroupAvrStayTime: ZoneAgeGroupAvrStayTime,
    DescribePersonArrivedMallRequest: DescribePersonArrivedMallRequest,
    DescribeCameraPersonRequest: DescribeCameraPersonRequest,
    DescribeShopTrafficInfoResponse: DescribeShopTrafficInfoResponse,
    DescribeTrajectoryDataResponse: DescribeTrajectoryDataResponse,

}
