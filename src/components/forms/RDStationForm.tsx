"use client";

import { useEffect } from "react";

interface RDStationFormProps {
    formId: string;
    formToken: string;
}

export function RDStationForm({ formId, formToken }: RDStationFormProps) {
    useEffect(() => {
        // Check if the script is already loaded
        const scriptId = "rdstation-forms-script";
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        const initForm = () => {
            if (window.RDStationForms) {
                new window.RDStationForms(formId, formToken).createForm();
            }
        };

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
            script.async = true;
            script.onload = initForm;
            document.body.appendChild(script);
        } else {
            // Script already exists, just initialize the form
            // Small delay to ensure the container is ready in the DOM
            const timer = setTimeout(initForm, 100);
            return () => clearTimeout(timer);
        }
    }, [formId, formToken]);

    return (
        <div className="w-full min-h-[400px] flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div
                role="main"
                id={`${formId}-${formToken}`}
                className="w-full"
            />
        </div>
    );
}

// Add global type for RD Station Forms
declare global {
    interface Window {
        RDStationForms: any;
    }
}
