import getNames from "./controllers/getNames";
import postName from "./controllers/postNames";
import putName from "./controllers/putName";
import deleteName from "./controllers/deleteName";
import getName from "./controllers/getName";

const NamesMethods = (req:Request, res:Response) => {
    if(req.method === 'GET') getNames(req, res);
    else if(req.method === 'POST') postName(req, res);
};

const NameMethods = (req:Request, res:Response) => {
    if(req.method === 'DELETE') deleteName(req, res);
    else if(req.method === 'PUT') putName(req, res);
    else if(req.method === 'GET') getName(req, res);
};

const router = (req: Request, res:Response) => {
    switch(req.url) {
        case '/names': {
            NamesMethods(req, res);
            break;
        };
        case '/name': {
            NameMethods(req, res);
            break;
        };
        default: {
            res.end();
            break;
        };
    };
};

export default router;