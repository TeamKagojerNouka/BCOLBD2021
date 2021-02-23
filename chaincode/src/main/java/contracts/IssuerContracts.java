package contracts;

import models.Document;
import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.*;
import org.hyperledger.fabric.shim.ChaincodeStub;
import util.GsonUtil;

@Contract(
    name = "Issuer Document Contract",
    info = @Info(
        title = "Issuer Document Contract",
        description = "The super mega ultra document contract",
        version = Const.ISSUER_CONTRACT_VERSION,
        license = @License(
            name = "Apache 2.0 License",
            url = "http://www.apache.org/licenses/LICENSE-2.0.html"
        ),
        contact = @Contact(
            email = "kagojernouka@gmail.com",
            name = "Issuer Document Contract",
            url = "www.kagojernouka.com"
        )
    )
)
@Default
public class IssuerContracts implements ContractInterface {

    @Transaction()
    public void initLedger(final Context ctx) {
        ChaincodeStub stub = ctx.getStub();

        String[] initialDocs = {
            "{ \"issuer_id\": \"-1\", \"owner_id\": \"-1\", \"hash\": \"#\" }"
        };

        for (String initialDoc : initialDocs) {

            Document d = GsonUtil.fromJson(initialDoc, Document.class);
            String docState = GsonUtil.toJson(d);

            stub.putStringState(d.getHash(), docState);
        }
    }

}
