import {useEffect, useState} from "react";

const MyComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // componentDidMount - runs once after the initial render
        // Fetch data or perform any side-effects here
        fetchData();

        return () => {
            // componentWillUnmount - cleanup logic before component unmounts
            // Cancel subscriptions, timers, etc.
        };
    }, []); // Empty dependency array means this effect runs only once (like componentDidMount)

    useEffect(() => {
        // componentDidUpdate - runs whenever 'data' changes
        // Perform actions based on changes in 'data'
        if (data !== null) {
            // Do something with updated data
        }
    }, [data]); // Dependency array with 'data' means this effect runs whenever 'data' changes

    const fetchData = async () => {
        // Fetch data from an API
        const result = await fetch("https://api.example.com/data");
        const jsonData = await result.json();
        setData(jsonData);
    };

    return <div>{/* Render based on 'data' */}</div>;
};

// =========================================================================
import React, {Component} from "react";

class MyComponent2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: null,
        };
    }

    componentDidMount() {
        // Runs after the component output has been rendered to the DOM
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        // Runs when the component updates (state or props change)
        if (prevState.count !== this.state.count) {
            // Do something when 'count' state changes
        }
    }

    componentWillUnmount() {
        // Runs before the component is removed from the DOM
        // Clean up any timers, subscriptions, or other ongoing processes here
    }

    fetchData = async () => {
        // Simulated API call
        try {
            const response = await fetch("https://api.example.com/data");
            const jsonData = await response.json();
            this.setState({data: jsonData});
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    render() {
        return (
            <div>
                {/* Display 'data' or use it in the rendering logic */}
                <p>Data: {JSON.stringify(this.state.data)}</p>
                {/* Other JSX */}
            </div>
        );
    }
}

export default MyComponent;
