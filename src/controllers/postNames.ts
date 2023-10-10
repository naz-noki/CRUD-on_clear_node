import { bodyParser } from '../helpers/bodyParser';
import NamesModel from '../models/NamesModel';
import { I_names } from '../../types';

const postName = (req:Request, res:Response) => {
    bodyParser(req)
        .then((resp: I_names) => {
            const newName = new NamesModel({
                name: resp.name,
                number: resp.number,
                dicription: resp?.discription,
            });
            newName
                .save()
                .then(() => {
                    res.status = 202;
                    res.write(JSON.stringify(newName));
                })
                .catch((err: Error) => res.write(err))
                .finally(() => res.end());
        })
};

export default postName;