const getCookie = (name) => {
    let value = ";" + document.cookie;
    let parts = value.split(`; ${name}=`);

    if(parts.length === 2) {
        return parts.pop().split(";").shift();
    }
};

const setCookie = (name, value, exp = 5) => {
    let date = new Date();

    date.setTime(date.getTime() + exp * 24*60*60*1000);

    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;

};

const deleteCookie = (name) => {
    document.cookie = name + `=; expires=Thu, 13 Mar 1995 10:00:00 GMT;`;

}

export {getCookie, setCookie, deleteCookie};
