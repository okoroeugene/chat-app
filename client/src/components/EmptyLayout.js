import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

const EmptyLayout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default EmptyLayout;
