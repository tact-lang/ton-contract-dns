import { Address, Contract, ContractProvider } from "ton-core";
import { DNSRecordCategory } from './DNSRecordCategory';
export class DNSContract implements Contract {

    static fromAddress(address: Address) {
        return new DNSContract(address);
    }

    readonly address: Address;

    constructor(address: Address) {
        this.address = address;
    }

    async getResolution(provider: ContractProvider, domain: string, category: DNSRecordCategory) {

    }
} 