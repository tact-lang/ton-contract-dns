import { getHttpV4Endpoint } from "@orbs-network/ton-access";
import { TonClient4 } from "ton";
import { DNSContract } from './DNSContract';

describe('DNSContract', () => {
    it('should resolve root', async () => {
        let client = new TonClient4({ endpoint: await getHttpV4Endpoint() });
        let block = await client.getLastBlock();
        let config = await client.getConfig(block.last.seqno);
        // config.config.cell

        // const dns = DNSContract.fromAddress(
    });
});