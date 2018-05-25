const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const AgentClientElem = models.AgentClientElem;
const DescribeAgentClientsRequest = models.DescribeAgentClientsRequest;
const AuditApplyClientResponse = models.AuditApplyClientResponse;
const ModifyClientRemarkResponse = models.ModifyClientRemarkResponse;
const DescribeAgentBillsRequest = models.DescribeAgentBillsRequest;
const DescribeRebateInfosResponse = models.DescribeRebateInfosResponse;
const DescribeRebateInfosRequest = models.DescribeRebateInfosRequest;
const ModifyClientRemarkRequest = models.ModifyClientRemarkRequest;
const DescribeAgentBillsResponse = models.DescribeAgentBillsResponse;
const AuditApplyClientRequest = models.AuditApplyClientRequest;
const AgentBillElem = models.AgentBillElem;
const RebateInfoElem = models.RebateInfoElem;
const DescribeAgentClientsResponse = models.DescribeAgentClientsResponse;


/**
 * partners client
 * @class
 */
class PartnersClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("partners.tencentcloudapi.com", "2018-03-21", credential, region, profile);
    }
    
    /**
     * 代理商可查询自己名下全部返佣信息
     * @param {DescribeRebateInfosRequest} req
     * @param {function(string, DescribeRebateInfosResponse):void} cb
     * @public
     */
    DescribeRebateInfos(req, cb) {
        let resp = new DescribeRebateInfosResponse();
        this.request("DescribeRebateInfos", req, resp, cb);
    }

    /**
     * 代理商可查询自己及名下代客所有业务明细
     * @param {DescribeAgentBillsRequest} req
     * @param {function(string, DescribeAgentBillsResponse):void} cb
     * @public
     */
    DescribeAgentBills(req, cb) {
        let resp = new DescribeAgentBillsResponse();
        this.request("DescribeAgentBills", req, resp, cb);
    }

    /**
     * 代理商可查询自己名下待审核客户列表
     * @param {DescribeAgentClientsRequest} req
     * @param {function(string, DescribeAgentClientsResponse):void} cb
     * @public
     */
    DescribeAgentClients(req, cb) {
        let resp = new DescribeAgentClientsResponse();
        this.request("DescribeAgentClients", req, resp, cb);
    }

    /**
     * 代理商可以审核其名下申请中代客
     * @param {AuditApplyClientRequest} req
     * @param {function(string, AuditApplyClientResponse):void} cb
     * @public
     */
    AuditApplyClient(req, cb) {
        let resp = new AuditApplyClientResponse();
        this.request("AuditApplyClient", req, resp, cb);
    }

    /**
     * 代理商可以对名下客户添加备注、修改备注
     * @param {ModifyClientRemarkRequest} req
     * @param {function(string, ModifyClientRemarkResponse):void} cb
     * @public
     */
    ModifyClientRemark(req, cb) {
        let resp = new ModifyClientRemarkResponse();
        this.request("ModifyClientRemark", req, resp, cb);
    }


}
module.exports = PartnersClient;
