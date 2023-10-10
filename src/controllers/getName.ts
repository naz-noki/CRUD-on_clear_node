import NamesModel from "../models/NamesModel";
import { bodyParser } from "../helpers/bodyParser";

const getName = (req:Request, res:Response) => {
    bodyParser(req)
        .then(<T>(resp: T) => {
            NamesModel
                .findById(resp.id)
                .then(<T>(nameInfo: T) => res.write(JSON.stringify(nameInfo)))
                .catch((err: Error) => {
                    res.status = 404;
                    res.write(JSON.stringify(err));
                })
                .finally(() => res.end());
        })
};

export default getName;