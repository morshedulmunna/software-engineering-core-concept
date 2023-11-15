import React, {useCallback, useMemo} from "react";
import Button from "./components/incc";
import ShowValue from "./components/showValue";

export default function App() {
    const [count, setCount] = React.useState(0);
    const [age, setAge] = React.useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const isCall = useMemo(() => {
        let i = 0;
        while (i < 3000000000) i++;
        return count % 2 === 0;
    }, [count]);

    return (
        <div>
            <ShowValue value={age} text={"age"}></ShowValue>
            <Button handler={decrementAge}>age++</Button>
            <div>--------</div>
            <div>{isCall ? "Even" : "Odd"}</div>
            <ShowValue value={count} text={"count"}></ShowValue>
            <Button handler={increment}>count++</Button>
        </div>
    );
}
