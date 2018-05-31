const AbstractModel = require("../../common/abstract_model");

/**
 * DeleteProduct请求参数结构体
 * @class
 */
class DeleteProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;

    }
}

/**
 * GetDevice返回参数结构体
 * @class
 */
class GetDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {Device || null}
         */
        this.Device = null;

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

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * AppAddUser请求参数结构体
 * @class
 */
class AppAddUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = params.UserName || null;
        this.Password = params.Password || null;

    }
}

/**
 * GetDeviceData返回参数结构体
 * @class
 */
class GetDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备数据
         * @type {Object || null}
         */
        this.DeviceData = null;

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

        if (params.DeviceData) {
            let obj = new Object();
            obj.deserialize(params.DeviceData)
            this.DeviceData = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteRule返回参数结构体
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * GetDataHistory请求参数结构体
 * @class
 */
class GetDataHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表，允许最多一次100台
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

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

        /**
         * 查询数据量
         * @type {Array.<number> || null}
         */
        this.Size = null;

        /**
         * 时间排序（desc/asc）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceNames = params.DeviceNames || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.Size = params.Size || null;
        this.Order = params.Order || null;
        this.ScrollId = params.ScrollId || null;

    }
}

/**
 * AddTopic返回参数结构体
 * @class
 */
class AddTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic信息
         * @type {Topic || null}
         */
        this.Topic = null;

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

        if (params.Topic) {
            let obj = new Topic();
            obj.deserialize(params.Topic)
            this.Topic = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * AddProduct请求参数结构体
 * @class
 */
class AddProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称，同一区域产品名称需唯一，支持中文、英文字母、中划线和下划线，长度不超过31个字符，中文占两个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 鉴权模式（1：动态令牌，推荐使用动态令牌）
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 数据模版（json数组）
         * @type {Array.<string> || null}
         */
        this.DataTemplate = null;

        /**
         * 数据协议（native表示自定义，template表示数据模板，默认值为template）
         * @type {string || null}
         */
        this.DataProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = params.Name || null;
        this.Description = params.Description || null;
        this.AuthType = params.AuthType || null;
        this.DataTemplate = params.DataTemplate || null;
        this.DataProtocol = params.DataProtocol || null;

    }
}

/**
 * GetProduct返回参数结构体
 * @class
 */
class GetProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品信息
         * @type {Product || null}
         */
        this.Product = null;

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

        if (params.Product) {
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetDeviceLog返回参数结构体
 * @class
 */
class GetDeviceLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备日志
         * @type {Array.<Object> || null}
         */
        this.DeviceLog = null;

        /**
         * 查询游标
         * @type {Array.<string> || null}
         */
        this.ScrollId = null;

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

        if (params.DeviceLog) {
            this.DeviceLog = new Array();
            for (let z in params.DeviceLog) {
                let obj = new Object();
                obj.deserialize(params.DeviceLog[z]);
                this.DeviceLog.push(obj);
            }
        }
        this.ScrollId = params.ScrollId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetRule返回参数结构体
 * @class
 */
class GetRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则
         * @type {Rule || null}
         */
        this.Rule = null;

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

        if (params.Rule) {
            let obj = new Rule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetTopic返回参数结构体
 * @class
 */
class GetTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic信息
         * @type {Topic || null}
         */
        this.Topic = null;

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

        if (params.Topic) {
            let obj = new Topic();
            obj.deserialize(params.Topic)
            this.Topic = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetProducts返回参数结构体
 * @class
 */
class GetProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product列表
         * @type {Array.<Product> || null}
         */
        this.Products = null;

        /**
         * Product总数
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new Product();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.Total = params.Total || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteRule请求参数结构体
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = params.RuleId || null;

    }
}

/**
 * ActivateRule返回参数结构体
 * @class
 */
class ActivateRuleResponse extends  AbstractModel {
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
 * UpdateRule请求参数结构体
 * @class
 */
class UpdateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 查询
         * @type {RuleQuery || null}
         */
        this.Query = null;

        /**
         * 转发
         * @type {Array.<Object> || null}
         */
        this.Actions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = params.RuleId || null;
        this.Name = params.Name || null;
        this.Description = params.Description || null;

        if (params.Query) {
            let obj = new RuleQuery();
            obj.deserialize(params.Query)
            this.Query = obj;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Object();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

    }
}

/**
 * 查询
 * @class
 */
class RuleQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * Topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 过滤规则
         * @type {string || null}
         */
        this.Condition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = params.Field || null;
        this.Topic = params.Topic || null;
        this.Condition = params.Condition || null;

    }
}

/**
 * 应用用户
 * @class
 */
class AppUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用Id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 绑定设备列表
         * @type {Array.<Object> || null}
         */
        this.Devices = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = params.ApplicationId || null;
        this.UserName = params.UserName || null;
        this.NickName = params.NickName || null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new Object();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;

    }
}

/**
 * GetRules返回参数结构体
 * @class
 */
class GetRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteDevice请求参数结构体
 * @class
 */
class DeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

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
 * DeactivateRule返回参数结构体
 * @class
 */
class DeactivateRuleResponse extends  AbstractModel {
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
 * IssueDeviceControl请求参数结构体
 * @class
 */
class IssueDeviceControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 控制数据（json）
         * @type {string || null}
         */
        this.ControlData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;
        this.ControlData = params.ControlData || null;

    }
}

/**
 * UpdateRule返回参数结构体
 * @class
 */
class UpdateRuleResponse extends  AbstractModel {
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
 * PublishMsg返回参数结构体
 * @class
 */
class PublishMsgResponse extends  AbstractModel {
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
 * ResetDevice返回参数结构体
 * @class
 */
class ResetDeviceResponse extends  AbstractModel {
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
 * GetUser返回参数结构体
 * @class
 */
class GetUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {User || null}
         */
        this.User = null;

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

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * AddRule返回参数结构体
 * @class
 */
class AddRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则
         * @type {Rule || null}
         */
        this.Rule = null;

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

        if (params.Rule) {
            let obj = new Rule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetDeviceStatuses请求参数结构体
 * @class
 */
class GetDeviceStatusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表（单次限制1000个设备）
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceNames = params.DeviceNames || null;

    }
}

/**
 * AddRule请求参数结构体
 * @class
 */
class AddRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 查询
         * @type {RuleQuery || null}
         */
        this.Query = null;

        /**
         * 转发
         * @type {Array.<Object> || null}
         */
        this.Actions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = params.Name || null;
        this.Description = params.Description || null;

        if (params.Query) {
            let obj = new RuleQuery();
            obj.deserialize(params.Query)
            this.Query = obj;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Object();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

    }
}

/**
 * GetDeviceStatuses返回参数结构体
 * @class
 */
class GetDeviceStatusesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备状态列表
         * @type {Array.<DeviceStatus> || null}
         */
        this.DeviceStatuses = null;

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

        if (params.DeviceStatuses) {
            this.DeviceStatuses = new Array();
            for (let z in params.DeviceStatuses) {
                let obj = new DeviceStatus();
                obj.deserialize(params.DeviceStatuses[z]);
                this.DeviceStatuses.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ResetDevice请求参数结构体
 * @class
 */
class ResetDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

    }
}

/**
 * GetUser请求参数结构体
 * @class
 */
class GetUserRequest extends  AbstractModel {
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
 * 设备
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备密钥
         * @type {string || null}
         */
        this.DeviceSecret = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 设备信息
         * @type {Object || null}
         */
        this.DeviceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;
        this.DeviceSecret = params.DeviceSecret || null;
        this.UpdateTime = params.UpdateTime || null;
        this.CreateTime = params.CreateTime || null;

        if (params.DeviceInfo) {
            let obj = new Object();
            obj.deserialize(params.DeviceInfo)
            this.DeviceInfo = obj;
        }

    }
}

/**
 * AddUser返回参数结构体
 * @class
 */
class AddUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {User || null}
         */
        this.User = null;

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

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteTopic请求参数结构体
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = params.TopicId || null;
        this.ProductId = params.ProductId || null;

    }
}

/**
 * AddProduct返回参数结构体
 * @class
 */
class AddProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品信息
         * @type {Product || null}
         */
        this.Product = null;

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

        if (params.Product) {
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetDataHistory返回参数结构体
 * @class
 */
class GetDataHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据历史
         * @type {Array.<Object> || null}
         */
        this.DataHistory = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

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

        if (params.DataHistory) {
            this.DataHistory = new Array();
            for (let z in params.DataHistory) {
                let obj = new Object();
                obj.deserialize(params.DataHistory[z]);
                this.DataHistory.push(obj);
            }
        }
        this.ScrollId = params.ScrollId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 用户
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * app_id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户类型（1：国内，2：国际）
         * @type {number || null}
         */
        this.Area = null;

        /**
         * 计费类型（日结、月结）
         * @type {string || null}
         */
        this.BillingType = null;

        /**
         * 用户状态（0：正常，1：欠费，2：恶意）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Message = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = params.AppId || null;
        this.Area = params.Area || null;
        this.BillingType = params.BillingType || null;
        this.Status = params.Status || null;
        this.Message = params.Message || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;

    }
}

/**
 * UpdateProduct返回参数结构体
 * @class
 */
class UpdateProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新后的产品信息
         * @type {Product || null}
         */
        this.Product = null;

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

        if (params.Product) {
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetRules请求参数结构体
 * @class
 */
class GetRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = params.Offset || null;
        this.Length = params.Length || null;

    }
}

/**
 * GetTopics返回参数结构体
 * @class
 */
class GetTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic列表
         * @type {Array.<Topic> || null}
         */
        this.Topics = null;

        /**
         * Topic总数
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new Topic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.Total = params.Total || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * AddUser请求参数结构体
 * @class
 */
class AddUserRequest extends  AbstractModel {
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
 * PublishMsg请求参数结构体
 * @class
 */
class PublishMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 消息内容
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Qos(目前QoS支持0与1)
         * @type {number || null}
         */
        this.Qos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = params.Topic || null;
        this.Message = params.Message || null;
        this.Qos = params.Qos || null;

    }
}

/**
 * 设备状态
 * @class
 */
class DeviceStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备状态（inactive, online, offline）
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
        this.DeviceName = params.DeviceName || null;
        this.Status = params.Status || null;

    }
}

/**
 * GetProducts请求参数结构体
 * @class
 */
class GetProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = params.Offset || null;
        this.Length = params.Length || null;

    }
}

/**
 * AppAddUser返回参数结构体
 * @class
 */
class AppAddUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用用户
         * @type {AppUser || null}
         */
        this.AppUser = null;

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

        if (params.AppUser) {
            let obj = new AppUser();
            obj.deserialize(params.AppUser)
            this.AppUser = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 产品
 * @class
 */
class Product extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品Key
         * @type {string || null}
         */
        this.ProductKey = null;

        /**
         * 产品直连密钥
         * @type {string || null}
         */
        this.ProductSecret = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 产品规格
         * @type {number || null}
         */
        this.Standard = null;

        /**
         * 鉴权类型（0：直连，1：Token）
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 删除（0未删除）
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Message = null;

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
         * 数据模版
         * @type {Object || null}
         */
        this.DataTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.ProductKey = params.ProductKey || null;
        this.ProductSecret = params.ProductSecret || null;
        this.AppId = params.AppId || null;
        this.Name = params.Name || null;
        this.Description = params.Description || null;
        this.Domain = params.Domain || null;
        this.Standard = params.Standard || null;
        this.AuthType = params.AuthType || null;
        this.Deleted = params.Deleted || null;
        this.Message = params.Message || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;

        if (params.DataTemplate) {
            let obj = new Object();
            obj.deserialize(params.DataTemplate)
            this.DataTemplate = obj;
        }

    }
}

/**
 * AddTopic请求参数结构体
 * @class
 */
class AddTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.TopicName = params.TopicName || null;

    }
}

/**
 * 规则
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 查询
         * @type {RuleQuery || null}
         */
        this.Query = null;

        /**
         * 转发
         * @type {Array.<Object> || null}
         */
        this.Actions = null;

        /**
         * 已启动
         * @type {number || null}
         */
        this.Active = null;

        /**
         * 已删除
         * @type {number || null}
         */
        this.Deleted = null;

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
        this.RuleId = params.RuleId || null;
        this.AppId = params.AppId || null;
        this.Name = params.Name || null;
        this.Description = params.Description || null;

        if (params.Query) {
            let obj = new RuleQuery();
            obj.deserialize(params.Query)
            this.Query = obj;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Object();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }
        this.Active = params.Active || null;
        this.Deleted = params.Deleted || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;

    }
}

/**
 * 对象
 * @class
 */
class Object extends  AbstractModel {
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
 * UpdateProduct请求参数结构体
 * @class
 */
class UpdateProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据模版（json）
         * @type {string || null}
         */
        this.DataTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.Name = params.Name || null;
        this.Description = params.Description || null;
        this.DataTemplate = params.DataTemplate || null;

    }
}

/**
 * GetDeviceLog请求参数结构体
 * @class
 */
class GetDeviceLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表，最大支持100台
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

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

        /**
         * 查询数据量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 时间排序（desc/asc）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

        /**
         * 日志类型（comm/status）
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceNames = params.DeviceNames || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.Size = params.Size || null;
        this.Order = params.Order || null;
        this.ScrollId = params.ScrollId || null;
        this.Type = params.Type || null;

    }
}

/**
 * IssueDeviceControl返回参数结构体
 * @class
 */
class IssueDeviceControlResponse extends  AbstractModel {
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
 * AddDevice返回参数结构体
 * @class
 */
class AddDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {Device || null}
         */
        this.Device = null;

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

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetDevice请求参数结构体
 * @class
 */
class GetDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

    }
}

/**
 * ActivateRule请求参数结构体
 * @class
 */
class ActivateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = params.RuleId || null;

    }
}

/**
 * GetDeviceData请求参数结构体
 * @class
 */
class GetDeviceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

    }
}

/**
 * DeactivateRule请求参数结构体
 * @class
 */
class DeactivateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = params.RuleId || null;

    }
}

/**
 * DeleteTopic返回参数结构体
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
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
 * GetTopic请求参数结构体
 * @class
 */
class GetTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = params.TopicId || null;
        this.ProductId = params.ProductId || null;

    }
}

/**
 * GetDevices返回参数结构体
 * @class
 */
class GetDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备列表
         * @type {Array.<Device> || null}
         */
        this.Devices = null;

        /**
         * 设备总数
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new Device();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.Total = params.Total || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
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
 * Topic
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 消息最大生命周期
         * @type {number || null}
         */
        this.MsgLife = null;

        /**
         * 消息最大大小
         * @type {number || null}
         */
        this.MsgSize = null;

        /**
         * 消息最大数量
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * 已删除
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * Topic完整路径
         * @type {string || null}
         */
        this.Path = null;

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
        this.TopicId = params.TopicId || null;
        this.TopicName = params.TopicName || null;
        this.ProductId = params.ProductId || null;
        this.MsgLife = params.MsgLife || null;
        this.MsgSize = params.MsgSize || null;
        this.MsgCount = params.MsgCount || null;
        this.Deleted = params.Deleted || null;
        this.Path = params.Path || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;

    }
}

/**
 * GetDevices请求参数结构体
 * @class
 */
class GetDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.Offset = params.Offset || null;
        this.Length = params.Length || null;

    }
}

/**
 * GetProduct请求参数结构体
 * @class
 */
class GetProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;

    }
}

/**
 * AddDevice请求参数结构体
 * @class
 */
class AddDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称，唯一标识某产品下的一个设备
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

    }
}

/**
 * GetRule请求参数结构体
 * @class
 */
class GetRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = params.RuleId || null;

    }
}

/**
 * GetTopics请求参数结构体
 * @class
 */
class GetTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.Offset = params.Offset || null;
        this.Length = params.Length || null;

    }
}

module.exports = {
    DeleteProductRequest: DeleteProductRequest,
    GetDeviceResponse: GetDeviceResponse,
    AppAddUserRequest: AppAddUserRequest,
    GetDeviceDataResponse: GetDeviceDataResponse,
    DeleteRuleResponse: DeleteRuleResponse,
    GetDataHistoryRequest: GetDataHistoryRequest,
    AddTopicResponse: AddTopicResponse,
    AddProductRequest: AddProductRequest,
    GetProductResponse: GetProductResponse,
    GetDeviceLogResponse: GetDeviceLogResponse,
    GetRuleResponse: GetRuleResponse,
    GetTopicResponse: GetTopicResponse,
    GetProductsResponse: GetProductsResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    ActivateRuleResponse: ActivateRuleResponse,
    UpdateRuleRequest: UpdateRuleRequest,
    RuleQuery: RuleQuery,
    AppUser: AppUser,
    GetRulesResponse: GetRulesResponse,
    DeleteDeviceRequest: DeleteDeviceRequest,
    DeleteProductResponse: DeleteProductResponse,
    DeactivateRuleResponse: DeactivateRuleResponse,
    IssueDeviceControlRequest: IssueDeviceControlRequest,
    UpdateRuleResponse: UpdateRuleResponse,
    PublishMsgResponse: PublishMsgResponse,
    ResetDeviceResponse: ResetDeviceResponse,
    GetUserResponse: GetUserResponse,
    AddRuleResponse: AddRuleResponse,
    GetDeviceStatusesRequest: GetDeviceStatusesRequest,
    AddRuleRequest: AddRuleRequest,
    GetDeviceStatusesResponse: GetDeviceStatusesResponse,
    ResetDeviceRequest: ResetDeviceRequest,
    GetUserRequest: GetUserRequest,
    Device: Device,
    AddUserResponse: AddUserResponse,
    DeleteTopicRequest: DeleteTopicRequest,
    AddProductResponse: AddProductResponse,
    GetDataHistoryResponse: GetDataHistoryResponse,
    User: User,
    UpdateProductResponse: UpdateProductResponse,
    GetRulesRequest: GetRulesRequest,
    GetTopicsResponse: GetTopicsResponse,
    AddUserRequest: AddUserRequest,
    PublishMsgRequest: PublishMsgRequest,
    DeviceStatus: DeviceStatus,
    GetProductsRequest: GetProductsRequest,
    AppAddUserResponse: AppAddUserResponse,
    Product: Product,
    AddTopicRequest: AddTopicRequest,
    Rule: Rule,
    Object: Object,
    UpdateProductRequest: UpdateProductRequest,
    GetDeviceLogRequest: GetDeviceLogRequest,
    IssueDeviceControlResponse: IssueDeviceControlResponse,
    AddDeviceResponse: AddDeviceResponse,
    GetDeviceRequest: GetDeviceRequest,
    ActivateRuleRequest: ActivateRuleRequest,
    GetDeviceDataRequest: GetDeviceDataRequest,
    DeactivateRuleRequest: DeactivateRuleRequest,
    DeleteTopicResponse: DeleteTopicResponse,
    GetTopicRequest: GetTopicRequest,
    GetDevicesResponse: GetDevicesResponse,
    DeleteDeviceResponse: DeleteDeviceResponse,
    Topic: Topic,
    GetDevicesRequest: GetDevicesRequest,
    GetProductRequest: GetProductRequest,
    AddDeviceRequest: AddDeviceRequest,
    GetRuleRequest: GetRuleRequest,
    GetTopicsRequest: GetTopicsRequest,

}
