import GenerateID from "./MainCountingIDs";

const navbarItems = [
    { itemLinkRoute: "/offers", itemText: "offers" },
    { itemLinkRoute: "/signin", itemText: "sign in" },
    { itemLinkRoute: "/signup", itemText: "sign up" },
];

(() => GenerateID.insert(GenerateID.counting, navbarItems))();

export default navbarItems;