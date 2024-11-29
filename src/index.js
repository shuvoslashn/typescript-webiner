"use strict";
// let message: string;
function createUser(user) {
    console.log("User Created");
}
createUser({
    id: 1,
    name: "John",
    email: "john@example.com",
    role: "admin",
    address: {
        street: "Mirpur, Dhaka",
        number: 1111,
    },
    projects: [],
    isActive: true,
    permissions: [],
});
function updateUser(user) {
    console.log("User update");
}
updateUser({
    name: "John",
});
const userStatusList = {
    john: "active",
    jane: "inactive",
    rahim: "pending",
    karim: "active",
};
