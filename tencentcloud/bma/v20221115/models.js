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
 * CreateBPFakeAPP返回参数结构体
 * @class
 */
class CreateBPFakeAPPResponse extends  AbstractModel {
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
 * DeleteBPWhiteList返回参数结构体
 * @class
 */
class DeleteBPWhiteListResponse extends  AbstractModel {
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
 * DescribeBPBrands返回参数结构体
 * @class
 */
class DescribeBPBrandsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌信息
         * @type {Array.<BrandData> || null}
         */
        this.Brands = null;

        /**
         * 品牌审核通知栏状态：0 不显示 1 显示
         * @type {number || null}
         */
        this.NoticeStatus = null;

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

        if (params.Brands) {
            this.Brands = new Array();
            for (let z in params.Brands) {
                let obj = new BrandData();
                obj.deserialize(params.Brands[z]);
                this.Brands.push(obj);
            }
        }
        this.NoticeStatus = 'NoticeStatus' in params ? params.NoticeStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBPBrands请求参数结构体
 * @class
 */
class DescribeBPBrandsRequest extends  AbstractModel {
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
 * CreateBPBrand请求参数结构体
 * @class
 */
class CreateBPBrandRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 联系电话
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 营业执照
         * @type {string || null}
         */
        this.License = null;

        /**
         * 授权书
         * @type {string || null}
         */
        this.Authorization = null;

        /**
         * 商标名称
         * @type {Array.<string> || null}
         */
        this.TrademarkNames = null;

        /**
         * 商标证明
         * @type {Array.<string> || null}
         */
        this.Trademarks = null;

        /**
         * 是否涉及转让: 0-不转让 1-转让
         * @type {Array.<string> || null}
         */
        this.IsTransfers = null;

        /**
         * 转让证明
         * @type {Array.<string> || null}
         */
        this.Transfers = null;

        /**
         * 保护网址
         * @type {Array.<string> || null}
         */
        this.ProtectURLs = null;

        /**
         * 保护应用
         * @type {Array.<string> || null}
         */
        this.ProtectAPPs = null;

        /**
         * 保护公众号
         * @type {Array.<string> || null}
         */
        this.ProtectOfficialAccounts = null;

        /**
         * 保护小程序
         * @type {Array.<string> || null}
         */
        this.ProtectMiniPrograms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.License = 'License' in params ? params.License : null;
        this.Authorization = 'Authorization' in params ? params.Authorization : null;
        this.TrademarkNames = 'TrademarkNames' in params ? params.TrademarkNames : null;
        this.Trademarks = 'Trademarks' in params ? params.Trademarks : null;
        this.IsTransfers = 'IsTransfers' in params ? params.IsTransfers : null;
        this.Transfers = 'Transfers' in params ? params.Transfers : null;
        this.ProtectURLs = 'ProtectURLs' in params ? params.ProtectURLs : null;
        this.ProtectAPPs = 'ProtectAPPs' in params ? params.ProtectAPPs : null;
        this.ProtectOfficialAccounts = 'ProtectOfficialAccounts' in params ? params.ProtectOfficialAccounts : null;
        this.ProtectMiniPrograms = 'ProtectMiniPrograms' in params ? params.ProtectMiniPrograms : null;

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
         * 过滤参数
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
 * 仿冒应用数据
 * @class
 */
class FakeAPPData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒应用id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FakeAPPId = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 仿冒来源：0-系统检测 1-人工举报
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Origin = null;

        /**
         * 仿冒应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeAPPName = null;

        /**
         * 仿冒应用包名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeAPPPackageName = null;

        /**
         * 仿冒应用证书
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeAPPCert = null;

        /**
         * 仿冒应用大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeAPPSize = null;

        /**
         * 热度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Heat = null;

        /**
         * 协助处置状态：0-未处置 1-处置中 2-处置成功 3-处置失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BlockStatus = null;

        /**
         * 协助处置状态说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlockNote = null;

        /**
         * 关停状态：0-未关停 1-关停中 2-关停成功 3-关停失败 4-重复上架
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OfflineStatus = null;

        /**
         * 关停状态说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineNote = null;

        /**
         * app来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadWay = null;

        /**
         * 新增时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * App下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadCosURL = null;

        /**
         * 资质证明状态:0-不可用 1-可用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CertificationStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeAPPId = 'FakeAPPId' in params ? params.FakeAPPId : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.FakeAPPName = 'FakeAPPName' in params ? params.FakeAPPName : null;
        this.FakeAPPPackageName = 'FakeAPPPackageName' in params ? params.FakeAPPPackageName : null;
        this.FakeAPPCert = 'FakeAPPCert' in params ? params.FakeAPPCert : null;
        this.FakeAPPSize = 'FakeAPPSize' in params ? params.FakeAPPSize : null;
        this.Heat = 'Heat' in params ? params.Heat : null;
        this.BlockStatus = 'BlockStatus' in params ? params.BlockStatus : null;
        this.BlockNote = 'BlockNote' in params ? params.BlockNote : null;
        this.OfflineStatus = 'OfflineStatus' in params ? params.OfflineStatus : null;
        this.OfflineNote = 'OfflineNote' in params ? params.OfflineNote : null;
        this.DownloadWay = 'DownloadWay' in params ? params.DownloadWay : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.DownloadCosURL = 'DownloadCosURL' in params ? params.DownloadCosURL : null;
        this.CertificationStatus = 'CertificationStatus' in params ? params.CertificationStatus : null;

    }
}

/**
 * 白名单数据
 * @class
 */
class WhiteListData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WhiteListId = null;

        /**
         * 企业id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompanyId = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 资产类型：0-网站 1-app 2-公众号 3-小程序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AssetsType = null;

        /**
         * 白名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WhiteList = null;

        /**
         * 新增时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListId = 'WhiteListId' in params ? params.WhiteListId : null;
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.AssetsType = 'AssetsType' in params ? params.AssetsType : null;
        this.WhiteList = 'WhiteList' in params ? params.WhiteList : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

    }
}

/**
 * 商标响应数据
 * @class
 */
class TrademarkData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商标证明
         * @type {string || null}
         */
        this.Trademark = null;

        /**
         * 商标审核状态
         * @type {number || null}
         */
        this.TrademarkStatus = null;

        /**
         * 商标审核状态说明
         * @type {string || null}
         */
        this.TrademarkNote = null;

        /**
         * 商标id
         * @type {number || null}
         */
        this.TrademarkId = null;

        /**
         * 商标转让书
         * @type {string || null}
         */
        this.Transfer = null;

        /**
         * 商标转让书审核状态
         * @type {number || null}
         */
        this.TransferStatus = null;

        /**
         * 商标转让书审核状态说明
         * @type {string || null}
         */
        this.TransferNote = null;

        /**
         * 商标名称
         * @type {string || null}
         */
        this.TrademarkName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Trademark = 'Trademark' in params ? params.Trademark : null;
        this.TrademarkStatus = 'TrademarkStatus' in params ? params.TrademarkStatus : null;
        this.TrademarkNote = 'TrademarkNote' in params ? params.TrademarkNote : null;
        this.TrademarkId = 'TrademarkId' in params ? params.TrademarkId : null;
        this.Transfer = 'Transfer' in params ? params.Transfer : null;
        this.TransferStatus = 'TransferStatus' in params ? params.TransferStatus : null;
        this.TransferNote = 'TransferNote' in params ? params.TransferNote : null;
        this.TrademarkName = 'TrademarkName' in params ? params.TrademarkName : null;

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
         * @type {Array.<FakeURLData> || null}
         */
        this.FakeURLs = null;

        /**
         * 仿冒网址总数
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

        if (params.FakeURLs) {
            this.FakeURLs = new Array();
            for (let z in params.FakeURLs) {
                let obj = new FakeURLData();
                obj.deserialize(params.FakeURLs[z]);
                this.FakeURLs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 企业id
         * @type {number || null}
         */
        this.CompanyId = null;

        /**
         * 仿冒网址
         * @type {string || null}
         */
        this.FakeURL = null;

        /**
         * 仿冒网址截图
         * @type {Array.<string> || null}
         */
        this.FakeURLSnapshots = null;

        /**
         * 备注
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.FakeURL = 'FakeURL' in params ? params.FakeURL : null;
        this.FakeURLSnapshots = 'FakeURLSnapshots' in params ? params.FakeURLSnapshots : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * CreateBPFakeAPPList返回参数结构体
 * @class
 */
class CreateBPFakeAPPListResponse extends  AbstractModel {
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
 * DescribeBPWhiteLists返回参数结构体
 * @class
 */
class DescribeBPWhiteListsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单列表
         * @type {Array.<WhiteListData> || null}
         */
        this.WhiteLists = null;

        /**
         * 白名单总数
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

        if (params.WhiteLists) {
            this.WhiteLists = new Array();
            for (let z in params.WhiteLists) {
                let obj = new WhiteListData();
                obj.deserialize(params.WhiteLists[z]);
                this.WhiteLists.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBPFakeAPPList请求参数结构体
 * @class
 */
class CreateBPFakeAPPListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量模板
         * @type {string || null}
         */
        this.FakeAPPs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeAPPs = 'FakeAPPs' in params ? params.FakeAPPs : null;

    }
}

/**
 * 过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤参数值
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateBPWhiteList返回参数结构体
 * @class
 */
class CreateBPWhiteListResponse extends  AbstractModel {
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
 * 服务响应数据
 * @class
 */
class ServiceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网站保护关联资产数
         * @type {number || null}
         */
        this.ProtectURLCount = null;

        /**
         * 网站保护服务到期时间
         * @type {string || null}
         */
        this.ProtectURLExpireTime = null;

        /**
         * 应用保护关联资产数
         * @type {number || null}
         */
        this.ProtectAPPCount = null;

        /**
         * 应用保护服务到期时间
         * @type {string || null}
         */
        this.ProtectAPPExpireTime = null;

        /**
         * 公众号保护关联资产数
         * @type {number || null}
         */
        this.ProtectOfficialAccountCount = null;

        /**
         * 公众号保护服务到期时间
         * @type {string || null}
         */
        this.ProtectOfficialAccountExpireTime = null;

        /**
         * 小程序保护关联资产数
         * @type {number || null}
         */
        this.ProtectMiniProgramCount = null;

        /**
         * 小程序保护服务到期时间
         * @type {string || null}
         */
        this.ProtectMiniProgramExpireTime = null;

        /**
         * 关停下架使用次数
         * @type {number || null}
         */
        this.OfflineCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectURLCount = 'ProtectURLCount' in params ? params.ProtectURLCount : null;
        this.ProtectURLExpireTime = 'ProtectURLExpireTime' in params ? params.ProtectURLExpireTime : null;
        this.ProtectAPPCount = 'ProtectAPPCount' in params ? params.ProtectAPPCount : null;
        this.ProtectAPPExpireTime = 'ProtectAPPExpireTime' in params ? params.ProtectAPPExpireTime : null;
        this.ProtectOfficialAccountCount = 'ProtectOfficialAccountCount' in params ? params.ProtectOfficialAccountCount : null;
        this.ProtectOfficialAccountExpireTime = 'ProtectOfficialAccountExpireTime' in params ? params.ProtectOfficialAccountExpireTime : null;
        this.ProtectMiniProgramCount = 'ProtectMiniProgramCount' in params ? params.ProtectMiniProgramCount : null;
        this.ProtectMiniProgramExpireTime = 'ProtectMiniProgramExpireTime' in params ? params.ProtectMiniProgramExpireTime : null;
        this.OfflineCount = 'OfflineCount' in params ? params.OfflineCount : null;

    }
}

/**
 * 仿冒网址数据
 * @class
 */
class FakeURLData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒网址id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FakeURLId = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 仿冒来源：0-系统检测 1-人工举报
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Origin = null;

        /**
         * 仿冒网址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeURL = null;

        /**
         * 仿冒域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FakeDomain = null;

        /**
         * 热度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Heat = null;

        /**
         * 协助处置状态：0-未处置 1-处置中 2-处置成功 3-处置失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BlockStatus = null;

        /**
         * 协助处置状态说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BlockNote = null;

        /**
         * 关停状态：0-未关停 1-关停中 2-关停成功 3-关停失败 4-重复上架
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OfflineStatus = null;

        /**
         * 关停状态说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineNote = null;

        /**
         * ip地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

        /**
         * ip地理位置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IPLocation = null;

        /**
         * 网站所属单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebCompany = null;

        /**
         * 网站性质
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebAttribute = null;

        /**
         * 网站名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebName = null;

        /**
         * 备案号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebICP = null;

        /**
         * 网站创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebCreateTime = null;

        /**
         * 网站过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebExpireTime = null;

        /**
         * 新增时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 资质证明状态：0-不可用 1-可用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CertificationStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeURLId = 'FakeURLId' in params ? params.FakeURLId : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.FakeURL = 'FakeURL' in params ? params.FakeURL : null;
        this.FakeDomain = 'FakeDomain' in params ? params.FakeDomain : null;
        this.Heat = 'Heat' in params ? params.Heat : null;
        this.BlockStatus = 'BlockStatus' in params ? params.BlockStatus : null;
        this.BlockNote = 'BlockNote' in params ? params.BlockNote : null;
        this.OfflineStatus = 'OfflineStatus' in params ? params.OfflineStatus : null;
        this.OfflineNote = 'OfflineNote' in params ? params.OfflineNote : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.IPLocation = 'IPLocation' in params ? params.IPLocation : null;
        this.WebCompany = 'WebCompany' in params ? params.WebCompany : null;
        this.WebAttribute = 'WebAttribute' in params ? params.WebAttribute : null;
        this.WebName = 'WebName' in params ? params.WebName : null;
        this.WebICP = 'WebICP' in params ? params.WebICP : null;
        this.WebCreateTime = 'WebCreateTime' in params ? params.WebCreateTime : null;
        this.WebExpireTime = 'WebExpireTime' in params ? params.WebExpireTime : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.CertificationStatus = 'CertificationStatus' in params ? params.CertificationStatus : null;

    }
}

/**
 * DeleteBPWhiteList请求参数结构体
 * @class
 */
class DeleteBPWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 白名单id
         * @type {number || null}
         */
        this.WhiteListId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WhiteListId = 'WhiteListId' in params ? params.WhiteListId : null;

    }
}

/**
 * DescribeBPWhiteLists请求参数结构体
 * @class
 */
class DescribeBPWhiteListsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
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
 * CreateBPFakeURLs返回参数结构体
 * @class
 */
class CreateBPFakeURLsResponse extends  AbstractModel {
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
 * DescribeBPFakeAPPList请求参数结构体
 * @class
 */
class DescribeBPFakeAPPListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数
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
 * CreateBPFakeAPP请求参数结构体
 * @class
 */
class CreateBPFakeAPPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业id
         * @type {number || null}
         */
        this.CompanyId = null;

        /**
         * 仿冒应用名称
         * @type {string || null}
         */
        this.FakeAPPName = null;

        /**
         * 仿冒来源
         * @type {string || null}
         */
        this.APPChan = null;

        /**
         * 仿冒应用包名
         * @type {string || null}
         */
        this.FakeAPPPackageName = null;

        /**
         * 仿冒应用证书
         * @type {string || null}
         */
        this.FakeAPPCert = null;

        /**
         * 仿冒应用大小
         * @type {string || null}
         */
        this.FakeAPPSize = null;

        /**
         * 仿冒截图
         * @type {Array.<string> || null}
         */
        this.FakeAPPSnapshots = null;

        /**
         * 备注
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.FakeAPPName = 'FakeAPPName' in params ? params.FakeAPPName : null;
        this.APPChan = 'APPChan' in params ? params.APPChan : null;
        this.FakeAPPPackageName = 'FakeAPPPackageName' in params ? params.FakeAPPPackageName : null;
        this.FakeAPPCert = 'FakeAPPCert' in params ? params.FakeAPPCert : null;
        this.FakeAPPSize = 'FakeAPPSize' in params ? params.FakeAPPSize : null;
        this.FakeAPPSnapshots = 'FakeAPPSnapshots' in params ? params.FakeAPPSnapshots : null;
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * 品牌响应数据
 * @class
 */
class BrandData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌Id
         * @type {number || null}
         */
        this.CompanyId = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 品牌名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 联系电话
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 营业执照
         * @type {string || null}
         */
        this.License = null;

        /**
         * 营业执照审核状态
         * @type {number || null}
         */
        this.LicenseStatus = null;

        /**
         * 营业执照审核状态说明
         * @type {string || null}
         */
        this.LicenseNote = null;

        /**
         * 授权书
         * @type {string || null}
         */
        this.Authorization = null;

        /**
         * 授权书审核状态
         * @type {number || null}
         */
        this.AuthorizationStatus = null;

        /**
         * 授权书审核状态说明
         * @type {string || null}
         */
        this.AuthorizationNote = null;

        /**
         * 商标信息
         * @type {Array.<TrademarkData> || null}
         */
        this.Trademarks = null;

        /**
         * 新增时间
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 服务信息
         * @type {ServiceData || null}
         */
        this.Services = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.License = 'License' in params ? params.License : null;
        this.LicenseStatus = 'LicenseStatus' in params ? params.LicenseStatus : null;
        this.LicenseNote = 'LicenseNote' in params ? params.LicenseNote : null;
        this.Authorization = 'Authorization' in params ? params.Authorization : null;
        this.AuthorizationStatus = 'AuthorizationStatus' in params ? params.AuthorizationStatus : null;
        this.AuthorizationNote = 'AuthorizationNote' in params ? params.AuthorizationNote : null;

        if (params.Trademarks) {
            this.Trademarks = new Array();
            for (let z in params.Trademarks) {
                let obj = new TrademarkData();
                obj.deserialize(params.Trademarks[z]);
                this.Trademarks.push(obj);
            }
        }
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

        if (params.Services) {
            let obj = new ServiceData();
            obj.deserialize(params.Services)
            this.Services = obj;
        }

    }
}

/**
 * CreateBPBrand返回参数结构体
 * @class
 */
class CreateBPBrandResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业id
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
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateBPWhiteList请求参数结构体
 * @class
 */
class CreateBPWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业Id
         * @type {number || null}
         */
        this.CompanyId = null;

        /**
         * 白名单类型：0-网站 1-应用 2-公众号 3-小程
         * @type {number || null}
         */
        this.WhiteListType = null;

        /**
         * 白名单名称
         * @type {Array.<string> || null}
         */
        this.WhiteLists = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CompanyId = 'CompanyId' in params ? params.CompanyId : null;
        this.WhiteListType = 'WhiteListType' in params ? params.WhiteListType : null;
        this.WhiteLists = 'WhiteLists' in params ? params.WhiteLists : null;

    }
}

/**
 * CreateBPFakeURLs请求参数结构体
 * @class
 */
class CreateBPFakeURLsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量模板
         * @type {string || null}
         */
        this.FakeURLs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FakeURLs = 'FakeURLs' in params ? params.FakeURLs : null;

    }
}

/**
 * DescribeBPFakeAPPList返回参数结构体
 * @class
 */
class DescribeBPFakeAPPListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仿冒应用列表
         * @type {Array.<FakeAPPData> || null}
         */
        this.FakeAPPList = null;

        /**
         * 仿冒应用总数
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

        if (params.FakeAPPList) {
            this.FakeAPPList = new Array();
            for (let z in params.FakeAPPList) {
                let obj = new FakeAPPData();
                obj.deserialize(params.FakeAPPList[z]);
                this.FakeAPPList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateBPFakeAPPResponse: CreateBPFakeAPPResponse,
    DeleteBPWhiteListResponse: DeleteBPWhiteListResponse,
    DescribeBPBrandsResponse: DescribeBPBrandsResponse,
    DescribeBPBrandsRequest: DescribeBPBrandsRequest,
    CreateBPBrandRequest: CreateBPBrandRequest,
    DescribeBPFakeURLsRequest: DescribeBPFakeURLsRequest,
    FakeAPPData: FakeAPPData,
    WhiteListData: WhiteListData,
    TrademarkData: TrademarkData,
    DescribeBPFakeURLsResponse: DescribeBPFakeURLsResponse,
    CreateBPFakeURLRequest: CreateBPFakeURLRequest,
    CreateBPFakeAPPListResponse: CreateBPFakeAPPListResponse,
    DescribeBPWhiteListsResponse: DescribeBPWhiteListsResponse,
    CreateBPFakeAPPListRequest: CreateBPFakeAPPListRequest,
    Filter: Filter,
    CreateBPWhiteListResponse: CreateBPWhiteListResponse,
    ServiceData: ServiceData,
    FakeURLData: FakeURLData,
    DeleteBPWhiteListRequest: DeleteBPWhiteListRequest,
    DescribeBPWhiteListsRequest: DescribeBPWhiteListsRequest,
    CreateBPFakeURLsResponse: CreateBPFakeURLsResponse,
    DescribeBPFakeAPPListRequest: DescribeBPFakeAPPListRequest,
    CreateBPFakeAPPRequest: CreateBPFakeAPPRequest,
    BrandData: BrandData,
    CreateBPBrandResponse: CreateBPBrandResponse,
    CreateBPFakeURLResponse: CreateBPFakeURLResponse,
    CreateBPWhiteListRequest: CreateBPWhiteListRequest,
    CreateBPFakeURLsRequest: CreateBPFakeURLsRequest,
    DescribeBPFakeAPPListResponse: DescribeBPFakeAPPListResponse,

}
