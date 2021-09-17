import React, { useState, useRef } from "react";

import ForgetPassword from '../components/Auth/ForgetPassword'

import axios from "axios";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPasswordPage = () => {
    return (
        <div>
            <ForgetPassword />
        </div>
    )
}

export default ForgetPasswordPage
