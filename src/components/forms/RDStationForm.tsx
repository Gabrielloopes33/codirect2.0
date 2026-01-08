"use client";

import { useEffect, useRef } from "react";

interface RDStationFormProps {
    formId: string;
    formToken: string;
}

export function RDStationForm({ formId, formToken }: RDStationFormProps) {
    const isLoadedRef = useRef(false);

    useEffect(() => {
        // Prevent double loading
        if (isLoadedRef.current) return;
        
        const scriptId = "rdstation-forms-script";
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        const applyCustomStyles = () => {
            const container = document.getElementById(formId);
            if (!container) return;

            // Apply styles with a slight delay to ensure form is fully rendered
            setTimeout(() => {
                // Remove all background colors from all elements
                const allElements = container.querySelectorAll('*');
                allElements.forEach((el: any) => {
                    if (el.style.backgroundColor && el.tagName !== 'BUTTON') {
                        el.style.backgroundColor = 'transparent !important';
                    }
                });

                const inputs = container.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
                const selects = container.querySelectorAll('select');
                const buttons = container.querySelectorAll('button[type="submit"], input[type="submit"]');
                const labels = container.querySelectorAll('label');

                // Style inputs
                inputs.forEach((input: any) => {
                    input.style.cssText = `
                        width: 100% !important;
                        padding: 1rem 1.25rem !important;
                        background-color: transparent !important;
                        background: transparent !important;
                        border: 1.5px solid rgba(212, 175, 55, 0.25) !important;
                        border-radius: 0.75rem !important;
                        color: white !important;
                        font-size: 0.9375rem !important;
                        font-weight: 400 !important;
                        outline: none !important;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    `;

                    input.addEventListener('focus', function(this: any) {
                        this.style.borderColor = '#D4AF37';
                        this.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12), 0 8px 24px -4px rgba(212, 175, 55, 0.2)';
                        this.style.backgroundColor = 'transparent';
                        this.style.background = 'transparent';
                        this.style.transform = 'translateY(-1px)';
                    });

                    input.addEventListener('blur', function(this: any) {
                        this.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                        this.style.boxShadow = 'none';
                        this.style.backgroundColor = 'transparent';
                        this.style.background = 'transparent';
                        this.style.transform = 'translateY(0)';
                    });
                });

                // Style selects
                selects.forEach((select: any) => {
                    select.style.cssText = `
                        width: 100% !important;
                        padding: 1rem 1.25rem !important;
                        background-color: transparent !important;
                        background: transparent !important;
                        border: 1.5px solid rgba(212, 175, 55, 0.25) !important;
                        border-radius: 0.75rem !important;
                        color: white !important;
                        font-size: 0.9375rem !important;
                        font-weight: 400 !important;
                        outline: none !important;
                        cursor: pointer !important;
                        appearance: none !important;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
                        background-repeat: no-repeat !important;
                        background-position: right 1rem center !important;
                        background-size: 16px !important;
                        padding-right: 3rem !important;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    `;

                    select.addEventListener('focus', function(this: any) {
                        this.style.borderColor = '#D4AF37';
                        this.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.12), 0 8px 24px -4px rgba(212, 175, 55, 0.2)';
                        this.style.backgroundColor = 'transparent';
                        this.style.background = 'transparent';
                    });

                    select.addEventListener('blur', function(this: any) {
                        this.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                        this.style.boxShadow = 'none';
                        this.style.backgroundColor = 'transparent';
                        this.style.background = 'transparent';
                    });

                    // Style options
                    const options = select.querySelectorAll('option');
                    options.forEach((option: any) => {
                        option.style.cssText = `
                            background: #0d0d0d !important;
                            color: white !important;
                            padding: 0.75rem !important;
                        `;
                    });
                });

                // Style buttons
                buttons.forEach((button: any) => {
                    button.style.cssText = `
                        width: 100% !important;
                        padding: 1.125rem 1.5rem !important;
                        background: #D4AF37 !important;
                        color: #000000 !important;
                        font-weight: 700 !important;
                        font-size: 1.0625rem !important;
                        letter-spacing: 0.025em !important;
                        border: none !important;
                        border-radius: 0.75rem !important;
                        cursor: pointer !important;
                        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.35) !important;
                        margin-top: 0.75rem !important;
                        text-transform: uppercase !important;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    `;

                    button.addEventListener('mouseenter', function(this: any) {
                        this.style.background = '#F1D26C';
                        this.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.5), 0 0 0 3px rgba(212, 175, 55, 0.2)';
                        this.style.transform = 'translateY(-2px) scale(1.01)';
                    });

                    button.addEventListener('mouseleave', function(this: any) {
                        this.style.background = '#D4AF37';
                        this.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.35)';
                        this.style.transform = 'translateY(0) scale(1)';
                    });

                    button.addEventListener('mousedown', function(this: any) {
                        this.style.transform = 'translateY(0) scale(0.99)';
                    });

                    button.addEventListener('mouseup', function(this: any) {
                        this.style.transform = 'translateY(-2px) scale(1.01)';
                    });
                });

                // Style labels
                labels.forEach((label: any) => {
                    label.style.cssText = `
                        color: rgba(255, 255, 255, 0.95) !important;
                        font-size: 0.875rem !important;
                        font-weight: 600 !important;
                        margin-bottom: 0.5rem !important;
                        display: block !important;
                        letter-spacing: 0.015em !important;
                    `;
                });

                // Apply gap to form
                const form = container.querySelector('form');
                if (form) {
                    (form as any).style.cssText = `
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 1.25rem !important;
                    `;
                }

                // Remove white box from phone field flag
                const phoneFlagContainers = container.querySelectorAll('.iti__flag-container, .flag-container');
                phoneFlagContainers.forEach((flagContainer: any) => {
                    flagContainer.style.cssText = `
                        background: transparent !important;
                        border: none !important;
                        box-shadow: none !important;
                        padding: 0 !important;
                    `;
                    
                    // Find the actual flag image and make it bigger
                    const flagImg = flagContainer.querySelector('img, .iti__flag');
                    if (flagImg) {
                        (flagImg as any).style.cssText = `
                            width: 32px !important;
                            height: 32px !important;
                            object-fit: cover !important;
                            border-radius: 4px !important;
                        `;
                    }
                });

                // Reset padding for phone inputs
                const phoneInputs = container.querySelectorAll('input[type="tel"]');
                phoneInputs.forEach((input: any) => {
                    input.style.paddingLeft = '1.25rem !important';
                });
            }, 500);
        };

        const initForm = () => {
            if (window.RDStationForms) {
                const container = document.getElementById(formId);
                if (container && !isLoadedRef.current) {
                    container.innerHTML = "";
                    new window.RDStationForms(formId, formToken).createForm();
                    isLoadedRef.current = true;
                    
                    // Apply styles after form is created
                    applyCustomStyles();
                    
                    // Observe for dynamic changes
                    const observer = new MutationObserver(() => {
                        applyCustomStyles();
                    });
                    
                    observer.observe(container, {
                        childList: true,
                        subtree: true
                    });
                }
            }
        };

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
            script.async = true;
            script.defer = true;
            script.onload = initForm;
            document.body.appendChild(script);
        } else {
            const timer = setTimeout(initForm, 100);
            return () => clearTimeout(timer);
        }
    }, [formId, formToken]);

    return (
        <div className="w-full min-h-[300px] relative">
            <div
                role="main"
                id={formId}
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
