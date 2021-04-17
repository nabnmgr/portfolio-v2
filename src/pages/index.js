import React from 'react';

export default function Home() {
    return (
        <>
            <div>Hello world!</div>
            <div
                onClick={() => {
                    console.log('eslint and a11y plugin test');
                }}
            >
                Test
            </div>
        </>
    );
}
