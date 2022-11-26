import React from 'react';

const Blog = () => {
    return (
        <div className='mb-32'> 
            <h2 className="text-4xl font-bold text-center text-primary mb-8">There are some common question!!!</h2>
            <div className='mb-6'>
                <h2 className="text-3xl font-bold">1. What are the different ways to manage a state in a React application?</h2>
                <p className="text-xl">Therefore, this article will clearly discuss the types of states such as Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future.</p>
            </div>

            <div className='mb-6'>
                <h2 className="text-3xl font-bold">2. How does prototypical inheritance work?</h2>
                <p className="text-xl">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>

            <div className='mb-6'>
                <h2 className="text-3xl font-bold">3. What is a unit test? Why should we write unit tests?</h2>
                <p className="text-xl">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages</p>
            </div>

            <div className='mb-6'>
                <h2 className="text-3xl font-bold">4. React vs. Angular vs. Vue?</h2>
                <p className="text-xl">Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%</p>
            </div>

        </div>
    );
};

export default Blog;