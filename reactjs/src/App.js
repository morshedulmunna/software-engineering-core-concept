import {RecursiveComponent} from "./components/recursive";

const myNestedObj = {
    key1: "value1",
    key2: {
        innerKey1: "innerKey1",
        innerKey2: {
            innerInnerKey1: "innerInnerKey1",
            innerHeight: "innerHeight",
        },
    },

    key3: "value",
};

export default function App() {
    return (
        <>
            <RecursiveComponent data={myNestedObj} />
        </>
    );
}
