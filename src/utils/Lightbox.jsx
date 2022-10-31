/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import React, { Component } from "react";
import { Button } from "react-bootstrap"
import { FaFilePdf } from "react-icons/fa"

import ViewSDKClient from "./ViewSDKClient";

class Lightbox extends Component {
    constructor() {
        super();
        this.viewSDKClient = new ViewSDKClient();
    }

    previewFile = () => {
        this.viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            this.viewSDKClient.previewFile("", this.props.url, {
                /* Pass the embed mode option here */
                embedMode: "LIGHT_BOX"
            });
        });
    }

    render() {
        // Get the filename from the url
        const splittedFilePath = this.props.url.split('/')
        const fileName = splittedFilePath[splittedFilePath.length-1]
        return (
            <div id="container" className="light-box-container d-flex flex-column flex-lg-row justify-content-between align-items-start">
                <div className="order-1">
                    <Button onClick={ this.previewFile } className="lb-view-file-btn d-flex justify-content-between align-items-center fw-bolder bg-state2state rounded px-5">
                        <FaFilePdf className="me-2"/> View
                    </Button>
                </div>
                <div className="ms-lg-5 text-start order-0 text-break">
                    <p className="fs-4 fw-bold">{fileName}</p>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non, natus voluptates nostrum veritatis ipsum in harum ipsa libero fugit, ex accusantium quod dignissimos! Deserunt sint libero odio dignissimos, architecto quidem quaerat asperiores dicta voluptatem accusamus quo iusto nulla rerum!</p>
                </div>
            </div>
        );
    }
}

export default Lightbox;
