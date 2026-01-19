import { AxiosInstance } from "../../api/axios";
import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE, SET_ADDRESS_LIST, SET_CARD_LIST, SET_ORDER_LIST } from "../reducers/clientReducer";
import { toast } from "react-toastify";
import md5 from "md5";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });
export const setAddressList = (addressList) => ({ type: SET_ADDRESS_LIST, payload: addressList });
export const setCardList = (cardList) => ({ type: SET_CARD_LIST, payload: cardList });
export const setOrderList = (orderList) => ({ type: SET_ORDER_LIST, payload: orderList });

// ... existing fetchRoles ...

export const fetchOrders = () => (dispatch) => {
    AxiosInstance.get("/order")
        .then((res) => {
            dispatch(setOrderList(res.data));
        })
        .catch((err) => {
            console.error("Error fetching orders:", err);
            // toast.error("Siparişler yüklenemedi"); // Optional: fail silently or warn
        });
};

// ... existing fetchRoles ...

export const fetchCards = () => (dispatch) => {
    AxiosInstance.get("/user/card")
        .then((res) => {
            dispatch(setCardList(res.data));
        })
        .catch((err) => {
            console.error("Error fetching cards:", err);
        });
};

export const addCard = (card) => (dispatch) => {
    return AxiosInstance.post("/user/card", card)
        .then((res) => {
            toast.success("Card added successfully");
            dispatch(fetchCards());
        })
        .catch((err) => {
            console.error("Error adding card:", err);
            toast.error(err.response?.data?.message || "Failed to add card");
            throw err;
        });
};

export const updateCard = (card) => (dispatch) => {
    return AxiosInstance.put("/user/card", card)
        .then((res) => {
            toast.success("Card updated successfully");
            dispatch(fetchCards());
        })
        .catch((err) => {
            console.error("Error updating card:", err);
            toast.error("Failed to update card");
            throw err;
        });
};

export const deleteCard = (id) => (dispatch) => {
    return AxiosInstance.delete(`/user/card/${id}`)
        .then((res) => {
            toast.success("Card deleted successfully");
            dispatch(fetchCards());
        })
        .catch((err) => {
            console.error("Error deleting card:", err);
            toast.error("Failed to delete card");
            throw err;
        });
};

export const fetchRoles = () => (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
        return;
    }

    AxiosInstance.get("/roles")
        .then((res) => {
            dispatch(setRoles(res.data));
        })
        .catch((err) => {
            console.error("Error fetching roles:", err);
        });
};

export const fetchAddresses = () => (dispatch) => {
    AxiosInstance.get("/user/address")
        .then((res) => {
            dispatch(setAddressList(res.data));
        })
        .catch((err) => {
            console.error("Error fetching addresses:", err);
        });
};

export const addAddress = (address) => (dispatch) => {
    return AxiosInstance.post("/user/address", address)
        .then((res) => {
            toast.success("Address added successfully");
            dispatch(fetchAddresses());
        })
        .catch((err) => {
            console.error("Error adding address:", err);
            toast.error(err.response?.data?.message || "Failed to add address");
            throw err;
        });
};

export const updateAddress = (address) => (dispatch) => {
    return AxiosInstance.put("/user/address", address)
        .then((res) => {
            toast.success("Address updated successfully");
            dispatch(fetchAddresses());
        })
        .catch((err) => {
            console.error("Error updating address:", err);
            toast.error("Failed to update address");
            throw err;
        });
};

export const deleteAddress = (id) => (dispatch) => {
    return AxiosInstance.delete(`/user/address/${id}`)
        .then((res) => {
            toast.success("Address deleted successfully");
            dispatch(fetchAddresses());
        })
        .catch((err) => {
            console.error("Error deleting address:", err);
            toast.error("Failed to delete address");
            throw err;
        });
};

export const loginUser = (credentials, navigate) => (dispatch) => {
    AxiosInstance.post("/login", credentials)
        .then((res) => {
            const { token, name, email, role_id } = res.data;

            const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?d=identicon`;

            const user = { name, email, role_id, md5: gravatarUrl, token };

            if (credentials.remember) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
            }

            AxiosInstance.defaults.headers.common["Authorization"] = token;
            dispatch(setUser(user));
            toast.success("Welcome back!");
            navigate(-1);
        })
        .catch((err) => {
            console.error("Login Error:", err);
            toast.error(err.response?.data?.message || "Login failed!");
        });
};

export const verifyToken = () => (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
        AxiosInstance.defaults.headers.common["Authorization"] = token;

        AxiosInstance.get("/verify")
            .then((res) => {
                const { name, email, role_id } = res.data;
                const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?d=identicon`;

                const user = { name, email, role_id, md5: gravatarUrl, token };

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                dispatch(setUser(user));
                dispatch(fetchAddresses()); // Fetch addresses after verification
                toast.success("Welcome back automatically!");
            })
            .catch((err) => {
                console.error("Token verification failed:", err);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                delete AxiosInstance.defaults.headers.common["Authorization"];
                delete AxiosInstance.defaults.headers.common["Authorization"];
            });
    }
};

export const createOrder = (orderPayload) => (dispatch) => {
    return AxiosInstance.post("/order", orderPayload)
        .then((res) => {
            // We might want to clear cart here, but verifying first
            return res.data;
        })
        .catch((err) => {
            console.error("Create Create Order Error:", err);
            throw err;
        });
};

export const logoutUser = (navigate) => (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete AxiosInstance.defaults.headers.common["Authorization"];

    dispatch(setUser({}));
    dispatch(setAddressList([]));
    dispatch(setOrderList([]));

    toast.success("Başarıyla çıkış yapıldı.");
    navigate("/");
};
