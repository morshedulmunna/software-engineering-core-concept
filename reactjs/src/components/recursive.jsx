const isObject = (data) => typeof data === "object" && data != null;

export const RecursiveComponent = ({data}) => {
    if (!isObject(data)) {
        console.log(data);
        return <li>"asd"{data}</li>;
    }

    const paris = Object.entries(data);
    console.log(paris);
    return (
        <>
            {paris.map(([key, value]) => {
                return (
                    <li key={key}>
                        {key}:
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                );
            })}
        </>
    );
};
