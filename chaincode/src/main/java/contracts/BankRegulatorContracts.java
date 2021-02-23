package contracts;

import models.Credit;
import models.Document;
import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.annotation.*;
import org.hyperledger.fabric.shim.ChaincodeStub;
import util.GsonUtil;

@Contract(
    name = "Bank-Regulator Contract",
    info = @Info(
        title = "Bank-Regulator Contract",
        description = "The super mega ultra document contract",
        version = Const.BANK_REGULATOR_CONTRACT_VERSION,
        license = @License(
                name = "Apache 2.0 License",
                url = "http://www.apache.org/licenses/LICENSE-2.0.html"
        ),
        contact = @Contact(
                email = "kagojernouka@gmail.com",
                name = "Bank-Regulator Contract",
                url = "www.kagojernouka.com"
        )
    )
)
public class BankRegulatorContracts {

    @Transaction()
    public void initLedger(final Context ctx) {
        ChaincodeStub stub = ctx.getStub();

        String[] initialCredits = {
            "{ \"bank_id\": \"-1\", \"branch_id\": \"-1\", \"document\": \"#\", \"amount\": \"0.0\", \"payback_date\": \"0\", \"paid_amount\": \"0.0\" }"
        };

        for (String initialCredit : initialCredits) {

            Credit c = GsonUtil.fromJson(initialCredit, Credit.class);
            String creditState = GsonUtil.toJson(c);

            // TODO: key might need to be sth different?
            stub.putStringState(c.getDocumentHash(), creditState);
        }
    }
}
