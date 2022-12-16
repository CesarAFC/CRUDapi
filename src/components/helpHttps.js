export const helpHttp = () => {
    
    const customFetch = ( endpoint, options ) => {
        const defaultHeader = {
            accept: "application/json",
        };

        //Evitar que quede cargando, end point no responde entonces cancelamos.
        const controller = new AbortController();
        options.signal = controller.signal;

        //si no nos pasan un metodo, dejamos por defecto a GET
        options.method = options.method || "GET";
        //Si no nos pasan headers, se dejan los defaultheaders
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;

        //Si el body no existe, lo igualamos a false para luego eliminarlo. No se puede mandar un body vacio o falso.
        //Lo igualamos a false para que no marque error.
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body

        //console.log(options);

        setTimeout(() => controller.abort(), 3000);

        //Si recibimos la espuesta ok, parsea la respuesta, sino rechaza la promesa y genera un objeto de error
        return  fetch(endpoint, options)
            .then( res => 
                res.ok 
                ? res.json() 
                : Promise.reject({
                        err: true,
                        status: res.status || "00",
                        statusText: res.statusText || "Ocurrio un error"
                    }) 
            )
            .catch((err) => err);
    }

    const get = (url, options = {} ) => customFetch(url, options);
    const post = (url, options = {} ) => {
        options.method = 'POST';
        return customFetch(url, options);
    }
    const put = (url, options = {}) => {
        options.method = 'PUT';
        return customFetch(url, options);
    }
    const del = (url, options = {}) => {
        options.method = 'DELETE';
        return customFetch(url, options);
    }

    //Valor y propiedad llevan el mismo nombre, se exportan asi
    return {
        get, 
        post,
        put,
        del,
    }
}

