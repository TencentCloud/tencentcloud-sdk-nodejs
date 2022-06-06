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
 * DescribeKBComponentVulnerability请求参数结构体
 * @class
 */
class DescribeKBComponentVulnerabilityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件的PURL，其中Name和Version为必填字段
         * @type {PURL || null}
         */
        this.PURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PURL) {
            let obj = new PURL();
            obj.deserialize(params.PURL)
            this.PURL = obj;
        }

    }
}

/**
 * 描述组件漏洞相关概览信息。
 * @class
 */
class ComponentVulnerabilityUnion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞概览信息
         * @type {VulnerabilitySummary || null}
         */
        this.Summary = null;

        /**
         * 与组件相关的漏洞概览信息
         * @type {ComponentVulnerabilitySummary || null}
         */
        this.SummaryInComponent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Summary) {
            let obj = new VulnerabilitySummary();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }

        if (params.SummaryInComponent) {
            let obj = new ComponentVulnerabilitySummary();
            obj.deserialize(params.SummaryInComponent)
            this.SummaryInComponent = obj;
        }

    }
}

/**
 * 许可证详细信息。
 * @class
 */
class LicenseUnion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 许可证概览信息
         * @type {LicenseSummary || null}
         */
        this.LicenseSummary = null;

        /**
         * 许可证详细信息
         * @type {LicenseDetail || null}
         */
        this.LicenseDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LicenseSummary) {
            let obj = new LicenseSummary();
            obj.deserialize(params.LicenseSummary)
            this.LicenseSummary = obj;
        }

        if (params.LicenseDetail) {
            let obj = new LicenseDetail();
            obj.deserialize(params.LicenseDetail)
            this.LicenseDetail = obj;
        }

    }
}

/**
 * DescribeKBComponentVulnerability返回参数结构体
 * @class
 */
class DescribeKBComponentVulnerabilityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ComponentVulnerabilityUnion> || null}
         */
        this.VulnerabilityList = null;

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

        if (params.VulnerabilityList) {
            this.VulnerabilityList = new Array();
            for (let z in params.VulnerabilityList) {
                let obj = new ComponentVulnerabilityUnion();
                obj.deserialize(params.VulnerabilityList[z]);
                this.VulnerabilityList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述许可证的概览信息。
 * @class
 */
class LicenseSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 许可证标识符
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 许可证的SPDX标识符，见 https://spdx.org/licenses/
         * @type {string || null}
         */
        this.SPDXKey = null;

        /**
         * 许可证短名称
         * @type {string || null}
         */
        this.ShortName = null;

        /**
         * 许可证完整名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * License风险等级
<li>NotDefined</li>
<li>LowRisk</li>
<li>MediumRisk</li>
<li>HighRisk</li>
         * @type {string || null}
         */
        this.Risk = null;

        /**
         * 许可证来源URL
         * @type {string || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.SPDXKey = 'SPDXKey' in params ? params.SPDXKey : null;
        this.ShortName = 'ShortName' in params ? params.ShortName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Risk = 'Risk' in params ? params.Risk : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * PURL下的Qualifier属性类型，用于定义第三方组件的额外属性，见 https://github.com/package-url/purl-spec。
 * @class
 */
class Qualifier extends  AbstractModel {
    constructor(){
        super();

        /**
         * 额外属性的名称。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 额外属性的值。
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Cvssv3.0详细信息。
 * @class
 */
class CVSSV3Info extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVE评分。
         * @type {number || null}
         */
        this.CVSS = null;

        /**
         * AttackVector 攻击途径。
取值范围：
<li>NETWORK 远程</li>
<li>ADJACENT_NETWORK 近邻</li>
<li>LOCAL 本地</li>
<li>PHYSICAL 物理</li>
         * @type {string || null}
         */
        this.AttackVector = null;

        /**
         * AttackComplexity 攻击复杂度。
取值范围：
<li>HIGH 高</li>
<li>LOW 低</li>
         * @type {string || null}
         */
        this.AttackComplexity = null;

        /**
         * PrivilegesRequired 触发特权。
取值范围：
<li>HIGH 高</li>
<li>LOW 低</li>
<li>NONE 无</li>
         * @type {string || null}
         */
        this.PrivilegesRequired = null;

        /**
         * UserInteraction 交互必要性。
取值范围：
<li>NONE 无</li>
<li>REQUIRED 需要</li>
         * @type {string || null}
         */
        this.UserInteraction = null;

        /**
         * Scope 绕过安全边界。
取值范围：
<li>UNCHANGED 否</li>
<li>CHANGED 能</li>
         * @type {string || null}
         */
        this.Scope = null;

        /**
         * ConfidentialityImpact 机密性影响。
取值范围：
<li>NONE 无</li>
<li>LOW 低</li>
<li>HIGH 高</li>
         * @type {string || null}
         */
        this.ConImpact = null;

        /**
         * IntegrityImpact 完整性影响。
取值范围：
<li>NONE 无</li>
<li>LOW 低</li>
<li>HIGH 高</li>
         * @type {string || null}
         */
        this.IntegrityImpact = null;

        /**
         * AvailabilityImpact 可用性影响。
取值范围：
<li>NONE 无</li>
<li>LOW 低</li>
<li>HIGH 高</li>
         * @type {string || null}
         */
        this.AvailabilityImpact = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CVSS = 'CVSS' in params ? params.CVSS : null;
        this.AttackVector = 'AttackVector' in params ? params.AttackVector : null;
        this.AttackComplexity = 'AttackComplexity' in params ? params.AttackComplexity : null;
        this.PrivilegesRequired = 'PrivilegesRequired' in params ? params.PrivilegesRequired : null;
        this.UserInteraction = 'UserInteraction' in params ? params.UserInteraction : null;
        this.Scope = 'Scope' in params ? params.Scope : null;
        this.ConImpact = 'ConImpact' in params ? params.ConImpact : null;
        this.IntegrityImpact = 'IntegrityImpact' in params ? params.IntegrityImpact : null;
        this.AvailabilityImpact = 'AvailabilityImpact' in params ? params.AvailabilityImpact : null;

    }
}

/**
 * 描述一个第三方组件的源信息。
 * @class
 */
class Component extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方组件的PURL
         * @type {PURL || null}
         */
        this.PURL = null;

        /**
         * 第三方组件的主页
         * @type {string || null}
         */
        this.Homepage = null;

        /**
         * 第三方组件的简介
         * @type {string || null}
         */
        this.Summary = null;

        /**
         * 第三方组件的别名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NicknameList = null;

        /**
         * 第三方组件的代码位置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CodeLocationList = null;

        /**
         * 第三方组件的许可证表达式
         * @type {string || null}
         */
        this.LicenseExpression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PURL) {
            let obj = new PURL();
            obj.deserialize(params.PURL)
            this.PURL = obj;
        }
        this.Homepage = 'Homepage' in params ? params.Homepage : null;
        this.Summary = 'Summary' in params ? params.Summary : null;
        this.NicknameList = 'NicknameList' in params ? params.NicknameList : null;
        this.CodeLocationList = 'CodeLocationList' in params ? params.CodeLocationList : null;
        this.LicenseExpression = 'LicenseExpression' in params ? params.LicenseExpression : null;

    }
}

/**
 * DescribeKBVulnerability返回参数结构体
 * @class
 */
class DescribeKBVulnerabilityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VulnerabilityUnion> || null}
         */
        this.VulnerabilityDetailList = null;

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

        if (params.VulnerabilityDetailList) {
            this.VulnerabilityDetailList = new Array();
            for (let z in params.VulnerabilityDetailList) {
                let obj = new VulnerabilityUnion();
                obj.deserialize(params.VulnerabilityDetailList[z]);
                this.VulnerabilityDetailList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKBLicense返回参数结构体
 * @class
 */
class DescribeKBLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 许可证列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LicenseUnion> || null}
         */
        this.LicenseList = null;

        /**
         * 用于匹配的License表达式
         * @type {string || null}
         */
        this.NormalizedLicenseExpression = null;

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

        if (params.LicenseList) {
            this.LicenseList = new Array();
            for (let z in params.LicenseList) {
                let obj = new LicenseUnion();
                obj.deserialize(params.LicenseList[z]);
                this.LicenseList.push(obj);
            }
        }
        this.NormalizedLicenseExpression = 'NormalizedLicenseExpression' in params ? params.NormalizedLicenseExpression : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述漏洞的详细信息。
 * @class
 */
class VulnerabilityUnion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞概览信息
         * @type {VulnerabilitySummary || null}
         */
        this.Summary = null;

        /**
         * 漏洞详细信息
         * @type {VulnerabilityDetail || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Summary) {
            let obj = new VulnerabilitySummary();
            obj.deserialize(params.Summary)
            this.Summary = obj;
        }

        if (params.Detail) {
            let obj = new VulnerabilityDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

    }
}

/**
 * 描述许可证的详细信息。
 * @class
 */
class LicenseDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 许可证内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 许可证允许信息列表
         * @type {Array.<LicenseRestriction> || null}
         */
        this.ConditionSet = null;

        /**
         * 许可证要求信息列表
         * @type {Array.<LicenseRestriction> || null}
         */
        this.ForbiddenSet = null;

        /**
         * 许可证禁止信息列表
         * @type {Array.<LicenseRestriction> || null}
         */
        this.PermissionSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

        if (params.ConditionSet) {
            this.ConditionSet = new Array();
            for (let z in params.ConditionSet) {
                let obj = new LicenseRestriction();
                obj.deserialize(params.ConditionSet[z]);
                this.ConditionSet.push(obj);
            }
        }

        if (params.ForbiddenSet) {
            this.ForbiddenSet = new Array();
            for (let z in params.ForbiddenSet) {
                let obj = new LicenseRestriction();
                obj.deserialize(params.ForbiddenSet[z]);
                this.ForbiddenSet.push(obj);
            }
        }

        if (params.PermissionSet) {
            this.PermissionSet = new Array();
            for (let z in params.PermissionSet) {
                let obj = new LicenseRestriction();
                obj.deserialize(params.PermissionSet[z]);
                this.PermissionSet.push(obj);
            }
        }

    }
}

/**
 * DescribeKBVulnerability请求参数结构体
 * @class
 */
class DescribeKBVulnerabilityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVE ID列表（不能与Vul ID同时存在）
         * @type {Array.<string> || null}
         */
        this.CVEID = null;

        /**
         * Vul ID列表（不能与CVE ID 同时存在）
         * @type {Array.<string> || null}
         */
        this.VulID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CVEID = 'CVEID' in params ? params.CVEID : null;
        this.VulID = 'VulID' in params ? params.VulID : null;

    }
}

/**
 * 描述漏洞详细信息。
 * @class
 */
class VulnerabilityDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞类别
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 漏洞分类
         * @type {string || null}
         */
        this.CategoryType = null;

        /**
         * 漏洞描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 漏洞官方解决方案
         * @type {string || null}
         */
        this.OfficialSolution = null;

        /**
         * 漏洞信息参考列表
         * @type {Array.<string> || null}
         */
        this.ReferenceList = null;

        /**
         * 漏洞防御方案
         * @type {string || null}
         */
        this.DefenseSolution = null;

        /**
         * 漏洞CVSSv2信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CVSSV2Info || null}
         */
        this.CVSSv2Info = null;

        /**
         * 漏洞CVSSv3信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CVSSV3Info || null}
         */
        this.CVSSv3Info = null;

        /**
         * 漏洞提交时间
         * @type {string || null}
         */
        this.SubmitTime = null;

        /**
         * CWE编号
         * @type {string || null}
         */
        this.CWEID = null;

        /**
         * 漏洞CVSSv2向量
         * @type {string || null}
         */
        this.CVSSv2Vector = null;

        /**
         * 漏洞CVSSv3向量
         * @type {string || null}
         */
        this.CVSSv3Vector = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Category = 'Category' in params ? params.Category : null;
        this.CategoryType = 'CategoryType' in params ? params.CategoryType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OfficialSolution = 'OfficialSolution' in params ? params.OfficialSolution : null;
        this.ReferenceList = 'ReferenceList' in params ? params.ReferenceList : null;
        this.DefenseSolution = 'DefenseSolution' in params ? params.DefenseSolution : null;

        if (params.CVSSv2Info) {
            let obj = new CVSSV2Info();
            obj.deserialize(params.CVSSv2Info)
            this.CVSSv2Info = obj;
        }

        if (params.CVSSv3Info) {
            let obj = new CVSSV3Info();
            obj.deserialize(params.CVSSv3Info)
            this.CVSSv3Info = obj;
        }
        this.SubmitTime = 'SubmitTime' in params ? params.SubmitTime : null;
        this.CWEID = 'CWEID' in params ? params.CWEID : null;
        this.CVSSv2Vector = 'CVSSv2Vector' in params ? params.CVSSv2Vector : null;
        this.CVSSv3Vector = 'CVSSv3Vector' in params ? params.CVSSv3Vector : null;

    }
}

/**
 * DescribeKBComponent返回参数结构体
 * @class
 */
class DescribeKBComponentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配的组件信息
         * @type {Component || null}
         */
        this.Component = null;

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

        if (params.Component) {
            let obj = new Component();
            obj.deserialize(params.Component)
            this.Component = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述漏洞的摘要信息。
 * @class
 */
class VulnerabilitySummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 漏洞ID
         * @type {string || null}
         */
        this.VulID = null;

        /**
         * 漏洞所属CVE编号
         * @type {string || null}
         */
        this.CVEID = null;

        /**
         * 漏洞所属CNVD编号
         * @type {string || null}
         */
        this.CNVDID = null;

        /**
         * 漏洞所属CNNVD编号
         * @type {string || null}
         */
        this.CNNVDID = null;

        /**
         * 漏洞名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 该漏洞是否是需重点关注的漏洞
         * @type {boolean || null}
         */
        this.IsSuggest = null;

        /**
         * 漏洞风险等级
<li>Critical</li>
<li>High</li>
<li>Medium</li>
<li>Low</li>
         * @type {string || null}
         */
        this.Severity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VulID = 'VulID' in params ? params.VulID : null;
        this.CVEID = 'CVEID' in params ? params.CVEID : null;
        this.CNVDID = 'CNVDID' in params ? params.CNVDID : null;
        this.CNNVDID = 'CNNVDID' in params ? params.CNNVDID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IsSuggest = 'IsSuggest' in params ? params.IsSuggest : null;
        this.Severity = 'Severity' in params ? params.Severity : null;

    }
}

/**
 * DescribeKBLicense请求参数结构体
 * @class
 */
class DescribeKBLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * License表达式
         * @type {string || null}
         */
        this.LicenseExpression = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseExpression = 'LicenseExpression' in params ? params.LicenseExpression : null;

    }
}

/**
 * CVSSv2.0详细信息。
 * @class
 */
class CVSSV2Info extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVE评分。
         * @type {number || null}
         */
        this.CVSS = null;

        /**
         * AccessVector 攻击途径。
取值范围：
<li>NETWORK 远程</li>
<li>ADJACENT_NETWORK 近邻</li>
<li>LOCAL 本地</li>
         * @type {string || null}
         */
        this.AccessVector = null;

        /**
         * AccessComplexity 攻击复杂度。
取值范围：
<li>HIGH 高</li>
<li>MEDIUM 中</li>
<li>LOW 低</li>
         * @type {string || null}
         */
        this.AccessComplexity = null;

        /**
         * Authentication 身份验证。
取值范围：
<li>MULTIPLE 多系统认证</li>
<li>SINGLE 单系统认证</li>
<li>NONE 无</li>
         * @type {string || null}
         */
        this.Authentication = null;

        /**
         * ConfidentialityImpact 机密性影响。
取值范围：
<li>NONE 无</li>
<li>PARTIAL 部分</li>
<li>COMPLETE 完整</li>
         * @type {string || null}
         */
        this.ConImpact = null;

        /**
         * IntegrityImpact 完整性影响。
取值范围：
<li>NONE 无</li>
<li>PARTIAL 部分</li>
<li>COMPLETE 完整</li>
         * @type {string || null}
         */
        this.IntegrityImpact = null;

        /**
         * AvailabilityImpact 可用性影响。
取值范围：
<li>NONE 无</li>
<li>PARTIAL 部分</li>
<li>COMPLETE 完整</li>
         * @type {string || null}
         */
        this.AvailabilityImpact = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CVSS = 'CVSS' in params ? params.CVSS : null;
        this.AccessVector = 'AccessVector' in params ? params.AccessVector : null;
        this.AccessComplexity = 'AccessComplexity' in params ? params.AccessComplexity : null;
        this.Authentication = 'Authentication' in params ? params.Authentication : null;
        this.ConImpact = 'ConImpact' in params ? params.ConImpact : null;
        this.IntegrityImpact = 'IntegrityImpact' in params ? params.IntegrityImpact : null;
        this.AvailabilityImpact = 'AvailabilityImpact' in params ? params.AvailabilityImpact : null;

    }
}

/**
 * DescribeKBComponent请求参数结构体
 * @class
 */
class DescribeKBComponentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件的PURL
         * @type {PURL || null}
         */
        this.PURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PURL) {
            let obj = new PURL();
            obj.deserialize(params.PURL)
            this.PURL = obj;
        }

    }
}

/**
 * License约束信息。
 * @class
 */
class LicenseRestriction extends  AbstractModel {
    constructor(){
        super();

        /**
         * license约束的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * license约束的描述。
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 与输入组件相关的漏洞信息摘要信息。
 * @class
 */
class ComponentVulnerabilitySummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于匹配漏洞的PURL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PURL || null}
         */
        this.PURL = null;

        /**
         * 该组件是否包含修复漏洞的官方补丁
         * @type {boolean || null}
         */
        this.CanBeFixed = null;

        /**
         * 修复漏洞的组件版本号
         * @type {string || null}
         */
        this.FixedVersion = null;

        /**
         * 漏洞影响的组件版本号
         * @type {string || null}
         */
        this.AffectedVersion = null;

        /**
         * 漏洞影响组件
         * @type {string || null}
         */
        this.AffectedComponent = null;

        /**
         * 漏洞在该产品中的风险等级
<li>Critical</li>
<li>High</li>
<li>Medium</li>
<li>Low</li>
         * @type {string || null}
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

        if (params.PURL) {
            let obj = new PURL();
            obj.deserialize(params.PURL)
            this.PURL = obj;
        }
        this.CanBeFixed = 'CanBeFixed' in params ? params.CanBeFixed : null;
        this.FixedVersion = 'FixedVersion' in params ? params.FixedVersion : null;
        this.AffectedVersion = 'AffectedVersion' in params ? params.AffectedVersion : null;
        this.AffectedComponent = 'AffectedComponent' in params ? params.AffectedComponent : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;

    }
}

/**
 * PURL(Package URL)用于定位一个产品或组件，见 https://github.com/package-url/purl-spec。
 * @class
 */
class PURL extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 组件所属的类型，如：github, gitlab, generic, deb, rpm, maven 等
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 组件名的前缀名，如github和gitlab的用户名，deb的操作系统，maven包的group id等
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 修饰组件的额外属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Qualifier> || null}
         */
        this.Qualifiers = null;

        /**
         * 相对于组件包根位置的子目录
         * @type {string || null}
         */
        this.Subpath = null;

        /**
         * 组件版本号
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Qualifiers) {
            this.Qualifiers = new Array();
            for (let z in params.Qualifiers) {
                let obj = new Qualifier();
                obj.deserialize(params.Qualifiers[z]);
                this.Qualifiers.push(obj);
            }
        }
        this.Subpath = 'Subpath' in params ? params.Subpath : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

module.exports = {
    DescribeKBComponentVulnerabilityRequest: DescribeKBComponentVulnerabilityRequest,
    ComponentVulnerabilityUnion: ComponentVulnerabilityUnion,
    LicenseUnion: LicenseUnion,
    DescribeKBComponentVulnerabilityResponse: DescribeKBComponentVulnerabilityResponse,
    LicenseSummary: LicenseSummary,
    Qualifier: Qualifier,
    CVSSV3Info: CVSSV3Info,
    Component: Component,
    DescribeKBVulnerabilityResponse: DescribeKBVulnerabilityResponse,
    DescribeKBLicenseResponse: DescribeKBLicenseResponse,
    VulnerabilityUnion: VulnerabilityUnion,
    LicenseDetail: LicenseDetail,
    DescribeKBVulnerabilityRequest: DescribeKBVulnerabilityRequest,
    VulnerabilityDetail: VulnerabilityDetail,
    DescribeKBComponentResponse: DescribeKBComponentResponse,
    VulnerabilitySummary: VulnerabilitySummary,
    DescribeKBLicenseRequest: DescribeKBLicenseRequest,
    CVSSV2Info: CVSSV2Info,
    DescribeKBComponentRequest: DescribeKBComponentRequest,
    LicenseRestriction: LicenseRestriction,
    ComponentVulnerabilitySummary: ComponentVulnerabilitySummary,
    PURL: PURL,

}
