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
 * 数据源授权信息
 * @class
 */
class TicketAuthInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权用户
         * @type {string || null}
         */
        this.AuthUser = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthUser = 'AuthUser' in params ? params.AuthUser : null;

    }
}

/**
 * DescribeDataSourceList请求参数结构体
 * @class
 */
class DescribeDataSourceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 环境 id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 应用id数组
         * @type {Array.<string> || null}
         */
        this.Appids = null;

        /**
         * 数据源id数组
         * @type {Array.<string> || null}
         */
        this.DataSourceIds = null;

        /**
         * 数据源名称数组
         * @type {Array.<string> || null}
         */
        this.DataSourceNames = null;

        /**
         * 数据源类型 database-自建数据源；cloud-integration-自定义数据源
         * @type {string || null}
         */
        this.DataSourceType = null;

        /**
         * 数据源模糊查询参数
         * @type {DataSourceQueryOption || null}
         */
        this.QueryOption = null;

        /**
         * 数据源视图Id数组
         * @type {Array.<string> || null}
         */
        this.ViewIds = null;

        /**
         * 查询未关联应用的数据源，0:未关联，该参数配合 AppIds 参数一块使用
         * @type {number || null}
         */
        this.AppLinkStatus = null;

        /**
         * 查询应用绑定数据源: 0: 否,1: 是
         * @type {number || null}
         */
        this.QueryBindToApp = null;

        /**
         * 查询连接器 0 数据模型 1 连接器 2 自定义连接器
         * @type {number || null}
         */
        this.QueryConnector = null;

        /**
         * 查询数据源黑名单机制，比如不想要系统数据源["system"]
         * @type {Array.<string> || null}
         */
        this.NotQuerySubTypeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Appids = 'Appids' in params ? params.Appids : null;
        this.DataSourceIds = 'DataSourceIds' in params ? params.DataSourceIds : null;
        this.DataSourceNames = 'DataSourceNames' in params ? params.DataSourceNames : null;
        this.DataSourceType = 'DataSourceType' in params ? params.DataSourceType : null;

        if (params.QueryOption) {
            let obj = new DataSourceQueryOption();
            obj.deserialize(params.QueryOption)
            this.QueryOption = obj;
        }
        this.ViewIds = 'ViewIds' in params ? params.ViewIds : null;
        this.AppLinkStatus = 'AppLinkStatus' in params ? params.AppLinkStatus : null;
        this.QueryBindToApp = 'QueryBindToApp' in params ? params.QueryBindToApp : null;
        this.QueryConnector = 'QueryConnector' in params ? params.QueryConnector : null;
        this.NotQuerySubTypeList = 'NotQuerySubTypeList' in params ? params.NotQuerySubTypeList : null;

    }
}

/**
 * 数据源模糊查询参数
 * @class
 */
class DataSourceQueryOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源标识模糊匹配
         * @type {string || null}
         */
        this.LikeName = null;

        /**
         * 数据源名称模糊匹配
         * @type {string || null}
         */
        this.LikeTitle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LikeName = 'LikeName' in params ? params.LikeName : null;
        this.LikeTitle = 'LikeTitle' in params ? params.LikeTitle : null;

    }
}

/**
 * 数据源关联App信息
 * @class
 */
class DataSourceLinkApp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 是否编辑状态使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EditStatusUse = null;

        /**
         * 是否预览状态使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PreviewStatusUse = null;

        /**
         * 是否正式状态使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OnlineStatusUse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.EditStatusUse = 'EditStatusUse' in params ? params.EditStatusUse : null;
        this.PreviewStatusUse = 'PreviewStatusUse' in params ? params.PreviewStatusUse : null;
        this.OnlineStatusUse = 'OnlineStatusUse' in params ? params.OnlineStatusUse : null;

    }
}

/**
 * 数据源详情列表
 * @class
 */
class DataSourceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据源 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 数据源名称
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 数据源标识
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据源类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数据源描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据源配置
         * @type {string || null}
         */
        this.Schema = null;

        /**
         * cms 项目状态, 0: 重新获取详情信息，1： 不需要重新获取详情信息
         * @type {string || null}
         */
        this.CmsProject = null;

        /**
         * 当前为环境 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * schema 版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SchemaVersion = null;

        /**
         * 创建者用户 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 环境 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DataSourceVersion = null;

        /**
         * 所属应用数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataSourceLinkApp> || null}
         */
        this.AppUsageList = null;

        /**
         * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublishedAt = null;

        /**
         * 子数据源ids
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ChildDataSourceIds = null;

        /**
         * 数据源发布信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Fun = null;

        /**
         * 云函数状态 1 Active 2 Creating 3 Updating 4 Deleting  9 Deleted 11 CreatFailed  12 UpdateFailed 13 DeleteFailed 21 UpdateTimeOut
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScfStatus = null;

        /**
         * 自定义方法
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Methods = null;

        /**
         * 子数据源名数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ChildDataSourceNames = null;

        /**
         * 是否旧数据源 1 新 0 旧
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsNewDataSource = null;

        /**
         * 数据源视图id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ViewId = null;

        /**
         * 数据源属性配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Configuration = null;

        /**
         * 外部数据源模板code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateCode = null;

        /**
         * 外部数据源模板来源 0 空模板 1 腾讯文档 2 腾讯会议 3 企业微信 4 微信电商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 发布版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublishVersion = null;

        /**
         * 发布视图id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublishViewId = null;

        /**
         * 数据源子类型   "database" 标准模型 "custom-database" 自定义模型 "system" 系统模型 "connector" 连接器 "custom-connector" 自定义连接器 "hidden" 隐藏数据源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 授权状态  0 授权无效 1 授权有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AuthStatus = null;

        /**
         * 数据源授权信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TicketAuthInfo || null}
         */
        this.AuthInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Schema = 'Schema' in params ? params.Schema : null;
        this.CmsProject = 'CmsProject' in params ? params.CmsProject : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.SchemaVersion = 'SchemaVersion' in params ? params.SchemaVersion : null;
        this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.DataSourceVersion = 'DataSourceVersion' in params ? params.DataSourceVersion : null;

        if (params.AppUsageList) {
            this.AppUsageList = new Array();
            for (let z in params.AppUsageList) {
                let obj = new DataSourceLinkApp();
                obj.deserialize(params.AppUsageList[z]);
                this.AppUsageList.push(obj);
            }
        }
        this.PublishedAt = 'PublishedAt' in params ? params.PublishedAt : null;
        this.ChildDataSourceIds = 'ChildDataSourceIds' in params ? params.ChildDataSourceIds : null;
        this.Fun = 'Fun' in params ? params.Fun : null;
        this.ScfStatus = 'ScfStatus' in params ? params.ScfStatus : null;
        this.Methods = 'Methods' in params ? params.Methods : null;
        this.ChildDataSourceNames = 'ChildDataSourceNames' in params ? params.ChildDataSourceNames : null;
        this.IsNewDataSource = 'IsNewDataSource' in params ? params.IsNewDataSource : null;
        this.ViewId = 'ViewId' in params ? params.ViewId : null;
        this.Configuration = 'Configuration' in params ? params.Configuration : null;
        this.TemplateCode = 'TemplateCode' in params ? params.TemplateCode : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.PublishVersion = 'PublishVersion' in params ? params.PublishVersion : null;
        this.PublishViewId = 'PublishViewId' in params ? params.PublishViewId : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;

        if (params.AuthInfo) {
            let obj = new TicketAuthInfo();
            obj.deserialize(params.AuthInfo)
            this.AuthInfo = obj;
        }

    }
}

/**
 * 数据详情列表
 * @class
 */
class DataSourceDetailItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据详情列表
         * @type {Array.<DataSourceDetail> || null}
         */
        this.Rows = null;

        /**
         * 数据源列表总个数
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new DataSourceDetail();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeDataSourceList返回参数结构体
 * @class
 */
class DescribeDataSourceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * data 数据
         * @type {DataSourceDetailItems || null}
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

        if (params.Data) {
            let obj = new DataSourceDetailItems();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    TicketAuthInfo: TicketAuthInfo,
    DescribeDataSourceListRequest: DescribeDataSourceListRequest,
    DataSourceQueryOption: DataSourceQueryOption,
    DataSourceLinkApp: DataSourceLinkApp,
    DataSourceDetail: DataSourceDetail,
    DataSourceDetailItems: DataSourceDetailItems,
    DescribeDataSourceListResponse: DescribeDataSourceListResponse,

}
