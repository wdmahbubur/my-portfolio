import React from 'react';
import Layout from '../component/Layout';

const blog1 = () => {
    return (
        <Layout>
            <div>
                <h2 className="text-3xl">About of SASS. Part-1</h2>
                <h3 className="text-2xl">What is SASS?</h3>
                <p>
                    The full meaning of SASS is a Syntactically Awesome Stylesheet. Designed by Hampton Catlin in 2008 and developed by Natalie Weizenbaum. SASS is a pre-processor of CSS. Now, what is the pre-processor?
                </p>
                <p>
                    A pre-processor is a type of program that converts a unique syntax into CSS. The job of the pre-processor is to reduce the repetition of the same CSS text over and over again and to create CSS easily in less time. Pre-processors have some features that are not included in ordinary CSS. For example: Declare Variable, Mixin, Nesting Selector, Inheritance Selector and so many.

                </p>
                <p>
                    ASS is an extension of CSS. SASS can easily carry out its activities with all versions of CSS.
                </p>
                <h3 className="text-2xl">Why use SASS??</h3>
                <p>
                    In simple CSS the same text has to be written over and over again so the code becomes much larger, depending on the project the code also becomes much more complex, which makes the general CSS more difficult to maintain. The advent of pre-processors to solve all these problems. Since SASS is a pre-processor, you can use variables, nested rules, mixins, classes, inheritance, built-in function, loop, etc. in SASS. Which will make your CSS a power flower. SASS will give you a kind of programming feel in CSS.
                </p>
            </div>
        </Layout>
    );
};

export default blog1;