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
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 枚举范围： AddTimeStamp, InstanceName, ProjectId
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 查找的关键字
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * 子网ID列表
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * VIP列表
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * 0倒序，1正序，默认倒序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 实例名称列表
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * VPC ID列表
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * 项目ID列表
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 偏移量，取Limit整数倍
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 实例列表的大小，参数默认值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 标签信息
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表
         * @type {Array.<InstanceListInfo> || null}
         */
        this.InstanceList = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.TotalNum = null;

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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceListInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详细信息列表
 * @class
 */
class InstanceListInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例修改时间
         * @type {string || null}
         */
        this.ModTimeStamp = null;

        /**
         * 实例隔离时间
         * @type {string || null}
         */
        this.IsolateTimeStamp = null;

        /**
         * 实例是否设置自动续费标识，1：设置自动续费；0：未设置自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 仓库ID
         * @type {number || null}
         */
        this.SetId = null;

        /**
         * 实例当前状态，0：发货中；1：运行中；2：创建失败；4：销毁中；5：隔离中；6：下线中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例内置ID
         * @type {number || null}
         */
        this.CmemId = null;

        /**
         * 实例关联的标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 地域id 1--广州 4--上海 5-- 香港 6--多伦多 7--上海金融 8--北京 9-- 新加坡 11--深圳金融 15--美西（硅谷）16--成都 17--德国 18--韩国 19--重庆 21--印度 22--美东（弗吉尼亚）23--泰国 24--俄罗斯 25--日本
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 实例描述信息
         * @type {string || null}
         */
        this.InstanceDesc = null;

        /**
         * 过期策略
         * @type {number || null}
         */
        this.Expire = null;

        /**
         * vpc网络下子网id 如：46315
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.AddTimeStamp = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 计费模式：0-按量计费，1-包年包月
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * vpc网络id 如：75101
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例截止时间
         * @type {string || null}
         */
        this.DeadlineTimeStamp = null;

        /**
         * vpc网络id 如：vpc-fk33jsf43kgv
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * 实例vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * vpc网络下子网id 如：subnet-fd3j6l35mm0
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * 用户AppID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 实例端口号
         * @type {number || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTimeStamp = 'ModTimeStamp' in params ? params.ModTimeStamp : null;
        this.IsolateTimeStamp = 'IsolateTimeStamp' in params ? params.IsolateTimeStamp : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CmemId = 'CmemId' in params ? params.CmemId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceDesc = 'InstanceDesc' in params ? params.InstanceDesc : null;
        this.Expire = 'Expire' in params ? params.Expire : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AddTimeStamp = 'AddTimeStamp' in params ? params.AddTimeStamp : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.DeadlineTimeStamp = 'DeadlineTimeStamp' in params ? params.DeadlineTimeStamp : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

module.exports = {
    DescribeInstancesRequest: DescribeInstancesRequest,
    TagInfo: TagInfo,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InstanceListInfo: InstanceListInfo,

}
