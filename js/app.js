"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';

const algo = require("./algorithms.js");

$( document ).ready(function() {
    console.log("Document ready.");
    
    algo.runAllAlgorithms(10000);
    
    ReactDOM.render(
        <HelloWorld />, 
        document.getElementById('react-render-container')
    );
});