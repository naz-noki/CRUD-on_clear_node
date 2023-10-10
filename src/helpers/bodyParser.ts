export const checkingCharacterInString = (prev:string, curr:string, next:string): string[] => {
    if(curr === '&') return [','];
    if(curr === '=') return [':'];

    const arr: string[] = [];

    if(
        prev === '&' || 
        prev === '='
    ) {
        arr.push('"');
        arr.push(curr);
        return arr;
    };

    if(
        next === '&' || 
        next === '='
    ) {
        arr.push(curr);
        arr.push('"');
        return arr;
    };

    return [curr];
};

export const parseToString = (str: string): Promise<string> => {
    return new Promise((res) => {
        let parsedString: string[] = [];
        for (const idx in str.split('')) {
            const prev: string = str.split('')[Number(idx)-1];
            const curr: string = str.split('')[Number(idx)];
            const next: string = str.split('')[Number(idx)+1];
            const el:string[] = checkingCharacterInString(prev, curr, next);
            parsedString.push(...el);
        };
        res(`{"${parsedString.join('')}"}`);
    });
};

export const bodyParser = <T>(req: Request): Promise<T> => {
    return new Promise((res, rej) => {
        let body: string = '';
        req
            .on('data', (data:Buffer) => {
                body += data.toString();
            })
            .on('end', () => {
                parseToString(body)
                    .then((resp:string) => res(JSON.parse(resp)));
            })
            .on('error', (err:Error) => {
                rej(err);
            });
    });
};