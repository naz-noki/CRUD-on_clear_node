import NamesModel from "../models/NamesModel";
import { bodyParser } from "../helpers/bodyParser";

const deleteName = (req:Request, res:Response) => {
    bodyParser(req)
        .then(<T>(resp:T) => {
            NamesModel
                .findByIdAndDelete(resp.id)
                .then(() => res.status = 204)
                .catch((err: Error) => res.write(JSON.stringify(err)))
                .finally(() => res.end());
        })
        .catch((err: Error) => res.write(JSON.stringify(err)));
};

export default deleteName;