package models;

import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;
import util.GsonUtil;

import java.util.Objects;


@DataType()
public final class Document {

/*
    {
        issuer: <id>,
        owner: <id>,
        hash: <hash>
    }
*/

    @Property()
    private final int issuer_id;

    @Property()
    private final int owner_id;

    @Property()
    private final String hash;

    public int getIssuerId() {
        return issuer_id;
    }

    public int getOwnerId() {
        return owner_id;
    }

    public String getHash() {
        return hash;
    }

    public Document(int issuer_id, int owner_id, String hash) {
        this.issuer_id = issuer_id;
        this.owner_id = owner_id;
        this.hash = hash;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Document document = (Document) o;
        return issuer_id == document.issuer_id && owner_id == document.owner_id && Objects.equals(hash, document.hash);
    }

    @Override
    public int hashCode() {
        return Objects.hash(issuer_id, owner_id, hash);
    }

    @Override
    public String toString() {
        return GsonUtil.toJson(this);
    }
}
