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
 * GetMonitorData请求参数结构体
 * @class
 */
class GetMonitorDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间，每个云产品会有一个命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名称，各个云产品的详细指标说明请参阅各个产品[监控接口](https://cloud.tencent.com/document/product/248/30384)文档
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 实例对象的维度组合
         * @type {Array.<Instance> || null}
         */
        this.Instances = null;

        /**
         * 监控统计周期。默认为取值为300，单位为s
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 起始时间，如2018-09-22T19:51:23+08:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认为当前时间。 EndTime不能小于EtartTime
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 实例维度组合数组
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的维度组合
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * 周期内的统计方式
 * @class
 */
class PeriodsSt extends  AbstractModel {
    constructor(){
        super();

        /**
         * 周期
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 统计方式
         * @type {Array.<string> || null}
         */
        this.StatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.StatType = 'StatType' in params ? params.StatType : null;

    }
}

/**
 * 实例对象的维度组合
 * @class
 */
class Dimension extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例维度名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例维度值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBaseMetrics请求参数结构体
 * @class
 */
class DescribeBaseMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * GetMonitorData返回参数结构体
 * @class
 */
class GetMonitorDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 数据点数组
         * @type {Array.<DataPoint> || null}
         */
        this.DataPoints = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

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
        this.Period = 'Period' in params ? params.Period : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.DataPoints) {
            this.DataPoints = new Array();
            for (let z in params.DataPoints) {
                let obj = new DataPoint();
                obj.deserialize(params.DataPoints[z]);
                this.DataPoints.push(obj);
            }
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对业务指标的单位及支持统计周期的描述
 * @class
 */
class MetricSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间，每个云产品会有一个命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标使用的单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 指标使用的单位
         * @type {string || null}
         */
        this.UnitCname = null;

        /**
         * 指标支持的统计周期，单位是秒，如60、300
         * @type {Array.<number> || null}
         */
        this.Period = null;

        /**
         * 统计周期内指标方式
         * @type {Array.<PeriodsSt> || null}
         */
        this.Periods = null;

        /**
         * 统计指标含义解释
         * @type {MetricObjectMeaning || null}
         */
        this.Meaning = null;

        /**
         * 维度描述信息
         * @type {Array.<DimensionsDesc> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.UnitCname = 'UnitCname' in params ? params.UnitCname : null;
        this.Period = 'Period' in params ? params.Period : null;

        if (params.Periods) {
            this.Periods = new Array();
            for (let z in params.Periods) {
                let obj = new PeriodsSt();
                obj.deserialize(params.Periods[z]);
                this.Periods.push(obj);
            }
        }

        if (params.Meaning) {
            let obj = new MetricObjectMeaning();
            obj.deserialize(params.Meaning)
            this.Meaning = obj;
        }

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new DimensionsDesc();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }

    }
}

/**
 * 监控数据点
 * @class
 */
class DataPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例对象维度组合
         * @type {Array.<Dimension> || null}
         */
        this.Dimensions = null;

        /**
         * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
         * @type {Array.<number> || null}
         */
        this.Timestamps = null;

        /**
         * 监控值数组，该数组和Timestamps一一对应
         * @type {Array.<number> || null}
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

        if (params.Dimensions) {
            this.Dimensions = new Array();
            for (let z in params.Dimensions) {
                let obj = new Dimension();
                obj.deserialize(params.Dimensions[z]);
                this.Dimensions.push(obj);
            }
        }
        this.Timestamps = 'Timestamps' in params ? params.Timestamps : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 指标数据的解释
 * @class
 */
class MetricObjectMeaning extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标英文解释
         * @type {string || null}
         */
        this.En = null;

        /**
         * 指标中文解释
         * @type {string || null}
         */
        this.Zh = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.En = 'En' in params ? params.En : null;
        this.Zh = 'Zh' in params ? params.Zh : null;

    }
}

/**
 * 维度信息
 * @class
 */
class DimensionsDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度名数组
         * @type {Array.<string> || null}
         */
        this.Dimensions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Dimensions = 'Dimensions' in params ? params.Dimensions : null;

    }
}

/**
 * DescribeBaseMetrics返回参数结构体
 * @class
 */
class DescribeBaseMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询得到的指标描述列表
         * @type {Array.<MetricSet> || null}
         */
        this.MetricSet = null;

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

        if (params.MetricSet) {
            this.MetricSet = new Array();
            for (let z in params.MetricSet) {
                let obj = new MetricSet();
                obj.deserialize(params.MetricSet[z]);
                this.MetricSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetMonitorDataRequest: GetMonitorDataRequest,
    Instance: Instance,
    PeriodsSt: PeriodsSt,
    Dimension: Dimension,
    DescribeBaseMetricsRequest: DescribeBaseMetricsRequest,
    GetMonitorDataResponse: GetMonitorDataResponse,
    MetricSet: MetricSet,
    DataPoint: DataPoint,
    MetricObjectMeaning: MetricObjectMeaning,
    DimensionsDesc: DimensionsDesc,
    DescribeBaseMetricsResponse: DescribeBaseMetricsResponse,

}
