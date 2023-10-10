import NamesModel from "../models/NamesModel";
import { bodyParser } from "../helpers/bodyParser";
import { I_names } from "../../types";

const putName = (req:Request, res:Response) => {
    bodyParser(req)
        .then((resp:I_names) => {
            console.log(resp)
            NamesModel
                .findByIdAndUpdate(resp.id, {
                    name: resp.name,
                    number: Number(resp.number),
                    discription: resp.discription,
                })
                .then(() => res.write(JSON.stringify(resp)))
                .catch((err: Error) => {
                    res.status = 404;
                    res.write(JSON.stringify(err))
                })
                .finally(() => res.end());
        })
        .catch((err: Error) => {
            res.status = 404;
            res.write(JSON.stringify(err))
        });
};

export default putName;