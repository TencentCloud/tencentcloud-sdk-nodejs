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
 * 批次
 * @class
 */
class CodeBatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次编码(未使用)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchCode = null;

        /**
         * 码数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CodeCnt = null;

        /**
         * 所属商户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 批次类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BatchType = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 微信模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MpTpl = null;

        /**
         * 批次状态 0: 未激活 1: 已激活 -1: 已冻结
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 所属商户名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 未使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ext || null}
         */
        this.Ext = null;

        /**
         * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TplName = null;

        /**
         * 调度任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Job || null}
         */
        this.Job = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchCode = 'BatchCode' in params ? params.BatchCode : null;
        this.CodeCnt = 'CodeCnt' in params ? params.CodeCnt : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BatchType = 'BatchType' in params ? params.BatchType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MpTpl = 'MpTpl' in params ? params.MpTpl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.Ext) {
            let obj = new Ext();
            obj.deserialize(params.Ext)
            this.Ext = obj;
        }
        this.TplName = 'TplName' in params ? params.TplName : null;

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

    }
}

/**
 * DescribeScanLogs返回参数结构体
 * @class
 */
class DescribeScanLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 【弃用】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScanLog> || null}
         */
        this.Products = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 扫描记录
         * @type {Array.<ScanLog> || null}
         */
        this.ScanLogs = null;

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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ScanLog();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ScanLogs) {
            this.ScanLogs = new Array();
            for (let z in params.ScanLogs) {
                let obj = new ScanLog();
                obj.deserialize(params.ScanLogs[z]);
                this.ScanLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 企业配额信息
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 服务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 配额ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QuotaId = null;

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 开通服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Services = null;

        /**
         * 商户配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FactoryQuota = null;

        /**
         * 商品配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ItemQuota = null;

        /**
         * 溯源码配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TrackQuota = null;

        /**
         * 销售码配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SaleQuota = null;

        /**
         * 上链配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChainQuota = null;

        /**
         * 风控配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskQuota = null;

        /**
         * 溯源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TrackType = null;

        /**
         * 开通版本 lite:轻量版, basic:基础版, standard:标准版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Services = 'Services' in params ? params.Services : null;
        this.FactoryQuota = 'FactoryQuota' in params ? params.FactoryQuota : null;
        this.ItemQuota = 'ItemQuota' in params ? params.ItemQuota : null;
        this.TrackQuota = 'TrackQuota' in params ? params.TrackQuota : null;
        this.SaleQuota = 'SaleQuota' in params ? params.SaleQuota : null;
        this.ChainQuota = 'ChainQuota' in params ? params.ChainQuota : null;
        this.RiskQuota = 'RiskQuota' in params ? params.RiskQuota : null;
        this.TrackType = 'TrackType' in params ? params.TrackType : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * 扫码明细
 * @class
 */
class ScanLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * 微信openid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Openid = null;

        /**
         * 微信昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * ip地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 国家
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 县/区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.District = null;

        /**
         * 微信 unionid
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unionid = null;

        /**
         * 首次扫码 0:否, 1:是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.First = null;

        /**
         * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.Openid = 'Openid' in params ? params.Openid : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.District = 'District' in params ? params.District : null;
        this.Unionid = 'Unionid' in params ? params.Unionid : null;
        this.First = 'First' in params ? params.First : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeProducts请求参数结构体
 * @class
 */
class DescribeProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 商品ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * CreateCorporationOrder返回参数结构体
 * @class
 */
class CreateCorporationOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

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
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProduct返回参数结构体
 * @class
 */
class ModifyProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProduct请求参数结构体
 * @class
 */
class ModifyProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 商品规格
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 商品图片
         * @type {Array.<string> || null}
         */
        this.Logo = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 预留字段
         * @type {Ext || null}
         */
        this.Ext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

        if (params.Ext) {
            let obj = new Ext();
            obj.deserialize(params.Ext)
            this.Ext = obj;
        }

    }
}

/**
 * ModifyCustomRule请求参数结构体
 * @class
 */
class ModifyCustomRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 码长度
         * @type {number || null}
         */
        this.CodeLength = null;

        /**
         * 码段配置
         * @type {Array.<CodePart> || null}
         */
        this.CodeParts = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CodeLength = 'CodeLength' in params ? params.CodeLength : null;

        if (params.CodeParts) {
            this.CodeParts = new Array();
            for (let z in params.CodeParts) {
                let obj = new CodePart();
                obj.deserialize(params.CodeParts[z]);
                this.CodeParts.push(obj);
            }
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * 码段配置
 * @class
 */
class CodePart extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码段名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 码段类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 码段内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 码段长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 扩展字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Ext = 'Ext' in params ? params.Ext : null;

    }
}

/**
 * 码包类型
 * @class
 */
class CodePack extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackId = null;

        /**
         * 企业id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 制码状态 init: 初始化, pending: 执行中, done: 完成, error: 失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 执行日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 创建人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateUser = null;

        /**
         * 码数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 防伪码长度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CodeLength = null;

        /**
         * 码类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 是否暗码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cipher = null;

        /**
         * [弃用] 文字码地址，通过另一个接口查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TextUrl = null;

        /**
         * [弃用] 二维码地址，通过另一个接口查
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackUrl = null;

        /**
         * 商户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 码规则类型 0: 默认, 1: 自定义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleType = null;

        /**
         * 自定义码规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 码包类型 0: 普通码包 1: 层级码包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PackType = null;

        /**
         * 生码层级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PackLevel = null;

        /**
         * 层级码配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PackSpec> || null}
         */
        this.PackSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.CreateUser = 'CreateUser' in params ? params.CreateUser : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.CodeLength = 'CodeLength' in params ? params.CodeLength : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.Cipher = 'Cipher' in params ? params.Cipher : null;
        this.TextUrl = 'TextUrl' in params ? params.TextUrl : null;
        this.PackUrl = 'PackUrl' in params ? params.PackUrl : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.PackType = 'PackType' in params ? params.PackType : null;
        this.PackLevel = 'PackLevel' in params ? params.PackLevel : null;

        if (params.PackSpec) {
            this.PackSpec = new Array();
            for (let z in params.PackSpec) {
                let obj = new PackSpec();
                obj.deserialize(params.PackSpec[z]);
                this.PackSpec.push(obj);
            }
        }

    }
}

/**
 * DeleteCodeBatch请求参数结构体
 * @class
 */
class DeleteCodeBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeMerchants请求参数结构体
 * @class
 */
class DescribeMerchantsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索商户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码来源类型 0:自建, 1:第三方
         * @type {number || null}
         */
        this.CodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;

    }
}

/**
 * ModifyTraceCode请求参数结构体
 * @class
 */
class ModifyTraceCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 状态 0: 冻结 1: 激活
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeCustomRules返回参数结构体
 * @class
 */
class DescribeCustomRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CustomRule> || null}
         */
        this.CustomRules = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.CustomRules) {
            this.CustomRules = new Array();
            for (let z in params.CustomRules) {
                let obj = new CustomRule();
                obj.deserialize(params.CustomRules[z]);
                this.CustomRules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMerchant请求参数结构体
 * @class
 */
class CreateMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码包来源 0:自建, 1:第三发
         * @type {number || null}
         */
        this.CodeType = null;

        /**
         * 码包前缀地址 第三方码包时必填
         * @type {string || null}
         */
        this.CodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.CodeUrl = 'CodeUrl' in params ? params.CodeUrl : null;

    }
}

/**
 * DescribeCodeBatchById请求参数结构体
 * @class
 */
class DescribeCodeBatchByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * DescribeTraceCodeById返回参数结构体
 * @class
 */
class DescribeTraceCodeByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {TraceCode || null}
         */
        this.TraceCode = null;

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

        if (params.TraceCode) {
            let obj = new TraceCode();
            obj.deserialize(params.TraceCode)
            this.TraceCode = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 码规则
 * @class
 */
class CustomRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 码规则名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 码ID长度
         * @type {number || null}
         */
        this.CodeLength = null;

        /**
         * 规则状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 码段配置
         * @type {Array.<CodePart> || null}
         */
        this.CodeParts = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CodeLength = 'CodeLength' in params ? params.CodeLength : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.CodeParts) {
            this.CodeParts = new Array();
            for (let z in params.CodeParts) {
                let obj = new CodePart();
                obj.deserialize(params.CodeParts[z]);
                this.CodeParts.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeProducts返回参数结构体
 * @class
 */
class DescribeProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Product> || null}
         */
        this.Products = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new Product();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCodeBatch返回参数结构体
 * @class
 */
class CreateCodeBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTraceDataList返回参数结构体
 * @class
 */
class DescribeTraceDataListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 无
         * @type {Array.<TraceData> || null}
         */
        this.TraceDataList = null;

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

        if (params.TraceDataList) {
            this.TraceDataList = new Array();
            for (let z in params.TraceDataList) {
                let obj = new TraceData();
                obj.deserialize(params.TraceDataList[z]);
                this.TraceDataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTraceCodes请求参数结构体
 * @class
 */
class DescribeTraceCodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索关键字 码标识，或者批次ID
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 批次ID，弃用
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * CreateTraceCodesAsync请求参数结构体
 * @class
 */
class CreateTraceCodesAsyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 上传文件Key，仅支持 csv 或者 zip 类型
         * @type {string || null}
         */
        this.FileKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.FileKey = 'FileKey' in params ? params.FileKey : null;

    }
}

/**
 * ModifyTraceData返回参数结构体
 * @class
 */
class ModifyTraceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源ID
         * @type {string || null}
         */
        this.TraceId = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProduct请求参数结构体
 * @class
 */
class DeleteProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * CreateTraceChain返回参数结构体
 * @class
 */
class CreateTraceChainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源ID
         * @type {string || null}
         */
        this.TraceId = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 渠道商的子企业额度使用情况
 * @class
 */
class CorpQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CorpName = null;

        /**
         * 额度
         * @type {Quota || null}
         */
        this.Quota = null;

        /**
         * 额度使用量
         * @type {UsageQuota || null}
         */
        this.UsageQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.CorpName = 'CorpName' in params ? params.CorpName : null;

        if (params.Quota) {
            let obj = new Quota();
            obj.deserialize(params.Quota)
            this.Quota = obj;
        }

        if (params.UsageQuota) {
            let obj = new UsageQuota();
            obj.deserialize(params.UsageQuota)
            this.UsageQuota = obj;
        }

    }
}

/**
 * CreateCustomRule请求参数结构体
 * @class
 */
class CreateCustomRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 码长度
         * @type {number || null}
         */
        this.CodeLength = null;

        /**
         * 码段配置
         * @type {Array.<CodePart> || null}
         */
        this.CodeParts = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CodeLength = 'CodeLength' in params ? params.CodeLength : null;

        if (params.CodeParts) {
            this.CodeParts = new Array();
            for (let z in params.CodeParts) {
                let obj = new CodePart();
                obj.deserialize(params.CodeParts[z]);
                this.CodeParts.push(obj);
            }
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DescribeCodePackStatus请求参数结构体
 * @class
 */
class DescribeCodePackStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包ID
         * @type {string || null}
         */
        this.PackId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * ModifyTraceData请求参数结构体
 * @class
 */
class ModifyTraceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源ID
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 生产溯源任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 溯源信息
         * @type {Array.<TraceItem> || null}
         */
        this.TraceItems = null;

        /**
         * 溯源阶段名称
         * @type {string || null}
         */
        this.PhaseName = null;

        /**
         * [无效] 类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * [无效] 溯源码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * [无效] 排序
         * @type {number || null}
         */
        this.Rank = null;

        /**
         * [无效] 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源
         * @type {number || null}
         */
        this.Phase = null;

        /**
         * [无效] 溯源时间
         * @type {string || null}
         */
        this.TraceTime = null;

        /**
         * [无效] 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * [无效] 上链状态
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * [无效] 上链时间
         * @type {string || null}
         */
        this.ChainTime = null;

        /**
         * [无效] 上链数据
         * @type {ChainData || null}
         */
        this.ChainData = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 溯源状态 0: 无效, 1: 有效
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 环节数据
         * @type {PhaseData || null}
         */
        this.PhaseData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.TraceItems) {
            this.TraceItems = new Array();
            for (let z in params.TraceItems) {
                let obj = new TraceItem();
                obj.deserialize(params.TraceItems[z]);
                this.TraceItems.push(obj);
            }
        }
        this.PhaseName = 'PhaseName' in params ? params.PhaseName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Rank = 'Rank' in params ? params.Rank : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.TraceTime = 'TraceTime' in params ? params.TraceTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.ChainTime = 'ChainTime' in params ? params.ChainTime : null;

        if (params.ChainData) {
            let obj = new ChainData();
            obj.deserialize(params.ChainData)
            this.ChainData = obj;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.PhaseData) {
            let obj = new PhaseData();
            obj.deserialize(params.PhaseData)
            this.PhaseData = obj;
        }

    }
}

/**
 * DescribeCodeBatchs请求参数结构体
 * @class
 */
class DescribeCodeBatchsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 查询商品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 查询关键字
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 批次类型 0:溯源 1:营销
         * @type {string || null}
         */
        this.BatchType = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.BatchType = 'BatchType' in params ? params.BatchType : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * ModifyTraceDataRanks返回参数结构体
 * @class
 */
class ModifyTraceDataRanksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTraceCodes请求参数结构体
 * @class
 */
class CreateTraceCodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码
         * @type {Array.<CodeItem> || null}
         */
        this.Codes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

        if (params.Codes) {
            this.Codes = new Array();
            for (let z in params.Codes) {
                let obj = new CodeItem();
                obj.deserialize(params.Codes[z]);
                this.Codes.push(obj);
            }
        }

    }
}

/**
 * DescribeCodeBatchById返回参数结构体
 * @class
 */
class DescribeCodeBatchByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次
         * @type {CodeBatch || null}
         */
        this.CodeBatch = null;

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

        if (params.CodeBatch) {
            let obj = new CodeBatch();
            obj.deserialize(params.CodeBatch)
            this.CodeBatch = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCorpQuotas返回参数结构体
 * @class
 */
class DescribeCorpQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子企业额度使用情况
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CorpQuota> || null}
         */
        this.CorpQuotas = null;

        /**
         * 记录总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.CorpQuotas) {
            this.CorpQuotas = new Array();
            for (let z in params.CorpQuotas) {
                let obj = new CorpQuota();
                obj.deserialize(params.CorpQuotas[z]);
                this.CorpQuotas.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodePackStatus返回参数结构体
 * @class
 */
class DescribeCodePackStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包状态 init: 初始化, pending: 执行中, done: 完成, error: 失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用调度任务
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调度ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 执行状态 init:初始化, pending: 执行中, done: 执行成功, error: 执行失败
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 溯源数据
 * @class
 */
class TraceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码类型 0: 批次, 1: 码, 2: 生产任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 码值，跟码类型一一对应
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 排序，在Phase相同情况下，值越小排名靠前
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Rank = null;

        /**
         * 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Phase = null;

        /**
         * 溯源环节名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhaseName = null;

        /**
         * 溯源时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TraceTime = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TraceItem> || null}
         */
        this.TraceItems = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 上链状态 0: 未上链 1: 上链中 2: 已上链 -1: 异常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * 上链时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChainTime = null;

        /**
         * 上链数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ChainData || null}
         */
        this.ChainData = null;

        /**
         * 溯源阶段配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PhaseData || null}
         */
        this.PhaseData = null;

        /**
         * 溯源阶段状态 0: 无效, 1: 有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Rank = 'Rank' in params ? params.Rank : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.PhaseName = 'PhaseName' in params ? params.PhaseName : null;
        this.TraceTime = 'TraceTime' in params ? params.TraceTime : null;

        if (params.TraceItems) {
            this.TraceItems = new Array();
            for (let z in params.TraceItems) {
                let obj = new TraceItem();
                obj.deserialize(params.TraceItems[z]);
                this.TraceItems.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.ChainTime = 'ChainTime' in params ? params.ChainTime : null;

        if (params.ChainData) {
            let obj = new ChainData();
            obj.deserialize(params.ChainData)
            this.ChainData = obj;
        }

        if (params.PhaseData) {
            let obj = new PhaseData();
            obj.deserialize(params.PhaseData)
            this.PhaseData = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 层级码配置
 * @class
 */
class PackSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 层级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 比例
         * @type {number || null}
         */
        this.Rate = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 码段配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CodePart> || null}
         */
        this.CodeParts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.CustomId = 'CustomId' in params ? params.CustomId : null;

        if (params.CodeParts) {
            this.CodeParts = new Array();
            for (let z in params.CodeParts) {
                let obj = new CodePart();
                obj.deserialize(params.CodeParts[z]);
                this.CodeParts.push(obj);
            }
        }

    }
}

/**
 * ModifyCustomRule返回参数结构体
 * @class
 */
class ModifyCustomRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomId = null;

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
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMerchant返回参数结构体
 * @class
 */
class ModifyMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodesByPack返回参数结构体
 * @class
 */
class DescribeCodesByPackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CodeItem> || null}
         */
        this.Codes = null;

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

        if (params.Codes) {
            this.Codes = new Array();
            for (let z in params.Codes) {
                let obj = new CodeItem();
                obj.deserialize(params.Codes[z]);
                this.Codes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProduct返回参数结构体
 * @class
 */
class CreateProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTraceData请求参数结构体
 * @class
 */
class CreateTraceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 溯源阶段 0:商品 1:通用 2:生产溯源 3:销售溯源
         * @type {number || null}
         */
        this.Phase = null;

        /**
         * 溯源阶段名称
         * @type {string || null}
         */
        this.PhaseName = null;

        /**
         * [无效] 上链状态
         * @type {number || null}
         */
        this.ChainStatus = null;

        /**
         * [无效] 码类型 0: 批次, 1: 码, 2: 生产任务, 3: 物流信息
         * @type {number || null}
         */
        this.Type = null;

        /**
         * [无效] 溯源ID
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 溯源信息
         * @type {Array.<TraceItem> || null}
         */
        this.TraceItems = null;

        /**
         * 溯源状态 0: 无效, 1: 有效
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 环节数据
         * @type {PhaseData || null}
         */
        this.PhaseData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.PhaseName = 'PhaseName' in params ? params.PhaseName : null;
        this.ChainStatus = 'ChainStatus' in params ? params.ChainStatus : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;

        if (params.TraceItems) {
            this.TraceItems = new Array();
            for (let z in params.TraceItems) {
                let obj = new TraceItem();
                obj.deserialize(params.TraceItems[z]);
                this.TraceItems.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.PhaseData) {
            let obj = new PhaseData();
            obj.deserialize(params.PhaseData)
            this.PhaseData = obj;
        }

    }
}

/**
 * 预留字段
 * @class
 */
class Ext extends  AbstractModel {
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
 * DescribeCorpQuotas请求参数结构体
 * @class
 */
class DescribeCorpQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商ID，不要传
         * @type {number || null}
         */
        this.AgentId = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 搜索企业ID
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * CreateProduct请求参数结构体
 * @class
 */
class CreateProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 商户名称
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 商品规格
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 商品图片
         * @type {Array.<string> || null}
         */
        this.Logo = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 预留字段
         * @type {Ext || null}
         */
        this.Ext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

        if (params.Ext) {
            let obj = new Ext();
            obj.deserialize(params.Ext)
            this.Ext = obj;
        }

    }
}

/**
 * CreateCustomPack请求参数结构体
 * @class
 */
class CreateCustomPackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 生码数量, 普通码包时必填
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码包类型 0: 普通码包 1: 层级码包
         * @type {number || null}
         */
        this.PackType = null;

        /**
         * 码包层级
         * @type {number || null}
         */
        this.PackLevel = null;

        /**
         * 层级码包规则
         * @type {Array.<PackSpec> || null}
         */
        this.PackSpec = null;

        /**
         * 码规则ID,  和CodeParts二选一必填
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 码段配置，和CustomId二选一必填
         * @type {Array.<CodePart> || null}
         */
        this.CodeParts = null;

        /**
         * 批次ID，如果传了生码后会同时绑定批次，并激活码
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 是否有流水码 0:无 1:有
         * @type {number || null}
         */
        this.SerialType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.PackType = 'PackType' in params ? params.PackType : null;
        this.PackLevel = 'PackLevel' in params ? params.PackLevel : null;

        if (params.PackSpec) {
            this.PackSpec = new Array();
            for (let z in params.PackSpec) {
                let obj = new PackSpec();
                obj.deserialize(params.PackSpec[z]);
                this.PackSpec.push(obj);
            }
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;

        if (params.CodeParts) {
            this.CodeParts = new Array();
            for (let z in params.CodeParts) {
                let obj = new CodePart();
                obj.deserialize(params.CodeParts[z]);
                this.CodeParts.push(obj);
            }
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.SerialType = 'SerialType' in params ? params.SerialType : null;

    }
}

/**
 * CreateCodePack请求参数结构体
 * @class
 */
class CreateCodePackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 码长度
         * @type {number || null}
         */
        this.CodeLength = null;

        /**
         * 码类型 alphabet 字母, number 数字, mixin 混合
         * @type {string || null}
         */
        this.CodeType = null;

        /**
         * 生码数量 普通码包时必填
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码包类型 0: 普通码包 1: 层级码包
         * @type {number || null}
         */
        this.PackType = null;

        /**
         * 码包层级
         * @type {number || null}
         */
        this.PackLevel = null;

        /**
         * 码包规格
         * @type {Array.<PackSpec> || null}
         */
        this.PackSpec = null;

        /**
         * 批次ID，如果传了生码后会同时绑定批次，并激活码
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 是否有流水码 0:无 1:有
         * @type {number || null}
         */
        this.SerialType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CodeLength = 'CodeLength' in params ? params.CodeLength : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.PackType = 'PackType' in params ? params.PackType : null;
        this.PackLevel = 'PackLevel' in params ? params.PackLevel : null;

        if (params.PackSpec) {
            this.PackSpec = new Array();
            for (let z in params.PackSpec) {
                let obj = new PackSpec();
                obj.deserialize(params.PackSpec[z]);
                this.PackSpec.push(obj);
            }
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.SerialType = 'SerialType' in params ? params.SerialType : null;

    }
}

/**
 * CreateCodeBatch请求参数结构体
 * @class
 */
class CreateCodeBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 批次类型 0:溯源 1:营销
         * @type {number || null}
         */
        this.BatchType = null;

        /**
         * 批次ID，留空时系统自动生成
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 模版ID，或者活动ID
         * @type {string || null}
         */
        this.MpTpl = null;

        /**
         * 克隆批次ID，同时会复制溯源信息
         * @type {string || null}
         */
        this.CloneId = null;

        /**
         * 批次编号，业务字段不判断唯一性
         * @type {string || null}
         */
        this.BatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BatchType = 'BatchType' in params ? params.BatchType : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MpTpl = 'MpTpl' in params ? params.MpTpl : null;
        this.CloneId = 'CloneId' in params ? params.CloneId : null;
        this.BatchCode = 'BatchCode' in params ? params.BatchCode : null;

    }
}

/**
 * 溯源数据项
Type的枚举值
text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型
具体组合如下
Type: "text" 文本类型, 对应值 Value: "文本字符串"
Type: "longtext" 长文本类型, 对应值 Value: "长文本字符串, 支持换行\n"
Type: "banner" 单图片类型, 对应图片地址 Value: "https://sample.cdn.com/xxx.jpg"
Type: "image" 多图片类型, 对应图片地址 Values: ["https://sample.cdn.com/1.jpg", "https://sample.cdn.com/2.jpg"]
Type: "video" 视频类型, 对应视频地址 Value: "https://sample.cdn.com/xxx.mp4"
Type: "mp" 小程序类型, 对应配置 Values: ["WXAPPID", "WXAPP_PATH", "跳转说明"]
 * @class
 */
class TraceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 类型 text:文本类型, longtext:长文本类型, banner:单图片类型, image:多图片类型, video:视频类型, mp:小程序类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 只读
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ReadOnly = null;

        /**
         * 扫码展示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Hidden = null;

        /**
         * 多个值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 类型标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 扩展字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ext = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Hidden = 'Hidden' in params ? params.Hidden : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Ext = 'Ext' in params ? params.Ext : null;

    }
}

/**
 * DescribeCustomRuleById请求参数结构体
 * @class
 */
class DescribeCustomRuleByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * 上链数据
 * @class
 */
class ChainData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区块hash
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlockHash = null;

        /**
         * 区块高度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlockHeight = null;

        /**
         * 区块时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.BlockHash = 'BlockHash' in params ? params.BlockHash : null;
        this.BlockHeight = 'BlockHeight' in params ? params.BlockHeight : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;

    }
}

/**
 * 环节数据
 * @class
 */
class PhaseData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用头
         * @type {boolean || null}
         */
        this.HeadEnabled = null;

        /**
         * 标题
         * @type {string || null}
         */
        this.HeadTitle = null;

        /**
         * 标识符
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 小程序AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 小程序AppPath
         * @type {string || null}
         */
        this.AppPath = null;

        /**
         * 小程序名称AppName
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
        this.HeadEnabled = 'HeadEnabled' in params ? params.HeadEnabled : null;
        this.HeadTitle = 'HeadTitle' in params ? params.HeadTitle : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.AppPath = 'AppPath' in params ? params.AppPath : null;
        this.AppName = 'AppName' in params ? params.AppName : null;

    }
}

/**
 * ModifyTraceDataRanks请求参数结构体
 * @class
 */
class ModifyTraceDataRanksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 生产任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 溯源ID
         * @type {Array.<string> || null}
         */
        this.TraceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TraceIds = 'TraceIds' in params ? params.TraceIds : null;

    }
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 * @class
 */
class ModifyCustomRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomId = null;

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
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomPack返回参数结构体
 * @class
 */
class CreateCustomPackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包ID
         * @type {string || null}
         */
        this.PackId = null;

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
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyMerchant请求参数结构体
 * @class
 */
class ModifyMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商户标识码
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码包来源 0:自建, 1:第三码包，暂不支持修改
         * @type {number || null}
         */
        this.CodeType = null;

        /**
         * 码包前缀地址 第三方码包时必填
         * @type {string || null}
         */
        this.CodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.CodeUrl = 'CodeUrl' in params ? params.CodeUrl : null;

    }
}

/**
 * DescribeTmpToken返回参数结构体
 * @class
 */
class DescribeTmpTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Token = null;

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
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodePackUrl请求参数结构体
 * @class
 */
class DescribeCodePackUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包ID
         * @type {string || null}
         */
        this.PackId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DeleteProduct返回参数结构体
 * @class
 */
class DeleteProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTraceData返回参数结构体
 * @class
 */
class DeleteTraceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TraceId = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomRuleStatus请求参数结构体
 * @class
 */
class ModifyCustomRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
         * @type {string || null}
         */
        this.CustomId = null;

        /**
         * 码规则状态 0:未生效 1:已生效 -1:已失效
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * CreateCodePack返回参数结构体
 * @class
 */
class CreateCodePackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包ID
         * @type {string || null}
         */
        this.PackId = null;

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
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMerchantById返回参数结构体
 * @class
 */
class DescribeMerchantByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Merchant || null}
         */
        this.Merchant = null;

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

        if (params.Merchant) {
            let obj = new Merchant();
            obj.deserialize(params.Merchant)
            this.Merchant = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 码类型
 * @class
 */
class CodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * CreateTraceData返回参数结构体
 * @class
 */
class CreateTraceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源ID
         * @type {string || null}
         */
        this.TraceId = null;

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
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomRuleById返回参数结构体
 * @class
 */
class DescribeCustomRuleByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CustomRule || null}
         */
        this.CustomRule = null;

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

        if (params.CustomRule) {
            let obj = new CustomRule();
            obj.deserialize(params.CustomRule)
            this.CustomRule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodeBatchs返回参数结构体
 * @class
 */
class DescribeCodeBatchsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CodeBatch> || null}
         */
        this.CodeBatchs = null;

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.CodeBatchs) {
            this.CodeBatchs = new Array();
            for (let z in params.CodeBatchs) {
                let obj = new CodeBatch();
                obj.deserialize(params.CodeBatchs[z]);
                this.CodeBatchs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCustomRule返回参数结构体
 * @class
 */
class CreateCustomRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CustomId = null;

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
        this.CustomId = 'CustomId' in params ? params.CustomId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTraceCodeUnlink请求参数结构体
 * @class
 */
class ModifyTraceCodeUnlinkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 溯源码列表
         * @type {Array.<string> || null}
         */
        this.Codes = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.Codes = 'Codes' in params ? params.Codes : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DescribeCodePacks返回参数结构体
 * @class
 */
class DescribeCodePacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CodePack> || null}
         */
        this.CodePacks = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.CodePacks) {
            this.CodePacks = new Array();
            for (let z in params.CodePacks) {
                let obj = new CodePack();
                obj.deserialize(params.CodePacks[z]);
                this.CodePacks.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodesByPack请求参数结构体
 * @class
 */
class DescribeCodesByPackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包ID
         * @type {string || null}
         */
        this.PackId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DescribeJobFileUrl请求参数结构体
 * @class
 */
class DescribeJobFileUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调度ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * CreateTraceCodesAsync返回参数结构体
 * @class
 */
class CreateTraceCodesAsyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCustomRules请求参数结构体
 * @class
 */
class DescribeCustomRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码规则状态 0:未生效 1:已生效 -1:已失效
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;

    }
}

/**
 * ModifyCodeBatch请求参数结构体
 * @class
 */
class ModifyCodeBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 状态 0: 未激活 1: 已激活 -1: 已冻结
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 模板ID，或者活动ID
         * @type {string || null}
         */
        this.MpTpl = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 批次编码，业务字段不判断唯一性
         * @type {string || null}
         */
        this.BatchCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MpTpl = 'MpTpl' in params ? params.MpTpl : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.BatchCode = 'BatchCode' in params ? params.BatchCode : null;

    }
}

/**
 * DescribeProductById请求参数结构体
 * @class
 */
class DescribeProductByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DescribeTraceCodes返回参数结构体
 * @class
 */
class DescribeTraceCodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TraceCode> || null}
         */
        this.TraceCodes = null;

        /**
         * 条数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.TraceCodes) {
            this.TraceCodes = new Array();
            for (let z in params.TraceCodes) {
                let obj = new TraceCode();
                obj.deserialize(params.TraceCodes[z]);
                this.TraceCodes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 付费信息使用量
 * @class
 */
class UsageQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户配额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FactoryCnt = null;

        /**
         * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ItemCnt = null;

        /**
         * 溯源码量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TrackCnt = null;

        /**
         * 营销码额度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SaleCnt = null;

        /**
         * 区块链上链次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChainCnt = null;

        /**
         * 营销风控次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskCnt = null;

        /**
         * 时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.FactoryCnt = 'FactoryCnt' in params ? params.FactoryCnt : null;
        this.ItemCnt = 'ItemCnt' in params ? params.ItemCnt : null;
        this.TrackCnt = 'TrackCnt' in params ? params.TrackCnt : null;
        this.SaleCnt = 'SaleCnt' in params ? params.SaleCnt : null;
        this.ChainCnt = 'ChainCnt' in params ? params.ChainCnt : null;
        this.RiskCnt = 'RiskCnt' in params ? params.RiskCnt : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateCorporationOrder请求参数结构体
 * @class
 */
class CreateCorporationOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CorpName = null;

        /**
         * 所有者ID
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 溯源码额度
         * @type {number || null}
         */
        this.CodeQuota = null;

        /**
         * 额度过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 金额
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 联系人
         * @type {string || null}
         */
        this.ContactPerson = null;

        /**
         * 联系电话
         * @type {string || null}
         */
        this.ContactNumber = null;

        /**
         * 备注
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
        this.CorpName = 'CorpName' in params ? params.CorpName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.CodeQuota = 'CodeQuota' in params ? params.CodeQuota : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.ContactPerson = 'ContactPerson' in params ? params.ContactPerson : null;
        this.ContactNumber = 'ContactNumber' in params ? params.ContactNumber : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CreateTraceCodes返回参数结构体
 * @class
 */
class CreateTraceCodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 导入成功码数量
         * @type {number || null}
         */
        this.ActiveCnt = null;

        /**
         * 批次码数量
         * @type {number || null}
         */
        this.CodeCnt = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.ActiveCnt = 'ActiveCnt' in params ? params.ActiveCnt : null;
        this.CodeCnt = 'CodeCnt' in params ? params.CodeCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTraceData请求参数结构体
 * @class
 */
class DeleteTraceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 溯源ID
         * @type {string || null}
         */
        this.TraceId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TraceId = 'TraceId' in params ? params.TraceId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DescribeScanLogs请求参数结构体
 * @class
 */
class DescribeScanLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * ModifyTraceCodeUnlink返回参数结构体
 * @class
 */
class ModifyTraceCodeUnlinkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功解绑溯源码的数量
         * @type {number || null}
         */
        this.UnlinkCnt = null;

        /**
         * 当前批次的码数量
         * @type {number || null}
         */
        this.CodeCnt = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

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
        this.UnlinkCnt = 'UnlinkCnt' in params ? params.UnlinkCnt : null;
        this.CodeCnt = 'CodeCnt' in params ? params.CodeCnt : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 商户信息
 * @class
 */
class Merchant extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户标识码
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 企业id
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 商户码规则
         * @type {string || null}
         */
        this.CodeRule = null;

        /**
         * 码来源类型 0: 安心平台 1: 第三方码
         * @type {number || null}
         */
        this.CodeType = null;

        /**
         * 第三方码域名前缀
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CodeRule = 'CodeRule' in params ? params.CodeRule : null;
        this.CodeType = 'CodeType' in params ? params.CodeType : null;
        this.CodeUrl = 'CodeUrl' in params ? params.CodeUrl : null;

    }
}

/**
 * 商品信息
 * @class
 */
class Product extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 企业id
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户标识码
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商品编号
         * @type {string || null}
         */
        this.ProductCode = null;

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商品规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Specification = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 商品图片
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Logo = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 预留字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ext || null}
         */
        this.Ext = null;

        /**
         * 商户名称
         * @type {string || null}
         */
        this.MerchantName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductCode = 'ProductCode' in params ? params.ProductCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Specification = 'Specification' in params ? params.Specification : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Ext) {
            let obj = new Ext();
            obj.deserialize(params.Ext)
            this.Ext = obj;
        }
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;

    }
}

/**
 * DescribeTmpToken请求参数结构体
 * @class
 */
class DescribeTmpTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * 溯源码
 * @class
 */
class TraceCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二维码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 码包ID
         * @type {string || null}
         */
        this.PackId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 所属商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 码状态 0: 冻结 1: 激活
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 商户名称
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 渠道商ID
         * @type {number || null}
         */
        this.AgentId = null;

        /**
         * 码层级 0: 最小级, 1: 一级, 2: 二级
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.PackId = 'PackId' in params ? params.PackId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * DescribeScanStats返回参数结构体
 * @class
 */
class DescribeScanStatsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计记录
         * @type {Array.<ScanStat> || null}
         */
        this.ScanStats = null;

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

        if (params.ScanStats) {
            this.ScanStats = new Array();
            for (let z in params.ScanStats) {
                let obj = new ScanStat();
                obj.deserialize(params.ScanStats[z]);
                this.ScanStats.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMerchant返回参数结构体
 * @class
 */
class CreateMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMerchants返回参数结构体
 * @class
 */
class DescribeMerchantsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Merchant> || null}
         */
        this.Merchants = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Merchants) {
            this.Merchants = new Array();
            for (let z in params.Merchants) {
                let obj = new Merchant();
                obj.deserialize(params.Merchants[z]);
                this.Merchants.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTraceDataList请求参数结构体
 * @class
 */
class DescribeTraceDataListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 任务ID 用于外部溯源
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 二维码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 溯源阶段 0:商品 1:通用 2:内部溯源 3:外部溯源
         * @type {number || null}
         */
        this.Phase = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * DescribeScanStats请求参数结构体
 * @class
 */
class DescribeScanStatsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 分页数量
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前分页
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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;

    }
}

/**
 * DeleteMerchant返回参数结构体
 * @class
 */
class DeleteMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户标识码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantId = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCodeBatch返回参数结构体
 * @class
 */
class DeleteCodeBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTraceChain请求参数结构体
 * @class
 */
class CreateTraceChainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 溯源ID
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
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.TraceId = 'TraceId' in params ? params.TraceId : null;

    }
}

/**
 * DescribeMerchantById请求参数结构体
 * @class
 */
class DescribeMerchantByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户标识码
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * DescribeProductById返回参数结构体
 * @class
 */
class DescribeProductByIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Product || null}
         */
        this.Product = null;

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

        if (params.Product) {
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCodePacks请求参数结构体
 * @class
 */
class DescribeCodePacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页数量
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 查询关键字
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 是否有流水码 0:无 1:有
         * @type {number || null}
         */
        this.SerialType = null;

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
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.SerialType = 'SerialType' in params ? params.SerialType : null;

    }
}

/**
 * DescribeJobFileUrl返回参数结构体
 * @class
 */
class DescribeJobFileUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 码包地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTraceCodeById请求参数结构体
 * @class
 */
class DescribeTraceCodeByIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 二维码
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * DeleteMerchant请求参数结构体
 * @class
 */
class DeleteMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户标识码
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;

    }
}

/**
 * 扫码统计
 * @class
 */
class ScanStat extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安心码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 企业ID
         * @type {number || null}
         */
        this.CorpId = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 扫码次数
         * @type {number || null}
         */
        this.Pv = null;

        /**
         * 扫码人数
         * @type {number || null}
         */
        this.Uv = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.CorpId = 'CorpId' in params ? params.CorpId : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.Pv = 'Pv' in params ? params.Pv : null;
        this.Uv = 'Uv' in params ? params.Uv : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyTraceCode返回参数结构体
 * @class
 */
class ModifyTraceCodeResponse extends  AbstractModel {
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
 * DescribeCodePackUrl返回参数结构体
 * @class
 */
class DescribeCodePackUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文字码包地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 图片码包地址，可能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImgUrl = null;

        /**
         * 文字码包Key，用于上传导入
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileKey = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.ImgUrl = 'ImgUrl' in params ? params.ImgUrl : null;
        this.FileKey = 'FileKey' in params ? params.FileKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCodeBatch返回参数结构体
 * @class
 */
class ModifyCodeBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {string || null}
         */
        this.BatchId = null;

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
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CodeBatch: CodeBatch,
    DescribeScanLogsResponse: DescribeScanLogsResponse,
    Quota: Quota,
    ScanLog: ScanLog,
    DescribeProductsRequest: DescribeProductsRequest,
    CreateCorporationOrderResponse: CreateCorporationOrderResponse,
    ModifyProductResponse: ModifyProductResponse,
    ModifyProductRequest: ModifyProductRequest,
    ModifyCustomRuleRequest: ModifyCustomRuleRequest,
    CodePart: CodePart,
    CodePack: CodePack,
    DeleteCodeBatchRequest: DeleteCodeBatchRequest,
    DescribeMerchantsRequest: DescribeMerchantsRequest,
    ModifyTraceCodeRequest: ModifyTraceCodeRequest,
    DescribeCustomRulesResponse: DescribeCustomRulesResponse,
    CreateMerchantRequest: CreateMerchantRequest,
    DescribeCodeBatchByIdRequest: DescribeCodeBatchByIdRequest,
    DescribeTraceCodeByIdResponse: DescribeTraceCodeByIdResponse,
    CustomRule: CustomRule,
    DescribeProductsResponse: DescribeProductsResponse,
    CreateCodeBatchResponse: CreateCodeBatchResponse,
    DescribeTraceDataListResponse: DescribeTraceDataListResponse,
    DescribeTraceCodesRequest: DescribeTraceCodesRequest,
    CreateTraceCodesAsyncRequest: CreateTraceCodesAsyncRequest,
    ModifyTraceDataResponse: ModifyTraceDataResponse,
    DeleteProductRequest: DeleteProductRequest,
    CreateTraceChainResponse: CreateTraceChainResponse,
    CorpQuota: CorpQuota,
    CreateCustomRuleRequest: CreateCustomRuleRequest,
    DescribeCodePackStatusRequest: DescribeCodePackStatusRequest,
    ModifyTraceDataRequest: ModifyTraceDataRequest,
    DescribeCodeBatchsRequest: DescribeCodeBatchsRequest,
    ModifyTraceDataRanksResponse: ModifyTraceDataRanksResponse,
    CreateTraceCodesRequest: CreateTraceCodesRequest,
    DescribeCodeBatchByIdResponse: DescribeCodeBatchByIdResponse,
    DescribeCorpQuotasResponse: DescribeCorpQuotasResponse,
    DescribeCodePackStatusResponse: DescribeCodePackStatusResponse,
    Job: Job,
    TraceData: TraceData,
    PackSpec: PackSpec,
    ModifyCustomRuleResponse: ModifyCustomRuleResponse,
    ModifyMerchantResponse: ModifyMerchantResponse,
    DescribeCodesByPackResponse: DescribeCodesByPackResponse,
    CreateProductResponse: CreateProductResponse,
    CreateTraceDataRequest: CreateTraceDataRequest,
    Ext: Ext,
    DescribeCorpQuotasRequest: DescribeCorpQuotasRequest,
    CreateProductRequest: CreateProductRequest,
    CreateCustomPackRequest: CreateCustomPackRequest,
    CreateCodePackRequest: CreateCodePackRequest,
    CreateCodeBatchRequest: CreateCodeBatchRequest,
    TraceItem: TraceItem,
    DescribeCustomRuleByIdRequest: DescribeCustomRuleByIdRequest,
    ChainData: ChainData,
    PhaseData: PhaseData,
    ModifyTraceDataRanksRequest: ModifyTraceDataRanksRequest,
    ModifyCustomRuleStatusResponse: ModifyCustomRuleStatusResponse,
    CreateCustomPackResponse: CreateCustomPackResponse,
    ModifyMerchantRequest: ModifyMerchantRequest,
    DescribeTmpTokenResponse: DescribeTmpTokenResponse,
    DescribeCodePackUrlRequest: DescribeCodePackUrlRequest,
    DeleteProductResponse: DeleteProductResponse,
    DeleteTraceDataResponse: DeleteTraceDataResponse,
    ModifyCustomRuleStatusRequest: ModifyCustomRuleStatusRequest,
    CreateCodePackResponse: CreateCodePackResponse,
    DescribeMerchantByIdResponse: DescribeMerchantByIdResponse,
    CodeItem: CodeItem,
    CreateTraceDataResponse: CreateTraceDataResponse,
    DescribeCustomRuleByIdResponse: DescribeCustomRuleByIdResponse,
    DescribeCodeBatchsResponse: DescribeCodeBatchsResponse,
    CreateCustomRuleResponse: CreateCustomRuleResponse,
    ModifyTraceCodeUnlinkRequest: ModifyTraceCodeUnlinkRequest,
    DescribeCodePacksResponse: DescribeCodePacksResponse,
    DescribeCodesByPackRequest: DescribeCodesByPackRequest,
    DescribeJobFileUrlRequest: DescribeJobFileUrlRequest,
    CreateTraceCodesAsyncResponse: CreateTraceCodesAsyncResponse,
    DescribeCustomRulesRequest: DescribeCustomRulesRequest,
    ModifyCodeBatchRequest: ModifyCodeBatchRequest,
    DescribeProductByIdRequest: DescribeProductByIdRequest,
    DescribeTraceCodesResponse: DescribeTraceCodesResponse,
    UsageQuota: UsageQuota,
    CreateCorporationOrderRequest: CreateCorporationOrderRequest,
    CreateTraceCodesResponse: CreateTraceCodesResponse,
    DeleteTraceDataRequest: DeleteTraceDataRequest,
    DescribeScanLogsRequest: DescribeScanLogsRequest,
    ModifyTraceCodeUnlinkResponse: ModifyTraceCodeUnlinkResponse,
    Merchant: Merchant,
    Product: Product,
    DescribeTmpTokenRequest: DescribeTmpTokenRequest,
    TraceCode: TraceCode,
    DescribeScanStatsResponse: DescribeScanStatsResponse,
    CreateMerchantResponse: CreateMerchantResponse,
    DescribeMerchantsResponse: DescribeMerchantsResponse,
    DescribeTraceDataListRequest: DescribeTraceDataListRequest,
    DescribeScanStatsRequest: DescribeScanStatsRequest,
    DeleteMerchantResponse: DeleteMerchantResponse,
    DeleteCodeBatchResponse: DeleteCodeBatchResponse,
    CreateTraceChainRequest: CreateTraceChainRequest,
    DescribeMerchantByIdRequest: DescribeMerchantByIdRequest,
    DescribeProductByIdResponse: DescribeProductByIdResponse,
    DescribeCodePacksRequest: DescribeCodePacksRequest,
    DescribeJobFileUrlResponse: DescribeJobFileUrlResponse,
    DescribeTraceCodeByIdRequest: DescribeTraceCodeByIdRequest,
    DeleteMerchantRequest: DeleteMerchantRequest,
    ScanStat: ScanStat,
    ModifyTraceCodeResponse: ModifyTraceCodeResponse,
    DescribeCodePackUrlResponse: DescribeCodePackUrlResponse,
    ModifyCodeBatchResponse: ModifyCodeBatchResponse,

}
