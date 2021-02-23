package models;

import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;

import java.util.Objects;

@DataType()
public final class Credit {
/*
    {
        bank_id: <id>,
        branch_id: <id>,
        document: <hash>,
        amount: <decimal>,
        payback_date: <date>,
        paid_amount: <decimal>
    }
*/
    @Property()
    public final int bank_id;

    @Property()
    public final int branch_id;

    @Property()
    public final String document_hash;

    @Property()
    public final long payback_date;

    @Property()
    public final float amount;

    @Property()
    public final float paid_amount;

    public int getBankId() {
        return bank_id;
    }

    public int getBranchId() {
        return branch_id;
    }

    public String getDocumentHash() {
        return document_hash;
    }

    public long getPaybackDate() {
        return payback_date;
    }

    public float getPaidAmount() {
        return paid_amount;
    }

    public Credit(int bank_id, int branch_id, String document_hash, long payback_date, float amount, float paid_amount) {
        this.bank_id = bank_id;
        this.branch_id = branch_id;
        this.document_hash = document_hash;
        this.payback_date = payback_date;
        this.paid_amount = paid_amount;
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Credit credit = (Credit) o;
        return bank_id == credit.bank_id && branch_id == credit.branch_id && Objects.equals(document_hash, credit.document_hash);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bank_id, branch_id, document_hash);
    }
}
