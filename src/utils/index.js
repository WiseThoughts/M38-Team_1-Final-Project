export const signUp = async (signObj, setter) => {
    try {
        let path = `${process.env.REACT_APP_REST_API}user`; //grab url from .env file http://localhost:5001/
        const res = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signObj),
    });
    const data = await res.json();
    setter(data.user.username);
    localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const logIn = async (username, password, setter) => {
    try{
        let path = `${process.env.REACT_APP_REST_API}login`;
        const res = await fetch(path, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(username, password)
        });
        const data = await res.json();
        setter(data.user.username);
        localStorage.setItem("myToken", data.token);
    }catch (error){
        console.log(error)
    }
}

export const updateFetch = async (filterObj, updateObj, setter) => {
    try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            filterObj,
            updateObj,
        }),
    });
        const data = await res.json();
        if (data.msg !== "Successfully Updated") {
        throw new Error(data.msg);
        }
        if (updateObj.username) {
        setter(updateObj.username);
        }
    } catch (error) {
        console.log(error);
    }
};