import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse shadow-xl shadow-amber-200 my-28">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-blue-800 text-center font-medium">
                    What is the purpose of react router?
                </div>
                <div className="collapse-content text-blue-800">
                    <p>React Router and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. This is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>
            <div className="collapse shadow-xl shadow-amber-200 my-28">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-blue-800 text-center font-medium">
                    How does context API work?
                </div>
                <div className="collapse-content text-blue-800">
                    <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. With Context, every component in the component tree has access to whatever data we decide to put in our context.</p>
                </div>
            </div>
            <div className="collapse shadow-xl shadow-amber-200 my-28">
                <input type="checkbox" />
                <div className="collapse-title text-xl text-blue-800 font-medium text-center">
                    What is useRef hook in react?
                </div>
                <div className="collapse-content text-blue-800">
                    <p>The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

                        It can be used to access a DOM element directly. useRef() only returns one item. It returns an Object called current.

                        When we initialize useRef we set the initial value: useRef(0).

                        It's like doing this: `const count = current: 0`. We can access the count by using count.current.  It’s handy for keeping any mutable value around similar to useing instance fields in classes.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;