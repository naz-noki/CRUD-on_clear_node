import NamesModel from '../models/NamesModel';

const getNames = (req:Request, res: Response) => {
    NamesModel
        .find()
        .then((resp:any[]) => res.write(JSON.stringify(resp)))
        .catch((err:Error) => {
            res.status = 404;
            res.write(JSON.stringify(err));
        })
        .finally(() => res.end());
};

export default getNames; 