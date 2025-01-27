/*
 * Copyright 2020 NEM (https://nem.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */
// external dependencies
import { mapGetters } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
// child components
// @ts-ignore
import SignerFilter from '@/components/SignerFilter/SignerFilter.vue';
// @ts-ignore
import TransactionStatusFilter from '@/components/TransactionList/TransactionListFilters/TransactionStatusFilter/TransactionStatusFilter.vue';
//@ts-ignore
import ButtonRefresh from '@/components/ButtonRefresh/ButtonRefresh.vue';
import { Signer } from '@/store/Account';
import { AccountModel } from '@/core/database/entities/AccountModel';
import { Address } from 'twix-sdk';

@Component({
    components: { SignerFilter, TransactionStatusFilter, ButtonRefresh },
    computed: {
        ...mapGetters({
            currentAccount: 'account/currentAccount',
            signers: 'account/signers',
        }),
    },
})
export class TransactionListFiltersTs extends Vue {
    /**
     * Currently active account
     * @var {AccountModel}
     */
    protected currentAccount: AccountModel;

    /**
     * current signers
     */
    public signers: Signer[];

    /**
     * Hook called when the signer selector has changed
     * @protected
     */
    protected onSignerSelectorChange(address: string): void {
        // clear previous account transactions
        if (address) {
            this.$store.dispatch('account/SET_CURRENT_SIGNER', {
                address: Address.createFromRawAddress(address),
                reset: true,
                unsubscribeWS: false,
            });
        }
    }

    public refresh() {
        this.$store.dispatch('transaction/LOAD_TRANSACTIONS');
    }

    public downloadTransactions() {
        this.$emit('downloadTransactions');
    }

    /**
     * Hook called before the component is destroyed
     */
    beforeDestroy(): void {
        // reset the selected signer if it is not the current account
        if (this.currentAccount) {
            this.onSignerSelectorChange(this.currentAccount.address);
        }
    }
}
