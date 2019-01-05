import React from 'react';
import ReactDom from 'react-dom';

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/main.css";
import "../src/assets/css/photo.css";

import Layout from './js/components/Layout';
import {BrowserRouter} from 'react-router-dom';

const app = document.getElementById('root');
ReactDom.render(<BrowserRouter><Layout/></BrowserRouter>, app);
